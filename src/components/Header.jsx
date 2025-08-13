import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaSearchDollar, FaKey, FaSignOutAlt, FaUserTie, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '../components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon"></span>
          <span className="logo-text">Property<span className="logo-highlight">Hub</span></span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-logo" onClick={closeMenu}>
              {/* PropertyHub */}
            </Link>
            {/* <button className="close-btn" onClick={closeMenu}>
              <FaTimes />
            </button> */}
          </div>

          <div className="nav-links">
            <NavLink to="/" icon={<FaHome />} text="Home" onClick={closeMenu} />
            <NavLink to="/properties" icon={<FaBuilding />} text="Properties" onClick={closeMenu} />
            <NavLink to="/buy" icon={<FaSearchDollar />} text="Buy" onClick={closeMenu} />
            <NavLink to="/rent" icon={<FaKey />} text="Rent" onClick={closeMenu} />
            <NavLink to="/sell" icon={<FaSignOutAlt />} text="Sell" onClick={closeMenu} />
            <NavLink to="/agents" icon={<FaUserTie />} text="Agents" onClick={closeMenu} />
            <NavLink to="/about" icon={<FaInfoCircle />} text="About" onClick={closeMenu} />
            <NavLink to="/contact" icon={<FaEnvelope />} text="Contact" onClick={closeMenu} />
          </div>

          {/* <div className="nav-cta">
            <Link to="/contact" className="cta-button" onClick={closeMenu}>
              Get Started
            </Link>
          </div> */}
        </nav>

        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

const NavLink = ({ to, icon, text, onClick }) => (
  <Link to={to} className="nav-link" onClick={onClick}>
    <span className="nav-icon">{icon}</span>
    <span className="nav-text">{text}</span>
  </Link>
);

export default Header;