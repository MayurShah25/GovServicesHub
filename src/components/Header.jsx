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
        <Link to="/" className="logo">
          Gov Services <span className="logo-accent">Hub</span>
        </Link>
        
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          
          <div className="dropdown" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('services')}>
              Services <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
              <Link to="/services/staff-augmentation" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Staff Augmentation</Link>
              <Link to="/services/cybersecurity" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Cybersecurity</Link>
              <Link to="/services/application-development" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Application Development</Link>
              <Link to="/services/cloud-infrastructure" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Cloud & Infrastructure</Link>
              <Link to="/services/data-analytics" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Data Analytics</Link>
              <Link to="/services/government-support" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Government Support Solution</Link>
            </div>
          </div>

          <div className="dropdown" onMouseEnter={() => setActiveDropdown('gov')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('gov')}>
              Government Solutions <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'gov' ? 'show' : ''}`}>
              <Link to="/government-solutions" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
              <Link to="/government-solutions/defense-intelligence" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Defense and Intelligence</Link>
              <Link to="/government-solutions/federal" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Federal Government</Link>
              <Link to="/government-solutions/state-local" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>State, County & Education</Link>
            </div>
          </div>

          <div className="dropdown" onMouseEnter={() => setActiveDropdown('enterprise')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('enterprise')}>
              Enterprise Solutions <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'enterprise' ? 'show' : ''}`}>
              <Link to="/enterprise-solutions" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Commercial / Enterprise</Link>
            </div>
          </div>

          <Link to="/careers" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
          <Button to="/contact" variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Button>
        </nav>

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
