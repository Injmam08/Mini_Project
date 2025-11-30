import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUser } from '../utils/auth';
import { getStoriesByUser, deleteStory } from '../utils/stories';
import './PageStyles.css';

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
    if (window.confirm('Are you sure you want to delete this story?')) {
      deleteStory(id, user.email);
      setStories(getStoriesByUser(user.email));
    }
  };

  return (
    <div className="my-stories-page">
      <header className="page-header-mystories">
        <h1>📚 My Stories</h1>
        <p>Manage and view all your shared travel experiences</p>
      </header>

      {stories.length === 0 ? (
        <div className="no-stories">
          
          <h2>No Stories Yet</h2>
          <p>Start documenting your travel adventures!</p>
          <Link to="/upload">
            <button className="btn-write-story">Write Your First Story</button>
          </Link>
        </div>
      ) : (
        <div className="stories-list">
          <div className="stories-header">
            <p className="stories-count">You have <strong>{stories.length}</strong> story(ies)</p>
            <Link to="/upload">
              <button className="btn-new-story">+ Write New Story</button>
            </Link>
          </div>

          {stories.map((story) => (
            <div key={story.id} className="story-item">
              <div className="story-main">
                <h3>{story.title}</h3>
                <p className="story-destination"> {story.destination || 'Adventure'}</p>
                <p className="story-preview">{story.description || story.content.substring(0, 150)}...</p>
                <div className="story-meta">
                  <span className="story-date">
                     {new Date(story.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="story-category"> {story.category || 'Travel'}</span>
                </div>
              </div>
              <div className="story-actions">
                <button className="btn-edit"> Edit</button>
                <button 
                  className="btn-delete" 
                  onClick={() => handleDelete(story.id)}
                >
               Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}