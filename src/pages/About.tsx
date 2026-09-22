import { Target, Eye, HeartHandshake, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import StatsBar from "../components/StatsBar";
import CTASection from "../components/CTASection";
import "./About.css";

const values = [
  {
    icon: Target,
    title: "Accountability",
    description: "We own our timelines and our budgets. If something changes, you hear it from us first.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Itemized bids, weekly reporting, and open-book change orders — no surprises at closeout.",
  },
  {
    icon: HeartHandshake,
    title: "Craftsmanship",
    description: "Every trade on site is held to the same standard: work we'd be proud to put our name on.",
  },
  {
    icon: Users,
    title: "Safety First",
    description: "Zero lost-time incidents in 2024. Every crew is trained, certified, and equipped properly.",
  },
];

const timeline = [
  { year: "2004", title: "Company Founded", description: "SV Construction opens its doors with a three-person crew and a single residential contract." },
  { year: "2010", title: "Commercial Division Launched", description: "Expanded into office and retail construction, completing our first ground-up commercial build." },
  { year: "2015", title: "In-House Trades Expansion", description: "Brought electrical, mechanical, and plumbing crews in-house to tighten schedules and quality control." },
  { year: "2020", title: "100+ Projects Milestone", description: "Crossed 100 completed projects across residential, commercial, and industrial sectors." },
  { year: "2024", title: "340+ Projects & Growing", description: "Now a 45-person team delivering projects across the region with a 98% on-time completion rate." },
];

const leadership = [
  { name: "Sandra Vaughn", role: "Founder & CEO", bio: "20+ years leading commercial and residential builds from bid to handoff." },
  { name: "Victor Alaniz", role: "VP of Operations", bio: "Oversees scheduling, subcontractor relationships, and field operations across all active sites." },
  { name: "Renee Castillo", role: "Director of Safety & Compliance", bio: "Built SV's safety program from the ground up — zero lost-time incidents since 2022." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About SV Construction"
        breadcrumb="About"
        title="Two Decades of Building With Integrity"
        description="What started as a three-person residential crew has grown into a full-service general contractor trusted with some of the region's most complex commercial and industrial projects."
      />

      <StatsBar />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Built on Trust, Grown Through Referrals</h2>
            <p>
              SV Construction was founded in 2004 on a simple premise: do the work right, communicate
              honestly, and the business will follow. More than two decades later, the majority of our
              projects still come from repeat clients and referrals — a track record we protect on
              every job site, every day.
            </p>
            <p>
              Today we run in-house residential, commercial, and industrial divisions supported by
              licensed electrical, mechanical, and plumbing crews — giving clients a single accountable
              partner instead of a patchwork of subcontractors.
            </p>
          </div>
          <div className="about-intro__panel">
            <h3>Mission</h3>
            <p>
              To deliver construction projects that exceed expectations in quality, safety, and
              schedule — building lasting relationships one project at a time.
            </p>
            <h3>Vision</h3>
            <p>
              To be the region's most trusted general contractor, known equally for the buildings we
              construct and the way we treat the people who commission them.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="grid grid--4">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="icon-badge">
                  <value.icon size={22} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Our Journey</span>
            <h2>Two Decades of Milestones</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year} className="timeline__item">
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Leadership</span>
            <h2>The Team Behind Every Build</h2>
          </div>
          <div className="grid grid--3">
            {leadership.map((person) => (
              <div key={person.name} className="leader-card">
                <div className="leader-card__avatar">{person.name.split(" ").map((n) => n[0]).join("")}</div>
                <h3>{person.name}</h3>
                <p className="leader-card__role">{person.role}</p>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
