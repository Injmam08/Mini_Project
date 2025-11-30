import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/auth';
import { getStoriesByUser, deleteStory } from '../utils/stories';
import './auth.css';

export default function MyStoriesPage() {
  const navigate = useNavigate();
  const user = getUser();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    setStories(getStoriesByUser(user.email));
  }, [user, navigate]);

  const handleDelete = (id) => {
    deleteStory(id, user.email);
    setStories(getStoriesByUser(user.email));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">My Stories</h2>
        {stories.length === 0 ? (
          <p>No stories yet. <button className="auth-button" onClick={() => navigate('/upload')}>Write one</button></p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {stories.map(s => (
              <li key={s.id} style={{ marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
                <h3 style={{ margin: 0 }}>{s.title}</h3>
                <small style={{ color: '#666' }}>{new Date(s.createdAt).toLocaleString()}</small>
                <p style={{ marginTop: 8 }}>{s.content}</p>
                <button className="auth-button" style={{ background: '#ef4444' }} onClick={() => handleDelete(s.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}