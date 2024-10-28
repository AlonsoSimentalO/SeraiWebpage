import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';
import { ReactComponent as SolutionIcon } from "../images/icons/solution_icon.svg";
import { ReactComponent as SpeakerIcon } from "../images/icons/volume-high.svg";
import { ReactComponent as SpeakerMuteIcon } from "../images/icons/volume-mute.svg";

import video4k from '../animations/Serai_2D_Animation_Eng4k.mp4';
import video1080p from '../animations/Serai_2D_Animation_Eng1080p.mp4';

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const [videoSource, setVideoSource] = useState('');
  const [quality, setQuality] = useState('auto');
  const videoRef = useRef(null);
  const playbackTimeRef = useRef(0);
  const elderlyCareRef = useRef(null); 
  const whySectionRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 820;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      playbackTimeRef.current = videoRef.current.currentTime;
    }

    const determineVideoQuality = () => {
      if (quality === 'auto') {
        let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (connection && connection.effectiveType) {
          let effectiveType = connection.effectiveType;

          if (effectiveType === '4g') {
            setVideoSource(video4k);
          } else {
            setVideoSource(video1080p);
          }
        } else {
          setVideoSource(video1080p);
        }
      } else if (quality === '4k') {
        setVideoSource(video4k);
      } else if (quality === '1080p') {
        setVideoSource(video1080p);
      }
    };

    determineVideoQuality();

  }, [quality]);

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
  }, [videoSource]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      setIsPlaying(true);
      setIsMuted(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [videoSource]);

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

  const containerStyles = {
    ...styles.container,
    ...(isMobile && styles.containerMobile),
  };

  const videoContainerStyles = {
    ...styles.videoContainer,
    ...(isMobile && styles.videoContainerMobile),
  };

  const videoStyles = {
    ...styles.video,
    ...(isMobile && styles.videoMobile),
  };

  const overlayTextStyles = {
    ...styles.overlayText,
    ...(isMobile && styles.overlayTextMobile),
  };

  const promoTitleStyles = {
    ...styles.promoTitle,
    ...(isMobile && styles.promoTitleMobile),
  };

  const promoTextStyles = {
    ...styles.promoText,
    ...(isMobile && styles.promoTextMobile),
  };

  const learnMoreButtonStyles = {
    ...styles.learnMoreButton,
    ...(isMobile && styles.learnMoreButtonMobile),
  };

  const careTitleStyles = {
    ...styles.careTitle,
    ...(isMobile && styles.careTitleMobile),
  };

  const careSubtitleStyles = {
    ...styles.careSubtitle,
    ...(isMobile && styles.careSubtitleMobile),
  };

  const careDetailsStyles = {
    ...styles.careDetails,
    ...(isMobile && styles.careDetailsMobile),
  };

  const careImageStyles = {
    ...styles.careImage,
    ...(isMobile && styles.careImageMobile),
  };

  const careListStyles = {
    ...styles.careList,
    ...(isMobile && styles.careListMobile),
  };

  const listTitleStyles = {
    ...styles.listTitle,
    ...(isMobile && styles.listTitleMobile),
  };

  const listDescriptionStyles = {
    ...styles.listDescription,
    ...(isMobile && styles.listDescriptionMobile),
  };

  const whyTitleStyles = {
    ...styles.whyTitle,
    ...(isMobile && styles.whyTitleMobile),
  };

  const cardsContainerStyles = {
    ...styles.cardsContainer,
    ...(isMobile && styles.cardsContainerMobile),
  };

  const cardStyles = {
    ...styles.card,
    ...(isMobile && styles.cardMobile),
  };

  const cardTitleStyles = {
    ...styles.cardTitle,
    ...(isMobile && styles.cardTitleMobile),
  };

  const cardTextStyles = {
    ...styles.cardText,
    ...(isMobile && styles.cardTextMobile),
  };

  const joinUsSectionStyles = {
    ...styles.joinUsSection,
    ...(isMobile && styles.joinUsSectionMobile),
  };

  const joinUsTextStyles = {
    ...styles.joinUsText,
    ...(isMobile && styles.joinUsTextMobile),
  };

  const joinUsImageStyles = {
    ...styles.joinUsImage,
    ...(isMobile && styles.joinUsImageMobile),
  };

  const joinUsTitleStyles = {
    ...styles.joinUsTitle,
    ...(isMobile && styles.joinUsTitleMobile),
  };

  const qualitySelectorContainerStyles = {
    ...styles.qualitySelectorContainer,
    ...(isMobile && styles.qualitySelectorContainerMobile),
  };

  const qualitySelectorStyles = {
    ...styles.qualitySelector,
    ...(isMobile && styles.qualitySelectorMobile),
  };

  return (
    <div style={containerStyles}>
      <Header />

      <div style={videoContainerStyles}>
        <video
          ref={videoRef}
          style={videoStyles}
          onPlay={handlePlay}  
          onPause={handlePause}  
          muted={isMuted}
          controls
        >
          {videoSource && <source src={videoSource} type="video/mp4" />}
        </video>

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

        <div style={qualitySelectorContainerStyles}>
          <select value={quality} onChange={(e) => setQuality(e.target.value)} style={qualitySelectorStyles}>
            <option value="auto">Auto</option>
            <option value="4k">4K</option>
            <option value="1080p">1080p</option>
          </select>
        </div>
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

      <div ref={elderlyCareRef} style={styles.elderlyCareSection}>
        <h2 style={careTitleStyles}>Transformative Solutions for Elderly Care</h2>
        <p style={careSubtitleStyles}>At Serai, we leverage machine learning to improve safety and provide independence for the elderly.</p>
        <div style={careDetailsStyles}>
          <img src={require('../images/elderlyCare.png')} alt="Elderly Care" style={careImageStyles}/>
          <div style={careListStyles}>
            <ul>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>Real-Time Fall Detection</p>
                  <p style={listDescriptionStyles}>Our advanced AI technology detects falls instantly, provides immediate alerts to caregivers hence preventing serious injuries.</p>
                </div>
              </li>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>Emergency Notifications</p>
                  <p style={listDescriptionStyles}>Our system sends real-time notifications to designated caregivers enhancing the safety and security of the elderly.</p>
                </div>
              </li>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>Medication Reminders</p>
                  <p style={listDescriptionStyles}>Our system provides timely reminders for medication, helping seniors adhere to their prescribed schedules.</p>
                </div>
              </li>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={listTitleStyles}>24/7 Monitoring</p>
                  <p style={listDescriptionStyles}>Our system detects any irregularities in daily activities, providing a comprehensive safety net for the elderly.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button style={learnMoreButtonStyles} onClick={() => scrollToSection(whySectionRef)}>
          Learn More
        </button>
      </div>

      <div ref={whySectionRef} style={styles.whySection}>
        <h2 style={whyTitleStyles}>Why use our systems?</h2>
        <div style={cardsContainerStyles}>
          <div style={cardStyles}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/intelligent.png')} alt="Intelligent" style={styles.cardImage} />
            </div>
            <h3 style={cardTitleStyles}>Intelligent</h3>
            <p style={cardTextStyles}>Serai gets to know you and provides insights to increase your quality of life.</p>
          </div>
          <div style={cardStyles}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/secure.png')} alt="Secure" style={styles.cardImage} />
            </div>
            <h3 style={cardTitleStyles}>Secure</h3>
            <p style={cardTextStyles}>Your data is physically stored in your home.</p>
          </div>
          <div style={cardStyles}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/evolving.png')} alt="Evolving" style={styles.cardImage} />
            </div>
            <h3 style={cardTitleStyles}>Evolving</h3>
            <p style={cardTextStyles}>Our Machine Learning algorithms will constantly improve, providing an ever-improving experience for you and your loved ones.</p>
          </div>
        </div>
      </div>

      <div style={joinUsSectionStyles}>
        <div style={joinUsTextStyles}>
          <h2 style={joinUsTitleStyles}>Join Us</h2>
          <p>Join us in making solitary living safer and enhancing the quality of life for the elderly. Together, we can create a safer, more independent future for our ageing population.</p>
        </div>
        <img src={require('../images/nurse.jpeg')} alt="Ambulance Service" style={joinUsImageStyles} />
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
  containerMobile: {
    width: '100%',
  },
  videoContainer: {
    position: 'relative',  
    width: '75%', 
    margin: '2rem auto',
    marginTop: '2rem',
  },
  videoContainerMobile: {
    width: '90%',
    height: '40vh',
    margin: '1rem auto',
  },
  video: {
    width: '100%',
    height: 'auto', 
    maxWidth: '100%', 
    borderRadius: '15px',
  },
  videoMobile: {
    height: '100%',
    objectFit: 'cover',
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
    width: '100%',
    textAlign: 'center',
    marginTop: '2rem',
    padding: '2rem 0',
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
    width: '85%', 
    margin: '0 auto', 
    marginBottom: '3rem',
  },
  promoTitleMobile: {
    fontSize: '2.3rem',
    width: '90%',
    marginBottom: '2rem',
  },
  promoText: {
    fontSize: '1.5rem',
    marginBottom: '4rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
  },
  promoTextMobile: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.8',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    width: '90%',
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
  },
  learnMoreButtonMobile: {
    padding: '14px 50px',
  },
  elderlyCareSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    margin: '2rem auto',
  },
  careTitle: {
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)', 
    WebkitBackgroundClip: 'text',  
    WebkitTextFillColor: 'transparent',  
    marginBottom: '1rem',
  },
  careTitleMobile: {
    fontSize: '2rem',
    textAlign: 'center',
  },
  careSubtitle: {
    fontSize: '1.6rem',
    color: '#1E293B',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.8',
  },
  careSubtitleMobile: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.8',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  careDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '1rem',
    marginBottom: '2rem',
  },
  careDetailsMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
  },
  careImage: {
    width: '30%',
    height: 'auto',
    borderRadius: '15px',
    marginLeft: '16rem',
  },
  careImageMobile: {
    width: '100%',
    marginLeft: '0',
    marginBottom: '1rem',
  },
  careList: {
    width: '35%',
    fontSize: '1.5rem',
    fontWeight: '600',
    listStyleType: 'none', 
    paddingLeft: '0',
    marginLeft: '.7rem',
  },
  careListMobile: {
    width: '100%',
    marginLeft: '0',
    paddingLeft: '0',         
    paddingRight: '4rem',    
  },
  listItem: {
    display: 'flex', 
    alignItems: 'flex-start',
    marginBottom: '1rem', 
  },
  solutionIcon: {
    width: '75px',
    height: '75px',
    fill: '#1A0046',
    marginRight: '10px',
    marginTop: '2px', 
  },
  listText: {
    display: 'flex',
    flexDirection: 'column',
  },
  listTitle: {
    fontSize: '1.4rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 'bold',
    color: '#1A0046',
    marginBottom: "0.5rem",
  },
  listTitleMobile: {
    fontSize: '1.2rem',
  },
  listDescription: {
    fontSize: '1.2rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#1E293B',
    marginTop: '0',
    marginBottom: '0',
  },
  listDescriptionMobile: {
    fontSize: '1rem',
  },
  whySection: {
    backgroundColor: '#F6F6F6',
    padding: '2rem 0',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '100%',
    marginBottom: '4rem',
    marginTop: '2rem',
  },
  whyTitle: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    marginBottom: '3rem',
  },
  whyTitleMobile: {
    fontSize: '2rem',
    marginBottom: '2.5rem',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 10%',
    marginBottom: '2.5rem',
  },
  cardsContainerMobile: {
    flexDirection: 'column',
    padding: '0',
    alignItems: 'center',
  },
  card: {
    width: '30%',
    height: '600px',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    color: '#333',
    marginBottom: '1rem',
  },
  cardMobile: {
    width: '80%',
    height: 'auto',
    marginBottom: '2rem',
  },
  cardImageContainer: {
    backgroundColor: '#3A3CE61A',
    padding: '1rem',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', 
    marginBottom: '1rem',
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
    marginTop: '1rem',
    textAlign: 'left',
    padding: '0 1rem',
    color: '#1A0046',
  },
  cardTitleMobile: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  cardText: {
    fontSize: '1.5rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'left',
    padding: '0 1rem',
  },
  cardTextMobile: {
    fontSize: '1.1rem',
    textAlign: 'center',
  },
  joinUsSection: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '2rem 10%', 
    backgroundColor: '#ffffff', 
    color: '#333', 
    marginBottom: '4rem', 
  },
  joinUsSectionMobile: {
    flexDirection: 'column',
    padding: '1rem',
    marginBottom: '2rem',
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
  },  
  joinUsTitleMobile: {
    fontSize: '2rem',
    textAlign: 'center',
  },
  joinUsText: {
    width: '50%',
    padding: '0 3rem', 
    fontSize: '1.5rem', 
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'left', 
  },
  joinUsTextMobile: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '1.8',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    width: '90%',
  },
  joinUsImage: {
    width: '50%', 
    height: 'auto', 
    borderRadius: '10px', 
  },
  joinUsImageMobile: {
    width: '100%',
    marginTop: '1rem',
  },
  qualitySelectorContainer: {
    position: 'absolute',
    top: '7%',
    right: '12%',
    zIndex: 3,
  },
  qualitySelectorContainerMobile: {
    top: '35%',
    right: '8%',
  },
  qualitySelector: {
    padding: '5px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  qualitySelectorMobile: {
    padding: '3px',
    fontSize: '0.8rem',
  },
};

export default Home;