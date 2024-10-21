import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';
import { ReactComponent as SolutionIcon } from "../images/icons/solution_icon.svg";
import { ReactComponent as SpeakerIcon } from "../images/icons/volume-high.svg";
import { ReactComponent as SpeakerMuteIcon } from "../images/icons/volume-mute.svg";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef = useRef(null);
  const elderlyCareRef = useRef(null); 
  const whySectionRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      setIsPlaying(true);
      setIsMuted(false); 
    }, 4000); 

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

  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.videoContainer}>
       <video
          ref={videoRef}
          style={styles.video}
          onPlay={handlePlay}  
          onPause={handlePause}  
          muted={isMuted}
          controls
        >
          <source src={require('../animations/Serai_2D_Animation_Eng4k.mp4')} type="video/mp4" />
        </video>

        {!isPlaying && (
          <>
            <div style={styles.overlay}></div> 
            <div style={styles.overlayText}>
              Enhancing Safety and Quality of Life for Seniors
            </div>
          </>
        )}

        <button style={styles.muteButton} onClick={toggleMute}>
          {isMuted ? <SpeakerMuteIcon style={styles.muteIcon} /> : <SpeakerIcon style={styles.muteIcon} />}
        </button>
      </div>

      <div style={styles.promoSection}>
        <h2 style={styles.promoTitle}>Promoting Independence and <br/> Well-being for Seniors</h2>
        <p style={styles.promoText}>
          At Serai, we build innovative software and research advanced algorithms to <br/>
          detect irregularities in the everyday lives of the elderly.
        </p>
        <button style={styles.learnMoreButton} onClick={() => scrollToSection(elderlyCareRef)}>
          Learn More
        </button>
      </div>

      <div ref={elderlyCareRef} style={styles.elderlyCareSection}>
        <h2 style={styles.careTitle}>Transformative Solutions for Elderly Care</h2>
        <p style={styles.careSubtitle}>At Serai, we leverage machine learning to improve safety and provide independence for the elderly.</p>
        <div style={styles.careDetails}>
          <img src={require('../images/elderlyCare.png')} alt="Elderly Care" style={styles.careImage}/>
          <div style={styles.careList}>
            <ul>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={styles.listTitle}>Real-Time Fall Detection</p>
                  <p style={styles.listDescription}>Our advanced AI technology detects falls instantly, provides immediate alerts to caregivers hence preventing serious injuries.</p>
                </div>
              </li>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={styles.listTitle}>Emergency Notifications</p>
                  <p style={styles.listDescription}>Our system sends real-time notifications to designated caregivers enhancing the safety and security of the elderly.</p>
                </div>
              </li>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={styles.listTitle}>Medication Reminders</p>
                  <p style={styles.listDescription}>Our system provides timely reminders for medication, helping seniors adhere to their prescribed schedules.</p>
                </div>
              </li>
              <li style={styles.listItem}>
                <SolutionIcon style={styles.solutionIcon}/>
                <div style={styles.listText}>
                  <p style={styles.listTitle}>24/7 Monitoring</p>
                  <p style={styles.listDescription}>Our system detects any irregularities in daily activities, providing a comprehensive safety net for the elderly.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button style={styles.learnMoreButton} onClick={() => scrollToSection(whySectionRef)}>
          Learn More
        </button>
      </div>

      <div ref={whySectionRef} style={styles.whySection}>
        <h2 style={styles.whyTitle}>Why use our systems?</h2>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/intelligent.png')} alt="Intelligent" style={styles.cardImage} />
            </div>
            <h3 style={styles.cardTitle}>Intelligent</h3>
            <p style={styles.cardText}>Serai gets to know you and provides insights to increase your quality of life.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/secure.png')} alt="Secure" style={styles.cardImage} />
            </div>
            <h3 style={styles.cardTitle}>Secure</h3>
            <p style={styles.cardText}>Your data is physically stored in your home.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardImageContainer}>
              <img src={require('../images/evolving.png')} alt="Evolving" style={styles.cardImage} />
            </div>
            <h3 style={styles.cardTitle}>Evolving</h3>
            <p style={styles.cardText}>Our Machine Learning algorithms will constantly improve, providing an ever-improving experience for you and your loved ones.</p>
          </div>
        </div>
      </div>

      <div style={styles.joinUsSection}>
        <div style={styles.joinUsText}>
          <h2 style={styles.joinUsTitle}>Join Us</h2>
          <p>Join us in making solitary living safer and enhancing the quality of life for the elderly. Together, we can create a safer, more independent future for our ageing population.</p>
        </div>
        <img src={require('../images/nurse.jpeg')} alt="Ambulance Service" style={styles.joinUsImage} />
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
  videoContainer: {
    position: 'relative',  
    width: '75%', 
    margin: '2rem auto',
    marginTop: '2rem',
  },
  video: {
    width: '100%',
    height: 'auto', 
    maxWidth: '100%', 
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
  promoText: {
    fontSize: '1.5rem',
    marginBottom: '4rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
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
  careSubtitle: {
    fontSize: '1.6rem',
    color: '#1E293B',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.8',
  },
  careDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '1rem',
  },
  careImage: {
    width: '40%',
    height: 'auto',
    borderRadius: '15px',
  },
  careList: {
    width: '50%',
    fontSize: '1.5rem',
    fontWeight: '600',
    listStyleType: 'none', 
    paddingLeft: '0',
    marginLeft: '2.5rem',
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
  },
  listDescription: {
    fontSize: '1.2rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#333',
  },
  whySection: {
    backgroundColor: '#F6F6F6',
    padding: '3rem 0',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '100%',
    marginBottom: '4rem',
    marginTop: '4rem'
  },
  whyTitle: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    marginBottom: '3rem'
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 10%',
    marginBottom: '2.5rem',
  },
  card: {
    width: '30%',
    height: '600px',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    color: '#333',
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
  cardText: {
    fontSize: '1.5rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'left',
    padding: '0 1rem',
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
  joinUsText: {
    width: '50%',
    padding: '0 3rem', 
    fontSize: '1.5rem', 
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'left', 
  },
  
  joinUsImage: {
    width: '50%', 
    height: 'auto', 
    borderRadius: '10px', 
  }
};

export default Home;