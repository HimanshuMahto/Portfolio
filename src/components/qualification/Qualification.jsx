import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { FadeUp, FadeLeft, FadeRight } from '../animations/AnimatedSection';
import './qualification.css';

const experience = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Facets.cloud',
    location: 'Bangalore',
    period: 'Oct 2025 – Present',
    current: true,
  },
  {
    id: 2,
    title: 'Software Intern',
    company: 'Facets.cloud',
    location: 'Bangalore',
    period: 'Jan – Sept 2025',
  },
  {
    id: 3,
    title: 'Tech Intern',
    company: 'Facets.cloud',
    location: 'Bangalore',
    period: 'May – Dec 2024',
  },
];

const education = [
  {
    id: 1,
    title: 'B.Tech — Computer Science',
    company: 'Jaypee University of Engg. & Tech.',
    location: 'Guna',
    period: '2021 – 2025',
  },
  {
    id: 2,
    title: 'Senior Secondary (ICSE)',
    company: 'ICSE Board',
    location: 'India',
    period: '2018 – 2020',
  },
];

const Qualification = () => {
  return (
    <section className="qualification section" id="journey">
      <div className="container">
        <FadeUp>
          <span className="section-label">Journey</span>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-subtitle">Where I've worked and studied</p>
        </FadeUp>

        <div className="qual__grid">
          <FadeLeft delay={0.15} className="qual__col">
            <div className="qual__col-header">
              <Briefcase size={16} />
              <h3>Experience</h3>
            </div>
            <div className="qual__list">
              {experience.map((item) => (
                <div key={item.id} className={`qual__row${item.current ? ' qual__row--current' : ''}`}>
                  <div className="qual__row-dot" />
                  <div className="qual__row-content">
                    <div className="qual__row-top">
                      <span className="qual__row-title">{item.title}</span>
                      <span className="qual__row-period">{item.period}</span>
                    </div>
                    <div className="qual__row-bottom">
                      <span className="qual__row-company">{item.company}</span>
                      <span className="qual__row-location">
                        <MapPin size={10} /> {item.location}
                      </span>
                    </div>
                  </div>
                  {item.current && <span className="qual__current-badge">Now</span>}
                </div>
              ))}
            </div>
          </FadeLeft>

          <FadeRight delay={0.25} className="qual__col">
            <div className="qual__col-header">
              <GraduationCap size={16} />
              <h3>Education</h3>
            </div>
            <div className="qual__list">
              {education.map((item) => (
                <div key={item.id} className="qual__row">
                  <div className="qual__row-dot" />
                  <div className="qual__row-content">
                    <div className="qual__row-top">
                      <span className="qual__row-title">{item.title}</span>
                      <span className="qual__row-period">{item.period}</span>
                    </div>
                    <div className="qual__row-bottom">
                      <span className="qual__row-company">{item.company}</span>
                      <span className="qual__row-location">
                        <MapPin size={10} /> {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
