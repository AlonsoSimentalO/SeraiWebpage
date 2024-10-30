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

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');

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

  const sectionStyles = {
    ...styles.section,
    ...(isMobile && styles.sectionMobile),
    ...(isTablet && styles.sectionTablet),
  };

  const titleContainerStyles = {
    ...styles.titleContainer,
    ...(isMobile && styles.titleContainerMobile),
    ...(isTablet && styles.titleContainerTablet),
  };

  const sectionTitleStyles = {
    ...styles.sectionTitle,
    ...(isMobile && styles.sectionTitleMobile),
    ...(isTablet && styles.sectionTitleTablet),
  };

  const textContainerStyles = {
    ...styles.textContainer,
    ...(isMobile && styles.textContainerMobile),
    ...(isTablet && styles.textContainerTablet),
  };

  const sectionTextStyles = {
    ...styles.sectionText,
    ...(isMobile && styles.sectionTextMobile),
    ...(isTablet && styles.sectionTextTablet),
  };

  const sectionSubtitleStyles = {
    ...styles.sectionSubtitle,
    ...(isMobile && styles.sectionSubtitleMobile),
  };

  const sectionTextContainerStyles = {
    ...styles.sectionTextContainer,
    ...(isMobile && styles.sectionTextContainerMobile),
    ...(isTablet && styles.sectionTextContainerTablet),
  };

  const sectionTextContainerLastStyles = {
    ...styles.sectionTextContainerLast,
    ...(isMobile && styles.sectionTextContainerLastMobile),
    ...(isTablet && styles.sectionTextContainerLastTablet),
  };

  const sectionTextIconStyles = {
    ...styles.sectionTextIcon,
    ...(isMobile && styles.sectionTextIconMobile),
    ...(isTablet && styles.sectionTextIconTablet),
  };

  const iconAndSubtitleContainerStyles = {
    ...styles.iconAndSubtitleContainer,
    ...(isMobile && styles.iconAndSubtitleContainerMobile),
    ...(isTablet && styles.iconAndSubtitleContainerTablet),
  };

  const dividerStyles = {
    ...styles.divider,
    ...(isMobile && styles.dividerMobile),
    ...(isTablet && styles.dividerTablet),
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.promoSection}>
        <h2 style={promoTitleStyles}>Our Research</h2>
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
    textAlign: "center",
    marginTop: "2rem",
    padding: "2rem 0",
    marginInline: 'auto',
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
    fontSize: "2.3rem",
    width: "90%",
    marginBottom: "2rem",
  },
  promoTitleTablet: {
    fontSize: "2.8rem",
    width: "95%",
    marginBottom: "2.5rem",
  },
  promoText: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
    marginBottom: "4rem",
    marginInline: 'auto'
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
  promoTextTablet: {
    fontSize: '1.3rem',
    marginBottom: '3rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    width: '95%',
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
  learnMoreButtonTablet: {
    padding: "20px 70px",
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
  dividerTablet: {
    width: "80%",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "4rem auto",
    maxWidth: '1440px',
    gap: '20px'
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
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "3rem auto",
  },
  titleContainer: {
    maxWidth: '350px'
  },
  titleContainerMobile: {
    flex: "0 0 auto",
    marginRight: "0",
    marginBottom: "1rem",
    textAlign: "left",
    alignSelf: "stretch",
  },
  titleContainerTablet: {
    flex: '0 0 300px', 
    marginRight: '30px', 
  },
  sectionTitle: {
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2.5rem",
    fontWeight: "500",
    fontFamily: "Atyp BL, sans-serif",
    marginTop: "0",
    paddingLeft: '1rem',
    minWidth: '350px'
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
    flex: "1",
    padding: "0 20px",
    position: "relative",
  },
  textContainerMobile: {
    padding: "0",
  },
  textContainerTablet: {
    padding: "0 10px",
  },
  sectionText: {
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
    maxWidth: '790px'
  },
  sectionTextMobile: {
    fontSize: "1.1rem",
    textAlign: "left",
    lineHeight: "1.8",
  },
  sectionTextTablet: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
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
    textAlign: "left",
  },
  sectionTextContainer: {
    position: "relative",
    margin: "0 0 2.2rem 0",
  },
  sectionTextContainerMobile: {
    margin: "0 0 1.5rem 0",
    alignItems: "flex-start",
  },
  sectionTextContainerTablet: {
    margin: "0 0 2rem 0",
  },
  sectionTextContainerLast: {
    position: "relative",
  },
  sectionTextContainerLastMobile: {
    marginBottom: "0",
    alignItems: "flex-start",
  },
  sectionTextContainerLastTablet: {
    marginBottom: "0",
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
  sectionTextIconTablet: {
    position: "absolute",
    left: "-50px",
    top: "-5px",
  },
  iconAndSubtitleContainer: {
    display: "block",
  },
  iconAndSubtitleContainerMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "0.4rem",
  },
  iconAndSubtitleContainerTablet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "0.4rem",
  },
  teamSection: {
    marginTop: "5rem",
    textAlign: "center",
  },
  teamTitle: {
    fontSize: "3.2rem",
    fontWeight: "700",
    fontFamily: "Atyp BL, sans-serif",
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  teamTitleMobile: {
    fontSize: "2.5rem",
  },
  teamTitleTablet: {
    fontSize: "2.8rem",
  },
  teamDescription: {
    fontSize: "2rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    color: "#1A0046",
    textAlign: "center",
    marginTop: "5rem",
    marginBottom: "1rem",
  },
  teamDescriptionMobile: {
    fontSize: "1.5rem",
    marginTop: "2rem",
  },
  teamDescriptionTablet: {
    fontSize: "1.8rem",
    marginTop: "3rem",
  },
  teamMembers: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "50px",
    justifyItems: "center",
  },
  teamMembersMobile: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  teamMembersTablet: {
    gridTemplateColumns: "repeat(2, 1fr)", 
    gap: "30px",
  },
  researchTitle: {
    fontSize: "2rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    color: "#1A0046",
    textAlign: "center",
    marginTop: "5rem",
    marginBottom: "1rem",
  },
  researchTitleMobile: {
    fontSize: "1.5rem",
    marginTop: "3rem",
  },
  researchTitleTablet: {
    fontSize: "1.8rem",
    marginTop: "4rem",
  },
  researchPartners: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "50px",
    justifyItems: "center",
  },
  researchPartnersMobile: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  researchPartnersTablet: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
  },
  memberContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    width: "250px",
    marginTop: "7rem",
  },
  memberContainerMobile: {
    marginTop: "3rem",
    width: "80%",
  },
  memberContainerTablet: {
    marginTop: "4rem",
    width: "220px",
  },
  memberImage: {
    width: "100%",
    height: "auto",
    clipPath: "polygon(50% 0%, 98% 22%, 98% 78%, 50% 100%, 2% 78%, 2% 22%)",
    boxSizing: "border-box",
  },
  memberImageMobile: {
    width: "100%",
  },
  memberImageTablet: {
    width: "90%", 
  },
  memberName: {
    fontSize: "1.3rem",
    fontWeight: "700",
    fontFamily: "Atyp BL, sans-serif",
    marginTop: "10px",
    marginBottom: "0px",
  },
  memberNameMobile: {
    fontSize: "1.2rem",
  },
  memberNameTablet: {
    fontSize: "1.3rem",
  },
  memberRole: {
    fontSize: "1rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "400",
    color: "#3E3E59",
    marginBottom: "10px",
    flex: "1",
  },
  memberRoleMobile: {
    fontSize: "0.9rem",
  },
  memberRoleTablet: {
    fontSize: "1rem",
  },
  linkedinIcon: {
    width: "36px",
    height: "36px",
    marginBottom: "10px",
  },
};

export default Research;