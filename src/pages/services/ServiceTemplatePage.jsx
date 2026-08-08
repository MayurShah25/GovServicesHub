import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import ServiceFeature from '../../components/ServiceFeature';
import Button from '../../components/Button';
import './ServiceTemplatePage.css';

const ServiceTemplatePage = ({ title, subtitle, description, longDescription, features, image, benefits }) => {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageHero 
          title={title} 
          subtitle={subtitle}
        />
        
        <ServiceFeature 
          title={`Our ${title} Services`}
          description={description}
          features={features}
          image={image}
        />

        {longDescription && (
          <section className="section bg-white">
            <div className="container" style={{ maxWidth: '900px' }}>
              <div className="text-center" style={{ marginBottom: '40px' }}>
                <h2 className="section-title">Comprehensive Overview</h2>
                <div className="section-divider center"></div>
              </div>
              <div className="long-description-content">
                {longDescription.map((para, i) => (
                  <p key={i} className="lead-text" style={{ marginBottom: '24px' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {benefits && (
          <section className="section bg-light">
            <div className="container">
              <div className="text-center" style={{ marginBottom: '50px' }}>
                <h2 className="section-title">Key Benefits</h2>
                <div className="section-divider center"></div>
                <p className="section-subtitle">Why federal agencies choose our solutions</p>
              </div>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-desc">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section text-center service-cta-section">
          <div className="container">
            <h2 className="cta-title">Ready to transform your organization?</h2>
            <p className="cta-subtitle">
              Contact our experts today to discuss how we can support your mission.
            </p>
            <Button to="/contact" className="cta-button">Get in Touch</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceTemplatePage;
