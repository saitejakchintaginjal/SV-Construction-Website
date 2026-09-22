import type { ReactNode } from "react";
import "./PageHero.css";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__pattern" aria-hidden="true" />
      <div className="container page-hero__inner">
        <p className="page-hero__breadcrumb">Home / {breadcrumb}</p>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p className="page-hero__description">{description}</p>}
        {children}
      </div>
    </section>
  );
}
