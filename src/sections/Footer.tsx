import { useState } from "react";
import { site, navLinks } from "../data/site";

export function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  const backToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", "#home");
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name} · {site.location}
        </p>

        <ul className="footer__links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} data-cursor={l.label.toUpperCase()}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="back-to-top"
          onClick={backToTop}
          data-cursor="TOP"
          aria-label="Back to top"
        >
          Back to top <span className="back-to-top__arrow" aria-hidden="true">↑</span>
        </button>

        <p className="footer__note">
          Robotics · Embedded Systems · PCB Design · Mechanical CAD · Product Development.{" "}
          {site.title} at RoboSiddhi Private Limited. Contact {site.email} · {site.phone}.
        </p>
      </div>
    </footer>
  );
}
