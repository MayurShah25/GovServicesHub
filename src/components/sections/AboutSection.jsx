import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <div className="container about-container">
        <div className="about-content">
          <div className="badge">About Us</div>
          <h2>Dedicated to Empowering Government Innovation</h2>
          <p className="about-desc">
            At Gov Services Hub, we understand the critical nature of public sector projects. We provide top-tier IT staffing and technology solutions tailored specifically for government agencies, ensuring compliance, security, and efficiency.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Federal Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Compliance</p>
            </div>
          </div>
        </div>
        
        <div className="about-image-wrapper">
          <img 
            src="/assets/about.png" 
            alt="About Gov Services Hub" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
