import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck, FileCheck2, Building2, Heart, HandHeart, Users, Download } from "lucide-react";
import heroImg from "@/assets/hero-community-health.jpg";
import storySunita from "@/assets/story-sunita.jpg";
import { COMPLIANCE, PILLARS, PROGRAMS, SITE, STATS, STORIES, PILLAR_BY_ID } from "@/lib/site";
import { OmniCareDiagram } from "@/components/OmniCareDiagram";
import { CountUp } from "@/components/CountUp";
import { FadeUp } from "@/components/FadeUp";
import { ProgramCard } from "@/components/ProgramCard";
import { IndiaMap } from "@/components/IndiaMap";

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
    <section className="relative bg-canvas overflow-hidden">
      <div className="container-editorial pt-10 pb-12 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <FadeUp className="order-2 lg:order-1">
            <div className="eyebrow mb-5">India · Healthcare · Community Wellbeing</div>
            <h1 className="display-xl">
              Equitable, dignified care for every community in India.
            </h1>
            <p className="lead mt-6 max-w-xl">
              We strengthen community health and wellbeing through inclusive,
              community-centred initiatives that improve access to essential care
              across India's underserved populations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PillButton to="/partner/csr" variant="primary">
                Partner with Us
              </PillButton>
              <PillButton to="/donate" variant="ghost">
                Make a Donation
              </PillButton>
            </div>
            <ul
              aria-label="Compliance and registrations"
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-muted"
            >
              {COMPLIANCE.map((c) => (
                <li key={c.label} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{c.label} {c.label === "12A" ? "registered" : c.label === "80G" ? "tax exempt" : c.label === "CSR-1" ? "certified" : "compliant"}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="A community health worker speaking with an elderly woman outside a rural clinic in Maharashtra, India."
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/70 to-transparent">
                <p className="text-canvas/90 text-xs font-mono tabular">
                  Solapur district · Maharashtra
                </p>
              </div>
            </div>
          </FadeUp>
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
    <section className="bg-sage border-y border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-end mb-12">
          <FadeUp>
            <div className="eyebrow mb-4">Our Approach</div>
            <h2 className="display-lg">
              The Omni Care Model — four pillars, one integrated approach.
            </h2>
          </FadeUp>
          <FadeUp delay={80}>
            <p className="lead">
              Health doesn't live in silos. Mental wellbeing, social growth, inclusive
              care, and human potential are interdependent — and our programmes are
              designed to work as a single system, not parallel projects.
            </p>
            <OmniCareDiagram className="mt-6" width={320} height={140} />
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 80}>
              <Link
                to={p.href}
                className="group block bg-snow border border-hairline hover:border-ink-muted p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(11,59,60,0.06)] h-full"
                style={{ borderLeft: `3px solid ${p.color}` }}
              >
                <div className="font-mono text-xs text-ink-muted tabular">{p.number}</div>
                <h3 className="mt-3 font-serif text-xl text-ink leading-snug">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {p.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-10">
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
                  className="h-full w-full object-cover"
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
                className="group block h-full bg-snow border border-hairline hover:border-primary p-8 lg:p-10 transition-all duration-200 hover:-translate-y-0.5"
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
                className="block bg-snow border border-hairline p-6 h-full hover:border-ink-muted hover:-translate-y-0.5 transition-all"
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
