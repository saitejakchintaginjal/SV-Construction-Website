import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import { projects, type Project } from "../data/projects";
import "./Projects.css";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

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
        description="A gallery of homes our team has designed and built across Shivamogga. Click any project to view the full set of photos."
      />

      <section className="section">
        <div className="container">
          {categories.length > 2 && (
            <div className="projects-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`projects-filter__btn ${active === category ? "projects-filter__btn--active" : ""}`}
                  onClick={() => setActive(category)}
                >
                  {category}
                  <span className="projects-filter__count">
                    {category === "All" ? projects.length : projects.filter((p) => p.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="grid grid--3" key={active}>
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} variant="scale">
                <ProjectCard project={project} onOpen={(p) => setLightbox({ project: p, index: 0 })} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="projects-empty">No projects found in this category yet.</p>
          )}
        </div>
      </section>

      <CTASection />

      {lightbox && (
        <Lightbox
          project={lightbox.project}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((prev) => (prev ? { ...prev, index } : prev))}
        />
      )}
    </>
  );
}
