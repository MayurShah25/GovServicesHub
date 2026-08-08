import React from 'react';
import { Building, Plane, Stethoscope, Landmark, Briefcase, GraduationCap } from 'lucide-react';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const industries = [
    { name: 'Defense & Aerospace', icon: Plane },
    { name: 'Healthcare Services', icon: Stethoscope },
    { name: 'Financial Regulation', icon: Landmark },
    { name: 'Public Administration', icon: Building },
    { name: 'Legal & Justice', icon: Briefcase },
    { name: 'Education', icon: GraduationCap }
  ];

  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">Our Expertise</div>
          <h2>Industries We Serve</h2>
          <p className="section-subtitle">Delivering specialized solutions across federal sectors</p>
        </div>
        
        <div className="industries-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="industry-card">
                <div className="industry-icon-wrapper">
                  <Icon size={42} />
                </div>
                <h3>{industry.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
