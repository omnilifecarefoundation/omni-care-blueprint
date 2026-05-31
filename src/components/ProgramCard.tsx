import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Program, PILLAR_BY_ID } from "@/lib/site";

export function ProgramCard({ program }: { program: Program }) {
  const pillar = PILLAR_BY_ID[program.pillar];
  return (
    <Link
      to={program.href}
      className="group card-editorial block overflow-hidden focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="aspect-[4/3] overflow-hidden bg-hairline">
        <img
          src={program.image}
          alt={program.name}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 lg:p-6">
        <span className="chip" style={{ color: pillar.color }}>
          <span className="chip-dot" />
          {pillar.name}
        </span>
        <h3 className="mt-3 font-serif text-[1.3rem] leading-snug text-ink">
          {program.name}
        </h3>
        <p className="mt-2 text-[14px] text-ink-muted leading-relaxed">{program.outcome}</p>
        <span className="link-arrow mt-4">
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
