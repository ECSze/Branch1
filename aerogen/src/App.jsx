import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from './assets/HomePage';
import Aircrafts from './assets/Aircrafts';
import ServicesPage from './assets/ServicesPage';
import LoginPage from './assets/Login';
import DevelopersPage from './assets/DevelopersPage'

function App() {
  

  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
         <Route path="/Aircrafts" element={<Aircrafts />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/DevelopersPage" element={<DevelopersPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
