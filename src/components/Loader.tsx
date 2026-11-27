import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";

const EASE = [0.075, 0.82, 0.165, 1] as const;

/**
 * Brief loading screen; calls onComplete when it exits.
 * Skipped under prefers-reduced-motion.
 */
export function Loader({ onComplete }: { onComplete: () => void }) {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const delay = reduceMotion ? 0 : 1150;
    const t = window.setTimeout(() => setShow(false), delay);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence
      onExitComplete={onComplete}
      initial={!reduceMotion}
    >
      {show && (
        <motion.div
          className="loader"
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          aria-hidden="true"
        >
          <div className="loader__meta">
            <span>{site.name}</span>
            <span>{site.location}</span>
          </div>

          <motion.div
            className="loader__mark"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {site.shortName}
            <span style={{ color: "var(--accent)" }}>.</span>
          </motion.div>

          <div>
            <div className="loader__meta" style={{ marginBottom: 10 }}>
              <span>Robotics · Embedded · Hardware</span>
              <span>Portfolio</span>
            </div>
            <motion.div
              className="loader__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
