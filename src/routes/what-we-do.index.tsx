import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PILLARS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/what-we-do/")({
  head: () => ({
    meta: [
      { title: "What We Do — Omni Life Care Foundation" },
      { name: "description", content: "Our work, organised under the Omni Care Model — Mental Wellbeing, Social Growth, Inclusive Care, Human Potential." },
      { property: "og:title", content: "What We Do — Omni Life Care Foundation" },
      { property: "og:url", content: "/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Four pillars. Nine programmes. One integrated approach."
        lead="Our work is organised under the Omni Care Model — four interdependent pillars that together deliver integrated community care."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {PILLARS.map((p) => (
            <Link
              key={p.id}
              to={p.href}
              className="block bg-snow border border-hairline p-8 hover:-translate-y-0.5 transition-all"
              style={{ borderLeft: `4px solid ${p.color}` }}
            >
              <div className="font-mono text-xs text-ink-muted tabular">{p.number}</div>
              <h2 className="font-serif text-3xl mt-3">{p.name}</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">{p.long}</p>
              <span className="link-arrow mt-6">Explore <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
