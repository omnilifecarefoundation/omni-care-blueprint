import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { DestinationCard } from "@/components/ui/card-21";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImg from "@/assets/hero-community.jpg";
import { PROGRAMS, PILLARS } from "@/lib/site";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Omni Life Care Foundation - Care that arrives where people already live. Mumbai.",
      },
      {
        name: "description",
        content:
          "A new Mumbai non-profit bringing mental health, women's health, inclusive care and community health under one team - so a family never has to ask in four different places.",
      },
      {
        property: "og:title",
        content:
          "Omni Life Care Foundation - Care that arrives where people already live.",
      },
      {
        property: "og:description",
        content:
          "Four kinds of care, one team, one Mumbai foundation. Founding partners welcome.",
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
      <NeedHelp />
      <Manifesto />
      <WhatWeDo />
      <Values />
      <WhyItMatters />
      <Programmes />
      <FoundersNote />
      <SDGs />
      <PartnerBand />
      <Trust />
      <ClosingCTA />
      <Newsletter />
    </>
  );
}

/* ============================================================
   1. HERO - emotional headline, Ogilvy long subhead
   ============================================================ */
function Hero() {
  return (
    <section className="relative bg-primary text-snow overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(115,91,246,0.30), transparent 45%), radial-gradient(circle at 88% 80%, rgba(255,214,0,0.10), transparent 40%)",
        }}
      />
      <div className="container-editorial relative pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left - content */}
          <div className="lg:col-span-7 space-y-7">
            <FadeUp delay={0}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-snow/20 bg-snow/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/85">
                <span className="font-semibold text-gold">Non-profit</span>
                <span className="h-3 w-px bg-snow/25" />
                <span>Mumbai, India</span>
              </span>
            </FadeUp>

            <FadeUp delay={80}>
              <h1 className="font-sans font-semibold text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.02] tracking-[-0.025em] text-snow text-balance">
                When help is needed,
                <br />
                no one should be sent to{" "}
                <em className="font-serif italic font-medium text-gold">
                  four different doors.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={160}>
              <p className="max-w-xl text-[1.0625rem] lg:text-[1.15rem] leading-[1.6] text-snow/80 text-pretty">
                Omni Life Care Foundation is a new Mumbai non-profit bringing
                mental health, women&rsquo;s health, inclusive care and
                community health under one team - so a family never has
                to ask in four different places.
              </p>
            </FadeUp>

            <FadeUp delay={240}>
              <div className="flex flex-col sm:flex-row gap-3">
                <PillButton to="/partner/csr" variant="on-dark">
                  Become a founding partner
                </PillButton>
                <PillButton to="/about" variant="ghost">
                  Why we exist
                </PillButton>
              </div>
            </FadeUp>

            <FadeUp delay={320}>
              <ul className="pt-6 mt-2 border-t border-snow/15 flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-snow/70">
                {[
                  "12A registered",
                  "80G applied",
                  "CSR-1 in progress",
                  "Headquartered in Mumbai",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 tabular-nums tracking-wide"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Right - photo */}
          <div className="lg:col-span-5">
            <FadeUp delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/40 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55),0_2px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={heroImg}
                  alt="A community gathered in a Mumbai neighbourhood - where Omni Life Care Foundation begins its work."
                  width={1200}
                  height={1500}
                  fetchPriority="high"
                  className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-snow/15"
                />
                <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink/70 backdrop-blur-sm border border-snow/15 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.16em] text-snow/85">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    Field, Mumbai
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   1b. NEED HELP - direct routing for visitors seeking support
   ============================================================ */
function NeedHelp() {
  const categories = [
    {
      slug: "mental-health",
      name: "Mental Health",
      body: "Counselling, emotional support, and referrals.",
      themeColor: "232 97% 49%",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "elder-care",
      name: "Elder Care",
      body: "Support for ageing adults and caregivers.",
      themeColor: "333 84% 47%",
      image:
        "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "community-support",
      name: "Community Support",
      body: "Local resources, outreach, and assistance.",
      themeColor: "247 91% 66%",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "care-navigation",
      name: "Care Navigation",
      body: "Help finding the right services and next steps.",
      themeColor: "232 97% 49%",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">Need support</p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Need help{" "}
              <em className="font-serif italic font-medium">now?</em>
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              Whether you're looking for elder support, mental health
              guidance, community assistance, or help navigating care
              services, we're here to point you in the right direction.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {categories.map((c, i) => (
            <FadeUp key={c.slug} delay={i * 70} as="li">
              <DestinationCard
                imageUrl={c.image}
                location={c.name}
                stats={c.body}
                href={`/get-help#${c.slug}`}
                themeColor={c.themeColor}
                ctaLabel="Start here"
              />
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={120}>
          <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-sage border border-hairline p-6 lg:p-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-serif italic text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-ink text-pretty max-w-2xl">
              You don't need to know exactly what kind of help you need. Start
              with a conversation and we'll help guide you.
            </p>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <PillButton to="/get-help" variant="action">
                Get Help
              </PillButton>
              <PillButton to="/contact" variant="primary">
                Contact Our Team
              </PillButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   2. MANIFESTO - single editorial promise
   ============================================================ */
function Manifesto() {
  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial py-14 lg:py-16">
        <FadeUp>
          <p className="eyebrow mb-5">Our promise</p>
        </FadeUp>
        <FadeUp delay={80}>
          <p className="font-sans font-medium text-[clamp(1.375rem,2.4vw,1.875rem)] leading-[1.25] tracking-[-0.015em] text-ink text-balance max-w-4xl">
            Health that meets people where they already live -{" "}
            <em className="font-serif italic font-medium text-primary">
              designed with the community, reported in the open.
            </em>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   3. WHAT WE DO - 4 pillars of the Omni Care Model
   ============================================================ */
function WhatWeDo() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">The Omni Care Model</p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Four kinds of care.{" "}
              <em className="font-serif italic font-medium">One team.</em>
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              Most health problems arrive together. Mental, social, inclusive
              and human - our four pillars are designed to do the same,
              so a person never has to choose which kind of help to ask for
              first.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={120}>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="relative -mx-2"
          >
            <CarouselContent className="-ml-3 lg:-ml-4">
              {PILLARS.map((p) => (
                <CarouselItem
                  key={p.id}
                  className="pl-3 lg:pl-4 basis-[82%] sm:basis-1/2 lg:basis-1/3"
                >
                  <DestinationCard
                    imageUrl={p.image}
                    location={p.name}
                    stats={p.description}
                    href={p.href}
                    themeColor={p.themeColor}
                    eyebrow={p.sdg}
                    number={`Pillar ${p.number}`}
                    ctaLabel="Explore pillar"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                Swipe / drag · {PILLARS.length} pillars
              </p>
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-ink/15 bg-snow text-ink hover:bg-ink hover:text-snow transition-colors" />
                <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-ink/15 bg-snow text-ink hover:bg-ink hover:text-snow transition-colors" />
              </div>
            </div>
          </Carousel>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   4. VALUES - five commitments you can hold us to
   ============================================================ */
function Values() {
  const values = [
    {
      n: "01",
      title: "Dignity & Respect",
      body: "Every person we serve is treated as a person first - never a case number.",
    },
    {
      n: "02",
      title: "Inclusion & Equity",
      body: "We start with the people most often left out: women, the elderly, persons with disability.",
    },
    {
      n: "03",
      title: "Community-Centred",
      body: "Programmes are designed with the people they serve - not for them.",
    },
    {
      n: "04",
      title: "Collaboration",
      body: "We partner with local groups, institutions and government - not around them.",
    },
    {
      n: "05",
      title: "Impact & Sustainability",
      body: "We measure what changes, publish what works, and stop what doesn&rsquo;t.",
    },
  ];
  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">What we stand for</p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Five commitments,{" "}
              <em className="font-serif italic font-medium">
                you can hold us to.
              </em>
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              A new foundation has no track record. So instead of promises
              about the future, here are five rules we&rsquo;ve written for
              ourselves from day one.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {values.map((v, i) => (
            <FadeUp key={v.n} delay={i * 60} as="li">
              <div className="h-full rounded-xl bg-canvas border border-hairline p-6 flex flex-col gap-3 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  {v.n}
                </span>
                <h3 className="font-sans font-semibold text-[1rem] leading-snug text-ink text-balance">
                  {v.title}
                </h3>
                <p
                  className="text-[13.5px] leading-relaxed text-ink-muted text-pretty"
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   5. WHY IT MATTERS - three sourced facts
   ============================================================ */
function WhyItMatters() {
  const facts = [
    {
      n: "70–80%",
      label: "Mental-health treatment gap",
      body: "of Indians with common mental disorders never receive care, per the National Mental Health Survey.",
    },
    {
      n: "1 in 2",
      label: "Women",
      body: "in India lack consistent access to life-cycle health services - from adolescence to elderly care.",
    },
    {
      n: "Fragmented",
      label: "Care today",
      body: "Mental health, women&rsquo;s health, disability and chronic care are still delivered as separate systems.",
    },
  ];

  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <p className="eyebrow mb-4">Why it matters</p>
          <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance max-w-3xl">
            India doesn&rsquo;t lack compassion.{" "}
            <em className="font-serif italic font-medium">
              It lacks care that reaches the last mile.
            </em>
          </h2>
        </FadeUp>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {facts.map((f, i) => (
            <FadeUp key={f.label} delay={(i + 1) * 80} as="li">
              <div className="border-t border-ink/20 pt-5">
                <div className="font-sans font-semibold text-[clamp(2rem,3.4vw,2.75rem)] leading-none tracking-[-0.02em] text-ink tabular-nums">
                  {f.n}
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  {f.label}
                </div>
                <p
                  className="mt-3 text-[15px] leading-relaxed text-ink text-pretty"
                  dangerouslySetInnerHTML={{ __html: f.body }}
                />
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   6. PROGRAMMES - four flagship cards
   ============================================================ */
function Programmes() {
  const flagship = [PROGRAMS[0], PROGRAMS[2], PROGRAMS[1], PROGRAMS[3]];

  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">Our programmes</p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Five programmes,{" "}
              <em className="font-serif italic font-medium">ready to go.</em>
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              Each one is fully designed and waiting on funding and
              partnerships. The first cohorts will run in and around Mumbai.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {flagship.map((p, i) => (
            <FadeUp key={p.slug} delay={i * 70} as="li">
              <Link
                to={p.href}
                className="group block overflow-hidden rounded-2xl bg-snow border border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_8px_24px_-16px_rgba(4, 55, 242,0.12)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_4px_8px_rgba(4, 55, 242,0.06),0_22px_44px_-22px_rgba(4, 55, 242,0.32)] active:scale-[0.995]"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-sage">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1200}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="font-sans font-semibold text-[1.25rem] leading-snug text-ink text-balance">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-muted text-pretty">
                    {p.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Read about this programme
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={300} className="mt-10">
          <Link to="/programs" className="link-arrow">
            See all programmes
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   7. FOUNDERS NOTE - short, signed, plain
   ============================================================ */
function FoundersNote() {
  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-6 text-center">A note from the founders</p>
          </FadeUp>
          <FadeUp delay={80}>
            <p className="text-[1.0625rem] lg:text-[1.15rem] leading-[1.7] text-ink text-pretty">
              We started Omni Life Care because we&rsquo;ve watched the same
              family visit three different places for help - and walk
              home with none.{" "}
              <em className="font-serif italic">We want to fix that.</em>
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="mt-5 text-[1.0625rem] lg:text-[1.15rem] leading-[1.7] text-ink text-pretty">
              We&rsquo;re a brand-new trust. So instead of promising big
              numbers, we&rsquo;re promising five things you can hold us to:
              we&rsquo;ll design with the community, share our finances
              openly, publish what works <em>and</em> what doesn&rsquo;t, keep
              overheads honest, and invite outside audits from year one.
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <p className="mt-5 text-[1.0625rem] lg:text-[1.15rem] leading-[1.7] text-ink text-pretty">
              If that sounds like the kind of organisation you&rsquo;d like
              to back, we&rsquo;d love to hear from you.
            </p>
          </FadeUp>
          <FadeUp delay={320}>
            <div className="mt-8 pt-5 border-t border-ink/15 text-[13px] font-mono uppercase tracking-[0.18em] text-ink-muted">
              The founding team &middot; Mumbai
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. SDGs - the global goals we contribute to
   ============================================================ */
function SDGs() {
  const goals = [
    { n: "03", title: "Good Health & Well-Being", color: "#4C9F38", primary: true },
    { n: "05", title: "Gender Equality", color: "#FF3A21" },
    { n: "04", title: "Quality Education", color: "#C5192D" },
    { n: "10", title: "Reduced Inequalities", color: "#DD1367" },
    { n: "16", title: "Peace, Justice & Strong Institutions", color: "#00689D" },
    { n: "17", title: "Partnerships for the Goals", color: "#19486A" },
  ];
  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <FadeUp className="lg:col-span-4">
            <p className="eyebrow mb-4">Aligned with the UN SDGs</p>
            <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.125rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
              Local work, measured against{" "}
              <em className="font-serif italic font-medium">global goals.</em>
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-muted text-pretty">
              Every programme is mapped to the Sustainable Development Goals
              it advances - so the impact we report can be compared, not
              just admired.
            </p>
          </FadeUp>

          <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
            {goals.map((g, i) => (
              <FadeUp key={g.n} delay={i * 50} as="li">
                <div
                  className={`group relative h-full overflow-hidden rounded-xl border p-5 pt-[1.375rem] flex flex-col gap-2 transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 ${
                    g.primary
                      ? "bg-ink text-snow border-ink shadow-[0_8px_24px_-16px_rgba(4, 55, 242,0.4)]"
                      : "bg-canvas border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04)]"
                  }`}
                  style={{
                    ['--sdg' as string]: g.color,
                    boxShadow: undefined,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${g.color}55`;
                    e.currentTarget.style.boxShadow = `0 14px 32px -20px ${g.color}66, 0 1px 2px rgba(4, 55, 242,0.04)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] tabular-nums ${
                        g.primary ? "text-gold" : "text-ink-muted"
                      }`}
                    >
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full ring-2 ring-inset"
                        style={{
                          backgroundColor: g.color,
                          ['--tw-ring-color' as string]: `${g.color}33`,
                        }}
                      />
                      SDG {g.n}
                    </span>
                    {g.primary && (
                      <span className="text-[10px] uppercase tracking-[0.16em] text-snow/70">
                        Primary
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-sans font-semibold text-[14.5px] leading-snug text-balance ${
                      g.primary ? "text-snow" : "text-ink"
                    }`}
                  >
                    {g.title}
                  </h3>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   9. PARTNER BAND - dark, three audiences
   ============================================================ */
function PartnerBand() {
  const cards = [
    {
      tag: "For CSR teams",
      title: "Anchor a pillar from day one.",
      body: "Co-fund one of our four care pillars and help shape how it&rsquo;s built.",
      href: "/partner/csr",
      cta: "Talk to our CSR lead",
    },
    {
      tag: "For institutions",
      title: "Co-design a programme.",
      body: "Partner with us on research, training, or service delivery in Mumbai and beyond.",
      href: "/get-involved",
      cta: "Explore partnerships",
    },
    {
      tag: "For individuals",
      title: "Fund the first hundred families.",
      body: "Small, recurring gifts let us start serving real families this year.",
      href: "/donate",
      cta: "Donate",
    },
  ];

  return (
    <section className="bg-primary text-snow">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
          <FadeUp className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-snow/60 mb-4">
              Partner with us
            </p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-snow text-balance">
              Three ways to{" "}
              <em className="font-serif italic font-medium text-gold">
                help build this.
              </em>
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-snow/70 text-pretty">
              You don&rsquo;t need a million-rupee budget to be a founding
              partner. You need a willingness to start.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <FadeUp key={c.tag} delay={i * 80} as="li">
              <Link
                to={c.href}
                className="group flex h-full flex-col gap-5 rounded-2xl border border-snow/15 bg-snow/[0.04] p-7 lg:p-8 transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-snow/30 hover:bg-snow/[0.08] active:scale-[0.99]"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                  {c.tag}
                </span>
                <h3 className="font-sans font-semibold text-[1.375rem] leading-snug text-snow text-balance">
                  {c.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed text-snow/75 text-pretty"
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-gold transition-transform duration-300 ease-out group-hover:translate-x-1">
                  {c.cta}
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

/* ============================================================
   10. TRUST & COMPLIANCE
   ============================================================ */
function Trust() {
  const items = [
    {
      label: "12A",
      title: "Registered with the Income Tax Department.",
      body: "Our trust is legally recognised as a non-profit in India.",
    },
    {
      label: "80G",
      title: "Donations are tax-deductible.",
      body: "Application filed; expected to be granted in the first year.",
    },
    {
      label: "CSR-1",
      title: "Eligible to receive CSR contributions.",
      body: "Registration with the Ministry of Corporate Affairs is in progress.",
    },
  ];

  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <FadeUp className="lg:col-span-4">
            <p className="eyebrow mb-4">Trust &amp; compliance</p>
            <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.125rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
              Registered, transparent,{" "}
              <em className="font-serif italic font-medium">and accountable.</em>
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-muted text-pretty">
              All our registrations and annual reports will be public on our
              transparency page once issued.
            </p>
          </FadeUp>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {items.map((it, i) => (
              <FadeUp key={it.label} delay={i * 70} as="li">
                <div className="h-full rounded-xl bg-snow border border-hairline p-6 flex flex-col gap-3 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink tabular-nums">
                      {it.label}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-[15px] leading-snug text-ink text-balance">
                    {it.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-muted text-pretty">
                    {it.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. CLOSING CTA
   ============================================================ */
function ClosingCTA() {
  return (
    <section className="relative bg-primary text-snow overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(115,91,246,0.30), transparent 45%), radial-gradient(circle at 15% 90%, rgba(255,214,0,0.10), transparent 40%)",
        }}
      />
      <div className="container-editorial relative py-20 lg:py-28">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-snow/60 mb-5">
              Closing
            </p>
          </FadeUp>
          <FadeUp delay={80}>
            <h2 className="font-sans font-semibold text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05] tracking-[-0.025em] text-snow text-balance">
              The first chapter is being written.{" "}
              <em className="font-serif italic font-medium text-gold">
                Help write it.
              </em>
            </h2>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="mt-5 max-w-xl text-[1.0625rem] lg:text-[1.15rem] leading-[1.6] text-snow/80 text-pretty">
              We&rsquo;re registered, ready, and looking for our first
              partners. Whatever your role - corporate, institutional,
              individual - there&rsquo;s a way in.
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PillButton to="/partner/csr" variant="on-dark">
                Become a founding partner
              </PillButton>
              <PillButton to="/contact" variant="ghost">
                Talk to the team
              </PillButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   12. NEWSLETTER
   ============================================================ */
function Newsletter() {
  return (
    <section className="bg-snow border-t border-hairline">
      <div className="container-editorial py-16 lg:py-20">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-3xl bg-primary text-snow px-6 sm:px-10 lg:px-14 py-12 lg:py-14 shadow-[0_1px_2px_rgba(11,59,60,0.06),0_30px_60px_-30px_rgba(4, 55, 242,0.45)]"
          >
            {/* atmospheric gradient */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(60% 80% at 100% 0%, rgba(255,214,0,0.18), transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(148,133,249,0.22), transparent 65%)",
              }}
            />
            {/* faint grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 backdrop-blur-sm px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] tabular-nums text-snow/80">
                    Issue 00 · Quarterly · Free
                  </span>
                </div>
                <h3 className="mt-5 font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-snow text-balance">
                  Field notes from Mumbai,{" "}
                  <em className="font-serif italic font-medium text-gold">
                    every three months.
                  </em>
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-snow/75 text-pretty">
                  What we built, what worked, and what didn't - straight from
                  the team. No spam, no fundraising drip. Unsubscribe in one
                  click.
                </p>
              </div>

              <div className="lg:col-span-5">
                <form
                  className="group relative"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="email-newsletter" className="sr-only">
                    Your email
                  </label>
                  {/* concentric: outer rounded-full p-1.5, inner button rounded-full */}
                  <div className="flex items-center gap-1.5 rounded-full bg-snow/10 backdrop-blur-sm p-1.5 ring-1 ring-snow/20 transition-[box-shadow,background-color] duration-200 ease-out focus-within:bg-snow/15 focus-within:ring-snow/40 focus-within:shadow-[0_0_0_4px_rgba(255,214,0,0.18)]">
                    <input
                      id="email-newsletter"
                      type="email"
                      required
                      placeholder="you@work.com"
                      autoComplete="email"
                      className="flex-1 min-w-0 h-11 px-4 bg-transparent text-[14px] text-snow placeholder:text-snow/45 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 h-11 px-5 rounded-full bg-snow text-ink text-[13px] font-semibold tracking-[0.01em] transition-[background-color,scale,box-shadow] duration-200 ease-out hover:bg-[#F1F1F4] hover:shadow-[0_6px_18px_-6px_rgba(0,0,0,0.45)] active:scale-[0.96]"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 flex items-center gap-2 text-[12px] text-snow/55">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="11" width="16" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                  </svg>
                  We never share your email. Read by ~120 partners &amp; peers.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

