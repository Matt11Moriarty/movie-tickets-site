const express = require('express');
const router = require('express').Router();
const qrCode = require('qrcode');
const { Ticket } = require('../../models');

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
        qrCode.toDataURL(ticketData, function (err, qrTicket) {
            if (err) throw err
            qrObj = {
                qrTicket
            }
            res.status(200).json(qrObj)
        });        
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;