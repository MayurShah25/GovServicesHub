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
            title="IT Staff Augmentation" 
            subtitle="Expert technical professionals scaled to your mission needs."
            description="We provide highly cleared, certified, and experienced IT professionals to augment your existing teams and ensure mission success."
            image="/assets/hero_staff.png"
            features={["Cleared Personnel (Secret, TS, TS/SCI)", "Rapid Talent Deployment", "Flexible Staffing Models"]}
            longDescription={[
              "In today's fast-paced public and private sector landscapes, having the right talent at the right time is critical to achieving your objectives. Our Staff Augmentation services provide you with pre-vetted, highly skilled professionals who are ready to hit the ground running.",
              "We understand the stringent requirements of federal agencies and commercial enterprises. Our rigorous screening process ensures that every candidate not only meets the technical specifications but also perfectly aligns with the security and cultural protocols of your organization."
            ]}
            benefits={[
              { icon: '⏱️', title: 'Rapid Onboarding', description: 'Quickly fill critical skill gaps without the delays of traditional hiring processes.' },
              { icon: '🛡️', title: 'Cleared Personnel', description: 'Access to Top Secret and SCI cleared professionals ready for classified environments.' },
              { icon: '📈', title: 'Flexible Contracts', description: 'Scale your team up or down fluidly based on evolving project requirements.' }
            ]}
          />
        } />
        <Route path="/services/cybersecurity" element={
          <ServiceTemplatePage 
            title="Cybersecurity Talent" 
            subtitle="Elite security professionals defending critical infrastructure."
            description="We supply highly cleared cybersecurity analysts, engineers, and architects to defend your organization against modern threats."
            image="/assets/hero_cyber.png"
            features={["Security Analysts", "Zero Trust Architects", "Compliance Specialists"]}
            longDescription={[
              "Cyber threats are evolving at an unprecedented rate, creating a massive demand for elite security personnel. Gov Services Hub provides access to top-tier cybersecurity talent, ranging from threat hunters and penetration testers to compliance officers and Zero Trust architects.",
              "Whether you need to staff a 24/7 Security Operations Center (SOC) or require specialized consultants to ensure NIST and FedRAMP compliance, we deploy professionals who possess the exact technical certifications and active security clearances your mission demands."
            ]}
            benefits={[
              { icon: '🎯', title: 'Expert Threat Hunters', description: 'Deploy professionals skilled in identifying and neutralizing sophisticated cyber threats.' },
              { icon: '📋', title: 'Compliance Masters', description: 'Hire experts deeply versed in NIST, FISMA, and CMMC security frameworks.' },
              { icon: '🔒', title: 'Architectural Talent', description: 'Access senior engineers capable of designing and implementing modern zero-trust environments.' }
            ]}
          />
        } />
        <Route path="/services/application-development" element={
          <ServiceTemplatePage 
            title="Software Engineering Talent" 
            subtitle="Top-tier developers building secure, scalable applications."
            description="We provide elite software engineers, DevSecOps specialists, and UI/UX designers to accelerate your application development cycles."
            image="/assets/hero_app.png"
            features={["Full-Stack Developers", "DevSecOps Engineers", "UI/UX Designers"]}
            longDescription={[
              "Finding the right technical talent to build and modernize legacy systems is a major challenge for government and commercial entities alike. We solve this by connecting you with elite software engineering talent highly experienced in secure, scalable public-sector workflows.",
              "From Agile coaches and product managers to specialized DevSecOps engineers and full-stack developers, we provide the human capital necessary to accelerate your software development lifecycle and ensure your digital initiatives are delivered on time and securely."
            ]}
            benefits={[
              { icon: '🔄', title: 'Agile Experts', description: 'Hire certified Scrum Masters and Agile practitioners to streamline your development cycles.' },
              { icon: '⚙️', title: 'DevSecOps Specialists', description: 'Integrate security from day one by staffing engineers who understand secure coding practices.' },
              { icon: '🎨', title: 'UX/UI Talent', description: 'Bring on design professionals who create intuitive interfaces to drive user adoption.' }
            ]}
          />
        } />
        <Route path="/services/cloud-infrastructure" element={
          <ServiceTemplatePage 
            title="Cloud & Infrastructure Talent" 
            subtitle="Certified engineers for secure cloud environments."
            description="We supply certified AWS, Azure, and GCP architects and engineers to manage your secure cloud migrations and infrastructure."
            image="/assets/hero_cloud.png"
            features={["Cloud Architects", "Migration Specialists", "SysAdmins & DevOps"]}
            longDescription={[
              "The mandate for cloud adoption requires highly specialized, certified talent to design, migrate, and manage secure environments. We provide agencies and enterprises with top-tier cloud infrastructure engineers and architects.",
              "Our network includes professionals with deep expertise in FedRAMP-certified platforms, hybrid-cloud architectures, and continuous integration pipelines. Whether you need a lead architect or a team of sysadmins, we deliver the exact technical pedigree required."
            ]}
            benefits={[
              { icon: '☁️', title: 'Certified Architects', description: 'Access AWS, Azure, and GCP certified professionals for seamless cloud migrations.' },
              { icon: '💡', title: 'DevOps Engineers', description: 'Hire talent that can optimize your cloud resource management and deployment pipelines.' },
              { icon: '⚡', title: 'Infrastructure Experts', description: 'Deploy sysadmins and network engineers to ensure 99.99% uptime and high availability.' }
            ]}
          />
        } />
        <Route path="/services/data-analytics" element={
          <ServiceTemplatePage 
            title="Data & AI Professionals" 
            subtitle="Data scientists turning complex datasets into actionable insights."
            description="We connect you with elite data scientists, AI/ML engineers, and business intelligence analysts."
            image="/assets/hero_data.png"
            features={["Data Scientists", "AI/ML Engineers", "BI Analysts"]}
            longDescription={[
              "Harnessing the power of big data requires brilliant analytical minds. We provide access to elite data scientists, machine learning engineers, and business intelligence experts who can transform your raw data into a strategic asset.",
              "Our talent network consists of professionals experienced in predictive modeling, natural language processing, and advanced data visualization. We supply the expertise needed to help your agency forecast trends, optimize resource allocation, and make highly informed strategic decisions."
            ]}
            benefits={[
              { icon: '📊', title: 'AI/ML Engineers', description: 'Hire specialists who can build and deploy complex machine learning and AI algorithms.' },
              { icon: '🏛️', title: 'Data Architects', description: 'Bring on experts to establish robust, secure frameworks for data quality and sovereignty.' },
              { icon: '📈', title: 'BI Analysts', description: 'Deploy analysts who create real-time dashboards and intuitive visualizations for leadership.' }
            ]}
          />
        } />
        <Route path="/services/government-support" element={
          <ServiceTemplatePage 
            title="IT Support & Management Talent" 
            subtitle="Dedicated personnel for end-to-end operational support."
            description="We supply Help Desk technicians, ITIL experts, and program managers tailored to the unique requirements of the federal government."
            image="/assets/hero_gov.png"
            features={["Help Desk Technicians", "ITIL Specialists", "Program Managers"]}
            longDescription={[
              "Maintaining uninterrupted mission operations requires a dedicated and highly capable IT support team. We provide the personnel necessary to run your tier 1-3 help desks, manage IT services, and oversee complex technical programs.",
              "From ITIL-certified service managers to PMP-certified program directors, we supply the operational backbone your agency needs. Our professionals act as a seamless extension of your organization, ensuring processes are standardized and incident response times are minimized."
            ]}
            benefits={[
              { icon: '📚', title: 'ITIL Certified Staff', description: 'Hire professionals trained in standardized, highly efficient IT service management processes.' },
              { icon: '🕒', title: 'Tier 1-3 Technicians', description: 'Deploy Help Desk personnel to provide round-the-clock assistance and monitoring.' },
              { icon: '🏆', title: 'PMP Project Managers', description: 'Bring on certified leaders capable of driving complex technical initiatives on time and budget.' }
            ]}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
