import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener); 
  }, [query]);

  return matches;
}

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const headerStyles = {
    ...styles.header,
    ...(isMobile && styles.headerMobile),
  };

  const logoStyles = {
    ...styles.logo,
    ...(isMobile && styles.logoMobile),
  };

  const navListStyles = {
    ...styles.navList,
    ...(isMobile && styles.navListMobile),
  };

  const navLinkStyles = {
    ...styles.navLink,
    ...(isMobile && styles.navLinkMobile),
  };

  return (
    <header style={headerStyles}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img
            src={require('../images/serai_logo.png')}
            alt="Serai Logo"
            style={logoStyles}
          />
        </Link>
      </div>

      {isMobile ? (
        <div style={styles.menuContainer}>
          <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </button>

          {menuOpen && (
            <nav style={styles.navContainerMobile}>
              <ul style={navListStyles}>
                {['About Serai', 'research', 'Insights', 'Partnerships', 'contact'].map((path) => (
                  <li style={styles.listItem} key={path}>
                    <Link
                      to={`/${path}`}
                      style={navLinkStyles}
                      onClick={() => setMenuOpen(false)}
                    >
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </Link>
                    {location.pathname === `/${path}` && (
                      <div style={styles.currentVisit}></div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <nav style={styles.navContainer}>
          <ul style={navListStyles}>
            {['About Serai', 'research', 'Insights', 'Partnerships', 'contact'].map((path) => (
              <li style={styles.listItem} key={path}>
                <Link to={`/${path}`} style={navLinkStyles}>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
                {location.pathname === `/${path}` && (
                  <div style={styles.currentVisit}></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '1rem 1rem',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  headerMobile: {
    padding: '1rem 1rem',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  currentVisit: {
    width: '115%',
    height: '2px',
    backgroundColor: 'rgb(58, 60, 230)',
    position: 'absolute',
    right: '-50%',
    left: '-50%',
    top: '1.5rem',
    placeSelf: 'center',
  },
  logoContainer: {
    flexShrink: 0,
  },
  logo: {
    height: '70px',
    maxWidth: '100%',
  },
  logoMobile: {
    height: '50px',
    maxWidth: '100%',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  navContainerMobile: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    width: '100%',
    padding: '1rem 0',
    boxSizing: 'border-box',
    zIndex: 999,
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navListMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '0 1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#1E293B',
    fontSize: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '600',
  },
  navLinkMobile: {
    fontSize: '0.9rem',
  },
  listItem: {
    position: 'relative',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30px',
    height: '25px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  bar: {
    width: '100%',
    height: '3px',
    backgroundColor: '#1E293B',
  },
};

export default Header;