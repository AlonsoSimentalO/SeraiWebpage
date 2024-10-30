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

function Partnerships() {
  const mailToLink = "mailto:info@seraispaces.com";
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');

  const sectionCenteredStyles = {
    ...styles.sectionCentered,
    ...(isMobile && styles.sectionCenteredMobile),
    ...(isTablet && styles.sectionCenteredTablet),
  };

  const sectionTitleCenteredStyles = {
    ...styles.sectionTitleCentered,
    ...(isMobile && styles.sectionTitleCenteredMobile),
    ...(isTablet && styles.sectionTitleCenteredTablet),
  };

  const sectionTextCenteredStyles = {
    ...styles.sectionTextCentered,
    ...(isMobile && styles.sectionTextCenteredMobile),
    ...(isTablet && styles.sectionTextCenteredTablet),
  };

  const becomePartnerButtonStyles = {
    ...styles.becomePartnerButton,
    ...(isMobile && styles.becomePartnerButtonMobile),
    ...(isTablet && styles.becomePartnerButtonTablet),
  };

  const sectionStyles = {
    ...styles.section,
    ...(isMobile && styles.sectionMobile),
    ...(isTablet && styles.sectionTablet),
  };

  const titleContainerStyles = {
    ...styles.titleContainer,
    ...(isMobile && styles.titleContainerMobile),
    ...(isTablet && styles.titleContainerTablet),
  };

  const sectionTitleStyles = {
    ...styles.sectionTitle,
    ...(isMobile && styles.sectionTitleMobile),
    ...(isTablet && styles.sectionTitleTablet),
  };

  const textContainerStyles = {
    ...styles.textContainer,
    ...(isMobile && styles.textContainerMobile),
    ...(isTablet && styles.textContainerTablet),
  };

  const sectionTextStyles = {
    ...styles.sectionText,
    ...(isMobile && styles.sectionTextMobile),
    ...(isTablet && styles.sectionTextTablet),
  };

  const listItemStyles = {
    ...styles.listItem,
    ...(isMobile && styles.listItemMobile),
    ...(isTablet && styles.listItemTablet),
  };

  const listTextStyles = {
    ...styles.listText,
    ...(isMobile && styles.listTextMobile),
    ...(isTablet && styles.listTextTablet),
  };

  const sectionTextIconStyles = {
    ...styles.sectionTextIcon,
    ...(isMobile && styles.sectionTextIconMobile),
    ...(isTablet && styles.sectionTextIconTablet),
  };

  const imageContainerStyles = {
    ...styles.imageContainer,
    ...(isMobile && styles.imageContainerMobile),
    ...(isTablet && styles.imageContainerTablet),
  };

  const partnerImageLargeStyles = {
    ...styles.partnerImageLarge,
    ...(isMobile && styles.partnerImageLargeMobile),
    ...(isTablet && styles.partnerImageLargeTablet),
  };

  const partnerImageSmallStyles = {
    ...styles.partnerImageSmall,
    ...(isMobile && styles.partnerImageSmallMobile),
    ...(isTablet && styles.partnerImageSmallTablet),
  };

  const extraSpacingStyles = {
    ...styles.extraSpacing,
    ...(isMobile && styles.extraSpacingMobile),
    ...(isTablet && styles.extraSpacingTablet),
  };

  const dividerStyles = {
    ...styles.divider,
    ...(isMobile && styles.dividerMobile),
    ...(isTablet && styles.dividerTablet),
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={sectionCenteredStyles}>
        <h2 style={sectionTitleCenteredStyles}>Join as a B2B partner</h2>
        <p style={sectionTextCenteredStyles}>
          At Serai AG, we are dedicated to enhancing the safety, independence, and quality of life for older adults through innovative AI-driven solutions. 
          Our commitment to privacy and non-intrusive technology ensures that seniors can live comfortably and securely in their own homes.
        </p>
        <a href={mailToLink} target="_blank" rel="noopener noreferrer">
          <button style={becomePartnerButtonStyles}>Become a Partner</button>
        </a>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Why choose partnership</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            Serai AG leverages innovative, privacy-focused AI technology that ensures user dignity, backed by proven success 
            and scalable solutions for significant growth.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Who we Partner with</h2>
        </div>
        <div style={textContainerStyles}> 
          <ul style={styles.list}>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={listTextStyles}>Healthcare Providers</p>
            </li>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={listTextStyles}>Insurance Companies</p>
            </li>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={listTextStyles}>Senior Care Facilities</p>
            </li>
            <li style={listItemStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <p style={listTextStyles}>Government Institutions</p>
            </li>
          </ul>
        </div>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Our Partners so far</h2>
        </div>
        <div style={imageContainerStyles}>
          <img src={require('../images/FHNW_EN-removebg-preview.png')} alt="FHNW Partner" style={partnerImageLargeStyles} />
          <img src={require('../images/iNNO LOGO.png')} alt="Innosuisse Partner" style={partnerImageSmallStyles} />
        </div>
      </div>

      <div style={dividerStyles}></div>
      <div style={sectionCenteredStyles}>
        <h2 style={sectionTitleCenteredStyles}>Join our Journey</h2>
        <p style={sectionTextCenteredStyles}>
          We’re always looking for great people to join our Serai team. 
          Check out our current job listings below and get in touch if you think you could be a good match.
        </p>
        <a href={mailToLink} target="_blank" rel="noopener noreferrer">
          <button style={becomePartnerButtonStyles}>General Application</button>
        </a>
        <div style={extraSpacingStyles}></div>
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
    margin: '8rem auto 1rem auto',  
  },
  dividerMobile: {
    width: '90%',
    margin: '4rem auto 1rem auto',
  },
  dividerTablet: {
    width: '80%',
    margin: '6rem auto 1rem auto',
  },
  sectionCentered: {
    textAlign: 'center',
    padding: '0 20%',
    marginTop: '2rem',
  },
  sectionCenteredMobile: {
    padding: '0 5%',
    marginTop: '1rem',
    textAlign: 'left',
  },
  sectionCenteredTablet: {
    padding: '0 10%',
    marginTop: '2rem',
    width: '80%',
  },
  sectionTitleCentered: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3.5rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    marginBottom: '2.5rem',
  },
  sectionTitleCenteredMobile: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'left',
  },
  sectionTitleCenteredTablet: {
    fontSize: '3rem',
    marginBottom: '2.5rem',
  },
  sectionTextCentered: {
    fontSize: '1.3rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  sectionTextCenteredMobile: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    textAlign: 'left',
  },
  sectionTextCenteredTablet: {
    fontSize: '1.3rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  becomePartnerButton: {
    padding: '28px 100px',
    fontSize: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '700',
    backgroundColor: '#3A3CE6',
    color: 'white',
    border: 'none',
    borderRadius: '48px',
    cursor: 'pointer',
  },
  becomePartnerButtonMobile: {
    padding: '14px 50px',
  },
  becomePartnerButtonTablet: {
    padding: '20px 70px',
  },
  extraSpacing: {
    height: '100px',  
  },
  extraSpacingMobile: {
    height: '50px',
  },
  extraSpacingTablet: {
    height: '75px',
  },
  section: {
    display: 'flex',
    padding: '0 20%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: '4rem auto',
    width: '60%',
  },
  sectionMobile: {
    flexDirection: 'column',
    padding: '0 5%',
    width: '90%',
    margin: '2rem auto',
    alignItems: 'flex-start',
  },
  sectionTablet: {
    flexDirection: 'row',
    padding: '0 10%',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '3rem auto',
  },
  titleContainer: {
    flex: '0 0 350px',
    marginRight: '100px',
  },
  titleContainerMobile: {
    flex: '0 0 auto',
    marginRight: '0',
    marginBottom: '1rem',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  titleContainerTablet: {
    flex: '0 0 300px', 
    marginRight: '15px',
  },
  sectionTitle: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '500',
    fontFamily: 'Atyp BL, sans-serif',
    marginTop: '0',
  },
  sectionTitleMobile: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    textAlign: 'left',
  },
  sectionTitleTablet: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textAlign: 'left',
  },
  textContainer: {
    flex: '1',
    padding: '0 20px',
  },
  textContainerMobile: {
    padding: '0',
  },
  textContainerTablet: {
    padding: '0 10px',
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
  },
  sectionTextTablet: {
    fontSize: '1.2rem',
    lineHeight: "1.7",
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '0rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0',
  },
  listItemMobile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: '1rem 0',
  },
  listItemTablet: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '1rem 0',
  },
  listText: {
    fontSize: '1.3rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'justify',
    lineHeight: '1.6',
    margin: '0',
  },
  listTextMobile: {
    fontSize: '1.1rem',
    textAlign: 'left',
  },
  listTextTablet: {
    fontSize: '1.2rem',
    textAlign: 'left',
  },
  sectionTextIcon: {
    marginRight: "10px",
  },
  sectionTextIconMobile: {
    marginRight: '10px',
    marginBottom: '0',
  },
  sectionTextIconTablet: {
    marginRight: '10px',
    marginBottom: '0',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: '1',
    padding: '0 0',
  },
  imageContainerMobile: {
    alignItems: 'flex-start',
  },
  imageContainerTablet: {
    alignItems: 'flex-start',
    padding: '0 10px',
  },
  partnerImageLarge: {
    width: '500px', 
    marginBottom: '4rem',
  },
  partnerImageLargeMobile: {
    width: '80%',
    marginBottom: '2rem',
  },
  partnerImageLargeTablet: {
    width: '90%',
    marginBottom: '3rem',
  },
  partnerImageSmall: {
    width: '500px', 
    marginBottom: '0rem',
  },
  partnerImageSmallMobile: {
    width: '80%',
    marginBottom: '0rem',
  },
  partnerImageSmallTablet: {
    width: '90%',
    marginBottom: '0rem',
  },
};

export default Partnerships;