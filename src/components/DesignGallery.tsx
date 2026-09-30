import { useMemo, useState } from "react";
import { ZoomIn } from "lucide-react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { galleryCategories, galleryItems } from "../data/gallery";
import "./DesignGallery.css";

const availableCategories = galleryCategories.filter((c) => galleryItems.some((item) => item.category === c));

export default function DesignGallery() {
  const [active, setActive] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">Design Gallery</span>
          <h2>Spaces designed to be lived in</h2>
          <p>Tap any design to see it up close.</p>
        </Reveal>

        <div className="design-gallery__filter" role="tablist" aria-label="Gallery categories">
          {["All", ...availableCategories].map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              className={`projects-filter__btn ${active === category ? "projects-filter__btn--active" : ""}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="design-gallery__grid" key={active}>
          {visible.map((item, i) => (
            <Reveal key={item.src} delay={(i % 6) * 60} variant="scale">
              <button
                type="button"
                className="design-gallery__item"
                onClick={() => setOpenIndex(i)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="design-gallery__caption">
                  <span className="design-gallery__tag">{item.category}</span>
                  <span className="design-gallery__title">{item.title}</span>
                </span>
                <span className="design-gallery__zoom">
                  <ZoomIn size={20} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          project={{
            slug: "design-gallery",
            title: "Design Gallery",
            category: "Residential",
            location: "",
            summary: "",
            images: visible.map((item) => item.src),
          }}
          captions={visible.map((item) => `${item.title} · ${item.category}`)}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
