import { skills } from '../data/portfolio';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 8%', background: 'var(--bg2)' }}>

      {/* Header */}
      <Reveal>
        <div style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 4rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Tech Stack</p>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '2.4rem',
            fontWeight:    700,
            lineHeight:    1.1,
            letterSpacing: '-0.02em',
            marginBottom:  '0.8rem',
          }}>
            Tools I <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>work with</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
            A curated stack refined over 5 years of building production systems.
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div
        className="skills-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}
      >
        {skills.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className="card"
              style={{ padding: '1.6rem', height: '100%' }}
            >
              {/* card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem' }}>
                <div style={{
                  width:          42,
                  height:         42,
                  borderRadius:   10,
                  background:     'rgba(0,229,176,0.1)',
                  border:         '1px solid rgba(0,229,176,0.2)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.3rem',
                  flexShrink:     0,
                }}>
                  {s.icon}
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{s.title}</p>
              </div>

              {/* tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {s.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
