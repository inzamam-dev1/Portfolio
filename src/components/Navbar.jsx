import { useEffect, useState } from 'react';
import { owner } from '../data/portfolio';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '1.6rem',
          fontWeight:  800,
          color:       'var(--accent)',
          letterSpacing: '-1px',
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

      {/* CTA */}
      <a
        href="#contact"
        className="btn-outline"
        style={{ padding: '0.45rem 1.3rem', fontSize: '0.85rem' }}
      >
        Hire Me
      </a>
    </nav>
  );
}
