import React from 'react';
import { MapPin, Briefcase, Code2, GraduationCap, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';
import AboutImg from '../../assets/aboutProfile.jpeg';
import CV from '../../assets/Himanshu–Resume.pdf';
import './about.css';

const STATS = [
  { value: '2+', label: 'Yrs at Facets' },
  { value: '20+', label: 'Bugs triaged' },
  { value: '9.1', label: 'CGPA' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const About = () => {
  const cards = [
    <motion.div key="photo" className="about__card about__card--photo" custom={0} variants={cardVariants}>
      <img src={AboutImg} alt="Himanshu Kumar Mahto" className="about__photo" loading="lazy" />
      <div className="about__photo-overlay">
        <span className="about__photo-name">Himanshu K. Mahto</span>
      </div>
    </motion.div>,

    <motion.div key="bio" className="about__card about__card--bio" custom={1} variants={cardVariants}>
      <div className="about__card-label">
        <Code2 size={15} /> Who I am
      </div>
      <p className="about__bio">
        I&apos;m a Software Developer at <strong>Facets.cloud</strong> based in Bangalore.
        I co-led an Angular-to-React migration of 10+ screens, built reusable component libraries
        adopted by a 6-engineer team, and shipped features serving 100+ platform modules.
      </p>
      <p className="about__bio">
        I care about performance, accessibility, and building UIs that scale — from slashing
        page load times by 15% to raising Lighthouse accessibility scores by 12 pts.
      </p>
      <a href={CV} download className="btn btn-outline about__cv-btn">
        Download CV
      </a>
    </motion.div>,

    <motion.div key="role" className="about__card about__card--role" custom={2} variants={cardVariants}>
      <div className="about__card-label">
        <Briefcase size={15} /> Currently
      </div>
      <div className="about__role-info">
        <div className="about__role-dot" />
        <div>
          <p className="about__role-title">Software Developer</p>
          <p className="about__role-company">Facets.cloud · Bangalore</p>
          <span className="about__role-badge">Full-time</span>
        </div>
      </div>
    </motion.div>,

    <motion.div key="stats" className="about__card about__card--stats" custom={3} variants={cardVariants}>
      {STATS.map(({ value, label }) => (
        <div key={label} className="about__stat">
          <span className="about__stat-value">{value}</span>
          <span className="about__stat-label">{label}</span>
        </div>
      ))}
    </motion.div>,

    <motion.div key="edu" className="about__card about__card--edu" custom={4} variants={cardVariants}>
      <div className="about__card-label">
        <GraduationCap size={15} /> Education
      </div>
      <p className="about__edu-degree">B.Tech — CS&amp;E · 9.1 CGPA</p>
      <p className="about__edu-school">Jaypee University, Guna</p>
      <p className="about__edu-period">2021 – 2025</p>
    </motion.div>,

    <motion.div key="vibe" className="about__card about__card--vibe" custom={5} variants={cardVariants}>
      <div className="about__card-label">
        <Zap size={15} /> Currently exploring
      </div>
      <div className="about__vibe-tags">
        {['Component Design', 'Performance', 'Accessibility', 'Agile'].map(t => (
          <span key={t} className="about__vibe-tag">{t}</span>
        ))}
      </div>
    </motion.div>,

    <motion.div key="location" className="about__card about__card--location" custom={6} variants={cardVariants}>
      <MapPin size={18} className="about__location-icon" />
      <span className="about__location-text">Bangalore, India</span>
    </motion.div>,
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <FadeUp>
          <span className="section-label">About me</span>
          <h2 className="section-title">The person behind the code</h2>
          <p className="section-subtitle">A bit about who I am and what drives me</p>
        </FadeUp>

        <motion.div
          className="about__bento"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
