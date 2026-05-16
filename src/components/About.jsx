import { owner, details } from '../data/portfolio';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 8%', background: 'var(--bg)' }}>
      <div
        className="about-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '5rem',
          alignItems:          'center',
        }}
      >
        {/* ── TEXT ── */}
        <Reveal>
          <p className="section-label">About Me</p>

          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 3.5vw, 3rem)',
            fontWeight:    700,
            lineHeight:    1.1,
            letterSpacing: '-0.02em',
            marginBottom:  '1.4rem',
          }}>
            Crafting digital experiences with{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>code & care</em>
          </h2>

          {owner.bio.map((para, i) => (
            <p key={i} style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              {para}
            </p>
          ))}

          <div
            className="details-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}
          >
            {details.map((d, i) => (
              <div
                key={i}
                style={{
                  background:   'var(--card)',
                  border:       '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding:      '1.1rem 1.3rem',
                  transition:   'border-color 0.2s',
                  cursor:       'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,229,176,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
                  {d.label}
                </p>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: d.accent ? 'var(--accent)' : 'var(--text)' }}>
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── ILLUSTRATION ── */}
        <Reveal delay={150}>
          <div
            className="about-img"
            style={{
              background:   'var(--card)',
              border:       '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              aspectRatio:  '4/5',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              fontSize:     '9rem',
              position:     'relative',
              overflow:     'hidden',
            }}
          >
            <img src="https://avatars.githubusercontent.com/u/252877083?s=400&u=c0abf7e8fc81cf5010d575f86dc5891ff31957ad&v=4" alt="Md Inzamam" style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position:   'absolute',
              inset:      0,
              background: 'radial-gradient(circle at 40% 40%, rgba(0,229,176,0.06), transparent 60%)',
            }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
