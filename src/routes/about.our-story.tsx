import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";

/* ============================================================
   OUR STORY
   Honest origin for a new foundation. No fake milestones.
   Structure: the observation → the choice → the first 12 months
   → founders' note.
   ============================================================ */

const CHOICES = [
  {
    n: "01",
    title: "One household, one plan - not four schemes.",
    body: "Most NGOs are organised around a programme. We are organised around a family. A single relationship with the household holds mental health, women's health, elderly care, and child development in one conversation, not four queues.",
  },
  {
    n: "02",
    title: "Mental health as the foundation, not the afterthought.",
    body: "Almost every health outcome in the last mile sits on top of an emotional one. We placed mental well-being at the base of the Omni Care Model - because if it is not held, nothing above it holds either.",
  },
  {
    n: "03",
    title: "Evidence before scale.",
    body: "We would rather run one rigorously evaluated programme in one district than five plausible programmes in five. Independent measurement is built into the budget from day one - not added when a donor asks for it.",
  },
  {
    n: "04",
    title: "Open books, by default.",
    body: "Budgets, salary bands, overhead ratios, and audit findings are published - including the qualifications. A new foundation has no track record to defend. We have decided not to build one to hide behind, either.",
  },
];

const ROADMAP = [
  {
    period: "Quarter one",
    label: "Foundation",
    items: [
      "Section 8 registration, 12A and 80G applications filed",
      "Independent statutory auditor appointed",
      "Founding board seated; nominations process opened in public",
    ],
  },
  {
    period: "Quarter two",
    label: "Listening",
    items: [
      "Two community assemblies in pilot wards of Mumbai",
      "Baseline household survey with an academic partner",
      "Programme blueprint published for public comment",
    ],
  },
  {
    period: "Quarter three",
    label: "First pilot",
    items: [
      "Community Mental Health & Wellbeing cohort begins",
      "Frontline workers recruited from the wards we serve",
      "Independent evaluator agrees the success criteria - in writing",
    ],
  },
  {
    period: "Quarter four",
    label: "First report",
    items: [
      "First annual report published - including what did not work",
      "Audited accounts and salary bands posted",
      "Roadmap for year two opened to partners and the public",
    ],
  },
];

export const Route = createFileRoute("/about/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Why Omni Life Care Foundation exists, what we chose to build differently, and an honest roadmap of our first twelve months - written before the work, not after.",
      },
      { property: "og:title", content: "Our Story - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "A new Mumbai foundation. No track record yet - just an observation, four deliberate choices, and a public roadmap.",
      },
      { property: "og:url", content: "/about/our-story" },
    ],
    links: [{ rel: "canonical", href: "/about/our-story" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About · Our story"
        title="Most foundations write their story after the work. We are writing ours before it."
        lead="Omni Life Care Foundation is a new non-profit, registered in Mumbai. We have no programmes to point back to and no beneficiaries to count. What we have is an observation about care in India - and four deliberate choices about how to answer it."
      />

      <TheObservation />
      <TheChoice />
      <Roadmap />
      <FoundersNote />

      <CTABand
        eyebrow="Walk with us from day one"
        title="The most useful thing we can offer founding partners is the chance to shape the model - not to applaud it."
        body="If you are a CSR lead, an institutional funder, or a clinician with field experience, we would value a conversation while the plan is still being written."
        primary={{ label: "Partner with us", href: "/partner/csr" }}
        secondary={{ label: "Read the model", href: "/about/omni-care-model" }}
      />
    </>
  );
}

/* ============================================================
   1. THE OBSERVATION - the why behind the foundation
   ============================================================ */
function TheObservation() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          <FadeUp className="lg:col-span-4">
            <p className="eyebrow mb-4">The observation that started it</p>
          </FadeUp>
          <div className="lg:col-span-8 space-y-6">
            <FadeUp delay={80}>
              <p className="font-sans font-medium text-[1.25rem] lg:text-[1.5rem] leading-[1.4] tracking-[-0.01em] text-ink text-balance">
                A family in the last mile does not have a mental-health problem, then a women&rsquo;s-health problem, then an elderly-care problem. They have one life - and a system that meets them in four different queues.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink text-pretty">
                India has built some of the world&rsquo;s most ambitious public-health
                infrastructure. The gap is not at the top. It is at the household - where
                a woman seeking counselling, a daughter trying to stay in school,
                and an elderly parent needing home care often find themselves
                served by three different teams, funded by three different budgets,
                with no single relationship that holds the whole family in view.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink-muted text-pretty">
                The result is not just inefficiency. It is exhaustion. Families
                give up before any single intervention has a chance to work.
              </p>
            </FadeUp>
            <FadeUp delay={320}>
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink text-pretty">
                Omni Life Care Foundation exists because we believe the opposite
                is possible - and that the way to prove it is not to write another
                paper, but to do the work, in one ward, with one team, and publish
                every honest line of what happens next.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. THE CHOICE - four deliberate decisions
   ============================================================ */
function TheChoice() {
  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <p className="eyebrow mb-4">Four choices we made before writing a budget</p>
          <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance max-w-3xl">
            A foundation is shaped less by what it does{" "}
            <em className="font-serif italic font-medium text-primary">
              than by what it decided not to do.
            </em>
          </h2>
        </FadeUp>

        <ol className="mt-12 lg:mt-16 space-y-0">
          {CHOICES.map((c, i) => (
            <FadeUp key={c.n} delay={120 + i * 80}>
              <li className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 lg:py-10 border-t border-hairline last:border-b">
                <div className="col-span-12 lg:col-span-2">
                  <span className="font-sans font-semibold tabular-nums text-[0.8125rem] tracking-[0.16em] text-ink-muted uppercase">
                    Choice {c.n}
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <h3 className="font-sans font-semibold text-[1.25rem] lg:text-[1.5rem] leading-[1.2] tracking-[-0.015em] text-ink text-balance">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[1rem] lg:text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty max-w-3xl">
                    {c.body}
                  </p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp delay={120 + CHOICES.length * 80}>
          <div className="mt-10">
            <Link
              to="/about/values"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink/70 transition-colors"
            >
              Read the operational commitments these choices created
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   3. ROADMAP - the first twelve months, in public
   ============================================================ */
function Roadmap() {
  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          <FadeUp className="lg:col-span-5">
            <p className="eyebrow mb-4">The first twelve months</p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              The roadmap, written{" "}
              <em className="font-serif italic font-medium text-primary">
                before the work - not after.
              </em>
            </h2>
            <p className="lead mt-5 max-w-md">
              We publish what we plan to do, in the order we plan to do it, so that next year&rsquo;s annual report has something honest to be measured against.
            </p>
          </FadeUp>

          <div className="lg:col-span-7">
            <ol className="space-y-0 border-y border-ink/15">
              {ROADMAP.map((r, i) => (
                <FadeUp key={r.period} delay={120 + i * 80}>
                  <li className="grid grid-cols-12 gap-x-5 gap-y-2 py-6">
                    <div className="col-span-12 sm:col-span-4">
                      <div className="font-sans font-semibold tabular-nums text-[0.8125rem] tracking-[0.14em] uppercase text-ink/70">
                        {r.period}
                      </div>
                      <div className="mt-1 font-sans font-semibold text-[1.0625rem] tracking-[-0.01em] text-ink text-balance">
                        {r.label}
                      </div>
                    </div>
                    <ul className="col-span-12 sm:col-span-8 space-y-2.5">
                      {r.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 text-[0.9375rem] leading-[1.6] text-ink/85 text-pretty"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-gold"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. FOUNDERS' NOTE - dark indigo signature
   ============================================================ */
function FoundersNote() {
  return (
    <section className="bg-ink text-snow">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-start">
          <FadeUp className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-snow/70 mb-4">
              A note from the founders
            </p>
          </FadeUp>

          <div className="lg:col-span-8 space-y-5">
            <FadeUp delay={80}>
              <p className="font-sans font-medium text-[1.25rem] lg:text-[1.5rem] leading-[1.4] tracking-[-0.01em] text-snow text-pretty">
                We have spent enough of our working lives inside health systems to know two things: the people doing the work are extraordinary, and the architecture around them is not.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[1rem] lg:text-[1.0625rem] leading-[1.7] text-snow/85 text-pretty">
                Omni Life Care Foundation is our attempt - modest, deliberate,
                and starting in a single ward of Mumbai - to test a different
                architecture. One household, one plan, four pillars of care
                working as one body. We are not asking anyone to take our word
                for it. We are asking for the patience to let the first twelve
                months show whether the model deserves to scale.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <p className="text-[1rem] lg:text-[1.0625rem] leading-[1.7] text-snow/85 text-pretty">
                If, at the end of year one, the evidence says we were wrong about
                the model - we will say so, in the same place we are saying this
                now. That commitment, more than anything else on this page, is
                what we hope you will hold us to.
              </p>
            </FadeUp>

            <FadeUp delay={320}>
              <div className="mt-8 pt-6 border-t border-snow/15">
                <p className="text-[0.875rem] uppercase tracking-[0.16em] text-snow/60">
                  Founders &mdash; Omni Life Care Foundation
                </p>
                <p className="mt-2 text-[0.9375rem] text-snow/75">
                  Mumbai, India
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={400}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <Link
                  to="/about/leadership"
                  className="inline-flex items-center gap-1.5 text-snow hover:text-gold transition-colors"
                >
                  See how the foundation is governed
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <span className="hidden sm:inline h-1 w-1 rounded-full bg-snow/30" />
                <Link
                  to="/about/omni-care-model"
                  className="inline-flex items-center gap-1.5 text-snow/80 hover:text-snow transition-colors"
                >
                  Read the Omni Care Model
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
