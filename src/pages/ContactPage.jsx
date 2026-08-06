import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/sections/ContactSection';

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-header">
          <div className="container text-center">
            <h1>Contact Us</h1>
            <p>Get in touch with our team</p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
