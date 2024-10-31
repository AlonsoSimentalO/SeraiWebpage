import React from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';

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



  return (
    <div>
      <Header />

      <div className="page-container">

      <section>
          <h1>Join as a B2B partner</h1>
          <p>
          At Serai AG, we are dedicated to enhancing the safety, independence, and quality of life for older adults through innovative AI-driven solutions. 
          Our commitment to privacy and non-intrusive technology ensures that seniors can live comfortably and securely in their own homes.
          </p>
          <button className="cta" href={mailToLink} target="_blank" rel="noopener noreferrer">
          Become a Partner
          </button>
        </section>

        <div className="divider"></div>

        <section className="grid">
            <div>
              <h2>Why choose partnership</h2>
            </div>
            <div>
              <p>
              Serai AG leverages innovative, privacy-focused AI technology that ensures user dignity, backed by proven success 
              and scalable solutions for significant growth.
              </p>
            </div>
          </section>


   
          <div className="divider"></div>


          <section className="grid">
          <div>
            <h2>Who we Partner with</h2>
          </div>
          <div>
          <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <p>Healthcare Providers</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Insurance Companies</p>
                  </div>
                </li>
            
                <li >
                  <div >
                    <p>Senior Care Facilities</p>
                  </div>
                </li>
                <li >
                  <div >
                    <p>Government Institutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="grid">
            <div>
              <h2>Why choose partnership</h2>
            </div>
            <div>
              <img src={require('../images/FHNW_EN-removebg-preview.png')} alt="FHNW Partner" style={partnerImageLargeStyles} />
              <img src={require('../images/iNNO LOGO.png')} alt="Innosuisse Partner" style={partnerImageSmallStyles} />
            </div>
          </section>



          <div className="divider"></div>

          <section>
            <h1>Join our Journey</h1>
            <p>
            We’re always looking for great people to join our Serai team. 
            Check out our current job listings below and get in touch if you think you could be a good match.
            </p>
            <button className="cta" href={mailToLink} target="_blank" rel="noopener noreferrer">
            General Application
            </button>
        </section>

      </div>
      <Footer />
    </div>
  );
}

const styles = {

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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "4rem auto",
    maxWidth: '1440px',
    gap: '20px',
    width: '80%',
    paddingLeft: '6rem',

  },
  sectionMobile: {
    flexDirection: "column",
    padding: "0 5%",
    width: "90%",
    margin: "2rem auto",
    alignItems: "flex-start",
    paddingLeft: '0rem',
  },
  sectionTablet: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "3rem auto",
    paddingLeft: '0rem',
  },
  titleContainer: {
    maxWidth: '350px'
  },
  titleContainerMobile: {
    flex: "0 0 auto",
    marginRight: "0",
    marginBottom: "1rem",
    textAlign: "left",
    alignSelf: "stretch",
  },
  titleContainerTablet: {
    flex: '0 0 300px', 
    marginRight: '30px', 
  },

 sectionTitle: {
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2.5rem",
    fontWeight: "500",
    fontFamily: "Atyp BL, sans-serif",
    marginTop: "0",
    paddingLeft: '1rem',
    minWidth: '350px'
  },
  sectionTitleMobile: {
    fontSize: "2.2rem",
    marginBottom: "1rem",
    textAlign: "left",
  },
  sectionTitleTablet: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    textAlign: "left",
  },

   textContainer: {
    flex: "1",
    padding: "0 20px",
    position: "relative",
  },
  textContainerMobile: {
    padding: "0",
  },
  textContainerTablet: {
    padding: "0 10px",
  },


  sectionText: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
    maxWidth: '790px'
  },
  sectionTextMobile: {
    fontSize: "1.1rem",
    textAlign: "left",
    lineHeight: "1.8",
  },
  sectionTextTablet: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
  },
  
  list: {
    listStyleType: 'none',
    maxWidth: '790px'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem'
  },
  listItemMobile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  listItemTablet: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '1rem',
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
    width: '400px',
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
    width: '400px',
    marginBottom: '0rem',
  },
};

export default Partnerships;
