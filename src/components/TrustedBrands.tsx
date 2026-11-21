import Reveal from "./Reveal";
import { trustedBrands } from "../data/brands";
import "./TrustedBrands.css";

export default function TrustedBrands() {
  return (
    <section className="section trusted-brands">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">Materials We Build With</span>
          <h2>We Use Only Trusted Brands</h2>
        </Reveal>

        <div className="trusted-brands__grid">
          {trustedBrands.map((brand, i) => (
            <Reveal key={brand.name} delay={(i % 7) * 50} variant="scale" className="trusted-brands__item">
              <img src={brand.logo} alt={brand.name} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
