import { Target, Eye, HeartHandshake, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import StatsBar from "../components/StatsBar";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
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
    description: "Every crew is trained, certified, and equipped to work safely on every site, every day.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About SV Construction and Interiors"
        breadcrumb="About"
        title="Building With Integrity Since 2020"
        description="From our first residential project to today, we've grown into a trusted general contractor known for craftsmanship, clear communication, and finishing what we start."
      />

      <StatsBar />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <Reveal variant="left">
            <span className="eyebrow">Our Story</span>
            <h2>Built on Trust, Grown Through Referrals</h2>
            <p>
              SV Construction and Interiors was founded in 2020 on a simple premise: do the work right, communicate
              honestly, and the business will follow. Since then, the majority of our projects have come from
              repeat clients and referrals — a track record we protect on every job site, every day.
            </p>
            <p>
              We run in-house residential divisions supported by licensed electrical, mechanical, and plumbing
              crews — giving clients a single accountable partner instead of a patchwork of subcontractors.
            </p>
          </Reveal>
          <Reveal variant="right" delay={120} className="about-intro__panel">
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
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">What Drives Us</span>
            <h2>Our Core Values</h2>
          </Reveal>
          <div className="grid grid--4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="value-card">
                <div className="icon-badge">
                  <value.icon size={22} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
