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
          title="Federal Government Solutions" 
          subtitle="Modernizing civilian agencies with scalable, compliant, and efficient IT services."
        />
        
        <ServiceFeature 
          title="Driving Civilian Innovation" 
          description="We assist federal civilian agencies in modernizing legacy systems, migrating to the cloud, and protecting citizen data with top-tier cybersecurity practices."
          image="/assets/federal-government.png"
          features={[
            "IT Modernization & Staff Augmentation",
            "Cloud Migration & Strategy",
            "Data Analytics for Policy Making",
            "Custom Application Development"
          ]}
        />

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
