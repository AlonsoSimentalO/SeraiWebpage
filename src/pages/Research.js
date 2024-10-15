import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SolutionIcon } from "../images/icons/solution_icon.svg";

function Research() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.promoSection}>
        <h2 style={styles.promoTitle}>
          Promoting Independence and <br /> Well-being for Seniors
        </h2>
        <p style={styles.promoText}>
          At Serai, we build innovative software and research advanced
          algorithms to <br />
          detect irregularities in the everyday lives of the elderly.
        </p>
        <button
          style={styles.learnMoreButton}
          onClick={() => navigate("/Partnerships")}
          s
        >
          Become a Partner
        </button>
      </div>
      <div style={styles.divider}></div>

      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Research Focus</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            In our research we focused on exploring significant advantages of
            camera-based solutions which are becoming the preferred choice over
            wearables and ambient sensors for detailed, cost-effective, and
            non-invasive monitoring over traditional wearables and ambient
            sensors.
          </p>
        </div>
      </div>
      <div style={styles.divider}></div>

      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Why Camera-Based Solutions?</h2>
        </div>
        <div style={styles.textContainer}>
          <div style={styles.sectionTextContainer}>
            <div style={styles.sectionTextIcon}>
              <SolutionIcon />
            </div>
            <h4 style={styles.sectionSubtitle}>Enhanced Detail and Insight</h4>
            <p style={styles.sectionText}>
              Camera-based systems provide unparalleled insights into
              environments and user activities. Unlike wearables, which are
              limited by their need for physical contact, cameras capture a
              comprehensive view of both the surroundings and the actions taking
              place within them.
            </p>
          </div>

          <div style={styles.sectionTextContainer}>
            <div style={styles.sectionTextIcon}>
              <SolutionIcon />
            </div>
            <h4 style={styles.sectionSubtitle}>Cost-Effectiveness</h4>
            <p style={styles.sectionText}>
              Modern high-quality cameras are not only affordable but also
              capable of replacing multiple sensors, significantly reducing the
              overall cost of monitoring systems. This makes camera-based
              solutions an economically viable option for various applications,
              including smart homes and healthcare.
            </p>
          </div>

          <div style={styles.sectionTextContainerLast}>
            <div style={styles.sectionTextIcon}>
              <SolutionIcon />
            </div>
            <h4 style={styles.sectionSubtitle}>Non-Invasive Monitoring</h4>
            <p style={styles.sectionText}>
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
      <div style={styles.divider}></div>

      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Superior Information Capture</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            Camera-based solutions excel in capturing detailed information
            compared to typical smart home sensors. They can accurately detect
            both emergencies and everyday activities, such as resting,
            exercising, and cooking. This comprehensive monitoring capability
            enhances the quality of care and safety for users.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>
            Addressing Common Issues with Wearables
          </h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            One of the standout benefits of camera-based solutions is their
            non-invasive nature. Wearable sensors can be obtrusive, causing
            discomfort due to their weight and skin contact, and can be
            burdensome during daily activities. (Vernon, 2020. ) Cameras, on the
            other hand, do not require any physical contact, making them a more
            comfortable and user-friendly option for continuous monitoring.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Versatility and Adaptability</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
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
  sectionTextContainer: {
    position: "relative",
    margin: "0 0 2.2rem 0",
  },
  sectionTextContainerLast: {
    position: "relative",
  },
  sectionTextIcon: {
    position: "absolute",
    left: "-60px",
    top: "-5px",
  },
  divider: {
    height: "2px",
    backgroundColor: "#D3E4FF",
    width: "70%",
    margin: "1rem auto",
    display: "block",
  },
  promoSection: {
    width: "100%",
    textAlign: "center",
    marginTop: "2rem",
    padding: "2rem 0",
  },
  promoTitle: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: "0 10px",
    lineHeight: "1.3",
    width: "85%",
    margin: "0 auto",
    marginBottom: "3rem",
  },
  promoText: {
    fontSize: "1.5rem",
    marginBottom: "4rem",
  },
  learnMoreButton: {
    padding: "15px 100px",
    fontSize: "1rem",
    backgroundColor: "#3A3CE6",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
  },
  section: {
    display: "flex",
    padding: "0 20%",
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "4rem auto",
    width: "60%",
  },
  sectionTitle: {
    background: "linear-gradient(to right, #1A0046, #3A3CE6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "0",
  },
  sectionText: {
    fontSize: "1.3rem",
    lineHeight: "1.6",
    marginTop: "0",
  },
  titleContainer: {
    flex: "0 0 350px",
    marginRight: "100px",
  },
  textContainer: {
    flex: "1",
    padding: "0 20px",
    position: "relative",
  },
  sectionSubtitle: {
    fontSize: "1.2rem",
    color: "#1A0046",
    marginTop: "0",
    marginBottom: "0.5rem",
  },
};

export default Research;
