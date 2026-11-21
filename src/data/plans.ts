export interface Plan {
  name: string;
  pricePerSqFt: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

/*
 * Inclusions below are placeholders describing typical tiering — replace each
 * feature list with the real scope of materials and fittings for that package.
 */
export const plans: Plan[] = [
  {
    name: "Basic",
    pricePerSqFt: 2149,
    tagline: "A solid, no-frills build for budget-conscious homeowners.",
    features: [
      "RCC framed structure",
      "Standard electrical & plumbing",
      "Vitrified tile flooring",
      "Basic sanitaryware & fittings",
    ],
  },
  {
    name: "Essential",
    pricePerSqFt: 2349,
    tagline: "Our most-chosen package — upgraded finishes at a fair price.",
    features: [
      "Everything in Basic",
      "Branded electrical & plumbing fixtures",
      "Modular kitchen provision",
      "Premium tile flooring",
    ],
    highlighted: true,
  },
  {
    name: "Standard",
    pricePerSqFt: 2499,
    tagline: "Our top-tier package for a fully finished, premium home.",
    features: [
      "Everything in Essential",
      "Designer flooring & false ceiling",
      "Premium CP fittings & sanitaryware",
    ],
  },
];
