import { useEffect, useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * Reveals its children once they scroll into view. CSS does the animating —
 * see `.reveal` in index.css, which also honours prefers-reduced-motion.
 *
 * Pass `immediate` to animate in on mount instead. That's the hero entrance:
 * content paints on the first frame and animates on top of itself, rather than
 * being gated behind a loading screen.
 */
export const Reveal = ({
  children,
  delay = 0,
  immediate = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) => {
  const [ref, inView] = useScrollAnimation(0.1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!immediate) return undefined;
    // Flip on the frame after paint so the transition actually runs.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [immediate]);

  const visible = immediate ? mounted : inView;

  return (
    <Tag
      ref={immediate ? undefined : ref}
      className={`reveal${visible ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
