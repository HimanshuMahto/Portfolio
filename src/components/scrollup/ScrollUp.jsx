import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './scrollup.css';

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 560);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`scrollup${visible ? ' scrollup--visible' : ''}`}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </a>
  );
};

export default ScrollUp;
