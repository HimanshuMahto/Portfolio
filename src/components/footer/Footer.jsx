import { Linkedin, Mail, Instagram, Twitter } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import './footer.css';

const SOCIALS = [
  { icon: <GitHubIcon size={17} />, href: 'https://github.com/HimanshuMahto', label: 'GitHub' },
  { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/himanshumahto', label: 'LinkedIn' },
  { icon: <Twitter size={17} />, href: 'https://twitter.com/HimanshuMahto_', label: 'Twitter' },
  { icon: <Instagram size={17} />, href: 'https://www.instagram.com/_shoyo_.10', label: 'Instagram' },
  { icon: <Mail size={17} />, href: 'mailto:himanshumahto0102@gmail.com', label: 'Email' },
];

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
  {
    label: 'Writing',
    href: 'https://medium.com/@k.himanshu2002/i-got-tired-of-chromes-bookmarks-so-i-built-kuikku-807e4317bd48',
    external: true,
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <div className="footer__brand">
        <a href="#home" className="footer__logo">HM</a>
        <p className="footer__tagline">Building for the web, mobile &amp; beyond.</p>
      </div>

      <nav className="footer__nav">
        {NAV.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            className="footer__link"
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="footer__socials">
        {SOCIALS.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            className="footer__social"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>

    <div className="footer__bottom container">
      <span>© {new Date().getFullYear()} Himanshu Kumar Mahto</span>
    </div>
  </footer>
);

export default Footer;
