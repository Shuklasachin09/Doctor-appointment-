// src/components/AppointmentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/appointments/create', {
        patientName,
        doctorName,
        date,
        time,
        reason,
      });

      setMessage('Appointment created successfully!');
      // Optionally clear the form
      setPatientName('');
      setDoctorName('');
      setDate('');
      setTime('');
      setReason('');
    } catch (error) {
      setMessage('Failed to create appointment');
    }
  };

  return (
    <>
    <h1 className ="heading">Create Appointment </h1>
    
      
   
        <div className = "form">
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
         <div>
            <label>Patient Name:</label>
           <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
           </div>
            <div>
          <label>Doctor Name:</label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
         </div>
         <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          </div>
          <div>
            <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          </div>
         <div>
          <label>Reason:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  
  
    </>
  );
    
};

export default AppointmentForm;
