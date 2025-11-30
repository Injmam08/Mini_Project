import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => setMobileOpen(false);
  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '');

  return (
    <header className="navbar">
      <div className="nav-brand">
        <NavLink to="/" className={linkClass} onClick={closeAll}>Safarnama ✈️</NavLink>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(v => !v)}
      >
        ☰
      </button>

      <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/" className={linkClass} onClick={closeAll}>Home</NavLink>
        <NavLink to="/explore" className={linkClass} onClick={closeAll}>Explore Stories</NavLink>
        <NavLink to="/community" className={linkClass} onClick={closeAll}>Community</NavLink>
        <NavLink to="/challenges" className={linkClass} onClick={closeAll}>Challenges</NavLink>
        <NavLink to="/sustainability" className={linkClass} onClick={closeAll}>Go Green</NavLink>
        <NavLink to="/upload" className={linkClass} onClick={closeAll}>Upload Story</NavLink>
        <NavLink to="/mystories" className={linkClass} onClick={closeAll}>My Stories</NavLink>
        <NavLink to="/login" className={linkClass} onClick={closeAll}>Login</NavLink>
      </nav>
    </header>
  );
}