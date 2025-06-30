import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Domainesactivite from './pages/Domainesactivite';
import Quisommesnous from './pages/Quisommesnous';
import Contact from './pages/Contact';
import TeamSection from './pages/TeamSection';
import ScrollToTopButton from './pages/ScrollToTopButton';




function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Accueil />} />
          <Route path="/quisommesnous" element={<Quisommesnous />} />
          <Route path="/domainesactivites" element={<Domainesactivite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teamSection" element={<TeamSection />} />
          <Route path="/scrollToTopButton" element={<ScrollToTopButton />} />
      </Routes>
    </Router>
  );
  
}


export default App;
