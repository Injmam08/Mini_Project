import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, saveUser } from '../utils/auth';
import './auth.css';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill all fields.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    const res = registerUser({ name, email, password });
    if (!res.ok) {
      setError(res.message);
      return;
    }

    saveUser({ name: res.user.name, email: res.user.email, loggedAt: new Date().toISOString() });
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        {error && <div className="auth-error">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <label>
            Confirm Password
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          </label>

          <button type="submit" className="auth-button">Create account</button>
        </form>
      </div>
    </div>
  );
}