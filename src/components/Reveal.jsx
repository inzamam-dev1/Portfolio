import { useInView } from '../hooks/useInView';

export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
