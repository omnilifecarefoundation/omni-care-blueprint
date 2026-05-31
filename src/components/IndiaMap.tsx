// Simple stylized India outline with dot markers for active states.
// Phase 1: static SVG. Phase 2: interactive.

const ACTIVE_STATES = [
  { name: "Maharashtra", x: 110, y: 175 },
  { name: "Karnataka", x: 125, y: 230 },
  { name: "Tamil Nadu", x: 155, y: 280 },
  { name: "Madhya Pradesh", x: 155, y: 140 },
  { name: "Odisha", x: 215, y: 165 },
  { name: "Uttar Pradesh", x: 175, y: 100 },
];

export function IndiaMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={className}
      role="img"
      aria-label="Map of India showing six states where Omni Life Care Foundation currently operates."
    >
      {/* Simplified India silhouette */}
      <path
        d="M 90 30 L 130 25 L 165 40 L 200 45 L 230 75 L 245 100 L 250 130 L 245 160 L 235 175 L 245 195 L 230 210 L 220 235 L 200 255 L 180 280 L 160 310 L 140 330 L 130 320 L 135 295 L 125 270 L 110 245 L 95 220 L 85 195 L 75 165 L 70 130 L 75 95 L 80 65 Z"
        fill="#E4E0D7"
        stroke="#5A6464"
        strokeWidth="0.75"
      />
      {/* State markers */}
      {ACTIVE_STATES.map((s) => (
        <g key={s.name}>
          <circle cx={s.x} cy={s.y} r="6" fill="#D9573F" opacity="0.2" />
          <circle cx={s.x} cy={s.y} r="3" fill="#D9573F" />
        </g>
      ))}
      <text x="10" y="350" className="font-mono" fontSize="9" fill="#5A6464">
        6 states · 85+ communities
      </text>
    </svg>
  );
}
