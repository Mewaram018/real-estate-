// src/pages/PropertyListing.jsx
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import '../pages/PropertyListing.css';

const PropertyListing = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    bedrooms: '',
    location: '',
    sortBy: 'newest'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    
    let filtered = properties;
    
    // Apply all filters
    if (filters.type && filters.type !== '') {
      filtered = filtered.filter(property => 
        property.type.toLowerCase() === filters.type.toLowerCase()
      );
    }
    
    if (filters.bedrooms && filters.bedrooms !== '') {
      filtered = filtered.filter(property => 
        property.bedrooms.toString() === filters.bedrooms
      );
    }
    
    if (filters.location && filters.location !== '') {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Sort properties
    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
    }
    
    setFilteredProperties(filtered);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <div className="property-listing">
      <div className="container">
        <div className="listing-hero">
          <h1>Discover Your Perfect Property</h1>
          <p>Browse through our extensive collection of premium properties</p>
        </div>

        <div className="listing-stats">
          <div className="stat-item">
            <h3>{filteredProperties.length}</h3>
            <p>Properties Available</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Cities Covered</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>

        <div className="advanced-filters">
          <div className="filter-row">
            <div className="filter-group">
              <label>Property Type</label>
              <select name="type" value={filters.type} onChange={handleFilterChange}>
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="office">Office</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Location</label>
              <input 
                type="text" 
                name="location" 
                placeholder="Enter city or area"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </div>
            
            <div className="filter-group">
              <label>Bedrooms</label>
              <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange}>
                <option value="">Any</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Sort By</label>
              <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <span>⊞</span> Grid
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <span>☰</span> List
            </button>
          </div>
        </div>

        <div className={`properties-container ${viewMode}`}>
          {currentProperties.map(property => (
            <PropertyCard key={property.id} property={property} viewMode={viewMode} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="page-btn"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;
