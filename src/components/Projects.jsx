import { projects } from '../data/portfolio';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 8%', background: 'var(--bg)' }}>

      {/* Header */}
      <Reveal>
        <div
          className="proj-header"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}
        >
          <div>
            <p className="section-label">Portfolio</p>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2rem, 3.5vw, 3rem)',
              fontWeight:    700,
              lineHeight:    1.1,
              letterSpacing: '-0.02em',
              margin:        0,
            }}>
              Featured <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Projects</em>
            </h2>
          </div>
          <a href="#contact" className="btn-outline">View All Work →</a>
        </div>
      </Reveal>

      {/* Grid */}
      <div
        className="projects-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}
      >
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  return (
    <div className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
      {/* Thumbnail */}
      <div style={{
        height:         200,
        background:     p.bgGrad,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontSize:       '4rem',
        position:       'relative',
        overflow:       'hidden',
      }}>
        <span style={{ position: 'relative', zIndex: 1 }}>{p.emoji}</span>
        <div style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(19,21,26,0.9) 100%)',
        }} />
      </div>

      {/* Body */}
      <div style={{ padding: '1.4rem' }}>
        {/* tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              fontSize:   '0.72rem',
              fontWeight: 500,
              color:      'var(--accent)',
              background: 'rgba(0,229,176,0.1)',
              borderRadius: 4,
              padding:    '0.2rem 0.6rem',
              border:     '1px solid rgba(0,229,176,0.2)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {p.title}
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</p>

        {/* links */}
        <div style={{
          display:      'flex',
          gap:          '0.8rem',
          marginTop:    '1.2rem',
          paddingTop:   '1rem',
          borderTop:    '1px solid var(--border)',
        }}>
          <a
            href={p.demo}
            className="social-link"
            style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
          >
            ↗ Live Demo
          </a>
          <a
            href={p.repo}
            className="social-link"
            style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
          >
            ⌥ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
