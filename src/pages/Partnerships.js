import React from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';

function Partnerships() {
  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.divider}></div>
      <div style={styles.sectionCentered}>
        <h2 style={styles.sectionTitleCentered}>Join as a B2B partner</h2>
        <p style={styles.sectionTextCentered}>
          At Serai AG, we are dedicated to enhancing the safety, independence, and quality of life for older adults through innovative AI-driven solutions. 
          Our commitment to privacy and non-intrusive technology ensures that seniors can live comfortably and securely in their own homes.
        </p>
        <button style={styles.becomePartnerButton}>Become a Partner</button>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Why choose partnership</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            Serai AG leverages innovative, privacy-focused AI technology that ensures user dignity, backed by proven success 
            and scalable solutions for significant growth.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Who we Partner with</h2>
        </div>
        <div style={styles.fixedHeightTextContainer}> {/* Nuevo contenedor con altura fija */}
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <img src={require('../images/check.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>Healthcare Providers</p>
            </li>
            <li style={styles.listItem}>
              <img src={require('../images/check.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>Insurance Companies</p>
            </li>
            <li style={styles.listItem}>
              <img src={require('../images/check.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>Senior Care Facilities</p>
            </li>
            <li style={styles.listItem}>
              <img src={require('../images/check.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>Government Institutions</p>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Our Partners so far</h2>
        </div>
        <div style={styles.imageContainer}>
          <img src={require('../images/fhnw.png')} alt="FHNW Partner" style={styles.partnerImageLarge} />
          <img src={require('../images/innosuisse.png')} alt="Innosuisse Partner" style={styles.partnerImageSmall} />
        </div>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.sectionCentered}>
        <h2 style={styles.sectionTitleCentered}>Join our Journey</h2>
        <p style={styles.sectionTextCentered}>
          We’re always looking for great people to join our Serai team. 
          Check out our current job listings below and get in touch if you think you could be a good match.
        </p>
        <button style={styles.becomePartnerButton}>General Application</button>
        <div style={styles.extraSpacing}></div>
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
    margin: '8rem auto 1rem auto',  
    display: 'block',
  },
  sectionCentered: {
    textAlign: 'center',
    padding: '0 20%',
    marginTop: '2rem',
  },
  section: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 20%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: '0 0 350px',
    marginRight: '100px',
  },
  sectionTitle: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2.5rem', 
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: '1.3rem', 
    textAlign: 'justify',
    lineHeight: '1.6',
  },
  textContainer: {
    flex: '1',
    padding: '0 20px',
  },
  fixedHeightTextContainer: { 
    flex: '1',
    padding: '0 190px',
  },
  sectionTitleCentered: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  sectionTextCentered: {
    fontSize: '1.5rem',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  becomePartnerButton: {
    padding: '15px 100px',
    fontSize: '1rem',
    backgroundColor: '#3A3CE6',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
  },
  extraSpacing: {
    height: '100px',  
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '0rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0rem',
  },
  checkIcon: {
    width: '30px', 
    height: '30px',
    marginRight: '10px',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: '1',
    padding: '0 70px',
  },
  partnerImageLarge: {
    width: '500px', 
    marginBottom: '4rem',
  },
  partnerImageSmall: {
    width: '200px', 
    marginBottom: '0rem',
  },
};

export default Partnerships;