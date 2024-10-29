import React from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';
import { ReactComponent as SolutionIcon } from "../images/icons/solution_icon.svg";

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

function Insights() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const sectionStyles = {
    ...styles.section,
    ...(isMobile && styles.sectionMobile),
  };

  const titleContainerStyles = {
    ...styles.titleContainer,
    ...(isMobile && styles.titleContainerMobile),
  };

  const sectionTitleStyles = {
    ...styles.sectionTitle,
    ...(isMobile && styles.sectionTitleMobile),
  };

  const textContainerStyles = {
    ...styles.textContainer,
    ...(isMobile && styles.textContainerMobile),
  };

  const sectionTextStyles = {
    ...styles.sectionText,
    ...(isMobile && styles.sectionTextMobile),
  };

  const listItemStyles = {
    ...styles.listItem,
    ...(isMobile && styles.listItemMobile),
  };

  const sectionTextIconStyles = {
    ...styles.sectionTextIcon,
    ...(isMobile && styles.sectionTextIconMobile),
  };

  const dividerStyles = {
    ...styles.divider,
    ...(isMobile && styles.dividerMobile),
  };

  return (
    <div style={styles.container}>
      <Header />

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Our Scalable Solution</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            We leverage advanced machine learning and IoT technology to provide real-time monitoring, fall detection, and emergency notifications.
          </p>

          <p style={sectionTextStyles}>
            We offer an accessible, affordable, and home-integrated no-touch solution designed to improve the quality of life for the elderly.
          </p>
          <p style={sectionTextStyles}>
            By automating routine tasks and enhancing caregiver efficiency, Serai's approach reduces healthcare costs and improves the quality of life for the elderly.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>The Impact of Falls</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            Falls are a leading cause of injury and death among seniors, resulting in approximately 684,000 fatalities each year.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Privacy among Elderly Care</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            At Serai, we prioritize privacy, ensuring our solutions are both effective and trusted by users.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Our Milestones and Achievements</h2>
        </div>
        <div style={textContainerStyles}>
          <ul style={styles.list}>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={sectionTextStyles}>We have raised CHF 1.1 million in private investment.</p>
            </li>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={sectionTextStyles}>Secured Innosuisse funding through a research partnership with FHNW.</p>
            </li>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={sectionTextStyles}>Developed a fall detection and behavioral anomaly solution for the senior care market.</p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  divider: {
    height: '2px',
    backgroundColor: '#D3E4FF',
    width: '70%',
    display: 'block',
    margin: '2rem auto'
  },
  dividerMobile: {
    width: '90%',
  },
  section: {
    display: 'flex',
    padding: '0 20%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: '4rem auto',
    width: '65%'
  },
  sectionMobile: {
    flexDirection: 'column',
    padding: '0 5%',
    width: '90%',
    margin: '1rem auto',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: '0 0 450px',
    marginRight: '100px',
  },
  titleContainerMobile: {
    flex: '0 0 auto',
    marginRight: '0',
    marginBottom: '1rem',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  sectionTitle: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '500',
    fontFamily: 'Atyp BL, sans-serif',
    marginTop: '0'
  },
  sectionTitleMobile: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'left',
  },
  textContainer: {
    flex: '1',
    padding: '0 20px',
    position: "relative",
  },
  textContainerMobile: {
    padding: '0',
    marginBottom: '0rem'
  },
  sectionText: {
    fontSize: '1.3rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    lineHeight: "1.6",
    marginTop: "0",
  },
  sectionTextMobile: {
    fontSize: '1.1rem',
    textAlign: 'left',
    lineHeight: "1.8",
    marginBottom: '0rem'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '6rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0rem',
  },
  listItemMobile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  sectionTextIcon: {
    marginRight: "10px",
  },
  sectionTextIconMobile: {
    marginRight: '10px',
    marginBottom: '0',
  },
  checkIcon: {
    marginLeft: '-7px',
    height: '35px',
    marginRight: '10px',
    marginTop: '-20px'
  },
};

export default Insights; 