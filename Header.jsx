import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">
          <span className="logo-text">Monastery360</span>
        </NavLink>
      </div>
      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <NavLink to="/monastery/rumtek" onClick={() => setIsMobileMenuOpen(false)}>Featured Monastery</NavLink>
        <NavLink to="/best-time-to-visit" onClick={() => setIsMobileMenuOpen(false)}>Best Time to Visit</NavLink>
        <NavLink to="/calendar" onClick={() => setIsMobileMenuOpen(false)}>Cultural Calendar</NavLink>
        <NavLink to="/map" onClick={() => setIsMobileMenuOpen(false)}>Interactive Map</NavLink>
        <NavLink to="/archives" onClick={() => setIsMobileMenuOpen(false)}>Digital Archives</NavLink>
        <button className="login-btn">Login / Register</button>
      </nav>
      <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </header>
  );
};

export default Header;