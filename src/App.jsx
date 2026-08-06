import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

// Solutions Pages
import GovernmentSolutionsPage from './pages/solutions/GovernmentSolutionsPage';
import DefenseIntelligencePage from './pages/solutions/DefenseIntelligencePage';
import FederalGovernmentPage from './pages/solutions/FederalGovernmentPage';
import StateCountyEducationPage from './pages/solutions/StateCountyEducationPage';
import EnterpriseSolutionsPage from './pages/solutions/EnterpriseSolutionsPage';

// Service Template
import ServiceTemplatePage from './pages/services/ServiceTemplatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Solutions Routes */}
        <Route path="/government-solutions" element={<GovernmentSolutionsPage />} />
        <Route path="/government-solutions/defense-intelligence" element={<DefenseIntelligencePage />} />
        <Route path="/government-solutions/federal" element={<FederalGovernmentPage />} />
        <Route path="/government-solutions/state-local" element={<StateCountyEducationPage />} />
        <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />

        {/* Services Routes */}
        <Route path="/services/staff-augmentation" element={
          <ServiceTemplatePage 
            title="Staff Augmentation" 
            subtitle="Expert IT professionals scaled to your mission needs."
            description="We provide highly cleared, certified, and experienced IT professionals to augment your existing teams and ensure mission success."
            image="/assets/service-staff.png"
            features={["Cleared Personnel (Secret, TS, TS/SCI)", "Rapid Deployment", "Flexible Contract Vehicles"]}
          />
        } />
        <Route path="/services/cybersecurity" element={
          <ServiceTemplatePage 
            title="Cybersecurity" 
            subtitle="Defending critical infrastructure against modern threats."
            description="Our cybersecurity experts deliver comprehensive risk management, compliance, and active threat defense solutions for government and enterprise."
            image="/assets/service-cyber.png"
            features={["Risk Management Framework (RMF)", "Zero Trust Architecture", "Continuous Monitoring"]}
          />
        } />
        <Route path="/services/application-development" element={
          <ServiceTemplatePage 
            title="Application Development" 
            subtitle="Custom software solutions built for scale and security."
            description="We design and build secure, high-performance web and mobile applications tailored to public sector workflows."
            image="/assets/service-app.jpg"
            features={["Agile Development", "DevSecOps Integration", "Legacy System Modernization"]}
          />
        } />
        <Route path="/services/cloud-infrastructure" element={
          <ServiceTemplatePage 
            title="Cloud & Infrastructure" 
            subtitle="Secure, scalable cloud environments for government."
            description="We assist agencies in migrating to and managing secure cloud environments (AWS, Azure, GCP) that comply with FedRAMP standards."
            image="/assets/service-cloud.jpg"
            features={["Cloud Migration Strategy", "FedRAMP Compliant Architecture", "Hybrid Cloud Management"]}
          />
        } />
        <Route path="/services/data-analytics" element={
          <ServiceTemplatePage 
            title="Data Analytics" 
            subtitle="Actionable insights from complex data sets."
            description="Transform your data into a strategic asset with our advanced analytics, business intelligence, and AI/ML solutions."
            image="/assets/service-data.jpg"
            features={["Predictive Analytics", "Data Warehousing", "AI/ML Integration"]}
          />
        } />
        <Route path="/services/government-support" element={
          <ServiceTemplatePage 
            title="Government Support Solution" 
            subtitle="Comprehensive managed services for federal operations."
            description="End-to-end IT and operational support services tailored to the unique requirements of the federal government."
            image="/assets/service-gov-support.jpg"
            features={["IT Service Management (ITSM)", "Help Desk Support", "Program Management"]}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
