import type { Project as ProjectType } from "../data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { useInView } from "../hooks/useInView";

export function Project({ project }: { project: ProjectType }) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <article
      ref={ref}
      id={project.id}
      className={`project draw-group ${inView ? "is-visible" : ""}`}
      data-cursor="VIEW"
      aria-labelledby={`${project.id}-name`}
    >
      {/* left */}
      <div className="project__left">
        <p className="project__cat">{project.category}</p>
        <span className="project__num" aria-hidden="true">
          {project.number}
        </span>
        <span className="visually-hidden">Project {project.number}</span>
        <h3 className="project__name" id={`${project.id}-name`}>
          {project.name}
        </h3>
      </div>

      {/* visual */}
      <div className="project__visual-wrap">
        <figure className="project__visual">
          <ProjectVisual id={project.visual} />
          <figcaption className="visually-hidden">{project.name} — original technical artwork</figcaption>
          <span className="project__visual-tag" aria-hidden="true">
            <span className="accent">+</span> {project.visualTag}
          </span>
        </figure>
      </div>

      {/* right */}
      <div className="project__right">
        <div>
          <p className="project__field-label">Description</p>
          <p className="project__desc">{project.description}</p>
        </div>

        <div>
          <p className="project__field-label">Focus</p>
          <div className="project__pills">
            {project.focus.map((f) => (
              <span className="pill" key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="project__field-label">Details</p>
          <ul className="project__detail-list">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        {project.coverage && (
          <div>
            <p className="project__field-label">Coverage</p>
            <p className="coverage">
              {project.coverage.map((c, i) => (
                <span key={c.outlet}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <span className="accent">+</span> {c.outlet} ({c.year}) — {c.note}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
