// src/features/storytelling/StoryViewer.jsx
import React from 'react';

const StoryViewer = ({ story }) => {
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <div style={{
        marginTop: '1rem',
        height: '400px',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        color: '#555',
        fontSize: '1.2rem'
      }}>
        [360° Video Player or AR View would be rendered here]
      </div>
      <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        Interact with story elements below.
      </p>
    </div>
  );
};

export default StoryViewer;