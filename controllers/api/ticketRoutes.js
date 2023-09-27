const express = require('express');
const router = require('express').Router();
const { Ticket , Seat , User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const ticketData = await Ticket.findAll(
            {
                where: {
                    user_id: req.session.user_id
                },
                raw: true
            }
        )
        console.log(ticketData);
        res.status(200).json(ticketData)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;