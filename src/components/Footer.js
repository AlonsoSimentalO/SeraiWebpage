import React from 'react';
import { Link } from 'react-router-dom';

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(() => window.matchMedia(query).matches);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener); 
  }, [query]);

  return matches;
}

function Footer() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');

  const footerContentStyles = {
    ...styles.footerContent,
    ...(isMobile && styles.footerContentMobile),
    ...(isTablet && styles.footerContentTablet),
  };

  const logoSectionStyles = {
    ...styles.logoSection,
    ...(isMobile && styles.logoSectionMobile),
    ...(isTablet && styles.logoSectionTablet),
  };

  const infoSectionStyles = {
    ...styles.infoSection,
    ...(isMobile && styles.infoSectionMobile),
    ...(isTablet && styles.infoSectionTablet),
  };

  const legalSectionStyles = {
    ...styles.legalSection,
    ...(isMobile && styles.legalSectionMobile),
    ...(isTablet && styles.legalSectionTablet),
  };

  return (
    <div style={{
      ...styles.footer,
      ...(isMobile && styles.footerMobile), // Aplicar estilos móviles al footer
    }}>
      <div style={footerContentStyles}>
        <div style={logoSectionStyles}>
          <img src={require('../images/serai_logo_negative.png')} alt="Serai Logo" style={styles.logo} />
        </div>
        {isMobile && (
          <div style={styles.contactUsSectionMobile}>
            <p style={styles.contactUsTextMobile}>Contact Us</p>
          </div>
        )}
        <div style={infoSectionStyles}>
          <p style={styles.companyInfo}>Serai AG</p>
          <p style={styles.companyInfo}>Horneggstrasse 9</p>
          <p style={styles.companyInfo}>8008 Zurich, Switzerland</p>
          <p style={styles.companyInfo}>+41-44-8806188</p>
          <p style={styles.companyInfo}>info@seraispaces.com</p>
        </div>
        {!isMobile && (
          <div style={styles.linksSection}>
            <Link to="/AboutSerai" style={styles.link}>About Serai</Link>
            <Link to="/research" style={styles.link}>Research</Link>
            <Link to="/Insights" style={styles.link}>Insights</Link>
            <Link to="/Partnerships" style={styles.link}>Partnerships</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        )}
      </div>
      <div style={legalSectionStyles}>
        <div style={styles.legalLeft}>
          <p style={styles.legalText}>Serai © 2024. All rights reserved.</p>
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
    gap: '500px',
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
    fontSize: '0.8rem',
    width: '100%',
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
  },
  legalLeftMobile: {
    justifyContent: 'center',
  },
  legalText: {
    margin: '0 10px', 
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