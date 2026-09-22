export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "Renovation";
  location: string;
  year: string;
  summary: string;
  stats: { label: string; value: string }[];
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "riverside-family-residence",
    title: "Riverside Family Residence",
    category: "Residential",
    location: "Riverside County",
    year: "2024",
    summary: "A 4,200 sq ft custom home with energy-efficient framing and an open-concept living design.",
    stats: [
      { label: "Size", value: "4,200 sq ft" },
      { label: "Duration", value: "8 months" },
    ],
    gradient: "linear-gradient(135deg, #1f3a5f 0%, #2c5282 100%)",
  },
  {
    slug: "harborview-office-tower",
    title: "Harborview Office Tower — Fit-Out",
    category: "Commercial",
    location: "Downtown Harbor District",
    year: "2023",
    summary: "Full tenant improvement across three floors of Class A office space, delivered ahead of schedule.",
    stats: [
      { label: "Size", value: "48,000 sq ft" },
      { label: "Duration", value: "5 months" },
    ],
    gradient: "linear-gradient(135deg, #142033 0%, #1f3a5f 100%)",
  },
  {
    slug: "north-ridge-distribution-center",
    title: "North Ridge Distribution Center",
    category: "Industrial",
    location: "North Ridge Industrial Park",
    year: "2023",
    summary: "Ground-up 90,000 sq ft warehouse and distribution facility with reinforced loading infrastructure.",
    stats: [
      { label: "Size", value: "90,000 sq ft" },
      { label: "Duration", value: "11 months" },
    ],
    gradient: "linear-gradient(135deg, #3a2a17 0%, #7a4a1f 100%)",
  },
  {
    slug: "maple-street-brownstone",
    title: "Maple Street Brownstone Restoration",
    category: "Renovation",
    location: "Old Town Historic District",
    year: "2022",
    summary: "Full structural retrofit and historic facade restoration preserving original architectural detail.",
    stats: [
      { label: "Size", value: "3,100 sq ft" },
      { label: "Duration", value: "6 months" },
    ],
    gradient: "linear-gradient(135deg, #2c1f14 0%, #5c3a1e 100%)",
  },
  {
    slug: "sunset-plaza-retail",
    title: "Sunset Plaza Retail Center",
    category: "Commercial",
    location: "Sunset Plaza",
    year: "2022",
    summary: "New-build retail center with six tenant spaces, shared parking structure, and landscaped plaza.",
    stats: [
      { label: "Size", value: "22,500 sq ft" },
      { label: "Duration", value: "9 months" },
    ],
    gradient: "linear-gradient(135deg, #1f3a5f 0%, #3a5a80 100%)",
  },
  {
    slug: "cedar-hills-estates",
    title: "Cedar Hills Estates — Phase 1",
    category: "Residential",
    location: "Cedar Hills",
    year: "2021",
    summary: "First phase of a 12-home residential development featuring shared site infrastructure and utilities.",
    stats: [
      { label: "Units", value: "12 homes" },
      { label: "Duration", value: "14 months" },
    ],
    gradient: "linear-gradient(135deg, #142033 0%, #2c5282 100%)",
  },
];
