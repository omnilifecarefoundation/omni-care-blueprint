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
        <div className="grid md:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <Link
              key={p.id}
              to={p.href}
              className="block rounded-2xl bg-snow border border-hairline p-8 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_12px_28px_-20px_rgba(28,0,96,0.22)]"
              style={{ borderLeft: `4px solid ${p.color}` }}
            >
              <div className="font-mono text-xs text-ink-muted tabular-nums">{p.number}</div>
              <h2 className="font-serif text-3xl mt-3 text-balance">{p.name}</h2>
              <p className="mt-3 text-ink-muted leading-relaxed text-pretty">{p.long}</p>
              <span className="link-arrow mt-6">Explore <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
