// src/pages/Rent.jsx
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import '../pages/Rent.css';

const Rent = () => {
  const [filters, setFilters] = useState({
    budget: '',
    type: '',
    bhk: '',
    location: ''
  });

  const rentalProperties = properties.map(property => ({
    ...property,
    rentPrice: `₹${Math.floor(parseFloat(property.price.replace(/[^\d.]/g, '')) * 0.001)},000/month`,
    isRental: true
  }));

  const rentalGuide = [
    {
      icon: "🔍",
      title: "Search & Filter",
      description: "Use our advanced filters to find properties matching your requirements"
    },
    {
      icon: "👀",
      title: "Virtual Tours",
      description: "Take virtual tours of properties from the comfort of your home"
    },
    {
      icon: "📝",
      title: "Documentation",
      description: "We handle all rental agreements and legal documentation"
    },
    {
      icon: "🤝",
      title: "Move-in Ready",
      description: "Quick possession with transparent rental process"
    }
  ];

  return (
    <div className="rent-page">
      <div className="rent-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Find Your Perfect Rental</h1>
            <p>Discover comfortable and affordable rental properties in prime locations</p>
            <div className="hero-features">
              <span>✓ Verified Properties</span>
              <span>✓ Zero Brokerage</span>
              <span>✓ Quick Move-in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="rental-search">
          <h2>Find Your Next Home</h2>
          <div className="rental-filters">
            <select 
              value={filters.budget} 
              onChange={(e) => setFilters({...filters, budget: e.target.value})}
            >
              <option value="">Monthly Budget</option>
              <option value="0-15">₹0 - ₹15,000</option>
              <option value="15-25">₹15,000 - ₹25,000</option>
              <option value="25-50">₹25,000 - ₹50,000</option>
              <option value="50+">₹50,000+</option>
            </select>
            
            <select 
              value={filters.type} 
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="pg">PG/Hostel</option>
            </select>
            
            <select 
              value={filters.bhk} 
              onChange={(e) => setFilters({...filters, bhk: e.target.value})}
            >
              <option value="">BHK Type</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4+">4+ BHK</option>
            </select>
            
            <input 
              type="text" 
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            />
            
            <button className="search-btn">Find Rentals</button>
          </div>
        </section>

        <section className="rental-guide">
          <h2>Why Rent with PropertyHub?</h2>
          <div className="guide-grid">
            {rentalGuide.map((item, index) => (
              <div key={index} className="guide-card">
                <div className="guide-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rental-properties">
          <h2>Available Rental Properties</h2>
          <div className="properties-grid">
            {rentalProperties.slice(0, 6).map(property => (
              <div key={property.id} className="rental-property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="rental-badge">For Rent</div>
                </div>
                <div className="property-content">
                  <h3>{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  <p className="rental-price">{property.rentPrice}</p>
                  <div className="property-features">
                    <span>{property.bedrooms} BHK</span>
                    <span>{property.area} sq ft</span>
                    <span>Furnished</span>
                  </div>
                  <div className="rental-amenities">
                    <span>🅿️ Parking</span>
                    <span>🔒 Security</span>
                    <span>💧 Water Supply</span>
                  </div>
                  <div className="property-actions">
                    <button className="view-details">View Details</button>
                    <button className="contact-owner">Contact Owner</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rental-calculator">
          <div className="calculator-content">
            <h2>Rental Affordability Calculator</h2>
            <p>Calculate how much rent you can afford based on your income</p>
            <div className="calculator-form">
              <div className="calc-row">
                <div className="calc-field">
                  <label>Monthly Income (₹)</label>
                  <input type="number" placeholder="Enter your monthly income" />
                </div>
                <div className="calc-field">
                  <label>Other Monthly Expenses (₹)</label>
                  <input type="number" placeholder="Food, transport, etc." />
                </div>
              </div>
              <button className="calculate-btn">Calculate Affordable Rent</button>
              <div className="calc-result">
                <p>Recommended rent budget: <strong>₹0 - ₹0</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="rental-tips">
          <h2>Rental Tips & Guidelines</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Security Deposit</h3>
              <p>Typically 2-3 months rent as security deposit. Ensure proper receipt.</p>
            </div>
            <div className="tip-card">
              <h3>Agreement</h3>
              <p>Always sign a rental agreement with clear terms and conditions.</p>
            </div>
            <div className="tip-card">
              <h3>Maintenance</h3>
              <p>Clarify maintenance responsibilities between tenant and landlord.</p>
            </div>
            <div className="tip-card">
              <h3>Notice Period</h3>
              <p>Standard notice period is 1-2 months for vacating the property.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rent;
