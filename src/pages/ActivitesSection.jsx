import React from 'react';
import './ActivitesSection.css';


function ActivitesSection() {
  const activitesCol1 = [
    'Création de logos',
    'Conception de bannières publicitaires',
    "Création d'identités visuelles",
    'Conception de Brochures & Carte de visite',
    'Design de packaging',
    'Design de posters & Catalogue',
    'Marketing de contenu',
  ];

  const activitesCol2 = [
    'Gestion de communication Évènementielle',
    'Optimisation pour les moteurs de recherche (SEO)',
    'Publicité en ligne (Google Ads, Facebook Ads)',
    'Création de sites Web',
    "Développement d'App mobiles",
    'Developpement de SaaS & sites Ecom',
    'Analyse & Reporting',
  ];

  return (
    <section className="activites-section">
      <div className="photo-container">
        <img src="/assets/graph.jpg" alt="Activité 1" className="photo" />
        <img src="/assets/tech.jpg" alt="Activité 2" className="photo" />
      </div>

      <div className="activites-list">
        <div className="column">
          {activitesCol1.map((item, i) => (
            <div className="activite-item" key={i}>
              {item}
            </div>
          ))}
        </div>
        <div className="column">
          {activitesCol2.map((item, i) => (
            <div className="activite-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitesSection;
