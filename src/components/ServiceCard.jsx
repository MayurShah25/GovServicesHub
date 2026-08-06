import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        <Icon size={32} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
