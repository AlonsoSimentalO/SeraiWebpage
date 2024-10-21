import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img src={require('../images/serai_logo.png')} alt="Serai Logo" style={styles.logo} />
        </Link>
      </div>

      <nav style={styles.navContainer}>
        <ul style={styles.navList}>
          <li style={styles.listItem}>
            <Link to="/AboutSerai" style={styles.navLink}>About Serai</Link>
            { location.pathname === "/AboutSerai" &&
             (<div style={styles.currentVisit}></div>)
             }
          </li>
          <li style={styles.listItem}><Link to="/research" style={styles.navLink}>Research</Link>
          { location.pathname === "/research" &&
             (<div style={styles.currentVisit}></div>)
             }
          </li>
          <li style={styles.listItem}><Link to="/Insights" style={styles.navLink}>Insights</Link> { location.pathname === "/Insights" &&
             (<div style={styles.currentVisit}></div>)
             }</li>
          <li style={styles.listItem}><Link to="/Partnerships" style={styles.navLink}>Partnerships</Link>
          { location.pathname === "/Partnerships" &&
             (<div style={styles.currentVisit}></div>)
             }
          </li>
          <li style={styles.listItem}><Link to="/contact" style={styles.navLink}>Contact</Link>
          { location.pathname === "/contact" &&
             (<div style={styles.currentVisit}></div>)
             }
          </li>
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
    width: '100%',
    margin: '0 auto',  
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: 'border-box',
  },
  currentVisit: {
    width: '115%',
    height: '2px',
    backgroundColor: 'rgb(58, 60, 230)',
    position: 'absolute',
    right: '-50%',
    left: '-50%',
    top: '1.5rem',
    placeSelf: 'center'
  },
  logoContainer: {
    flexShrink: 0,  
    marginRight: 'auto',  
  },
  logo: {
    height: '70px',
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
    color: '#1E293B',
    fontSize: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '600',
  },
  listItem: {
    position: 'relative'
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