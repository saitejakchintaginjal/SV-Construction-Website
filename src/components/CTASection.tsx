import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Ready to break ground on your next project?</h2>
          <p>Tell us about your project and we'll get back to you with a detailed estimate within 48 hours.</p>
        </div>
        <div className="cta__actions">
          <Link to="/contact" className="btn btn--primary">
            Request a Free Estimate
          </Link>
          <a href="tel:+18005550142" className="cta__phone">
            <PhoneCall size={18} />
            (800) 555-0142
          </a>
        </div>
      </div>
    </section>
  );
}
