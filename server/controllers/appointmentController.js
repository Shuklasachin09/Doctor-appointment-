// server/controllers/appointmentController.js
const Appointment = require('../models/Appointment');

// Controller to create an appointment
const createAppointment = async (req, res) => {
  const { patientName, doctorName, date, time, reason } = req.body;

  try {
    const newAppointment = new Appointment({
      patientName,
      doctorName,
      date,
      time,
      reason,
    });
    console.log(newAppointment);
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Controller to get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { createAppointment, getAppointments };
