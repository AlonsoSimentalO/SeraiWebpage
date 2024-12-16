import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function getUserLanguage() {
  const userLang = navigator.language || "en";
  if (userLang.startsWith("de")) return "de";
  if (userLang.startsWith("fr")) return "fr";
  if (userLang.startsWith("it")) return "it";
  return "en";
}

const language = getUserLanguage();

const translations = {
  en: {
    getInTouch: "Get in Touch",
    getInTouchP: "We'd love to hear from you! Whether you have questions about our products, need support, or want to learn more about how Serai can enhance the quality of life for seniors, our team is here to help.",
    contactUS: "Contact US",
    seraiAG: "Serai AG",
    addressLine1: "Horneggstrasse 9",
    addressLine2: "8008 Zurich, Switzerland",
    emailLabel: "Email:"
  },
  de: {
    getInTouch: "Kontakt aufnehmen",
    getInTouchP: "Wir würden gerne von Ihnen hören! Ob Sie Fragen zu unseren Produkten haben, Unterstützung benötigen oder mehr darüber erfahren möchten, wie Serai die Lebensqualität älterer Menschen verbessern kann – unser Team ist gerne für Sie da.",
    contactUS: "Kontaktieren Sie uns",
    seraiAG: "Serai AG",
    addressLine1: "Horneggstrasse 9",
    addressLine2: "8008 Zürich, Schweiz",
    emailLabel: "E-Mail:"
  },
  fr: {
    getInTouch: "Entrer en Contact",
    getInTouchP: "Nous serions ravis de vous entendre ! Que vous ayez des questions sur nos produits, besoin d’assistance ou que vous souhaitiez en savoir plus sur la façon dont Serai peut améliorer la qualité de vie des aînés, notre équipe est là pour vous aider.",
    contactUS: "Contactez-nous",
    seraiAG: "Serai AG",
    addressLine1: "Horneggstrasse 9",
    addressLine2: "8008 Zurich, Suisse",
    emailLabel: "E-mail :"
  },
  it: {
    getInTouch: "Mettiti in Contatto",
    getInTouchP: "Saremmo felici di sentirti! Che tu abbia domande sui nostri prodotti, bisogno di supporto o desideri saperne di più su come Serai può migliorare la qualità della vita degli anziani, il nostro team è qui per aiutarti.",
    contactUS: "Contattaci",
    seraiAG: "Serai AG",
    addressLine1: "Horneggstrasse 9",
    addressLine2: "8008 Zurigo, Svizzera",
    emailLabel: "Email:"
  }
};

function Contact() {
  return (
    <div>
      <Header />
      <div className="page-container">
      <div className="divider"></div>
      
      <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].getInTouch}</h2>
          </div>
          <div>
            <p>
            {translations[language].getInTouchP}
            </p>
          </div>
        </section>
        <div className="divider"></div>

        <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].contactUS}</h2>
          </div>
          <div>
           <p className="bold"> {translations[language].seraiAG} </p>
            <p> {translations[language].addressLine1} </p>
            <p> {translations[language].addressLine2}</p>
            <p>
              <span className="bold">{translations[language].emailLabel}</span> info@serai.ch
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
    marginRight: "50px",
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