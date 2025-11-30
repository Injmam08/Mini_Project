import React, { useState } from 'react';
import './Community.css';

export default function Community() {
  const [posts] = useState([
    {
      id: 1,
      author: "Injmamul Haque",
      avatar: "👦🏻",
      content: "Just finished a 3-week trek through Peru! The Machu Picchu sunrise was absolutely breathtaking. 🏔️",
      likes: "10",
      comments: 10,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Md Faisal Hussain",
      avatar: "👦🏻",
      content: "Found the best street food in Bangkok! These local vendors know what they're doing. 🍜",
      likes: 10,
      comments: 10,
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      author: "Israr",
      avatar: "👦🏻",
      content: "Sustainable travel tip: Always choose accommodations with eco-friendly practices. Small actions make big impacts! 🌱",
      likes:"10",
      comments: 10,
      timestamp: "6 hours ago"
    }
  ]);

  const [tips] = useState([
    "Pack reusable bottles and bags",
    "Use public transport whenever possible",
    "Support local businesses",
    "Respect local cultures and customs",
    "Leave no trace - take your trash with you",
    "Learn basic phrases in local languages"
  ]);

  return (
    <div className="community-container">
      <header className="community-header">
        <h1>👥 Community</h1>
        <p>Connect with fellow travelers, share experiences, and inspire each other's adventures</p>
      </header>

      <div className="community-content">
        {/* Main Feed */}
        <section className="feed-section">
          <div className="feed-composer">
            <div className="composer-header">Share Your Experience</div>
            <textarea className="composer-input" placeholder="What's on your mind? Share a story, a photo, or a travel tip..."></textarea>
            <div className="composer-footer">
              <button className="btn-post">Post 🚀</button>
            </div>
          </div>

          <div className="feed-posts">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-author">
                    <span className="avatar">{post.avatar}</span>
                    <div>
                      <p className="author-name">{post.author}</p>
                      <p className="post-time">{post.timestamp}</p>
                    </div>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>
                <div className="post-actions">
                  <button className="action-btn">👍 {post.likes}</button>
                  <button className="action-btn">💬 {post.comments}</button>
                  <button className="action-btn">📤 Share</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="community-sidebar">
          {/* Stats */}
          <div className="sidebar-widget">
            <h3>Community Stats</h3>
            <div className="stats-list">
              <div className="stat">
                <span className="stat-label">Members</span>
                <span className="stat-value">50</span>
              </div>
              <div className="stat">
                <span className="stat-label">Posts</span>
                <span className="stat-value">120</span>
              </div>
              <div className="stat">
                <span className="stat-label">Countries</span>
                <span className="stat-value">180</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="sidebar-widget">
            <h3>Travel Tips</h3>
            <ul className="tips-list">
              {tips.map((tip, idx) => (
                <li key={idx}>💡 {tip}</li>
              ))}
            </ul>
          </div>

          {/* Featured Members */}
          <div className="sidebar-widget">
            <h3>Featured Travelers</h3>
            <div className="members-list">
              {["Injmamul Haque", "Md Faisal Hussain", "Israr"].map((name, idx) => (
                <div key={idx} className="member-item">
                  <span className="member-avatar">👤</span>
                  <div>
                    <p className="member-name">{name}</p>
                    <p className="member-badge">⭐ 5.0 rating</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}