import React from 'react';
import Button from '../Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag">ELITE TALENT SOLUTIONS</div>
          <h1>Connecting Elite Talent with Mission-Critical Roles</h1>
          <p className="hero-subtitle">
            We provide highly skilled, thoroughly vetted professionals to Federal, State, and Commercial organizations to drive your most critical initiatives forward.
          </p>
          <div className="hero-actions">
            <Button to="/services" variant="primary">Explore Services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="/assets/hero-image.png" 
            alt="Government IT Staffing" 
            className="hero-image" 
          />
          <div className="hero-badge hero-badge-top">
            <div className="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div className="badge-text">
              <span>Top Rated</span>
              <strong>Talent Partner</strong>
            </div>
          </div>
          <div className="hero-badge hero-badge-bottom">
            <div className="badge-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="badge-text">
              <strong>100%</strong>
              <span>Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
