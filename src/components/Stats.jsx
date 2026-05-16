import { stats } from '../data/portfolio';
import Reveal from './Reveal';

export default function Stats() {
  return (
    <div
      className="stats-bar"
      style={{
        display:      'flex',
        margin:       '0 8%',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {stats.map((s, i) => (
        <Reveal key={i} delay={i * 80} style={{ flex: 1 }}>
          <div
            className="stat-item"
            style={{
              padding:     '2rem 1.5rem',
              textAlign:   'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              transition:  'background 0.2s',
              cursor:      'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{
              display:    'block',
              fontFamily: 'var(--font-display)',
              fontSize:   '2.2rem',
              fontWeight: 800,
              color:      'var(--accent)',
            }}>
              {s.num}
            </span>
            <span style={{
              fontSize:      '0.82rem',
              color:         'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {s.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
