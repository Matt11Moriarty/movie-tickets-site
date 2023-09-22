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
})

router.get('/movies/:id', async (req, res) => {
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
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;