import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, saveUser, registerUser } from '../utils/auth';
import './auth.css'; // added

function LoginPage() {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    resetMessages();
    if (!email || !password) return setError('Please enter email and password.');
    const user = authenticateUser(email.trim(), password);
    if (!user) return setError('Invalid email or password.');
    saveUser({ ...user, loggedAt: new Date().toISOString() });
    navigate('/');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    resetMessages();
    if (!name || !email || !password || !confirm) return setError('Please complete all fields.');
    if (password !== confirm) return setError('Passwords do not match.');
    const res = registerUser({ name: name.trim(), email: email.trim(), password });
    if (!res.ok) return setError(res.message || 'Unable to register.');
    // registration success — auto-login the new user
    saveUser({ ...res.user, loggedAt: new Date().toISOString() });
    setSuccess('Registration successful — you are now signed in.');
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-tabs" role="tablist" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <button
            className={`auth-tab ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => { setMode('signin'); resetMessages(); }}
            type="button"
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => { setMode('signup'); resetMessages(); }}
            type="button"
          >
            Sign Up
          </button>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        {mode === 'signin' ? (
          <form className="auth-form" onSubmit={handleSignIn}>
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
            <div style={{ marginTop: '0.75rem' }}>
              <button
                type="button"
                className="auth-button"
                style={{ background: 'transparent', border: 'none', color: '#2a9d8f', padding: 0, textDecoration: 'underline' }}
                onClick={() => { setMode('signup'); resetMessages(); }}
              >
                Don't have an account? Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignUp}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

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

            <label>
              Confirm Password
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="auth-button">Create Account</button>
            <div style={{ marginTop: '0.75rem' }}>
              <button
                type="button"
                className="auth-button"
                style={{ background: 'transparent', border: 'none', color: '#2a9d8f', padding: 0, textDecoration: 'underline' }}
                onClick={() => { setMode('signin'); resetMessages(); }}
              >
                Already have an account? Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;