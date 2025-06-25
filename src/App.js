import React from 'react';
import './App.css';
import Carrosels from './pages/Carrosels';


import { FaClock, FaPhoneAlt, FaSearch } from 'react-icons/fa';

function App() {
  return (
    <>
      <header>
        {/* Bande supérieure bleu foncé */}
        <div className="top-header">
          <div className="logo">
            <img src="/assets/logo.jpg" alt="genious group" />
            <span>Genious <br></br> Group</span>
          </div>
          <div className="opening-hours">
            <FaClock className="icon" />
            <div>
              <small>OUVERT (LUN - SAM)</small>
              <strong>7h00 - 18:00</strong>
            </div>
          </div>
          <div className="customer-service">
            <FaPhoneAlt className="icon" />
            <div>
              <small>SERVICE CLIENTS</small>
              <strong>(226) 67 31 99 20 <br></br>  (226) 07 40 14 17</strong>
            </div>
          </div>
        </div>

        {/* Menu principal blanc */}
        <nav className="main-nav">
          <ul>
            <li><a href="/accueil">Accueil</a></li>
            <li><a href="/qui sommes-nous?">Qui sommes-nous?</a></li>
            <li><a href="/domaines d'activités">Domaines d’activités</a></li>
            <li><a href="/actualités">Actualités</a></li>
            <li className="has-dropdown"><a href="/contact">Contact</a></li>
          </ul>
          <div className="search-icon"><FaSearch /></div>
        </nav>
      </header>

      {/* Carrousel juste en dessous */}
      <Carrosels />
    </>                 
  );
}

export default App;
