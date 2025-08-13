// src/pages/Agents.jsx
import React, { useState } from 'react';
import { agents } from '../data/properties';
import '../pages/Agents.css';

const Agents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  const extendedAgents = [
    ...agents,
    {
      id: 3,
      name: "Amit Gupta",
      specialization: "Luxury Properties",
      experience: "10 years",
      phone: "+91 9876543212",
      email: "amit@propertyhub.com",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      properties: 67,
      rating: 4.9,
      location: "Mumbai",
      languages: ["Hindi", "English", "Marathi"],
      certifications: ["RERA Certified", "Real Estate License"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      specialization: "Affordable Housing",
      experience: "5 years",
      phone: "+91 9876543213",
      email: "sneha@propertyhub.com",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      properties: 38,
      rating: 4.8,
      location: "Bangalore",
      languages: ["English", "Telugu", "Kannada"],
      certifications: ["RERA Certified"]
    },
    {
      id: 5,
      name: "Karan Singh",
      specialization: "Commercial Properties",
      experience: "12 years",
      phone: "+91 9876543214",
      email: "karan@propertyhub.com",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      properties: 89,
      rating: 4.9,
      location: "Delhi",
      languages: ["Hindi", "English", "Punjabi"],
      certifications: ["RERA Certified", "Commercial Real Estate License"]
    },
    {
      id: 6,
      name: "Meera Joshi",
      specialization: "Rental Properties",
      experience: "7 years",
      phone: "+91 9876543215",
      email: "meera@propertyhub.com",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      properties: 156,
      rating: 4.7,
      location: "Pune",
      languages: ["Hindi", "English", "Marathi"],
      certifications: ["RERA Certified"]
    }
  ];

  const filteredAgents = searchLocation 
    ? extendedAgents.filter(agent => 
        agent.location.toLowerCase().includes(searchLocation.toLowerCase())
      )
    : extendedAgents;

  return (
    <div className="agents-page">
      <div className="agents-hero">
        <div className="container">
          <h1>Meet Our Expert Agents</h1>
          <p>Connect with certified real estate professionals who will help you find your perfect property</p>
          <div className="agent-search">
            <input 
              type="text"
              placeholder="Search agents by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button className="search-btn">Find Agents</button>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="agents-stats">
          <div className="stat-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Expert Agents</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Properties Sold</p>
            </div>
            <div className="stat-item">
              <h3>4.8</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Cities Covered</p>
            </div>
          </div>
        </section>

        <section className="agents-grid-section">
          <h2>Our Top Performing Agents</h2>
          <div className="agents-grid">
            {filteredAgents.map(agent => (
              <div key={agent.id} className="agent-card">
                <div className="agent-image">
                  <img src={agent.image} alt={agent.name} />
                  <div className="agent-rating">
                    <span>⭐ {agent.rating}</span>
                  </div>
                </div>
                
                <div className="agent-info">
                  <h3>{agent.name}</h3>
                  <p className="specialization">{agent.specialization}</p>
                  <p className="experience">{agent.experience} experience</p>
                  <p className="location">📍 {agent.location}</p>
                  
                  <div className="agent-stats">
                    <span>{agent.properties} Properties</span>
                    <span>RERA Certified</span>
                  </div>
                  
                  <div className="languages">
                    <strong>Languages:</strong>
                    <div className="language-tags">
                      {agent.languages?.map((lang, index) => (
                        <span key={index} className="language-tag">{lang}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="agent-actions">
                    <button 
                      className="contact-btn"
                      onClick={() => setSelectedAgent(agent)}
                    >
                      Contact Agent
                    </button>
                    <button className="view-properties">View Properties</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="become-agent">
          <div className="become-agent-content">
            <h2>Become a PropertyHub Agent</h2>
            <p>Join our team of successful real estate professionals</p>
            <div className="benefits-list">
              <div className="benefit">✓ High commission rates</div>
              <div className="benefit">✓ Marketing support</div>
              <div className="benefit">✓ Lead generation</div>
              <div className="benefit">✓ Training programs</div>
            </div>
            <button className="join-btn">Join Our Team</button>
          </div>
          <div className="become-agent-image">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Become Agent" />
          </div>
        </section>
      </div>

      {/* Contact Agent Modal */}
      {selectedAgent && (
        <div className="modal-overlay" onClick={() => setSelectedAgent(null)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedAgent(null)}>×</button>
            <div className="modal-content">
              <img src={selectedAgent.image} alt={selectedAgent.name} />
              <h3>{selectedAgent.name}</h3>
              <p>{selectedAgent.specialization}</p>
              
              <div className="contact-details">
                <p>📞 {selectedAgent.phone}</p>
                <p>📧 {selectedAgent.email}</p>
                <p>📍 {selectedAgent.location}</p>
              </div>
              
              <form className="quick-contact">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" required />
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agents;
