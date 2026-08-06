import React from 'react';
import './ServiceFeature.css';

const ServiceFeature = ({ title, description, image, features, reversed = false }) => {
  return (
    <section className={`service-feature-section section ${reversed ? 'bg-light' : ''}`}>
      <div className="container">
        <div className={`service-feature-row ${reversed ? 'reversed' : ''}`}>
          <div className="service-feature-content">
            <h2 className="service-feature-title">{title}</h2>
            <div className="section-divider"></div>
            <p className="service-feature-desc">{description}</p>
            {features && features.length > 0 && (
              <ul className="service-feature-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="service-feature-image-wrapper">
            {image ? (
              <img src={image} alt={title} className="service-feature-image" />
            ) : (
              <div className="service-feature-placeholder">
                <div className="placeholder-pattern"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
