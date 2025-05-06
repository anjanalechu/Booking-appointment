const express = require('express');
const router = express.Router();
const controller = require('../controller/appointmentController');

router.get('/slots', controller.getAvailableSlots);
router.post('/book', controller.bookAppointment);

module.exports = router;
