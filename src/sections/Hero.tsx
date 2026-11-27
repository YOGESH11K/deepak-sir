import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { WireframeShape } from "../components/WireframeShape";
import { Typewriter } from "../components/Typewriter";
import { EASE } from "../lib/motion";

export function Hero({ loadingComplete }: { loadingComplete: boolean }) {
  const reduceMotion = useReducedMotion();
  const ready = loadingComplete || reduceMotion === true;

  const hiddenLine = { x: -100, opacity: 0 };
  const hiddenDrop = { y: 100, opacity: 0 };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* engineering-inspired decorative artwork */}
      <WireframeShape
        shape="prism"
        size="34vw"
        speed={1}
        parallax={28}
        style={{ right: "-6vw", top: "8%", zIndex: 0 }}
      />
      <WireframeShape
        shape="sphere"
        size="20vw"
        speed={0.7}
        parallax={-22}
        style={{ left: "2vw", bottom: "6%", zIndex: 0, opacity: 0.5 }}
      />

      <div className="hero__inner">
        {/* corner technical labels */}
        <span className="hero__corner hero__corner--tl" aria-hidden="true">
          {site.name} — Portfolio
        </span>
        <span className="hero__corner hero__corner--tr" aria-hidden="true">
          Robotics · Embedded · Hardware
        </span>

        <motion.h1 className="hero__title">
          <motion.span
            className="hero__title-line"
            initial={reduceMotion ? false : hiddenLine}
            animate={ready ? { x: 0, opacity: 1 } : hiddenLine}
            transition={{ duration: 1, ease: EASE, delay: 0 }}
          >
            DEEPAK
          </motion.span>
          <motion.span
            className="hero__title-line hero__title-line--2"
            initial={reduceMotion ? false : hiddenLine}
            animate={ready ? { x: 0, opacity: 1 } : hiddenLine}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          >
            KUMAWAT
            <span style={{ color: "var(--accent)" }}>.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero__roles"
          initial={reduceMotion ? false : hiddenDrop}
          animate={ready ? { y: 0, opacity: 1 } : hiddenDrop}
          transition={{ duration: 1, ease: EASE, delay: 0.45 }}
        >
          <span>ROBOTICS ENGINEER</span>
          <span className="sep" aria-hidden="true">/</span>
          <span>PRODUCT DEVELOPER</span>
          <span className="sep" aria-hidden="true">/</span>
          <span>HARDWARE BUILDER</span>
        </motion.p>

        <motion.div
          className="hero__meta"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1, ease: EASE, delay: 0.65 }}
        >
          <p className="hero__intro">
            <span className="label label--accent" style={{ display: "block", marginBottom: 10 }}>
              {site.title}
            </span>
            {site.intro}
          </p>

          <div className="hero__note-wrap">
            <p className="note">
              <span className="note__mark" aria-hidden="true">+</span>
              <Typewriter
                text={`${site.location} — currently building at RoboSiddhi Private Limited.`}
                start={ready}
                speed={14}
                delay={150}
              />
            </p>
          </div>
        </motion.div>

        <span className="hero__corner hero__corner--bl" aria-hidden="true">
          {site.email}
        </span>
        <span className="hero__corner hero__corner--br" aria-hidden="true">
          {site.phone}
        </span>
      </div>
    </section>
  );
}
