import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import DepartmentGrid from '../../components/DepartmentGrid';
import ServiceFeature from '../../components/ServiceFeature';

const FederalGovernmentPage = () => {
  const departments = [
    { name: "United States Department of Agriculture (USDA)", icon: "🌾" },
    { name: "United States Patent and Trademark Office (USPTO)", icon: "📜" },
    { name: "United States Department of Energy (DOE)", icon: "⚡" },
    { name: "United States Environmental Protection Agency (EPA)", icon: "🍃" },
    { name: "Department of State (DOS)", icon: "🌐" },
    { name: "United States Department of Homeland Security (DHS)", icon: "🛡️" },
    { name: "United States Department of Health and Human Services (HHS)", icon: "⚕️" },
    { name: "United States Department of Housing and Urban Development (HUD)", icon: "🏘️" }
  ];

  return (
    <>
      <Header />
      <main className="page-main">
        <PageHero 
          title="Federal Government Talent" 
          subtitle="Supplying the specialized professionals required to modernize civilian agencies."
        />
        
        <ServiceFeature 
          title="Staffing Civilian Innovation" 
          description="We provide elite IT professionals to federal civilian agencies, empowering them to modernize legacy systems, migrate to the cloud, and protect citizen data with top-tier cybersecurity practices."
          image="/assets/federal-government.png"
          features={[
            "IT Modernization Experts",
            "Cloud Migration Specialists",
            "Data Analysts & Scientists",
            "Software Developers"
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
                Federal civilian agencies face mounting pressure to modernize legacy systems, enhance service delivery to citizens, and navigate increasingly complex regulatory environments. Gov Services Hub is dedicated to empowering these agencies by supplying the precise technical talent needed to execute these critical initiatives.
              </p>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                We understand that every federal department has unique operational nuances. Whether streamlining agricultural processes, protecting sensitive health data, or optimizing energy infrastructure, our bespoke talent solutions are designed to supply the subject matter experts required to maximize your efficiency and public trust.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '50px' }}>
              <h2 className="section-title">Key Benefits</h2>
              <div className="section-divider center"></div>
              <p className="section-subtitle">Why federal agencies partner with us for talent</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚙️</div>
                <h3 className="benefit-title">Modernization Experts</h3>
                <p className="benefit-desc">We supply the developers and architects capable of transitioning outdated, monolithic systems into agile architectures.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3 className="benefit-title">Citizen-Centric Designers</h3>
                <p className="benefit-desc">Our UI/UX talent prioritizes user experience, ensuring you build accessible and intuitive public services.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📊</div>
                <h3 className="benefit-title">Data-Driven Analysts</h3>
                <p className="benefit-desc">We deploy analysts who empower your policymakers with accurate, real-time insights for better governance.</p>
              </div>
            </div>
          </div>
        </section>

        <DepartmentGrid 
          title="Federal Departments Served" 
          departments={departments} 
        />
      </main>
      <Footer />
    </>
  );
};

export default FederalGovernmentPage;
