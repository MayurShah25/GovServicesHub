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
          subtitle="Mission-critical technology services ensuring operational readiness and national security."
        />
        
        <ServiceFeature 
          title="Securing the Nation's Future" 
          description="We provide advanced cybersecurity, robust cloud infrastructure, and actionable data analytics tailored to the unique and rigorous demands of the United States Armed Forces and Intelligence Community."
          image="/assets/defense-intelligence.png"
          features={[
            "Cybersecurity & Threat Mitigation",
            "Mission-Critical Application Development",
            "Secure Cloud & Infrastructure Services",
            "Advanced Data Analytics & AI"
          ]}
        />

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
