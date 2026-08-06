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
            <h3 className="footer-title">Gov Services Hub</h3>
            <p>Gov Services Hub is a trusted US government contractor, providing tailored IT staffing solutions that meet needs of the federal government.</p>
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
          
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} />
                <span>123 Government Way, Washington DC 20001</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (703) 659-1120</span>
              </li>
              <li>
                <Mail size={18} />
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
