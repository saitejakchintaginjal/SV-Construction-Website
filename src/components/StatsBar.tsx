import Counter from "./Counter";
import "./StatsBar.css";

// Team size is a placeholder estimate — update with the real headcount.
const stats = [
  { value: "2020", label: "Founded", animate: false },
  { value: "15+", label: "Projects Completed", animate: true },
  { value: "12+", label: "Team Members", animate: true },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stats-bar__item">
            <span className="stats-bar__value">
              {stat.animate ? <Counter value={stat.value} /> : stat.value}
            </span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
