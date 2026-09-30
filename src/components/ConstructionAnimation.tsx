import "./ConstructionAnimation.css";

export default function ConstructionAnimation() {
  return (
    <div className="construction-scene" aria-hidden="true">
      <svg
        className="construction-scene__svg"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1420" />
            <stop offset="100%" stopColor="#1d3557" />
          </linearGradient>
          <linearGradient id="wallGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3e3c3" />
            <stop offset="100%" stopColor="#d9c39a" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="320" fill="url(#skyGradient)" />

        {/* Moon */}
        <circle cx="1040" cy="60" r="20" fill="#fdf1dc" opacity="0.9" />
        <circle cx="1032" cy="55" r="20" fill="#152a48" opacity="0.55" />

        {/* Stars */}
        <g fill="#fdf1dc">
          <circle className="cs-star" cx="180" cy="40" r="1.6" />
          <circle className="cs-star cs-star--2" cx="320" cy="70" r="1.3" />
          <circle className="cs-star cs-star--3" cx="880" cy="34" r="1.6" />
          <circle className="cs-star" cx="760" cy="80" r="1.2" />
          <circle className="cs-star cs-star--2" cx="120" cy="100" r="1.3" />
        </g>

        {/* Drifting clouds */}
        <g className="cs-cloud cs-cloud--1" fill="rgba(255,255,255,0.06)">
          <ellipse cx="0" cy="55" rx="70" ry="18" />
          <ellipse cx="45" cy="45" rx="45" ry="15" />
        </g>
        <g className="cs-cloud cs-cloud--2" fill="rgba(255,255,255,0.05)">
          <ellipse cx="0" cy="95" rx="55" ry="14" />
          <ellipse cx="38" cy="87" rx="36" ry="12" />
        </g>

        {/* Birds */}
        <g className="cs-bird cs-bird--1" fill="none" stroke="#fdf1dc" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
          <path d="M0 0 q5 -6 10 0 q5 -6 10 0" />
        </g>
        <g className="cs-bird cs-bird--2" fill="none" stroke="#fdf1dc" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <path d="M0 0 q4 -5 8 0 q4 -5 8 0" />
        </g>

        {/* Neighbourhood houses (static, dim) */}
        <g fill="#0f1f33" opacity="0.8">
          <polygon points="40,240 90,200 140,240" />
          <rect x="52" y="240" width="76" height="60" />
          <polygon points="150,250 190,218 230,250" />
          <rect x="160" y="250" width="60" height="50" />
          <polygon points="960,240 1015,196 1070,240" />
          <rect x="972" y="240" width="86" height="60" />
          <polygon points="1090,250 1135,214 1180,250" />
          <rect x="1100" y="250" width="70" height="50" />
        </g>
        <g fill="#f5c76a">
          <rect className="cs-neighbour-window" x="80" y="256" width="12" height="14" />
          <rect className="cs-neighbour-window cs-neighbour-window--2" x="1000" y="256" width="14" height="14" />
          <rect className="cs-neighbour-window" x="1128" y="266" width="10" height="12" />
        </g>

        {/* Ground */}
        <rect x="0" y="300" width="1200" height="20" fill="#0a1420" />
        <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(245,165,36,0.25)" strokeWidth="2" strokeDasharray="10 8" />

        {/* Trees swaying */}
        <g className="cs-tree" transform="translate(330,0)">
          <rect x="-4" y="262" width="8" height="38" fill="#4a3324" />
          <circle cx="0" cy="252" r="24" fill="#1f5a3d" />
          <circle cx="-14" cy="262" r="15" fill="#2a7050" />
          <circle cx="14" cy="260" r="16" fill="#276648" />
        </g>
        <g className="cs-tree cs-tree--2" transform="translate(880,0)">
          <rect x="-4" y="268" width="8" height="32" fill="#4a3324" />
          <circle cx="0" cy="256" r="20" fill="#1f5a3d" />
          <circle cx="12" cy="266" r="13" fill="#2a7050" />
        </g>

        {/* House being built — loops through the build stages */}
        <g className="cs-house">
          {/* Foundation slab */}
          <rect className="cs-stage cs-stage--foundation" x="474" y="292" width="252" height="8" fill="#5b6675" />

          {/* Walls */}
          <g className="cs-stage cs-stage--walls">
            <rect x="486" y="214" width="228" height="78" fill="url(#wallGradient)" />
            <g stroke="rgba(0,0,0,0.08)" strokeWidth="1">
              <line x1="486" y1="232" x2="714" y2="232" />
              <line x1="486" y1="250" x2="714" y2="250" />
              <line x1="486" y1="268" x2="714" y2="268" />
            </g>
          </g>

          {/* Door, windows */}
          <g className="cs-stage cs-stage--details">
            <rect x="588" y="248" width="26" height="44" rx="2" fill="#8b4f2b" />
            <circle cx="608" cy="271" r="1.8" fill="#f5a524" />
            <rect x="506" y="236" width="38" height="30" fill="#1d3557" stroke="#fdf1dc" strokeWidth="2" />
            <rect x="656" y="236" width="38" height="30" fill="#1d3557" stroke="#fdf1dc" strokeWidth="2" />
            <rect className="cs-glow" x="509" y="239" width="32" height="24" fill="#f5c76a" />
            <rect className="cs-glow cs-glow--2" x="659" y="239" width="32" height="24" fill="#f5c76a" />
            <line x1="525" y1="236" x2="525" y2="266" stroke="#fdf1dc" strokeWidth="1.5" />
            <line x1="675" y1="236" x2="675" y2="266" stroke="#fdf1dc" strokeWidth="1.5" />
          </g>

          {/* Roof + chimney */}
          <g className="cs-stage cs-stage--roof">
            <rect x="656" y="150" width="20" height="46" fill="#7a3b2e" />
            <polygon points="470,216 600,140 730,216" fill="#b5502f" />
            <polygon points="470,216 600,140 730,216" fill="none" stroke="#7a3b2e" strokeWidth="3" strokeLinejoin="round" />
            <g stroke="rgba(0,0,0,0.18)" strokeWidth="1.5">
              <line x1="500" y1="200" x2="700" y2="200" />
              <line x1="530" y1="184" x2="670" y2="184" />
              <line x1="562" y1="166" x2="638" y2="166" />
            </g>
          </g>

          {/* Chimney smoke */}
          <g className="cs-smoke" fill="rgba(255,255,255,0.35)">
            <circle className="cs-smoke__puff cs-smoke__puff--1" cx="666" cy="142" r="6" />
            <circle className="cs-smoke__puff cs-smoke__puff--2" cx="666" cy="142" r="6" />
            <circle className="cs-smoke__puff cs-smoke__puff--3" cx="666" cy="142" r="6" />
          </g>

          {/* Garden fence */}
          <g className="cs-stage cs-stage--fence" fill="#fdf1dc">
            {[430, 446, 462, 738, 754, 770].map((x) => (
              <rect key={x} x={x} y="278" width="8" height="22" />
            ))}
            <rect x="426" y="284" width="48" height="4" />
            <rect x="734" y="284" width="48" height="4" />
          </g>
        </g>

        {/* Worker with wheelbarrow */}
        <g className="cs-worker">
          <g transform="translate(0,0)">
            <circle cx="0" cy="272" r="6" fill="#f0c9a0" />
            <path d="M-7 268 a7 5 0 0 1 14 0 z" fill="#f5a524" />
            <rect x="-6" y="278" width="12" height="16" rx="2" fill="#1f5a9f" />
            <rect x="-5" y="294" width="4" height="8" fill="#0a1420" />
            <rect x="1" y="294" width="4" height="8" fill="#0a1420" />
            <path d="M6 284 L26 288" stroke="#8b4f2b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M18 282 h24 l-4 12 h-16 z" fill="#db8b12" />
            <circle className="cs-wheel" cx="40" cy="298" r="4" fill="#0a1420" />
          </g>
        </g>

        {/* Street lamp */}
        <g>
          <rect x="1010" y="240" width="4" height="60" fill="#3a4658" />
          <circle className="cs-lamp" cx="1012" cy="238" r="6" fill="#f5c76a" />
        </g>
      </svg>
    </div>
  );
}
