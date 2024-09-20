// src/components/AppointmentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AppointmentList.css'

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      let retries = 3;
      while (retries > 0) {
        try {
          const response = await axios.get('http://localhost:5000/api/appointments');
          setAppointments(response.data);
          break;
        } catch (error) {
          console.error('Failed to fetch appointments', error);
          retries--;
          await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second before retrying
        }
      }
    };
    fetchAppointments();
  }, []);

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`);
      setAppointments(appointments.filter(appointment => appointment._id !== id));
    } catch (error) {
      console.error('Failed to delete appointment', error);
    }
  };
  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li className="list" key={appointment._id}>
            Name- {appointment.patientName} with Dr. {appointment.doctorName} on {new Date(appointment.date).toDateString()} at {appointment.time}
            <button className="btn" onClick={() => deleteAppointment(appointment._id)}>Delete</button>
        </li>
          
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
