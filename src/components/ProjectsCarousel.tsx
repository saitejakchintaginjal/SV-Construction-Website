import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./ProjectsCarousel.css";

const slides = [
  { src: "/projects/kanasu-residence-day.jpg", title: "Kanasu Residence" },
  { src: "/projects/residence-modern-wood-night.jpg", title: "Modern Family Residence" },
  { src: "/projects/rooftop-terrace-residence-day.jpg", title: "Rooftop Terrace Residence" },
  { src: "/projects/gokul-residence-day.jpg", title: "Gokul Residence" },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="projects-carousel">
      <div className="projects-carousel__viewport">
        <div
          className="projects-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="projects-carousel__slide" key={slide.src}>
              <img src={slide.src} alt={slide.title} loading="lazy" />
              <span className="projects-carousel__caption">{slide.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-carousel__dots">
        {slides.map((slide, i) => (
          <span
            key={slide.src}
            className={`projects-carousel__dot ${i === index ? "projects-carousel__dot--active" : ""}`}
          />
        ))}
      </div>

      <div className="projects-carousel__cta">
        <Link to="/projects" className="btn btn--primary">
          View Projects <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
