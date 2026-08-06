import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import ServiceFeature from '../../components/ServiceFeature';
import Button from '../../components/Button';

const GovernmentSolutionsPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageHero 
          title="Government Solutions" 
          subtitle="Empowering the public sector with innovative, secure, and scalable technology solutions."
        />
        
        <ServiceFeature 
          title="Transforming Public Service" 
          description="Gov Services Hub partners with defense, federal, and state agencies to modernize infrastructure, enhance cybersecurity, and leverage data analytics for better decision making."
          image="/assets/federal-government.png"
          features={[
            "Defense and Intelligence Support",
            "Federal Government Modernization",
            "State, Local, and Education (SLED) Solutions",
            "Compliant, Secure, and Scalable Delivery"
          ]}
        />

        <section className="section bg-light text-center">
          <div className="container">
            <h2 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>Explore Our Government Domains</h2>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button to="/government-solutions/defense-intelligence" variant="primary">Defense & Intelligence</Button>
              <Button to="/government-solutions/federal" variant="primary">Federal Government</Button>
              <Button to="/government-solutions/state-local" variant="primary">State, County & Education</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GovernmentSolutionsPage;
