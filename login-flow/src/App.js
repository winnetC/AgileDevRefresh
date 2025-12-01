// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Index route */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<h2>Welcome to the Dashboard!</h2>} />
      </Routes>
    </Router>
  );
};

export default App;