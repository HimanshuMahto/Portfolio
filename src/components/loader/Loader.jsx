import React, { useEffect, useState, useRef } from 'react';
import './loader.css';

const BOOT_LINES = [
  { text: '$ initializing portfolio...', type: 'cmd', delay: 100 },
  { text: '  ✔ Loading assets', type: 'ok', delay: 300 },
  { text: '  ✔ Compiling styles', type: 'ok', delay: 250 },
  { text: '  ✔ Mounting components', type: 'ok', delay: 250 },
  { text: '  ◆ Fetching data...', type: 'info', delay: 400 },
  { text: '  ✔ All systems ready', type: 'ok', delay: 300 },
  { text: '', type: 'blank', delay: 200 },
  { text: '▸ Launching portfolio', type: 'accent', delay: 400 },
];

const Loader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const bodyRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(7, 14, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(94, 234, 212, 0.15)';
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const id = setInterval(draw, 50);
    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { clearInterval(id); window.removeEventListener('resize', onResize); };
  }, []);

  useEffect(() => {
    let i = 0;
    const progressSteps = [0, 15, 35, 55, 72, 90, 90, 100];

    function nextLine() {
      if (i >= BOOT_LINES.length) {
        setTimeout(() => {
          setHiding(true);
          setTimeout(() => onComplete(), 700);
        }, 400);
        return;
      }

      const line = BOOT_LINES[i];
      setLines(prev => [...prev, line]);
      setProgress(progressSteps[i] || 0);
      i++;
      setTimeout(nextLine, line.delay);
    }

    const start = setTimeout(nextLine, 500);
    return () => clearTimeout(start);
  }, [onComplete]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className={`loader-screen${hiding ? ' loader-screen--hidden' : ''}`}>
      <canvas ref={canvasRef} className="loader-matrix" />

      <div className="loader-terminal">
        <div className="loader-titlebar">
          <div className="loader-dots">
            <span className="loader-dot loader-dot--red" />
            <span className="loader-dot loader-dot--yellow" />
            <span className="loader-dot loader-dot--green" />
          </div>
          <span className="loader-titlebar-text">himanshu@portfolio — zsh</span>
        </div>

        <div className="loader-body" ref={bodyRef}>
          {lines.map((line, i) => (
            <div key={i} className={`loader-line loader-line--${line.type}`}>
              {line.text}
            </div>
          ))}
          {!hiding && <span className="loader-cursor" />}

          <div className="loader-progress">
            <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="loader-statusbar">
          <span className="loader-status-left">
            <span className="loader-live-dot" />
            connected
          </span>
          <span className="loader-status-right">
            <LoaderClock />
          </span>
        </div>
      </div>
    </div>
  );
};

const LoaderClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
};

export default Loader;
