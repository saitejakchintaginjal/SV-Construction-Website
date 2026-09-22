import { Link } from "react-router-dom";
import { HardHat } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <div className="not-found__icon">
          <HardHat size={32} />
        </div>
        <h1>404</h1>
        <p>This page hasn't been built yet. Let's get you back on solid ground.</p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
