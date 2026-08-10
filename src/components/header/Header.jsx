import { useState, useEffect } from 'react';
import { Sun, Moon, X, LayoutGrid, Home, User, Code2, Briefcase, MapPin, Mail } from 'lucide-react';
import { applyTheme } from '../../theme';
import './header.css';

const NAV_LINKS = [
  { label: 'Home',    href: '#home',    icon: Home },
  { label: 'About',   href: '#about',   icon: User },
  { label: 'Skills',  href: '#skills',  icon: Code2 },
  { label: 'Work',    href: '#work',    icon: Briefcase },
  { label: 'Journey', href: '#journey', icon: MapPin },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const SECTION_IDS = NAV_LINKS.map(({ href }) => href.slice(1));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    const mode = isDark ? 'dark' : 'light';
    applyTheme(mode);
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const id of [...SECTION_IDS].reverse()) {
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
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <nav className="header__nav container">
          <a href="#home" className="header__logo" onClick={() => handleNavClick('#home')}>
            HM
          </a>

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
            <button
              className="header__icon-btn"
              onClick={() => setIsDark((d) => !d)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a href="#contact" className="btn btn-primary header__cta" onClick={() => handleNavClick('#contact')}>
              Get in touch
            </a>

            <button
              className="header__icon-btn header__menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={19} /> : <LayoutGrid size={19} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-up nav */}
      <div className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}>
        <div className="mobile-nav__grid">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className={`mobile-nav__item${activeSection === href.slice(1) ? ' mobile-nav__item--active' : ''}`}
              onClick={() => handleNavClick(href)}
            >
              <Icon size={20} className="mobile-nav__icon" />
              <span className="mobile-nav__label">{label}</span>
            </a>
          ))}
        </div>

        <button className="mobile-nav__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X size={18} />
        </button>
      </div>

      {menuOpen && <div className="mobile-nav__backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
