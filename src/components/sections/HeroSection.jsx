import React from 'react';
import Button from '../Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tailored IT Staffing Solutions for the Federal Government
          </h1>
          <p className="hero-subtitle">
            Gov Services Hub is a trusted US government contractor, providing expert workforce solutions to accelerate and scale your projects.
          </p>
          <div className="hero-actions">
            <Button to="/services" variant="primary">Explore Services</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="/assets/hero-image.png" 
            alt="Government IT Staffing" 
            className="hero-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
