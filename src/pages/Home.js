import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';
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

  const careImageStyles = {
    ...styles.careImage,
    ...(isMobile && styles.careImageMobile),
    ...(isTablet && styles.careImageTablet),
  };



  return (
    <div>
      <Header />

      <div className="page-container">

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

        <section>
          <h1>Promoting Independence and <br/> Well-being for Seniors</h1>
          <p>
            At Serai, we build innovative software and research advanced algorithms to <br/>
            detect irregularities in the everyday lives of the elderly.
          </p>
          <button className="cta" onClick={() => scrollToSection(elderlyCareRef)}>
            Learn More
          </button>
        </section>

        <section ref={elderlyCareRef}>
          <h2>Transformative Solutions for Elderly Care</h2>
          <p>At Serai, we leverage machine learning to improve safety and provide independence for the elderly.</p>
          <div className="elderly-section">
            <img src={require('../images/elderlyCare.png')} alt="Elderly Care" style={careImageStyles}/>
            <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <h5>Real-Time Fall Detection</h5>
                    <p>Our AI detects falls instantly, providing immediate alerts to caregivers.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Emergency Notifications</h5>
                    <p>Real-time notifications enhance the safety and security of the elderly.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Medication Reminders</h5>
                    <p>Timely reminders help seniors adhere to their medication schedules.</p>
                  </div>
                </li>
                <li >
                  <div >
                    <h5>24/7 Monitoring</h5>
                    <p>Continuous monitoring provides a comprehensive safety net for the elderly.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button className="cta" onClick={() => scrollToSection(whySectionRef)}>
            Learn More
          </button>
        </section>

        <div ref={whySectionRef} className="section-background--grey">
          <h2>Why use our systems?</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <img src={require('../images/intelligent.png')} alt="Intelligent" />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">Intelligent</h4>
                <p className="card-text">Serai understands your needs, providing insights to enhance your quality of life.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={require('../images/secure.png')} alt="Intelligent" />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">Secure</h4>
                <p className="card-text">Your data is securely stored in your home, ensuring privacy and safety.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={require('../images/evolving.png')} alt="Intelligent" />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">Evolving</h4>
                <p className="card-text">Our ML algorithms continuously improve, offering an ever-enhancing experience.</p>
              </div>
            </div>


           
          </div>
        </div>

        <section>
          <div className="row-container section-joinus">
            <div className="row-container--left">
              <h2>Join Us</h2>
              <p>Join us in making solitary living safer and enhancing the quality of life for the elderly. Together, we can create a safer, more independent future for our ageing population.</p>
            </div>
            <div className="row-container--right">
              <img src={require('../images/joinimage.png')} alt="Join Us"/>
            </div>
          </div>
        </section>
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

};

export default Home;