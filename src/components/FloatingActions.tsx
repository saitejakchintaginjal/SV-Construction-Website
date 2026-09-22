import { useEffect, useState } from "react";
import { Phone, X, MessageSquareText, ArrowUp } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "./brand-icons";
import "./FloatingActions.css";

const WHATSAPP_URL = "https://wa.me/919986680832?text=Hi%20SV%20Construction%20and%20Interiors%2C%20I%27d%20like%20to%20get%20a%20quote.";
const INSTAGRAM_URL = "https://instagram.com/svconstruction";
const CALL_URL = "tel:+919986680832";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fab">
      {showScrollTop && (
        <button
          type="button"
          className="fab__item fab__item--top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
        </button>
      )}

      <div className={`fab__group ${open ? "fab__group--open" : ""}`}>
        <a
          href={CALL_URL}
          className="fab__item fab__item--call"
          style={{ transitionDelay: open ? "0.02s" : "0s" }}
          aria-label="Call SV Construction and Interiors"
        >
          <Phone size={19} />
          <span className="fab__tooltip">Call Us</span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fab__item fab__item--instagram"
          style={{ transitionDelay: open ? "0.09s" : "0s" }}
          aria-label="Message us on Instagram"
        >
          <InstagramIcon size={19} />
          <span className="fab__tooltip">Instagram</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fab__item fab__item--whatsapp"
          style={{ transitionDelay: open ? "0.16s" : "0s" }}
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsAppIcon size={20} />
          <span className="fab__tooltip">WhatsApp</span>
        </a>
      </div>

      <button
        type="button"
        className={`fab__main ${open ? "fab__main--open" : ""}`}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fab__main-icon fab__main-icon--default"><MessageSquareText size={24} /></span>
        <span className="fab__main-icon fab__main-icon--close"><X size={24} /></span>
        {!open && <span className="fab__ping" />}
      </button>
    </div>
  );
}
