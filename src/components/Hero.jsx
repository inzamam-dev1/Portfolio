import { owner, badges } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight:    '100vh',
        padding:      '8rem 8% 4rem',
        position:     'relative',
        overflow:     'hidden',
      }}
    >
      {/* Ambient glows */}
      <Glow size={600} opacity={0.12} top="10%"  left="-10%" />
      <Glow size={400} opacity={0.08} bottom="5%" right="15%" />

      <div
        className="hero-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems:          'center',
          gap:                 '3rem',
        }}
      >
        {/* ── TEXT ── */}
        <div style={{ animation: 'fade-up 0.9s ease both' }}>
          <p style={{
            fontSize:      '0.9rem',
            color:         'var(--muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom:  '1rem',
            display:       'flex',
            alignItems:    'center',
            gap:           '0.6rem',
          }}>
            <span className="wave-emoji">👋</span> Hi there, I'm
          </p>

          <h1 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(3rem, 6vw, 5.2rem)',
            fontWeight:    800,
            lineHeight:    1.05,
            letterSpacing: '-0.03em',
            marginBottom:  '0.6rem',
          }}>
            {owner.name.split(' ').map((word, i) => (
              <span key={i} style={{ display: 'block' }}>{word}</span>
            ))}
          </h1>

          <p
            className="hero-role"
            style={{
              display:       'flex',
              alignItems:    'center',
              gap:           '0.7rem',
              fontFamily:    'var(--font-display)',
              fontSize:      '1.1rem',
              fontWeight:    600,
              color:         'var(--accent)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom:  '1.4rem',
            }}
          >
            <span style={{ width: 28, height: 2, background: 'var(--accent)', borderRadius: 2, flexShrink: 0 }} />
            {owner.role} 💻
          </p>

          <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.8, marginBottom: '2.4rem' }}>
            {owner.tagline}
          </p>

          <div className="hero-acts" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Hire Me →</a>
            <a href="#projects" className="btn-outline">View Work</a>
          </div>
        </div>

        {/* ── AVATAR ── */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            position:       'relative',
            animation:      'fade-up 0.9s 0.2s ease both',
          }}
        >
          <div
            className="avatar-ring spin-cw"
            style={{
              width:        380,
              height:       380,
              borderRadius: '50%',
              border:       '2px dashed rgba(0,229,176,0.2)',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              position:     'relative',
            }}
          >
            {/* pulsing dot at top of ring */}
            <span
              className="pulse-glow"
              style={{
                position:     'absolute',
                width:        12,
                height:       12,
                borderRadius: '50%',
                background:   'var(--accent)',
                top:          8,
                left:         '50%',
                transform:    'translateX(-50%)',
              }}
            />

            <div
              className="avatar-core spin-ccw"
              style={{
                width:          300,
                height:         300,
                borderRadius:   '50%',
                background:     'linear-gradient(135deg, #1a1d24, #0f1115)',
                border:         '2px solid rgba(0,229,176,0.15)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '7rem',
                position:       'relative',
                overflow:       'hidden',
              }}
            >
              <img src="https://avatars.githubusercontent.com/u/252877083?s=400&u=c0abf7e8fc81cf5010d575f86dc5891ff31957ad&v=4" alt="Md Inzamam" style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position:   'absolute',
                inset:      0,
                background: 'radial-gradient(circle at 30% 30%, rgba(0,229,176,0.08), transparent 60%)',
              }} />
            </div>
          </div>

          {/* floating badges */}
          {badges.map((b, i) => (
            <div
              key={i}
              className={b.cls}
              style={{
                position:       'absolute',
                background:     'var(--card)',
                border:         '1px solid var(--border)',
                borderRadius:   12,
                padding:        '0.5rem 0.9rem',
                fontSize:       '0.78rem',
                fontWeight:     500,
                whiteSpace:     'nowrap',
                backdropFilter: 'blur(8px)',
                ...b.pos,
              }}
            >
              <span style={{ color: 'var(--accent)', marginRight: '0.4rem' }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Glow({ size, opacity, ...pos }) {
  return (
    <div style={{
      position:     'absolute',
      width:        size,
      height:       size,
      borderRadius: '50%',
      background:   `radial-gradient(circle, rgba(0,229,176,${opacity}) 0%, transparent 70%)`,
      pointerEvents: 'none',
      ...pos,
    }} />
  );
}
