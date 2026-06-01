// Signature graphic: Four Pillars, One Field.
// Four vertical pillars (in pillar colors) sit on a single baseline,
// connected by an arc representing integration, atop a dotted
// "community" pattern.

type Props = {
  className?: string;
  width?: number;
  height?: number;
  focus?: "mental" | "social" | "inclusive" | "human" | null;
};

export function OmniCareDiagram({
  className = "",
  width = 320,
  height = 160,
  focus = null,
}: Props) {
  const pillars = [
    { id: "mental", color: "#4D9FFF" },
    { id: "social", color: "#4A7C59" },
    { id: "inclusive", color: "#B8553A" },
    { id: "human", color: "#C9912C" },
  ] as const;

  const op = (id: string) => (focus && id !== focus ? 0.25 : 1);

  return (
    <svg
      viewBox="0 0 320 160"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="The Omni Care Model — four pillars connected by a single integrating arc."
    >
      {/* dotted community pattern */}
      <g opacity="0.7">
        {Array.from({ length: 30 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={10 + i * 10}
              cy={130 + j * 8}
              r="1"
              fill="#E4E0D7"
            />
          ))
        )}
      </g>

      {/* arc */}
      <path
        d="M 60 50 Q 160 10 260 50"
        stroke="#1A1F1E"
        strokeWidth="1.2"
        fill="none"
      />

      {/* pillars */}
      {pillars.map((p, i) => {
        const x = 60 + i * 67;
        return (
          <g key={p.id} opacity={op(p.id)}>
            <line x1={x} y1={50} x2={x} y2={120} stroke={p.color} strokeWidth="3" strokeLinecap="square" />
            <circle cx={x} cy={50} r="3" fill={p.color} />
          </g>
        );
      })}

      {/* baseline */}
      <line x1="40" y1="120" x2="280" y2="120" stroke="#5A6464" strokeWidth="1" />
    </svg>
  );
}
