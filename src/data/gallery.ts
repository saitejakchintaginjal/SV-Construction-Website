export const galleryCategories = [
  "Proposed Elevation",
  "Floor Plan",
  "3D Design",
  "Interior",
  "Completed Work",
  "Build Journey",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  src: string;
  title: string;
  category: GalleryCategory;
}

/*
 * To add a photo: drop the image file into /public/gallery/ and add an entry below,
 * e.g. { src: "/gallery/villa-front-elevation.jpg", title: "Villa — Front Elevation", category: "Proposed Elevation" }.
 * Categories with no photos are hidden automatically.
 */
export const galleryItems: GalleryItem[] = [
  { src: "/gallery/sweet-home-journey-collage.jpg", title: "Sweet Home — Proposed → Under Construction → Delivered", category: "Build Journey" },
  { src: "/gallery/dream-home-journey-collage.jpg", title: "Dream Home — Proposed → Under Construction → Delivered", category: "Build Journey" },
  { src: "/gallery/sweet-home-proposed-elevation.jpg", title: "Sweet Home — Proposed Elevation", category: "Completed Work" },
  { src: "/projects/kanasu-residence-lounge.jpg", title: "Kanasu Residence — Reading Lounge", category: "Interior" },
  { src: "/projects/kanasu-residence-day.jpg", title: "Kanasu Residence — Day View", category: "Completed Work" },
  { src: "/projects/kanasu-residence-night.jpg", title: "Kanasu Residence — Night View", category: "Completed Work" },
  { src: "/projects/residence-modern-wood-night.jpg", title: "Modern Family Residence", category: "Completed Work" },
  { src: "/projects/rooftop-terrace-residence-day.jpg", title: "Rooftop Terrace Residence", category: "Completed Work" },
  { src: "/projects/dream-house-night.jpg", title: "Dream House", category: "Completed Work" },
  { src: "/projects/gokul-residence-day.jpg", title: "Gokul Residence", category: "Completed Work" },
];
