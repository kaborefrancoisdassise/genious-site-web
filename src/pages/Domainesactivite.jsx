import React, { useEffect } from 'react';
import './Domainesactivite.css';
import CreativiteSection from './CreativiteSection';
import ScrollToTopButton from './ScrollToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import ActivitesSection from './ActivitesSection';


import { FaClock, FaPhoneAlt, FaSearch } from 'react-icons/fa';


function Domainesactivite() {
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

    <section>
<CreativiteSection />
<ActivitesSection />
    </section>

    

      
<ScrollToTopButton />
    </>
  );
}

export default Domainesactivite;







