import { Reveal } from "../components/Reveal";
import { expertiseGroups } from "../data/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="section" aria-labelledby="expertise-title">
      <div className="container section__inner">
        <Reveal x={-100}>
          <p className="section-label">
            <span className="accent">+</span> EXPERTISE
          </p>
          <h1 id="expertise-title" className="about__title" style={{ marginBottom: "clamp(28px,3vw,52px)" }}>
            SKILLS<span className="accent"> / </span>EXPERTISE
          </h1>
        </Reveal>

        <ul className="expertise__grid">
          {expertiseGroups.map((g, i) => (
            <Reveal as="li" key={g.id} className="expertise__group" y={40} delay={0.08 * i}>
              <span className="expertise__num">{g.num}</span>
              <h2 className="expertise__title">{g.title}</h2>
              <ul className="expertise__list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
