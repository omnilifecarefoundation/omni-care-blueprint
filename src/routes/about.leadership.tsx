import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck, Scale, FileText, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";

/* ============================================================
   LEADERSHIP & GOVERNANCE
   A new foundation. No fabricated bios. We publish the structure
   we are building, the standards we hold ourselves to, and the
   seats we are actively recruiting for.
   ============================================================ */

const PRINCIPLES = [
  {
    n: "01",
    title: "Governance is separate from management.",
    body: "The Board sets strategy and holds the executive accountable. The executive runs programmes and reports to the Board. We do not let one person hold both pens.",
  },
  {
    n: "02",
    title: "A majority of trustees are independent.",
    body: "Founders cannot vote themselves a majority on the Board. Related-party transactions require recusal and a written record. Conflicts are declared, not managed in private.",
  },
  {
    n: "03",
    title: "Every rupee has a name attached to it.",
    body: "The Board reviews the audited accounts in full session, not by circulation. Programme budgets, salary bands, and overhead ratios are published in the annual report - before they are asked for.",
  },
  {
    n: "04",
    title: "Communities have a seat, not a survey.",
    body: "The Programme Committee includes at least one trustee drawn from the communities we serve. Their voice is on the record, not in an appendix.",
  },
];

const STRUCTURE = [
  {
    icon: Scale,
    label: "Board of Trustees",
    summary: "Independent oversight of strategy, finance, and ethics.",
    detail: "Target composition: 5 to 7 trustees, with a minimum of three independent members. Standing committees for Audit & Risk, Programme & Impact, and Nominations.",
  },
  {
    icon: Users,
    label: "Executive Team",
    summary: "Day-to-day leadership of programmes, finance, and people.",
    detail: "Executive Director reports to the Board. Functional leads for Programmes, Research & Impact, Partnerships, Finance & Compliance, and People.",
  },
  {
    icon: ShieldCheck,
    label: "Advisory Council",
    summary: "Domain expertise without fiduciary control.",
    detail: "Practitioners and researchers in public health, mental health, gender, and disability inclusion. Advisory only - no voting rights on Board matters.",
  },
  {
    icon: FileText,
    label: "Statutory Auditors",
    summary: "Independent verification of the books.",
    detail: "Annual statutory audit by an independent chartered-accountancy firm. Audit findings - including qualifications - are published in full.",
  },
];

const SEATS = [
  {
    role: "Independent Trustee - Finance & Audit",
    note: "Chartered Accountant or CFO background; chairs the Audit & Risk Committee.",
  },
  {
    role: "Independent Trustee - Community Representation",
    note: "Drawn from the communities our programmes serve in Maharashtra.",
  },
  {
    role: "Advisory Council - Mental Health",
    note: "Clinical psychologist or psychiatrist with community-practice experience.",
  },
  {
    role: "Advisory Council - Disability Inclusion",
    note: "Practitioner or self-advocate working on accessibility and rights.",
  },
];

const STANDARDS = [
  ["Trustee meetings per year", "4 minimum"],
  ["Independent trustees", "Majority"],
  ["Term limit, per trustee", "3 years × 2"],
  ["Audited accounts published", "Within 6 months"],
  ["Conflict-of-interest register", "Public"],
  ["Whistleblower channel", "Independent ombudsperson"],
];

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Governance - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "How Omni Life Care Foundation is governed: independent Board of Trustees, separation of governance from management, published audits, and a community seat that votes.",
      },
      { property: "og:title", content: "Leadership & Governance - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "A new foundation does not have a track record to point to. It has the governance it chooses to build. Here is ours.",
      },
      { property: "og:url", content: "/about/leadership" },
    ],
    links: [{ rel: "canonical", href: "/about/leadership" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About · Leadership & Governance"
        title="A new foundation cannot point to a track record. It can point to the governance it chooses to build."
        lead="Most NGOs publish a wall of headshots. We are publishing the rules first - who holds the pen, who reviews the books, and who has the standing to say no. The names will follow, in public, as the Board is seated."
      />

      <Principles />
      <Structure />
      <Standards />
      <OpenSeats />
      <FoundingNote />

      <CTABand
        eyebrow="Get involved"
        title="If you have served on a board with discipline, we want to talk."
        body="We are actively recruiting independent trustees and advisory council members. Indicative time commitment: four board meetings a year, plus one committee."
        primary={{ label: "Express interest", href: "/contact" }}
        secondary={{ label: "Read our compliance", href: "/about/compliance" }}
      />
    </>
  );
}

/* ============================================================
   1. PRINCIPLES - the governance commitments
   ============================================================ */
function Principles() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <FadeUp className="lg:col-span-4">
            <p className="eyebrow mb-4">Four governance commitments</p>
            <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance">
              The rules we hold ourselves to, before we ask anyone to trust us with a rupee.
            </h2>
          </FadeUp>

          <div className="lg:col-span-8">
            <ol className="space-y-0">
              {PRINCIPLES.map((p, i) => (
                <FadeUp key={p.n} delay={80 + i * 60}>
                  <li className="grid grid-cols-12 gap-x-6 py-7 first:pt-0 border-t border-hairline first:border-t-0">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-sans font-semibold tabular-nums text-sm text-ink-muted">
                        {p.n}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-11">
                      <h3 className="font-sans font-semibold text-lg lg:text-xl tracking-[-0.01em] text-ink text-balance">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[0.975rem] lg:text-base leading-[1.65] text-ink-muted text-pretty">
                        {p.body}
                      </p>
                    </div>
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
   2. STRUCTURE - the four bodies that govern the foundation
   ============================================================ */
function Structure() {
  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <p className="eyebrow mb-4">How the foundation is organised</p>
          <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance max-w-3xl">
            Four bodies. Distinct mandates. No overlap of authority.
          </h2>
        </FadeUp>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 gap-5">
          {STRUCTURE.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.label} delay={120 + i * 80}>
                <article className="group h-full rounded-2xl bg-canvas border border-hairline p-7 lg:p-8 transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_18px_38px_-26px_rgba(28,0,96,0.28)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-ink/[0.06] text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <span className="eyebrow tabular-nums">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-sans font-semibold text-xl lg:text-[1.375rem] tracking-[-0.015em] text-ink text-balance">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-[0.975rem] leading-[1.6] text-ink text-pretty">
                    {s.summary}
                  </p>
                  <p className="mt-4 pt-4 border-t border-hairline text-[0.9rem] leading-[1.65] text-ink-muted text-pretty">
                    {s.detail}
                  </p>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. STANDARDS - a hard, scannable table of commitments
   ============================================================ */
function Standards() {
  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 items-start">
          <FadeUp className="lg:col-span-5">
            <p className="eyebrow mb-4">The standards, in numbers</p>
            <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance">
              We will be measured against the same numbers every year - by the Board, by the auditor, and by you.
            </h2>
          </FadeUp>

          <div className="lg:col-span-7">
            <FadeUp delay={120}>
              <dl className="divide-y divide-ink/15 border-y border-ink/15">
                {STANDARDS.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="font-sans text-[0.975rem] text-ink/85">{k}</dt>
                    <dd className="font-sans font-semibold tabular-nums text-[0.975rem] text-ink text-right">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-sm text-ink/75 leading-[1.6] text-pretty max-w-xl">
                Each standard is reviewed annually by the Audit &amp; Risk Committee.
                Where we fall short, the gap is named in the annual report - not
                buried in a footnote.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. OPEN SEATS - what we are recruiting for, in public
   ============================================================ */
function OpenSeats() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <p className="eyebrow mb-4">Open seats - in public</p>
          <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance max-w-3xl">
            We are recruiting four seats. We publish them here so the process is open from the first conversation.
          </h2>
          <p className="lead mt-5 max-w-2xl">
            If you have served on a non-profit board with discipline, or if you bring lived experience the Board needs in the room - we want to hear from you.
          </p>
        </FadeUp>

        <ul className="mt-12 lg:mt-14 grid md:grid-cols-2 gap-4">
          {SEATS.map((s, i) => (
            <FadeUp key={s.role} delay={120 + i * 70}>
              <li className="group relative rounded-xl bg-snow border border-hairline p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_14px_30px_-22px_rgba(28,0,96,0.24)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-sans font-semibold text-base lg:text-[1.0625rem] tracking-[-0.005em] text-ink text-balance">
                      {s.role}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.6] text-ink-muted text-pretty">
                      {s.note}
                    </p>
                  </div>
                  <span className="shrink-0 mt-0.5 inline-flex items-center gap-1 rounded-full bg-gold/15 text-ink px-2.5 py-1 text-[10px] uppercase tracking-[0.16em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Open
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink/70 transition-colors"
                >
                  Express interest
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   5. FOUNDING NOTE - honest framing, no fake bios
   ============================================================ */
function FoundingNote() {
  return (
    <section className="bg-ink text-snow">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-start">
          <FadeUp className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-snow/70 mb-4">
              A note from the founders
            </p>
          </FadeUp>
          <div className="lg:col-span-8 space-y-5">
            <FadeUp delay={80}>
              <p className="font-sans font-medium text-[1.125rem] lg:text-[1.25rem] leading-[1.55] text-snow text-pretty">
                It would be easy to list the people we know. It would be less honest. The Board of a foundation is a fiduciary body - not a list of supporters.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[1rem] leading-[1.7] text-snow/80 text-pretty">
                We are seating the Board through a written, criteria-driven process, with a nominations committee that includes one independent voice from outside the founders&rsquo; network. The first slate will be published the moment it is signed - with names, terms, and the committees each trustee chairs.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <p className="text-[1rem] leading-[1.7] text-snow/80 text-pretty">
                Until then, the most honest thing we can show you is the structure. It is the part that will outlast any one of us.
              </p>
            </FadeUp>
            <FadeUp delay={320}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <Link
                  to="/about/compliance"
                  className="inline-flex items-center gap-1.5 text-snow hover:text-gold transition-colors"
                >
                  Read our compliance &amp; registrations
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <span className="hidden sm:inline h-1 w-1 rounded-full bg-snow/30" />
                <Link
                  to="/about/vision-mission"
                  className="inline-flex items-center gap-1.5 text-snow/80 hover:text-snow transition-colors"
                >
                  Back to vision &amp; mission
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
