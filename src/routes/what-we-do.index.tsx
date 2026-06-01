import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { OmniCareDiagram } from "@/components/OmniCareDiagram";
import { PILLARS } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/what-we-do/")({
  head: () => ({
    meta: [
      { title: "What We Do — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Four pillars. Five programmes. One integrated approach to community health and wellbeing — the Omni Care Model.",
      },
      { property: "og:title", content: "What We Do — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "The Omni Care Model: mental wellbeing as the foundation, social growth, inclusive care, and human potential — delivered as one programme, not four.",
      },
      { property: "og:url", content: "/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: Page,
});

// Five programmes, mapped to their pillar. Kept honest — no fabricated reach.
const PROGRAMMES = [
  {
    n: "01",
    name: "Community Mental Health & Wellbeing",
    pillar: "Mental Wellbeing",
    pillarId: "mental" as const,
    intent:
      "Counselling, awareness, and screening built into the places people already trust — schools, primary health centres, self-help groups.",
    sdg: "SDG 3 · 10",
  },
  {
    n: "02",
    name: "Preventive & Community Health Outreach",
    pillar: "Human Potential",
    pillarId: "human" as const,
    intent:
      "Door-to-door screening for non-communicable disease, paired with a funded referral pathway into the public system.",
    sdg: "SDG 3 · 1",
  },
  {
    n: "03",
    name: "Women's Health & Life-Cycle Care",
    pillar: "Inclusive Care",
    pillarId: "inclusive" as const,
    intent:
      "Adolescent, menstrual, maternal, and anaemia care delivered by women, for women, across every life stage.",
    sdg: "SDG 5 · 3",
  },
  {
    n: "04",
    name: "Inclusive Care, Disability & Elderly Support",
    pillar: "Inclusive Care",
    pillarId: "inclusive" as const,
    intent:
      "Home-based rehabilitation, assistive devices, and caregiver training — plus the paperwork that unlocks government entitlements.",
    sdg: "SDG 10 · 3",
  },
  {
    n: "05",
    name: "Women's Health & Wellness Initiative",
    pillar: "Inclusive Care",
    pillarId: "inclusive" as const,
    intent:
      "Breast and cervical cancer screening, PCOS, menopause and bone health — the conditions most often left undiagnosed.",
    sdg: "SDG 5 · 3",
  },
];

// Care pyramid: bottom → top, in the order published in the foundation brief.
const PYRAMID = [
  {
    id: "human" as const,
    tier: "Top",
    name: "Human Potential",
    keywords: "Aspiration · Innovation · Transformation",
    blurb:
      "Capacity building, research, and partnerships so the model compounds long after a programme ends.",
  },
  {
    id: "inclusive" as const,
    tier: "Third",
    name: "Inclusive Care",
    keywords: "Dignity · Support · Compassion",
    blurb:
      "Care designed around the people most often overlooked — women, the elderly, persons with disability.",
  },
  {
    id: "social" as const,
    tier: "Second",
    name: "Social Growth",
    keywords: "Community · Awareness · Collective wellbeing",
    blurb:
      "Education, peer groups, and health literacy — turning awareness into community-level habit.",
  },
  {
    id: "mental" as const,
    tier: "Foundation",
    name: "Mental Wellbeing",
    keywords: "Stability · Emotional health · Foundation",
    blurb:
      "Mental health treated as the floor everything else rests on — not the last item on the checklist.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="One person. One plan. Four pillars."
        lead="Most community health is delivered in fragments — one organisation for mental health, another for women, another for the elderly. The Omni Care Model treats a household as a household."
      >
        <Link to="/about/omni-care-model" className="link-arrow text-snow/85 hover:text-snow">
          Read the model in full <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* The case — editorial pull-quote */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
            <FadeUp>
              <div className="eyebrow">The case for one programme</div>
            </FadeUp>
            <div className="space-y-7">
              <FadeUp delay={80}>
                <p className="font-serif text-[1.625rem] lg:text-[2rem] leading-[1.25] tracking-[-0.01em] text-ink text-balance">
                  A woman in her fifties does not have one health problem.
                  She has a cervical screening she missed, a husband with
                  unmanaged hypertension, a daughter with exam anxiety, and a
                  mother-in-law no one has measured for a walking aid.
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-ink-muted text-[1.0625rem] leading-[1.65] max-w-2xl text-pretty">
                  Four agencies will visit her village this year. None of
                  them will speak to each other. We are building the
                  alternative — one team, one plan, one household record,
                  one path back into the public system when specialist care
                  is needed.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* The Omni Care Model — pyramid, bottom-up */}
      <section className="bg-ink text-snow">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
            <div className="space-y-8 lg:sticky lg:top-24">
              <FadeUp>
                <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  The Omni Care Model
                </span>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.4vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-snow text-balance">
                  Four pillars, read from the ground up.
                </h2>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-snow/75 text-[1.0625rem] leading-[1.65] text-pretty">
                  We start with mental wellbeing because nothing above it
                  holds without it. We end with human potential because
                  that is what care, done well, releases.
                </p>
              </FadeUp>
              <FadeUp delay={240}>
                <OmniCareDiagram className="opacity-90" />
              </FadeUp>
            </div>

            <ol className="space-y-3">
              {PYRAMID.map((tier, i) => {
                const pillar = PILLARS.find((p) => p.id === tier.id)!;
                return (
                  <FadeUp key={tier.id} delay={80 + i * 90}>
                    <li>
                      <Link
                        to={pillar.href}
                        className="group block rounded-2xl border border-snow/15 bg-snow/[0.04] p-6 lg:p-7 transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-snow/35 hover:bg-snow/[0.07]"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{ background: pillar.color }}
                              aria-hidden="true"
                            />
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-snow/55 tabular-nums">
                              {tier.tier}
                            </span>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-snow/40 transition-[transform,color] duration-300 group-hover:text-snow group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                        <h3 className="mt-3 font-sans font-semibold text-[1.5rem] lg:text-[1.75rem] tracking-[-0.015em] text-snow text-balance">
                          {tier.name}
                        </h3>
                        <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-snow/55">
                          {tier.keywords}
                        </p>
                        <p className="mt-4 text-snow/75 text-[15px] leading-[1.6] text-pretty">
                          {tier.blurb}
                        </p>
                      </Link>
                    </li>
                  </FadeUp>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Five programmes — editorial ledger */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-10 lg:mb-14">
            <FadeUp>
              <div className="eyebrow">Five programmes</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                We are launching five programmes. Each answers a question we have heard from the community first.
              </h2>
            </FadeUp>
          </div>

          <ol className="border-t border-hairline">
            {PROGRAMMES.map((p, i) => {
              const pillar = PILLARS.find((x) => x.id === p.pillarId)!;
              return (
                <FadeUp key={p.n} delay={i * 70}>
                  <li className="grid grid-cols-12 gap-6 lg:gap-8 border-b border-hairline py-7 lg:py-9 group transition-colors hover:bg-canvas/60">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-sm text-ink-muted tabular-nums">
                        {p.n}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-7">
                      <h3 className="font-sans font-semibold text-[1.25rem] lg:text-[1.4rem] tracking-[-0.01em] text-ink text-balance">
                        {p.name}
                      </h3>
                      <p className="mt-2.5 text-ink-muted text-[15px] leading-[1.65] text-pretty">
                        {p.intent}
                      </p>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex lg:items-start">
                      <span
                        className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-ink-muted"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: pillar.color }}
                          aria-hidden="true"
                        />
                        {p.pillar}
                      </span>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex lg:items-start lg:justify-end">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                        {p.sdg}
                      </span>
                    </div>
                  </li>
                </FadeUp>
              );
            })}
          </ol>

          <FadeUp delay={140}>
            <p className="mt-8 text-sm text-ink-muted max-w-2xl">
              We will publish a one-page brief for every programme — design,
              cost per household, what we will measure — before fieldwork
              begins, so the first report can be read against the first
              promise.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What we will measure — honest, no fabricated stats */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            <FadeUp>
              <div className="space-y-4">
                <div className="eyebrow">What we will publish</div>
                <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.125rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  No headline numbers we cannot defend.
                </h2>
              </div>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  k: "Households reached",
                  v: "Counted once per household per year. Not events, not footfall.",
                },
                {
                  k: "Cost per outcome",
                  v: "Rupees spent against the outcome promised, not against activity completed.",
                },
                {
                  k: "Referral closure",
                  v: "What share of referrals into the public system end in care received, not care recommended.",
                },
                {
                  k: "Repeat engagement",
                  v: "Whether a household opens the door for a second visit. The only honest test of trust.",
                },
              ].map((m, i) => (
                <FadeUp key={m.k} delay={80 + i * 70}>
                  <article className="rounded-2xl bg-snow border border-hairline p-6 h-full transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_14px_30px_-22px_rgba(28,0,96,0.28)]">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      Metric
                    </div>
                    <h3 className="mt-2 font-sans font-semibold text-[1.0625rem] text-ink tabular-nums">
                      {m.k}
                    </h3>
                    <p className="mt-2 text-[14px] text-ink-muted leading-[1.6] text-pretty">
                      {m.v}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Work with us"
        title="The model is open. The first year is being designed now."
        body="If you fund community health, train the frontline, or want to bring a programme to your district — we would rather start a conversation than send a deck."
        primary={{ label: "Partner on CSR", href: "/partner/csr" }}
        secondary={{ label: "Volunteer with us", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
