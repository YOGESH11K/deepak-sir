import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container section__inner">
        <Reveal x={-100}>
          <p className="section-label">
            <span className="accent">+</span> ABOUT
          </p>
          <h1 id="about-title" className="about__title">
            ABOUT<span className="accent"> / </span>THE ENGINEER
          </h1>
        </Reveal>

        <div className="split">
          <Reveal x={-60} delay={0.1}>
            <p className="label" style={{ marginBottom: 14 }}>
              {site.title}
            </p>
            <p className="note">
              <span className="note__mark" aria-hidden="true">+</span>
              Robotics Engineering · Product Development · Embedded Systems · PCB Design ·
              Mechanical CAD · UAVs · STEM Products · Hardware Prototyping · Robotics Software.
            </p>

            <dl className="about__meta">
              <div className="about__meta-row">
                <dt>Role</dt>
                <dd>{site.title}</dd>
              </div>
              <div className="about__meta-row">
                <dt>Base</dt>
                <dd>{site.location}</dd>
              </div>
              <div className="about__meta-row">
                <dt>Company</dt>
                <dd>RoboSiddhi Private Limited</dd>
              </div>
              <div className="about__meta-row">
                <dt>Since</dt>
                <dd>June 2025</dd>
              </div>
            </dl>
          </Reveal>

          <div className="about__prose">
            <Reveal y={40} delay={0.15}>
              <p>
                I am a <strong>Robotics Engineer</strong> and <strong>Product Developer</strong>{" "}
                working at the intersection of electronics, embedded systems, robotics, mechanical
                design and software.
              </p>
            </Reveal>
            <Reveal y={40} delay={0.25}>
              <p>
                My work involves transforming ideas into working products through{" "}
                <strong>PCB design</strong>, firmware development, mechanical CAD, rapid
                prototyping, robotics integration and testing.
              </p>
            </Reveal>
            <Reveal y={40} delay={0.35}>
              <p>
                I enjoy building things that <strong>move beyond screens</strong> and solve
                real-world problems.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
