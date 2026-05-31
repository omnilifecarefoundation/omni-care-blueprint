import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PROGRAMS, PILLARS } from "@/lib/site";
import { ProgramCard } from "@/components/ProgramCard";
import { useState } from "react";

type Filter = "all" | "mental" | "social" | "inclusive" | "human";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programmes — Omni Life Care Foundation" },
      { name: "description", content: "All nine programmes organised under the Omni Care Model — explore the full breadth of our work." },
      { property: "og:title", content: "Programmes — Omni Life Care Foundation" },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Page,
});

function Page() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = filter === "all" ? PROGRAMS : PROGRAMS.filter((p) => p.pillar === filter);
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Nine programmes, designed to work as one."
        lead="Filter by pillar of the Omni Care Model, or view all our work."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter programmes by pillar">
          <FilterBtn current={filter} value="all" onClick={setFilter}>All</FilterBtn>
          {PILLARS.map((p) => (
            <FilterBtn key={p.id} current={filter} value={p.id} onClick={setFilter} color={p.color}>
              {p.name}
            </FilterBtn>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function FilterBtn({
  current,
  value,
  onClick,
  children,
  color,
}: {
  current: Filter;
  value: Filter;
  onClick: (v: Filter) => void;
  children: React.ReactNode;
  color?: string;
}) {
  const active = current === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => onClick(value)}
      className={`inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium border transition-colors ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-snow text-ink border-hairline hover:border-ink-muted"
      }`}
    >
      {color && <span className="chip-dot" style={{ color, backgroundColor: color }} />}
      {children}
    </button>
  );
}
