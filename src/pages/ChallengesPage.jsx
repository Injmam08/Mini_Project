// src/pages/ChallengesPage.jsx
import React from 'react';
import ChallengesList from "../features/gamification/ChallengesList.jsx";
import UserBadges from "../features/gamification/UserBadge.jsx";

const ChallengesPage = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Gamification & Challenges</h1>
        <p>Participate in quizzes and scavenger hunts to earn badges and rewards!</p>
      </header>
      <UserBadges />
      <ChallengesList />
    </div>
  );
};

export default ChallengesPage;