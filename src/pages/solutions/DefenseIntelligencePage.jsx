import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import DepartmentGrid from '../../components/DepartmentGrid';
import ServiceFeature from '../../components/ServiceFeature';

const DefenseIntelligencePage = () => {
  const departments = [
    { name: "Department of the Army", icon: "🎖️" },
    { name: "Department of the Navy", icon: "⚓" },
    { name: "Department of the Air Force", icon: "✈️" },
    { name: "United States Marine Corps", icon: "🦅" },
    { name: "Defense Information Systems Agency (DISA)", icon: "📡" },
    { name: "Defense Logistics Agency (DLA)", icon: "📦" },
    { name: "Defense Commissary Agency (DeCA)", icon: "🏪" },
    { name: "Defense Health Agency (DHA)", icon: "🏥" }
  ];

  return (
    <>
      <Header />
      <main className="page-main">
        <PageHero 
          title="Defense & Intelligence" 
          subtitle="Providing highly cleared IT talent to ensure operational readiness and national security."
        />
        
        <ServiceFeature 
          title="Supplying Elite Defense Talent" 
          description="We provide elite professionals specializing in advanced cybersecurity, robust cloud infrastructure, and actionable data analytics, tailored to the rigorous demands of the United States Armed Forces and Intelligence Community."
          image="/assets/defense-intelligence.png"
          features={[
            "Cybersecurity Experts & Analysts",
            "Mission-Critical Software Engineers",
            "Secure Cloud Architects",
            "Cleared Data Scientists & AI Engineers"
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
                National security requires unparalleled resilience, precision, and technological superiority. At Gov Services Hub, we provide specialized technical talent to the Department of Defense and the Intelligence Community, ensuring that our nation's most critical operations are backed by the best minds in the industry.
              </p>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                Our talent pool consists of highly cleared professionals with deep expertise in military operations, cyber warfare, and intelligence analysis. We supply the experts who build mission-critical solutions, enable real-time situational awareness, secure communications, and deliver decisive tactical advantages in an ever-evolving threat landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '50px' }}>
              <h2 className="section-title">Key Benefits</h2>
              <div className="section-divider center"></div>
              <p className="section-subtitle">Why the DoD and IC rely on Gov Services Hub for talent</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🦅</div>
                <h3 className="benefit-title">Elite Talent Pipeline</h3>
                <p className="benefit-desc">We maintain a robust network of specialized professionals ready to operate flawlessly in austere and high-pressure environments.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔐</div>
                <h3 className="benefit-title">Cleared Expertise</h3>
                <p className="benefit-desc">We rapidly deploy personnel holding active Top Secret and SCI clearances for immediate mission impact.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🛰️</div>
                <h3 className="benefit-title">Specialized Intelligence</h3>
                <p className="benefit-desc">Providing highly sought-after AI and machine learning experts capable of processing massive datasets for tactical intelligence.</p>
              </div>
            </div>
          </div>
        </section>

        <DepartmentGrid 
          title="Government Departments Served" 
          departments={departments} 
        />
      </main>
      <Footer />
    </>
  );
};

export default DefenseIntelligencePage;
