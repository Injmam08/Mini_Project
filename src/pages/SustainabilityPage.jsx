// src/pages/SustainabilityPage.jsx
import React from 'react';
import EcoOptions from '../features/sustainability/EcoOptions';
import CarbonOffset from '../features/sustainability/CarbonOffset';

const SustainabilityPage = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Sustainable Tourism</h1>
        <p>Learn how to travel responsibly, offset your carbon footprint, and join eco-initiatives.</p>
      </header>
      <EcoOptions />
      <CarbonOffset />
    </div>
  );
};

export default SustainabilityPage;