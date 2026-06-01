import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { OmniCareDiagram } from "@/components/OmniCareDiagram";
import { PILLARS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about/omni-care-model")({
  head: () => ({
    meta: [
      { title: "The Omni Care Model — Omni Life Care Foundation" },
      { name: "description", content: "Four pillars, one integrated approach — Mental Wellbeing, Social Growth, Inclusive Care, Human Potential." },
      { property: "og:title", content: "The Omni Care Model" },
      { property: "og:url", content: "/about/omni-care-model" },
    ],
    links: [{ rel: "canonical", href: "/about/omni-care-model" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="The Omni Care Model — four pillars, one integrated approach."
        lead="Health doesn't live in silos. Mental wellbeing, social growth, inclusive care and human potential are interdependent — and our programmes are designed to work as a single system."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="flex justify-center mb-16">
          <OmniCareDiagram width={480} height={220} />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <Link
              key={p.id}
              to={p.href}
              className="block rounded-2xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_12px_28px_-20px_rgba(28,0,96,0.22)]"
              style={{ borderLeft: `4px solid ${p.color}` }}
            >
              <div className="font-mono text-xs text-ink-muted tabular-nums">{p.number}</div>
              <h3 className="mt-3 font-sans font-semibold tracking-[-0.015em] text-2xl text-balance">{p.name}</h3>
              <p className="mt-3 text-ink-muted text-pretty">{p.long}</p>
              <span className="link-arrow mt-5">Explore pillar <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
