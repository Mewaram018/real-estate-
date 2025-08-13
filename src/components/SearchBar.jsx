import React, { useState } from 'react';

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search data:', searchData);
    // Implement search functionality
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-field">
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={searchData.location}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="search-field">
          <select
            name="propertyType"
            value={searchData.propertyType}
            onChange={handleInputChange}
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>
        </div>
        
        <div className="search-field">
          <select
            name="priceRange"
            value={searchData.priceRange}
            onChange={handleInputChange}
          >
            <option value="">Price Range</option>
            <option value="0-50">₹0 - ₹50 Lakh</option>
            <option value="50-100">₹50 Lakh - ₹1 Crore</option>
            <option value="100-200">₹1 - ₹2 Crore</option>
            <option value="200+">₹2 Crore+</option>
          </select>
        </div>
        
        <div className="search-field">
          <select
            name="bedrooms"
            value={searchData.bedrooms}
            onChange={handleInputChange}
          >
            <option value="">Bedrooms</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4+">4+ BHK</option>
          </select>
        </div>
        
        <button type="submit" className="search-button">
          Search Properties
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
