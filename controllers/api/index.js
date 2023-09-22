const router = require('express').Router();
const userRoutes = require('./userRoutes');
const seatRoutes = require('./seatRoutes');

router.use('/users', userRoutes);
router.use('/seats', seatRoutes);

module.exports = router;