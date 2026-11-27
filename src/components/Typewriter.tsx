import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  text: string;
  /** start when true */
  start?: boolean;
  /** ms per character */
  speed?: number;
  /** initial delay in ms */
  delay?: number;
}

/**
 * Progressive character reveal. The full string stays in the DOM for
 * screen readers; the animated copy is aria-hidden.
 */
export function Typewriter({
  text,
  start = true,
  speed = 16,
  delay = 0,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [animated, setAnimated] = useState(0);

  // reset animation state when inputs change (render-phase adjustment)
  const resetKey = `${text}${start}`;
  const [lastKey, setLastKey] = useState(resetKey);
  if (resetKey !== lastKey) {
    setLastKey(resetKey);
    setAnimated(0);
  }

  useEffect(() => {
    if (reduceMotion || !start) return;

    let raf = 0;
    let timeout = 0;
    const begin = () => {
      const started = performance.now();
      const tick = (now: number) => {
        const elapsed = now - started - delay;
        const next = Math.max(0, Math.min(text.length, Math.floor(elapsed / speed)));
        setAnimated(next);
        if (next < text.length) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    timeout = window.setTimeout(begin, 0);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [text, start, speed, delay, reduceMotion]);

  const count = reduceMotion ? text.length : start ? Math.min(animated, text.length) : 0;

  return (
    <span className="tw">
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
    </span>
  );
}
