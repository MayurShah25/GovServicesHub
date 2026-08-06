import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import ServiceFeature from '../../components/ServiceFeature';
import Button from '../../components/Button';

const ServiceTemplatePage = ({ title, subtitle, description, features, image }) => {
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

        <section className="section bg-light text-center">
          <div className="container">
            <h2>Ready to transform your organization?</h2>
            <p style={{ marginTop: '20px', marginBottom: '30px', color: 'var(--text-secondary)' }}>
              Contact our experts today to discuss how we can support your mission.
            </p>
            <Button to="/contact" variant="primary">Get in Touch</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceTemplatePage;
