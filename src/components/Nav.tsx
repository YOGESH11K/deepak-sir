import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, sectionIds, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const EASE = [0.075, 0.82, 0.165, 1] as const;

/** Map active section ids to the nav href that should light up. */
const SECTION_TO_NAV: Record<string, string> = {
  home: "#home",
  about: "#about",
  experience: "#about",
  work: "#work",
  expertise: "#expertise",
  education: "#about",
  contact: "#contact",
};

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  // active nav item derived from current section
  const activeHref = SECTION_TO_NAV[activeSection] ?? "";

  // lock body scroll while mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 8;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      // update hash without jumping
      history.replaceState(null, "", href);
    }
    setMenuOpen(false);
  };

  return (
    <header className="nav">
      <a
        className="nav__brand"
        href="#home"
        data-cursor="HOME"
        onClick={(e) => handleNavClick(e, "#home")}
      >
        {site.shortName}
        <span className="accent">.</span>
      </a>

      <nav aria-label="Primary">
        <ul className="nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="nav__link"
                href={link.href}
                data-cursor={link.label.toUpperCase()}
                aria-current={activeHref === link.href ? "true" : undefined}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className="nav__toggle-icon" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <ul className="mobile-nav__list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.06 * i + 0.1 }}
                >
                  <a
                    className="mobile-nav__link"
                    href={link.href}
                    aria-current={activeHref === link.href ? "true" : undefined}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.label}</span>
                    <span className="num">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-nav__footer">
              <p>{site.name}</p>
              <p>{site.title}</p>
              <p style={{ marginTop: 8 }}>{site.location}</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
