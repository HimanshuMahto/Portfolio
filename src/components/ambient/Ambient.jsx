import React, { useEffect, useRef } from 'react';
import './ambient.css';

const Ambient = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = e.clientX + 'px';
        spotlightRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <>
      <div className="ambient-spotlight" ref={spotlightRef} />
      <div className="ambient-scanlines" />
      <div className="ambient-particles">
        {Array.from({ length: 25 }, (_, i) => (
          <span
            key={i}
            className="ambient-particle"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Ambient;
