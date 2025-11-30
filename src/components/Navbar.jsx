import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { getUser, clearUser } from '../utils/auth';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(getUser());
  const location = useLocation();
  const navigate = useNavigate();

  const closeAll = () => setMobileOpen(false);
  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '');

  useEffect(() => {
    // Refresh current user on route change (so Navbar updates after login)
    setUser(getUser());
  }, [location]);

  const handleLogout = () => {
    clearUser();
    setUser(null);
    setMobileOpen(false);
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <NavLink to="/" className="brand-link" onClick={closeAll}>
            <span className="brand-icon">✈️</span>
            <span className="brand-name">Safarnama</span>
          </NavLink>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          <div className="nav-links-group">
            <NavLink to="/" className={linkClass} onClick={closeAll}>
              Home
            </NavLink>
            <NavLink to="/explore" className={linkClass} onClick={closeAll}>
               Explore Stories
            </NavLink>
            <NavLink to="/community" className={linkClass} onClick={closeAll}>
              Community
            </NavLink>
            <NavLink to="/challenges" className={linkClass} onClick={closeAll}>
               Challenges
            </NavLink>
            <NavLink to="/sustainability" className={linkClass} onClick={closeAll}>
              Go Green
            </NavLink>
            <NavLink to="/upload" className={linkClass} onClick={closeAll}>
              Share story
            </NavLink>
            <NavLink to="/mystories" className={linkClass} onClick={closeAll}>
              My Stories
            </NavLink>
          </div>
          <div className="nav-auth">
            {user ? (
              <div className="user-block">
                <span className="user-name">{user.name || user.email}</span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => linkClass({ isActive }) + ' login-btn'}
                onClick={closeAll}
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}