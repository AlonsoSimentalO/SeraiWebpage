import React from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';

function Insights() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Our Scalable Solution</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            We leverage advanced machine learning and IoT technology to provide real-time monitoring, fall detection, and emergency notifications.
          </p>
          <p style={styles.sectionText}>
            We offer an accessible, affordable, and home-integrated no-touch solution designed to improve the quality of life for the elderly.
          </p>
          <p style={styles.sectionText}>
            By automating routine tasks and enhancing caregiver efficiency, Serai's approach reduces healthcare costs and improves the quality of life for the elderly.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>The Impact of Falls</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            Falls are a leading cause of injury and death among seniors, resulting in approximately 684,000 fatalities each year.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Privacy among Elderly Care</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            At Serai, we prioritize privacy, ensuring our solutions are both effective and trusted by users.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>
      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Our Milestones and Achievements</h2>
        </div>
        <div style={styles.textContainer}>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <img src={require('../images/check2.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>We have raised CHF 1.1 million in private investment.</p>
            </li>
            <li style={styles.listItem}>
              <img src={require('../images/check2.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>Secured Innosuisse funding through a research partnership with FHNW.</p>
            </li>
            <li style={styles.listItem}>
              <img src={require('../images/check2.png')} alt="Check" style={styles.checkIcon} />
              <p style={styles.sectionText}>Developed a fall detection and behavioral anomaly solution for the senior care market.</p>
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
    margin: '1rem auto'
  },
  section: {
    display: 'flex',
    padding: '0 20%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: '4rem auto'
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
    marginTop: '0'
  },
  textContainer: {
    flex: '1',
    padding: '0 20px',
  },
  sectionText: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    marginTop: '0'
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
  checkIcon: {
    marginLeft: '-7px',
    height: '40px',
    marginRight: '10px',
  },
};

export default Insights;