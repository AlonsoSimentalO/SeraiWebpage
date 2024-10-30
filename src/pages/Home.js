import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';
import { ReactComponent as SolutionIcon } from "../images/icons/solution_icon.svg";
import { ReactComponent as SpeakerIcon } from "../images/icons/volume-high.svg";
import { ReactComponent as SpeakerMuteIcon } from "../images/icons/volume-mute.svg";

import '../styles/home.css';


import video1080p from '../animations/Serai_2D_Animation_Eng1080p.mp4';

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef = useRef(null);
  const playbackTimeRef = useRef(0);
  const elderlyCareRef = useRef(null); 
  const whySectionRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      playbackTimeRef.current = videoRef.current.currentTime;
    }

  }, []);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = playbackTimeRef.current;
        videoRef.current.play();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      setIsPlaying(true);
      setIsMuted(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsMuted(true); 
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const scrollToSection = (ref) => {
    const yOffset = -85; 
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };


  const videoContainerStyles = {
    ...styles.videoContainer,
    ...(isMobile && styles.videoContainerMobile),
    ...(isTablet && styles.videoContainerTablet),
  };

  const videoStyles = {
    ...styles.video,
    ...(isMobile && styles.videoMobile),
    ...(isTablet && styles.videoTablet),
  };

  const overlayTextStyles = {
    ...styles.overlayText,
    ...(isMobile && styles.overlayTextMobile),
    ...(isTablet && styles.overlayTextTablet),
  };

  const promoTitleStyles = {
    ...styles.promoTitle,
    ...(isMobile && styles.promoTitleMobile),
    ...(isTablet && styles.promoTitleTablet),
  };

  const promoTextStyles = {
    ...styles.promoText,
    ...(isMobile && styles.promoTextMobile),
    ...(isTablet && styles.promoTextTablet),
  };

  const learnMoreButtonStyles = {
    ...styles.learnMoreButton,
    ...(isMobile && styles.learnMoreButtonMobile),
    ...(isTablet && styles.learnMoreButtonTablet),
  };

  const careTitleStyles = {
    ...styles.careTitle,
    ...(isMobile && styles.careTitleMobile),
    ...(isTablet && styles.careTitleTablet),
  };

  const careSubtitleStyles = {
    ...styles.careSubtitle,
    ...(isMobile && styles.careSubtitleMobile),
    ...(isTablet && styles.careSubtitleTablet),
  };

  const careDetailsStyles = {
    ...styles.careDetails,
    ...(isMobile && styles.careDetailsMobile),
    ...(isTablet && styles.careDetailsTablet),
  };

  const careImageStyles = {
    ...styles.careImage,
    ...(isMobile && styles.careImageMobile),
    ...(isTablet && styles.careImageTablet),
  };

  const careListStyles = {
    ...styles.careList,
    ...(isMobile && styles.careListMobile),
    ...(isTablet && styles.careListTablet),
  };

  const listTitleStyles = {
    ...styles.listTitle,
    ...(isMobile && styles.listTitleMobile),
    ...(isTablet && styles.listTitleTablet),
  };

  const listDescriptionStyles = {
    ...styles.listDescription,
    ...(isMobile && styles.listDescriptionMobile),
    ...(isTablet && styles.listDescriptionTablet),
  };

  const whyTitleStyles = {
    ...styles.whyTitle,
    ...(isMobile && styles.whyTitleMobile),
    ...(isTablet && styles.whyTitleTablet),
  };

  const cardsContainerStyles = {
    ...styles.cardsContainer,
    ...(isMobile && styles.cardsContainerMobile),
    ...(isTablet && styles.cardsContainerTablet),
  };

  const cardStyles = {
    ...styles.card,
    ...(isMobile && styles.cardMobile),
    ...(isTablet && styles.cardTablet),
  };

  const cardTitleStyles = {
    ...styles.cardTitle,
    ...(isMobile && styles.cardTitleMobile),
    ...(isTablet && styles.cardTitleTablet),
  };

  const cardTextStyles = {
    ...styles.cardText,
    ...(isMobile && styles.cardTextMobile),
    ...(isTablet && styles.cardTextTablet),
  };

  const joinUsSectionStyles = {
    ...styles.joinUsSection,
    ...(isMobile && styles.joinUsSectionMobile),
    ...(isTablet && styles.joinUsSectionTablet),
  };

  const joinUsTextStyles = {
    ...styles.joinUsText,
    ...(isMobile && styles.joinUsTextMobile),
    ...(isTablet && styles.joinUsTextTablet),
  };

  const joinUsImageStyles = {
    ...styles.joinUsImage,
    ...(isMobile && styles.joinUsImageMobile),
    ...(isTablet && styles.joinUsImageTablet),
  };

  const joinUsTitleStyles = {
    ...styles.joinUsTitle,
    ...(isMobile && styles.joinUsTitleMobile),
    ...(isTablet && styles.joinUsTitleTablet),
  };

  const listItemStyles = {
    ...styles.listItem,
    ...(isTablet && styles.listItemTablet),
  };

  const solutionIconStyles = {
    ...styles.solutionIcon,
    ...(isTablet && styles.solutionIconTablet),
  };

  return (
    <div>
      <Header />

      <div style={videoContainerStyles}>
        <video
          ref={videoRef}
          style={videoStyles}
          onPlay={handlePlay}  
          onPause={handlePause}  
          muted={isMuted}
          controls
          src={video1080p} 
        />

        {!isPlaying && (
          <>
            <div style={styles.overlay}></div> 
            <div style={overlayTextStyles}>
              Enhancing Safety and Quality of Life for Seniors
            </div>
          </>
        )}

        <button style={styles.muteButton} onClick={toggleMute}>
          {isMuted ? <SpeakerMuteIcon style={styles.muteIcon} /> : <SpeakerIcon style={styles.muteIcon} />}
        </button>
      </div>

      <div style={styles.promoSection}>
        <h2 style={promoTitleStyles}>Promoting Independence and <br/> Well-being for Seniors</h2>
        <p style={promoTextStyles}>
          At Serai, we build innovative software and research advanced algorithms to <br/>
          detect irregularities in the everyday lives of the elderly.
        </p>
        <button style={learnMoreButtonStyles} onClick={() => scrollToSection(elderlyCareRef)}>
          Learn More
        </button>
      </div>

      <div ref={elderlyCareRef} style={{
        ...styles.elderlyCareSection
      }}>
        <h2 style={careTitleStyles}>Transformative Solutions for Elderly Care</h2>
        <p style={careSubtitleStyles}>At Serai, we leverage machine learning to improve safety and provide independence for the elderly.</p>
        <div style={careDetailsStyles}>
          <img src={require('../images/elderlyCare.png')} alt="Elderly Care" style={careImageStyles}/>
          <div style={careListStyles}>
            <ul>
              <li style={listItemStyles}>
                <SolutionIcon style={solutionIconStyles}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>Real-Time Fall Detection</p>
                  <p style={listDescriptionStyles}>Our AI detects falls instantly, providing immediate alerts to caregivers.</p>
                </div>
              </li>
              <li style={listItemStyles}>
                <SolutionIcon style={solutionIconStyles}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>Emergency Notifications</p>
                  <p style={listDescriptionStyles}>Real-time notifications enhance the safety and security of the elderly.</p>
                </div>
              </li>
              <li style={listItemStyles}>
                <SolutionIcon style={solutionIconStyles}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>Medication Reminders</p>
                  <p style={listDescriptionStyles}>Timely reminders help seniors adhere to their medication schedules.</p>
                </div>
              </li>
              <li style={listItemStyles}>
                <SolutionIcon style={solutionIconStyles}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>24/7 Monitoring</p>
                  <p style={listDescriptionStyles}>Continuous monitoring provides a comprehensive safety net for the elderly.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button style={learnMoreButtonStyles} onClick={() => scrollToSection(whySectionRef)}>
          Learn More
        </button>
      </div>

      <div ref={whySectionRef} style={{
        ...styles.whySection,
        ...(isMobile && styles.whySectionMobile),
        ...(isTablet && styles.whySectionTablet),
      }}>
        <h2 style={whyTitleStyles}>Why use our systems?</h2>
        <div style={cardsContainerStyles}>
          <div style={cardStyles}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/intelligent.png')} alt="Intelligent" style={styles.cardImage} />
            </div>
            <h3 style={cardTitleStyles}>Intelligent</h3>
            <p style={cardTextStyles}>Serai understands your needs, providing insights to enhance your quality of life.</p>
          </div>
          <div style={cardStyles}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/secure.png')} alt="Secure" style={styles.cardImage} />
            </div>
            <h3 style={cardTitleStyles}>Secure</h3>
            <p style={cardTextStyles}>Your data is securely stored in your home, ensuring privacy and safety.</p>
          </div>
          <div style={cardStyles}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/evolving.png')} alt="Evolving" style={styles.cardImage} />
            </div>
            <h3 style={cardTitleStyles}>Evolving</h3>
            <p style={cardTextStyles}>Our ML algorithms continuously improve, offering an ever-enhancing experience.</p>
          </div>
        </div>
      </div>

      <div style={joinUsSectionStyles}>
        <div style={joinUsTextStyles} className="joinUs">
          <h2 style={joinUsTitleStyles}>Join Us</h2>
          <p>Join us in making solitary living safer and enhancing the quality of life for the elderly. Together, we can create a safer, more independent future for our ageing population.</p>
        </div>
        <img src={require('../images/joinimage.png')} alt="Join Us" style={joinUsImageStyles} />
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  videoContainer: {
    position: 'relative',
    margin: '2rem auto',
    boxSizing: 'border-box',
    maxWidth: '1280px'

  },
  video: {
    width: '100%',
    height: 'auto', 
    borderRadius: '15px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '95%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    borderRadius: '15px',  
    zIndex: 1,  
    pointerEvents: 'none',
  },
  overlayText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '4rem',
    fontWeight: '700',
    fontFamily: 'Atyp BL, sans-serif',
    textAlign: 'center',
    zIndex: 2,
    pointerEvents: 'none',
    width: '90%',
    lineHeight:'1.2',  
  },
  overlayTextMobile: {
    fontSize: '2rem',
  },
  overlayTextTablet: {
    fontSize: '3rem',
  },
  muteButton: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    backgroundColor: 'transparent', 
    border: 'none',
    cursor: 'pointer',
    zIndex: 3,
    padding: '10px', 
  },
  muteIcon: {
    width: '48px',
    height: '48px',
    fill: '#000', 
  },
  promoSection: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem', 
    margin: '6rem auto',
    width: 'fit-content'
  },
  promoTitle: {
    fontSize: '3.5rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)', 
    WebkitBackgroundClip: 'text',  
    WebkitTextFillColor: 'transparent',  
    padding: '0 10px',  
    lineHeight: '1.3',  
    width: 'fit-content',
    marginInline: 'auto', 
    boxSizing: 'border-box', 
  },
  promoTitleMobile: {
    fontSize: '2.3rem'
  },
  promoTitleTablet: {
    fontSize: '2.8rem',
  },
  promoText: {
    fontSize: '1.6rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    lineHeight: '1.6',
 },
  promoTextMobile: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.6',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  promoTextTablet: {
    fontSize: '1.4rem',
    paddingLeft: '2rem',
    lineHeight: '1.6',
    paddingRight: '2rem',
  },
  learnMoreButton: {
    padding: '28px 100px',
    fontSize: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '700',
    backgroundColor: '#3A3CE6',
    color: 'white',
    border: 'none',
    borderRadius: '48px',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  learnMoreButtonMobile: {
    padding: '14px 50px',
  },
  learnMoreButtonTablet: {
    padding: '20px 70px',
  },
  elderlyCareSection: {
    margin: '6rem auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
    gap: '2rem',
    padding: '0 1rem'
  },
  careTitle: {
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)', 
    WebkitBackgroundClip: 'text',  
    WebkitTextFillColor: 'transparent',  
    boxSizing: 'border-box',
  },
  careTitleMobile: {
    fontSize: '2rem',
    textAlign: 'center',
  },
  careTitleTablet: {
    fontSize: '2.5rem',
    textAlign: 'center',
  },
  careSubtitle: {
    fontSize: '1.6rem',
    color: '#1E293B',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: '1.6',
    boxSizing: 'border-box', 
  },
  careSubtitleMobile: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.6',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  careSubtitleTablet: {
    fontSize: '1.4rem',
    textAlign: 'center',
    lineHeight: '1.6',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  careDetails: {
    display: 'flex',
    gap: '50px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box', 
  },
  careDetailsMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  careDetailsTablet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: '1rem 2rem',
    boxSizing: 'border-box', 
  },
  careImage: {
    maxWidth: '556px',
    height: 'auto',
    borderRadius: '15px',
    boxSizing: 'border-box', 
  },
  careImageMobile: {
    width: '100%',
    marginLeft: '0',
    marginBottom: '1rem',
  },
  careImageTablet: {
    width: '50%',
    marginLeft: '0', 
    marginRight: '1rem', 
    marginBottom: '0',
    boxSizing: 'border-box', 
  },
  careList: {
    maxWidth: '583px',
    fontSize: '1.5rem',
    fontWeight: '600',
    listStyleType: 'none', 
  },
  careListTablet: {
    width: '40%',
    boxSizing: 'border-box', 
  },
  listItem: {
    display: 'flex', 
    alignItems: 'flex-start',
    marginBottom: '1rem', 
    boxSizing: 'border-box', 
  },
  listItemTablet: {
    alignItems: 'center',
    boxSizing: 'border-box', 
  },
  solutionIcon: {
    width: '75px',
    height: '75px',
    fill: '#1A0046',
    marginRight: '10px',
    marginTop: '2px', 
    boxSizing: 'border-box', 
  },
  solutionIconTablet: {
    width: '120px',
    height: '120px',
    marginRight: '15px',
    boxSizing: 'border-box', 
  },
  listText: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box', 
  },
  listTitle: {
    fontSize: '1.4rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 'bold',
    color: '#1A0046',
    marginBottom: "0.5rem",
    boxSizing: 'border-box', 
  },
  listTitleMobile: {
    fontSize: '1.2rem',
  },
  listTitleTablet: {
    fontSize: '1.2rem',
  },
  listDescription: {
    fontSize: '1.2rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#1E293B',
    boxSizing: 'border-box', 
  },
  listDescriptionMobile: {
    fontSize: '1rem',
  },
  listDescriptionTablet: {
    fontSize: '1rem',
  },
  whySection: {
    backgroundColor: '#F6F6F6',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '100%',
    display: 'flex',
    flexDirection:  'column',
    gap: '2rem',
    padding: '6rem 0',
    alignItems: 'center'
  },
  whySectionMobile: {
    marginTop: '1rem',      
    marginBottom: '2rem',    
    padding: '1rem 0',        
  },
  whySectionTablet: {
    marginTop: '2rem',
    marginBottom: '4rem',
    padding: '2rem 0',
    boxSizing: 'border-box', 

  },
  whyTitle: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    boxSizing: 'border-box', 
    textAlign: 'center',
  },
  whyTitleMobile: {
    fontSize: '2rem',  
  },
  whyTitleTablet: {
    fontSize: '2.5rem',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    columnGap: '3rem',
    rowGap: '2rem',
    maxWidth: '1440px',
    padding: '0 1rem'
  },
  card: {
    maxWidth: '375px',
    minWidth: '300px',    
    paddingBottom: '2em',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    color: '#333',
    flex: '1',

    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },

  cardImageContainer: {
    backgroundColor: '#3A3CE61A',
    padding: '1rem',
    borderRadius: '25px',
    display: 'flex',
    height: '200px', 
    border: '10px solid #fff',
  },
  cardImage: {
    maxWidth: '100%', 
    maxHeight: '100%',
    margin: 'auto',
  },
  cardTitle: {
    fontSize: '1.9rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '0 1rem',
    color: '#1A0046',
  },
  cardTitleMobile: {
    fontSize: '1.3rem',
  },
  cardTitleTablet: {
    fontSize: '1.3rem',
  },
  cardText: {
    fontSize: '1.5rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'left',
    padding: '0 1rem',
    boxSizing: 'border-box',
    lineHeight: '1.6'
  },
  cardTextMobile: {
    fontSize: '1.2rem',
  },
  cardTextTablet: {
    fontSize: '1.2rem',
  },
  joinUsSection: {
    display: 'flex',
    maxWidth: '1440px',
    justifyContent: 'center',
    margin: '6rem auto',
    flexWrap: 'wrap'
  },
  joinUsTitle: {
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    background: 'linear-gradient(to right, #1A0046 30%, #3A3CE6 70%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'left', 
    display: 'inline',
    marginBottom: '2rem',
  },  
  joinUsTitleMobile: {
    fontSize: '2rem',
    textAlign: 'center',
  },
  joinUsTitleTablet: {
    fontSize: '2.5rem',
    textAlign: 'center',
  },
  joinUsText: {
    width: '50%',
    padding: '0 3rem', 
    fontSize: '1.5rem', 
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'left', 
    boxSizing: 'border-box', 
  },
  joinUsTextMobile: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.6',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    width: '90%',
  },
  joinUsTextTablet: {
    width: '100%',
    fontSize: '1.4rem',
    textAlign: 'center',
    lineHeight: '1.6',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    boxSizing: 'border-box', 
  },
  joinUsImage: {
    maxWidth: '100%',
    maxHeight: '334px', 
    borderRadius: '10px', 
  },
  joinUsImageMobile: {
    marginTop: '1rem',
  },
};

export default Home;