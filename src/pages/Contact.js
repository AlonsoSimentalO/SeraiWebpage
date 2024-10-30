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

function Contact() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');

  const sectionGetTouchStyles = {
    ...styles.sectionGetTouch,
    ...(isMobile && styles.sectionGetTouchMobile),
    ...(isTablet && styles.sectionGetTouchTablet),
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

  const addressPStyles = {
    ...styles.addressP,
    ...(isMobile && styles.addressPMobile),
    ...(isTablet && styles.addressPTablet),
  };

  const dividerStyles = {
    ...styles.divider,
    ...(isMobile && styles.dividerMobile),
    ...(isTablet && styles.dividerTablet),
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={sectionGetTouchStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Get in Touch</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            We'd love to hear from you! Whether you have questions about our
            products, need support, or want to learn more about how Serai can
            enhance the quality of life for seniors, our team is here to help.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>

      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Contact US</h2>
        </div>
        <div style={textContainerStyles}>
          <div style={sectionTextStyles}>
            <p style={addressPStyles}> Serai AG </p>
            <p> Horneggstrasse 9 </p>
            <p> 8008 Zurich, Switzerland</p>
            <p>
              <b>Phone:</b> +41-44-6880168
            </p>
            <p>
              <b>Email:</b> info@seraispaces.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "calc(100vh - 5rem)",
  },
  divider: {
    height: "2px",
    backgroundColor: "#D3E4FF",
    width: "70%",
    margin: "1rem auto",
    display: "block",
  },
  dividerMobile: {
    width: "90%",
  },
  dividerTablet: {
    width: "80%",
    margin: "6rem auto 1rem auto", 
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
  sectionGetTouch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "6rem",
    marginInline: 'auto',
    maxWidth: '1440px',
    gap: '20px',
    width: '80%',
    paddingLeft: '6rem',
  },
  sectionGetTouchMobile: {
    flexDirection: "column",
    padding: "0 5%",
    width: "90%",
    margin: "2rem auto",
    height: "auto",
    alignItems: "center",
  },
  sectionGetTouchTablet: {
    flexDirection: "row",
    padding: "0 10%",
    width: "80%",
    alignItems: "flex-start",
    height: "auto",
  },
  sectionTitle: {
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "3rem",
    fontWeight: "500",
    fontFamily: "Atyp BL, sans-serif",
    marginTop: "0",
  },
  sectionTitleMobile: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  sectionTitleTablet: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    textAlign: "left",
  },
  sectionText: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
    marginTop: "0",
  },
  sectionTextMobile: {
    fontSize: "1.1rem",
    textAlign: "justify",
    lineHeight: '1.8'
  },
  sectionTextTablet: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
  },
  titleContainer: {
    flex: "0 0 350px",
    marginRight: "100px",
  },
  titleContainerMobile: {
    flex: "0 0 auto",
    marginRight: "0",
    marginBottom: "1rem",
    textAlign: "center",
    alignSelf: "center",
  },
  titleContainerTablet: {
    flex: "0 0 300px", 
    marginRight: "50px", // Reducir margen para tablets
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
  addressP: {
    marginTop: "0",
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "700",
  },
  addressPMobile: {
    fontSize: "1.1rem",
  },
  addressPTablet: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
};

export default Contact;