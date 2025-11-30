import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, clearUser } from '../utils/auth';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const onStorage = () => setUser(getUser());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    clearUser();
    setUser(null);
    navigate('/login'); // or '/signin' if you rename route
  };

  return (
    <nav className="navbar">
      <Link className="nav-logo" to="/">Safarnama</Link>

      <ul className="nav-menu">
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/sustainability">Sustainability</Link></li>

        <li className="nav-actions">
          {user ? (
            <>
              <span className="nav-user">{user.email}</span>
              <button className="btn-link" onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <Link className="signin-link" to="/login">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}