import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import StatsBar from "../components/StatsBar";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";
import ConstructionAnimation from "../components/ConstructionAnimation";
import Counter from "../components/Counter";
import Reveal from "../components/Reveal";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import "./Home.css";

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description: "Every project is backed by comprehensive bonding and insurance coverage for total peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time, On-Budget",
    description: "98% of our projects finish on schedule thanks to disciplined project management and planning.",
  },
  {
    icon: Award,
    title: "20+ Years of Craftsmanship",
    description: "Two decades of hands-on experience across residential, commercial, and industrial builds.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__pattern" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow hero__eyebrow-in">Licensed General Contractor</span>
            <h1 className="hero__title-in">
              Building the Places <span>Where Life Happens</span>
            </h1>
            <p className="hero__text-in">
              SV Construction and Interiors delivers residential, commercial, and industrial projects with
              precision scheduling, transparent budgets, and craftsmanship built to last.
            </p>
            <div className="hero__actions hero__actions-in">
              <Link to="/contact" className="btn btn--primary">
                Request a Free Estimate <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn--outline">
                View Our Projects
              </Link>
            </div>
            <ul className="hero__checklist hero__checklist-in">
              <li><CheckCircle2 size={16} /> Free on-site consultation</li>
              <li><CheckCircle2 size={16} /> Transparent, itemized bids</li>
              <li><CheckCircle2 size={16} /> Dedicated project manager</li>
            </ul>
          </div>

          <div className="hero__card hero__card-in">
            <div className="hero__card-header">
              <span>Current Project Status</span>
              <span className="hero__card-badge">
                <span className="hero__card-badge-dot" /> On Track
              </span>
            </div>
            <div className="hero__card-row">
              <span>Harborview Office Tower</span>
              <span>82%</span>
            </div>
            <div className="hero__progress">
              <div className="hero__progress-fill" />
            </div>
            <div className="hero__card-grid">
              <div>
                <span className="hero__card-value">5</span>
                <span className="hero__card-label">Months In</span>
              </div>
              <div>
                <span className="hero__card-value">48k</span>
                <span className="hero__card-label">Sq Ft</span>
              </div>
              <div>
                <span className="hero__card-value">0</span>
                <span className="hero__card-label">Safety Incidents</span>
              </div>
            </div>
          </div>
        </div>

        <ConstructionAnimation />
      </section>

      <StatsBar />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">What We Do</span>
            <h2>Comprehensive Construction Services</h2>
            <p>
              From the first excavation to the final walkthrough, our in-house teams handle every
              trade so you get one accountable partner for the entire build.
            </p>
          </Reveal>
          <div className="grid grid--3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} compact />
              </Reveal>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/services" className="btn btn--outline-dark">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt why-us">
        <div className="container why-us__grid">
          <Reveal variant="left" className="why-us__content">
            <span className="eyebrow">Why Choose SV Construction and Interiors</span>
            <h2>A Partner You Can Trust From Blueprint to Handoff</h2>
            <p>
              We built our reputation on doing what we say we'll do — clear communication, honest
              estimates, and a finished product that stands up to inspection years later.
            </p>
            <div className="why-us__list">
              {whyUs.map((item) => (
                <div key={item.title} className="why-us__item">
                  <div className="icon-badge icon-badge--navy">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="why-us__visual">
            <div className="why-us__visual-block why-us__visual-block--1">
              <span className="why-us__visual-value"><Counter value="340+" /></span>
              <span>Projects Completed</span>
            </div>
            <div className="why-us__visual-block why-us__visual-block--2">
              <span className="why-us__visual-value"><Counter value="4.9/5" /></span>
              <span>Average Client Rating</span>
            </div>
            <div className="why-us__visual-block why-us__visual-block--3">
              <span className="why-us__visual-value"><Counter value="0" /></span>
              <span>Lost-Time Incidents (2024)</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Featured Work</span>
            <h2>Recent Projects</h2>
            <p>A look at some of the homes our team has recently designed and built.</p>
          </Reveal>
          <div className="grid grid--3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/projects" className="btn btn--outline-dark">
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Client Feedback</span>
            <h2>What Our Clients Say</h2>
          </Reveal>
          <div className="grid grid--3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 100}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
