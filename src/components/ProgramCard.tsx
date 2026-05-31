import { Link } from "@tanstack/react-router";
import { type Program, PILLAR_BY_ID } from "@/lib/site";
import { ExpandingPill } from "@/components/ui-axion/ExpandingPill";

export function ProgramCard({ program }: { program: Program }) {
  const pillar = PILLAR_BY_ID[program.pillar];
  return (
    <Link
      to={program.href}
      className="group block focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-hairline">
        <img
          src={program.image}
          alt={program.name}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ExpandingPill label="Explore program" tone="light" expandedWidth={170} />
      </div>
      <div className="pt-4">
        <span className="chip" style={{ color: pillar.color }}>
          <span className="chip-dot" />
          {pillar.name}
        </span>
        <h3 className="mt-3 font-serif text-[1.25rem] leading-snug text-ink">
          {program.name}
        </h3>
        <p className="mt-2 text-[14px] text-ink-muted leading-relaxed">{program.outcome}</p>
      </div>
    </Link>
  );
}
