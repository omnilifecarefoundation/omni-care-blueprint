import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { PILLARS } from "@/lib/site";

export const Route = createFileRoute("/impact/")({
  head: () => ({
    meta: [
      { title: "Impact — Starting in Mumbai | Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "We are a new foundation. Our first programmes begin in low-income neighbourhoods of Mumbai. Here is what we will measure, publish, and stand behind.",
      },
      { property: "og:title", content: "Impact — Starting in Mumbai" },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Page,
});

// Honest baseline — what we will measure from day one in Mumbai.
const BASELINE = [
  {
    n: "01",
    label: "Households enrolled",
    detail:
      "One household record per family. Tracked from first contact through every follow-up — not counted twice.",
  },
  {
    n: "02",
    label: "Screenings to referral",
    detail:
      "Every positive screen has a named clinician, a date, and a confirmed visit. We publish the closure rate.",
  },
  {
    n: "03",
    label: "Cost per outcome",
    detail:
      "Rupees spent per household reached, per referral closed, per worker trained. Reported by quarter.",
  },
  {
    n: "04",
    label: "Repeat engagement",
    detail:
      "Did the household return after the first visit? Sustained contact is the proof. One-off touches are not.",
  },
];

const FIRST_HUNDRED_DAYS = [
  {
    phase: "Days 1–30",
    title: "Listen before we build.",
    body:
      "Sit with women's self-help groups, ASHA workers, municipal clinicians, and ward officers in our first Mumbai neighbourhood. Document what is already there. Document what is missing.",
  },
  {
    phase: "Days 31–60",
    title: "One household, one record.",
    body:
      "Open the first 500 household files. Each file maps mental health, women's health, disability, elderly care, and child wellbeing in one place — not five disconnected forms.",
  },
  {
    phase: "Days 61–100",
    title: "Close the first referrals.",
    body:
      "Every positive screen routed to a clinician inside the public system. We measure how many actually reached care — and where the system failed them.",
  },
];

const PUBLIC_LEDGER = [
  { label: "Quarterly community report", cadence: "Every 90 days" },
  { label: "Cost-per-outcome dashboard", cadence: "Updated monthly" },
  { label: "Independent annual audit", cadence: "FY 2026–27 onwards" },
  { label: "Household consent log", cadence: "Maintained continuously" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Impact · Day one"
        title="We have not reached a hundred thousand lives. We have reached zero. Here is how we plan to count the first."
        lead="Omni Life Care Foundation is new. Our first programmes begin in low-income neighbourhoods of Mumbai. This page is not a track record — it is the commitment we are signing in public before the work begins."
      />

      {/* Honesty section */}
      <section className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <FadeUp>
            <div className="eyebrow">What this page is not</div>
          </FadeUp>
          <div className="space-y-6">
            <FadeUp delay={80}>
              <p className="font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.3] text-ink text-balance">
                A new foundation that publishes inflated numbers buys itself one
                press cycle and loses a decade of trust.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[1.0625rem] leading-[1.7] text-ink-muted text-pretty">
                We will not show photos of communities we have not yet served, or
                map states we have not yet entered. We will publish the first
                household record, the first referral closed, the first rupee
                spent — and every one after that. The proof comes from the
                discipline of measurement, not the size of the claim.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Where we start */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <FadeUp>
                <div className="eyebrow">Where we start · Mumbai</div>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.2vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  In the chawls and slum settlements where care arrives last, if it arrives at all.
                </h2>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-[1.0625rem] leading-[1.7] text-ink-muted text-pretty">
                  Mumbai's lowest-income neighbourhoods carry the city's hardest
                  health burdens — untreated depression, anaemia in adolescent
                  girls, undiagnosed hypertension, elders left alone with
                  chronic disease, women who postpone care until it becomes an
                  emergency. The infrastructure exists. The bridge to it does not.
                </p>
              </FadeUp>
              <FadeUp delay={220}>
                <p className="text-[1.0625rem] leading-[1.7] text-ink-muted text-pretty">
                  We are building that bridge — one household at a time,
                  alongside ASHA workers, municipal clinicians, and the women
                  who already hold these communities together.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={120}>
              <div className="rounded-2xl border border-hairline bg-canvas p-8 lg:p-10 shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-30px_rgba(0,0,0,0.18)]">
                <div className="eyebrow mb-6">First operating context</div>
                <dl className="space-y-5 text-[0.95rem]">
                  {[
                    ["Location", "Mumbai, Maharashtra"],
                    ["Communities", "Low-income chawls & informal settlements"],
                    ["First cohort target", "500 households"],
                    ["Delivery model", "Embedded with ASHA & municipal clinics"],
                    ["Launch window", "FY 2026–27"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-6 border-b border-hairline/60 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-ink-muted">{k}</dt>
                      <dd className="font-sans font-semibold text-ink text-right tabular-nums">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What we will measure */}
      <section className="container-editorial py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <FadeUp>
            <div className="eyebrow mb-4">What we will measure</div>
          </FadeUp>
          <FadeUp delay={80}>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.2vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Four numbers. Reported honestly. Reported every quarter.
            </h2>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="lead mt-5 text-pretty">
              We chose these because they are hard to game and impossible to
              inflate. They tell the truth about whether care actually reached
              the person who needed it.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {BASELINE.map((m, i) => (
            <FadeUp key={m.n} delay={i * 80}>
              <div className="bg-canvas p-8 lg:p-10 h-full transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-30px_rgba(0,0,0,0.18)]">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-mono text-xs text-ink-muted tabular-nums">
                    {m.n}
                  </span>
                  <div className="h-px flex-1 bg-hairline" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-ink mb-3 text-balance">
                  {m.label}
                </h3>
                <p className="text-[0.95rem] leading-[1.65] text-ink-muted text-pretty">
                  {m.detail}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* First 100 days */}
      <section className="bg-ink text-snow relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(115,91,246,0.22), transparent 45%), radial-gradient(circle at 10% 90%, rgba(255,214,0,0.08), transparent 42%)",
          }}
        />
        <div className="container-editorial relative py-20 lg:py-28">
          <div className="max-w-2xl mb-14">
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                The first hundred days
              </span>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="mt-6 font-sans font-semibold text-[clamp(1.875rem,3.2vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-snow text-balance">
                Three phases. One neighbourhood. No shortcuts.
              </h2>
            </FadeUp>
          </div>

          <ol className="space-y-px">
            {FIRST_HUNDRED_DAYS.map((p, i) => (
              <FadeUp key={p.phase} delay={i * 100}>
                <li className="grid md:grid-cols-[180px_1fr_2fr] gap-6 md:gap-10 py-8 border-t border-snow/10 last:border-b">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-gold tabular-nums">
                    {p.phase}
                  </div>
                  <h3 className="font-sans font-semibold text-xl lg:text-2xl text-snow leading-[1.2] text-balance">
                    {p.title}
                  </h3>
                  <p className="text-[1rem] leading-[1.7] text-snow/75 text-pretty">
                    {p.body}
                  </p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* What you can hold us to */}
      <section className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <FadeUp>
              <div className="eyebrow mb-4">The public ledger</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                What you can hold us to, in writing.
              </h2>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="mt-5 text-[1rem] leading-[1.7] text-ink-muted text-pretty">
                If any of these slip, we owe you an explanation before you ask
                for one.
              </p>
            </FadeUp>
          </div>

          <ul className="divide-y divide-hairline border-y border-hairline">
            {PUBLIC_LEDGER.map((item, i) => (
              <FadeUp key={item.label} delay={i * 70}>
                <li className="flex items-baseline justify-between gap-6 py-5">
                  <span className="font-sans font-semibold text-[1.0625rem] text-ink">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                    {item.cadence}
                  </span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars tied back to impact */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-2xl mb-12">
            <FadeUp>
              <div className="eyebrow mb-4">Where impact accrues</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Four pillars. Read from the ground up.
              </h2>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {[...PILLARS].reverse().map((p, i) => (
              <FadeUp key={p.id} delay={i * 70}>
                <a
                  href={p.href}
                  className="group bg-canvas p-7 lg:p-8 h-full block transition-all duration-300 hover:bg-snow"
                >
                  <div className="font-mono text-xs text-ink-muted tabular-nums mb-4">
                    {p.number}
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-ink mb-2 text-balance">
                    {p.name}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.6] text-ink-muted text-pretty">
                    {p.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.16em] text-ink group-hover:gap-2.5 transition-[gap] duration-200">
                    Read <span aria-hidden>→</span>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Be in the first hundred"
        title="The first households will be enrolled this year. Stand with the work before the numbers exist."
        body="CSR partners, individual donors, and clinicians who want to be on the ground from day one — write to us. We will tell you exactly where the money goes and exactly what we cannot yet promise."
        primary={{ label: "Partner on CSR", href: "/partner/csr" }}
        secondary={{ label: "Volunteer", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
