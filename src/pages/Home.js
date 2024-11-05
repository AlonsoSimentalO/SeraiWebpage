import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactComponent as SpeakerIcon } from "../images/icons/volume-high.svg";
import { ReactComponent as SpeakerMuteIcon } from "../images/icons/volume-mute.svg";

import videoJsResolutionSwitcher from "../utils/lib/videojs-resolution-switcher.js";
import "../utils/lib/videojs-resolution-switcher.css"

import videojs from "video.js";
import "../utils/lib/video-js.min.css";


import "../styles/home.css";

import video360p from "../animations/Serai_2D_Animation_360p.mp4";
import video480p from "../animations/Serai_2D_Animation_480p.mp4";
import video720p from "../animations/Serai_2D_Animation_720p.mp4";
import video1080p from "../animations/Serai_2D_Animation_1080p.mp4";
import video1440p from "../animations/Serai_2D_Animation_1440p.mp4";
import video2160p from "../animations/Serai_2D_Animation_2160p.mp4";



function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const playbackTimeRef = useRef(0);
  const elderlyCareRef = useRef(null);
  const whySectionRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 1024;

  useEffect(()=> {
    videojs('video', {
      controls: true,
      muted: true,
      autoplay: true,
      plugins: {
        videoJsResolutionSwitcher: {
          dynamicLabel: true // Display dynamic labels or gear symbol
        }
      }
    }, function(){
      var player = this;
      window.player = player

      player.updateSrc([
        {
          src:  video360p,
          type: 'video/mp4',
          label: 'Lowest',
          res: 360
        }, 
        {
          src: video480p,
          type: 'video/mp4',
          label: 'SD',
          res: 480
        },
        {
          src: video720p,
          type: 'video/mp4',
          label: 'HD',
          res: 720
        },
        {
          src: video1080p,
          type: 'video/mp4',
          label: 'Full-HD',
          res: 1080
        },
        {
          src: video1440p,
          type: 'video/mp4',
          label: '2K',
          res: 1440
        },
        {
          src: video2160p,
          type: 'video/mp4',
          label: '4k',
          res: 2160
        },
      ])

      player.on('resolutionchange', function(){
        console.info('Source changed to %s', player.src())
      })

      player.on('pause', function () {console.log("played was paused")})
      player.on('play', function () {console.log("player was played")})


    }) 


  }, [])


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = playbackTimeRef.current;
        videoRef.current.play();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
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
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
      {/* <video id="video" className="video-js vjs-default-skin"></video> */}

      <div className="page-container">

        <div style={videoContainerStyles}>

        <iframe width="100%" height="675px" border="none" allowfullscreen
        src="https://www.youtube.com/embed/u8XTpg5RJGA?controls=1&autoplay=1&mute=1">
        </iframe> 

        <video style={styles.videoCon} id="video" className="video-js vjs-default-skin"></video>

          {!isPlaying && (
            <>
              <div style={styles.overlay}></div>
              <div style={overlayTextStyles}>
                Enhancing Safety and Quality of Life for Seniors
              </div>
            </>
          )}
        </div>

        <section>
          <h1>
            Promoting Independence and <br /> Well-being for Seniors
          </h1>
          <p>
            Serai provides privacy-preserving, intelligent solutions to support
            the independence and safety of the elderly. Our advanced technology
            detects unusual activity patterns, enabling quick intervention and
            ensuring peace of mind for caregivers.
          </p>
          <button
            className="cta"
            onClick={() => scrollToSection(elderlyCareRef)}
          >
            Learn More
          </button>
        </section>

        <section ref={elderlyCareRef}>
          <h2>Transformative Solutions for Elderly Care</h2>
          <p>
            Serai’s advanced technology supports the safety, dignity, and
            independence of elderly individuals. Our solutions provide
            continuous monitoring and immediate notifications to caregivers,
            ensuring a secure and supportive living environment.
          </p>
          <div className="elderly-section">
            <img
              src={require("../images/elderlyCare.png")}
              alt="Elderly Care"
              style={careImageStyles}
            />
            <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <h5>Real-Time Fall Detection</h5>
                    <p>
                      Our advanced AI technology detects falls instantly,
                      provides immediate alerts to caregivers hence preventing
                      serious injuries.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Emergency Notifications</h5>
                    <p>
                      Our system sends real-time notifications to designated
                      caregivers enhancing the safety and security of the
                      elderly.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Medication Reminders</h5>
                    <p>
                      Our system provides timely reminders for medication,
                      helping seniors adhere to their prescribed schedules.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>24/7 Monitoring</h5>
                    <p>
                      Our system detects any irregularities in daily activities,
                      providing a comprehensive safety net for the elderly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="cta"
            onClick={() => scrollToSection(whySectionRef)}
          >
            Learn More
          </button>
        </section>

        <div ref={whySectionRef} className="section-background--grey">
          <h2>Why use our systems?</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../images/intelligent.png")}
                  alt="Intelligent"
                />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">Intelligent</h4>
                <p className="card-text">
                  Serai adapts to individual needs, providing valuable insights
                  to enhance quality of life.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={require("../images/secure.png")} alt="Intelligent" />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">Secure</h4>
                <p className="card-text">
                  Your data is stored safely and securely within the home,
                  ensuring privacy and trust.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../images/evolving.png")}
                  alt="Intelligent"
                />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">Evolving</h4>
                <p className="card-text">
                  Our AI continuously adapts, ensuring our solutions grow
                  smarter, more responsive, and more attuned to the needs of the
                  elderly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="row-container section-joinus">
            <div className="row-container--left">
              <h2>Join Us</h2>
              <p>
                Partner with Serai to elevate elderly care. Together, we’ll
                deliver innovative, privacy first solutions that enhance safety,
                independence, and quality of life.
              </p>
            </div>
            <div className="row-container--right">
              <img src={require("../images/joinimage.png")} alt="Join Us" />
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
    position: "relative",
    margin: "2rem auto",
    boxSizing: "border-box",
    maxWidth: "1280px",
  },
  videoCon : {
    width: '100%',
    height: '720px'
  },
  video: {
    width: "100%",
    height: "auto",
    borderRadius: "15px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "15px",
    zIndex: 1,
    pointerEvents: "none",
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "4rem",
    fontWeight: "700",
    fontFamily: "Atyp BL, sans-serif",
    textAlign: "center",
    zIndex: 2,
    pointerEvents: "none",
    width: "90%",
    lineHeight: "1.2",
  },
  overlayTextMobile: {
    fontSize: "2rem",
  },
  overlayTextTablet: {
    fontSize: "3rem",
  },
  muteButton: {
    position: "absolute",
    top: "5%",
    right: "5%",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 3,
    padding: "10px",
  },
  muteIcon: {
    width: "48px",
    height: "48px",
    fill: "#000",
  },
  careImage: {
    maxWidth: "556px",
    height: "auto",
    borderRadius: "15px",
    boxSizing: "border-box",
  },
  careImageMobile: {
    width: "100%",
    marginLeft: "0",
    marginBottom: "1rem",
  },
  careImageTablet: {
    width: "50%",
    marginLeft: "0",
    marginRight: "1rem",
    marginBottom: "0",
    boxSizing: "border-box",
  },
};

export default Home;
