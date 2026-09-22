import { Link } from "react-router-dom";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";
import { services } from "../data/services";
import { FacebookIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from "./brand-icons";
import "./Footer.css";

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
            <a href="https://wa.me/18005550142" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
            <a href="https://instagram.com/svconstruction" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://facebook.com/svconstruction" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://linkedin.com/company/svconstruction" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
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
