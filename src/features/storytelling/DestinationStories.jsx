// src/features/storytelling/DestinationStories.jsx
import React, { useState } from 'react';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import StoryViewer from './StoryViewer';

const mockStories = [
  { id: 1, title: 'Sunrise in Santorini', description: 'Experience a breathtaking 360° view of the sunrise over the Aegean Sea.' },
  { id: 2, title: 'Markets of Marrakesh', description: 'Immerse yourself in the vibrant sounds and sights of a bustling Moroccan souk.' },
  { id: 3, title: 'Rainforests of Costa Rica', description: 'Use AR to bring exotic birds and animals into your room.' },
];

const DestinationStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseStory = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <section className="section">
      <h2>Explore Destination Stories</h2>
      <div className="grid-container">
        {mockStories.map((story) => (
          <Card key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <button onClick={() => handleOpenStory(story)}>Experience Story</button>
          </Card>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseStory}>
        {selectedStory && <StoryViewer story={selectedStory} />}
      </Modal>
    </section>
  );
};

export default DestinationStories;