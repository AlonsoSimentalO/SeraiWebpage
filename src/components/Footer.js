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
  const isMobile = useMediaQuery('(max-width: 768px)');

  const footerContentStyles = {
    ...styles.footerContent,
    ...(isMobile && styles.footerContentMobile),
  };

  const infoSectionStyles = {
    ...styles.infoSection,
    ...(isMobile && styles.infoSectionMobile),
  };

  const linksSectionStyles = {
    ...styles.linksSection,
    ...(isMobile && styles.linksSectionMobile),
  };

  const legalSectionStyles = {
    ...styles.legalSection,
    ...(isMobile && styles.legalSectionMobile),
  };

  const legalLeftStyles = {
    ...styles.legalLeft,
    ...(isMobile && styles.legalLeftMobile),
  };

  return (
    <div style={styles.footer}>
      <div style={footerContentStyles}>
        <div style={styles.logoSection}>
          <img src={require('../images/serai_logo_negative.png')} alt="Serai Logo" style={styles.logo} />
        </div>
        <div style={infoSectionStyles}>
          <p style={styles.companyInfo}>Serai AG</p>
          <p style={styles.companyInfo}>Horneggstrasse 9</p>
          <p style={styles.companyInfo}>8008 Zurich, Switzerland</p>
          <p style={styles.companyInfo}>+41-44-8806188</p>
          <p style={styles.companyInfo}>info@seraispaces.com</p>
        </div>
        <div style={linksSectionStyles}>
          <Link to="/AboutSerai" style={styles.link}>About Serai</Link>
          <Link to="/research" style={styles.link}>Research</Link>
          <Link to="/Insights" style={styles.link}>Insights</Link>
          <Link to="/Partnerships" style={styles.link}>Partnerships</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
      </div>
      <div style={legalSectionStyles}>
        <div style={legalLeftStyles}>
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
    padding: '20px 50px',
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
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: '20px',
    borderBottom: '1px solid #444',
    gap: '500px',
  },
  logoSection: {
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
  companyInfo: {
    margin: '5px 0',
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
  },
  legalSection: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '0.8rem',
    width: '100%',
  },
  legalLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  legalText: {
    margin: '0 10px', 
  },
  legalLink: {
    textDecoration: 'none',
    margin: '0 10px', 
    color: '#E2E8F0', 
  },
  footerContentMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    paddingBottom: '10px',
  },
  infoSectionMobile: {
    alignItems: 'center',
    marginLeft: '0',
    textAlign: 'center',
  },
  linksSectionMobile: {
    alignItems: 'center',
  },
  legalSectionMobile: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  legalLeftMobile: {
    justifyContent: 'center',
  },
};

export default Footer;