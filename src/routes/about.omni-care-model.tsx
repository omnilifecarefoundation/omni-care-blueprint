import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { OmniCareDiagram } from "@/components/OmniCareDiagram";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { PILLARS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about/omni-care-model")({
  head: () => ({
    meta: [
      { title: "The Omni Care Model - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Four pillars, one continuum. How Omni Life Care designs mental, social, inclusive and human-potential care to work as a single system.",
      },
      { property: "og:title", content: "The Omni Care Model" },
      { property: "og:url", content: "/about/omni-care-model" },
    ],
    links: [{ rel: "canonical", href: "/about/omni-care-model" }],
  }),
  component: Page,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "Integrated, not isolated.",
    body: "A woman screened at a health camp is also offered mental-health support, life-stage counselling, and a referral pathway - in the same visit, by the same trusted worker.",
  },
  {
    n: "02",
    title: "Sequenced from the ground up.",
    body: "Mental wellbeing comes first because nothing else holds without it. Social growth, inclusive care, and human potential build on that foundation in order.",
  },
  {
    n: "03",
    title: "Accountable, in public.",
    body: "Every pillar reports the same way - who we reached, what changed, and what we got wrong. Our discipline is the proof, not our promises.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="Four pillars. One continuum of care."
        lead="Health doesn't live in silos - and neither do the people we serve. The Omni Care Model is how a mental-health visit, a girl's scholarship, an elder's home check-in, and a frontline worker's training all add up to the same outcome: communities that can carry their own wellbeing."
      />

      {/* The model - diagram + 12-col header */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">The Model</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Four pillars, held together by{" "}
                <em className="font-serif italic font-medium text-primary">
                  one arc of integration.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                The pillars are not a menu. Each stands on the same community ground; each
                connects to the next through one continuous arc - the worker, the household,
                the follow-up - so a single touchpoint can deliver care across more than one
                pillar at once.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={140}>
            <div className="rounded-2xl bg-snow border border-hairline p-8 lg:p-12 shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_8px_24px_-16px_rgba(4, 55, 242,0.12)]">
              <div className="flex justify-center">
                <OmniCareDiagram className="w-full h-auto max-w-3xl" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* The four pillars */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">The Four Pillars</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Each pillar earns its place by{" "}
                <em className="font-serif italic font-medium text-primary">
                  what the community asked for.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Read top to bottom, the pillars build on each other - mental wellbeing as
                the floor, human potential as the long horizon. Each links to the
                programmes delivering it on the ground today.
              </p>
            </FadeUp>
          </div>

          <ul className="grid md:grid-cols-2 gap-4 lg:gap-5 list-none p-0">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.id} as="li" delay={i * 70}>
                <Link
                  to={p.href}
                  className="group relative flex h-full flex-col gap-4 rounded-2xl bg-snow border border-hairline p-6 lg:p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_12px_28px_-20px_rgba(4, 55, 242,0.22)] active:scale-[0.995]"
                >
                  <span
                    className="h-1.5 w-10 rounded-full transition-[width] duration-300 ease-out group-hover:w-16"
                    style={{ backgroundColor: p.color }}
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                      {p.number}
                    </span>
                    <h3 className="font-sans font-semibold text-[1.25rem] leading-snug text-ink text-balance">
                      {p.name}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                    {p.long}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Explore pillar
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* How the pillars connect - three principles */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">How It Connects</p>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                A model is only worth its{" "}
                <em className="font-serif italic font-medium text-primary">
                  operating discipline.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Three commitments hold the four pillars together. They are what we promise
                a funder, a community, and ourselves - every quarter.
              </p>
            </FadeUp>
          </div>
          <ul className="grid md:grid-cols-3 gap-4 lg:gap-5 list-none p-0">
            {PRINCIPLES.map((pr, i) => (
              <FadeUp key={pr.n} as="li" delay={i * 70}>
                <div className="h-full rounded-xl bg-canvas border border-hairline p-6 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                    {pr.n}
                  </span>
                  <h3 className="mt-3 font-sans font-semibold text-[1.25rem] leading-snug text-ink text-balance">
                    {pr.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted text-pretty">
                    {pr.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA band on ink */}
      <section className="relative bg-primary text-snow overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(115,91,246,0.30), transparent 45%), radial-gradient(circle at 88% 80%, rgba(255,214,0,0.10), transparent 40%)",
          }}
        />
        <div className="container-editorial relative py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-end">
            <FadeUp className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                See it in practice
              </span>
              <h2 className="mt-5 font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-snow text-balance">
                The model is a map. The{" "}
                <em className="font-serif italic font-medium text-gold">
                  programmes are the road.
                </em>
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] lg:text-[1.15rem] leading-[1.6] text-snow/80 text-pretty">
                Every programme we run sits inside one of these four pillars - and
                connects to the others by design. Browse the work, or stand with us.
              </p>
            </FadeUp>
            <FadeUp className="lg:col-span-5" delay={120}>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <PillButton to="/programs" variant="on-dark">
                  Browse programmes
                </PillButton>
                <PillButton to="/get-involved" variant="ghost">
                  Get involved
                </PillButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
