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
            <stop offset="100%" stopColor="#142944" />
          </linearGradient>
          <linearGradient id="buildingGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5a80" />
            <stop offset="100%" stopColor="#1f3a5f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="320" fill="url(#skyGradient)" />

        {/* Drifting clouds */}
        <g className="cs-cloud cs-cloud--1" fill="rgba(255,255,255,0.06)">
          <ellipse cx="0" cy="55" rx="70" ry="18" />
          <ellipse cx="45" cy="45" rx="45" ry="15" />
        </g>
        <g className="cs-cloud cs-cloud--2" fill="rgba(255,255,255,0.05)">
          <ellipse cx="0" cy="90" rx="55" ry="14" />
          <ellipse cx="38" cy="82" rx="36" ry="12" />
        </g>
        <g className="cs-cloud cs-cloud--3" fill="rgba(255,255,255,0.045)">
          <ellipse cx="0" cy="35" rx="60" ry="16" />
          <ellipse cx="40" cy="28" rx="38" ry="12" />
        </g>

        {/* Background skyline (static, dim) */}
        <g fill="#0f1f33" opacity="0.7">
          <rect x="30" y="200" width="60" height="120" />
          <rect x="100" y="170" width="45" height="150" />
          <rect x="980" y="190" width="55" height="130" />
          <rect x="1060" y="150" width="50" height="170" />
          <rect x="1120" y="210" width="60" height="110" />
        </g>

        {/* Ground */}
        <rect x="0" y="300" width="1200" height="20" fill="#0a1420" />
        <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(245,165,36,0.25)" strokeWidth="2" strokeDasharray="10 8" />

        {/* Crane */}
        <g className="cs-crane">
          <rect x="686" y="298" width="28" height="10" fill="#0f1f33" />
          <rect x="694" y="60" width="12" height="240" fill="#f5a524" />
          <polygon points="700,40 830,58 700,66" fill="#f5a524" />
          <polygon points="700,40 620,56 700,64" fill="#db8b12" />
          <rect x="672" y="56" width="46" height="26" rx="3" fill="#142944" stroke="#f5a524" strokeWidth="2" />
          <circle className="cs-crane-light" cx="826" cy="49" r="4" fill="#ff5a4d" />

          <g transform="translate(700,0)">
            <g className="cs-trolley">
              <rect x="0" y="52" width="16" height="10" rx="2" fill="#142944" />
              <line x1="8" y1="62" x2="8" y2="106" stroke="#8a95a6" strokeWidth="1.5" />
              <line x1="4" y1="62" x2="4" y2="100" stroke="#8a95a6" strokeWidth="1" />
              <line x1="12" y1="62" x2="12" y2="100" stroke="#8a95a6" strokeWidth="1" />
              <g className="cs-hook">
                <rect x="-9" y="100" width="18" height="14" rx="2" fill="#1f3a5f" stroke="#f5a524" strokeWidth="1.5" />
              </g>
            </g>
          </g>
        </g>

        {/* Building under construction */}
        <g className="cs-building">
          <rect x="560" y="284" width="140" height="16" fill="#0f1f33" />
          <g className="cs-floor cs-floor--1">
            <rect x="568" y="256" width="124" height="30" fill="url(#buildingGradient)" stroke="#0a1420" strokeWidth="1" />
            <rect x="578" y="264" width="14" height="14" fill="#fdf1dc" opacity="0.5" />
            <rect x="602" y="264" width="14" height="14" fill="#fdf1dc" opacity="0.35" />
            <rect x="670" y="264" width="14" height="14" fill="#fdf1dc" opacity="0.5" />
          </g>
          <g className="cs-floor cs-floor--2">
            <rect x="568" y="222" width="124" height="30" fill="url(#buildingGradient)" stroke="#0a1420" strokeWidth="1" />
            <rect x="578" y="230" width="14" height="14" fill="#fdf1dc" opacity="0.4" />
            <rect x="626" y="230" width="14" height="14" fill="#fdf1dc" opacity="0.55" />
            <rect x="670" y="230" width="14" height="14" fill="#fdf1dc" opacity="0.4" />
          </g>
          <g className="cs-floor cs-floor--3">
            <rect x="568" y="188" width="124" height="30" fill="url(#buildingGradient)" stroke="#0a1420" strokeWidth="1" />
            <rect x="590" y="196" width="14" height="14" fill="#fdf1dc" opacity="0.5" />
            <rect x="638" y="196" width="14" height="14" fill="#fdf1dc" opacity="0.35" />
          </g>
          <g className="cs-floor cs-floor--4">
            <rect x="568" y="154" width="124" height="30" fill="url(#buildingGradient)" stroke="#0a1420" strokeWidth="1" />
            <rect x="578" y="162" width="14" height="14" fill="#fdf1dc" opacity="0.4" />
            <rect x="654" y="162" width="14" height="14" fill="#fdf1dc" opacity="0.5" />
          </g>
          <g className="cs-floor cs-floor--5">
            <rect x="568" y="120" width="124" height="30" fill="url(#buildingGradient)" stroke="#0a1420" strokeWidth="1" />
            <rect x="600" y="128" width="14" height="14" fill="#fdf1dc" opacity="0.5" />
          </g>
          <g className="cs-floor cs-floor--scaffold">
            <rect x="562" y="112" width="136" height="10" fill="#db8b12" opacity="0.85" />
            <line x1="568" y1="112" x2="568" y2="122" stroke="#0a1420" strokeWidth="2" />
            <line x1="692" y1="112" x2="692" y2="122" stroke="#0a1420" strokeWidth="2" />
          </g>
        </g>

        {/* Small ground vehicle */}
        <g transform="translate(60,0)">
          <g className="cs-truck">
            <rect x="0" y="278" width="46" height="20" rx="3" fill="#f5a524" />
            <rect x="34" y="266" width="18" height="16" rx="2" fill="#f5a524" />
            <rect x="36" y="270" width="10" height="8" fill="#142944" />
            <circle cx="12" cy="300" r="7" fill="#0a1420" />
            <circle cx="40" cy="300" r="7" fill="#0a1420" />
          </g>
        </g>
      </svg>
    </div>
  );
}
