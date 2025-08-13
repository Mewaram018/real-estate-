// src/pages/Buy.jsx
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import '../pages/Buy.css';

const Buy = () => {
  const [budget, setBudget] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const buyingGuide = [
    {
      step: "1",
      title: "Define Your Budget",
      description: "Calculate your budget including down payment, loan eligibility, and additional costs."
    },
    {
      step: "2", 
      title: "Choose Location",
      description: "Research neighborhoods, check connectivity, amenities, and future growth potential."
    },
    {
      step: "3",
      title: "Property Search",
      description: "Browse properties matching your criteria and shortlist potential options."
    },
    {
      step: "4",
      title: "Site Visits",
      description: "Visit shortlisted properties, check documentation, and verify legal clearances."
    },
    {
      step: "5",
      title: "Finalize Deal",
      description: "Negotiate price, arrange financing, complete legal formalities, and register property."
    }
  ];

  const featuredBuyProperties = properties.filter(p => 
    p.type === 'Villa' || p.type === 'House' || p.type === 'Apartment'
  );

  return (
    <div className="buy-page">
      <div className="buy-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Buy Your Dream Home</h1>
            <p>Find the perfect property to call home with our extensive buying services</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Properties Sold</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="quick-search">
          <h2>Find Your Perfect Home</h2>
          <div className="search-filters">
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">Select Budget</option>
              <option value="0-50">₹0 - ₹50 Lakh</option>
              <option value="50-100">₹50 Lakh - ₹1 Crore</option>
              <option value="100-200">₹1 - ₹2 Crore</option>
              <option value="200+">₹2 Crore+</option>
            </select>
            
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">Independent House</option>
              <option value="villa">Villa</option>
            </select>
            
            <input 
              type="text" 
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            
            <button className="search-btn">Search Properties</button>
          </div>
        </section>

        <section className="buying-guide">
          <h2>How to Buy Property</h2>
          <p className="section-subtitle">Your step-by-step guide to a successful property purchase</p>
          
          <div className="guide-steps">
            {buyingGuide.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="featured-properties">
          <h2>Featured Properties for Sale</h2>
          <div className="properties-grid">
            {featuredBuyProperties.slice(0, 6).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section className="financing-info">
          <div className="financing-grid">
            <div className="financing-content">
              <h2>Home Loan Assistance</h2>
              <ul>
                <li>✓ Pre-approved loans from top banks</li>
                <li>✓ Competitive interest rates</li>
                <li>✓ Quick loan processing</li>
                <li>✓ Minimal documentation</li>
                <li>✓ Expert guidance throughout</li>
              </ul>
              <button className="cta-button">Apply for Loan</button>
            </div>
            <div className="financing-image">
              <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Home Loan" />
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose PropertyHub for Buying?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3>Verified Properties</h3>
              <p>All properties are legally verified and documented</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with no hidden charges</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Expert Support</h3>
              <p>Dedicated relationship managers for personalized service</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>Legal Assistance</h3>
              <p>Complete legal support for documentation and registration</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Buy;
