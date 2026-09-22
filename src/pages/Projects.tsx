import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import { projects } from "../data/projects";
import "./Projects.css";

const categories = ["All", "Residential", "Commercial", "Industrial", "Renovation"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        breadcrumb="Projects"
        title="Projects We're Proud to Have Built"
        description="A sample of the residential, commercial, industrial, and renovation work our teams have delivered across the region."
      />

      <section className="section">
        <div className="container">
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`projects-filter__btn ${active === category ? "projects-filter__btn--active" : ""}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="projects-empty">No projects found in this category yet.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
