import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Player from "@vimeo/player";

const translations = {
  en: {
    overlay: "Enhancing Safety and Quality of Life for Seniors",
    promotingH1: "Promoting Independence and Well-being for Seniors",
    promotingP:
      "Serai provides privacy-preserving, intelligent solutions to support the independence and safety of the seniors. Our advanced technology detects unusual activity patterns, enabling quick intervention and ensuring peace of mind for caregivers.",
    promotingCTA: "Learn More",
    elderlyH2: "Transformative Solutions for Seniors Care",
    elderlyP:
      "Serai’s advanced technology supports the safety, dignity, and independence of seniors individuals. Our solutions provide continuous monitoring and immediate notifications to caregivers, ensuring a secure and supportive living environment.",
    elderlyCTA: "Learn More",
    fallTitle: "Real-Time Fall Detection",
    fallP:
      "Our advanced AI technology detects falls instantly, provides immediate alerts to caregivers hence preventing serious injuries.",
    emergencyTitle: "Emergency Notifications",
    emergencyP:
      "Our system sends real-time notifications to designated caregivers enhancing the safety and security of the seniors.",
    medsTitle: "Medication Reminders",
    medsP:
      "Our system provides timely reminders for medication, helping seniors adhere to their prescribed schedules.",
    monitoringTitle: "24/7 Monitoring",
    monitoringP:
      "Our system detects any irregularities in daily activities, providing a comprehensive safety net for the seniors.",
    whyH2: "Why use our systems?",
    intelligentTitle: "Intelligent",
    intelligentP:
      "Serai adapts to individual needs, providing valuable insights to enhance quality of life.",
    secureTitle: "Secure",
    secureP:
      "Your data is stored safely and securely within the home, ensuring privacy and trust.",
    evolvingTitle: "Evolving",
    evolvingP:
      "Our AI continuously adapts, ensuring our solutions grow smarter, more responsive, and more attuned to the needs of the seniors.",
    joinH2: "Join Us",
    joinP:
      "Partner with Serai to elevate seniors care. Together, we’ll deliver innovative, privacy first solutions that enhance safety, independence, and quality of life."
  },
  de: {
    overlay: "Steigerung der Sicherheit und Lebensqualität älterer Menschen",
    promotingH1:
      "Förderung der Unabhängigkeit und des Wohlbefindens älterer Menschen",
    promotingP:
      "Serai bietet datenschutzfreundliche, intelligente Lösungen zur Unterstützung der Unabhängigkeit und Sicherheit älterer Menschen. Unsere fortschrittliche Technologie erkennt ungewöhnliche Aktivitätsmuster, ermöglicht rasches Eingreifen und gewährleistet Seelenfrieden für Pflegekräfte.",
    promotingCTA: "Mehr Erfahren",
    elderlyH2: "Transformative Lösungen für die Seniorenbetreuung",
    elderlyP:
      "Serais fortschrittliche Technologie unterstützt die Sicherheit, Würde und Unabhängigkeit älterer Personen. Unsere Lösungen bieten kontinuierliche Überwachung und sofortige Benachrichtigungen an Pflegekräfte, um eine sichere und unterstützende Umgebung zu gewährleisten.",
    elderlyCTA: "Mehr Erfahren",
    fallTitle: "Sturz­erkennung in Echtzeit",
    fallP:
      "Unsere fortschrittliche KI erkennt Stürze sofort, sendet umgehend Warnungen an Pflegekräfte und verhindert so schwere Verletzungen.",
    emergencyTitle: "Notfallbenachrichtigungen",
    emergencyP:
      "Unser System sendet Echtzeit-Benachrichtigungen an zuständige Pflegekräfte und erhöht so die Sicherheit älterer Menschen.",
    medsTitle: "Medizinische Erinnerungshilfen",
    medsP:
      "Unser System bietet rechtzeitige Erinnerungen an die Einnahme von Medikamenten und hilft älteren Menschen, ihre vorgeschriebenen Pläne einzuhalten.",
    monitoringTitle: "Rund-um-die-Uhr-Überwachung",
    monitoringP:
      "Unser System erkennt jegliche Unregelmäßigkeiten im Tagesablauf und bietet ein umfassendes Sicherheitsnetz für ältere Menschen.",
    whyH2: "Warum unsere Systeme nutzen?",
    intelligentTitle: "Intelligent",
    intelligentP:
      "Serai passt sich individuellen Bedürfnissen an und bietet wertvolle Erkenntnisse zur Verbesserung der Lebensqualität.",
    secureTitle: "Sicher",
    secureP:
      "Ihre Daten werden sicher und geschützt im Haus gespeichert, was Privatsphäre und Vertrauen gewährleistet.",
    evolvingTitle: "Fortschrittlich",
    evolvingP:
      "Unsere KI entwickelt sich ständig weiter, damit unsere Lösungen intelligenter, reaktionsfähiger und besser an die Bedürfnisse älterer Menschen angepasst sind.",
    joinH2: "Treffen Sie uns",
    joinP:
      "Kooperieren Sie mit Serai, um die Betreuung älterer Menschen zu verbessern. Gemeinsam bieten wir innovative, datenschutzorientierte Lösungen, die Sicherheit, Unabhängigkeit und Lebensqualität steigern."
  },
  fr: {
    overlay: "Améliorer la sécurité et la qualité de vie des aînés",
    promotingH1: "Promouvoir l’autonomie et le bien-être des aînés",
    promotingP:
      "Serai propose des solutions intelligentes et respectueuses de la vie privée afin de soutenir l’autonomie et la sécurité des aînés. Notre technologie avancée détecte les schémas d’activité inhabituels, permettant une intervention rapide et assurant la tranquillité d’esprit des aidants.",
    promotingCTA: "En savoir plus",
    elderlyH2: "Des solutions transformatrices pour le soin des aînés",
    elderlyP:
      "La technologie avancée de Serai soutient la sécurité, la dignité et l’autonomie des personnes âgées. Nos solutions fournissent une surveillance continue et des notifications immédiates aux aidants, garantissant un environnement de vie sécurisé et soutenant.",
    elderlyCTA: "En savoir plus",
    fallTitle: "Détection de chutes en temps réel",
    fallP:
      "Notre technologie IA avancée détecte instantanément les chutes, envoie des alertes immédiates aux aidants et prévient ainsi les blessures graves.",
    emergencyTitle: "Notifications d’urgence",
    emergencyP:
      "Notre système envoie des notifications en temps réel aux aidants désignés, renforçant la sécurité et la protection des aînés.",
    medsTitle: "Rappels médicamenteux",
    medsP:
      "Notre système fournit des rappels opportuns pour la prise de médicaments, aidant les aînés à suivre leurs horaires prescrits.",
    monitoringTitle: "Surveillance 24h/24 et 7j/7",
    monitoringP:
      "Notre système détecte toute irrégularité dans les activités quotidiennes, offrant un filet de sécurité complet pour les aînés.",
    whyH2: "Pourquoi utiliser nos systèmes?",
    intelligentTitle: "Intelligent",
    intelligentP:
      "Serai s’adapte aux besoins individuels, fournissant des informations précieuses pour améliorer la qualité de vie.",
    secureTitle: "Sécurisé",
    secureP:
      "Vos données sont stockées en toute sécurité à domicile, garantissant intimité et confiance.",
    evolvingTitle: "Évolutif",
    evolvingP:
      "Notre IA s’adapte en permanence, garantissant des solutions toujours plus intelligentes, réactives et adaptées aux besoins des aînés.",
    joinH2: "Rejoignez-nous",
    joinP:
      "Associez-vous à Serai pour améliorer le soin des aînés. Ensemble, nous proposerons des solutions innovantes et respectueuses de la vie privée, renforçant la sécurité, l’autonomie et la qualité de vie."
  },
  it: {
    overlay: "Rafforzare la sicurezza e la qualità della vita per gli anziani",
    promotingH1: "Promuovere l’indipendenza e il benessere degli anziani",
    promotingP:
      "Serai offre soluzioni intelligenti e rispettose della privacy per sostenere l’autonomia e la sicurezza degli anziani. La nostra tecnologia avanzata rileva schemi di attività insoliti, consentendo interventi rapidi e garantendo serenità agli operatori.",
    promotingCTA: "Per saperne di più",
    elderlyH2: "Soluzioni trasformative per l’assistenza agli anziani",
    elderlyP:
      "La tecnologia avanzata di Serai supporta la sicurezza, la dignità e l’autonomia degli anziani. Le nostre soluzioni forniscono monitoraggio continuo e notifiche immediate agli operatori, assicurando un ambiente di vita protetto e di sostegno.",
    elderlyCTA: "Per saperne di più",
    fallTitle: "Rilevamento cadute in tempo reale",
    fallP:
      "La nostra tecnologia IA avanzata rileva istantaneamente le cadute, invia avvisi immediati agli operatori e previene gravi lesioni.",
    emergencyTitle: "Notifiche d’emergenza",
    emergencyP:
      "Il nostro sistema invia notifiche in tempo reale agli operatori designati, incrementando la sicurezza e la protezione degli anziani.",
    medsTitle: "Promemoria per i farmaci",
    medsP:
      "Il nostro sistema fornisce promemoria tempestivi per i medicinali, aiutando gli anziani a rispettare i programmi prescritti.",
    monitoringTitle: "Monitoraggio 24 ore su 24, 7 giorni su 7",
    monitoringP:
      "Il nostro sistema rileva eventuali irregolarità nelle attività quotidiane, fornendo una rete di sicurezza completa per gli anziani.",
    whyH2: "Perché usare i nostri sistemi?",
    intelligentTitle: "Intelligente",
    intelligentP:
      "Serai si adatta alle esigenze individuali, offrendo informazioni preziose per migliorare la qualità della vita.",
    secureTitle: "Sicuro",
    secureP:
      "I tuoi dati sono conservati in modo sicuro all’interno della casa, garantendo riservatezza e fiducia.",
    evolvingTitle: "In continua evoluzione",
    evolvingP:
      "La nostra IA si adatta continuamente, assicurando soluzioni sempre più intelligenti, reattive e in sintonia con le necessità degli anziani.",
    joinH2: "Unisciti a noi",
    joinP:
      "Collabora con Serai per elevare l’assistenza agli anziani. Insieme forniremo soluzioni innovative, orientate alla privacy, che aumentano sicurezza, indipendenza e qualità della vita."
  }
};

function Home() {
  const getUserLanguage = () => {
    const userLang = navigator.language || "en";
    if (userLang.startsWith("de")) return "de";
    if (userLang.startsWith("fr")) return "fr";
    if (userLang.startsWith("it")) return "it";
    return "en";
  };
  const language = getUserLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const vimeoPlayerRef = useRef(null);
  const elderlyCareRef = useRef(null);
  const whySectionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    const iframe = document.getElementById("vimeo-player");
    vimeoPlayerRef.current = new Player(iframe, {
      id: 1028733738,
      autoplay: true,
      muted: true,
      controls: true,
    });
    vimeoPlayerRef.current.on("play", () => {
      setIsPlaying(true);
    });
    vimeoPlayerRef.current.on("pause", () => {
      setIsPlaying(false);
    });
    vimeoPlayerRef.current.on("ended", () => {
      setIsPlaying(false);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.unload();
      }
    };
  }, []);

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
            <iframe
              id="vimeo-player"
              src="https://player.vimeo.com/video/1028733738?autoplay=1&muted=1&controls=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
            ></iframe>
            {!isPlaying && (
              <>
                <div style={styles.overlay}></div>
                <div style={overlayTextStyles}>
                  {translations[language].overlay}
                </div>
              </>
            )}
          </div>
        </div>
        <section className="promoting-section">
          <h1>
            {translations[language].promotingH1}
          </h1>
          <p>
            {translations[language].promotingP}
          </p>
          <button
            className="cta"
            onClick={() => scrollToSection(elderlyCareRef)}
          >
            {translations[language].promotingCTA}
          </button>
        </section>
        <section ref={elderlyCareRef}>
          <h2>{translations[language].elderlyH2}</h2>
          <p>
            {translations[language].elderlyP}
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
                    <h5>{translations[language].fallTitle}</h5>
                    <p>{translations[language].fallP}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>{translations[language].emergencyTitle}</h5>
                    <p>{translations[language].emergencyP}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>{translations[language].medsTitle}</h5>
                    <p>{translations[language].medsP}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>{translations[language].monitoringTitle}</h5>
                    <p>{translations[language].monitoringP}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="cta"
            onClick={() => scrollToSection(whySectionRef)}
          >
            {translations[language].elderlyCTA}
          </button>
        </section>
        <div ref={whySectionRef} className="section-background--grey">
          <h2>{translations[language].whyH2}</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../images/intelligent.png")}
                  alt="Intelligent"
                />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">{translations[language].intelligentTitle}</h4>
                <p className="card-text">
                  {translations[language].intelligentP}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={require("../images/secure.png")} alt="Secure" />
              </div>
              <div className="card-textblock">
                <h4 className="card-title">{translations[language].secureTitle}</h4>
                <p className="card-text">
                  {translations[language].secureP}
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
                <h4 className="card-title">{translations[language].evolvingTitle}</h4>
                <p className="card-text">
                  {translations[language].evolvingP}
                </p>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="row-container section-joinus">
            <div className="row-container--left">
              <h2>{translations[language].joinH2}</h2>
              <p>
                {translations[language].joinP}
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