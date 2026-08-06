import React from 'react';
import { Code, Users, Search, Shield, Settings, Database } from 'lucide-react';
import ServiceCard from '../ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Staff Augmentation',
      description: 'Flexible, scalable IT teams designed to integrate seamlessly into your projects and meet federal standards.',
      icon: Users
    },
    {
      title: 'Application Development',
      description: 'Custom, secure software solutions built for the unique requirements of government agencies.',
      icon: Code
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Expert guidance on digital transformation, architecture, and technology planning.',
      icon: Search
    },
    {
      title: 'Cybersecurity',
      description: 'Robust security frameworks and compliance management to protect sensitive government data.',
      icon: Shield
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud migration and management services.',
      icon: Database
    },
    {
      title: 'Managed IT Services',
      description: 'End-to-end management of your IT infrastructure for optimal performance.',
      icon: Settings
    }
  ];

  return (
    <section className="section section-bg-light" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive IT solutions for the public sector</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
