import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../animations/AnimatedSection';
import CV from '../../assets/Himanshu–Resume.pdf';
import './about.css';

const STORY = [
  {
    year: '2021',
    title: 'Picked up Java.',
    body: 'Started my CS degree at Jaypee University. Fell into Android development after building a small expense tracker app that actually worked — that feeling of shipping something real got me hooked.',
  },
  {
    year: '2023',
    title: 'Went full-stack.',
    body: 'Expanded into Python and ML — fine-tuned ResNet101V2 on chest X-rays, hit 87.5% accuracy. Realized I liked the backend plumbing as much as the model itself. Started bridging ML into mobile via Flask APIs.',
  },
  {
    year: '2024',
    title: 'Joined Facets.cloud.',
    body: 'First real production codebase. Co-led an Angular-to-React migration across 10+ screens, built reusable component libraries adopted by the team, and shipped backend features running across 100+ platform modules.',
  },
  {
    year: 'Now',
    title: 'Sweating the details.',
    body: 'Focused on system design, performance, and reliability. I care about the parts that users never notice — because when they\'re right, everything just works.',
  },
];

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12 + 0.2, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const About = () => (
  <section className="about section" id="about">
    <div className="container">
      <FadeUp>
        <span className="section-label">About me</span>
        <h2 className="section-title">How I got here</h2>
        <p className="section-subtitle">The short version of a longer story</p>
      </FadeUp>

      <div className="about__layout">
        {/* ── Story timeline ── */}
        <motion.div
          className="about__timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div className="about__timeline-track" variants={lineVariants} />

          {STORY.map((item, i) => (
            <motion.div key={item.year} className="about__story-item" custom={i} variants={itemVariants}>
              <div className="about__story-year">{item.year}</div>
              <div className="about__story-node" aria-hidden="true" />
              <div className="about__story-body">
                <h3 className="about__story-title">{item.title}</h3>
                <p className="about__story-text">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Right sidebar: quick facts ── */}
        <FadeUp delay={0.3}>
          <div className="about__sidebar">
            <div className="about__fact-card">
              <span className="about__fact-value">2+</span>
              <span className="about__fact-label">Years at Facets</span>
            </div>
            <div className="about__fact-card">
              <span className="about__fact-value">9.1</span>
              <span className="about__fact-label">CGPA · B.Tech CS&amp;E</span>
            </div>
            <div className="about__fact-card">
              <span className="about__fact-value">4</span>
              <span className="about__fact-label">Domains shipped</span>
            </div>

            <div className="about__sidebar-meta">
              <div className="about__sidebar-row">
                <span className="about__sidebar-key">Location</span>
                <span className="about__sidebar-val">Bangalore, India</span>
              </div>
              <div className="about__sidebar-row">
                <span className="about__sidebar-key">Company</span>
                <span className="about__sidebar-val">Facets.cloud</span>
              </div>
              <div className="about__sidebar-row">
                <span className="about__sidebar-key">Status</span>
                <span className="about__sidebar-val about__sidebar-val--available">
                  <span className="about__sidebar-dot" />
                  Open to opportunities
                </span>
              </div>
            </div>

            <a href={CV} download className="btn btn-outline about__cv-btn">
              Download CV
            </a>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default About;
