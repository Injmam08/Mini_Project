// src/pages/CommunityPage.jsx
import React from 'react';
import CommunityFeed from '../features/community/CommunityFeed';
import ShareStoryForm from '../features/community/ShareStoryForm';

const CommunityPage = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Community Hub</h1>
        <p>Share your own travel stories, give tips, and connect with fellow adventurers.</p>
      </header>
      <div className="community-layout">
        <ShareStoryForm />
        <CommunityFeed />
      </div>
    </div>
  );
};

export default CommunityPage;