import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Linkedin, Mail } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import CV from '../../assets/Himanshu–Resume.pdf';
import './hero.css';

const CODE_LINES = [
  { indent: 0, content: 'const himanshu = {' },
  { indent: 1, content: 'role: "Software Developer",' },
  { indent: 1, content: 'company: "Facets.cloud",' },
  { indent: 1, content: 'stack: ["React", "Angular", "Java", "Node.js"],' },
  { indent: 1, content: 'passion: "Building end-to-end systems",' },
  { indent: 1, content: 'available: true,' },
  { indent: 0, content: '};' },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(n => {
        if (n >= CODE_LINES.length) { clearInterval(timer); return n; }
        return n + 1;
      });
    }, 180);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="hero__container container">
        {/* ── Left: editorial name block ── */}
        <div className="hero__left">
          <span className="hero__eyebrow">Software Developer</span>

          <h1 className="hero__name">
            <span className="hero__name-line">Himanshu</span>
            <span className="hero__name-line hero__name-line--accent">Mahto.</span>
          </h1>

          <p className="hero__tagline">
            I build complete software systems — from <strong>REST APIs</strong> and backend
            services to <strong>React frontends</strong> and <strong>Android apps</strong> —
            and ship features that scale for paying customers.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={CV} download className="btn btn-outline">
              Download CV <Download size={16} />
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-label">Status</span>
              <span className="hero__meta-value">
                <span className="hero__meta-dot" />
                Available
              </span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Location</span>
              <span className="hero__meta-value">Bangalore, India</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Company</span>
              <span className="hero__meta-value">Facets.cloud</span>
            </div>
          </div>
        </div>

        {/* ── Right: socials + code block ── */}
        <div className="hero__right">
          <div className="hero__socials">
            <a href="https://github.com/HimanshuMahto" target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
              <GitHubIcon size={16} />
              github.com/HimanshuMahto
            </a>
            <a href="https://linkedin.com/in/himanshumahto" target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
              <Linkedin size={16} />
              linkedin.com/in/himanshumahto
            </a>
            <a href="mailto:himanshumahto0102@gmail.com" className="hero__social" aria-label="Email">
              <Mail size={16} />
              himanshumahto0102@gmail.com
            </a>
          </div>

          <div className="hero__code-wrap">
            <div className="hero__code-header">
              <span className="hero__code-dot" style={{ background: '#ff5f57' }} />
              <span className="hero__code-dot" style={{ background: '#febc2e' }} />
              <span className="hero__code-dot" style={{ background: '#28c840' }} />
              <span className="hero__code-filename">himanshu.js</span>
            </div>
            <pre className="hero__code">
              {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="hero__code-line">
                  <span className="hero__line-num">{i + 1}</span>
                  <span style={{ paddingLeft: `${line.indent * 1.4}rem` }}>
                    {renderCodeLine(line.content)}
                  </span>
                </div>
              ))}
              {visibleLines < CODE_LINES.length && (
                <div className="hero__code-line">
                  <span className="hero__line-num">{visibleLines + 1}</span>
                  <span className="hero__code-cursor">█</span>
                </div>
              )}
            </pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

function renderCodeLine(content) {
  return content
    .split(/(".*?"|'.*?'|true|false|\bconst\b)/)
    .map((part, i) => {
      if (part === 'const') return <span key={i} className="code-keyword">{part}</span>;
      if (part === 'true' || part === 'false') return <span key={i} className="code-bool">{part}</span>;
      if (/^["']/.test(part)) return <span key={i} className="code-string">{part}</span>;
      return <span key={i} className="code-default">{part}</span>;
    });
}

export default Hero;
