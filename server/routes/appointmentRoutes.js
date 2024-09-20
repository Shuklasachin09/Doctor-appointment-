// server/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const Appointment = require('../models/Appointment');


// Route to create an appointment
router.post('/create', createAppointment);

// Route to get all appointments
router.get('/', getAppointments);
// Delete appointment route
router.delete('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;
