import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';

const SingleProperty = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="single-property">
      <div className="container">
        <div className="property-gallery">
          <div className="main-image">
            <img 
              src={property.gallery[currentImage]} 
              alt={property.title}
            />
          </div>
          <div className="thumbnail-images">
            {property.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 1}`}
                className={currentImage === index ? 'active' : ''}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="property-details">
          <div className="property-info">
            <h1>{property.title}</h1>
            <p className="location">{property.location}</p>
            <p className="price">₹{property.price}</p>
            
            <div className="property-specs">
              <div className="spec">
                <strong>Bedrooms:</strong> {property.bedrooms}
              </div>
              <div className="spec">
                <strong>Bathrooms:</strong> {property.bathrooms}
              </div>
              <div className="spec">
                <strong>Area:</strong> {property.area} sq ft
              </div>
              <div className="spec">
                <strong>Type:</strong> {property.type}
              </div>
            </div>

            <div className="amenities">
              <h3>Amenities</h3>
              <ul>
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{property.description}</p>
            </div>
          </div>

          <div className="property-sidebar">
            <div className="contact-agent">
              <h3>Contact Agent</h3>
              <button 
                className="contact-btn"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                Get More Details
              </button>
              
              {showContactForm && (
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <input type="tel" placeholder="Your Phone" required />
                  <textarea placeholder="Your Message" rows="4"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>

            <div className="map-section">
              <h3>Location</h3>
              <div className="map-placeholder">
                <p>Google Maps integration would go here</p>
                <p>Location: {property.location}</p>
              </div>
            </div>

            <div className="virtual-tour">
              <h3>Virtual Tour</h3>
              <button className="tour-btn">Start 360° Tour</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
