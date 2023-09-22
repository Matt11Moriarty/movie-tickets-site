const router = require('express').Router();
const { User , Movie , Seat } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll({
            include: [
                {
                    model: Seat,
                    attributes: ['isAvailable', 'seat_number']
                }
            ]
        });
        
        const movies = movieData.map((movie) => movie.get({ plain: true }))

        res.render('homepage', {
            movies,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;