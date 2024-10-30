import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutSerai from './pages/AboutSerai';
import Insights from './pages/Insights';
import Partnerships from './pages/Partnerships';
import Research from './pages/Research';
import Contact from './pages/Contact';
import './reset.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/AboutSerai" element={<AboutSerai />} />
        <Route path="/Insights" element={<Insights />} />
        <Route path="/Partnerships" element={<Partnerships />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
