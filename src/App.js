import React, { useEffect } from 'react';
import './App.css';
import Carrosels from './pages/Carrosels';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaClock, FaPhoneAlt, FaSearch } from 'react-icons/fa';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation à chaque scroll
    });
  }, []);

  return (
    <>
      <header className="font-segoe">
      {/* Bande supérieure violet foncé */}
      <div className="top-header container-fluid py-3 px-lg-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
        {/* Logo */}
        <div className="d-flex align-items-center mb-3 mb-md-0 logo">
          <img src="/assets/logo.jpg" alt="genious group" className="rounded-circle me-2 logo-img" />
          <span className="logo-text">Genious<br />Group</span>
        </div>

        {/* Horaires */}
        <div className="d-flex align-items-center gap-2 mb-3 mb-md-0 opening-hours">
          <FaClock className="icon" />
          <div>
            <small>OUVERT (LUN - SAM) <br></br></small>
            <strong>7h00 - 18:00</strong>
          </div>
        </div>

        {/* Service client */}
        <div className="d-flex align-items-center gap-2 customer-service">
          <FaPhoneAlt className="icon" />
          <div>
            <small>SERVICE CLIENTS</small>  <br></br>
            <strong>(226) 67 31 99 20 <br /> (226) 07 40 14 17</strong>
          </div>
        </div>
      </div>

      {/* Menu principal avec animation de fond */}
      <nav className="main-nav px-lg-5 py-3 d-flex flex-wrap justify-content-center align-items-center">
        <ul className="d-flex flex-wrap list-unstyled gap-4 mb-0 justify-content-center flex-grow-1">
          <li><a href="/accueil">Accueil</a></li>
          <li><a href="/qui-sommes-nous">Qui sommes-nous?</a></li>
          <li><a href="/domaines-d-activites">Domaines d’activités</a></li>
          <li><a href="/actualites">Actualités</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="search-icon ms-auto"><FaSearch /></div>
      </nav>
    </header>

      {/* Carrousel */}
      <Carrosels />

      {/* Section Nos domaines d'expertise */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 text-primary" data-aos="fade-up">
            Nos domaines d'expertise
          </h2>

          <div className="row align-items-center">
            {/* Texte à gauche */}
            <div className="col-md-6" data-aos="fade-right">
              <p className="fs-5 text-dark">
                <strong>Création graphique</strong><br /><br />
                Confiez-nous la réalisation de vos logos, cartes de visite, flyers et autres supports graphiques.<br /><br />
                L'équipe <strong>Genouis Group</strong> s'occupe de vous produire des designs et créations professionnels pour
                 que la première chose que voient vos prospects soit une impression qui reste. Des designs épurés, des infographies assorties.<br /><br />
              <button className="btn btn-primary">En savoir plus</button>
              </p>
            </div>

            {/* Image à droite */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src="/assets/graph.jpg"
                alt="Design graphique"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>


     
{/* Section Nos domaines d'expertise (Image à gauche, texte à droite, avec fond diagonal inversé) */}
<section className="expertise-section-alt position-relative py-5">
  <div className="diagonal-bg-right"></div>

  <div className="container position-relative">
    <h2 className="text-center mb-5 text-primary" data-aos="fade-up">
      création de sites web dynamiques et professionnels.
    </h2>

    <div className="row align-items-center">
      {/* Image à gauche */}
      <div className="col-md-6 text-center mb-4 mb-md-0" data-aos="fade-right">
        <img
          src="/assets/graph.jpg"
          alt="Design graphique"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Texte à droite */}
      <div className="col-md-6" data-aos="fade-left">
        <p className="fs-5 text-dark">
          <strong>création de sites web dynamiques sur mesure</strong><br /><br />
          À L'ère du digital, il est plus que jamais primordial d'avoir une présence sur internet.<br /><br />

          Spécialisée dans la conception web, notre agence vous propose des services de création ou de refonte complète 
          de sites vitrines et dynamiques. Nous garantissons des sites parfaitement responsifs et sécurisés, 
          réalisés avec un professionnalisme irréprochable, le tout à des tarifs particulièrement compétitifs.<br /><br />
          <button className="btn btn-primary">En savoir plus</button>
        </p>
      </div>
    </div>
  </div>
</section>




<section className="expertise-section position-relative py-5">
  {/* Fond diagonal bleu clair transparent */}
  <div className="diagonal-bg"></div>

  <div className="container position-relative">
    <h2 className="text-center mb-5 text-primary" data-aos="fade-up">
      Accompagnement réseaux sociaux
    </h2>

    <div className="row align-items-center">
      {/* Texte à gauche */}
      <div className="col-md-6" data-aos="fade-right">
        <p className="fs-5 text-dark">
          <strong>Accompagnement réseaux sociaux</strong><br /><br />
          Faites vous accompagner par des professionnels dans l'élaboration de votre stratégie,
          l'utilisation des réseaux et la création de vos posts.<br /><br />
          Chez <strong>Genouis Group</strong>, nous visons à vous autonomiser rapidement dans la gestion de votre communication.
          Notre priorité est de vous doter des compétences nécessaires pour que vous puissiez gérer votre communication en toute confiance.
          Nous sommes spécialisés sur <strong>Facebook, LinkedIn, Instagram et WhatsApp Business.</strong><br /><br />
          <button className="btn btn-primary">En savoir plus</button>
        </p>
      </div>

      {/* Image à droite */}
      <div className="col-md-6 text-center" data-aos="fade-left">
        <img
          src="/assets/graph.jpg"
          alt="Design graphique"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default App;
