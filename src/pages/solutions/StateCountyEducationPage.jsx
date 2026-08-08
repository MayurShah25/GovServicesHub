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
          subtitle="Tailored IT talent solutions for SLED organizations."
        />
        
        <ServiceFeature 
          title="Empowering Local Communities" 
          description="Gov Services Hub understands the unique budget constraints and operational requirements of State, Local, and Educational (SLED) institutions. We provide cost-effective, highly skilled IT professionals who help execute technology initiatives and improve citizen services."
          image="/assets/state-local.png"
          features={[
            "Strategic IT Consultants",
            "Educational Technology Specialists",
            "Digital Transformation Experts",
            "Cost-Effective Staff Augmentation"
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
                State and local governments, alongside educational institutions (SLED), are often tasked with delivering essential services under tight budgetary constraints. We specialize in supplying high-impact, cost-effective technical talent that bridges the gap between limited resources and the growing expectations of local communities.
              </p>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                By partnering with Gov Services Hub, SLED organizations can rapidly scale their IT teams. From hiring developers to build citizen engagement portals, to bringing on network engineers for expansive university infrastructure, our localized talent approach ensures you have the personnel to execute your vision.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '50px' }}>
              <h2 className="section-title">Key Benefits</h2>
              <div className="section-divider center"></div>
              <p className="section-subtitle">Why SLED organizations rely on our talent</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🎓</div>
                <h3 className="benefit-title">EdTech Specialists</h3>
                <p className="benefit-desc">Hire professionals experienced in modernizing classrooms and campuses with secure IT infrastructure.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏙️</div>
                <h3 className="benefit-title">Community Developers</h3>
                <p className="benefit-desc">Deploy software engineers who specialize in building citizen-facing applications that improve local engagement.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3 className="benefit-title">Budget Efficiency</h3>
                <p className="benefit-desc">Utilize flexible staff augmentation models tailored to fit the fiscal realities of local governments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StateCountyEducationPage;
