// src/pages/Carrosels.jsx
import React, { useState, useEffect } from 'react';
import './Carrosels.css'; // attention à la casse et au chemin

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
    <div className="carrosels">
      <img src={images[index]} alt={`slide-${index}`} />
    </div>
  );
}

export default Carrosels;
