// src/pages/ExplorePage.jsx
import React from 'react';
import DestinationStories from '../features/storytelling/DestinationStories';

const ExplorePage = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Immersive Storytelling</h1>
        <p>Dive into 360° videos and augmented reality experiences from destinations around the globe.</p>
      </header>
      <DestinationStories />
    </div>
  );
};

export default ExplorePage;