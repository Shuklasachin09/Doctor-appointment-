// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create a corresponding CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Doctor Appointment System</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/register" className="navbar-link">Register</Link>
        <Link to="/appointments/create" className="navbar-link">Create Appointment</Link>
        <Link to="/appointments" className="navbar-link">View Appointments</Link>
      </div>
    </nav>
  );
};

export default Navbar;
