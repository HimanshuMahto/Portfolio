import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, StickyNote, X, Plus, Trash2 } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { FadeUp } from '../animations/AnimatedSection';
import { projectsData, projectsNav } from './Data';
import './work.css';

const CARD_WIDTH = 320 + 20;

function fillToMinWidth(arr, minWidth) {
  if (arr.length === 0) return [];
  const copies = Math.ceil(minWidth / (arr.length * CARD_WIDTH)) + 1;
  return Array.from({ length: copies }, () => arr).flat();
}

/* ── Kuikku mini-demo ── */
const KuikkuDemo = ({ onClose }) => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Ship Kuikku v2 🚀' },
    { id: 2, text: 'Review PR #42' },
  ]);
  const [input, setInput] = useState('');

  const add = () => {
    const t = input.trim();
    if (!t) return;
    setNotes(n => [...n, { id: Date.now(), text: t }]);
    setInput('');
  };

  return (
    <div className="kuikku" onClick={e => e.stopPropagation()}>
      <div className="kuikku__bar">
        <span className="kuikku__icon"><StickyNote size={12} /></span>
        <span className="kuikku__title">Kuikku — quick notes</span>
        <button className="kuikku__close" onClick={onClose} aria-label="Close demo"><X size={13} /></button>
      </div>
      <div className="kuikku__notes">
        {notes.map(n => (
          <div key={n.id} className="kuikku__note">
            <span>{n.text}</span>
            <button className="kuikku__del" onClick={() => setNotes(ns => ns.filter(x => x.id !== n.id))} aria-label="Delete">
              <Trash2 size={11} />
            </button>
          </div>
        ))}
      </div>
      <div className="kuikku__input-row">
        <input
          className="kuikku__input"
          placeholder="Add a note..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && add()}
          maxLength={60}
        />
        <button className="kuikku__add" onClick={add} aria-label="Add note"><Plus size={13} /></button>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  const isKuikku = project.title === 'Kuikku';

  return (
    <div className={`work__card${demoOpen ? ' work__card--demo-open' : ''}`}>
      <div className="work__card-header">
        <span className="work__card-category">{project.category}</span>
        <div className="work__card-links">
          <a href={project.link} target="_blank" rel="noreferrer" aria-label="GitHub" className="work__card-link">
            <GitHubIcon size={17} />
          </a>
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label="Live demo" className="work__card-link">
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>
      <h3 className="work__card-title">{project.title}</h3>
      <p className="work__card-desc">{project.description}</p>

      {isKuikku && demoOpen && <KuikkuDemo onClose={() => setDemoOpen(false)} />}

      <div className="work__card-footer">
        <div className="work__tags">
          {project.techStack.map(t => (
            <span key={t} className="work__tag">{t}</span>
          ))}
        </div>
        {isKuikku && !demoOpen && (
          <button className="work__try-btn" onClick={() => setDemoOpen(true)}>
            Try it ↗
          </button>
        )}
      </div>
      <div className="work__card-glow" aria-hidden="true" />
    </div>
  );
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animKey, setAnimKey] = useState(0);
  const [useMarquee, setUseMarquee] = useState(true);

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  // Decide marquee vs grid: always marquee for "all",
  // for others only when cards overflow the viewport width.
  useEffect(() => {
    if (activeFilter === 'all') {
      setUseMarquee(true);
      return;
    }
    const totalCardsWidth = filtered.length * CARD_WIDTH;
    setUseMarquee(totalCardsWidth > window.innerWidth);
  }, [activeFilter, filtered.length]);

  const handleFilter = (name) => {
    setActiveFilter(name);
    setAnimKey(k => k + 1);
  };

  // For marquee: pad cards so they fill at least 2× viewport width
  const marqueeCards = fillToMinWidth(filtered, window.innerWidth * 2);

  return (
    <section className="work section" id="work">
      <div className="container">
        <FadeUp>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-subtitle">Side projects, experiments, and things that scratched my own itch</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="work__filters">
            {projectsNav.map(({ name }) => (
              <button
                key={name}
                className={`work__filter-btn${activeFilter === name ? ' work__filter-btn--active' : ''}`}
                onClick={() => handleFilter(name)}
              >
                {name === 'all' ? 'All' : name}
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      {useMarquee ? (
        /* ── Infinite marquee ── */
        <div className="work__marquee-outer">
          <div className="work__marquee" key={animKey}>
            <div className="work__marquee-track">
              {marqueeCards.map((project, i) => (
                <ProjectCard key={`a-${project.id}-${i}`} project={project} />
              ))}
            </div>
            <div className="work__marquee-track" aria-hidden="true">
              {marqueeCards.map((project, i) => (
                <ProjectCard key={`b-${project.id}-${i}`} project={project} />
              ))}
            </div>
          </div>
          <div className="work__fade work__fade--left" />
          <div className="work__fade work__fade--right" />
        </div>
      ) : (
        /* ── Static grid for small filtered sets ── */
        <div className="container">
          <div className="work__grid" key={animKey}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      <div className="container">
        <FadeUp delay={0.2}>
          <div className="work__footer">
            <a href="https://github.com/HimanshuMahto" target="_blank" rel="noreferrer" className="btn btn-outline">
              <GitHubIcon size={16} /> View all on GitHub
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Work;
