import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
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

const contactDetails = [
  { icon: Phone, title: "Call Us", value: "(800) 555-0142", href: "tel:+18005550142" },
  { icon: Mail, title: "Email Us", value: "projects@svconstruction.com", href: "mailto:projects@svconstruction.com" },
  { icon: MapPin, title: "Visit Us", value: "4820 Industrial Pkwy, Suite 200, Springfield" },
  { icon: Clock, title: "Office Hours", value: "Mon–Fri: 7:00 AM – 5:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
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

            <div className="contact-map" role="img" aria-label="Map showing SV Construction office location">
              <MapPin size={28} className="contact-map__pin" />
              <span>4820 Industrial Pkwy, Suite 200, Springfield</span>
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
                    placeholder="Jane Doe"
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
                    placeholder="jane@email.com"
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
                    placeholder="(800) 555-0142"
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

              <button type="submit" className="btn btn--primary btn--block">
                Submit Request
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
