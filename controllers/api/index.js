const router = require('express').Router();
const userRoutes = require('./userRoutes');
const seatSelectionRoutes = require('./seatRoutes');
const confirmationRoutes = require('./confirmationRoutes'); // Import the confirmation rout

router.use('/users', userRoutes);
router.use('/seats', seatSelectionRoutes);
router.use('/confirmation', confirmationRoutes);

module.exports = router;