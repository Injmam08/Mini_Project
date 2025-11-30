import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, saveUser } from '../utils/auth';
import './auth.css'; // added

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    const user = authenticateUser(email, password);
    if (!user) {
      setError('Invalid email or password.');
      return;
    }
    saveUser({ ...user, loggedAt: new Date().toISOString() });
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        {error && <div className="auth-error">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="auth-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;