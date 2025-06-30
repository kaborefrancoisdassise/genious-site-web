import React, { useEffect } from 'react';
import './Quisommesnous.css';
import TeamSection from './TeamSection';
import ScrollToTopButton from './ScrollToTopButton';


import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';

import { FaClock, FaPhoneAlt, FaSearch } from 'react-icons/fa';


function Quisommesnous() {
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
          <li><a href="/">Accueil</a></li>
          <li><a href="/quisommesnous">Qui sommes-nous?</a></li>
          <li><a href="/domainesactivites">Domaines d’activités</a></li>
         
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="search-icon ms-auto"><FaSearch /></div>
      </nav>
    </header>

    

        {/* Section "Qui sommes-nous" */}
      <section className="quisommesnous-section d-flex">
        {/* Logo gauche en grand et fondu */}
        <div className="quisommesnous-bg-logo">
          <img src="/assets/logo_blanc_bg.png" alt="Logo gauche" className="big-logo" />
        </div>

        {/* Contenu avec logo + texte à droite */}
        <div className="quisommesnous-content text-white p-5" data-aos="fade-left">
          <img src="/assets/logo.jpg" alt="Logo" className="small-logo mb-4" />
          <p>
            <strong className="text-warning">GENIOUS GROUP</strong> est une agence novatrice axée sur les nouvelles tendances créatives, 
            qui offre des services à haute valeur ajoutée aux jeunes startupeurs.
          </p>
          <p>
            Nos offres de services comprennent le <strong className="text-warning">design graphique</strong>, 
            le <strong className="text-warning">développement web</strong> et <strong className="text-warning">mobile</strong>, 
            la <strong className="text-warning">conception de maquettes 3D</strong> ainsi que l'impression de documents et bâches de haute qualité.
          </p>
          <p>
            Nous offrons également des services de marketing digital pour aider nos clients à numériser leurs produits et services. 
            GENIOUS GROUP est porté par une jeunesse engagée qui souhaite révolutionner la technologie marketing et événementielle 
            au Burkina Faso et créer un graphisme de haut niveau pour les événements locaux et les entreprises.
          </p>
        </div>
      </section>

      <section className="cta-section text-center text-white">
       <div className="cta-overlay"></div>

       <div className="cta-content position-relative z-1">
       <h2 className="fw-bold">
       Vous avez <span className="animated-word text-orange"></span> ?
       </h2>
    <a href="/contact" className="cta-btn mt-4 d-inline-block">Parlons-en !</a>
  </div>
</section>


  <TeamSection />
<section className="cta-section text-center text-white">

</section>

<ScrollToTopButton />
    </>
  );
}

export default Quisommesnous;







