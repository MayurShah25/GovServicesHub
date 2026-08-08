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
          subtitle="Empowering the public sector with elite, secure, and scalable technical talent."
        />
        
        <ServiceFeature 
          title="Staffing Public Service" 
          description="Gov Services Hub partners with defense, federal, and state agencies to supply the highly skilled personnel needed to modernize infrastructure, enhance cybersecurity, and leverage data analytics."
          image="/assets/gov-overview.png"
          features={[
            "Defense and Intelligence Talent",
            "Federal Government Modernization Teams",
            "State, Local, and Education (SLED) Staffing",
            "Compliant, Secure, and Cleared Personnel"
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
                At Gov Services Hub, we recognize that the public sector faces unique, unprecedented challenges. From rapid technological shifts to ever-increasing security threats, government agencies must modernize their operations and require the absolute best talent to do so safely and efficiently.
              </p>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                We serve as a trusted partner to defense, federal, and state agencies, supplying the elite technical professionals that drive digital transformation. Our deeply cleared personnel and specialized subject matter experts ensure that your mission-critical initiatives are executed flawlessly under the most demanding conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '50px' }}>
              <h2 className="section-title">Key Benefits</h2>
              <div className="section-divider center"></div>
              <p className="section-subtitle">Why agencies trust Gov Services Hub for talent</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🏛️</div>
                <h3 className="benefit-title">Mission-Aligned Talent</h3>
                <p className="benefit-desc">We provide professionals whose technical skills and background align perfectly with your agency's core mission objectives.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🛡️</div>
                <h3 className="benefit-title">Cleared Expertise</h3>
                <p className="benefit-desc">Our talent pool consists of thoroughly vetted and cleared personnel, ensuring absolute compliance with federal standards.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3 className="benefit-title">Scalable Workforces</h3>
                <p className="benefit-desc">Flexible staffing models that allow you to scale your technical teams efficiently as your agency's operational demands grow.</p>
              </div>
            </div>
          </div>
        </section>

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
