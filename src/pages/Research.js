import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SolutionIcon } from "../images/icons/solution_icon.svg";

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(
    () => window.matchMedia(query).matches
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

function Research() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 820px)");

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

  const sectionSubtitleStyles = {
    ...styles.sectionSubtitle,
    ...(isMobile && styles.sectionSubtitleMobile),
  };

  const sectionTextContainerStyles = {
    ...styles.sectionTextContainer,
    ...(isMobile && styles.sectionTextContainerMobile),
  };

  const sectionTextContainerLastStyles = {
    ...styles.sectionTextContainerLast,
    ...(isMobile && styles.sectionTextContainerLastMobile),
  };

  const sectionTextIconStyles = {
    ...styles.sectionTextIcon,
    ...(isMobile && styles.sectionTextIconMobile),
  };

  const iconAndSubtitleContainerStyles = {
    ...styles.iconAndSubtitleContainer,
    ...(isMobile && styles.iconAndSubtitleContainerMobile),
  };

  const dividerStyles = {
    ...styles.divider,
    ...(isMobile && styles.dividerMobile),
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.promoSection}>
        <h2 style={promoTitleStyles}>
          Promoting Independence and <br /> Well-being for Seniors
        </h2>
        <p style={promoTextStyles}>
          We are leaders in Research through our partnerships with top research
          institutions like FHNW in Aargau to develop our <br />
          patented technology. We are committed to research that enhances the
          safety, independence, and well-being of older adults.
          <br /> We believe in our product and believe it is the future of home
          monitoring with camera-based solutions
        </p>
        <button
          style={learnMoreButtonStyles}
          onClick={() => navigate("/Partnerships")}
        >
          Become a Partner
        </button>
      </div>
      <div style={dividerStyles}></div>

      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Research Focus</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            In our research we focused on exploring significant advantages of
            camera-based solutions which are becoming the preferred choice over
            wearables and ambient sensors for detailed, cost-effective, and
            non-invasive monitoring over traditional wearables and ambient
            sensors.
          </p>
        </div>
      </div>
      <div style={dividerStyles}></div>

      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Why Camera-Based Solutions?</h2>
        </div>
        <div style={textContainerStyles}>
          <div style={sectionTextContainerStyles}>
            <div style={iconAndSubtitleContainerStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <h4 style={sectionSubtitleStyles}>Enhanced Detail and Insight</h4>
            </div>
            <p style={sectionTextStyles}>
              Camera-based systems provide unparalleled insights into
              environments and user activities. Unlike wearables, which are
              limited by their need for physical contact, cameras capture a
              comprehensive view of both the surroundings and the actions taking
              place within them.
            </p>
          </div>

          <div style={sectionTextContainerStyles}>
            <div style={iconAndSubtitleContainerStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <h4 style={sectionSubtitleStyles}>Cost-Effectiveness</h4>
            </div>
            <p style={sectionTextStyles}>
              Modern high-quality cameras are not only affordable but also
              capable of replacing multiple sensors, significantly reducing the
              overall cost of monitoring systems. This makes camera-based
              solutions an economically viable option for various applications,
              including smart homes and healthcare.
            </p>
          </div>

          <div style={sectionTextContainerLastStyles}>
            <div style={iconAndSubtitleContainerStyles}>
              <div style={sectionTextIconStyles}>
                <SolutionIcon />
              </div>
              <h4 style={sectionSubtitleStyles}>Non-Invasive Monitoring</h4>
            </div>
            <p style={sectionTextStyles}>
              One of the standout benefits of camera-based solutions is their
              non-invasive nature. Wearable sensors can be obtrusive, causing
              discomfort due to their weight and skin contact, and can be
              burdensome during daily activities. Cameras, on the other hand, do
              not require any physical contact, making them a more comfortable
              and user-friendly option for continuous monitoring.
            </p>
          </div>
        </div>
      </div>
      <div style={dividerStyles}></div>

      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Superior Information Capture</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            Camera-based solutions excel in capturing detailed information
            compared to typical smart home sensors. They can accurately detect
            both emergencies and everyday activities, such as resting,
            exercising, and cooking. This comprehensive monitoring capability
            enhances the quality of care and safety for users.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>

      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>
            Addressing Common Issues with Wearables
          </h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            One of the standout benefits of camera-based solutions is their
            non-invasive nature. Wearable sensors can be obtrusive, causing
            discomfort due to their weight and skin contact, and can be
            burdensome during daily activities. (Vernon, 2020.) Cameras, on the
            other hand, do not require any physical contact, making them a more
            comfortable and user-friendly option for continuous monitoring.
          </p>
        </div>
      </div>

      <div style={dividerStyles}></div>

      <div style={sectionStyles}>
        <div style={titleContainerStyles}>
          <h2 style={sectionTitleStyles}>Versatility and Adaptability</h2>
        </div>
        <div style={textContainerStyles}>
          <p style={sectionTextStyles}>
            Camera-based systems, paired with contemporary activity recognition
            algorithms, are incredibly versatile. They can accurately detect and
            analyze a wide range of activities, from everyday tasks like cooking
            and exercising to emergency situations. This adaptability makes them
            ideal for providing care and ensuring safety at home.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  promoSection: {
    width: "100%",
    textAlign: "center",
    marginTop: "2rem",
    padding: "2rem 0",
  },
  promoTitle: {
    fontSize: "3.5rem",
    fontWeight: "600",
    fontFamily: "Atyp BL, sans-serif",
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: "0 10px",
    lineHeight: "1.3",
    width: "85%",
    margin: "0 auto",
    marginBottom: "3rem",
  },
  promoTitleMobile: {
    fontSize: "2.5rem",
    width: "90%",
    marginBottom: "2rem",
  },
  promoText: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
    marginTop: "0",
    marginBottom: "4rem",
  },
  promoTextMobile: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    lineHeight: "1.8",
  },
  learnMoreButton: {
    padding: "28px 100px",
    fontSize: "1rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "700",
    backgroundColor: "#3A3CE6",
    color: "white",
    border: "none",
    borderRadius: "48px",
    cursor: "pointer",
  },
  learnMoreButtonMobile: {
    padding: "14px 50px",
  },
  divider: {
    height: "2px",
    backgroundColor: "#D3E4FF",
    width: "70%",
    margin: "1rem auto",
    display: "block",
  },
  dividerMobile: {
    width: "90%",
  },
  section: {
    display: "flex",
    padding: "0 20%",
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "4rem auto",
    width: "65%",
  },
  sectionMobile: {
    flexDirection: "column",
    padding: "0 5%",
    width: "90%",
    margin: "2rem auto",
    alignItems: "center", 
  },
  titleContainer: {
    flex: "0 0 350px",
    marginRight: "100px",
  },
  titleContainerMobile: {
    flex: "0 0 auto",
    marginRight: "0",
    marginBottom: "1rem",
    textAlign: "center",
    alignSelf: "center", 
  },
  sectionTitle: {
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "3rem",
    fontWeight: "500",
    fontFamily: "Atyp BL, sans-serif",
    marginTop: "0",
  },
  sectionTitleMobile: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    textAlign: "center", 
  },
  textContainer: {
    flex: "1",
    padding: "0 20px",
    position: "relative",
  },
  textContainerMobile: {
    padding: "0",
  },
  sectionText: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
    marginTop: "0",
  },
  sectionTextMobile: {
    fontSize: "1.1rem",
    textAlign: "justify",
    lineHeight: "1.8",
  },
  sectionSubtitle: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "600",
    color: "#1A0046",
    marginTop: "0",
    marginBottom: "0.5rem",
  },
  sectionSubtitleMobile: {
    fontSize: "1.1rem",
    textAlign: "center",
  },
  sectionTextContainer: {
    position: "relative",
    margin: "0 0 2.2rem 0",
  },
  sectionTextContainerMobile: {
    margin: "0 0 1.5rem 0",
    alignItems: "center",
  },
  sectionTextContainerLast: {
    position: "relative",
  },
  sectionTextContainerLastMobile: {
    marginBottom: "0",
    alignItems: "center",
  },
  sectionTextIcon: {
    position: "absolute",
    left: "-60px",
    top: "-5px",
  },
  sectionTextIconMobile: {
    position: "static",
    marginBottom: "0.5rem",
  },
  iconAndSubtitleContainer: {
    display: "block",
  },
  iconAndSubtitleContainerMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
};

export default Research;