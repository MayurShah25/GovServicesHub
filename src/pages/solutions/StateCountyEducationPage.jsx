import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import ServiceFeature from '../../components/ServiceFeature';

const StateCountyEducationPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageHero 
          title="State, County & Education" 
          subtitle="Tailored consulting and technology solutions for SLED organizations."
        />
        
        <ServiceFeature 
          title="Empowering Local Communities" 
          description="Gov Services Hub understands the unique budget constraints and operational requirements of State, Local, and Educational (SLED) institutions. We provide cost-effective, scalable technology solutions that improve citizen services and student outcomes."
          image="/assets/state-local.png"
          features={[
            "Strategic IT Consulting",
            "Educational Technology Support",
            "Local Government Digital Transformation",
            "Cost-Effective Staff Augmentation"
          ]}
        />
      </main>
      <Footer />
    </>
  );
};

export default StateCountyEducationPage;
