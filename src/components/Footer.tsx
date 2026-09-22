import { Link } from "react-router-dom";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";
import { services } from "../data/services";
import "./Footer.css";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__brand">
            <span className="footer__brand-icon">
              <HardHat size={20} strokeWidth={2.2} />
            </span>
            <span>
              SV <strong>Construction</strong>
            </span>
          </Link>
          <p>
            Licensed general contractor delivering residential, commercial, and industrial
            projects with uncompromising quality and transparent communication since 2004.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link to={`/services#${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in Touch</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              <span>4820 Industrial Pkwy, Suite 200, Springfield</span>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+18005550142">(800) 555-0142</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:projects@svconstruction.com">projects@svconstruction.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} SV Construction. All rights reserved.</p>
          <p>License #GC-0198374 · Bonded &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
