import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { EASE } from "../lib/motion";
import { AnimatedLink } from "../components/AnimatedLink";
import { WireframeShape } from "../components/WireframeShape";
import { site } from "../data/site";

export function Contact() {
  const reduceMotion = useReducedMotion();

  const blockAnim = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { scaleY: 0 },
          whileInView: { scaleY: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, ease: EASE, delay },
        };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <WireframeShape
          shape="sphere"
          size="55vw"
          speed={0.5}
          style={{ left: "-15vw", top: "10%", zIndex: 0, opacity: 0.35 }}
        />

        <Reveal x={-100}>
          <p className="section-label">
            <span className="accent">+</span> CONTACT
          </p>
          <h1 id="contact-title" className="contact__heading">
            <span className="line">LET'S BUILD</span>
            <span className="line">SOMETHING</span>
            <span className="line">REAL<span style={{ color: "var(--accent)" }}>.</span></span>
          </h1>
        </Reveal>

        {/* reference black + green block composition */}
        <div className="contact__blocks" aria-hidden="true">
          <motion.div className="contact__block contact__block--black" {...blockAnim(0.5)} />
          <motion.div className="contact__block contact__block--green-1" {...blockAnim(0.65)} />
          <motion.div className="contact__block contact__block--green-2" {...blockAnim(0.8)} />
        </div>

        <div className="contact__grid">
          <dl className="contact__list">
            <div className="contact__row">
              <dt>Email</dt>
              <dd>
                <AnimatedLink href={`mailto:${site.email}`} email data-cursor="EMAIL">
                  {site.email}
                </AnimatedLink>
              </dd>
            </div>
            <div className="contact__row">
              <dt>Phone</dt>
              <dd>
                <AnimatedLink href={`tel:${site.phoneHref}`} data-cursor="CALL">
                  {site.phone}
                </AnimatedLink>
              </dd>
            </div>
            <div className="contact__row">
              <dt>Location</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>

          <div className="contact__links">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : 0.9 }}
            >
              <AnimatedLink
                href={`mailto:${site.email}`}
                email
                cursorLabel="EMAIL"
                data-cursor="EMAIL"
                style={{ fontSize: "clamp(13px,1.1vw,18px)" }}
              >
                Start a conversation
              </AnimatedLink>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : 1.05 }}
              className="project__links"
            >
              <span>
                <AnimatedLink
                  href={site.linkedin.url}
                  external
                  cursorLabel="LINKEDIN"
                  data-cursor="LINKEDIN"
                  aria-label="LinkedIn profile — Deepak Kumawat"
                >
                  LinkedIn
                </AnimatedLink>
              </span>

              <span>
                <AnimatedLink
                  href={site.github.url}
                  external
                  cursorLabel="GITHUB"
                  data-cursor="GITHUB"
                  aria-label="GitHub profile (placeholder link — profile URL to be added)"
                >
                  GitHub
                </AnimatedLink>
                <span className="placeholder-tag">placeholder</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
