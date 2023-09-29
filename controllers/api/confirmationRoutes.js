const express = require('express');
const router = express.Router();
const { Ticket } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const newSeatAssignments = await Ticket.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newSeatAssignments);
    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;