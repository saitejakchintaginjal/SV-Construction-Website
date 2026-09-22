import { ClipboardList, FileSearch, HardHat, KeyRound } from "lucide-react";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { services } from "../data/services";
import "./Services.css";

const process = [
  { icon: FileSearch, step: "01", title: "Consultation & Estimate", description: "We visit the site, understand your goals, and provide a transparent, itemized estimate." },
  { icon: ClipboardList, step: "02", title: "Planning & Permitting", description: "We finalize plans, pull permits, and lock in a realistic schedule before breaking ground." },
  { icon: HardHat, step: "03", title: "Construction", description: "Our crews execute with weekly progress updates so you always know where things stand." },
  { icon: KeyRound, step: "04", title: "Walkthrough & Handoff", description: "A final inspection and walkthrough ensure every detail meets our standard before handoff." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        breadcrumb="Services"
        title="Full-Service Construction, Under One Roof"
        description="From site work to finish carpentry, our in-house teams cover every trade required to take your project from concept to completion."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">How We Work</span>
            <h2>Our Process</h2>
            <p>A clear, repeatable process that keeps every project on schedule and on budget.</p>
          </Reveal>
          <div className="process">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 110} className="process__item">
                <div className="process__step">{item.step}</div>
                <div className="icon-badge icon-badge--navy">
                  <item.icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < process.length - 1 && <div className="process__connector" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
