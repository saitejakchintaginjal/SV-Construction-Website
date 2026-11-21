import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { serviceAreas } from "../data/serviceAreas";
import "./ServiceAreas.css";

export default function ServiceAreas() {
  return (
    <section className="section service-areas">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">Where We Work</span>
          <h2>Proudly Serving Karnataka</h2>
          <p>We take on residential, commercial, and interior projects across these cities.</p>
        </Reveal>

        <div className="service-areas__grid">
          {serviceAreas.map((city, i) => (
            <Reveal key={city} delay={i * 60} variant="scale" className="service-areas__chip">
              <MapPin size={16} />
              <span>{city}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
