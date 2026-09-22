import "./StatsBar.css";

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "340+", label: "Projects Delivered" },
  { value: "98%", label: "On-Time Completion" },
  { value: "45", label: "Skilled Tradespeople" },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stats-bar__item">
            <span className="stats-bar__value">{stat.value}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
