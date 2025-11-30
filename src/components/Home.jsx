import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/HomePage.css';

// Force update - cache bust
export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Safarnama</h1>
          <p className="hero-subtitle">Discover. Share. Explore. Travel Stories Reimagined</p>
          <Link to="/explore">
            <button className="btn btn-primary">Start Exploring</button>
          </Link>
        </div>
      </section>

      {/* About Section 1 */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">What is Safarnama?</h2>
            <p className="about-text">
              Safarnama is a vibrant community platform where travelers from around the world share their authentic travel experiences. 
              Whether you're seeking inspiration for your next adventure or wanting to document your own journey, Safarnama is your perfect companion.
              Our platform connects wanderlust seekers, storytellers, and adventure enthusiasts in one beautiful space.
            </p>
          </div>
        </div>
      </section>

      {/* About Section 2 - Features */}
      <section className="features-about-section">
        <div className="about-container">
          <h2 className="about-title">Why Choose Safarnama?</h2>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">📖</div>
              <h3>Explore Stories</h3>
              <p>Discover authentic travel experiences and hidden gems from travelers worldwide.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">👥</div>
              <h3>Join Community</h3>
              <p>Connect with fellow travelers, share tips, and build meaningful travel friendships.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🏆</div>
              <h3>Earn Badges</h3>
              <p>Participate in challenges, climb the leaderboard, and unlock exclusive travel badges.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🌱</div>
              <h3>Travel Green</h3>
              <p>Calculate your carbon footprint and travel sustainably with our eco-friendly guides.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* About Section 4 - Stats */}
      

      {/* CTA Section */}
      <section className="cta-final-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of travelers sharing their stories every day</p>
          <div className="cta-buttons">
            <Link to="/upload">
              <button className="btn btn-accent">Upload Your Story</button>
            </Link>
            <Link to="/explore">
              <button className="btn btn-secondary">Explore Now</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}