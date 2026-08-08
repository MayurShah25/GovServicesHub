import React from 'react';
import { Code, Users, Search, Shield, Settings, Database } from 'lucide-react';
import ServiceCard from '../ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Staff Augmentation',
      description: 'Flexible, scalable IT teams designed to integrate seamlessly into your projects and meet rigorous government standards.',
      icon: Users,
      image: '/assets/service-staff.png'
    },
    {
      title: 'Application Development Talent',
      description: 'We supply elite software engineers and developers experienced in building custom, secure applications.',
      icon: Code,
      image: '/assets/service-app.jpg'
    },
    {
      title: 'IT Consulting & Strategy Experts',
      description: 'Access top-tier consultants for guidance on digital transformation, architecture, and technology planning.',
      icon: Search,
      image: '/assets/service-gov-support.jpg'
    },
    {
      title: 'Cybersecurity Professionals',
      description: 'Deploy highly cleared security analysts and engineers to manage robust security frameworks and compliance.',
      icon: Shield,
      image: '/assets/service-cyber.png'
    },
    {
      title: 'Cloud Infrastructure Engineers',
      description: 'Specialized talent for scalable and secure cloud migration, architecture, and management.',
      icon: Database,
      image: '/assets/service-cloud.jpg'
    },
    {
      title: 'Managed IT Specialists',
      description: 'Expert personnel to provide end-to-end management of your IT infrastructure for optimal performance.',
      icon: Settings,
      image: '/assets/service-data.jpg'
    }
  ];

  return (
    <section className="section section-bg-light" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Core Disciplines</h2>
          <p className="section-subtitle">Providing specialized talent across critical technology domains</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
