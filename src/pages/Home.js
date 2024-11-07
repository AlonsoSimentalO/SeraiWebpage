import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const youtubePlayerRef = useRef(null);
  const elderlyCareRef = useRef(null);
  const whySectionRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        initializePlayer();
      }
    };

    const initializePlayer = () => {
      youtubePlayerRef.current = new window.YT.Player("youtube-player", {
        videoId: "TgZzwAPJFe8",
        playerVars: {
          autoplay: 1,
          controls: 1,
          mute: isMuted ? 1 : 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo();
      const iframe = youtubePlayerRef.current.getIframe();
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.borderRadius = "15px";
      setIsPlayerReady(true);
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsPlaying(true);
      } else if (
        event.data === window.YT.PlayerState.PAUSED ||
        event.data === window.YT.PlayerState.ENDED
      ) {
        setIsPlaying(false);
      }
    };

    window.onYouTubeIframeAPIReady = initializePlayer;
    loadYouTubeAPI();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (youtubePlayerRef.current) {
        youtubePlayerRef.current.destroy();
      }
      setIsPlayerReady(false);
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady && youtubePlayerRef.current) {
      if (isMuted) {
        youtubePlayerRef.current.mute();
      } else {
        youtubePlayerRef.current.unMute();
      }
    }
  }, [isMuted, isPlayerReady]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlayerReady && youtubePlayerRef.current) {
        youtubePlayerRef.current.playVideo();
        youtubePlayerRef.current.unMute();
        setIsPlaying(true);
        setIsMuted(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPlayerReady]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
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
          <div style={styles.videoWrapper}>
            <div id="youtube-player"></div>
            <button style={styles.muteButton} onClick={toggleMute}>
              {isMuted ? (
                <svg
                  style={styles.muteIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zM4 9v6h4l5 5V4l-5 5H4zM19 12c0 2.76-2.24 5-5 5v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3v-2c2.76 0 5 2.24 5 5z"
                    fill="#000"
                  ></path>
                  <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  style={styles.muteIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zM4 9v6h4l5 5V4l-5 5H4zM19 12c0 2.76-2.24 5-5 5v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3v-2c2.76 0 5 2.24 5 5z"
                    fill="#000"
                  ></path>
                </svg>
              )}
            </button>
            {!isPlaying && (
              <>
                <div style={styles.overlay}></div>
                <div style={overlayTextStyles}>
                  Enhancing Safety and Quality of Life for Seniors
                </div>
              </>
            )}
          </div>
        </div>

        <section className="promoting-section">
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
                <img src={require("../images/secure.png")} alt="Secure" />
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
                  alt="Evolving"
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
    width: "100%",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    borderRadius: "15px",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    pointerEvents: "none",
    borderRadius: "15px",
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
  },
  videoContainerMobile: {
    maxWidth: "100%",
    margin: "1rem auto",
  },
  videoContainerTablet: {
    maxWidth: "90%",
    margin: "1.5rem auto",
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