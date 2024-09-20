// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // You can create a corresponding CSS file for styling


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Doctor Appointment System</h1>
        <p>Your one-stop solution for managing doctor appointments easily.</p>
      </header>
      <div className="home-content">
        <img  className='hero-image' src="/doctor.jpg" alt="" />
        <div className="links">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button">Register</Link>
        <Link to="/appointments/create" className="home-button">Create Appointment</Link>
        <Link to="/appointments" className="home-button">View Appointments</Link>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
