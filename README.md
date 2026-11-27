# Deepak Kumawat — Premium Robotics Engineer Portfolio

Award-grade, editorial-dark personal portfolio. React + TypeScript + Vite, custom
CSS design system, Framer Motion. No stock imagery — every visual is original,
hand-built SVG / canvas technical artwork. Inspired by the layout, typography
and motion language of `https://jessemartinezdesign.com/`, with fully original
identity, content and palette.

## Identity

- **Name:** Deepak Kumawat
- **Title:** Head of Product Development & Robotics Engineer
- **Location:** Jaipur, Rajasthan, India
- **Company:** RoboSiddhi Private Limited
- **Email:** dk8166050@gmail.com
- **Phone:** +91 8890879233
- **LinkedIn / GitHub:** clearly-labelled placeholders (root links) until real
  profile URLs are provided. No social profile URLs are invented.

## Sections

Hero · About · Experience · Selected Work (6 case studies) · Skills / Expertise ·
Education · Contact · Footer. Navigation: Home / Work / About / Expertise / Contact
with smooth scroll, active-section indication and responsive mobile menu.

## Interactions

Staggered scroll reveals, drawn-in technical SVG, lightweight canvas wireframe
accents (no Three.js), subtle scroll parallax, typed intro, animated links,
custom cursor, custom scrollbar, loading screen, back-to-top. Full
`prefers-reduced-motion` support.

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Tech stack

React 19 · TypeScript · Vite · Framer Motion · Fontsource (self-hosted
**Space Mono** + **Fraunces Variable**) · custom CSS design system. No router
(single-page anchored sections), no unnecessary packages.

## Structure

```
src/
  components/    Nav, Cursor, Scrollbar, Loader, Reveal, AnimatedLink,
                 Typewriter, WireframeShape, Project, ProjectVisual, Pill...
  sections/      Hero, About, Experience, Work, Expertise, Education, Contact, Footer
  data/          site, projects, experience, expertise, education
  hooks/         useActiveSection, useInView
  lib/           motion tokens
  styles/        tokens, base, typography, motion, layout, components, sections
```

## Quality

Semantic HTML, skip link, keyboard-accessible controls, `aria-current`,
focus-visible states, no horizontal overflow (320px→2560px verified), no console
errors, no TypeScript errors, SEO metadata + JSON-LD, self-hosted fonts, no
broken links, no lorem ipsum, no invented statistics/testimonials/URLs.
