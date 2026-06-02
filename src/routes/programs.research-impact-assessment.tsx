import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs/research-impact-assessment")({
  head: () => ({
    meta: [
      { title: "Research & Impact Assessment - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "How a new Mumbai foundation will measure what works in community health - open data, pre-registered methods, and quarterly public reports from the very first cohort.",
      },
      { property: "og:title", content: "Research & Impact Assessment - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Pre-registered methods, open data, quarterly ledgers. We will publish the discipline before we publish the numbers.",
      },
      { property: "og:url", content: "/programs/research-impact-assessment" },
    ],
    links: [{ rel: "canonical", href: "/programs/research-impact-assessment" }],
  }),
  component: ResearchImpactPage,
});

const COMMITMENTS = [
  {
    n: "01",
    title: "Pre-register every study",
    body:
      "Before a single household is enrolled, the hypothesis, the sample, the instruments and the analysis plan are published. We commit to the question in advance - and to reporting the answer whether it flatters us or not.",
  },
  {
    n: "02",
    title: "Open the raw data",
    body:
      "De-identified datasets and codebooks are released alongside every report. Anyone - a partner NGO, a graduate student, a state official, a journalist - can audit our math.",
  },
  {
    n: "03",
    title: "Publish a quarterly ledger",
    body:
      "Households reached, screenings to referral, cost per outcome, repeat engagement. Four numbers, every quarter, on a single page. No PDFs hiding behind logins.",
  },
  {
    n: "04",
    title: "Report what did not work",
    body:
      "Null results, dropouts, costs that overran, partnerships that stalled. The sector is full of glossy decks. We will write the other kind.",
  },
];

const METHODS = [
  {
    label: "Validated instruments",
    body: "PHQ-9, GAD-7, WHODAS 2.0, NCD screening protocols aligned with India's NPCDCS. No bespoke scoring.",
  },
  {
    label: "Quasi-experimental design",
    body: "Matched comparison wards from the same ward-level census. No cherry-picked baselines.",
  },
  {
    label: "Cost-per-outcome accounting",
    body: "Total programme cost, divided by referrals closed and conditions managed at 90 days. Not lives touched.",
  },
  {
    label: "Consent at the household",
    body: "Written, language-appropriate, revocable. Every datapoint is traceable to a consent record.",
  },
];

const TIMELINE = [
  {
    when: "Q3 FY 2026",
    title: "Methods committee convened",
    body: "Three external researchers - public health, biostatistics, ethics - review every protocol before fieldwork begins.",
  },
  {
    when: "Q4 FY 2026",
    title: "First protocol pre-registered",
    body: "Community Mental Health screening pathway in Mumbai's low-income chawls. Published on OSF before enrolment opens.",
  },
  {
    when: "Q1 FY 2027",
    title: "Baseline survey closes",
    body: "500 households. PHQ-9, GAD-7, blood pressure, household composition, referral history.",
  },
  {
    when: "Q2 FY 2027",
    title: "First public ledger",
    body: "Four numbers, one page, on the website. Raw dataset linked. Limitations written by us, not redacted.",
  },
];

export default function ResearchImpactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-snow overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(115,91,246,0.28), transparent 45%), radial-gradient(circle at 88% 80%, rgba(255,214,0,0.10), transparent 40%)",
          }}
        />
        <div className="container-editorial relative pt-14 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-3xl space-y-6">
            <FadeUp>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-1 text-sm text-snow/70 hover:text-snow transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> What we do
              </Link>
            </FadeUp>
            <FadeUp delay={60}>
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Human Potential · Research
              </span>
            </FadeUp>
            <FadeUp delay={120}>
              <h1 className="font-sans font-semibold text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.04] tracking-[-0.025em] text-snow text-balance">
                We will publish the discipline before we publish the numbers.
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="max-w-2xl text-[1.0625rem] lg:text-[1.125rem] leading-[1.6] text-snow/80 text-pretty">
                Omni Life Care is a new foundation. We have no peer-reviewed papers, no headline statistics,
                no decade of evaluations to point to. What we do have is a method - written down, pre-registered,
                and open to anyone who wants to check our work.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* HONEST EDITORIAL */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <FadeUp>
              <div className="eyebrow">The case for honest evidence</div>
            </FadeUp>
            <div className="space-y-6 max-w-2xl">
              <FadeUp delay={80}>
                <p className="text-[1.125rem] lg:text-[1.25rem] leading-[1.55] tracking-[-0.005em] text-ink text-pretty">
                  Indian community-health work is full of large round numbers. One hundred thousand lives touched.
                  Five lakh women empowered. The numbers are usually inputs - leaflets handed out, camps held -
                  re-labelled as outcomes.
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
                  We have decided not to compete on that scoreboard. A research function exists at this foundation
                  for one reason: so that the next rupee a donor spends, and the next hour a community health
                  worker walks, are spent on something that actually moved a household from screened to treated,
                  from isolated to supported, from at-risk to managed.
                </p>
              </FadeUp>
              <FadeUp delay={240}>
                <p className="text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
                  Until that evidence exists, this page is what we can offer instead: the method we will follow,
                  the cadence on which we will report, and the names of the people who will hold us to it.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR COMMITMENTS */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <FadeUp>
              <div className="eyebrow mb-4">Four research commitments</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                What you can hold us to, starting now.
              </h2>
            </FadeUp>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {COMMITMENTS.map((c, i) => (
              <FadeUp key={c.n} delay={i * 80}>
                <article className="bg-snow p-8 lg:p-10 h-full transition-[background-color,box-shadow] duration-300 ease-out hover:bg-canvas">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-sans tabular-nums text-[0.75rem] uppercase tracking-[0.2em] text-ink-muted">
                      {c.n}
                    </span>
                    <h3 className="font-sans font-semibold text-[1.25rem] lg:text-[1.375rem] tracking-[-0.015em] text-ink text-balance">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-[0.9375rem] lg:text-[1rem] leading-[1.65] text-ink-muted text-pretty">
                    {c.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* METHODS LEDGER */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <div>
              <FadeUp>
                <div className="eyebrow mb-4">Methods</div>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  The instruments are standard. The arithmetic is public.
                </h2>
              </FadeUp>
            </div>
            <dl className="divide-y divide-hairline border-y border-hairline">
              {METHODS.map((m, i) => (
                <FadeUp key={m.label} delay={i * 60}>
                  <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-8 py-5">
                    <dt className="font-sans font-medium text-[0.9375rem] tracking-[-0.005em] text-ink">
                      {m.label}
                    </dt>
                    <dd className="text-[0.9375rem] leading-[1.6] text-ink-muted text-pretty">
                      {m.body}
                    </dd>
                  </div>
                </FadeUp>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <FadeUp>
              <div className="eyebrow mb-4">First eighteen months</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                The research calendar, written before the fieldwork begins.
              </h2>
            </FadeUp>
          </div>
          <ol className="space-y-px">
            {TIMELINE.map((t, i) => (
              <FadeUp key={t.when} delay={i * 70}>
                <li className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-6 border-t border-hairline last:border-b">
                  <div className="font-sans tabular-nums text-[0.75rem] uppercase tracking-[0.2em] text-ink-muted pt-1">
                    {t.when}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[1.125rem] lg:text-[1.25rem] tracking-[-0.015em] text-ink mb-2 text-balance">
                      {t.title}
                    </h3>
                    <p className="text-[0.9375rem] lg:text-[1rem] leading-[1.65] text-ink-muted text-pretty max-w-2xl">
                      {t.body}
                    </p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="eyebrow mb-4">Who we want to work with</div>
                <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  Universities, hospitals, civic data teams - and the households themselves.
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-5 text-[1rem] lg:text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
                <p>
                  We are actively seeking academic partners in public health, biostatistics, and implementation
                  science to co-design protocols and co-author the first round of reports.
                </p>
                <p>
                  We are seeking municipal partners - BMC ward officers, ASHA supervisors, primary health centre
                  clinicians - to ensure the questions we ask are the ones the system actually needs answered.
                </p>
                <p>
                  And we are committing to community researchers from the chawls themselves: paid roles, on the
                  research team, with the right to read the manuscript before it goes out.
                </p>
                <p>
                  <Link to="/contact" className="link-arrow">
                    Write to the research team <ArrowRight className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-14 lg:py-16">
          <FadeUp>
            <div className="eyebrow mb-6">Read next</div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {[
              { href: "/impact", title: "Impact", body: "What we will count, and where we start." },
              { href: "/what-we-do", title: "Our model", body: "Four pillars, one household record." },
              { href: "/about/compliance", title: "Compliance", body: "12A, 80G, FCRA, CSR-1." },
            ].map((r, i) => (
              <FadeUp key={r.href} delay={i * 70}>
                <Link
                  to={r.href}
                  className="block bg-snow p-8 h-full transition-[background-color,box-shadow] duration-300 ease-out hover:bg-canvas group"
                >
                  <h3 className="font-sans font-semibold text-[1.125rem] tracking-[-0.015em] text-ink mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.6] text-ink-muted text-pretty mb-4">
                    {r.body}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[0.875rem] text-ink font-medium">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Partner on the research"
        title="If you measure community health for a living, we would rather build with you than around you."
        body="Academic, clinical, and civic-data partners welcome. Bring your method. We will bring the field, the consent, and the discipline to publish what we find."
        primary={{ label: "Partner on CSR", href: "/partner/csr" }}
        secondary={{ label: "Contact research", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
