import { Reveal } from '../animations/AnimatedSection';
import './qualification.css';

const experience = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Facets.cloud',
    location: 'Bangalore',
    period: 'Oct 2025 – Present',
    current: true,
    summary:
      'Full-stack across the platform — React control plane, Java/Spring APIs, and the Go CLI.',
    highlights: [
      'Lead frontend on the Angular → React control-plane rewrite: 190+ merged PRs across releases, blueprints, resources, variables & secrets, RBAC and settings.',
      'Shipped backend features in Java/Spring — a typed pre-release approval hook API (Python or Shell), a projection-backed lite resources endpoint, and RBAC enforcement on user creation.',
      'Extended the kubectl-style Go CLI with Terraform export, OPA guardrail-policy CRUD, queued-release cancellation and override rollback.',
      'Closed penetration-test findings: neutralized CSV formula injection in exports and stopped verbose parse-error disclosure on public endpoints.',
      'Built agent skills for the in-house AI assistant so it can drive the CLI and deep-link into the UI, plus a no-auth product demo prospects can explore without signing up.',
    ],
    stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Go', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Software Intern',
    company: 'Facets.cloud',
    location: 'Bangalore',
    period: 'Jan – Sept 2025',
    summary: 'Owned end-to-end features on the production Angular control plane.',
    highlights: [
      '159 merged PRs — release labels, output types, resource groups, a rebuilt environment launch wizard and the release debugger.',
      'Shipped per-tenant feature flags that gate AI surfaces per control plane, unblocking enterprise rollouts.',
      'Wrote the first screens and shared components of the React rewrite that became my full-time charter.',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
  },
  {
    id: 3,
    title: 'Tech Intern',
    company: 'Facets.cloud',
    location: 'Bangalore',
    period: 'May – Dec 2024',
    summary: 'First production codebase — shipped to paying customers from month one.',
    highlights: [
      'Built the notification panel and notification routing end to end.',
      'Shipped the RBAC access analyzer, user-list export, project types and the Ops Center surface.',
      'Filled out the Blueprint Designer — empty states, release history, resource status and GitOps links.',
      'Instrumented product analytics across key flows.',
    ],
    stack: ['Angular', 'TypeScript', 'Mixpanel'],
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

const Qualification = () => (
  <section className="qualification section" id="journey">
    <div className="container">
      <Reveal>
        <span className="section-label">Journey</span>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-subtitle">Two internships, one company, one bet that paid off.</p>
      </Reveal>

      <div className="qual__block">
        <h3 className="qual__block-title">Experience</h3>

        <div className="qual__list">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <article className={`qual__role${item.current ? ' qual__role--current' : ''}`}>
                <header className="qual__role-header">
                  <div className="qual__role-heading">
                    <h4 className="qual__role-title">
                      {item.title}
                      {item.current && <span className="qual__badge">Now</span>}
                    </h4>
                    <p className="qual__role-org">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="qual__role-period">{item.period}</span>
                </header>

                <p className="qual__role-summary">{item.summary}</p>

                <ul className="qual__highlights">
                  {item.highlights.map((point) => (
                    <li key={point} className="qual__highlight">{point}</li>
                  ))}
                </ul>

                <div className="qual__stack">
                  {item.stack.map((tech) => (
                    <span key={tech} className="qual__stack-tag">{tech}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={80}>
        <div className="qual__block qual__block--education">
          <h3 className="qual__block-title">Education</h3>

          <div className="qual__edu-list">
            {education.map((item) => (
              <div className="qual__edu" key={item.id}>
                <div>
                  <h4 className="qual__edu-title">{item.title}</h4>
                  <p className="qual__role-org">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="qual__role-period">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Qualification;
