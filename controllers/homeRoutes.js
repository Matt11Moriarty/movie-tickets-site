const router = require('express').Router();
const { User , Movie , Seat } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
        const movies = movieData.map((movie) => movie.get({ plain: true }))
        console.log(movies);
        res.render('homepage', {
            movies,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
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
        console.log(movie);
        res.render('movie', {
            ...movie,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// Define a GET route to render the seat selection page
app.get('/seatSelection', (req, res) => {
    // Here, you can pass any data needed for rendering the seat selection page
    // For example, you can fetch available seats from your database and pass them as an object
    const availableSeats = [
      // Your seat data here...
    ];
  
    // Render the seat selection page and pass the data
    res.render('seatSelection', { seats: availableSeats });
  });

  app.get('/seatSelection', (req, res) => {
    // Define 'rows' or import it from another module
    const rows = [
      { label: 'A', seats: [] },
      { label: 'B', seats: [] },
      { label: 'C', seats: [] },
      // Add more rows as needed
    ];
  
    // Populate the seats array for each row
    rows.forEach(row => {
      for (let seatNumber = 1; seatNumber <= 10; seatNumber++) {
        // You can set reserved to true for seats that are already reserved
        const reserved = true;
        
        row.seats.push({ number: seatNumber, reserved });
      }
    });
  
    res.render('seatSelection', { rows: rows });
  });

module.exports = router;