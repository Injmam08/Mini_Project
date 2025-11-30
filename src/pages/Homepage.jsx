// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import RequestCoaching from '../features/travelCoaching/RequestCoaching';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Your Adventure Awaits with Safarnama</h1>
        <p>Explore immersive stories, connect with a community of travelers, and make a positive impact.</p>
        <Link to="/explore">
          <button>Start Exploring</button>
        </Link>
      </header>
      
      <section className="section">
        <RequestCoaching />
      </section>
    </div>
  );
};

export default HomePage;