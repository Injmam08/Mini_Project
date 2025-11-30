import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUser } from '../utils/auth';
import { saveStory } from '../utils/stories';
import './PageStyles.css';

export default function UploadStoryPage() {
  const navigate = useNavigate();
  const user = getUser();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('Adventure');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!user) {
    return (
      <div className="upload-page">
        <div className="login-required">
          <h2>📝 Please Sign In to Upload</h2>
          <p>You need to be logged in to share your travel stories</p>
          <Link to="/login">
            <button className="btn-primary-upload">Go to Login</button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !destination) {
      setError('Please fill in all required fields.');
      return;
    }
    saveStory({ 
      title, 
      description,
      content, 
      destination,
      category,
      authorEmail: user.email,
      createdAt: new Date().toISOString()
    });
    setSuccess('Story uploaded successfully! 🎉');
    setTimeout(() => navigate('/mystories'), 1500);
  };

  return (
    <div className="upload-page">
      <header className="page-header-upload">
        <h1>📤 Share Your Story</h1>
        <p>Document your incredible travel experiences and inspire others</p>
      </header>

      <div className="upload-form-container">
        <form onSubmit={handleSubmit} className="upload-form">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="form-group">
            <label>Story Title *</label>
            <input
              type="text"
              placeholder="e.g., Lost in the Mountains of Nepal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Destination *</label>
              <input
                type="text"
                placeholder="e.g., Nepal"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">
                <option>Adventure</option>
                <option>Culture</option>
                <option>Beach</option>
                <option>Nature</option>
                <option>Urban</option>
                <option>Food</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description (Brief Summary)</label>
            <input
              type="text"
              placeholder="Write a compelling one-liner about your story"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Your Story *</label>
            <textarea
              placeholder="Tell us about your incredible journey, what you saw, who you met, and what you learned..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-textarea"
              rows="8"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Publish Story 🚀</button>
            <Link to="/">
              <button type="button" className="btn-cancel">Cancel</button>
            </Link>
          </div>
        </form>

        <div className="upload-tips">
          <h3>💡 Tips for a Great Story</h3>
          <ul>
            <li>Be specific and descriptive - help readers visualize your journey</li>
            <li>Include personal insights and lessons learned</li>
            <li>Share practical tips and recommendations</li>
            <li>Use emojis to make your story more engaging</li>
            <li>Mention locals you met and their stories</li>
          </ul>
        </div>
      </div>
    </div>
  );
}