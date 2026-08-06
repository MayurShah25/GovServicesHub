import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

const CareersPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-header">
          <div className="container text-center">
            <h1>Careers</h1>
            <p>Join our mission to empower government innovation</p>
          </div>
        </div>
        <section className="section">
          <div className="container text-center">
            <h2>Current Openings</h2>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
              We are always looking for talented individuals to join our team. 
              Currently, there are no open positions, but please check back later or send us your resume.
            </p>
            <div style={{ marginTop: '40px' }}>
              <Button to="/contact" variant="primary">Send Resume</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
