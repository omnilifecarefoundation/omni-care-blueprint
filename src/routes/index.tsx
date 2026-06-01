import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Download } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import { COMPLIANCE, PILLARS, PROGRAMS, PILLAR_BY_ID } from "@/lib/site";
import { OmniCareDiagram } from "@/components/OmniCareDiagram";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Omni Life Care Foundation — Mumbai. Four pillars of care, designed to work as one.",
      },
      {
        name: "description",
        content:
          "A newly registered Mumbai-based public charitable trust building an integrated model of mental wellbeing, social growth, inclusive care, and human potential — with the communities it serves.",
      },
      {
        property: "og:title",
        content:
          "Omni Life Care Foundation — Mumbai. Care, designed as one system.",
      },
      {
        property: "og:description",
        content:
          "Newly registered in Mumbai. Four pillars. Four flagship programmes. Built with communities, not for them. Founding partners welcome.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FoundingMoment />
      <WhyWeExist />
      <OmniCareSection />
      <FlagshipPrograms />
      <FoundersLetter />
      <FoundingPartners />
      <ComplianceBand />
      <ClosingCTA />
      <NewsletterBand />
    </>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative bg-canvas border-b border-hairline overflow-hidden">
      {/* Soft editorial backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8% 12%, rgba(28,0,96,0.05), transparent 45%), radial-gradient(circle at 95% 85%, rgba(180,140,60,0.06), transparent 40%)",
        }}
      />
      <div className="container-editorial relative pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="lg:col-span-7 space-y-8">
            <FadeUp delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-sage border border-hairline rounded-full pl-3 pr-4 py-1.5 text-[12px] text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono tabular text-ink-muted uppercase tracking-[0.18em] text-[10px]">
                    Est. 2026
                  </span>
                  <span className="text-ink-muted">·</span>
                  <span>Mumbai, India — a new public charitable trust</span>
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="font-sans font-semibold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.025em] text-ink text-balance">
                Health doesn't live in silos.{" "}
                <span className="font-display-italic text-gold">
                  Neither should the care that reaches you.
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="lead max-w-xl text-pretty">
                Omni Life Care Foundation is a newly registered Mumbai-based
                public charitable trust building an integrated model of mental
                wellbeing, social growth, inclusive care, and human potential
                — designed with the communities it will serve, not for them.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <PillButton to="/partner/csr" variant="primary">
                  Become a founding partner
                </PillButton>
                <PillButton to="/about/vision-mission" variant="ghost">
                  Read our mission
                </PillButton>
              </div>
            </FadeUp>

            <FadeUp delay={400}>
              <dl className="pt-8 border-t border-hairline grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-6 max-w-xl">
                {[
                  { v: "12A", l: "Registered" },
                  { v: "80G", l: "Applied" },
                  { v: "CSR-1", l: "In progress" },
                  { v: "Mumbai", l: "Headquartered" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-mono text-[11px] tabular uppercase tracking-[0.18em] text-ink leading-none">
                      {s.v}
                    </dt>
                    <dd className="mt-2 text-[11px] text-ink-muted uppercase tracking-[0.14em]">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* Right — framed photo + floating compliance card */}
          <div className="lg:col-span-5 relative">
            <FadeUp delay={150}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary-glow/20"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sage shadow-[0_1px_2px_rgba(28,0,96,0.08),0_24px_60px_-20px_rgba(28,0,96,0.28)]">
                  <img
                    src={heroImg}
                    alt="A Mumbai community gathered in a neighbourhood lane — the kind of place Omni Life Care Foundation begins its work."
                    width={1200}
                    height={1500}
                    fetchPriority="high"
                    className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent"
                  />
                  <p className="absolute bottom-5 left-5 right-5 text-canvas/95 text-sm font-display-italic leading-snug text-balance">
                    Where India lives, care should arrive.
                  </p>
                </div>

                <div className="hidden lg:block absolute -bottom-8 -left-10 bg-canvas border border-hairline rounded-xl shadow-xl p-5 w-[260px]">
                  <p className="eyebrow border-b border-hairline pb-2 mb-3">
                    A foundation, on the record
                  </p>
                  <dl className="space-y-2.5 text-[12px]">
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-muted">Registered as</dt>
                      <dd className="text-ink font-medium">Public Trust</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-muted">Jurisdiction</dt>
                      <dd className="text-ink font-medium">Maharashtra</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-muted">12A status</dt>
                      <dd className="text-ink font-medium">Granted</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-muted">80G status</dt>
                      <dd className="text-ink font-medium">Applied</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundingMoment() {
  const items = [
    { n: "04", l: "Pillars defined", s: "Mental, social, inclusive, human" },
    { n: "04", l: "Flagship programmes", s: "Designed, awaiting funding" },
    { n: "05", l: "SDGs prioritised", s: "Led by SDG 3 — Good Health" },
    { n: "001", l: "Day in Mumbai", s: "Founding cohort forming now" },
  ];
  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-14 lg:py-20">
        <FadeUp>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
              §01 — The Founding Moment
            </span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeUp key={it.l} delay={i * 70}>
              <div className="px-2 lg:px-6 py-4 lg:py-2 lg:border-l border-hairline first:lg:border-l-0">
                <div
                  className="font-serif italic leading-none text-[clamp(2.5rem,6vw,4.5rem)] tracking-tight"
                  style={{
                    WebkitTextStroke: "1px rgba(28,0,96,0.45)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {it.n}
                </div>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                  {it.l}
                </div>
                <p className="mt-1.5 text-[13px] text-ink-muted leading-relaxed">
                  {it.s}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={300}>
          <p className="mt-10 text-[13px] text-ink-muted max-w-2xl text-pretty">
            We are not advertising a track record we don't yet have. We are
            advertising a model — and an honest invitation to help build it
            from day one.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function WhyWeExist() {
  const facts = [
    {
      stat: "≈ 70–80%",
      body:
        "is India's treatment gap for common mental disorders, per the National Mental Health Survey — most people who need care never receive it.",
    },
    {
      stat: "1 in 4",
      body:
        "Indian women face a serious gap in life-cycle health services — from adolescence through menopause and elderly care.",
    },
    {
      stat: "Fragmented",
      body:
        "Mental health, women's health, disability support and chronic care are still delivered by separate, disconnected systems.",
    },
  ];
  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-14 items-start">
          <FadeUp className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
                Why we exist
              </span>
            </div>
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.2] text-ink text-balance">
              <span className="font-display-italic text-gold">"</span>India does
              not lack compassion. It lacks a care system that travels the last
              mile and treats a person — not a
              <span className="font-display-italic"> symptom.</span>
              <span className="font-display-italic text-gold">"</span>
            </p>
            <p className="mt-6 text-sm text-ink-muted font-mono uppercase tracking-[0.16em]">
              — From the founding brief, Mumbai, 2026
            </p>
          </FadeUp>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            {facts.map((f, i) => (
              <FadeUp key={f.stat} delay={(i + 1) * 90}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-hairline pt-5">
                  <div className="font-sans font-semibold text-2xl text-primary tabular leading-none pt-1">
                    {f.stat}
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink text-pretty">
                    {f.body}
                  </p>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={400}>
              <p className="border-t border-hairline pt-5 text-[15px] text-ink-muted text-pretty">
                We won't fix this alone — and we don't pretend to.{" "}
                <span className="text-ink font-medium">
                  We're building a system other people can plug into.
                </span>
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function OmniCareSection() {
  return (
    <section className="relative bg-sage border-y border-hairline overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(28,0,96,0.06), transparent 42%), radial-gradient(circle at 92% 92%, rgba(28,0,96,0.05), transparent 38%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />

      <div className="container-editorial relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 mb-16 lg:mb-24">
          <FadeUp className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
                §02 — The Omni Care Model
              </span>
              <span className="h-px flex-1 bg-ink/15" />
            </div>
            <h2 className="font-sans font-semibold text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] tracking-[-0.025em] text-ink text-balance">
              Four pillars.{" "}
              <span className="font-display-italic text-gold">One</span>{" "}
              integrated system of care.
            </h2>
          </FadeUp>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <FadeUp delay={80}>
              <p className="lead text-pretty">
                Mental wellbeing, social growth, inclusive care and human
                potential move together in a person's life. So they move
                together in ours — as one interlocking system, not four
                parallel projects.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="bg-snow/60 backdrop-blur-[2px] border border-hairline px-5 py-4 inline-block">
                <OmniCareDiagram width={320} height={120} />
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 60}>
              <Link
                to={p.href}
                className="group relative grid grid-cols-12 gap-x-6 gap-y-3 items-baseline py-8 lg:py-10 border-b border-ink/15 transition-colors duration-300 ease-out hover:bg-snow/55"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ backgroundColor: p.color }}
                />

                <div className="col-span-3 sm:col-span-2 pl-3 sm:pl-5">
                  <div
                    className="font-serif italic leading-none text-[clamp(2.75rem,7vw,5.5rem)] tracking-tight"
                    style={{
                      WebkitTextStroke: "1px currentColor",
                      WebkitTextFillColor: "transparent",
                      color: "rgba(28,0,96,0.35)",
                    }}
                  >
                    {p.number}
                  </div>
                </div>

                <div className="col-span-9 sm:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-[2rem] leading-[1.1] text-ink text-balance">
                    {p.name}
                  </h3>
                </div>

                <div className="col-span-12 sm:col-span-5 sm:col-start-7">
                  <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                    {p.description}
                  </p>
                </div>

                <div className="col-span-12 sm:col-span-1 sm:col-start-12 sm:justify-self-end self-center">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-[transform,background-color,border-color,color] duration-300 ease-out group-hover:border-ink group-hover:bg-ink group-hover:text-snow group-hover:rotate-[-45deg]"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="sr-only">Explore {p.name}</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted tabular">
            04 / 04 — A single system of care
          </p>
          <Link to="/about/omni-care-model" className="link-arrow">
            See how the model works <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function FlagshipPrograms() {
  // Four flagship programs — one per pillar, drawn from the questionnaire.
  const flagship = [
    {
      program: PROGRAMS[0],
      pillar: "mental" as const,
      serves: "Adolescents, women, caregivers, frontline workers",
      sdg: "SDG 3 · SDG 10",
    },
    {
      program: PROGRAMS[1],
      pillar: "social" as const,
      serves: "Urban-slum and underserved rural communities",
      sdg: "SDG 3 · SDG 10",
    },
    {
      program: PROGRAMS[3],
      pillar: "inclusive" as const,
      serves: "Elderly, persons with disability, chronic-care patients",
      sdg: "SDG 3 · SDG 10",
    },
    {
      program: PROGRAMS[2],
      pillar: "inclusive" as const,
      serves: "Women across adolescence, maternity, midlife and elderly care",
      sdg: "SDG 3 · SDG 5",
    },
  ];

  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 mb-14">
          <FadeUp className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
                §03 — Programmes in motion
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              Four flagship programmes,{" "}
              <span className="font-display-italic text-gold">one</span>{" "}
              continuum of care.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              These four programmes anchor our first phase of work. Each is
              fully designed and ready for field deployment as funding and
              partnerships fall into place.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {flagship.map((f, i) => {
            const pillar = PILLAR_BY_ID[f.pillar];
            return (
              <FadeUp key={f.program.slug} delay={i * 70}>
                <Link
                  to={f.program.href}
                  className="group relative block h-full bg-snow p-8 lg:p-10 transition-[background-color,box-shadow] duration-300 ease-out hover:bg-canvas hover:shadow-[0_1px_2px_rgba(28,0,96,0.05),0_18px_36px_-18px_rgba(28,0,96,0.18)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular">
                    <span>Programme · 0{i + 1}</span>
                    <span style={{ color: pillar.color }}>{pillar.name}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl lg:text-[1.65rem] leading-[1.15] text-ink text-balance">
                    {f.program.name}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ink-muted text-pretty">
                    {f.program.summary ??
                      "A community-led programme designed to meet people where they are, with dignified and continuous care."}
                  </p>
                  <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-hairline pt-5 text-[12px]">
                    <div className="flex gap-3">
                      <dt className="text-ink-muted uppercase tracking-[0.14em] w-20 shrink-0">
                        Serves
                      </dt>
                      <dd className="text-ink">{f.serves}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-ink-muted uppercase tracking-[0.14em] w-20 shrink-0">
                        Aligned
                      </dt>
                      <dd className="text-ink font-mono tabular">{f.sdg}</dd>
                    </div>
                  </dl>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read the design brief
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp className="mt-10">
          <Link to="/programs" className="link-arrow">
            See all nine programmes <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function FoundersLetter() {
  const commitments = [
    "Community-led design — every programme begins by listening, not announcing.",
    "Independent impact audits — third-party evaluation, published in full.",
    "Open finances — every rupee accounted for, in plain English and Marathi.",
    "No overhead inflation — we will not grow our office faster than our work.",
    "Public learning — what fails will be documented as honestly as what works.",
  ];
  return (
    <section className="bg-sandstone/40 border-y border-hairline">
      <div className="container-narrow py-20 lg:py-28">
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
              §04 — A letter, from Mumbai
            </span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-ink text-balance">
            We are starting today.{" "}
            <span className="font-display-italic text-gold">
              Here is what we promise.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={160}>
          <div className="mt-10 space-y-5 text-[17px] leading-[1.75] text-ink text-pretty">
            <p>
              We registered Omni Life Care Foundation in Mumbai with one
              uncomfortable observation: India's care system asks people to
              cross it on their own. A woman with anxiety walks one road. Her
              elderly father with diabetes walks another. Her daughter, looking
              for a scholarship, walks a third. None of these roads meet — and
              most of them stop short of her village.
            </p>
            <p>
              We don't think a fifth road is the answer. We think the roads
              should meet. So our work is built around a single idea: one
              community health worker, one continuum of care, four pillars
              that share information, training and trust.
            </p>
            <p>
              We are new. We will say that on every page of this website. What
              we can promise — today, before we have a single annual report to
              show you — is how we will work.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={240}>
          <ol className="mt-10 space-y-4 border-t border-hairline pt-8">
            {commitments.map((c, i) => (
              <li key={c} className="flex gap-5">
                <span className="font-mono text-[11px] tabular text-ink-muted pt-1 w-8 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-[16px] leading-relaxed text-ink text-pretty">
                  {c}
                </span>
              </li>
            ))}
          </ol>
        </FadeUp>

        <FadeUp delay={320}>
          <div className="mt-12 border-t border-hairline pt-8">
            <p className="font-display-italic text-2xl text-ink">
              The Founding Trustees
            </p>
            <p className="mt-2 text-sm text-ink-muted font-mono uppercase tracking-[0.16em]">
              Omni Life Care Foundation · Mumbai · 2026
            </p>
            <div className="mt-6">
              <Link to="/about/leadership" className="link-arrow">
                Meet the trustees <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function FoundingPartners() {
  const audiences = [
    {
      who: "For CSR teams",
      title: "Anchor a pillar. Shape the model.",
      body:
        "Co-design a Schedule VII–aligned programme with us from the ground up. You get audit-ready reporting; we get the room to build something that lasts.",
      cta: "Open a CSR conversation",
      href: "/partner/csr",
    },
    {
      who: "For institutions",
      title: "Co-design a programme.",
      body:
        "Hospitals, district health offices, research bodies and academic institutions: bring us a question, a cohort, or a community — let's build the protocol together.",
      cta: "Propose a collaboration",
      href: "/get-involved",
    },
    {
      who: "For individuals",
      title: "Fund the first hundred families.",
      body:
        "Your contribution is 12A-receipted today and will be 80G tax-exempt the moment our application is approved. Every rupee is reported publicly.",
      cta: "Give what you can",
      href: "/donate",
    },
  ];
  return (
    <section className="bg-sage border-y border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
              §05 — Founding partners
            </span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>
        </FadeUp>
        <FadeUp delay={80}>
          <h2 className="font-sans font-semibold text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-ink max-w-3xl text-balance">
            You can fund a foundation at year ten.{" "}
            <span className="font-display-italic text-gold">
              Or you can help shape one at month one.
            </span>
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {audiences.map((a, i) => (
            <FadeUp key={a.who} delay={i * 90}>
              <Link
                to={a.href}
                className="group flex flex-col h-full bg-snow p-8 lg:p-10 transition-[background-color,box-shadow] duration-300 ease-out hover:bg-canvas hover:shadow-[0_1px_2px_rgba(28,0,96,0.05),0_18px_36px_-18px_rgba(28,0,96,0.18)]"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular">
                  {a.who}
                </div>
                <h3 className="mt-6 font-serif text-[1.65rem] lg:text-[1.85rem] leading-[1.1] text-ink text-balance">
                  {a.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-muted flex-1 text-pretty">
                  {a.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceBand() {
  const plain: Record<string, string> = {
    "12A": "Your donation qualifies for tax deduction under Indian law.",
    "80G": "Application in progress — 50% deduction once approved.",
    "CSR-1": "Required for corporate CSR contributions under the Companies Act.",
    "FCRA": "Required to receive foreign contributions — not yet applicable.",
  };

  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 mb-14">
          <FadeUp className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
                §06 — Compliance & Transparency
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              The paperwork donors{" "}
              <span className="font-display-italic text-gold">should</span>{" "}
              ask for.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:col-start-8 lg:pt-3" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              We are publishing our compliance status the day we go live —
              including the registrations still in progress. Nothing hidden,
              nothing implied.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {COMPLIANCE.map((c, i) => (
            <FadeUp key={c.label} delay={i * 70}>
              <div className="bg-snow h-full p-7 flex flex-col">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <div className="mt-6 font-serif text-2xl text-ink leading-none">
                  {c.label}
                </div>
                <p className="mt-3 text-[13.5px] text-ink-muted leading-relaxed flex-1 text-pretty">
                  {plain[c.label] ?? c.desc}
                </p>
                <div className="mt-5 font-mono text-[11px] tabular uppercase tracking-[0.14em] text-ink-muted">
                  {c.id}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-ink-muted">
            Annual report for year one will be published, in full, in 2027.
          </p>
          <Link to="/about/compliance" className="link-arrow">
            View all registrations <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative bg-ink text-canvas overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(180,140,60,0.15), transparent 45%), radial-gradient(circle at 85% 80%, rgba(28,0,96,0.6), transparent 50%)",
        }}
      />
      <div className="container-editorial relative py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 items-end">
          <FadeUp className="lg:col-span-8">
            <p className="font-mono text-[11px] tabular uppercase tracking-[0.22em] text-canvas/55 mb-8">
              §07 — Closing
            </p>
            <h2 className="font-sans font-semibold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.025em] text-canvas text-balance">
              Health doesn't live in silos.{" "}
              <span className="font-display-italic text-gold">
                Your support shouldn't either.
              </span>
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-4" delay={120}>
            <p className="text-[15px] leading-relaxed text-canvas/75 text-pretty">
              One foundation. Four pillars. One conversation away from being
              part of it.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <PillButton to="/partner/csr" variant="on-dark">
                Become a founding partner
              </PillButton>
              <PillButton to="/about/omni-care-model" variant="on-dark">
                Read the model
              </PillButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function NewsletterBand() {
  return (
    <section className="bg-sandstone/40 border-t border-hairline">
      <div className="container-narrow py-16 lg:py-20 text-center">
        <FadeUp>
          <p className="font-mono text-[11px] tabular uppercase tracking-[0.22em] text-ink-muted mb-4">
            Field notes
          </p>
          <h3 className="font-sans font-semibold text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
            Quarterly field notes from Mumbai.{" "}
            <span className="font-display-italic text-gold">
              What we built. What failed. What we learned.
            </span>
          </h3>
          <p className="lead mt-4">
            Four honest letters a year. No fundraising drumbeats, no spam.
          </p>
          <form
            className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — you're in. (Newsletter wiring is Phase 2.)");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 h-12 px-4 bg-snow border border-hairline focus:border-primary text-base outline-none"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-ink-muted">
            By subscribing you agree to our{" "}
            <Link to="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
