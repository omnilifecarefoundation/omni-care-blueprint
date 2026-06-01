import { Link } from "@tanstack/react-router";
import { type Program, PILLAR_BY_ID } from "@/lib/site";
import { ExpandingPill } from "@/components/ui-axion/ExpandingPill";

export function ProgramCard({ program }: { program: Program }) {
  const pillar = PILLAR_BY_ID[program.pillar];
  return (
    <Link
      to={program.href}
      className="group block overflow-hidden rounded-2xl bg-snow border border-hairline shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.12)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_4px_8px_rgba(28,0,96,0.06),0_22px_44px_-22px_rgba(28,0,96,0.32)] focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-hairline">
        <img
          src={program.image}
          alt={program.name}
          width={1200}
          height={720}
          loading="lazy"
          className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <ExpandingPill label="Explore program" tone="light" expandedWidth={170} />
      </div>

      <div className="p-5 lg:p-6">
        <span className="chip" style={{ color: pillar.color }}>
          <span className="chip-dot" />
          {pillar.name}
        </span>
        <h3 className="mt-3 font-serif text-[1.25rem] leading-snug text-ink text-balance">
          {program.name}
        </h3>
        <p className="mt-2 text-[14px] text-ink-muted leading-relaxed text-pretty">{program.outcome}</p>
      </div>
    </Link>
  );
}
