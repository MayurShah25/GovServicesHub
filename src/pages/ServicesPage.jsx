import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-header">
          <div className="container text-center">
            <h1>Our Services</h1>
            <p>Comprehensive IT solutions for the public sector</p>
          </div>
        </div>
        <ServicesSection />
        <IndustriesSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
