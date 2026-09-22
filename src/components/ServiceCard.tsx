import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { iconMap } from "./icon-map";
import type { Service } from "../data/services";
import "./ServiceCard.css";

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export default function ServiceCard({ service, compact }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article id={service.slug} className={`service-card ${compact ? "service-card--compact" : ""}`}>
      <div className="icon-badge">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3>{service.title}</h3>
      <p>{compact ? service.summary : service.description}</p>

      {!compact && (
        <ul className="service-card__features">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      <Link to="/contact" className="service-card__link">
        Request a quote <ArrowRight size={15} />
      </Link>
    </article>
  );
}
