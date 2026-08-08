import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
