import { codingProfiles } from '../data/portfolio';
import Reveal from './Reveal';

export default function CodingProfile() {
  return (
    <section id="coding" style={{ padding: '7rem 8%', background: 'var(--bg)' }}>

      {/* Header */}
      <Reveal>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 4rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Coding Profile</p>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 3.5vw, 3rem)',
            fontWeight:    700,
            lineHeight:    1.1,
            letterSpacing: '-0.02em',
            marginBottom:  '0.8rem',
          }}>
            Competitive <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Programming</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
            My presence across major competitive programming platforms.
          </p>
        </div>
      </Reveal>

      {/* Grid */}
      <div
        className="coding-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap:                 '1.5rem',
          maxWidth:            '1100px',
          margin:              '0 auto',
        }}
      >
        {codingProfiles.map((profile, i) => (
          <Reveal key={i} delay={i * 80}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background:        'var(--card)',
                border:            '1px solid var(--border)',
                borderRadius:      'var(--radius-lg)',
                padding:           '1.8rem',
                display:           'flex',
                flexDirection:     'column',
                alignItems:        'center',
                textAlign:         'center',
                transition:        'all 0.3s',
                textDecoration:    'none',
                cursor:            'pointer',
                position:          'relative',
                overflow:          'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = profile.accentColor;
                e.currentTarget.style.boxShadow = `0 0 20px ${profile.accentColor}40`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width:            60,
                  height:           60,
                  borderRadius:     12,
                  background:       profile.color,
                  border:           `1.5px solid ${profile.accentColor}60`,
                  display:          'flex',
                  alignItems:       'center',
                  justifyContent:   'center',
                  fontSize:         '1.8rem',
                  marginBottom:     '1rem',
                }}
              >
                {profile.icon}
              </div>

              {/* Content */}
              <h3
                style={{
                  fontFamily:      'var(--font-display)',
                  fontSize:        '1.15rem',
                  fontWeight:      700,
                  color:           profile.accentColor,
                  marginBottom:    '0.5rem',
                  textDecoration:  'none',
                }}
              >
                {profile.platform}
              </h3>

              <p
                style={{
                  fontSize:        '0.85rem',
                  fontWeight:      500,
                  color:           'var(--text)',
                  marginBottom:    '0.8rem',
                  fontFamily:      'var(--font-body)',
                }}
              >
                @{profile.handle}
              </p>

              <p
                style={{
                  fontSize:        '0.8rem',
                  color:           'var(--muted)',
                  lineHeight:      1.6,
                }}
              >
                {profile.desc}
              </p>

              {/* Arrow */}
              <div
                style={{
                  marginTop:       '1rem',
                  paddingTop:      '1rem',
                  borderTop:       '1px solid var(--border)',
                  width:           '100%',
                  fontSize:        '1.2rem',
                  color:           profile.accentColor,
                  transition:      'transform 0.2s',
                }}
              >
                ↗
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
