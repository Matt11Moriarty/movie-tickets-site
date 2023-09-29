const router = require('express').Router();
const { Movie , Seat } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
        const movies = movieData.map((movie) => movie.get({ plain: true }))
        res.render('homepage', {
            movies,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
    res.render('login');
  });

router.get('/confirmation', async (req, res) => {
  try {
      const movieId = req.query.movieId;
      const selectedSeats = JSON.parse(req.query.selectedSeats || '[]');
      res.render('confirmation', {
        movieId,
        selectedSeats,
        logged_in: req.session.logged_in
      })
  } catch (err) {
      res.status(500).json(err);
  }
  });

router.get('/movie/:id', withAuth, async (req, res) => {
    try {
        const movieData = await Movie.findByPk(req.params.id, {
            include: [
                {
                    model: Seat,
                    attributes: ['id', 'seatNumber', 'isAvailable']
                }
            ]
        })
        const movie = movieData.get({ plain: true });
        res.render('movie', {
            ...movie,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.get('/seatSelection', (req, res) => {
//     const availableSeats = [];
  
//     res.render('seatSelection', { seats: availableSeats });
//   });

// router.get('/seatSelection', (req, res) => {
//     const rows = [
//       { label: 'A', seats: [] },
//       { label: 'B', seats: [] },
//       { label: 'C', seats: [] },
//     ];
  
//     rows.forEach(row => {
//       for (let seatNumber = 1; seatNumber <= 10; seatNumber++) {
//         const reserved = true;
//         row.seats.push({ number: seatNumber, reserved });
//       }
//     });
//       res.render('seatSelection', { rows: rows });
//   });
  router.get('/about', (req, res) => {
    res.render('about')
  })

module.exports = router;