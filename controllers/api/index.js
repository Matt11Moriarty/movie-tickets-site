const router = require('express').Router();
const userRoutes = require('./userRoutes');
const seatSelectionRoutes = require('./seatRoutes');
const confirmationRoutes = require('./confirmationRoutes'); // Import the confirmation rout

router.use('/users', userRoutes);
router.use('/seatSelection', seatSelectionRoutes);
router.use('/confirmation', confirmationRoutes);
router.use('/seatSelection', seatSelectionRoutes);

module.exports = router;