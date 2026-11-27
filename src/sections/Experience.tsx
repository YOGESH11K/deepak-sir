import { Reveal } from "../components/Reveal";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container section__inner">
        <Reveal x={-100}>
          <p className="section-label">
            <span className="accent">+</span> PROFESSIONAL EXPERIENCE
          </p>
        </Reveal>

        <div className="split">
          <div className="exp__head">
            <Reveal x={-60} delay={0.1}>
              <h2 id="experience-title" style={{ color: "var(--fg-dim)" }}>
                {experience.duration}
              </h2>
              <h1 className="exp__company">{experience.company}</h1>
              <p className="exp__role">{experience.position}</p>
              <p className="exp__meta">
                <span>{experience.location}</span>
                <span>{experience.duration}</span>
              </p>
            </Reveal>
          </div>

          <ol className="exp__list">
            {experience.responsibilities.map((r, i) => (
              <Reveal as="li" key={r} className="exp__item" y={30} delay={0.05 * i}>
                <span className="exp__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{r}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
