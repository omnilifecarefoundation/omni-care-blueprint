import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck, FileCheck2, Building2, Heart, HandHeart, Users, Download } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import storySunita from "@/assets/story-sunita.jpg";
import { COMPLIANCE, PILLARS, PROGRAMS, SITE, STATS, STORIES, PILLAR_BY_ID } from "@/lib/site";
import { OmniCareDiagram } from "@/components/OmniCareDiagram";
import { CountUp } from "@/components/CountUp";
import { FadeUp } from "@/components/FadeUp";
import { ProgramCard } from "@/components/ProgramCard";
import { IndiaMap } from "@/components/IndiaMap";
import { PillButton } from "@/components/ui-axion/PillButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omni Life Care Foundation — Care, integrated. Communities, strengthened." },
      {
        name: "description",
        content:
          "We strengthen community health and wellbeing across India through an integrated model of mental health, inclusive care, women's health, and human potential.",
      },
      { property: "og:title", content: "Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "An India-based foundation strengthening community health through an integrated, evidence-led model of care.",
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
      <ImpactCounters />
      <WhoWeAre />
      <OmniCareSection />
      <ProgramsSection />
      <ImpactSplit />
      <StoriesSection />
      <CSRBand />
      <ResearchTeaser />
      <GetInvolved />
      <NewsroomStrip />
      <ComplianceBand />
      <NewsletterBand />
    </>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative bg-canvas border-b border-hairline overflow-hidden">
      <div className="container-editorial pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="lg:col-span-7 space-y-8">
            <FadeUp delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-sage border border-hairline rounded-full pl-2 pr-4 py-1.5 text-[12px] text-ink">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="font-mono tabular text-ink-muted">Live</span>
                  <span className="text-ink-muted">·</span>
                  <span>Field operations active across 6 states in India</span>
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="font-sans font-semibold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.025em] text-ink text-balance">
                Care that reaches{" "}
                <span className="font-display-italic text-gold">every doorstep</span>{" "}
                in India.
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="lead max-w-xl text-pretty">
                For 1.2 million people across 6 states, dignified healthcare is no
                longer a question of where you live. It's already on the way —
                delivered by 210 trained community health workers, every day.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <PillButton to="/partner/csr" variant="primary">
                  Partner with Us
                </PillButton>
                <PillButton to="/donate" variant="ghost">
                  Fund a Community
                </PillButton>
              </div>
            </FadeUp>

            <FadeUp delay={400}>
              <dl className="pt-8 border-t border-hairline grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
                {[
                  { v: "1.2M+", l: "Lives reached" },
                  { v: "210", l: "CHWs trained" },
                  { v: "6", l: "States active" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-sans font-bold text-2xl lg:text-3xl text-ink tabular leading-none">
                      {s.v}
                    </dt>
                    <dd className="eyebrow mt-2">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* Right — framed photo + floating compliance card */}
          <div className="lg:col-span-5 relative">
            <FadeUp delay={150}>
              <div className="relative">
                {/* Offset tint layer */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary-glow/20"
                />
                {/* Image card — shadows over borders */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sage shadow-[0_1px_2px_rgba(28,0,96,0.08),0_24px_60px_-20px_rgba(28,0,96,0.28)]">
                  <img
                    src={heroImg}
                    alt="A bustling Indian street market with vendors and community members gathered around stalls of fresh produce."
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
                    Where India lives, care arrives.
                  </p>
                </div>


                {/* Floating compliance card */}
                <div className="hidden lg:block absolute -bottom-8 -left-10 bg-canvas border border-hairline rounded-xl shadow-xl p-5 w-[260px]">
                  <p className="eyebrow border-b border-hairline pb-2 mb-3">
                    Statutory Compliance
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { code: "12A", label: "Registered" },
                      { code: "80G", label: "Tax exempt" },
                      { code: "CSR-1", label: "CSR ready" },
                      { code: "FCRA", label: "Compliant" },
                    ].map((c) => (
                      <div key={c.code} className="flex items-center gap-2.5">
                        <div className="flex-shrink-0 h-9 w-9 rounded-md bg-sage flex items-center justify-center font-sans font-bold text-[10px] text-primary">
                          {c.code}
                        </div>
                        <span className="text-[11px] font-medium text-ink-muted leading-tight">
                          {c.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile/tablet compliance row */}
              <div className="lg:hidden mt-6 bg-canvas border border-hairline rounded-xl p-4">
                <p className="eyebrow mb-3">Statutory Compliance</p>
                <div className="flex flex-wrap gap-2">
                  {["12A", "80G", "CSR-1", "FCRA"].map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-md bg-sage text-[11px] font-sans font-bold text-primary">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactCounters() {
  return (
    <section className="border-y border-hairline bg-snow">
      <div className="container-editorial py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 60}>
              <div className="border-l border-hairline pl-5 lg:pl-6">
                <div className="font-sans font-bold text-[clamp(2rem,4vw,3.25rem)] leading-none text-primary tabular">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-3 h-[2px] w-10 bg-coral" />
                <div className="eyebrow mt-3">{s.label}</div>
                <p className="mt-1.5 text-sm text-ink-muted">{s.context}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-10">
          <Link to="/impact" className="link-arrow">
            See our full impact <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-canvas">
      <div className="container-narrow py-20 lg:py-28 text-center">
        <FadeUp>
          <div className="eyebrow mb-4">About the Foundation</div>
          <h2 className="display-lg">
            A foundation built on dignity, inclusion, and community.
          </h2>
          <p className="lead mt-6">
            We are an India-based foundation working at the intersection of community
            health, mental wellbeing, inclusive care, and human potential. Our model
            is integrated, evidence-led, and designed with — not just for — the
            communities we serve.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <span className="chip">Dignity & Respect</span>
            <span className="chip">Inclusion & Equity</span>
            <span className="chip">Community-Centred</span>
            <span className="chip">Collaboration</span>
            <span className="chip">Impact & Sustainability</span>
          </div>
          <div className="mt-8">
            <Link to="/about" className="link-arrow">
              Learn about our story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function OmniCareSection() {
  return (
    <section className="relative bg-sage border-y border-hairline overflow-hidden">
      {/* Decorative editorial backdrop */}
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
        {/* Editorial header — manifesto layout */}
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 mb-16 lg:mb-24">
          <FadeUp className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-muted tabular">
                §02 — Our Approach
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
                Health doesn't live in silos. Mental wellbeing, social growth,
                inclusive care, and human potential move together — so our
                programmes are designed as a single, interlocking system rather
                than parallel projects.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="bg-snow/60 backdrop-blur-[2px] border border-hairline px-5 py-4 inline-block">
                <OmniCareDiagram width={320} height={120} />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Pillars — editorial rows with oversized numerals */}
        <div className="border-t border-ink/15">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 60}>
              <Link
                to={p.href}
                className="group relative grid grid-cols-12 gap-x-6 gap-y-3 items-baseline py-8 lg:py-10 border-b border-ink/15 transition-colors duration-300 ease-out hover:bg-snow/55"
              >
                {/* Color accent rail */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ backgroundColor: p.color }}
                />

                {/* Oversized outline numeral */}
                <div className="col-span-3 sm:col-span-2 pl-3 sm:pl-5">
                  <div
                    className="font-serif italic leading-none text-[clamp(2.75rem,7vw,5.5rem)] tracking-tight transition-colors duration-300"
                    style={{
                      WebkitTextStroke: "1px currentColor",
                      WebkitTextFillColor: "transparent",
                      color: "rgba(28,0,96,0.35)",
                    }}
                  >
                    <span
                      className="transition-colors duration-300 group-hover:[--num-color:var(--pillar)]"
                      style={
                        {
                          color: "currentColor",
                          ["--pillar" as never]: p.color,
                        } as React.CSSProperties
                      }
                    >
                      {p.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="col-span-9 sm:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-[2rem] leading-[1.1] text-ink text-balance">
                    {p.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 sm:col-span-5 sm:col-start-7">
                  <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                    {p.description}
                  </p>
                </div>

                {/* Explore arrow */}
                <div className="col-span-12 sm:col-span-1 sm:col-start-12 sm:justify-self-end self-center">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 ease-out group-hover:border-ink group-hover:bg-ink group-hover:text-snow group-hover:rotate-[-45deg]"
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

function ProgramsSection() {
  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <FadeUp>
            <div className="eyebrow mb-3">Programmes</div>
            <h2 className="display-lg max-w-xl">
              Nine programmes, designed to work as one.
            </h2>
          </FadeUp>
          <FadeUp delay={80}>
            <Link to="/programs" className="link-arrow">
              View all programmes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.slice(0, 6).map((p, i) => (
            <FadeUp key={p.slug} delay={i * 60}>
              <ProgramCard program={p} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSplit() {
  return (
    <section className="bg-snow border-y border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeUp>
            <div className="eyebrow mb-3">Where & What</div>
            <h3 className="display-md">Where we work, what we change.</h3>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                { v: "38%", t: "Reduction in untreated common mental disorders in Solapur intervention villages." },
                { v: "9,200", t: "Women received life-stage screening and counselling in 2024." },
                { v: "210", t: "Community health workers trained, certified and placed." },
              ].map((m) => (
                <div key={m.v} className="flex gap-5 items-start border-t border-hairline pt-4">
                  <div className="font-sans font-bold text-2xl text-primary tabular w-20 shrink-0">
                    {m.v}
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">{m.t}</p>
                </div>
              ))}
            </div>
            <Link to="/impact" className="link-arrow mt-8">
              Explore full impact dashboard <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="bg-sage p-6 lg:p-10 flex items-center justify-center">
              <IndiaMap className="w-full max-w-[360px] h-auto" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section className="bg-sandstone/40">
      <div className="container-editorial py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <FadeUp>
            <div className="eyebrow mb-3">From the Field</div>
            <h2 className="display-lg max-w-xl">
              Stories from the communities we walk alongside.
            </h2>
          </FadeUp>
          <FadeUp delay={80}>
            <Link to="/impact/stories" className="link-arrow">
              Read all stories <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr_1fr] gap-6 lg:gap-8">
          <FadeUp>
            <article className="bg-snow border border-hairline overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={storySunita}
                  alt="Portrait of Sunita standing outside her home in Solapur district, Maharashtra."
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                />

              </div>
              <div className="p-6">
                <div className="eyebrow text-ink-muted">Mental Wellbeing · Solapur</div>
                <p className="mt-3 font-serif text-xl italic leading-snug text-ink">
                  "Before the Omni team came, I had nowhere to go. Now I lead the
                  women's group in my village."
                </p>
                <div className="mt-4 text-sm text-ink-muted">— Sunita, 52</div>
                <Link to="/impact/stories" className="link-arrow mt-5">
                  Read her story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </FadeUp>

          {STORIES.slice(1).map((s, i) => {
            const pillar = PILLAR_BY_ID[s.pillar];
            return (
              <FadeUp key={s.slug} delay={(i + 1) * 80}>
                <article className="bg-snow border border-hairline p-6 h-full flex flex-col">
                  <span className="chip self-start" style={{ color: pillar.color }}>
                    <span className="chip-dot" />
                    {pillar.name}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-ink leading-snug">
                    {s.headline}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                    {s.preview}
                  </p>
                  <div className="mt-5 text-sm text-ink-muted">
                    — {s.name}, {s.location}
                  </div>
                  <Link to="/impact/stories" className="link-arrow mt-4">
                    Read story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CSRBand() {
  const props = [
    { icon: FileCheck2, title: "Schedule VII aligned", body: "Programmes map directly to CSR mandates under the Companies Act." },
    { icon: ShieldCheck, title: "Audit-ready reporting", body: "Quarterly MIS, impact dashboards, and third-party evaluation." },
    { icon: Building2, title: "End-to-end execution", body: "From co-designed project to last-mile delivery and reporting." },
  ];
  return (
    <section className="bg-ink text-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <FadeUp>
            <div className="eyebrow text-coral mb-4">For Corporate Partners</div>
            <h2 className="display-lg text-canvas">
              Align your CSR with measurable, audit-ready community impact.
            </h2>
            <p className="lead text-canvas/75 mt-5 max-w-xl">
              We work with corporate partners across sectors to design and deliver
              CSR programmes that meet your compliance requirements and create
              genuine, measurable community outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PillButton to="/partner/csr" variant="on-dark">
                Explore CSR Partnership
              </PillButton>
              <PillButton href="/csr-brochure.pdf" variant="on-dark" icon={<Download size={14} />}>
                Download CSR Brochure
              </PillButton>
            </div>
            <p className="mt-6 text-xs text-canvas/55 font-mono tabular">
              Registered under Section 135 of the Companies Act · CSR-1: CSR00045678
            </p>
          </FadeUp>

          <FadeUp delay={120}>
            <ul className="space-y-5">
              {props.map((p) => (
                <li key={p.title} className="flex gap-4 border-t border-canvas/15 pt-5">
                  <p.icon className="h-5 w-5 text-coral shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg text-canvas">{p.title}</h3>
                    <p className="mt-1 text-sm text-canvas/70">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        {/* Partner logos marquee placeholder */}
        <div className="mt-14 border-t border-canvas/15 pt-8">
          <div className="eyebrow text-canvas/50 mb-5">Founding partners and collaborators</div>
          <div className="overflow-hidden">
            <div className="marquee-track text-canvas/40 font-serif text-lg">
              {["District Health Office, Solapur", "ICMR Collaboration", "NIMHANS Affiliate", "TISS Field Partner", "Karnataka Health Mission", "AIIMS Research Network"].concat(["District Health Office, Solapur", "ICMR Collaboration", "NIMHANS Affiliate", "TISS Field Partner", "Karnataka Health Mission", "AIIMS Research Network"]).map((logo, i) => (
                <span key={i} className="whitespace-nowrap">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchTeaser() {
  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeUp>
            <div className="eyebrow mb-3">Research & Knowledge</div>
            <h2 className="display-md max-w-md">
              Evidence-led practice, openly published.
            </h2>
            <article className="mt-8 border border-hairline bg-snow p-6 lg:p-8">
              <div className="font-mono text-xs text-ink-muted tabular">
                RESEARCH PAPER · MAR 2026
              </div>
              <h3 className="mt-3 font-serif text-2xl text-ink leading-snug">
                Integrated community mental health in rural India: a 24-month
                cohort study from Solapur district.
              </h3>
              <p className="mt-3 text-sm text-ink-muted">
                Patil, R., Deshmukh, A., Khan, F. — Omni Life Care Research Group
              </p>
              <Link to="/programs/research-impact-assessment" className="link-arrow mt-5">
                Read publication <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="eyebrow mb-3 invisible lg:visible">Latest insights</div>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {[
                { tag: "Policy Brief", title: "Pathways for integrating mental health into ASHA workflows.", date: "Feb 2026" },
                { tag: "Working Paper", title: "Cost-effectiveness of community-delivered NCD screening at scale.", date: "Jan 2026" },
                { tag: "Field Note", title: "Lessons from training 210 women community health workers.", date: "Dec 2025" },
              ].map((r) => (
                <li key={r.title}>
                  <Link
                    to="/programs/research-impact-assessment"
                    className="group flex items-start gap-5 py-5 hover:bg-sage/40 -mx-2 px-2 transition-colors"
                  >
                    <div className="font-mono text-[11px] text-ink-muted tabular w-24 shrink-0 pt-1">
                      {r.tag.toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-serif text-lg text-ink group-hover:text-primary leading-snug">
                        {r.title}
                      </p>
                      <p className="text-xs text-ink-muted mt-1">{r.date}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-primary mt-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/programs/research-impact-assessment" className="link-arrow mt-6">
              Browse all research <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  const cards = [
    { icon: HandHeart, title: "Partner with Us", sub: "CSR & Institutional", body: "Build long-term, measurable impact with us.", cta: "Become a Partner", href: "/partner/csr" },
    { icon: Heart, title: "Donate", sub: "Support a Programme", body: "Your contribution is 80G tax-exempt.", cta: "Give Now", href: "/donate" },
    { icon: Users, title: "Volunteer", sub: "Time & Skills", body: "Field, research, and remote opportunities.", cta: "Find a Role", href: "/get-involved/volunteer" },
  ];
  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <div className="eyebrow mb-3">Get Involved</div>
          <h2 className="display-lg max-w-xl">Three ways to work with us.</h2>
        </FadeUp>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={i * 80}>
              <Link
                to={c.href}
                className="group block h-full bg-snow border border-hairline p-8 lg:p-10 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-primary hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(28,0,96,0.06),0_16px_32px_-14px_rgba(28,0,96,0.2)]"
              >

                <c.icon className="h-7 w-7 text-primary" aria-hidden="true" strokeWidth={1.5} />
                <div className="mt-6 eyebrow text-ink-muted">{c.sub}</div>
                <h3 className="mt-1 font-serif text-2xl text-ink">{c.title}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{c.body}</p>
                <span className="mt-8 inline-flex items-center gap-1.5 font-semibold text-primary">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsroomStrip() {
  const items = [
    { date: "12 MAY 2026", cat: "EVENT", title: "Omni Life Care convenes community health roundtable in Mumbai." },
    { date: "28 APR 2026", cat: "NEWS", title: "Partnership announced with district administration of Belgaum for CHW expansion." },
    { date: "10 APR 2026", cat: "PRESS", title: "Annual impact report 2024–25 released, with independent third-party evaluation." },
  ];
  return (
    <section className="bg-sage border-y border-hairline">
      <div className="container-editorial py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <FadeUp>
            <div className="eyebrow mb-3">Newsroom</div>
            <h2 className="display-md max-w-md">Latest from the Foundation.</h2>
          </FadeUp>
          <FadeUp delay={80}>
            <Link to="/newsroom" className="link-arrow">
              Visit newsroom <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((n, i) => (
            <FadeUp key={n.title} delay={i * 60}>
              <Link
                to="/newsroom"
                className="block bg-snow border border-hairline p-6 h-full transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-ink-muted hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(28,0,96,0.06),0_12px_28px_-12px_rgba(28,0,96,0.18)]"
              >

                <div className="flex items-center gap-3 font-mono text-[11px] tabular text-ink-muted">
                  <span>{n.date}</span>
                  <span className="text-coral">{n.cat}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg text-ink leading-snug">{n.title}</h3>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceBand() {
  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Governance</div>
            <h2 className="display-md">Transparent, compliant, accountable.</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPLIANCE.map((c, i) => (
            <FadeUp key={c.label} delay={i * 60}>
              <div className="border border-hairline p-6 bg-snow h-full">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <div className="mt-5 font-serif text-xl text-ink">{c.label}</div>
                <p className="mt-1 text-sm text-ink-muted">{c.desc}</p>
                <div className="mt-4 font-mono text-[11px] tabular text-ink-muted">{c.id}</div>
                <Link to="/about/compliance" className="link-arrow mt-4 text-sm">
                  View certificate
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/impact" className="btn btn-secondary">
            <Download className="h-4 w-4" aria-hidden="true" /> Download Annual Report 2024–25
          </Link>
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
          <h3 className="display-md">Stay informed. Stay involved.</h3>
          <p className="lead mt-3">
            Quarterly impact updates, research, and stories from the field. No spam.
          </p>
          <form
            className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — you're in. (Newsletter wiring is Phase 2.)");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 h-12 px-4 bg-snow border border-hairline focus:border-primary text-base outline-none"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="mt-3 text-xs text-ink-muted">
            By subscribing you agree to our{" "}
            <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
