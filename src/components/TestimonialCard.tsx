import { Quote } from "lucide-react";
import type { Testimonial } from "../data/testimonials";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card">
      <Quote className="testimonial-card__icon" size={28} />
      <p className="testimonial-card__quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="testimonial-card__author">
        <span className="testimonial-card__avatar">{testimonial.name.charAt(0)}</span>
        <div>
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__role">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
