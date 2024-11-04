import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src={require('../images/serai_logo_negative.png')} alt="Serai Logo" className="logo" />
        </div>
        <div className="contact-us-section">
          <p className="contact-us-text">Contact Us</p>
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
          <Link to="/Insights" className="link">Insights</Link>
          <Link to="/Partnerships" className="link">Partnerships</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>
      </div>
      <div className="legal-section">
        <div className="legal-left">
          <p className="legal-text">Serai © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    padding: '20px 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    margin: '0 auto',
    boxSizing: 'border-box',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
  },
  footerMobile: {
    alignItems: 'flex-start', 
    padding: '20px 20px',    
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: '20px',
    borderBottom: '1px solid #444',
  },
  footerContentMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
    paddingBottom: '10px',
  },
  footerContentTablet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '50px', 
    paddingBottom: '20px',
    borderBottom: '1px solid #444',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logoSectionMobile: {
    width: 'auto', // Ajustar width para alinear a la izquierda
    marginLeft: '0', // Eliminar margen izquierdo
  },
  logoSectionTablet: {
    flex: '1', 
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    marginLeft: '40px',
  },
  infoSectionMobile: {
    alignItems: 'flex-start',
    marginLeft: '0',
    textAlign: 'left',
  },
  infoSectionTablet: {
    alignItems: 'flex-start',
    marginLeft: '0',
    textAlign: 'left',
    flex: '1', 
  },
  companyInfo: {
    margin: '5px 0',
    color: 'white',
    fontSize: '16px'
  },
  companyInfoMobile: {
    textAlign: 'left',
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    marginBottom: '20px',
    fontSize: '1rem',
  },
  legalSection: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '16px',
    width: '100%',
    color: 'white'
  },
  legalSectionMobile: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  legalSectionTablet: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  legalLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: '16px',
    color: 'white'
  },
  legalLeftMobile: {
    justifyContent: 'center',
  },
  legalText: {
    margin: '0 10px', 
    color: 'white',
    fontSize: '16px'
  },
  legalLink: {
    textDecoration: 'none',
    margin: '0 10px', 
    color: '#E2E8F0', 
  },
  contactUsSectionMobile: {
    marginTop: '0px',
  },
  contactUsTextMobile: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'left',
  },
};

export default Footer;