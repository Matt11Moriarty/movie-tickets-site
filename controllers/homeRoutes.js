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

module.exports = router;