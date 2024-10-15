import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.sectionGetTouch}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.sectionText}>
            We'd love to hear from you! Whether you have questions about our
            products, need support, or want to learn more about how Serai can
            enhance the quality of life for seniors, our team is here to help.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.section}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Contact US</h2>
        </div>
        <div style={styles.textContainer}>
          <div style={styles.sectionText}>
            <p style={styles.addressP}> Serai AG </p>
            <p> Horneggstrasse 9 </p>
            <p> 8008 Zurich, Switzerland</p>
            <p>
              {" "}
              <b>Phone:</b> +41-44-6880168
            </p>
            <p>
              {" "}
              <b>Email:</b> info@seraispaces.com
            </p>
          </div>
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
    justifyContent: "space-between",
    minHeight: "calc(100vh - 5rem)",
  },
  divider: {
    height: "2px",
    backgroundColor: "#D3E4FF",
    width: "70%",
    margin: "1rem auto",
    display: "block",
  },
  section: {
    display: "flex",
    padding: "0 20%",
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "4rem auto",
    width: "60%",
  },
  sectionGetTouch: {
    display: "flex",
    padding: "0 20%",
    flexDirection: "row",
    alignItems: "center",
    margin: "4rem 0 0 0",
    width: "60%",
    height: '350px'
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
  addressP: {
    marginTop: '0',
    fontWeight: "bold"
  }
};

export default Contact;
