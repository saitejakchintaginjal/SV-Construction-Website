import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { plans } from "../data/plans";
import "./PlansSection.css";

export default function PlansSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">Construction Packages</span>
          <h2>Choose the Plan That Fits Your Build</h2>
          <p>Transparent per-square-foot pricing so you know what to expect before we break ground.</p>
        </Reveal>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 90}
              variant="scale"
              className={`plan-card ${plan.highlighted ? "plan-card--highlighted" : ""}`}
            >
              {plan.highlighted && <span className="plan-card__badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-card__price">
                &#8377;{plan.pricePerSqFt.toLocaleString("en-IN")}
                <span>/sq ft</span>
              </p>
              <p className="plan-card__tagline">{plan.tagline}</p>
              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`btn btn--block ${plan.highlighted ? "btn--primary" : "btn--outline-dark"}`}
              >
                Get a Quote
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
