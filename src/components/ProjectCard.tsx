import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__media" style={{ background: project.gradient }}>
        <span className="project-card__category">{project.category}</span>
        <span className="project-card__year">{project.year}</span>
        <div className="project-card__media-overlay">
          <ArrowUpRight size={22} />
        </div>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__location">
          <MapPin size={14} /> {project.location}
        </p>
        <p>{project.summary}</p>
        <div className="project-card__stats">
          {project.stats.map((stat) => (
            <div key={stat.label} className="project-card__stat">
              <span className="project-card__stat-value">{stat.value}</span>
              <span className="project-card__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
