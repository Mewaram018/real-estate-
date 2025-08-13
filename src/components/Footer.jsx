// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PropertyHub</h3>
            <p>Your trusted partner in finding the perfect property. We make real estate simple and accessible for everyone.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/buy">Buy</a></li>
              <li><a href="/rent">Rent</a></li>
              <li><a href="/sell">Sell</a></li>
              <li><a href="/agents">Agents</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>📞 +91 98765 43210</li>
              <li>📧 info@propertyhub.com</li>
              <li>📍 Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PropertyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
