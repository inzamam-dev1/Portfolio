import { owner, socials } from '../data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 8%', background: 'var(--bg2)', textAlign: 'center' }}>
      <Reveal>
        <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>

        <h2 style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(2rem, 3.5vw, 2.8rem)',
          fontWeight:    700,
          lineHeight:    1.1,
          letterSpacing: '-0.02em',
          marginBottom:  '0.8rem',
        }}>
          Let's build something <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>great</em>
        </h2>

        <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto 3rem' }}>
          Have a project in mind or just want to chat? My inbox is always open.
        </p>

        {/* Card */}
        <div style={{
          maxWidth:     680,
          margin:       '0 auto',
          background:   'var(--card)',
          border:       '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding:      '3rem',
          position:     'relative',
          overflow:     'hidden',
        }}>
          {/* shimmer top edge */}
          <div style={{
            position:   'absolute',
            top:        0,
            left:       '50%',
            transform:  'translateX(-50%)',
            width:      '70%',
            height:     1,
            background: 'linear-gradient(to right, transparent, var(--accent), transparent)',
          }} />

          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            Drop me a line at
          </p>

          <a
            href={`mailto:${owner.email}`}
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight:    700,
              color:         'var(--accent)',
              display:       'block',
              marginBottom:  '2rem',
              transition:    'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {owner.email}
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} className="social-link">
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
