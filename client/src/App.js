import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Register from './components/Register';
import Login from './components/l';  // Ensure this file exists
import Navbar from './components/Navbar';
import Home from './components/Home';  // Ensure this file exists

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments/create" element={<AppointmentForm />} />
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </Router>
  );
};

export default App;
