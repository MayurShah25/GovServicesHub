import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon: Icon, image = '/assets/about.png' }) => {
  return (
    <div className="service-card">
      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
        <div className="service-icon-wrapper">
          <Icon size={28} className="service-icon" />
        </div>
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{description}</p>
        <button className="service-read-more">
          Read More 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
