import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (one-shot).
 */
export function useInView(threshold = 0.12) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}
