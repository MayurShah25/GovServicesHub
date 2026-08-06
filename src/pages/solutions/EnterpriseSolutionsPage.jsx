import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import ServiceFeature from '../../components/ServiceFeature';
import IndustriesSection from '../../components/sections/IndustriesSection';

const EnterpriseSolutionsPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageHero 
          title="Commercial & Enterprise Solutions" 
          subtitle="Bringing government-grade security and scale to the private sector."
        />
        
        <ServiceFeature 
          title="Enterprise Excellence" 
          description="We leverage our deep experience in highly regulated, complex government environments to deliver robust, secure, and innovative technology solutions to commercial enterprises across various industries."
          image="/assets/enterprise.png"
          features={[
            "Enterprise-Grade Cybersecurity",
            "Scalable Cloud Architecture",
            "Digital Transformation Initiatives",
            "Business Intelligence & Analytics"
          ]}
        />

        <IndustriesSection />
      </main>
      <Footer />
    </>
  );
};

export default EnterpriseSolutionsPage;
