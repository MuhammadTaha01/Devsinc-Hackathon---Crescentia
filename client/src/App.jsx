import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RegisterPatient from './Pages/RegisterPatient'; // Ensure this component exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-patient" element={<RegisterPatient />} />
      </Routes>
    </Router>
  );
};

export default App;
