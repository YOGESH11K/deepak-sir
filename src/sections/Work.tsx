import { Reveal } from "../components/Reveal";
import { Project } from "../components/Project";
import { projects } from "../data/projects";

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container section__inner">
        <Reveal x={-100}>
          <p className="section-title" id="work-title">
            <span className="accent">+</span> Selected Work
          </p>
        </Reveal>

        <p className="work__count" aria-hidden="true">
          <span>{projects.length} case studies</span>
          <span>Hardware · PCB · Robotics · Product</span>
        </p>

        <div className="draw-group">
          {projects.map((p) => (
            <Project key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
