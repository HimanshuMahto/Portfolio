import { ExternalLink } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { Reveal } from '../animations/AnimatedSection';
import { projectsData } from './Data';
import './work.css';

const ProjectCard = ({ project }) => (
  <article className="work__card">
    <div className="work__card-header">
      <span className="work__card-category">{project.category}</span>
      <div className="work__card-links">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="work__card-link"
          aria-label={`${project.title} on GitHub`}
        >
          <GitHubIcon size={16} />
        </a>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="work__card-link"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>

    <h3 className="work__card-title">{project.title}</h3>
    <p className="work__card-desc">{project.description}</p>

    <div className="work__tags">
      {project.techStack.map((tech) => (
        <span key={tech} className="work__tag">{tech}</span>
      ))}
    </div>
  </article>
);

const Work = () => (
  <section className="work section" id="work">
    <div className="container">
      <Reveal>
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-subtitle">
          Side projects, experiments, and things that scratched my own itch.
        </p>
      </Reveal>

      <div className="work__grid">
        {projectsData.map((project, i) => (
          <Reveal key={project.id} delay={i * 50}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="work__footer">
          <a
            href="https://github.com/HimanshuMahto"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <GitHubIcon size={15} /> View all on GitHub
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Work;
