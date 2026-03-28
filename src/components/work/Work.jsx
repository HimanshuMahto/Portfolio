import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '../icons/GitHubIcon';
import { FadeUp } from '../animations/AnimatedSection';
import { projectsData, projectsNav } from './Data';
import './work.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="work section" id="work">
      <div className="container">
        <FadeUp>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-subtitle">A selection of projects across my domains</p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="work__filters">
            {projectsNav.map(({ name }) => (
              <button
                key={name}
                className={`work__filter-btn${activeFilter === name ? ' work__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(name)}
              >
                {name === 'all' ? 'All' : name}
              </button>
            ))}
          </div>
        </FadeUp>

        <motion.div className="work__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="work__card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="work__card-accent" />

                <div className="work__card-top">
                  <h3 className="work__card-title">{project.title}</h3>
                  <div className="work__card-links">
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label="GitHub repo" className="work__card-link">
                      <GitHubIcon size={18} />
                    </a>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label="Live demo" className="work__card-link">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="work__card-desc">{project.description}</p>

                <div className="work__card-footer">
                  <div className="work__tags">
                    {project.techStack.map(t => (
                      <span key={t} className="work__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
