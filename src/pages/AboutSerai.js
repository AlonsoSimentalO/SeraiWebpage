import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import emreImage from '../images/profil_images/img_emre_tuna.svg';
import alenImage from '../images/profil_images/img_alen_selim.svg';
import frankImage from      '../images/profil_images/img_frank_theelen.svg'
import pinarImage from      '../images/profil_images/img_pinar_yaktiyol.svg'
import evrimImage from      '../images/profil_images/img_evrim_firatli.svg'
import eduardoImage from    '../images/profil_images/img_eduardo_ferrer.svg'
import robertImage from     '../images/profil_images/img_roberthasson.svg'
import burakImage from      '../images/profil_images/img_burak_yetiskin.svg'
import arzuImage from       '../images/profil_images/img_arzu_coltekin.jpg'
import antonImage from      '../images/profil_images/img_anton_fedosov.svg'
import linkedinIcon from    '../images/linkedin/linkedin_icon.png'

const translations = {
  en: {
    goalsDriveUs: "These goals drive us:",
    goals: [
      "Enhancing safety and independence to empower the seniors",
      "Advancing intelligent monitoring solutions for proactive care",
      "Investing in ongoing R&D to continuously improve the evolving needs of the seniors population"
    ],
    aboutSerai: "About Serai",
    aboutSeraiP: "Serai develops privacy-focused software and intelligent monitoring algorithms to enhance safety and independence for the seniors. Our technology detects unusual activity patterns, identifying risks and enabling timely intervention to create safer living environments.",
    research: "Research",
    researchP: "Through a collaborative research project with FHNW, supported by Innosuisse’s Innocheque, Serai is advancing seniors care. With CHF 1.1 million in private seed funding and a patent application underway, we are committed to pioneering solutions that empower seniors individuals and support caregivers.",
    theProblem: "The Problem",
    theProblemP: "Rising Seniors Population: Projected to reach 1.5 billion by 2050.\nHigh Fall Incidence and Costs: In Switzerland, 90,000 falls yearly lead to CHF 1.9 billion in healthcare costs.\nLimitations of Wearable Devices: Over 80% of seniors avoid wearables due to discomfort.",
    ourSolution: "Our Solution",
    nonIntrusive: "Non-Intrusive Monitoring",
    nonIntrusiveP: "Serai’s system uses advanced sensors and cameras to monitor safety without the need for wearables.",
    immediateAlerts: "Immediate Alerts",
    immediateAlertsP: "AI-powered fall detection sends real-time alerts to caregivers.",
    privacyCost: "Privacy and Cost Savings",
    privacyCostP: "Enhances safety and reduces healthcare costs through proactive fall prevention.",
    ourBusinessImpact: "Our business Impact",
    economicImpact: "Economic Impact",
    economicImpactP: "Serai offers a cost-effective alternative to traditional seniors care, with a low monthly subscription fee compared to the average CHF 9,122 monthly care costs.",
    socialImpact: "Social Impact",
    socialImpactP: "Our solution promotes independence and safety for the seniors, easing caregiver burdens and enhancing family support.",
    meetOurTeam: "Meet Our Team",
    meetOurTeamP: "Serai Team Advisory and Executive Board Member Committee",
    researchPartnersTitle: "Research Partners"
  },
  de: {
    goalsDriveUs: "Diese Ziele treiben uns an:",
    goals: [
      "Verbesserung der Sicherheit und Unabhängigkeit zur Stärkung älterer Menschen",
      "Vorantreiben intelligenter Überwachungslösungen für proaktive Pflege",
      "Investition in laufende F&E, um den sich entwickelnden Bedürfnissen der älteren Bevölkerung kontinuierlich gerecht zu werden"
    ],
    aboutSerai: "Über Serai",
    aboutSeraiP: "Serai entwickelt datenschutzfreundliche Software und intelligente Überwachungsalgorithmen, um die Sicherheit und Unabhängigkeit älterer Menschen zu verbessern. Unsere Technologie erkennt ungewöhnliche Aktivitätsmuster, identifiziert Risiken und ermöglicht zeitnahe Interventionen, um sicherere Lebensumgebungen zu schaffen.",
    research: "Forschung",
    researchP: "Durch ein gemeinsames Forschungsprojekt mit der FHNW, unterstützt durch den Innosuisse-Innocheque, treibt Serai die Betreuung älterer Menschen voran. Mit CHF 1,1 Millionen privater Startfinanzierung und einer laufenden Patentanmeldung engagieren wir uns für bahnbrechende Lösungen, die ältere Menschen stärken und Pflegekräfte unterstützen.",
    theProblem: "Das Problem",
    theProblemP: "Wachsende ältere Bevölkerung: Prognosen von 1,5 Milliarden bis 2050.\nHohe Sturzhäufigkeit und -kosten: In der Schweiz führen jährlich 90.000 Stürze zu Gesundheitskosten von CHF 1,9 Milliarden.\nEinschränkungen bei tragbaren Geräten: Über 80% der älteren Menschen meiden Wearables aufgrund von Unbehagen.",
    ourSolution: "Unsere Lösung",
    nonIntrusive: "Nicht-intrusive Überwachung",
    nonIntrusiveP: "Das System von Serai nutzt fortschrittliche Sensoren und Kameras, um Sicherheit ohne Wearables zu gewährleisten.",
    immediateAlerts: "Sofortige Warnungen",
    immediateAlertsP: "KI-gestützte Sturzerkennung sendet Echtzeitwarnungen an Pflegekräfte.",
    privacyCost: "Datenschutz und Kosteneinsparungen",
    privacyCostP: "Erhöht die Sicherheit und senkt Gesundheitskosten durch proaktive Sturzprävention.",
    ourBusinessImpact: "Unser Geschäftlicher Einfluss",
    economicImpact: "Wirtschaftliche Auswirkungen",
    economicImpactP: "Serai bietet eine kostengünstige Alternative zur traditionellen Seniorenbetreuung, mit einer niedrigen monatlichen Abonnementgebühr im Vergleich zu den durchschnittlichen CHF 9.122 monatlichen Betreuungskosten.",
    socialImpact: "Soziale Auswirkungen",
    socialImpactP: "Unsere Lösung fördert Unabhängigkeit und Sicherheit für ältere Menschen, entlastet Pflegekräfte und stärkt die familiäre Unterstützung.",
    meetOurTeam: "Lernen Sie unser Team kennen",
    meetOurTeamP: "Serai Team Advisory und Executive Board Member Committee",
    researchPartnersTitle: "Forschungspartner"
  },
  fr: {
    goalsDriveUs: "Ces objectifs nous animent :",
    goals: [
      "Améliorer la sécurité et l’autonomie pour soutenir les aînés",
      "Faire progresser des solutions de surveillance intelligente pour des soins proactifs",
      "Investir dans la R&D continue pour répondre aux besoins évolutifs de la population âgée"
    ],
    aboutSerai: "À propos de Serai",
    aboutSeraiP: "Serai développe des logiciels respectueux de la vie privée et des algorithmes de surveillance intelligente afin d’améliorer la sécurité et l’autonomie des aînés. Notre technologie détecte les schémas d’activité inhabituels, identifie les risques et permet une intervention rapide pour créer des environnements de vie plus sûrs.",
    research: "Recherche",
    researchP: "Grâce à un projet de recherche collaboratif avec la FHNW, soutenu par l’Innocheque d’Innosuisse, Serai fait progresser les soins aux aînés. Avec un financement privé d’amorçage de CHF 1,1 million et une demande de brevet en cours, nous nous engageons à développer des solutions innovantes qui autonomisent les aînés et soutiennent les aidants.",
    theProblem: "Le Problème",
    theProblemP: "Population de personnes âgées croissante : 1,5 milliard d’ici 2050.\nIncidence élevée des chutes et coûts associés : En Suisse, 90 000 chutes par an entraînent des coûts de santé de CHF 1,9 milliard.\nLimitations des appareils portables : Plus de 80% des aînés évitent les wearables en raison de l’inconfort.",
    ourSolution: "Notre Solution",
    nonIntrusive: "Surveillance non-intrusive",
    nonIntrusiveP: "Le système de Serai utilise des capteurs avancés et des caméras pour assurer la sécurité sans wearables.",
    immediateAlerts: "Alertes Immédiates",
    immediateAlertsP: "La détection de chutes assistée par IA envoie des alertes en temps réel aux aidants.",
    privacyCost: "Respect de la vie privée et Réduction des coûts",
    privacyCostP: "Renforce la sécurité et réduit les coûts de santé grâce à une prévention proactive des chutes.",
    ourBusinessImpact: "Notre Impact Commercial",
    economicImpact: "Impact Économique",
    economicImpactP: "Serai offre une alternative rentable aux soins traditionnels, avec un faible abonnement mensuel comparé aux coûts moyens de CHF 9 122 par mois.",
    socialImpact: "Impact Social",
    socialImpactP: "Notre solution favorise l’autonomie et la sécurité des aînés, allégeant la charge des aidants et renforçant le soutien familial.",
    meetOurTeam: "Rencontrez Notre Équipe",
    meetOurTeamP: "Comité des membres du conseil consultatif et du conseil d’administration de Serai",
    researchPartnersTitle: "Partenaires de Recherche"
  },
  it: {
    goalsDriveUs: "Questi obiettivi ci guidano:",
    goals: [
      "Migliorare la sicurezza e l’indipendenza per sostenere gli anziani",
      "Promuovere soluzioni di monitoraggio intelligente per un’assistenza proattiva",
      "Investire in R&S continua per soddisfare le esigenze in evoluzione della popolazione anziana"
    ],
    aboutSerai: "Informazioni su Serai",
    aboutSeraiP: "Serai sviluppa software incentrati sulla privacy e algoritmi di monitoraggio intelligenti per migliorare la sicurezza e l’autonomia degli anziani. La nostra tecnologia rileva schemi di attività insoliti, identificando i rischi e consentendo interventi tempestivi per creare ambienti di vita più sicuri.",
    research: "Ricerca",
    researchP: "Attraverso un progetto di ricerca collaborativo con la FHNW, supportato dall’Innocheque di Innosuisse, Serai sta migliorando l’assistenza agli anziani. Con 1,1 milioni di CHF di finanziamenti privati iniziali e una domanda di brevetto in corso, ci impegniamo a sviluppare soluzioni all’avanguardia che potenziano gli anziani e supportano i caregiver.",
    theProblem: "Il Problema",
    theProblemP: "Crescita della popolazione anziana: previsti 1,5 miliardi entro il 2050.\nAlta incidenza di cadute e costi: In Svizzera, 90.000 cadute all’anno comportano costi sanitari di 1,9 miliardi di CHF.\nLimitazioni dei dispositivi indossabili: Oltre l’80% degli anziani evita i wearables per disagio.",
    ourSolution: "La Nostra Soluzione",
    nonIntrusive: "Monitoraggio Non Intrusivo",
    nonIntrusiveP: "Il sistema di Serai utilizza sensori e telecamere avanzati per garantire la sicurezza senza la necessità di dispositivi indossabili.",
    immediateAlerts: "Avvisi Immediati",
    immediateAlertsP: "Il rilevamento di cadute basato sull’IA invia avvisi in tempo reale agli operatori sanitari.",
    privacyCost: "Privacy e Risparmio sui Costi",
    privacyCostP: "Migliora la sicurezza e riduce i costi sanitari attraverso la prevenzione proattiva delle cadute.",
    ourBusinessImpact: "Il Nostro Impatto sul Business",
    economicImpact: "Impatto Economico",
    economicImpactP: "Serai offre un’alternativa conveniente all’assistenza tradizionale, con un basso canone mensile rispetto ai costi medi mensili di 9.122 CHF.",
    socialImpact: "Impatto Sociale",
    socialImpactP: "La nostra soluzione favorisce l’indipendenza e la sicurezza degli anziani, alleggerendo il carico dei caregiver e rafforzando il sostegno familiare.",
    meetOurTeam: "Incontra il Nostro Team",
    meetOurTeamP: "Comitato di membri del consiglio consultivo e del consiglio esecutivo di Serai",
    researchPartnersTitle: "Partner di Ricerca"
  }
};

function getUserLanguage() {
  const userLang = navigator.language || "en";
  if (userLang.startsWith("de")) return "de";
  if (userLang.startsWith("fr")) return "fr";
  if (userLang.startsWith("it")) return "it";
  return "en";
}

const language = getUserLanguage();

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

function AboutSerai() { 
  const [hoverIndex, setHoverIndex] = useState(-1);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 767px) and (max-width: 1024px)');
  
  const goalStylesArray = [
    { width: '85%' },  
    { width: '90%' },  
    { width: '100%' }  
  ];

  const teamMembers = [
    { name: 'Emre Tuna', role: 'Investor and Executive Board Member', image: emreImage, linkedin: 'https://www.linkedin.com/in/emre-tuna-09b7b280/' },
    { name: 'Alen Selim Kimer', role: 'Executive Board Member', image: alenImage, linkedin: 'https://www.linkedin.com/in/selimkimer/' },
    { name: 'Frank Theelen', role: 'Advisory Board Member and Head of Strategic Partnerships', image: frankImage, linkedin: 'https://www.linkedin.com/in/franktheelen/' },
    { name: 'Pinar Yaktiyol', role: 'Advisory Board Member', image: pinarImage, linkedin: 'https://www.linkedin.com/in/yaktiyolpinar/' },
    { name: 'Evrim Firatli', role: 'ML Intern', image: evrimImage, linkedin: 'https://www.linkedin.com/in/firatlievrim/' },
    { name: 'Eduardo Castello Ferrer', role: 'Advisory Board Member', image: eduardoImage, linkedin: 'https://www.linkedin.com/in/eduardocastelloferrer/' },
    { name: 'Robert Hasson', role: 'Advisory Board Member', image: robertImage, linkedin: 'https://www.linkedin.com/in/robert-hasson/' },
    { name: 'Burak Yetiskin', role: 'Founder, Ex-CEO, Advisory Board Member', image: burakImage, linkedin: 'https://www.linkedin.com/in/burakyetiskin/' },
  ];

  const researchPartners = [
    { name: 'Prof. Dr. Arzu Coltekin', role: 'Advisory Board Member', image: arzuImage, linkedin: 'https://www.linkedin.com/in/arzucoltekin/' },
    { name: 'Prof. Dr. Anton Fedosov', role: 'Advisory Board Member', image: antonImage, linkedin: 'https://www.linkedin.com/in/antonfedosov/' }
  ];

  const TeamMember = ({ name, role, image, linkedin }) => (
    <div class="team-member" style={{ 
      ...styles.memberContainer, 
      ...(isMobile && styles.memberContainerMobile),
      ...(isTablet && styles.memberContainerTablet),
    }}>
      <img src={image} alt={name} style={{ 
        ...styles.memberImage, 
        ...(isMobile && styles.memberImageMobile),
        ...(isTablet && styles.memberImageTablet),
      }} />
      <h3 style={{ 
        ...styles.memberName, 
        ...(isMobile && styles.memberNameMobile),
        ...(isTablet && styles.memberNameTablet),
      }}>{name}</h3>
      <p style={{ 
        ...styles.memberRole, 
        ...(isMobile && styles.memberRoleMobile),
        ...(isTablet && styles.memberRoleTablet),
      }}>{role}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" style={styles.linkedinIcon} />
      </a>
    </div>
  );

  const researchTitleStyles = {
    ...styles.researchTitle,
    ...(isMobile && styles.researchTitleMobile),
    ...(isTablet && styles.researchTitleTablet),
  };

  return (
    <div style={{
      ...styles.container,
      ...(isMobile && { overflowX: 'hidden' }),
    }}>
      <Header />
        <div className="page-container">
          <div className="goals-section"> 
              <h3 >
              {translations[language].goalsDriveUs}
              </h3>
              <div className="goals">
                {translations[language].goals.map((goal, index) => (
                  <p style={{ 
                    ...styles.goal, 
                    ...goalStylesArray[index], 
                    transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)', 
                    transition: 'transform 0.3s ease',
                    ...(isMobile && styles.goalMobile),
                    ...(isTablet && styles.goalTablet),
                  }} 
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}>
                    {index + 1}. {goal}
                  </p>
                ))}
              </div>
          </div>
          
          <div className="divider"></div>
          
          <section className="grid grid-theme--light">
            <div>
              <h2>{translations[language].aboutSerai}</h2>
            </div>
            <div>
              <p>
              {translations[language].aboutSeraiP}
              </p>
            </div>
          </section>
          
          <div className="divider"></div>
          <section className="grid grid-theme--light">
            <div>
              <h2>{translations[language].research}</h2>
            </div>
            <div>
              <p>
              {translations[language].researchP}
              </p>
            </div>
          </section>

          <div className="divider"></div>

          <section className="grid grid-theme--light" >
            <div>
              <h2>{translations[language].theProblem}</h2>
            </div>
            <div>
              <p>
              {translations[language].theProblemP}
              </p>
            </div>
          </section>
          <div className="divider"></div>

          <section className="grid grid-theme--light">
            <div>
              <h2>{translations[language].ourSolution}</h2>
            </div>
            <div>
            <div className="icon-list">
                <ul>
                  <li>
                    <div>
                      <h5>{translations[language].nonIntrusive}</h5>
                      <p>{translations[language].nonIntrusiveP}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>{translations[language].immediateAlerts}</h5>
                      <p>{translations[language].immediateAlertsP}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>{translations[language].privacyCost}</h5>
                      <p>{translations[language].privacyCostP}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="divider"></div>

          <section className="grid grid-theme--light">
            <div>
              <h2>{translations[language].ourBusinessImpact}</h2>
            </div>
            <div>
            <div className="icon-list">
                <ul>
                  <li>
                    <div>
                      <h5>{translations[language].economicImpact}</h5>
                      <p>{translations[language].economicImpactP}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>{translations[language].socialImpact}</h5>
                      <p>{translations[language].socialImpactP}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <div className="divider"></div>
          <section style={styles.teamSection}>
            <h2>{translations[language].meetOurTeam}</h2>
            <p>
              {translations[language].meetOurTeamP}
            </p>
            <div style={{ 
              ...styles.teamMembers, 
              ...(isMobile && styles.teamMembersMobile),
              ...(isTablet && styles.teamMembersTablet),
            }}>
              {teamMembers.map(member => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </section>

          <div style={researchTitleStyles}>{translations[language].researchPartnersTitle}</div>
          <div style={{ 
            ...styles.researchPartners, 
            ...(isMobile && styles.researchPartnersMobile),
            ...(isTablet && styles.researchPartnersTablet),
          }}>
            {researchPartners.map(partner => (
              <TeamMember key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    padding: '0',
    width: '100%',
  },
  contentMobile: {
    padding: '1rem',
  },
  title: {
    textAlign: 'left',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '600',
    fontFamily: 'Atyp BL, sans-serif',
    marginLeft: '20%',
  },
  titleMobile: {
    textAlign: 'center',
    marginLeft: '0',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  titleTablet: {
    textAlign: 'center',
    marginLeft: '0',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  goals: {
    marginTop: '2rem',
    padding: '0',
    fontSize: '1.4rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    lineHeight: '1.8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: '4rem'
  },
  goalsMobile: {
    padding: '0 4%',
    marginBottom: '2rem',
    width: '84%'
  },
  goalsTablet: {
    padding: '0 10%',
    marginBottom: '3rem',
    width: '80%',
  },
  goal: {
    textAlign: 'left',
    backgroundColor: '#2176FF33',
    color: '#1A0046',
    borderRadius: '5px',
    fontWeight: '600',
    display: 'block',
  },
  goalMobile: {
    textAlign: 'left',
    fontSize: '1.1rem',
  },
  goalTablet: {
    textAlign: 'left',
    fontSize: '1.2rem',
  },
  divider: {
    height: '2px',
    backgroundColor: '#D3E4FF',
    width: '70%', 
    margin: '1rem auto',
    display: 'block'
  },
  dividerMobile: {
    width: "90%",
  },
  dividerTablet: {
    width: "80%",
  },
  section: {
    display: 'flex',
    margin: '4rem auto',
    padding: '0 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "65%",
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
    padding: "0 10%",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "3rem auto",
  },
  titleContainer: {
    flex: '0 0 350px',
    marginRight: '100px'
  },
  titleContainerMobile: {
    flex: "0 0 auto",
    width: "100%",
    marginRight: "0",
    marginBottom: "1rem",
    textAlign: "left",
    alignSelf: "stretch",
  },
  titleContainerTablet: {
    flex: '0 0 300px', 
    marginRight: '0px', 
  },
  sectionTitle: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3rem',  
    fontWeight: '500',
    fontFamily: 'Atyp BL, sans-serif',
    marginTop: '0'
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
    flex: '1',
    padding: '0 20px',
    position: 'relative',
  },
  textContainerMobile: {
    padding: '0',
  },
  textContainerTablet: {
    padding: '0 10px',
  },
  sectionText: {
    fontSize: '1.3rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    lineHeight: '1.6',
    marginTop: '0',
  },
  sectionTextMobile: {
    fontSize: '1.1rem',
    textAlign: 'left',
    lineHeight: '1.8',
  },
  sectionTextTablet: {
    fontSize: '1.2rem',
    lineHeight: '1.7',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2176FF', 
  },
  teamSection: {
    marginTop: '32px', 
  },
  teamTitle: {
    fontSize: '3.2rem',  
  },
  teamTitleMobile: {
    fontSize: '2.5rem',
  },
  teamTitleTablet: {
    fontSize: '2.8rem',
  },
  teamMembers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    rowGap: '48px',
  },
  teamMembersMobile: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginTop: '16px',
  },
  teamMembersTablet: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  researchTitle: {
    fontSize: '2rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#1A0046',  
    textAlign: 'center',
    marginTop: '5rem',
    marginBottom: '1rem',
  },
  researchTitleMobile: {
    fontSize: '1.5rem',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  researchTitleTablet: {
    fontSize: '1.8rem',
    marginTop: '4rem',
    marginBottom: '3rem',
  },
  researchPartners: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '50px',
    justifyItems: 'center',
    marginBottom: '5rem'
  },
  researchPartnersMobile: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  researchPartnersTablet: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  memberContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '450px'
  },
  memberContainerMobile: {
    width: '80%',
  },
  memberContainerTablet: {
    width: '220px',
  },
  memberImage: {
    width: '100%',
    height: 'auto', 
    clipPath: 'polygon(50% 0%, 98% 22%, 98% 78%, 50% 100%, 2% 78%, 2% 22%)',
  },
  memberImageMobile: {
    width: '100%',
  },
  memberImageTablet: {
    width: '90%', 
  },
  memberName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    marginTop: '10px',
    marginBottom: '0px',
  },
  memberNameMobile: {
    fontSize: '1.2rem',
    color: '#1E293B',
  },
  memberNameTablet: {
    fontSize: '1.2rem',
    color: '#1E293B',
  },
  memberRole: {
    fontSize: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '400',
    color: '#1E293B',
    marginBottom: '10px',
    flex: '1', 
  },
  memberRoleMobile: {
    fontSize: '0.9rem',
  },
  memberRoleTablet: {
    fontSize: '1rem',
  },
  linkedinIcon: {
    width: '36px',
    height: '36px',
    marginBottom: '10px', 
  },
};

export default AboutSerai;