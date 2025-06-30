import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadBasic } from 'tsparticles-basic';
import AOS from 'aos';
import './CreativiteSection.css';



const CreativiteSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = async (engine) => {
    await loadBasic(engine);
  };

  return (
    <section className="creative-section position-relative">
      {/* Fond animé */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#001C73"
          },
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "out"
            }
          },
        }}
        className="particles-bg"
      />

      <div className="container py-5 text-white position-relative z-1">
        <div className="row align-items-center">
          {/* Texte à gauche */}
          <div className="col-md-6">
            <div className="mb-4 text-center text-md-start" data-aos="fade-down">
              <p className="fs-5">Votre Partenaire Créatif en Design Engageant</p>
              <h2 className="fw-bold text-info">Créativité Inspirée d'Afrique</h2>
            </div>

            <p className="lead" data-aos="fade-down" data-aos-delay="300">
              Découvrez une expérience de design authentique avec notre collection exclusive d'images 100 % africaines.
              Chaque visuel raconte une histoire unique, reflétant la richesse culturelle et la beauté du continent.
               Des paysages époustouflants aux scènes de vie quotidienne vibrantes, notre collection capture l'essence 
               de l'Afrique dans toute sa diversité. Notre banque d'images haut de gamme garantit une personnalisation
                unique pour chaque projet. Que vous soyez designer, entrepreneur ou créateur de contenu, 
              nos visuels apporteront une touche d'authenticité à vos créations.
            </p>
          </div>

          {/* Image à droite */}
          <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <img src="/assets/graph.jpg" alt="Africa" className="img-fluid" style={{ maxHeight: "500px" }} />
          </div>
        </div>
      </div>
       
    </section>
  );
};

export default CreativiteSection;
