const express = require('express');
const router = express.Router();
const { Seat, Movie } = require('../../models');

// Define a route for the "/confirmation" path
router.get('/', async (req, res) => {
 // Parse the selected seats data from query parameters
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



module.exports = router;