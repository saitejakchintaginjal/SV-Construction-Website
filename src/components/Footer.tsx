import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
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
            <img src="/logo.webp" alt="SV Construction and Interiors" className="footer__brand-logo" />
            <span>
              SV <strong>Construction and Interiors</strong>
            </span>
          </Link>
          <p>
            Turnkey construction, residential and commercial buildings, interiors, and waterproofing
            solutions, delivered with uncompromising quality and transparent communication since 2020.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/919986680832" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
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
              <span>Kadam Nivas, Mangala Mandir Road, Behind Laxmi Rice Mill, Kirana Store, Alkola, Shivamogga - 577204</span>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+919986680832">+91 99866 80832</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:svconstruction267@gmail.com">svconstruction267@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} SV Construction and Interiors. All rights reserved.</p>
          <p>Licensed, Bonded &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
