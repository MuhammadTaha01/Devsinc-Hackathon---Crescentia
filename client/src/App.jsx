import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './Appointment';
import Billing from './Billing';
import './index.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Appointment />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
    </Router>
  );
};

export default App;

