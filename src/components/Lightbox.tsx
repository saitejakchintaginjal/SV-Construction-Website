import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "../data/projects";
import "./Lightbox.css";

interface LightboxProps {
  project: Project;
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ project, index, onClose, onNavigate }: LightboxProps) {
  const total = project.images.length;

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && total > 1) goPrev();
      if (e.key === "ArrowRight" && total > 1) goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext, total]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} photos`} onClick={onClose}>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous photo"
        >
          <ChevronLeft size={26} />
        </button>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={project.images[index]} alt={`${project.title} — photo ${index + 1} of ${total}`} />
        <figcaption>
          <span className="lightbox__title">{project.title}</span>
          {total > 1 && (
            <span className="lightbox__counter">
              {index + 1} / {total}
            </span>
          )}
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next photo"
        >
          <ChevronRight size={26} />
        </button>
      )}
    </div>
  );
}
