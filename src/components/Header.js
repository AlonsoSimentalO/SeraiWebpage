import React, { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef(null);

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const headerStyles = {
    ...styles.header,
    ...(isMobile && styles.headerMobile),
    ...(isTablet && styles.headerTablet),
  };

  const logoStyles = {
    ...styles.logo,
    ...(isMobile && styles.logoMobile),
    ...(isTablet && styles.logoTablet),
  };

  const navListStyles = {
    ...styles.navList,
    ...(isMobile && styles.navListMobile),
    ...(isTablet && styles.navListTablet),
  };

  const navLinkStyles = {
    ...styles.navLink,
    ...(isMobile && styles.navLinkMobile),
    ...(isTablet && styles.navLinkTablet),
  };

  const navLinks = [
    { path: 'AboutSerai', label: 'About Serai' },
    { path: 'research', label: 'Research' },
    { path: 'Insights', label: 'Insights' },
    { path: 'Partnerships', label: 'Partnerships' },
    { path: 'contact', label: 'Contact' },
  ];

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
            <nav ref={menuRef} style={styles.navContainerMobile}>
              <ul style={navListStyles}>
                {navLinks.map(({ path, label }) => (
                  <li style={styles.listItem} key={path}>
                    <Link
                      to={`/${path}`}
                      style={navLinkStyles}
                      onClick={() => setMenuOpen(false)}
                    >
                    <span className={location.pathname === `/${path}` ? 'menu-active-link' : 'menu-inactive-link' }> {label}</span>                    </Link>            
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <nav style={isTablet ? styles.navContainerTablet : styles.navContainer}>
          <ul style={navListStyles}>
            {navLinks.map(({ path, label }) => (
              <li
                style={
                  isTablet && label === 'Contact'
                    ? { ...styles.listItem, ...styles.contactListItemTablet }
                    : styles.listItem
                }
                key={path}
              >
                <Link to={`/${path}`} 
                style={navLinkStyles}>
                  <span className={location.pathname === `/${path}` ? 'menu-active-link' : 'menu-inactive-link' }> {label}</span>
                </Link>
          
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

const styles = {
  inactiveLink: {
    color: '#000'
  },
  activeLInk: {color: '#00FF00'},
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '1rem 3.2rem', 
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex:'10',
    width: '100%'
  },
  headerMobile: {
    padding: '1rem 1rem',
  },
  headerTablet: {
    padding: '1rem 4rem', 
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  currentVisit: {
    width: '100%',
    height: '2px',
    backgroundColor: 'rgb(58, 60, 230)',
    position: 'relative',
    top: '0.5rem',
    marginTop: '0.5rem',
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
  logoTablet: {
    height: '60px', 
    maxWidth: '100%',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto', 
  },
  navContainerTablet: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  navContainerMobile: {
    position: 'absolute',
    top: '99%',
    left: 0,
    backgroundColor: '#fff',
    width: '100%',
    padding: '1rem 0',
    boxSizing: 'border-box',
    zIndex: 999,
    boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    display: 'flex',
    gap: '3rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navListMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    padding: '0 1rem',
  },
  navListTablet: {
    display: 'flex',
    gap: '1.5rem', 
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#1E293B',
    fontSize: '18px',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '500',
  },
  navLinkMobile: {
    fontSize: '16px',
  },
  navLinkTablet: {
    fontSize: '16px',
    fontWeight: '500', 
  },
  listItem: {
    position: 'relative',
  },
  contactListItemTablet: {
    marginRight: '0',
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