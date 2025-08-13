import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-badge">{property.type}</div>
      </div>
      
      <div className="property-content">
        <h3>{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <p className="property-price">₹{property.price}</p>
        
        <div className="property-features">
          <span>{property.bedrooms} BHK</span>
          <span>{property.area} sq ft</span>
          <span>{property.bathrooms} Bath</span>
        </div>
        
        <div className="property-actions">
          <Link to={`/property/${property.id}`} className="view-details">
            View Details
          </Link>
          <button className="contact-agent">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
