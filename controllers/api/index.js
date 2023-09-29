const router = require('express').Router();
const userRoutes = require('./userRoutes');
const seatSelectionRoutes = require('./seatRoutes');
const confirmationRoutes = require('./confirmationRoutes');
const ticketRoutes = require('./ticketRoutes');
const movieRoutes = require('./movieRoutes');

router.use('/tickets', ticketRoutes);
router.use('/users', userRoutes);
router.use('/seats', seatSelectionRoutes);
router.use('/confirmation', confirmationRoutes);
router.use('/movie', movieRoutes);

module.exports = router;