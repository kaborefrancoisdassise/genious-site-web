// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '30px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '15px 20px',
          cursor: 'pointer',
          fontSize: '20px',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTopButton;
