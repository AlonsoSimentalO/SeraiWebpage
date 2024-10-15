import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/">
        <img src={require('../images/serai_logo.png')} alt="Serai Logo" style={styles.logo} />
        </Link>
      </div>

      <nav style={styles.navContainer}>
        <ul style={styles.navList}>
          <li><Link to="/AboutSerai" style={styles.navLink}>About Serai</Link></li>
          <li><Link to="/Research" style={styles.navLink}>Research</Link></li>
          <li><Link to="/Insights" style={styles.navLink}>Insights</Link></li>
          <li><Link to="/Partnerships" style={styles.navLink}>Partnerships</Link></li>
          <li><Link to="/Contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',  
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '100%',
    margin: '0 auto',  
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: 'border-box',
  },
  logoContainer: {
    flexShrink: 0,  
    marginRight: 'auto',  
  },
  logo: {
    height: '50px',
    maxWidth: '100%',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end', 
    flexGrow: 1,
  },
  navList: {
    display: 'flex',
    gap: '5rem',  
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
  },
  
  '@media (max-width: 768px)': {  
    navList: {
      gap: '1rem',  
    },
    navLink: {
      fontSize: '0.9rem',  
    },
  },
  '@media (max-width: 480px)': {  
    header: {
      flexDirection: 'column', 
      alignItems: 'flex-start',
    },
    navList: {
      flexDirection: 'column',  
      gap: '0.5rem',  
    },
    navLink: {
      fontSize: '0.85rem',  
    },
  },
};

export default Header;