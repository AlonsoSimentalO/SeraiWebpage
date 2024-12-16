import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src={require('../images/serai_logo_negative.png')} alt="Serai Logo" className="logo" />
        </div>
        <div className="info-section">
          <p className="company-info">Serai AG</p>
          <p className="company-info">Horneggstrasse 9</p>
          <p className="company-info">8008 Zurich, Switzerland</p>
          <p className="company-info">+41-44-8806188</p>
          <p className="company-info">info@seraispaces.com</p>
        </div>
        <div className="links-section">
          <Link to="/AboutSerai" className="link">About Serai</Link>
          <Link to="/research" className="link">Research</Link>
          <Link to="/Partnerships" className="link">Partnerships</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>
      </div>
      <div className="legal-section">
        <div className="legal-left">
          <p className="legal-text">Serai © 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;