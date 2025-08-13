import React, { useState } from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { properties, testimonials } from '../data/properties';

const Home = () => {
  const featuredProperties = properties.slice(0, 3);


  // State for input values
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emiResult, setEmiResult] = useState(null);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Calculate EMI function
  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) {
      alert('Please fill all fields');
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const time = parseFloat(loanTenure) * 12; // Months

    // EMI calculation formula
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const total = emi * time;
    const interest = total - principal;

    setEmiResult(emi.toFixed(2));
    setTotalInterest(interest.toFixed(2));
    setTotalPayment(total.toFixed(2));
  };

  return (
    <div className="home">
      <Banner />
      
      <section className="search-section">
        <div className="container">
          <h2>Find Your Perfect Property</h2>
          <SearchBar />
        </div>
      </section>

      <section className="featured-properties">
        <div className="container">
          <h2>Featured Properties</h2>
          <div className="properties-grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="container">
          <h2>What Are You Looking For?</h2>
          <div className="links-grid">
            <div className="link-card">
              <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Buy" />
              <h3>Buy a Home</h3>
              <p>Find the perfect home to buy</p>
            </div>
            <div className="link-card">
              <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rent" />
              <h3>Rent a Home</h3>
              <p>Discover rental properties</p>
            </div>
            <div className="link-card">
              <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sell" />
              <h3>Sell Property</h3>
              <p>List your property with us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} />
                <h4>{testimonial.name}</h4>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p>"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="emi-calculator">
      <div className="container">
        <h2>EMI Calculator</h2>
        <div className="calculator-form">
          <div className="input-group">
            <label>Loan Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Interest Rate (%)</label>
            <input
              type="number"
              placeholder="Enter interest rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Loan Tenure (Years)</label>
            <input
              type="number"
              placeholder="Enter tenure"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
          </div>
          <button className="calculate-btn" onClick={calculateEMI}>
            Calculate EMI
          </button>

          {/* Results Section */}
          {emiResult && (
            <div className="results">
              <h3>EMI Calculation Results</h3>
              <div className="result-item">
                <span>Monthly EMI:</span>
                <span>₹{emiResult}</span>
              </div>
              <div className="result-item">
                <span>Total Interest:</span>
                <span>₹{totalInterest}</span>
              </div>
              <div className="result-item">
                <span>Total Payment (Principal + Interest):</span>
                <span>₹{totalPayment}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
