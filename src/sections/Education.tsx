import { Reveal } from "../components/Reveal";
import { education } from "../data/education";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container section__inner">
        <Reveal x={-100}>
          <p className="section-label">
            <span className="accent">+</span> EDUCATION
          </p>
          <h1 id="education-title" className="about__title" style={{ marginBottom: "clamp(28px,3vw,52px)" }}>
            EDUCATION
          </h1>
        </Reveal>

        <ul className="edu__list">
          {education.map((e, i) => (
            <Reveal as="li" key={e.id} className="edu__item" y={30} delay={0.1 * i}>
              <div>
                <h2 className="edu__degree">{e.degree}</h2>
                <p className="edu__field">{e.field}</p>
              </div>
              <div className="edu__school">
                {e.school}
                <span className="sub">{e.location}</span>
              </div>
              <span className="edu__years">{e.years}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
