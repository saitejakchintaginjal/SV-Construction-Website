export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "SV Construction and Interiors delivered our office build-out two weeks ahead of schedule without cutting a single corner. Communication was constant and the budget never drifted.",
    name: "Daniel Ortega",
    role: "Principal, Harborview Holdings",
  },
  {
    quote:
      "We interviewed five contractors for our custom home. SV was the only team that gave us a realistic timeline — and then hit it. The craftsmanship speaks for itself.",
    name: "Priya Nair",
    role: "Homeowner, Riverside Residence",
  },
  {
    quote:
      "Their project management team caught permitting issues before they became delays. That kind of foresight is rare and it saved us real money.",
    name: "Marcus Webb",
    role: "Development Director, North Ridge Logistics",
  },
];
