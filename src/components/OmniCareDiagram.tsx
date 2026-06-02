// Signature graphic: Four Pillars, One Orbit.
// A radial orbital diagram — pillars revolve around a shared centre
// ("community ground"), each linked by a single arc of integration.
// Click a pillar to pause rotation and read the detail.

import { useEffect, useRef, useState } from "react";
import { Brain, Users, HeartHandshake, Sunrise, ArrowUpRight, type LucideIcon } from "lucide-react";

type PillarId = "mental" | "social" | "inclusive" | "human";

type Props = {
  className?: string;
  focus?: PillarId | null;
};

type Pillar = {
  id: PillarId;
  number: string;
  name: string;
  caption: string;
  detail: string;
  color: string;
  icon: LucideIcon;
  relatedIds: PillarId[];
};

const PILLARS: Pillar[] = [
  {
    id: "mental",
    number: "01",
    name: "Mental Wellbeing",
    caption: "The floor we build on",
    detail:
      "Nothing above this holds without it. Counselling, peer support, and stigma-free care.",
    color: "#FFD600",
    icon: Brain,
    relatedIds: ["social", "inclusive"],
  },
  {
    id: "social",
    number: "02",
    name: "Social Growth",
    caption: "Education & livelihoods",
    detail:
      "Skills, schooling, and dignified work — the bridge between care and independence.",
    color: "#735BF6",
    icon: Users,
    relatedIds: ["mental", "human"],
  },
  {
    id: "inclusive",
    number: "03",
    name: "Inclusive Care",
    caption: "Women, elders, disability",
    detail:
      "Care that meets people where they are — and refuses to leave anyone at the edge.",
    color: "#DD1367",
    icon: HeartHandshake,
    relatedIds: ["mental", "human"],
  },
  {
    id: "human",
    number: "04",
    name: "Human Potential",
    caption: "The long horizon",
    detail:
      "What care, done well, releases — leadership, agency, and a community that lifts itself.",
    color: "#1C0060",
    icon: Sunrise,
    relatedIds: ["social", "inclusive"],
  },
];

export function OmniCareDiagram({ className = "", focus = null }: Props) {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<PillarId | null>(focus);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
  }, []);

  useEffect(() => {
    if (!autoRotate || reducedMotionRef.current) return;
    const id = window.setInterval(() => {
      setRotation((r) => (r + 0.15) % 360);
    }, 32);
    return () => window.clearInterval(id);
  }, [autoRotate]);

  useEffect(() => {
    if (focus) {
      setActiveId(focus);
      setAutoRotate(false);
    }
  }, [focus]);

  const total = PILLARS.length;
  const active = activeId ? PILLARS.find((p) => p.id === activeId) ?? null : null;
  const relatedSet = new Set(active?.relatedIds ?? []);

  const handleNodeClick = (id: PillarId) => {
    if (activeId === id) {
      setActiveId(null);
      setAutoRotate(true);
    } else {
      setActiveId(id);
      setAutoRotate(false);
      // Spin the chosen node toward the top.
      const idx = PILLARS.findIndex((p) => p.id === id);
      const target = (idx / total) * 360;
      setRotation(-90 - target);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-ink via-[#2a0a8a] to-ink text-snow ${className}`}
      style={{ aspectRatio: "1 / 1", maxWidth: 560 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveId(null);
          setAutoRotate(true);
        }
      }}
    >
      {/* Ambient field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,214,0,0.18), transparent 55%)",
        }}
      />
      {/* Orbit rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[68%] w-[68%] rounded-full border border-snow/10" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[46%] w-[46%] rounded-full border border-dashed border-snow/8" />
      </div>

      {/* Centre — community ground */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="relative mx-auto h-20 w-20 rounded-full bg-snow/10 backdrop-blur-md ring-1 ring-snow/25">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold to-[#E6A700] shadow-[0_0_30px_-4px_rgba(255,214,0,0.6)]" />
          <span className="absolute inset-0 grid place-items-center font-sans text-[11px] font-semibold tracking-[0.18em] text-ink">
            OMNI
          </span>
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-snow/55">
          Community Ground
        </p>
      </div>

      {/* Pillars on orbit */}
      {PILLARS.map((p, i) => {
        const angle = ((i / total) * 360 + rotation) % 360;
        const rad = (angle * Math.PI) / 180;
        const radiusPct = 34; // % of container half-width
        const x = 50 + radiusPct * Math.cos(rad);
        const y = 50 + radiusPct * Math.sin(rad);
        const Icon = p.icon;
        const isActive = activeId === p.id;
        const isRelated = relatedSet.has(p.id);
        const dim = activeId !== null && !isActive && !isRelated;

        return (
          <button
            key={p.id}
            type="button"
            onClick={() => handleNodeClick(p.id)}
            className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 transition-opacity duration-500"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              opacity: dim ? 0.35 : 1,
              zIndex: isActive ? 20 : 10,
            }}
            aria-pressed={isActive}
            aria-label={`${p.name} — ${p.caption}`}
          >
            <span
              className={`relative grid h-12 w-12 place-items-center rounded-full border transition-all duration-300 ${
                isActive
                  ? "scale-110 border-snow/80 shadow-[0_0_24px_-2px_rgba(255,255,255,0.4)]"
                  : "border-snow/25 group-hover:border-snow/60"
              }`}
              style={{
                background: `radial-gradient(circle at 30% 30%, ${p.color}cc, ${p.color}55 70%)`,
              }}
            >
              {(isActive || isRelated) && (
                <span
                  className="absolute inset-0 animate-ping rounded-full"
                  style={{ background: `${p.color}40` }}
                />
              )}
              <Icon className="relative h-5 w-5 text-snow" strokeWidth={1.75} />
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-snow/55">
              {p.number}
            </span>
            <span className="max-w-[110px] text-center font-sans text-[11px] font-semibold leading-tight text-snow">
              {p.name}
            </span>
          </button>
        );
      })}

      {/* Detail card */}
      <div
        className={`absolute inset-x-4 bottom-4 rounded-2xl border border-snow/15 bg-ink/70 p-4 backdrop-blur-lg transition-all duration-500 ${
          active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        style={{ zIndex: 30 }}
      >
        {active && (
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: active.color }}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-snow/55">
                  Pillar {active.number}
                </span>
                <span className="font-sans text-[13px] font-semibold text-snow">
                  {active.name}
                </span>
              </div>
              <p className="mt-1 text-[12.5px] leading-snug text-snow/75">
                {active.detail}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-snow/40" />
          </div>
        )}
      </div>

      {/* Hint */}
      <div className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-snow/45">
        Click a pillar
      </div>
    </div>
  );
}
