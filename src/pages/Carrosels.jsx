import React, { useState, useEffect } from 'react';
import './Carrosels.css';

const images = [
  "/assets/devweb1.jpg",
  "/assets/graph.jpg",
  "/assets/tech.jpg",
];

function Carrosels() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="carrousel-diagonal"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="diagonal-text">
        <h1>
              Une solution créative pour <span className="text-warning">Développer</span><br />
              votre business
         </h1>
        <p>Développement Web, <br />Graphisme et Technologies Innovantes</p>
        <button className="btn btn-primary">En savoir plus</button>
      </div>
    </div>
  );
}

export default Carrosels;
