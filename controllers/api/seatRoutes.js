const express = require('express');
const router = require('express').Router();
const { Seat } = require('../../models');

router.get('/', (req, res) => {
    res.render('seatSelection'); 
  });
  
router.post('/', (req, res) => {
  const selectedSeats = req.body.seats; 
  res.json({ message: 'Seats saved successfully', data: selectedSeats });
});
  
router.post('/save', (req, res) => {
  res.redirect('/confirmation');
});

module.exports = router;