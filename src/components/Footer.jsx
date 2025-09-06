import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Monastery360</h3>
          <p>A Digital Heritage Platform for Sikkim's Monasteries.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/map">Interactive Map</Link>
          <Link to="/archives">Digital Archives</Link>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Monastery360. All Rights Reserved. Made for Smart India Hackathon.</p>
      </div>
    </footer>
  );
};

export default Footer;