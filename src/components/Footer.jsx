import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="footer-logo" style={{ justifyContent: 'center' }}>
              <img src="/assets/logo.png" alt="Gov Services Hub" className="footer-logo-img" style={{ maxHeight: '140px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p>Gov Services Hub is a trusted talent organization, providing tailored IT staffing solutions that meet the needs of Federal, State, and Commercial clients.</p>
            
            <div className="footer-newsletter">
              <h4>Subscribe to Newsletter</h4>
              <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-subtitle">IT Services</h4>
            <ul>
              <li><Link to="/services/staff-augmentation">Staff Augmentation</Link></li>
              <li><Link to="/services/cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/services/application-development">App Development</Link></li>
              <li><Link to="/services/cloud-infrastructure">Cloud Solutions</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="contact-list">
              <li>
                <div className="contact-icon-bg"><MapPin size={18} /></div>
                <span>123 Government Way, Washington DC 20001</span>
              </li>
              <li>
                <div className="contact-icon-bg"><Phone size={18} /></div>
                <span>+1 (703) 659-1120</span>
              </li>
              <li>
                <div className="contact-icon-bg"><Mail size={18} /></div>
                <span>info@govserviceshub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gov Services Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
