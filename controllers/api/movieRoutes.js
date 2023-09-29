const router = require('express').Router();
const { Movie } = require('../../models');

router.post('/seed', async (req, res) => {
  try {
    const newMovie = await Movie.create({
      ...req.body,
    });

    res.status(200).json(newMovie);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
