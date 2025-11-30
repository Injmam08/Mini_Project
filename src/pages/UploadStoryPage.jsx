import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/auth';
import { saveStory } from '../utils/stories';
import './auth.css';

export default function UploadStoryPage() {
  const navigate = useNavigate();
  const user = getUser();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Please add title and content.');
      return;
    }
    saveStory({ title, content, authorEmail: user.email });
    navigate('/mystories');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Upload Story</h2>
        {error && <div className="auth-error">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Title
            <input value={title} onChange={e => setTitle(e.target.value)} />
          </label>
          <label>
            Story
            <textarea value={content} onChange={e => setContent(e.target.value)} rows={6} />
          </label>
          <button type="submit" className="auth-button">Upload</button>
        </form>
      </div>
    </div>
  );
}

// example — place in your navbar component file (adjust filepath as needed)
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">Safarnama</Link>
      </div>

      <ul className="nav-right">
        <li>
          <Link to="/explore" className="nav-link">Explore</Link>
          <ul className="dropdown">
            <li><Link to="/explore" className="dropdown-link">Explore stories</Link></li>
            <li><Link to="/upload" className="dropdown-link">Upload Story</Link></li>
            <li><Link to="/mystories" className="dropdown-link">My Stories</Link></li>
          </ul>
        </li>

        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
}