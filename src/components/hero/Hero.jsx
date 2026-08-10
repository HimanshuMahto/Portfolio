import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { Reveal } from '../animations/AnimatedSection';
import CV from '../../assets/Himanshu–Resume.pdf';
import './hero.css';

const LINKS = [
  { label: 'github.com/HimanshuMahto', href: 'https://github.com/HimanshuMahto', Icon: GitHubIcon },
  { label: 'linkedin.com/in/himanshumahto', href: 'https://linkedin.com/in/himanshumahto', Icon: Linkedin },
  { label: 'himanshumahto0102@gmail.com', href: 'mailto:himanshumahto0102@gmail.com', Icon: Mail },
];

const META = [
  { label: 'Location', value: 'Bangalore, India' },
  { label: 'Company', value: 'Facets.cloud' },
];

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__container container">
      <Reveal immediate as="span" className="hero__eyebrow">
        Software Developer
      </Reveal>

      <Reveal immediate delay={60}>
        <h1 className="hero__name">
          <span className="hero__name-line">Himanshu</span>
          <span className="hero__name-line hero__name-line--outline">Mahto.</span>
        </h1>
      </Reveal>

      <Reveal immediate delay={120} as="p" className="hero__tagline">
        I build complete software systems — from REST APIs and backend services to
        React frontends and Android apps — and ship features that scale for paying
        customers.
      </Reveal>

      <Reveal immediate delay={180} className="hero__actions">
        <a href="#work" className="btn btn-primary">
          View my work <ArrowRight size={15} />
        </a>
        <a href={CV} download className="btn btn-outline">
          Download CV <Download size={15} />
        </a>
      </Reveal>

      <Reveal immediate delay={240} className="hero__meta">
        <div className="hero__meta-item">
          <span className="hero__meta-label">Status</span>
          <span className="hero__meta-value">
            <span className="hero__status-dot" aria-hidden="true" />
            Available
          </span>
        </div>
        {META.map(({ label, value }) => (
          <div className="hero__meta-item" key={label}>
            <span className="hero__meta-label">{label}</span>
            <span className="hero__meta-value">{value}</span>
          </div>
        ))}
      </Reveal>

      <Reveal immediate delay={300} className="hero__links">
        {LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="hero__link"
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Hero;
