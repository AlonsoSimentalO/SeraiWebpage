import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <Header />
      <div className="page-container">
      <div className="divider"></div>
      
      <section className="grid">
          <div>
            <h2>Get in Touch</h2>
          </div>
          <div>
            <p>
            We'd love to hear from you! Whether you have questions about our
            products, need support, or want to learn more about how Serai can
            enhance the quality of life for seniors, our team is here to help.
            </p>
          </div>
        </section>
        <div className="divider"></div>

        <section className="grid">
          <div>
            <h2>Contact US</h2>
          </div>
          <div>
           <p className="bold"> Serai AG </p>
            <p> Horneggstrasse 9 </p>
            <p> 8008 Zurich, Switzerland</p>
            <p>
              <span className="bold">Phone:</span> +41-44-6880168
            </p>
            <p>
              <span className="bold">Email:</span> info@seraispaces.com
            </p>
          </div>
        </section>
     
      </div>
      <Footer />
    </div>
  );
}

const styles = {

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
    margin: "6rem auto 1rem auto", 
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "4rem auto",
    maxWidth: '1440px',
    gap: '20px',
    width: '80%',
    paddingLeft: '6rem',

  },
  sectionMobile: {
    flexDirection: "column",
    padding: "0 5%",
    width: "90%",
    margin: "2rem auto",
    alignItems: "flex-start",
    paddingLeft: '0rem',
  },
  sectionTablet: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "3rem auto",
    paddingLeft: '0rem',
  },
  sectionGetTouch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "6rem",
    marginInline: 'auto',
    maxWidth: '1440px',
    gap: '20px',
    width: '80%',
    paddingLeft: '6rem',
  },
  sectionGetTouchMobile: {
    flexDirection: "column",
    padding: "0 5%",
    width: "90%",
    margin: "2rem auto",
    height: "auto",
    alignItems: "center",
  },
  sectionGetTouchTablet: {
    flexDirection: "row",
    padding: "0 10%",
    width: "80%",
    alignItems: "flex-start",
    height: "auto",
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
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  sectionTitleTablet: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    textAlign: "left",
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
    lineHeight: '1.8'
  },
  sectionTextTablet: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
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
  titleContainerTablet: {
    flex: "0 0 300px", 
    marginRight: "50px", // Reducir margen para tablets
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
  addressP: {
    marginTop: "0",
    fontSize: "1.3rem",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "700",
  },
  addressPMobile: {
    fontSize: "1.1rem",
  },
  addressPTablet: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
};

export default Contact;