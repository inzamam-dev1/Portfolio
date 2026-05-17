import { useEffect, useState } from 'react';
import { owner } from '../data/portfolio';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Coding', 'Contact'];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  /* scroll-aware background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* active section highlight */
  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.toLowerCase())).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const navStyle = {
    position:       'fixed',
    top: 0, left: 0, right: 0,
    zIndex:         100,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        '1.1rem 5%',
    background:     scrolled ? 'rgba(11,12,14,0.92)' : 'rgba(11,12,14,0.5)',
    backdropFilter: 'blur(18px)',
    borderBottom:   `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
    transition:     'background 0.35s, border-color 0.35s',
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a
        href="#home"
        onClick={handleNavClick}
        style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '1.6rem',
          fontWeight:  800,
          color:       'var(--accent)',
          letterSpacing: '-1px',
          zIndex:      101,
        }}
      >
        {owner.initials}
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.4rem', listStyle: 'none' }}
          className="desktop-nav">
        {NAV_ITEMS.map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`nav-link${activeSection === item.toLowerCase() ? ' active' : ''}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="btn-outline desktop-cta"
        style={{ padding: '0.45rem 1.3rem', fontSize: '0.85rem' }}
      >
        Hire Me
      </a>

      {/* Mobile Hamburger */}
      <button
        className="hamburger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display:         'none',
          background:      'transparent',
          border:          'none',
          cursor:          'pointer',
          fontSize:        '1.5rem',
          color:           'var(--text)',
          zIndex:          101,
          padding:         '0.5rem',
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          display:             menuOpen ? 'flex' : 'none',
          position:            'absolute',
          top:                 '100%',
          left:                0,
          right:               0,
          background:          'rgba(11,12,14,0.98)',
          backdropFilter:      'blur(18px)',
          borderBottom:        '1px solid var(--border)',
          flexDirection:       'column',
          padding:             '2rem 5%',
          gap:                 '1rem',
          zIndex:              50,
        }}
      >
        {NAV_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={handleNavClick}
            style={{
              color:           activeSection === item.toLowerCase() ? 'var(--accent)' : 'var(--muted)',
              fontSize:        '0.95rem',
              fontWeight:      500,
              transition:      'color 0.2s',
              textDecoration:  'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = activeSection === item.toLowerCase() ? 'var(--accent)' : 'var(--muted)')}
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          onClick={handleNavClick}
          className="btn-outline"
          style={{ padding: '0.45rem 1.3rem', fontSize: '0.85rem', marginTop: '0.5rem' }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
