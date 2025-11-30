// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import RequestCoaching from '../features/travelCoaching/RequestCoaching';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Start Your Journey with Safarnama</h1>
          <p className="hero-subtitle">Discover and share unique travel stories</p>
          <Link to="/explore">
            <button className="btn btn-primary">
              Start Exploring
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Safarnama?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Explore Stories</h3>
            <p>Discover immersive travel narratives from explorers around the world. Get inspired by real experiences and hidden gems.</p>
            <Link to="/explore" className="feature-link">Read Stories →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Connect Community</h3>
            <p>Join a vibrant community of travel enthusiasts, share insights, and make meaningful connections with fellow adventurers.</p>
            <Link to="/community" className="feature-link">Join Community →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Take Challenges</h3>
            <p>Participate in exciting travel challenges, earn badges, and compete with friends on the leaderboard. Every adventure counts!</p>
            <Link to="/challenges" className="feature-link">View Challenges →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Go Green Travel</h3>
            <p>Learn sustainable travel practices, calculate your carbon footprint, and make eco-friendly choices for future generations.</p>
            <Link to="/sustainability" className="feature-link">Be Sustainable →</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Travel Stories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Travelers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">180+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25K</div>
            <div className="stat-label">CO₂ Offset (Tons)</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Share Your Journey?</h2>
          <p>Start uploading your travel stories and connect with the Safarnama community today!</p>
          <Link to="/upload">
            <button className="btn btn-accent">
              <span>📤</span> Upload Your First Story
            </button>
          </Link>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="section">
        <RequestCoaching />
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h2 className="section-title">Quick Links</h2>
        <div className="quick-links-grid">
          <Link to="/explore" className="quick-link-card">
            <span className="quick-link-icon">📚</span>
            <span className="quick-link-text">Latest Stories</span>
            <span className="quick-link-arrow">→</span>
          </Link>
          <Link to="/community" className="quick-link-card">
            <span className="quick-link-icon">💬</span>
            <span className="quick-link-text">Community Feed</span>
            <span className="quick-link-arrow">→</span>
          </Link>
          <Link to="/mystories" className="quick-link-card">
            <span className="quick-link-icon">📝</span>
            <span className="quick-link-text">My Stories</span>
            <span className="quick-link-arrow">→</span>
          </Link>
          <Link to="/challenges" className="quick-link-card">
            <span className="quick-link-icon">🎯</span>
            <span className="quick-link-text">My Challenges</span>
            <span className="quick-link-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;