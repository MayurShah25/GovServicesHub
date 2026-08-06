import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
