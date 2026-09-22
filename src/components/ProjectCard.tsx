import { Images, MapPin, ZoomIn } from "lucide-react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  onOpen?: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasMultiple = project.images.length > 1;

  return (
    <article className={`project-card ${onOpen ? "project-card--clickable" : ""}`}>
      <button
        type="button"
        className="project-card__media"
        onClick={() => onOpen?.(project)}
        aria-label={`View photos of ${project.title}`}
        disabled={!onOpen}
      >
        <img src={project.images[0]} alt={project.title} loading="lazy" />
        <span className="project-card__scrim" />
        <span className="project-card__category">{project.category}</span>
        {hasMultiple && (
          <span className="project-card__count">
            <Images size={13} /> {project.images.length}
          </span>
        )}
        {onOpen && (
          <span className="project-card__media-overlay">
            <ZoomIn size={22} />
          </span>
        )}
      </button>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__location">
          <MapPin size={14} /> {project.location}
        </p>
        <p>{project.summary}</p>
      </div>
    </article>
  );
}
