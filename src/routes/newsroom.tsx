import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/newsroom")({
  head: () => ({
    meta: [
      { title: "Newsroom — Omni Life Care Foundation" },
      { name: "description", content: "A new foundation with nothing yet to announce. What we will publish — and when — once the work begins in Mumbai." },
      { property: "og:title", content: "Newsroom — Omni Life Care Foundation" },
      { property: "og:description", content: "A new foundation with nothing yet to announce. What we will publish — and when — once the work begins in Mumbai." },
      { property: "og:url", content: "/newsroom" },
    ],
    links: [{ rel: "canonical", href: "/newsroom" }],
  }),
  component: Page,
});

const COMMITMENTS = [
  {
    k: "Quarterly",
    t: "Community ledger",
    d: "Every three months, a plain-language report from the field in Mumbai: households enrolled, screenings completed, referrals closed, and what did not work. Posted here in full before it is sent to any donor or partner.",
  },
  {
    k: "Monthly",
    t: "Cost-per-outcome dashboard",
    d: "What it cost to reach one household and produce one measurable health outcome — updated on the first working day of each month. No reframing, no rounding up.",
  },
  {
    k: "Per study",
    t: "Pre-registered research",
    d: "Hypotheses, instruments, and analysis plans published before data collection begins. Raw, de-identified datasets released alongside every finding — including the studies that found nothing.",
  },
  {
    k: "Annual",
    t: "Independent audit",
    d: "A third-party financial and programme audit at the end of every fiscal year, published here in full — not summarised, not paraphrased.",
  },
];

const WONT = [
  "Press releases written before the work exists",
  "Round-number impact claims (\u201C10,000 lives changed\u201D) without a household-level ledger to back them",
  "Awards, photo-ops, or panel appearances passed off as programme outcomes",
  "Selective case studies that skip the families we failed to help",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="We have nothing to announce yet. That is the announcement."
        lead="A new foundation should not have a press archive. It should have a plan, a place to start, and a public commitment to what it will publish — and when."
      />

      {/* Editorial frame */}
      <section className="bg-sage">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-serif text-2xl md:text-[28px] leading-[1.35] tracking-[-0.01em] text-ink max-w-[58ch]">
              Most non-profit newsrooms open with a press release about a press release. Ours opens with an admission: the work has not begun. The first 500 households in Mumbai&rsquo;s low-income chawls will be enrolled in FY 2026&ndash;27. Until then, there is nothing to report — and pretending otherwise would be the first thing worth being held to account for.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-8 max-w-[62ch] text-ink-muted leading-relaxed">
              This page exists so that when the work does begin, the standard for what gets published — and what does not — has already been set in writing, in public, by us.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What we will publish */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-ink-muted">What we will publish</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-[-0.02em] text-ink max-w-[20ch]">
              Four things, on a fixed schedule, beginning FY 2026&ndash;27.
            </h2>
          </FadeUp>

          <div className="mt-14 grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {COMMITMENTS.map((c, i) => (
              <FadeUp key={c.t} delay={i * 0.06}>
                <article className="bg-snow p-8 md:p-10 h-full flex flex-col">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">{c.k}</span>
                  <h3 className="mt-3 font-serif text-2xl tracking-[-0.015em] text-ink">{c.t}</h3>
                  <p className="mt-4 text-ink-muted leading-relaxed">{c.d}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What we won't do */}
      <section className="bg-ink text-snow">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-snow/60">What this newsroom will not do</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-[-0.02em] max-w-[22ch]">
              The four kinds of news we have decided not to make.
            </h2>
          </FadeUp>
          <ul className="mt-12 divide-y divide-snow/15 border-y border-snow/15 max-w-[68ch]">
            {WONT.map((w, i) => (
              <FadeUp key={w} delay={i * 0.05}>
                <li className="py-6 flex gap-6 items-baseline">
                  <span className="font-mono text-xs tabular text-snow/50 shrink-0 w-8">0{i + 1}</span>
                  <span className="text-snow/90 text-lg leading-snug">{w}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* Press & enquiries */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <FadeUp>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-ink-muted">For journalists & researchers</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink">
                We would rather be questioned early than praised late.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <dl className="divide-y divide-hairline border-y border-hairline">
                <div className="py-5 grid grid-cols-[140px_1fr] gap-6">
                  <dt className="font-mono text-xs tracking-[0.15em] uppercase text-ink-muted pt-1">Press</dt>
                  <dd className="text-ink"><a className="underline underline-offset-4 decoration-hairline hover:decoration-ink" href="mailto:media@omnilifecare.org">media@omnilifecare.org</a></dd>
                </div>
                <div className="py-5 grid grid-cols-[140px_1fr] gap-6">
                  <dt className="font-mono text-xs tracking-[0.15em] uppercase text-ink-muted pt-1">Research</dt>
                  <dd className="text-ink"><Link to="/programs/research-impact-assessment" className="underline underline-offset-4 decoration-hairline hover:decoration-ink">Methods, protocols & data access</Link></dd>
                </div>
                <div className="py-5 grid grid-cols-[140px_1fr] gap-6">
                  <dt className="font-mono text-xs tracking-[0.15em] uppercase text-ink-muted pt-1">Governance</dt>
                  <dd className="text-ink"><Link to="/about/compliance" className="underline underline-offset-4 decoration-hairline hover:decoration-ink">Compliance, registration & filings</Link></dd>
                </div>
                <div className="py-5 grid grid-cols-[140px_1fr] gap-6">
                  <dt className="font-mono text-xs tracking-[0.15em] uppercase text-ink-muted pt-1">Field site</dt>
                  <dd className="text-ink">Low-income chawls, Mumbai &middot; first cohort FY 2026&ndash;27</dd>
                </div>
                <div className="py-5 grid grid-cols-[140px_1fr] gap-6">
                  <dt className="font-mono text-xs tracking-[0.15em] uppercase text-ink-muted pt-1">First ledger</dt>
                  <dd className="text-ink">Published 90 days after first household is enrolled</dd>
                </div>
              </dl>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Subscribe to the ledger"
        title="Be on the list the day the first report is published."
        body="No newsletter, no marketing. One email when each quarterly community ledger and monthly cost-per-outcome dashboard goes live."
        primary={{ label: "Write to us", href: "mailto:media@omnilifecare.org" }}
        secondary={{ label: "See where we start", href: "/impact" }}
      />
    </>
  );
}
