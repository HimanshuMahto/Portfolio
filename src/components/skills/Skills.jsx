import React, { useState, useEffect, useRef } from 'react';
import { FadeUp } from '../animations/AnimatedSection';
import './skills.css';

const TREE = [
  { line: '$ npm list --depth=0  himanshu-mahto@1.0.0', type: 'cmd' },
  { line: 'himanshu-mahto@1.0.0', type: 'root' },
  { line: '├── typescript@5.x', type: 'pkg', tag: 'Frontend' },
  { line: '├── react@18.x', type: 'pkg', tag: 'Frontend' },
  { line: '├── angular@17.x', type: 'pkg', tag: 'Frontend' },
  { line: '├── node.js@20.x', type: 'pkg', tag: 'Backend' },
  { line: '├── java@17.x', type: 'pkg', tag: 'Backend' },
  { line: '├── python@3.11', type: 'pkg', tag: 'Backend' },
  { line: '├── android-sdk@34', type: 'pkg', tag: 'Mobile' },
  { line: '├── jetpack-compose@1.x', type: 'pkg', tag: 'Mobile' },
  { line: '├── kotlin@1.9', type: 'pkg', tag: 'Mobile' },
  { line: '├── tensorflow@2.x', type: 'pkg', tag: 'ML' },
  { line: '├── firebase@10.x', type: 'pkg', tag: 'Infra' },
  { line: '├── mysql@8.x', type: 'pkg', tag: 'Infra' },
  { line: '├── git@2.x', type: 'pkg', tag: 'Tools' },
  { line: '├── postman@10.x', type: 'pkg', tag: 'Tools' },
  { line: '└── figma@latest', type: 'pkg', tag: 'Tools' },
  { line: '', type: 'blank' },
  { line: '17 packages — 0 vulnerabilities', type: 'summary' },
];

const TAG_COLORS = {
  Frontend: 'tag--blue',
  Backend:  'tag--green',
  Mobile:   'tag--orange',
  ML:       'tag--purple',
  Infra:    'tag--red',
  Tools:    'tag--gray',
};

const Skills = () => {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (visible >= TREE.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), visible === 0 ? 0 : 80);
    return () => clearTimeout(t);
  }, [started, visible]);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <FadeUp>
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            Everything I reach for when building — no filler, no buzzwords
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="skill-term" ref={ref}>
            {/* title bar */}
            <div className="skill-term__bar">
              <div className="skill-term__dots">
                <span className="skill-term__dot" style={{ background: '#ff5f57' }} />
                <span className="skill-term__dot" style={{ background: '#febc2e' }} />
                <span className="skill-term__dot" style={{ background: '#28c840' }} />
              </div>
              <span className="skill-term__title">himanshu@portfolio: ~/skills</span>
            </div>

            {/* body */}
            <div className="skill-term__body">
              {TREE.slice(0, visible).map((item, i) => (
                <div key={i} className={`skill-term__line skill-term__line--${item.type}`}>
                  {item.type === 'blank' ? null : (
                    <>
                      <span className="skill-term__text">{item.line}</span>
                      {item.tag && (
                        <span className={`skill-term__tag ${TAG_COLORS[item.tag]}`}>
                          {item.tag}
                        </span>
                      )}
                    </>
                  )}
                </div>
              ))}
              {visible < TREE.length && (
                <span className="skill-term__cursor">█</span>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Skills;
