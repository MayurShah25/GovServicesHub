import React from 'react';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Elite Talent Pool",
      description: "Gain access to a highly curated network of top-tier professionals, meticulously vetted for technical excellence and domain expertise.",
      icon: ShieldCheck
    },
    {
      title: "Rapid Deployment",
      description: "Our streamlined matching and onboarding process ensures you get the right talent exactly when you need them, without delays.",
      icon: Zap
    },
    {
      title: "Cleared Professionals",
      description: "We specialize in providing candidates with active government clearances, ready to step into sensitive, mission-critical roles on day one.",
      icon: Users
    }
  ];

  return (
    <section className="why-choose-section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">Why Gov Services Hub</div>
          <h2>The Right Talent, Right Now.</h2>
          <p className="section-subtitle">We bridge the gap between your organization's goals and the human capital needed to achieve them.</p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="reason-card">
                <div className="reason-icon-wrapper">
                  <Icon size={40} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
