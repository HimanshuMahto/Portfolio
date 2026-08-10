import { Reveal } from '../animations/AnimatedSection';
import CV from '../../assets/Himanshu–Resume.pdf';
import './about.css';

const STORY = [
  {
    year: '2021',
    title: 'Picked up Java.',
    body: 'Started my CS degree at Jaypee University. Fell into Android development after building a small expense tracker that actually worked — that feeling of shipping something real got me hooked.',
  },
  {
    year: '2023',
    title: 'Went full-stack.',
    body: 'Expanded into Python and ML — fine-tuned ResNet101V2 on chest X-rays, hit 87.5% accuracy. Realized I liked the backend plumbing as much as the model itself, and started bridging ML into mobile via Flask APIs.',
  },
  {
    year: '2024',
    title: 'Joined Facets.cloud.',
    body: 'First real production codebase. Shipped to paying customers from month one, then co-led an Angular-to-React migration and moved into backend and CLI work alongside it.',
  },
  {
    year: 'Now',
    title: 'Sweating the details.',
    body: 'Focused on system design, performance, and reliability. I care about the parts users never notice — because when they are right, everything just works.',
  },
];

const FACTS = [
  { key: 'Location', value: 'Bangalore, India' },
  { key: 'Education', value: 'B.Tech CS&E · 9.1 CGPA' },
  { key: 'Status', value: 'Open to opportunities', available: true },
];

const About = () => (
  <section className="about section" id="about">
    <div className="container">
      <Reveal>
        <span className="section-label">About me</span>
        <h2 className="section-title">How I got here</h2>
        <p className="section-subtitle">The short version of a longer story.</p>
      </Reveal>

      <div className="about__layout">
        <div className="about__timeline">
          {STORY.map((item, i) => (
            <Reveal key={item.year} delay={i * 70} className="about__story-item">
              <div className="about__story-year">{item.year}</div>
              <div className="about__story-body">
                <h3 className="about__story-title">{item.title}</h3>
                <p className="about__story-text">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <aside className="about__sidebar">
            <dl className="about__facts">
              {FACTS.map(({ key, value, available }) => (
                <div className="about__fact" key={key}>
                  <dt className="about__fact-key">{key}</dt>
                  <dd className="about__fact-value">
                    {available && <span className="about__fact-dot" aria-hidden="true" />}
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <a href={CV} download className="btn btn-outline about__cv-btn">
              Download CV
            </a>
          </aside>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
