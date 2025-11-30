// src/pages/ChallengesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const ChallengesPage = () => {
  const [challenges] = useState([
    {
      id: 1,
      title: "📸 Photo Proof",
      description: "Visit 5 UNESCO World Heritage Sites and share photos",
      reward: "Gold Badge",
      difficulty: "Medium",
      participants: 1250,
      completed: 480
    },
    {
      id: 2,
      title: "🍽️ Taste the World",
      description: "Try traditional dishes from 10 different countries",
      reward: "Silver Badge",
      difficulty: "Easy",
      participants: 2100,
      completed: 1680
    },
    {
      id: 3,
      title: "🗻 Peak Climber",
      description: "Climb mountains in 3 continents and document the journey",
      reward: "Platinum Badge",
      difficulty: "Hard",
      participants: 350,
      completed: 45
    },
    {
      id: 4,
      title: "🌍 Global Traveler",
      description: "Visit all 7 continents within a year",
      reward: "Diamond Badge",
      difficulty: "Extreme",
      participants: 150,
      completed: 8
    },
    {
      id: 5,
      title: "🤝 Community Helper",
      description: "Volunteer in 5 different countries and help local communities",
      reward: "Heart Badge",
      difficulty: "Medium",
      participants: 680,
      completed: 220
    },
    {
      id: 6,
      title: "🌳 Eco Warrior",
      description: "Stay at eco-lodges and offset 10 tons of carbon",
      reward: "Green Badge",
      difficulty: "Easy",
      participants: 1890,
      completed: 890
    }
  ]);

  const [userBadges] = useState([
    { name: "First Story", icon: "📝", earned: true },
    { name: "Explorer", icon: "🗺️", earned: true },
    { name: "Community Star", icon: "⭐", earned: true },
    { name: "Green Traveler", icon: "🌳", earned: false }
  ]);

  return (
    <div className="challenges-page">
      <header className="page-header-challenges">
        <div className="header-content">
          <h1>🏆 Challenges & Leaderboard</h1>
          <p>Participate in exciting travel challenges, earn badges, and compete with adventurers worldwide!</p>
        </div>
      </header>

      {/* User Badges Section */}
      <section className="badges-section">
        <h2>Your Badges</h2>
        <div className="badges-container">
          {userBadges.map((badge, idx) => (
            <div key={idx} className={`badge ${badge.earned ? 'earned' : 'locked'}`}>
              <div className="badge-icon">{badge.icon}</div>
              <p className="badge-name">{badge.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges List */}
      <section className="challenges-section">
        <h2>Active Challenges</h2>
        <div className="challenges-grid">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-header">
                <h3>{challenge.title}</h3>
                <span className={`difficulty ${challenge.difficulty.toLowerCase()}`}>{challenge.difficulty}</span>
              </div>
              <p className="challenge-description">{challenge.description}</p>
              <div className="challenge-stats">
                <div className="stat">
                  <span className="stat-label">Reward:</span>
                  <span className="stat-value">{challenge.reward}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Participants:</span>
                  <span className="stat-value">{challenge.participants}</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(challenge.completed / challenge.participants) * 100}%` }}></div>
              </div>
              <p className="progress-text">{challenge.completed} completed</p>
              <button className="join-btn">Join Challenge →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section className="leaderboard-section">
        <h2>🏅 Top Travelers</h2>
        <div className="leaderboard-table">
          <div className="leaderboard-header">
            <div className="rank">Rank</div>
            <div className="name">Traveler</div>
            <div className="points">Points</div>
            <div className="badges">Badges</div>
          </div>
          {[
            { rank: 1, name: "Injmamul Haque", points: 5420, badges: 12 },
            { rank: 2, name: "Md Faisal Hussain ", points: 4890, badges: 11 },
            { rank: 3, name: "Israr", points: 4890, badges: 11 },
            { rank: 4, name: "Asdullah", points: 4890, badges: 11 },
            { rank: 5, name: "Adnan", points: 4890, badges: 11 },
          ].map((entry) => (
            <div key={entry.rank} className="leaderboard-row">
              <div className="rank">#{entry.rank}</div>
              <div className="name">{entry.name}</div>
              <div className="points">{entry.points}</div>
              <div className="badges">{entry.badges} 🏆</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChallengesPage;