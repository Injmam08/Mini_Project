// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Community from './components/Community.jsx';
import Sustainability from './components/Sustainability.jsx';
import Gamification from './components/Gamification.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/gamification" element={<Gamification />} />

            {/* fallback to Home for any unmatched path */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Safarnama. Travel, Share, Inspire.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;