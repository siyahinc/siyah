import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import './pages/Disclaimer';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <StarBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;