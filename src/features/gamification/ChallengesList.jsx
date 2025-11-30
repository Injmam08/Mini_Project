import React from 'react';
import Card from '../../components/Card';
const ChallengesList = () => (
  <section className="section">
    <h2>Available Challenges</h2>
    <div className="grid-container">
      <Card><h3>Quiz: World Capitals</h3><p>Test your geography knowledge.</p><button>Participate</button></Card>
      <Card><h3>Scavenger Hunt: Local Landmarks</h3><p>Find hidden gems in your city.</p><button>Participate</button></Card>
    </div>
  </section>
);
export default ChallengesList;