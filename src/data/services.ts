export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    summary: "Custom homes and residential builds crafted around how you live.",
    description:
      "From ground-up custom homes to multi-unit residential developments, we manage every phase — design coordination, permitting, site work, and finishing — with the craftsmanship homeowners and developers trust.",
    icon: "home",
    features: ["Custom home builds", "Multi-family developments", "Foundation to finish", "Energy-efficient framing"],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    summary: "Office, retail, and hospitality builds engineered for business.",
    description:
      "We deliver commercial spaces that open on schedule and perform for years. Our teams coordinate closely with architects, owners, and municipal inspectors to keep complex builds moving without surprises.",
    icon: "building-2",
    features: ["Office & retail fit-outs", "Restaurant & hospitality builds", "Tenant improvements", "ADA-compliant design"],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    summary: "Structural upgrades and interior transformations, done right.",
    description:
      "Whether it's a single-room remodel or a full structural renovation, we protect the integrity of the existing structure while modernizing the spaces that matter most.",
    icon: "hammer",
    features: ["Kitchen & bath remodels", "Structural retrofits", "Additions & expansions", "Historic restorations"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary: "One point of accountability from permits to punch list.",
    description:
      "Our project managers own the schedule, the budget, and the subcontractor coordination — giving owners a single point of contact and full visibility from groundbreaking to final walkthrough.",
    icon: "clipboard-check",
    features: ["Budget & schedule control", "Subcontractor coordination", "Permit & compliance management", "Weekly progress reporting"],
  },
  {
    slug: "electrical-mechanical",
    title: "Electrical & Mechanical",
    summary: "Licensed electrical, HVAC, and plumbing systems integration.",
    description:
      "Our in-house and licensed partner crews install and coordinate electrical, mechanical, and plumbing systems so trades stay in sync and inspections pass the first time.",
    icon: "zap",
    features: ["Electrical rough-in & finish", "HVAC installation", "Plumbing systems", "Code compliance & inspections"],
  },
  {
    slug: "site-development",
    title: "Site Development & Excavation",
    summary: "Groundwork, grading, and site prep that sets up every build.",
    description:
      "We handle demolition, excavation, grading, and utility groundwork so the foundation goes in on solid, well-prepared ground — the first and most critical step of any project.",
    icon: "truck",
    features: ["Demolition & clearing", "Excavation & grading", "Utility trenching", "Erosion control"],
  },
];
