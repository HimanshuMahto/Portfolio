import React from 'react';
import { Linkedin, Mail, Instagram, Twitter } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import './footer.css';

const SOCIALS = [
  { icon: <GitHubIcon size={18} />, href: 'https://github.com/HimanshuMahto', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/himanshumahto', label: 'LinkedIn' },
  { icon: <Twitter size={18} />, href: 'https://twitter.com/HimanshuMahto_', label: 'Twitter' },
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/_shoyo_.10', label: 'Instagram' },
  { icon: <Mail size={18} />, href: 'mailto:himanshumahto0102@gmail.com', label: 'Email' },
];

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <div className="footer__brand">
        <a href="#home" className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          HM
          <span className="footer__logo-bracket">/&gt;</span>
        </a>
        <p className="footer__tagline">Building for the web, mobile &amp; beyond.</p>
      </div>

      <nav className="footer__nav">
        {NAV.map(({ label, href }) => (
          <a key={href} href={href} className="footer__link">{label}</a>
        ))}
      </nav>

      <div className="footer__socials">
        {SOCIALS.map(({ icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="footer__social">
            {icon}
          </a>
        ))}
      </div>
    </div>

    <div className="footer__bottom container">
      <span>© {new Date().getFullYear()} Himanshu Kumar Mahto. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
