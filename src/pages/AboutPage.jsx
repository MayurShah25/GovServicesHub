import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/sections/AboutSection';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-header">
          <div className="container text-center">
            <h1>About Us</h1>
            <p>Learn more about Gov Services Hub</p>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
