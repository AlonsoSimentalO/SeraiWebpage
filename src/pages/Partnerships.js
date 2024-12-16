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
    joinB2B: "Join as a B2B partner",
    joinB2BP: "Serai offers trusted, AI-driven seniors care solutions that enhance quality of life while maintaining privacy. Our partnerships empower healthcare providers, insurers, and senior care facilities to improve patient safety, reduce costs, and provide peace of mind.",
    becomePartner: "Become a Partner",
    whyPartner: "Why Partner with Serai",
    whyPartnerP: "Our proven technology delivers continuous, non-intrusive monitoring without wearables, setting us apart with privacy-focused solutions and demonstrated success in real-world implementations.",
    whoPartner: "Who we Partner with",
    healthcareProviders: "Healthcare Providers",
    insuranceCompanies: "Insurance Companies",
    seniorCare: "Senior Care Facilities",
    governmentInstitutions: "Government Institutions",
    partnersSoFar: "Our Partners so far",
    joinOurJourney: "Join our Journey",
    joinOurJourneyP: "We’re always looking for great people to join our Serai team. Check out our current job listings below and get in touch if you think you could be a good match.",
    generalApplication: "General Application"
  },
  de: {
    joinB2B: "Werden Sie B2B-Partner",
    joinB2BP: "Serai bietet vertrauenswürdige, KI-gestützte Lösungen für die Seniorenbetreuung, die die Lebensqualität verbessern und gleichzeitig die Privatsphäre wahren. Unsere Partnerschaften befähigen Gesundheitsdienstleister, Versicherer und Pflegeeinrichtungen, die Patientensicherheit zu erhöhen, Kosten zu senken und Ruhe und Sicherheit zu gewährleisten.",
    becomePartner: "Partner werden",
    whyPartner: "Warum eine Partnerschaft mit Serai",
    whyPartnerP: "Unsere erprobte Technologie bietet kontinuierliche, nicht-intrusive Überwachung ohne Wearables, was uns mit datenschutzorientierten Lösungen und nachgewiesenem Erfolg in realen Umsetzungen auszeichnet.",
    whoPartner: "Mit wem wir zusammenarbeiten",
    healthcareProviders: "Gesundheitsdienstleister",
    insuranceCompanies: "Versicherungsunternehmen",
    seniorCare: "Seniorenpflegeeinrichtungen",
    governmentInstitutions: "Staatliche Institutionen",
    partnersSoFar: "Unsere bisherigen Partner",
    joinOurJourney: "Begleiten Sie uns auf unserer Reise",
    joinOurJourneyP: "Wir sind immer auf der Suche nach großartigen Menschen, die unserem Serai-Team beitreten möchten. Schauen Sie sich unsere aktuellen Stellenangebote an und nehmen Sie Kontakt auf, wenn Sie glauben, dass Sie gut zu uns passen.",
    generalApplication: "Allgemeine Bewerbung"
  },
  fr: {
    joinB2B: "Devenez un partenaire B2B",
    joinB2BP: "Serai propose des solutions de soins pour les aînés, fiables et pilotées par l’IA, qui améliorent la qualité de vie tout en préservant la vie privée. Nos partenariats permettent aux prestataires de soins de santé, aux assureurs et aux établissements de soins pour seniors d’améliorer la sécurité des patients, de réduire les coûts et d’offrir la tranquillité d’esprit.",
    becomePartner: "Devenir Partenaire",
    whyPartner: "Pourquoi s’associer avec Serai",
    whyPartnerP: "Notre technologie éprouvée offre une surveillance continue, non intrusive et sans wearables, ce qui nous distingue grâce à des solutions centrées sur la confidentialité et des succès démontrés dans des conditions réelles.",
    whoPartner: "Avec qui nous nous associons",
    healthcareProviders: "Prestataires de soins de santé",
    insuranceCompanies: "Compagnies d’assurance",
    seniorCare: "Établissements de soins pour seniors",
    governmentInstitutions: "Institutions gouvernementales",
    partnersSoFar: "Nos partenaires à ce jour",
    joinOurJourney: "Rejoignez notre aventure",
    joinOurJourneyP: "Nous recherchons toujours des personnes formidables pour rejoindre l’équipe Serai. Consultez nos offres d’emploi actuelles et contactez-nous si vous pensez que vous seriez un bon candidat.",
    generalApplication: "Candidature Générale"
  },
  it: {
    joinB2B: "Unisciti come Partner B2B",
    joinB2BP: "Serai offre soluzioni di assistenza per anziani affidabili e basate sull’IA, che migliorano la qualità della vita mantenendo la privacy. Le nostre partnership consentono a fornitori di assistenza sanitaria, assicuratori e strutture per anziani di migliorare la sicurezza dei pazienti, ridurre i costi e garantire tranquillità.",
    becomePartner: "Diventa un Partner",
    whyPartner: "Perché Collaborare con Serai",
    whyPartnerP: "La nostra tecnologia collaudata fornisce un monitoraggio continuo e non intrusivo senza dispositivi indossabili, distinguendoci con soluzioni incentrate sulla privacy e un successo dimostrato in implementazioni reali.",
    whoPartner: "Con chi Collaboriamo",
    healthcareProviders: "Fornitori di Assistenza Sanitaria",
    insuranceCompanies: "Compagnie Assicurative",
    seniorCare: "Strutture di Assistenza per Anziani",
    governmentInstitutions: "Istituzioni Governative",
    partnersSoFar: "I nostri Partner finora",
    joinOurJourney: "Unisciti al nostro Viaggio",
    joinOurJourneyP: "Siamo sempre alla ricerca di persone straordinarie che si uniscano al team Serai. Dai un’occhiata alle nostre offerte di lavoro attuali e contattaci se pensi di poter essere un buon candidato.",
    generalApplication: "Candidatura Generale"
  }
};

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(() => window.matchMedia(query).matches);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener); 
  }, [query]);

  return matches;
}

function Partnerships() {
  const mailToLink = "mailto:info@serai.ch";
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');

  const partnerImageLargeStyles = {
    ...styles.partnerImageLarge,
    ...(isMobile && styles.partnerImageLargeMobile),
    ...(isTablet && styles.partnerImageLargeTablet),
  };

  const partnerImageSmallStyles = {
    ...styles.partnerImageSmall,
    ...(isMobile && styles.partnerImageSmallMobile),
    ...(isTablet && styles.partnerImageSmallTablet),
  };

  return (
    <div>
      <Header />

      <div className="page-container">
        <section>
          <h1>{translations[language].joinB2B}</h1>
          <p>
          {translations[language].joinB2BP}
          </p>
          <a className="cta" href={mailToLink} target="_blank" rel="noopener noreferrer">
          {translations[language].becomePartner}
          </a>
        </section>

        <div className="divider"></div>

        <section className="grid grid-theme--light">
            <div>
              <h2>{translations[language].whyPartner}</h2>
            </div>
            <div>
              <p>
              {translations[language].whyPartnerP}
              </p>
            </div>
          </section>

          <div className="divider"></div>

          <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].whoPartner}</h2>
          </div>
          <div>
          <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <p>{translations[language].healthcareProviders}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>{translations[language].insuranceCompanies}</p>
                  </div>
                </li>
            
                <li >
                  <div >
                    <p>{translations[language].seniorCare}</p>
                  </div>
                </li>
                <li >
                  <div >
                    <p>{translations[language].governmentInstitutions}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="grid grid-theme--light">
            <div>
              <h2>{translations[language].partnersSoFar}</h2>
            </div>
            <div>
              <img src={require('../images/FHNW_EN-removebg-preview.png')} alt="FHNW Partner" style={partnerImageLargeStyles} />
              <img src={require('../images/iNNO LOGO.png')} alt="Innosuisse Partner" style={partnerImageSmallStyles} />
              <img src={require('../images/spitexLogo.png')} alt="Spitex Partner" style={partnerImageSmallStyles} />
            </div>
          </section>

          <div className="divider"></div>

          <section className="journey-section">
            <h1>{translations[language].joinOurJourney}</h1>
            <p>
            {translations[language].joinOurJourneyP}
            </p>
            <a className="cta" href={mailToLink} target="_blank" rel="noopener noreferrer">
            {translations[language].generalApplication}
            </a>
        </section>

      </div>
      <Footer />
    </div>
  );
}

const styles = {

  sectionCentered: {
    textAlign: 'center',
    padding: '0 20%',
    marginTop: '2rem',
  },
  sectionCenteredMobile: {
    padding: '0 5%',
    marginTop: '1rem',
    textAlign: 'left',
  },
  sectionCenteredTablet: {
    padding: '0 10%',
    marginTop: '2rem',
    width: '80%',
  },
  sectionTitleCentered: {
    background: 'linear-gradient(to right, #1A0046, #3A3CE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3.5rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    marginBottom: '2.5rem',
  },
  sectionTitleCenteredMobile: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'left',
  },
  sectionTitleCenteredTablet: {
    fontSize: '3rem',
    marginBottom: '2.5rem',
  },
  sectionTextCentered: {
    fontSize: '1.3rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  sectionTextCenteredMobile: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    textAlign: 'left',
  },
  sectionTextCenteredTablet: {
    fontSize: '1.3rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  becomePartnerButton: {
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
  becomePartnerButtonMobile: {
    padding: '14px 50px',
  },
  becomePartnerButtonTablet: {
    padding: '20px 70px',
  },
  extraSpacing: {
    height: '100px',  
  },
  extraSpacingMobile: {
    height: '50px',
  },
  extraSpacingTablet: {
    height: '75px',
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
  
  list: {
    listStyleType: 'none',
    maxWidth: '790px'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem'
  },
  listItemMobile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  listItemTablet: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  listText: {
    fontSize: '1.3rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    textAlign: 'justify',
    lineHeight: '1.6',
    margin: '0',
  },
  listTextMobile: {
    fontSize: '1.1rem',
    textAlign: 'left',
  },
  listTextTablet: {
    fontSize: '1.2rem',
    textAlign: 'left',
  },
  sectionTextIcon: {
    marginRight: "10px",
  },
  sectionTextIconMobile: {
    marginRight: '10px',
    marginBottom: '0',
  },
  sectionTextIconTablet: {
    marginRight: '10px',
    marginBottom: '0',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: '1',
    padding: '0 0',
  },
  imageContainerMobile: {
    alignItems: 'flex-start',
  },
  imageContainerTablet: {
    alignItems: 'flex-start',
    padding: '0 10px',
  },
  partnerImageLarge: {
    width: '500px', 
    marginBottom: '4rem',
  },
  partnerImageLargeMobile: {
    width: '80%',
    marginBottom: '2rem',
  },
  partnerImageLargeTablet: {
    width: '90%',
    marginBottom: '3rem',
  },
  partnerImageSmall: {
    width: '500px', 
    marginBottom: '4rem',
  },
  partnerImageSmallMobile: {
    width: '80%',
    marginBottom: '2rem',
  },
  partnerImageSmallTablet: {
    width: '90%',
    marginBottom: '3rem',
  },
};

export default Partnerships;