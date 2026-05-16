import { owner } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      textAlign:  'center',
      padding:    '2rem',
      fontSize:   '0.82rem',
      color:      'var(--muted)',
      borderTop:  '1px solid var(--border)',
    }}>
      © {year} {owner.name} — Crafted with ☕ and passion.
    </footer>
  );
}
