import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className="header">
      <div className="container header-content">
        {/* Left: Logo */}
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="Gov Services Hub" className="header-logo-img" style={{ maxHeight: '90px' }} />
        </Link>
        
        {/* Center: Navigation */}
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          
          <div className="dropdown" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('services')}>
              Our Services <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
              <Link to="/services/staff-augmentation" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Staff Augmentation</Link>
              <Link to="/services/cybersecurity" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Cybersecurity</Link>
              <Link to="/services/application-development" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Application Development</Link>
              <Link to="/services/cloud-infrastructure" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Cloud & Infrastructure</Link>
              <Link to="/services/data-analytics" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Data Analytics</Link>
              <Link to="/services/government-support" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Government Support</Link>
            </div>
          </div>

          <div className="dropdown" onMouseEnter={() => setActiveDropdown('gov')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('gov')}>
              Solutions <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'gov' ? 'show' : ''}`}>
              <Link to="/government-solutions" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
              <Link to="/government-solutions/defense-intelligence" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Defense & Intelligence</Link>
              <Link to="/government-solutions/federal" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Federal Government</Link>
              <Link to="/government-solutions/state-local" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>State & Local</Link>
              <Link to="/enterprise-solutions" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
            </div>
          </div>

          <Link to="/careers" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
        </nav>

        {/* Right: Actions */}
        <div className="header-actions">
          <button className="search-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <Button to="/contact" variant="primary" className="header-cta">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
