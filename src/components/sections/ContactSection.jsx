import React, { useState } from 'react';
import Button from '../Button';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section section-bg-light" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-desc">
            Ready to scale your government IT initiatives? Contact us today to discuss how Gov Services Hub can support your mission.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <h4>Headquarters</h4>
              <p>123 Government Way, Washington DC 20001</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+1 (703) 659-1120</p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <p>info@govserviceshub.com</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                placeholder="How can we help you?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <Button type="submit" variant="primary" className="submit-btn">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
