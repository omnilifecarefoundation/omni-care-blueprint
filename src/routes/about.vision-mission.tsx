import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { PILLARS } from "@/lib/site";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Omni Life Care Foundation" },
      { name: "description", content: "Our vision of equitable, dignified care for every community in India, and our mission to make it real — one family at a time." },
      { property: "og:title", content: "Vision & Mission — Omni Life Care Foundation" },
      { property: "og:description", content: "Our vision of equitable, dignified care for every community in India, and our mission to make it real." },
      { property: "og:url", content: "/about/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/about/vision-mission" }],
  }),
  component: Page,
});

/* ============================================================
   VISION & MISSION
   ============================================================ */
function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="One team. One plan. One family at a time."
        lead="Most health problems show up together. The care system should too. Omni Life Care Foundation exists to build an integrated model of community health and wellbeing — starting in Mumbai, designed for India."
      />

      <TheProblem />
      <VisionStatement />
      <MissionCommitments />
      <PillarsMap />

      <CTABand
        eyebrow="Join us"
        title="Help us prove what integrated care can do."
        body="We are a new foundation with an old insight: families do better when help arrives together, not in separate boxes."
        primary={{ label: "Partner with us", href: "/partner/csr" }}
        secondary={{ label: "Meet the team", href: "/about/leadership" }}
      />
    </>
  );
}

/* ============================================================
   1. THE PROBLEM — editorial, factual, specific
   ============================================================ */
function TheProblem() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          <FadeUp className="lg:col-span-4">
            <p className="eyebrow mb-4">The problem we were built to solve</p>
          </FadeUp>
          <div className="lg:col-span-8 space-y-6">
            <FadeUp delay={80}>
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink text-pretty">
                India has some of the world&rsquo;s most ambitious public-health
                infrastructure — and some of the deepest gaps in the last mile.
                A woman seeking mental-health support, an elderly parent needing
                home care, and a girl trying to stay in school often find
                themselves in three different queues, run by three different
                teams, funded by three different budgets.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink text-pretty">
                The result is not just inefficiency. It is exhaustion.
                Families give up. Conditions worsen. Potential is lost.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink text-pretty">
                We believe the opposite is possible: a single team, a single plan,
                and a single relationship with the household — so that help
                arrives as a circle, not a set of fragments.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. VISION STATEMENT — large, manifesto-style
   ============================================================ */
function VisionStatement() {
  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <p className="eyebrow mb-6">Our vision</p>
        </FadeUp>
        <FadeUp delay={80}>
          <blockquote className="max-w-4xl">
            <p className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              A future where every individual in India has equitable access to
              dignified, inclusive, and comprehensive health and wellbeing
              support — delivered as one integrated experience, not a
              collection of separate programmes.
            </p>
          </blockquote>
        </FadeUp>
        <FadeUp delay={160}>
          <p className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
            We do not imagine a future of bigger hospitals or more apps.
            We imagine a future where the community itself is the first line of
            care — trained, supported, and never left alone.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   3. MISSION — 3 numbered commitments, concrete and specific
   ============================================================ */
function MissionCommitments() {
  const commitments = [
    {
      n: "01",
      title: "Build the Omni Care Model",
      body: "Design, pilot, and refine an integrated care framework that combines mental health, community health, inclusive care, and human potential into one operating system — tested in real communities, measured openly, and shared freely.",
    },
    {
      n: "02",
      title: "Invest in community capacity",
      body: "Recruit, train, and place community health workers from the neighbourhoods we serve. Every rupee spent on local capability compounds into decades of independent community resilience.",
    },
    {
      n: "03",
      title: "Publish everything — including the failures",
      body: "Share our finances, our methods, our data, and our mistakes. We believe trust is earned through transparency, not claimed through marketing. External audits start in year one.",
    },
  ];

  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 mb-14">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">Our mission</p>
            <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Three commitments we are willing to be judged by.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              A mission is not what you hope. It is what you do, repeatedly,
              until it becomes the organisation&rsquo;s default behaviour.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {commitments.map((c, i) => (
            <FadeUp key={c.n} delay={(i + 1) * 80} as="li">
              <div className="border-t border-ink/20 pt-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  Commitment {c.n}
                </div>
                <h3 className="mt-4 font-sans font-semibold text-[1.25rem] leading-snug text-ink text-balance">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted text-pretty">
                  {c.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   4. PILLARS MAP — how the four pillars serve the vision
   ============================================================ */
function PillarsMap() {
  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">How the model works</p>
            <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Four kinds of care. One team.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              Each pillar is a distinct discipline. Together they form a single
              circle of support around the household.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 70} as="li">
              <Link
                to={p.href}
                className="group relative flex h-full flex-col gap-4 rounded-2xl bg-snow border border-hairline p-6 lg:p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_12px_28px_-20px_rgba(28,0,96,0.22)]"
              >
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: p.color }}
                  aria-hidden="true"
                />
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  {p.number}
                </div>
                <h3 className="font-sans font-semibold text-[1.125rem] leading-snug text-ink text-balance">
                  {p.name}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-muted text-pretty">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
