import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    ourResearch: "Our Research",
    ourResearchP: "We are leaders in research through our partnerships with top research institutions, including FHNW in Aargau, to develop our innovative technology (pending patent application). We are committed to research that enhances the safety, independence, and well-being of older adults. We believe in our product and are confident it represents the future of home monitoring with camera-based solutions.",
    becomePartner: "Become a Partner",
    researchFocus: "Research Focus",
    researchFocusP: "In our research we focused on exploring significant advantages of camera-based solutions which are becoming the preferred choice over wearables and ambient sensors for detailed, cost-effective, and non-invasive monitoring over traditional wearables and ambient sensors.",
    whyCamera: "Why \n Camera-Based Solutions?",
    enhancedDetail: "Enhanced Detail and Insight",
    enhancedDetailP: "Camera-based systems provide unparalleled insights into environments and user activities. Unlike wearables, which are limited by their need for physical contact, cameras capture a comprehensive view of both the surroundings and the actions taking place within them.",
    costEffectiveness: "Cost-Effectiveness",
    costEffectivenessP: "Modern high-quality cameras are not only affordable but also capable of replacing multiple sensors, significantly reducing the overall cost of monitoring systems. This makes camera-based solutions an economically viable option for various applications, including smart homes and healthcare.",
    medsReminders: "Medication Reminders",
    medsRemindersP: "Timely reminders help seniors adhere to their medication schedules.",
    nonInvasiveMonitoring: "Non-Invasive Monitoring",
    nonInvasiveMonitoringP: "One of the standout benefits of camera-based solutions is their non-invasive nature. Wearable sensors can be obtrusive, causing discomfort due to their weight and skin contact, and can be burdensome during daily activities. Cameras, on the other hand, do not require any physical contact, making them a more comfortable and user-friendly option for continuous monitoring.",
    superiorInfo: "Superior Information Capture",
    superiorInfoP: "Camera-based solutions excel in capturing detailed information compared to typical smart home sensors. They can accurately detect both emergencies and everyday activities, such as resting, exercising, and cooking. This comprehensive monitoring capability enhances the quality of care and safety for users.",
    addressingIssues: "Addressing Common Issues with Wearables",
    addressingIssuesP: "One of the standout benefits of camera-based solutions is their non-invasive nature. Wearable sensors can be obtrusive, causing discomfort due to their weight and skin contact, and can be burdensome during daily activities. (Vernon, 2020.) Cameras, on the other hand, do not require any physical contact, making them a more comfortable and user-friendly option for continuous monitoring.",
    versatility: "Versatility and Adaptability",
    versatilityP: "Camera-based systems, paired with contemporary activity recognition algorithms, are incredibly versatile. They can accurately detect and analyze a wide range of activities, from everyday tasks like cooking and exercising to emergency situations. This adaptability makes them ideal for providing care and ensuring safety at home."
  },
  de: {
    ourResearch: "Unsere Forschung",
    ourResearchP: "Wir sind führend in der Forschung durch unsere Partnerschaften mit renommierten Forschungseinrichtungen, einschließlich der FHNW in Aargau, um unsere innovative Technologie (laufende Patentanmeldung) zu entwickeln. Wir verpflichten uns zu Forschung, die die Sicherheit, Unabhängigkeit und das Wohlbefinden älterer Erwachsener verbessert. Wir glauben an unser Produkt und sind überzeugt, dass es die Zukunft der häuslichen Überwachung mit kamerabasierten Lösungen repräsentiert.",
    becomePartner: "Partner werden",
    researchFocus: "Forschungsthema",
    researchFocusP: "In unserer Forschung haben wir uns darauf konzentriert, die bedeutenden Vorteile kamerabasierter Lösungen zu erkunden, die gegenüber Wearables und Umgebungssensoren zur bevorzugten Wahl für detaillierte, kostengünstige und nicht-invasive Überwachung werden.",
    whyCamera: "Warum \n kamerabasierte Lösungen?",
    enhancedDetail: "Erweiterte Details und Einblicke",
    enhancedDetailP: "Kamerabasierte Systeme bieten beispiellose Einblicke in Umgebungen und Nutzeraktivitäten. Im Gegensatz zu Wearables, die auf physischen Kontakt angewiesen sind, erfassen Kameras einen umfassenden Überblick sowohl über die Umgebung als auch über die darin stattfindenden Handlungen.",
    costEffectiveness: "Kosteneffizienz",
    costEffectivenessP: "Moderne hochqualitative Kameras sind nicht nur erschwinglich, sondern können auch mehrere Sensoren ersetzen, was die Gesamtkosten von Überwachungssystemen erheblich senkt. Dies macht kamerabasierte Lösungen zu einer wirtschaftlich tragfähigen Option für verschiedene Anwendungsbereiche, einschließlich Smart Homes und Gesundheitswesen.",
    medsReminders: "Medikamentenerinnerungen",
    medsRemindersP: "Rechtzeitige Erinnerungen helfen älteren Menschen, ihre Medikamentenpläne einzuhalten.",
    nonInvasiveMonitoring: "Nicht-intrusives Monitoring",
    nonInvasiveMonitoringP: "Einer der herausragenden Vorteile kamerabasierter Lösungen ist ihre nicht-intrusive Natur. Tragbare Sensoren können aufdringlich sein, Unbehagen aufgrund ihres Gewichts und Hautkontakts verursachen und im Alltag belastend sein. Kameras hingegen erfordern keinen physischen Kontakt, was sie zu einer bequemeren und benutzerfreundlicheren Option für kontinuierliche Überwachung macht.",
    superiorInfo: "Überlegene Datenanalyse",
    superiorInfoP: "Kamerabasierte Lösungen sind im Erfassen detaillierter Informationen typischen Smart-Home-Sensoren überlegen. Sie können sowohl Notfälle als auch Alltagsaktivitäten wie Ausruhen, Sport und Kochen genau erkennen. Diese umfassende Überwachungsfähigkeit verbessert die Qualität der Pflege und Sicherheit für die Nutzer.",
    addressingIssues: "Behebung häufiger Probleme mit Wearables",
    addressingIssuesP: "Einer der herausragenden Vorteile kamerabasierter Lösungen ist ihre nicht-intrusive Natur. Tragbare Sensoren können aufdringlich sein, Unbehagen verursachen und im Alltag stören. (Vernon, 2020.) Kameras hingegen erfordern keinen physischen Kontakt und bieten so eine komfortablere und benutzerfreundlichere Option für die kontinuierliche Überwachung.",
    versatility: "Vielseitig und Flexibel",
    versatilityP: "Kamerabasierte Systeme in Kombination mit modernen Aktivitätserkennungsalgorithmen sind äußerst vielseitig. Sie können ein breites Spektrum an Aktivitäten präzise erkennen und analysieren, von Alltagsaufgaben wie Kochen und Sport bis hin zu Notsituationen. Diese Anpassungsfähigkeit macht sie ideal, um Pflege und Sicherheit im häuslichen Umfeld zu gewährleisten."
  },
  fr: {
    ourResearch: "Notre Recherche",
    ourResearchP: "Nous sommes des leaders en recherche grâce à nos partenariats avec des institutions de recherche de premier plan, notamment la FHNW à Argovie, pour développer notre technologie innovante (demande de brevet en cours). Nous nous engageons dans une recherche qui améliore la sécurité, l’autonomie et le bien-être des personnes âgées. Nous croyons en notre produit et sommes convaincus qu’il représente l’avenir de la surveillance à domicile grâce à des solutions basées sur les caméras.",
    becomePartner: "Devenir Partenaire",
    researchFocus: "Focus de Recherche",
    researchFocusP: "Dans nos recherches, nous nous sommes concentrés sur l’exploration des avantages significatifs des solutions basées sur la caméra, qui deviennent le choix privilégié par rapport aux wearables et aux capteurs d’ambiance pour une surveillance détaillée, rentable et non invasive.",
    whyCamera: "Pourquoi \n des Solutions Basées sur la Caméra ?",
    enhancedDetail: "Détails et Informations Améliorés",
    enhancedDetailP: "Les systèmes basés sur la caméra offrent des informations inégalées sur les environnements et les activités des utilisateurs. Contrairement aux wearables, qui sont limités par la nécessité d’un contact physique, les caméras capturent une vue globale à la fois de l’environnement et des actions qui s’y déroulent.",
    costEffectiveness: "Rentabilité",
    costEffectivenessP: "Les caméras modernes de haute qualité sont non seulement abordables mais peuvent également remplacer plusieurs capteurs, réduisant ainsi considérablement le coût global des systèmes de surveillance. Cela fait des solutions basées sur la caméra une option économiquement viable pour diverses applications, y compris les maisons intelligentes et le secteur de la santé.",
    medsReminders: "Rappels Médicamenteux",
    medsRemindersP: "Des rappels opportuns aident les aînés à respecter leurs horaires de prise de médicaments.",
    nonInvasiveMonitoring: "Surveillance Non Invasive",
    nonInvasiveMonitoringP: "L’un des avantages remarquables des solutions basées sur la caméra est leur caractère non invasif. Les capteurs portables peuvent être intrusifs, causer de l’inconfort en raison de leur poids et de leur contact avec la peau, et être gênants dans la vie quotidienne. Les caméras, en revanche, ne nécessitent aucun contact physique, offrant une option plus confortable et conviviale pour une surveillance continue.",
    superiorInfo: "Capture d’Informations Supérieure",
    superiorInfoP: "Les solutions basées sur la caméra excellent dans la capture d’informations détaillées par rapport aux capteurs domotiques typiques. Elles peuvent détecter avec précision à la fois les urgences et les activités quotidiennes, comme se reposer, faire de l’exercice ou cuisiner. Cette capacité de surveillance complète améliore la qualité des soins et la sécurité des utilisateurs.",
    addressingIssues: "Résoudre les Problèmes Courants des Wearables",
    addressingIssuesP: "L’un des avantages remarquables des solutions basées sur la caméra est leur caractère non invasif. Les capteurs portables peuvent être intrusifs et inconfortables. (Vernon, 2020.) Les caméras, en revanche, ne nécessitent aucun contact physique, offrant ainsi une option plus confortable et conviviale pour une surveillance continue.",
    versatility: "Polyvalence et Adaptabilité",
    versatilityP: "Les systèmes basés sur la caméra, associés à des algorithmes modernes de reconnaissance d’activités, sont extrêmement polyvalents. Ils peuvent détecter et analyser avec précision un large éventail d’activités, des tâches quotidiennes comme la cuisine et l’exercice aux situations d’urgence. Cette adaptabilité en fait une solution idéale pour fournir des soins et assurer la sécurité à domicile."
  },
  it: {
    ourResearch: "La Nostra Ricerca",
    ourResearchP: "Siamo leader nella ricerca grazie alle nostre partnership con istituzioni di ricerca di alto livello, tra cui la FHNW ad Argovia, per sviluppare la nostra tecnologia innovativa (domanda di brevetto in corso). Siamo impegnati in una ricerca che migliora la sicurezza, l’indipendenza e il benessere degli anziani. Crediamo nel nostro prodotto e siamo certi che rappresenti il futuro del monitoraggio domestico con soluzioni basate su telecamere.",
    becomePartner: "Diventa un Partner",
    researchFocus: "Focus della Ricerca",
    researchFocusP: "Nella nostra ricerca ci siamo concentrati sull’esplorazione dei significativi vantaggi delle soluzioni basate sulla telecamera, che stanno diventando la scelta preferita rispetto ai wearables e ai sensori ambientali per un monitoraggio dettagliato, conveniente e non invasivo.",
    whyCamera: "Perché \n Soluzioni Basate su Telecamera?",
    enhancedDetail: "Dettagli e Approfondimenti Migliorati",
    enhancedDetailP: "I sistemi basati su telecamere offrono una visione senza precedenti degli ambienti e delle attività degli utenti. A differenza dei dispositivi indossabili, limitati dalla necessità di contatto fisico, le telecamere catturano una visione completa sia dell’ambiente circostante che delle azioni che vi hanno luogo.",
    costEffectiveness: "Convenienza Economica",
    costEffectivenessP: "Le telecamere moderne di alta qualità non sono solo accessibili, ma possono anche sostituire più sensori, riducendo significativamente i costi complessivi dei sistemi di monitoraggio. Ciò rende le soluzioni basate su telecamera un’opzione economicamente vantaggiosa per varie applicazioni, incluse le case intelligenti e l’assistenza sanitaria.",
    medsReminders: "Promemoria per i Farmaci",
    medsRemindersP: "Promemoria tempestivi aiutano gli anziani a rispettare i loro orari di assunzione dei farmaci.",
    nonInvasiveMonitoring: "Monitoraggio Non Invasivo",
    nonInvasiveMonitoringP: "Uno dei principali vantaggi delle soluzioni basate su telecamera è la loro natura non invasiva. I sensori indossabili possono essere invadenti, causare disagio a causa del peso e del contatto con la pelle, e risultare scomodi nelle attività quotidiane. Le telecamere, al contrario, non richiedono alcun contatto fisico, offrendo un’opzione più confortevole e facile da usare per il monitoraggio continuo.",
    superiorInfo: "Cattura di Informazioni Superiori",
    superiorInfoP: "Le soluzioni basate su telecamera eccellono nella cattura di informazioni dettagliate rispetto ai tipici sensori per la casa intelligente. Possono rilevare con precisione sia emergenze che attività quotidiane, come riposo, esercizio e cucina. Questa capacità di monitoraggio completa migliora la qualità dell’assistenza e la sicurezza per gli utenti.",
    addressingIssues: "Affrontare i Problemi Comuni dei Wearable",
    addressingIssuesP: "Uno dei principali vantaggi delle soluzioni basate su telecamera è la loro natura non invasiva. I sensori indossabili possono essere invadenti e scomodi. (Vernon, 2020.) Le telecamere, invece, non richiedono alcun contatto fisico, offrendo un’opzione più confortevole e facile da usare per il monitoraggio continuo.",
    versatility: "Versatilità e Adattabilità",
    versatilityP: "I sistemi basati su telecamera, abbinati ad algoritmi di riconoscimento delle attività contemporanei, sono estremamente versatili. Possono rilevare e analizzare con precisione un’ampia gamma di attività, dalle mansioni quotidiane come cucinare ed esercitarsi fino alle situazioni di emergenza. Questa adattabilità li rende ideali per fornire assistenza e garantire sicurezza a casa."
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

function Research() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div className="page-container">
        <section>
            <h1>{translations[language].ourResearch}</h1>
            <p>{translations[language].ourResearchP}</p>
            <button
            className="cta"
            onClick={() => navigate("/Partnerships")}
          >
            {translations[language].becomePartner}
          </button>
        </section>
      
        <div className="divider"></div>

        <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].researchFocus}</h2>
          </div>
          <div>
            <p>{translations[language].researchFocusP}</p>
          </div>
        </section>

        <div className="divider"></div>


        <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].whyCamera}</h2>
          </div>
          <div>
          <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <h5>{translations[language].enhancedDetail}</h5>
                    <p>{translations[language].enhancedDetailP}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>{translations[language].costEffectiveness}</h5>
                    <p>{translations[language].costEffectivenessP}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>{translations[language].medsReminders}</h5>
                    <p>{translations[language].medsRemindersP}</p>
                  </div>
                </li>
                <li >
                  <div >
                    <h5>{translations[language].nonInvasiveMonitoring}</h5>
                    <p>{translations[language].nonInvasiveMonitoringP}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="divider"></div>

        <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].superiorInfo}</h2>
          </div>
          <div>
            <p>{translations[language].superiorInfoP}</p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].addressingIssues}</h2>
          </div>
          <div>
            <p>{translations[language].addressingIssuesP}</p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="grid grid-theme--light">
          <div>
            <h2>{translations[language].versatility}</h2>
          </div>
          <div>
            <p>{translations[language].versatilityP}</p>
          </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
}

export default Research;