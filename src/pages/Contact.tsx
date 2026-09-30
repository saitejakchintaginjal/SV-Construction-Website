import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { services } from "../data/services";
import "./Contact.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", service: "", message: "" };

const WEB3FORMS_ACCESS_KEY = "ffe7582b-684c-44be-ac47-b364ed37bf92";
const WHATSAPP_NUMBER = "919986680832";

const contactDetails = [
  { icon: Phone, title: "Call Us", value: "+91 99866 80832", href: "tel:+919986680832" },
  { icon: Mail, title: "Email Us", value: "svconstruction267@gmail.com", href: "mailto:svconstruction267@gmail.com" },
  { icon: MapPin, title: "Visit Us", value: "Kadam Nivas, Mangala Mandir Road, Behind Laxmi Rice Mill, Kirana Store, Alkola, Shivamogga - 577204" },
  { icon: Clock, title: "Office Hours", value: "Mon–Fri: 7:00 AM – 5:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.service) nextErrors.service = "Please select a service.";
    if (!form.message.trim()) nextErrors.message = "Tell us a bit about your project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending || !validate()) return;
    setSending(true);
    setSendError(false);
    setSubmitted(false);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${form.name} — ${form.service}`,
          from_name: "SV Construction Website",
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          service: form.service,
          message: form.message,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setSubmitted(true);
      setForm(initialState);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const whatsappHref = () => {
    const lines = [
      "Hello SV Construction and Interiors, I'd like to enquire about a project.",
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        breadcrumb="Contact"
        title="Let's Talk About Your Project"
        description="Share a few details and our team will follow up with a detailed estimate within 48 hours."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal variant="left" className="contact-details">
            {contactDetails.map((detail, i) => (
              <div key={detail.title} className="contact-detail-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="icon-badge">
                  <detail.icon size={20} />
                </div>
                <div>
                  <h3>{detail.title}</h3>
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    <p>{detail.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-map" role="img" aria-label="Map showing SV Construction and Interiors office location">
              <MapPin size={28} className="contact-map__pin" />
              <span>Kadam Nivas, Mangala Mandir Road, Behind Laxmi Rice Mill, Kirana Store, Alkola, Shivamogga - 577204</span>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="contact-form-wrap">
            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Thanks — your message is in!</strong>
                  <p>A member of our team will reach out within 48 hours.</p>
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className={`contact-form__field ${errors.name ? "contact-form__field--error" : ""}`}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Abc"
                  />
                  {errors.name && <span className="contact-form__error">{errors.name}</span>}
                </div>
                <div className={`contact-form__field ${errors.email ? "contact-form__field--error" : ""}`}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="abc@gmail.com"
                  />
                  {errors.email && <span className="contact-form__error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="phone">Phone Number (optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="7777777777"
                  />
                </div>
                <div className={`contact-form__field ${errors.service ? "contact-form__field--error" : ""}`}>
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" value={form.service} onChange={handleChange("service")}>
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span className="contact-form__error">{errors.service}</span>}
                </div>
              </div>

              <div className={`contact-form__field ${errors.message ? "contact-form__field--error" : ""}`}>
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your project — scope, timeline, and location."
                />
                {errors.message && <span className="contact-form__error">{errors.message}</span>}
              </div>

              {sendError && (
                <p className="contact-form__send-error" role="alert">
                  Sorry, we couldn't send your request. Please try again, or contact us on WhatsApp or by phone.
                </p>
              )}

              <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
                {sending ? "Sending…" : "Submit Request"}
              </button>

              <a
                className="btn btn--whatsapp btn--block"
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Chat on WhatsApp instead
              </a>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
