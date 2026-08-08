import React from 'react';
import Button from '../Button';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-header-row">
          <div className="about-header-left">
            <div className="hero-tag">ABOUT US</div>
            <h2>Connecting Elite Talent with Mission-Driven Organizations</h2>
          </div>
          <div className="about-header-right">
            <Button to="/contact" variant="primary">Contact Us</Button>
          </div>
        </div>
        
        <div className="about-container">
          <div className="about-content">
            <div className="about-metrics" style={{ marginBottom: '40px' }}>
              <div className="about-metric-card">
                <div className="metric-number">10+</div>
                <div className="metric-text">
                  <h4>Years Experience</h4>
                  <p>Proven track record in talent acquisition.</p>
                </div>
              </div>
              <div className="about-metric-card">
                <div className="metric-number">50+</div>
                <div className="metric-text">
                  <h4>Partners</h4>
                  <p>Trusted across public and private sectors.</p>
                </div>
              </div>
              <div className="about-metric-card">
                <div className="metric-number">100%</div>
                <div className="metric-text">
                  <h4>Compliance</h4>
                  <p>Adherence to federal security standards.</p>
                </div>
              </div>
            </div>

            <div className="about-context-highlight">
              <p className="about-desc" style={{ marginBottom: '0' }}>
                At Gov Services Hub, we know that people solve problems, not just technology. We specialize in sourcing and deploying top-tier, cleared technical professionals for Federal, State, and Commercial missions.
              </p>
              <p className="about-desc" style={{ marginTop: '16px', marginBottom: '0' }}>
                From agile developers to cybersecurity experts, our rigorous talent acquisition process delivers scalable, compliant workforces that seamlessly integrate with your teams to drive operational excellence.
              </p>
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <img 
              src="/assets/about-unique.png" 
              alt="About Gov Services Hub" 
              className="about-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
