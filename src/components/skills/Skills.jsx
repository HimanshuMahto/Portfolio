import React, { useState, useEffect, useRef } from 'react';
import { FadeUp, ScaleIn } from '../animations/AnimatedSection';
import './skills.css';

const ALL_SKILLS = [
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Android', icon: 'devicon-android-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'Jetpack', icon: 'devicon-jetpackcompose-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
  { name: 'WebStorm', icon: 'devicon-webstorm-plain colored' },
];

const ORBIT_CONFIG = [
  { rx: 120, ry: 120, tilt: 0, speed: 0.0004, start: 0, count: 6 },
  { rx: 195, ry: 80, tilt: 60, speed: -0.0003, start: 6, count: 6 },
  { rx: 195, ry: 80, tilt: -60, speed: 0.00025, start: 12, count: 6 },
];

const ITEMS = ORBIT_CONFIG.flatMap((orbit, oi) =>
  ALL_SKILLS.slice(orbit.start, orbit.start + orbit.count).map((skill, ii) => ({
    skill,
    orbitIndex: oi,
    indexInOrbit: ii,
    totalInOrbit: orbit.count,
  }))
);

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const items = scene.querySelectorAll('.atom__item');
    if (items.length === 0) return;

    let raf;
    let start = null;

    const loop = (ts) => {
      if (!start) start = ts;
      const t = ts - start;

      let idx = 0;
      ORBIT_CONFIG.forEach((orbit) => {
        const tiltRad = (orbit.tilt * Math.PI) / 180;
        const cosT = Math.cos(tiltRad);
        const sinT = Math.sin(tiltRad);

        for (let i = 0; i < orbit.count; i++) {
          const el = items[idx];
          if (!el) { idx++; continue; }

          const baseAngle = (2 * Math.PI / orbit.count) * i;
          const angle = baseAngle + t * orbit.speed;

          const ex = orbit.rx * Math.cos(angle);
          const ey = orbit.ry * Math.sin(angle);

          const x = ex * cosT - ey * sinT;
          const y = ex * sinT + ey * cosT;

          el.style.left = `calc(50% + ${x}px - 20px)`;
          el.style.top = `calc(50% + ${y}px - 20px)`;

          idx++;
        }
      });

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <FadeUp>
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">Technologies and tools across my stack</p>
        </FadeUp>

        <ScaleIn delay={0.2}>
        <div className="atom">
          <div className="atom__scene" ref={sceneRef}>
            <svg className="atom__paths" viewBox="-250 -250 500 500">
              {ORBIT_CONFIG.map((orbit, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="0"
                  rx={orbit.rx}
                  ry={orbit.ry}
                  transform={`rotate(${orbit.tilt})`}
                  fill="none"
                  className="atom__ellipse"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              ))}
            </svg>

            <div className="atom__nucleus">
              {hovered ? (
                <span className="atom__nucleus-label" key={hovered}>{hovered}</span>
              ) : (
                <span className="atom__nucleus-text">{'<HM/>'}</span>
              )}
              <div className="atom__nucleus-glow" />
            </div>

            {ITEMS.map(({ skill }) => (
              <div
                key={skill.name}
                className="atom__item"
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <i className={skill.icon} />
              </div>
            ))}
          </div>

          <div className="atom__mobile">
            {ALL_SKILLS.map(({ name, icon }) => (
              <div key={name} className="atom__mobile-chip">
                <i className={icon} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default Skills;
