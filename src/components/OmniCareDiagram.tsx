// Signature graphic: Four Pillars, One Continuum.
// Four labelled pillars rise from a shared "community" baseline and are tied
// together by a single integrating arc - the worker, the household, the
// follow-up - that runs across all four.

type PillarId = "mental" | "social" | "inclusive" | "human";

type Props = {
  className?: string;
  focus?: PillarId | null;
};

const PILLARS: {
  id: PillarId;
  number: string;
  name: string;
  caption: string;
  color: string;
}[] = [
  {
    id: "mental",
    number: "01",
    name: "Mental Wellbeing",
    caption: "The floor",
    color: "#4D9FFF",
  },
  {
    id: "social",
    number: "02",
    name: "Social Growth",
    caption: "Education & skills",
    color: "#4A7C59",
  },
  {
    id: "inclusive",
    number: "03",
    name: "Inclusive Care",
    caption: "Women, elders, disability",
    color: "#B8553A",
  },
  {
    id: "human",
    number: "04",
    name: "Human Potential",
    caption: "The long horizon",
    color: "#C9912C",
  },
];

export function OmniCareDiagram({ className = "", focus = null }: Props) {
  // Layout: 4 columns across a 960×420 viewBox; SVG scales to container.
  const W = 960;
  const H = 420;
  const cols = PILLARS.length;
  const sidePad = 90;
  const colWidth = (W - sidePad * 2) / (cols - 1);
  const baselineY = 310;
  const pillarTopY = 150;
  const arcY = 110;

  const op = (id: string) => (focus && id !== focus ? 0.28 : 1);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-labelledby="omni-care-title omni-care-desc"
    >
      <title id="omni-care-title">The Omni Care Model</title>
      <desc id="omni-care-desc">
        Four pillars - Mental Wellbeing, Social Growth, Inclusive Care, and Human
        Potential - rising from a shared community baseline and tied together by one
        continuous arc of integration.
      </desc>

      {/* Community baseline - dotted ground */}
      <g opacity="0.7" aria-hidden="true">
        {Array.from({ length: 44 }).map((_, i) =>
          Array.from({ length: 3 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={20 + i * 21}
              cy={baselineY + 22 + j * 14}
              r="1.4"
              fill="#E4E0D7"
            />
          ))
        )}
      </g>

      {/* Baseline rule + label */}
      <line
        x1={40}
        y1={baselineY}
        x2={W - 40}
        y2={baselineY}
        stroke="#5A6464"
        strokeWidth="1"
      />
      <text
        x={W / 2}
        y={baselineY + 70}
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="0.18em"
        fill="#5A6464"
      >
        COMMUNITY GROUND
      </text>

      {/* Arc of integration */}
      <path
        d={`M ${sidePad} ${pillarTopY} Q ${W / 2} ${arcY - 60} ${W - sidePad} ${pillarTopY}`}
        stroke="#1A1F1E"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x={W / 2}
        y={arcY - 38}
        textAnchor="middle"
        fontFamily="ui-serif, Georgia, serif"
        fontStyle="italic"
        fontSize="15"
        fill="#1A1F1E"
      >
        one arc of integration
      </text>

      {/* Pillars */}
      {PILLARS.map((p, i) => {
        const x = sidePad + i * colWidth;
        return (
          <g key={p.id} opacity={op(p.id)}>
            {/* Pillar stem */}
            <line
              x1={x}
              y1={pillarTopY}
              x2={x}
              y2={baselineY}
              stroke={p.color}
              strokeWidth="4"
              strokeLinecap="square"
            />
            {/* Node on arc */}
            <circle cx={x} cy={pillarTopY} r="6" fill={p.color} />
            <circle cx={x} cy={pillarTopY} r="11" fill="none" stroke={p.color} strokeOpacity="0.25" strokeWidth="2" />

            {/* Number chip */}
            <text
              x={x}
              y={pillarTopY - 24}
              textAnchor="middle"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontSize="11"
              letterSpacing="0.18em"
              fill="#5A6464"
            >
              {p.number}
            </text>

            {/* Pillar name */}
            <text
              x={x}
              y={baselineY - 18}
              textAnchor="middle"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#1A1F1E"
            >
              {p.name}
            </text>
            {/* Pillar caption */}
            <text
              x={x}
              y={baselineY + 4}
              textAnchor="middle"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontSize="12"
              fill="#5A6464"
            >
              {p.caption}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
