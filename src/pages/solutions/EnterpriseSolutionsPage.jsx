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
          subtitle="Bringing government-vetted technical talent to the private sector."
        />
        
        <ServiceFeature 
          title="Enterprise Talent Solutions" 
          description="We leverage our deep experience in highly regulated government environments to supply robust, secure, and highly skilled technical talent to commercial enterprises across various industries."
          image="/assets/enterprise.png"
          features={[
            "Cybersecurity Professionals",
            "Cloud Architects & Engineers",
            "Digital Transformation Consultants",
            "Business Intelligence Analysts"
          ]}
        />

        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Comprehensive Overview</h2>
              <div className="section-divider center"></div>
            </div>
            <div className="long-description-content">
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                In an era where cyber threats and regulatory requirements blur the lines between public and private sectors, commercial enterprises require IT professionals trained to government-grade standards. Gov Services Hub bridges this gap, bringing the rigor, security, and scale of federal technical talent to the commercial marketplace.
              </p>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                Whether you are a healthcare provider protecting patient data, a financial institution securing global transactions, or an emerging tech company needing scalable cloud infrastructure, our enterprise talent solutions provide the foundational human capital necessary for sustainable, secure growth.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '50px' }}>
              <h2 className="section-title">Key Benefits</h2>
              <div className="section-divider center"></div>
              <p className="section-subtitle">Why enterprises choose Gov Services Hub for talent</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🏢</div>
                <h3 className="benefit-title">Vetted Security Pros</h3>
                <p className="benefit-desc">Protect your corporate assets by hiring cybersecurity talent trained and trusted by the intelligence community.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h3 className="benefit-title">Agile Innovators</h3>
                <p className="benefit-desc">Accelerate your time-to-market by rapidly deploying agile developers and modern cloud architects.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3 className="benefit-title">Data Science Talent</h3>
                <p className="benefit-desc">Leverage our advanced data science and AI professionals to outpace competitors and uncover hidden market opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection />
      </main>
      <Footer />
    </>
  );
};

export default EnterpriseSolutionsPage;
