import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function getUserLanguage() {
  const userLang = navigator.language || "en";
  if (userLang.startsWith("de")) return "de";
  if (userLang.startsWith("fr")) return "fr";
  if (userLang.startsWith("it")) return "it";
  return "en";
}

const language = getUserLanguage();

const translations = {
  en: {
    about: "About Serai",
    research: "Research",
    partnerships: "Partnerships",
    contact: "Contact",
    copyright: "Serai © 2024. All rights reserved."
  },
  de: {
    about: "Über Serai",
    research: "Forschung",
    partnerships: "Partner",
    contact: "Kontakt",
    copyright: "Serai © 2024. All rights reserved."
  },
  fr: {
    about: "À Propos de Serai",
    research: "Recherche",
    partnerships: "Partenariats",
    contact: "Contact",
    copyright: "Serai © 2024. All rights reserved."
  },
  it: {
    about: "Informazioni su Serai",
    research: "Ricerca",
    partnerships: "Partnerships",
    contact: "Contatti",
    copyright: "Serai © 2024. All rights reserved."
  }
};

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
          <Link to="/AboutSerai" className="link">{translations[language].about}</Link>
          <Link to="/research" className="link">{translations[language].research}</Link>
          <Link to="/Partnerships" className="link">{translations[language].partnerships}</Link>
          <Link to="/contact" className="link">{translations[language].contact}</Link>
        </div>
      </div>
      <div className="legal-section">
        <div className="legal-left">
          <p className="legal-text">{translations[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;