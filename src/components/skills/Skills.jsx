import { Reveal } from '../animations/AnimatedSection';
import './skills.css';

const GROUPS = [
  { label: 'Frontend',    items: ['React', 'TypeScript', 'Angular', 'RxJS', 'JavaScript', 'CSS'] },
  { label: 'Backend',     items: ['Java', 'Spring Boot', 'Go', 'Node.js', 'Python', 'REST APIs'] },
  { label: 'Mobile',      items: ['Kotlin', 'Jetpack Compose', 'Android SDK'] },
  { label: 'Data & ML',   items: ['PostgreSQL', 'MongoDB', 'MySQL', 'TensorFlow', 'Firebase'] },
  { label: 'Tools',       items: ['Git', 'Postman', 'Figma'] },
];

const Skills = () => (
  <section className="skills section" id="skills">
    <div className="container">
      <Reveal>
        <span className="section-label">Skills</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">
          Everything I reach for when building — no filler, no percentages.
        </p>
      </Reveal>

      <dl className="skills__list">
        {GROUPS.map(({ label, items }, i) => (
          <Reveal key={label} delay={i * 60} className="skills__row">
            <dt className="skills__label">{label}</dt>
            <dd className="skills__items">
              {items.map((item) => (
                <span key={item} className="skills__item">{item}</span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
