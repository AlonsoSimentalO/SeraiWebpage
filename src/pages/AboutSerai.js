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
  
  const goalStylesArray = [
    { width: '75%' },  
    { width: '90%' },  
    { width: '100%' }  
  ];

  const dividerStyles = {
    ...styles.divider,
    ...(isMobile && styles.dividerMobile),
  };

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
    <div style={{ ...styles.memberContainer, ...(isMobile && styles.memberContainerMobile) }}>
      <img src={image} alt={name} style={{ ...styles.memberImage, ...(isMobile && styles.memberImageMobile) }} />
      <h3 style={{ ...styles.memberName, ...(isMobile && styles.memberNameMobile) }}>{name}</h3>
      <p style={{ ...styles.memberRole, ...(isMobile && styles.memberRoleMobile) }}>{role}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" style={styles.linkedinIcon} />
      </a>
    </div>
  );

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

  const researchTitleStyles = {
    ...styles.researchTitle,
    ...(isMobile && styles.researchTitleMobile),
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <h1 style={{ ...styles.title, ...(isMobile && styles.titleMobile) }}>These goals drive Us:</h1>
        <div style={{ ...styles.goals, ...(isMobile && styles.goalsMobile) }}>
          {["Improving the safety, independence, and well-being of older adults.",
            "Developing advanced software and algorithms to detect irregularities in the lives of older adults.",
            "Invest in ongoing research and development to continuously improve the evolving needs of the elderly population.",
          ].map((goal, index) => (
            <p style={{ 
              ...styles.goal, 
              ...goalStylesArray[index], 
              transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              ...(isMobile && styles.goalMobile),
            }} 
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}>
              {index + 1}. {goal}
            </p>
          ))}
        </div>
        <div style={dividerStyles}></div>
        <div style={sectionStyles}>
          <div style={titleContainerStyles}>
            <h2 style={sectionTitleStyles}>About Serai</h2>
          </div>
          <div style={textContainerStyles}>
            <p style={sectionTextStyles}>
              We build software and research algorithms to detect irregularities in everyday life of elderly. We detect fall in living spaces, monitor mood changes in daily behaviour and spot other behavioural anomalies commonly seen among seniors.
            </p>
          </div>
        </div>

        <div style={dividerStyles}></div>
        <div style={sectionStyles}>
          <div style={titleContainerStyles}>
            <h2 style={sectionTitleStyles}>Research</h2>
          </div>
          <div style={textContainerStyles}>
            <p style={sectionTextStyles}>
              We not only do engineering but also commit to 
              <span style={styles.highlight}> CHF 1M+</span> research with FHNW in Aargau to develop our patented technology.
              Headquartered in Zurich, Switzerland, we are committed to enhancing the safety, 
              independence, and wellbeing of older adults. We believe in our product, and utilize it for our families.
            </p>
          </div>
        </div>

        <div style={dividerStyles}></div>
        <div style={sectionStyles}>
          <div style={titleContainerStyles}>
            <h2 style={sectionTitleStyles}>The Problem</h2>
          </div>
          <div style={textContainerStyles}>
            <p style={sectionTextStyles}>
              Elder population is growing exponentially. Projected to reach <span style={styles.highlight}> 1.5 billion </span> by <span style={styles.highlight}> 2050. </span>
              Falls cause <span style={styles.highlight}> 684’000 </span> fatalities annually among seniors. Care solutions lack privacy safeguards and are not used due to privacy concerns.
            </p>
          </div>
        </div>

        <div style={dividerStyles}></div>
        <div style={sectionStyles}>
          <div style={titleContainerStyles}>
            <h2 style={sectionTitleStyles}>Our Solution</h2>
          </div>
          <div style={textContainerStyles}>
            <p style={sectionTextStyles}>
              Serai offers an AI-driven system using sensors and cameras to enhance older adults' quality of life. It detects and prevents falls, providing real-time alerts to caregivers.
              The non-intrusive design ensures comfort without wearables, while privacy-preserving features protect user data and dignity.
            </p>
          </div>
        </div>

        <div style={dividerStyles}></div>
        <div style={sectionStyles}>
          <div style={titleContainerStyles}>
            <h2 style={sectionTitleStyles}>Our Business Impact</h2>
          </div>
          <div style={textContainerStyles}>
            <p style={sectionTextStyles}>
              Raised <span style={styles.highlight}> CHF 1.1M </span> in private investment. Secured Innosuisse funding through research partnership with FHNW
            </p>
          </div>
        </div>
        <div style={dividerStyles}></div>

        <div style={styles.teamSection}>
          <h2 style={{ ...styles.teamTitle, ...(isMobile && styles.teamTitleMobile) }}>Meet Our Team</h2>
          <p style={{ ...styles.teamDescription, ...(isMobile && styles.teamDescriptionMobile) }}>
            Serai Team Advisory and Executive Board Member Committee
          </p>
          <div style={{ ...styles.teamMembers, ...(isMobile && styles.teamMembersMobile) }}>
            {teamMembers.map(member => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>

        <div style={researchTitleStyles}>Research Partners</div>
        <div style={{ ...styles.researchPartners, ...(isMobile && styles.researchPartnersMobile) }}>
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
    padding: '2rem',
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
  goals: {
    marginTop: '2rem',
    padding: '0 20%',
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
  goal: {
    textAlign: 'left',
    backgroundColor: '#2176FF33',
    color: '#1A0046',
    margin: '1rem 0',
    padding: '1rem',
    minHeight: '70px',
    borderRadius: '5px',
    fontWeight: '600',
    display: 'block'
  },
  goalMobile: {
    textAlign: 'center',
    fontSize: '1.1rem',
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
  section: {
    display: 'flex',
    margin: '4rem auto',
    padding: '0 20%',
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
  textContainer: {
    flex: '1',
    padding: '0 20px',
    position: 'relative',
  },
  textContainerMobile: {
    padding: '0',
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
  teamMembers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0px',
    justifyItems: 'center'
  },
  teamMembersMobile: {
    gridTemplateColumns: 'repeat(1, 1fr)',
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
  researchPartners: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '50px',
    justifyItems: 'center',
  },
  researchPartnersMobile: {
    gridTemplateColumns: 'repeat(1, 1fr)',
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
  memberImage: {
    width: '100%',
    height: 'auto', 
    clipPath: 'polygon(50% 0%, 98% 22%, 98% 78%, 50% 100%, 2% 78%, 2% 22%)',
    boxSizing: 'border-box' 
  },
  memberImageMobile: {
    width: '100%',
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
  linkedinIcon: {
    width: '36px',
    height: '36px',
    marginBottom: '10px', 
  },
};

export default AboutSerai;