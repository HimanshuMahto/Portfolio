import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './header.css';

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Work',      href: '#work' },
  { label: 'Journey',   href: '#journey' },
  { label: 'Blog',      href: '#blog' },
  { label: 'Contact',   href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'work', 'journey', 'blog', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActiveSection(href.slice(1));
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <nav className="header__nav container">
        <a href="#home" className="header__logo">
          <span className="header__logo-bracket">&lt;</span>
          HM
          <span className="header__logo-bracket">/&gt;</span>
        </a>

        <ul className={`header__links${menuOpen ? ' header__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`header__link${activeSection === href.slice(1) ? ' header__link--active' : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <button
            className="header__theme-btn"
            onClick={() => setIsDark(d => !d)}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="btn btn-primary header__cta" onClick={() => handleNavClick('#contact')}>
            Hire me
          </a>

          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="header__mobile-menu">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`header__mobile-link${activeSection === href.slice(1) ? ' header__mobile-link--active' : ''}`}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
