// src/pages/ExplorePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const ExplorePage = () => {
  const [stories] = useState([
    {
      id: 1,
      title: "Lost in the Mountains of Nepal",
      author: "Injmamul Haque",
      image: "🏔️",
      category: "Adventure",
      description: "An incredible journey through the Himalayas discovering hidden monasteries and breathtaking views.",
      rating: 4.8
    },
    {
      id: 2,
      title: "Desert Dreams in Morocco",
      author: "Md Faisal Hussain",
      image: "🏜️",
      category: "Culture",
      description: "Experience the vibrant souks and stunning Sahara desert with local Berber communities.",
      rating: 4.9
    },
    {
      id: 3,
      title: "Island Paradise: Bali Diaries",
      author: "Israr",
      image: "🏝️",
      category: "Beach",
      description: "Discover the hidden temples, rice fields, and pristine beaches of the Indonesian paradise.",
      rating: 4.7
    },
    {
      id: 4,
      title: "Northern Lights in Iceland",
      author: "Injmamul Haque",
      image: "🌌",
      category: "Nature",
      description: "Witness the magical Aurora Borealis dancing across the Arctic sky in stunning detail.",
      rating: 5.0
    },
    {
      id: 5,
      title: "Ancient Wonders: Egypt",
      author: "Md Faisal Hussain",
      image: "🗿",
      category: "Historical",
      description: "Explore the pyramids, temples, and the Nile River that shaped human civilization.",
      rating: 4.6
    },
    {
      id: 6,
      title: "Tokyo to Kyoto: Japan Quest",
      author: "Israr",
      image: "🗾",
      category: "Urban & Nature",
      description: "Journey through modern Japan from bustling Tokyo to serene Kyoto temples.",
      rating: 4.8
    }
  ]);

  return (
    <div className="explore-page">
      <header className="page-header-explore">
        <div className="header-content">
          <h1>📖 Explore Stories</h1>
          <p>Discover immersive travel narratives from adventurers around the world. Get inspired by real experiences and hidden gems.</p>
        </div>
      </header>

      <section className="stories-filters">
        <div className="filter-group">
          <button className="filter-btn active">All Stories</button>
          <button className="filter-btn">Adventure</button>
          <button className="filter-btn">Culture</button>
          <button className="filter-btn">Nature</button>
          <button className="filter-btn">Beach</button>
        </div>
      </section>

      <section className="stories-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-image">
              <span className="story-emoji">{story.image}</span>
              <div className="story-category">{story.category}</div>
            </div>
            <div className="story-content">
              <h3>{story.title}</h3>
              <p className="story-author">By {story.author}</p>
              <p className="story-description">{story.description}</p>
              <div className="story-footer">
                <span className="story-rating">⭐ {story.rating}</span>
                <button className="read-btn">Read Story →</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="cta-explore">
        <h2>Have Your Own Adventure Story?</h2>
        <p>Share your travel experiences with our community</p>
        <Link to="/upload">
          <button className="btn-upload">Share Your Story</button>
        </Link>
      </section>
    </div>
  );
};

export default ExplorePage;