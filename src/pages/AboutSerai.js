import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import emreImage from '../images/linkedin/emre.jpg';
import alenImage from '../images/linkedin/alen.jpg';
import frankImage from '../images/linkedin/frank.jpg';
import pinarImage from '../images/linkedin/pinar.jpg';
import evrimImage from '../images/linkedin/evrim.jpg';
import eduardoImage from '../images/linkedin/eduardo.jpg';
import robertImage from '../images/linkedin/robert.jpg';
import kevinImage from '../images/linkedin/kevin.jpg';
import burakImage from '../images/linkedin/burak.jpg';
import arzuImage from '../images/linkedin/arzu.jpg';
import antonImage from '../images/linkedin/anton.jpg';
import linkedinIcon from '../images/linkedin/linkedin_icon.png';

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

function AboutSerai() { 
  const [hoverIndex, setHoverIndex] = useState(-1);
  
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');
  
  const goalStylesArray = [
    { width: '75%' },  
    { width: '90%' },  
    { width: '100%' }  
  ];

  const teamMembers = [
    { name: 'Emre Tuna', role: 'Investor and Executive Board Member', image: emreImage, linkedin: 'https://www.linkedin.com/in/emre-tuna-09b7b280/' },
    { name: 'Alen Selim Kimer', role: 'Executive Board Member', image: alenImage, linkedin: 'https://www.linkedin.com/in/selimkimer/' },
    { name: 'Frank Theelen', role: 'Advisory Board Member and Head of Strategic Partnerships', image: frankImage, linkedin: 'https://www.linkedin.com/in/franktheelen/' },
    { name: 'Pinar Yaktiyol', role: 'Advisory Board Member', image: pinarImage, linkedin: 'https://www.linkedin.com/in/yaktiyolpinar/' },
    { name: 'Evrim Firatli', role: 'ML Intern', image: evrimImage, linkedin: 'https://www.linkedin.com/in/firatlievrim/' },
    { name: 'Eduardo Castello Ferrer', role: 'Advisory Board Member', image: eduardoImage, linkedin: 'https://www.linkedin.com/in/eduardocastelloferrer/' },
    { name: 'Robert Hasson', role: 'Advisory Board Member', image: robertImage, linkedin: 'https://www.linkedin.com/in/robert-hasson/' },
    { name: 'Kevin Schawinsk', role: 'Advisory Board Member', image: kevinImage, linkedin: 'https://www.linkedin.com/in/kevin-schawinski-517b2a74/' },
    { name: 'Burak Yetiskin', role: 'Founder, Ex-CEO, Advisory Board Member', image: burakImage, linkedin: 'https://www.linkedin.com/in/burakyetiskin/' },
  ];

  const researchPartners = [
    { name: 'Prof. Dr. Arzu Coltekin', role: 'Advisory Board Member', image: arzuImage, linkedin: 'https://www.linkedin.com/in/arzucoltekin/' },
    { name: 'Prof. Dr. Anton Fedosov', role: 'Advisory Board Member', image: antonImage, linkedin: 'https://www.linkedin.com/in/antonfedosov/' }
  ];

  const TeamMember = ({ name, role, image, linkedin }) => (
    <div style={{ 
      ...styles.memberContainer, 
      ...(isMobile && styles.memberContainerMobile),
      ...(isTablet && styles.memberContainerTablet),
    }}>
      <img src={image} alt={name} style={{ 
        ...styles.memberImage, 
        ...(isMobile && styles.memberImageMobile),
        ...(isTablet && styles.memberImageTablet),
      }} />
      <h3 style={{ 
        ...styles.memberName, 
        ...(isMobile && styles.memberNameMobile),
        ...(isTablet && styles.memberNameTablet),
      }}>{name}</h3>
      <p style={{ 
        ...styles.memberRole, 
        ...(isMobile && styles.memberRoleMobile),
        ...(isTablet && styles.memberRoleTablet),
      }}>{role}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" style={styles.linkedinIcon} />
      </a>
    </div>
  );

  const researchTitleStyles = {
    ...styles.researchTitle,
    ...(isMobile && styles.researchTitleMobile),
    ...(isTablet && styles.researchTitleTablet),
  };

  return (
    <div style={{
      ...styles.container,
      ...(isMobile && { overflowX: 'hidden' }), // Evita el desbordamiento horizontal en móviles
    }}>
      <Header />
        <div className="page-container">
          
          <div className="goals-section"> 
              <h1 >
              These goals drive Us:
              </h1>
              <div className="goals">
                {["Enhancing safety and independence to empower the elderly",
                  "Advancing intelligent monitoring solutions for proactive care",
                  "Investing in ongoing R&D to continuously improve the evolving needs of the elderly population",
                ].map((goal, index) => (
                  <p style={{ 
                    ...styles.goal, 
                    ...goalStylesArray[index], 
                    transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)', 
                    transition: 'transform 0.3s ease',
                    ...(isMobile && styles.goalMobile),
                    ...(isTablet && styles.goalTablet),
                  }} 
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}>
                    {index + 1}. {goal}
                  </p>
                ))}
              </div>
          </div>
          
          <div className="divider"></div>
          
          <section className="grid">
            <div>
              <h2>About Serai</h2>
            </div>
            <div>
              <p>
              Serai develops privacy-focused software and intelligent monitoring algorithms to enhance safety and independence for the elderly. Our technology detects unusual activity patterns, identifying risks and enabling timely intervention to create safer living environments.
              </p>
            </div>
          </section>
          
          <div className="divider"></div>
          <section className="grid">
            <div>
              <h2>Research</h2>
            </div>
            <div>
              <p>
              Through a collaborative research project with FHNW, supported by Innosuisse’s Innocheque, Serai is advancing elderly care. With CHF <span className="highlight">1.1 million</span> in private seed funding and a 
              patent application underway, we are committed to pioneering solutions that empower elderly individuals and support caregivers.           </p>
            </div>
          </section>

          <div className="divider"></div>

          <section className="grid">
            <div>
              <h2>The Problem</h2>
            </div>
            <div>
              <p>
              Rising Elderly Population: Projected to reach <span className="highlight">1.5 billion</span> by <span className="highlight">2050</span>.
              High Fall Incidence and Costs: In Switzerland, <span className="highlight">90,000</span> falls yearly lead to <span className="highlight">CHF 1.9 billion</span> in healthcare costs.
              Limitations of Wearable Devices: Over <span className="highlight">80%</span> of seniors avoid wearables due to discomfort.            </p>
            </div>
          </section>
          <div className="divider"></div>

          <section className="grid">
            <div>
              <h2>Our Solution</h2>
            </div>
            <div>
            <div className="icon-list">
                <ul>
                  <li>
                    <div>
                      <h5>Non-Intrusive Monitoring</h5>
                      <p>Serai’s system uses advanced sensors and cameras to monitor safety without the need for wearables.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>Immediate Alerts</h5>
                      <p>AI-powered fall detection sends real-time alerts to caregivers.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>Privacy and Cost Savings</h5>
                      <p>Enhances safety and reduces healthcare costs through proactive fall prevention.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="divider"></div>

          <section className="grid">
            <div>
              <h2>Our Solution</h2>
            </div>
            <div>
            <div className="icon-list">
                <ul>
                  <li>
                    <div>
                      <h5>Economic Impact</h5>
                      <p>Serai offers a cost-effective alternative to traditional elderly care, with a low monthly subscription fee compared to the average <span className="highlight">CHF 9,122</span> monthly care costs.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>Social Impact</h5>
                      <p>Our solution promotes independence and safety for the elderly, easing caregiver burdens and enhancing family support.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <div className="divider"></div>
          <div style={styles.teamSection}>
            <h2 style={{ 
              ...styles.teamTitle, 
              ...(isMobile && styles.teamTitleMobile),
              ...(isTablet && styles.teamTitleTablet),
            }}>Meet Our Team</h2>
            <p style={{ 
              ...styles.teamDescription, 
              ...(isMobile && styles.teamDescriptionMobile),
              ...(isTablet && styles.teamDescriptionTablet),
            }}>
              Serai Team Advisory and Executive Board Member Committee
            </p>
            <div style={{ 
              ...styles.teamMembers, 
              ...(isMobile && styles.teamMembersMobile),
              ...(isTablet && styles.teamMembersTablet),
            }}>
              {teamMembers.map(member => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>

          <div style={researchTitleStyles}>Research Partners</div>
          <div style={{ 
            ...styles.researchPartners, 
            ...(isMobile && styles.researchPartnersMobile),
            ...(isTablet && styles.researchPartnersTablet),
          }}>
            {researchPartners.map(partner => (
              <TeamMember key={partner.name} {...partner} />
            ))}
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
  content: {
    flex: 1,
    padding: '0',
    width: '100%',
  },
  contentMobile: {
    padding: '1rem',
  },
  title: {
    textAlign: 'left',
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    marginLeft: '20%',
  },
  titleMobile: {
    textAlign: 'center',
    marginLeft: '0',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  titleTablet: {
    textAlign: 'center',
    marginLeft: '0',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  goals: {
    marginTop: '2rem',
    padding: '0',
    fontSize: '1.4rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    lineHeight: '1.8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: '4rem'
  },
  goalsMobile: {
    padding: '0 4%',
    marginBottom: '2rem',
    width: '84%'
  },
  goalsTablet: {
    padding: '0 10%',
    marginBottom: '3rem',
    width: '80%',
  },
  goal: {
    textAlign: 'left',
    backgroundColor: '#2176FF33',
    color: '#1A0046',
    borderRadius: '5px',
    fontWeight: '600',
    display: 'block',
  },
  goalMobile: {
    textAlign: 'center',
    fontSize: '1.1rem',
  },
  goalTablet: {
    textAlign: 'left',
    fontSize: '1.2rem',
  },
  divider: {
    height: '2px',
    backgroundColor: '#D3E4FF',
    width: '70%', 
    margin: '1rem auto',
    display: 'block'
  },
  dividerMobile: {
    width: "90%",
  },
  dividerTablet: {
    width: "80%",
  },
  section: {
    display: 'flex',
    margin: '4rem auto',
    padding: '0 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "65%",
  },
  sectionMobile: {
    flexDirection: "column",
    padding: "0 5%",
    width: "90%",
    margin: "2rem auto",
    alignItems: "flex-start",
  },
  sectionTablet: {
    flexDirection: "row",
    padding: "0 10%",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "3rem auto",
  },
  titleContainer: {
    flex: '0 0 350px',
    marginRight: '100px'
  },
  titleContainerMobile: {
    flex: "0 0 auto",
    width: "100%",
    marginRight: "0",
    marginBottom: "1rem",
    textAlign: "left",
    alignSelf: "stretch",
  },
  titleContainerTablet: {
    flex: '0 0 300px', 
    marginRight: '0px', 
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
    flex: '1',
    padding: '0 20px',
    position: 'relative',
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
    lineHeight: '1.6',
    marginTop: '0',
  },
  sectionTextMobile: {
    fontSize: '1.1rem',
    textAlign: 'left',
    lineHeight: '1.8',
  },
  sectionTextTablet: {
    fontSize: '1.2rem',
    lineHeight: '1.7',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2176FF', 
  },
  teamSection: {
    marginTop: '5rem', 
    textAlign: 'center', 
  },
  teamTitle: {
    fontSize: '3.2rem',  
    fontWeight: '700',
    fontFamily: 'Atyp BL, sans-serif',
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  teamTitleMobile: {
    fontSize: '2.5rem',
  },
  teamTitleTablet: {
    fontSize: '2.8rem',
  },
  teamDescription: {
    fontSize: '2rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#1A0046',  
    textAlign: 'center',
    marginTop: '5rem',
    marginBottom: '1rem',
  },
  teamDescriptionMobile: {
    fontSize: '1.5rem',
    marginTop: '2rem',
  },
  teamDescriptionTablet: {
    fontSize: '1.8rem',
    marginTop: '3rem',
  },
  teamMembers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center'
  },
  teamMembersMobile: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  teamMembersTablet: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  researchTitle: {
    fontSize: '2rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#1A0046',  
    textAlign: 'center',
    marginTop: '5rem',
    marginBottom: '1rem',
  },
  researchTitleMobile: {
    fontSize: '1.5rem',
    marginTop: '3rem',
  },
  researchTitleTablet: {
    fontSize: '1.8rem',
    marginTop: '4rem',
  },
  researchPartners: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '50px',
    justifyItems: 'center',
    marginBottom: '5rem'
  },
  researchPartnersMobile: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  researchPartnersTablet: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  memberContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    width: '250px',
    marginTop: '7rem',
  },
  memberContainerMobile: {
    marginTop: '3rem',
    width: '80%',
  },
  memberContainerTablet: {
    marginTop: '4rem',
    width: '220px',
  },
  memberImage: {
    width: '100%',
    height: 'auto', 
    clipPath: 'polygon(50% 0%, 98% 22%, 98% 78%, 50% 100%, 2% 78%, 2% 22%)',
  },
  memberImageMobile: {
    width: '100%',
  },
  memberImageTablet: {
    width: '90%', 
  },
  memberName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    fontFamily: 'Atyp BL, sans-serif',
    marginTop: '10px',
    marginBottom: '0px',
  },
  memberNameMobile: {
    fontSize: '1.2rem',
  },
  memberNameTablet: {
    fontSize: '1.3rem',
  },
  memberRole: {
    fontSize: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#3E3E59',
    marginBottom: '10px',
    flex: '1', 
  },
  memberRoleMobile: {
    fontSize: '0.9rem',
  },
  memberRoleTablet: {
    fontSize: '1rem',
  },
  linkedinIcon: {
    width: '36px',
    height: '36px',
    marginBottom: '10px', 
  },
};

export default AboutSerai;