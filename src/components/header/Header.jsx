import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, X, LayoutGrid, Home, User, Code2, Briefcase, MapPin, FileText, Mail, Palette } from 'lucide-react';
import { THEMES, DEFAULT_PALETTE, applyTheme } from '../../theme';
import './header.css';

const NAV_LINKS = [
  { label: 'Home',    href: '#home',    icon: Home },
  { label: 'About',   href: '#about',   icon: User },
  { label: 'Skills',  href: '#skills',  icon: Code2 },
  { label: 'Work',    href: '#work',    icon: Briefcase },
  { label: 'Journey', href: '#journey', icon: MapPin },
  { label: 'Blog',    href: '#blog',    icon: FileText },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const PALETTE_KEYS = Object.keys(THEMES);

const Header = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [paletteOpen, setPaletteOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark]             = useState(() => localStorage.getItem('theme') !== 'light');
  const [palette, setPalette]           = useState(() => localStorage.getItem('palette') || DEFAULT_PALETTE);
  const paletteRef = useRef(null);

  // Apply theme whenever dark mode or palette changes
  useEffect(() => {
    const vars = THEMES[palette][isDark ? 'dark' : 'light'];
    applyTheme(vars);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('palette', palette);
  }, [isDark, palette]);

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

  // Close palette popover on outside click
  useEffect(() => {
    const handler = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActiveSection(href.slice(1));
  };

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <nav className="header__nav container">
          <a href="#home" className="header__logo">
            <span className="header__logo-bracket">&lt;</span>
            HM
            <span className="header__logo-bracket">/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="header__links">
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
            {/* Palette picker — desktop */}
            <div className="palette-picker" ref={paletteRef}>
              <button
                className="header__theme-btn"
                onClick={() => setPaletteOpen(o => !o)}
                aria-label="Pick theme palette"
              >
                <Palette size={17} />
              </button>

              {paletteOpen && (
                <div className="palette-picker__popover">
                  {PALETTE_KEYS.map(key => (
                    <button
                      key={key}
                      className={`palette-picker__swatch${palette === key ? ' palette-picker__swatch--active' : ''}`}
                      style={{ '--swatch-color': THEMES[key].swatch }}
                      onClick={() => { setPalette(key); setPaletteOpen(false); }}
                      aria-label={THEMES[key].label}
                      title={THEMES[key].label}
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              className="header__theme-btn"
              onClick={() => setIsDark(d => !d)}
              aria-label="Toggle dark/light mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="btn btn-primary header__cta" onClick={() => handleNavClick('#contact')}>
              Hire me
            </a>

            {/* Mobile grid toggle */}
            <button
              className={`header__menu-btn${menuOpen ? ' header__menu-btn--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <LayoutGrid size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-up nav panel */}
      <div className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}>
        <div className="mobile-nav__grid">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className={`mobile-nav__item${activeSection === href.slice(1) ? ' mobile-nav__item--active' : ''}`}
              onClick={() => handleNavClick(href)}
            >
              <Icon size={24} className="mobile-nav__icon" />
              <span className="mobile-nav__label">{label}</span>
            </a>
          ))}
        </div>

        {/* Theme controls inside mobile nav */}
        <div className="mobile-nav__palettes">
          {PALETTE_KEYS.map(key => (
            <button
              key={key}
              className={`palette-picker__swatch${palette === key ? ' palette-picker__swatch--active' : ''}`}
              style={{ '--swatch-color': THEMES[key].swatch }}
              onClick={() => setPalette(key)}
              aria-label={THEMES[key].label}
              title={THEMES[key].label}
            />
          ))}
        </div>

        <button
          className="mobile-nav__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav__backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;
