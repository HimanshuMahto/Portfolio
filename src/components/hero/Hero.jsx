import React, { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Mail, Download } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import CV from '../../assets/Himanshu–Resume.pdf';
import './hero.css';

const ROLES = [
  'Software Developer',
  'Full Stack Developer',
  'Android Developer',
  'Backend Engineer',
];

const CODE_LINES = [
  { indent: 0, content: 'const himanshu = {' },
  { indent: 1, content: 'role: "Software Developer",' },
  { indent: 1, content: 'company: "Facets.cloud",' },
  { indent: 1, content: 'stack: ["React", "Node.js", "Java", "Python"],' },
  { indent: 1, content: 'passion: "Building end-to-end systems",' },
  { indent: 1, content: 'available: true,' },
  { indent: 0, content: '};' },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 50 : 80;
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

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
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title">
            I build things for the{' '}
            <span className="hero__title-gradient">web, mobile</span>{' '}
            &amp; beyond.
          </h1>

          <div className="hero__role">
            <span className="hero__role-prefix">{'> '}</span>
            <span className="hero__role-text">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description">
            Software Developer at <a href="https://facets.cloud" target="_blank" rel="noreferrer" className="hero__company-link">Facets.cloud</a>.
            I build complete software systems — from REST APIs and backend services to React &amp; Angular frontends and Android apps — and ship features that scale for paying customers.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={CV} download className="btn btn-outline">
              Download CV <Download size={16} />
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/HimanshuMahto" target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
              <GitHubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/himanshumahto" target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:himanshumahto0102@gmail.com" className="hero__social" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
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
                <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
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
      if (part === 'true') return <span key={i} className="code-bool">{part}</span>;
      if (part === 'false') return <span key={i} className="code-bool">{part}</span>;
      if (/^["']/.test(part)) return <span key={i} className="code-string">{part}</span>;
      return <span key={i} className="code-default">{part}</span>;
    });
}

export default Hero;
