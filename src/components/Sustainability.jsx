import React, { useState } from 'react';
import './Sustainability.css';

export default function Sustainability() {
  const [carbonData, setCarbonData] = useState({
    distance: '',
    mode: 'car',
    carbon: 0
  });

  const ecoTips = [
    {
      title: "Choose Direct Flights",
      description: "Direct flights produce less CO2 per passenger than connecting flights",
      icon: "✈️"
    },
    {
      title: "Stay in Eco-Lodges",
      description: "Choose accommodations with green certifications and sustainable practices",
      icon: "🏨"
    },
    {
      title: "Use Public Transport",
      description: "Public transit, walking, and cycling reduce carbon footprint significantly",
      icon: "🚌"
    },
    {
      title: "Support Local",
      description: "Buying from local vendors reduces transportation emissions",
      icon: "🛒"
    },
    {
      title: "Minimize Waste",
      description: "Bring reusable items and avoid single-use plastics during travel",
      icon: "♻️"
    },
    {
      title: "Offset Your Carbon",
      description: "Contribute to reforestation and renewable energy projects",
      icon: "🌳"
    }
  ];

  const offsetPrograms = [
    {
      name: "Tree Planting Initiative",
      description: "Plant trees in deforested areas around the world",
      carbon: 1,
      cost: "$5",
      emoji: "🌳"
    },
    {
      name: "Renewable Energy",
      description: "Support solar and wind energy projects",
      carbon: 2.5,
      cost: "$10",
      emoji: "⚡"
    },
    {
      name: "Ocean Cleanup",
      description: "Help remove plastic from oceans",
      carbon: 1.5,
      cost: "$8",
      emoji: "🌊"
    }
  ];

  const calculateCarbon = () => {
    if (!carbonData.distance) return;
    const factors = { car: 0.21, flight: 0.255, train: 0.041, bus: 0.089 };
    const carbon = carbonData.distance * factors[carbonData.mode];
    setCarbonData({ ...carbonData, carbon: carbon.toFixed(2) });
  };

  return (
    <div className="sustainability-container">
      <header className="sustainability-header">
        <h1>🌳 Go Green - Sustainable Travel</h1>
        <p>Make a positive impact on the planet while traveling. Learn how to travel responsibly and offset your carbon footprint.</p>
      </header>

      {/* Carbon Calculator */}
      <section className="carbon-section">
        <h2>Carbon Footprint Calculator</h2>
        <div className="calculator-card">
          <div className="calculator-inputs">
            <div className="input-group">
              <label>Distance (km)</label>
              <input
                type="number"
                placeholder="Enter distance"
                value={carbonData.distance}
                onChange={(e) => setCarbonData({ ...carbonData, distance: e.target.value })}
              />
            </div>
            <div className="input-group">
              <label>Mode of Transport</label>
              <select value={carbonData.mode} onChange={(e) => setCarbonData({ ...carbonData, mode: e.target.value })}>
                <option value="car">🚗 Car</option>
                <option value="flight">✈️ Flight</option>
                <option value="train">🚂 Train</option>
                <option value="bus">🚌 Bus</option>
              </select>
            </div>
            <button className="btn-calculate" onClick={calculateCarbon}>Calculate</button>
          </div>
          {carbonData.carbon > 0 && (
            <div className="result-box">
              <p className="result-label">Estimated CO₂ Emissions</p>
              <p className="result-value">{carbonData.carbon} kg</p>
            </div>
          )}
        </div>
      </section>

      {/* Eco Tips */}
      <section className="eco-tips-section">
        <h2>Sustainable Travel Tips</h2>
        <div className="tips-grid">
          {ecoTips.map((tip, idx) => (
            <div key={idx} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offset Programs */}
      <section className="offset-section">
        <h2>Offset Your Carbon Footprint</h2>
        <p className="offset-intro">Support environmental projects to neutralize your travel emissions</p>
        <div className="offset-grid">
          {offsetPrograms.map((program, idx) => (
            <div key={idx} className="offset-card">
              <div className="offset-icon">{program.emoji}</div>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
              <div className="offset-info">
                <span className="carbon-amount">{program.carbon} tons CO₂</span>
                <span className="cost">{program.cost}</span>
              </div>
              <button className="btn-offset">Contribute</button>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <h2>Our Community Impact</h2>
        <div className="impact-stats">
          <div className="impact-card">
            <p className="impact-number">250K</p>
            <p className="impact-label">Trees Planted</p>
          </div>
          <div className="impact-card">
            <p className="impact-number">1.2M</p>
            <p className="impact-label">Tons CO₂ Offset</p>
          </div>
          <div className="impact-card">
            <p className="impact-number">50K</p>
            <p className="impact-label">Travelers Engaged</p>
          </div>
        </div>
      </section>
    </div>
  );
}