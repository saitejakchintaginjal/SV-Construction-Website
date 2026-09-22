export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "Renovation";
  location: string;
  summary: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "kanasu-residence",
    title: "Kanasu Residence",
    category: "Residential",
    location: "Shivamogga, Karnataka",
    summary:
      "A spacious family residence built for House No. 74 — featuring a private reading lounge, layered balconies, corten-style accents, and a bold corner facade.",
    images: [
      "/projects/kanasu-residence-day.jpg",
      "/projects/kanasu-residence-night.jpg",
      "/projects/kanasu-residence-lounge.jpg",
    ],
  },
  {
    slug: "sweet-home",
    title: "Sweet Home",
    category: "Residential",
    location: "Shivamogga, Karnataka",
    summary:
      "A three-level home with a sculpted stone entry, timber slat screening, and a dramatic open-riser staircase framed in steel.",
    images: ["/projects/sweet-home-night.jpg"],
  },
  {
    slug: "modern-family-residence",
    title: "Modern Family Residence",
    category: "Residential",
    location: "Shivamogga, Karnataka",
    summary:
      "A contemporary family home combining warm timber cladding with textured stone accents and layered cantilevered balconies.",
    images: ["/projects/residence-modern-wood-night.jpg"],
  },
  {
    slug: "rooftop-terrace-residence",
    title: "Rooftop Terrace Residence",
    category: "Residential",
    location: "Shivamogga, Karnataka",
    summary:
      "A multi-level residence built around a shaded rooftop terrace, glass balustrades, and a lush tropical garden setting.",
    images: ["/projects/rooftop-terrace-residence-day.jpg"],
  },
  {
    slug: "dream-house",
    title: "Dream House",
    category: "Residential",
    location: "Shivamogga, Karnataka",
    summary:
      "A compact modern home with a textured stone feature wall and accent lighting that makes a striking street presence after dark.",
    images: ["/projects/dream-house-night.jpg"],
  },
  {
    slug: "gokul-residence",
    title: "Gokul Residence",
    category: "Residential",
    location: "Shivamogga, Karnataka",
    summary:
      "A narrow-plot home designed for Mr. Gokul, featuring CNC-cut timber gates, a rooftop pergola, and a circular window accent.",
    images: ["/projects/gokul-residence-day.jpg"],
  },
];
