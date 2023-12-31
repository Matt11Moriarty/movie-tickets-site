const express = require('express');
const router = require('express').Router();
const { Seat } = require('../../models');

router.get('/', (req, res) => {
    // Handle the route logic here, such as rendering a page
    res.render('seatSelection'); // Using a template engine like Handlebars
  });
  
router.post('/', (req, res) => {
  // Handle seat-saving logic here
  // You can save the selected seats to a database or perform other actions
  const selectedSeats = req.body.seats; // Assuming you are sending the selected seats in the request body
  console.log(selectedSeats)
  // Respond with a success message or data if needed
  res.json({ message: 'Seats saved successfully', data: selectedSeats });
});
  
// Example route for saving seats
router.post('/save', (req, res) => {
  // Handle seat-saving logic here
  res.redirect('/confirmation');//added
});

router.post('/seed', async (req, res) => {
  try {
    const newSeat = await Seat.create({
      ...req.body,
    });

    res.status(200).json(newSeat);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
