// src/pages/Sell.jsx
import React, { useState } from 'react';
import '../pages/Sell.css';

const Sell = () => {
  const [propertyForm, setPropertyForm] = useState({
    propertyType: '',
    location: '',
    bedrooms: '',
    price: '',
    area: '',
    ownerName: '',
    contact: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setPropertyForm({
      ...propertyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Property listing submitted:', propertyForm);
    alert('Thank you! We will contact you shortly.');
  };

  const sellingSteps = [
    {
      step: "1",
      title: "Property Evaluation",
      description: "Our experts will evaluate your property and suggest the best market price",
      icon: "📊"
    },
    {
      step: "2",
      title: "Professional Photography",
      description: "High-quality photos and virtual tours to showcase your property",
      icon: "📸"
    },
    {
      step: "3",
      title: "Marketing & Promotion",
      description: "List on multiple platforms and targeted marketing to reach buyers",
      icon: "📢"
    },
    {
      step: "4",
      title: "Handle Inquiries",
      description: "We manage all buyer inquiries and schedule property visits",
      icon: "📞"
    },
    {
      step: "5",
      title: "Close the Deal",
      description: "Complete documentation and legal formalities for smooth transaction",
      icon: "✅"
    }
  ];

  const whyChooseUs = [
    {
      title: "Maximum Exposure",
      description: "Your property will be listed on 50+ real estate portals",
      icon: "🌐"
    },
    {
      title: "Expert Guidance",
      description: "Dedicated relationship manager for personalized service",
      icon: "👨‍💼"
    },
    {
      title: "Quick Sale",
      description: "Average sale time of 30-45 days with our proven process",
      icon: "⚡"
    },
    {
      title: "Best Price",
      description: "Data-driven pricing to get you the best market value",
      icon: "💰"
    }
  ];

  return (
    <div className="sell-page">
      <div className="sell-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Sell Your Property with Confidence</h1>
            <p>Get the best price for your property with our expert selling services</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>₹500Cr+</h3>
                <p>Properties Sold</p>
              </div>
              <div className="stat">
                <h3>30 Days</h3>
                <p>Average Sale Time</p>
              </div>
              <div className="stat">
                <h3>5000+</h3>
                <p>Happy Sellers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="sell-form-section">
          <div className="form-container">
            <div className="form-content">
              <h2>List Your Property</h2>
              <p>Fill out the form below and our experts will contact you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="property-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Property Type</label>
                    <select 
                      name="propertyType" 
                      value={propertyForm.propertyType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">Independent House</option>
                      <option value="villa">Villa</option>
                      <option value="plot">Plot/Land</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Enter property location"
                      value={propertyForm.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Bedrooms</label>
                    <select 
                      name="bedrooms"
                      value={propertyForm.bedrooms}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select BHK</option>
                      <option value="1">1 BHK</option>
                      <option value="2">2 BHK</option>
                      <option value="3">3 BHK</option>
                      <option value="4">4 BHK</option>
                      <option value="5+">5+ BHK</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Area (sq ft)</label>
                    <input 
                      type="number" 
                      name="area"
                      placeholder="Enter total area"
                      value={propertyForm.area}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Expected Price (₹)</label>
                    <input 
                      type="text" 
                      name="price"
                      placeholder="Enter expected price"
                      value={propertyForm.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Owner Name</label>
                    <input 
                      type="text" 
                      name="ownerName"
                      placeholder="Enter your name"
                      value={propertyForm.ownerName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input 
                      type="tel" 
                      name="contact"
                      placeholder="Enter contact number"
                      value={propertyForm.contact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter email address"
                      value={propertyForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  List My Property
                </button>
              </form>
            </div>
            
            <div className="form-image">
              <img src="https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sell Property" />
            </div>
          </div>
        </section>

        <section className="selling-process">
          <h2>Our Selling Process</h2>
          <p className="section-subtitle">From listing to closing, we handle everything</p>
          
          <div className="process-steps">
            {sellingSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose-section">
          <h2>Why Choose PropertyHub to Sell?</h2>
          <div className="benefits-grid">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-guide">
          <div className="pricing-content">
            <h2>Get Instant Property Valuation</h2>
            <p>Know your property's current market value</p>
            <div className="valuation-form">
              <input type="text" placeholder="Enter property location" />
              <select>
                <option>Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
              </select>
              <input type="number" placeholder="Area (sq ft)" />
              <button className="valuation-btn">Get Free Valuation</button>
            </div>
          </div>
        </section>

        <section className="success-stories">
          <h2>Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Customer" />
              <h4>Rajesh Kumar</h4>
              <p>"Sold my apartment in just 3 weeks at the best price. Excellent service!"</p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="story-card">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Customer" />
              <h4>Priya Sharma</h4>
              <p>"Professional team handled everything smoothly. Highly recommended!"</p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sell;
