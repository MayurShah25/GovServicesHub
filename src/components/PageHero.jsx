import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, imagePattern = true }) => {
  return (
    <div className={`page-hero ${imagePattern ? 'has-pattern' : ''}`}>
      <div className="container page-hero-content text-center">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
      {imagePattern && (
        <div className="page-hero-pattern"></div>
      )}
    </div>
  );
};

export default PageHero;
