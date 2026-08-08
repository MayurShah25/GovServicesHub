import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { number: '10k+', label: 'Vetted Candidates' },
    { number: '50+', label: 'Agencies Supported' },
    { number: '98%', label: 'Placement Success' },
    { number: '100%', label: 'Compliance Focus' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
