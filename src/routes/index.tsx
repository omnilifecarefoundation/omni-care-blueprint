import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import { PROGRAMS, PILLARS } from "@/lib/site";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Omni Life Care Foundation — Better health, closer to home. Mumbai.",
      },
      {
        name: "description",
        content:
          "A new Mumbai-based non-profit building four kinds of care — mental health, community health, inclusive care, and women's health — that work together instead of separately.",
      },
      {
        property: "og:title",
        content: "Omni Life Care Foundation — Better health, closer to home.",
      },
      {
        property: "og:description",
        content:
          "A new Mumbai-based non-profit. Four kinds of care, designed to work as one. Founding partners welcome.",
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
      <WhatWeDo />
      <WhyItMatters />
      <Programmes />
      <FoundersNote />
      <PartnerBand />
      <Trust />
      <ClosingCTA />
      <Newsletter />
    </>
  );
}

/* ============================================================
   1. HERO — dark indigo, plain headline, real photo
   ============================================================ */
function Hero() {
  return (
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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — content */}
          <div className="lg:col-span-7 space-y-7">
            <FadeUp delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                New non-profit · Mumbai, India
              </span>
            </FadeUp>

            <FadeUp delay={80}>
              <h1 className="font-sans font-semibold text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.02] tracking-[-0.025em] text-snow text-balance">
                Better health,
                <br />
                closer to home.
              </h1>
            </FadeUp>

            <FadeUp delay={160}>
              <p className="max-w-xl text-[1.0625rem] lg:text-[1.15rem] leading-[1.6] text-snow/80 text-pretty">
                We&rsquo;re a new Mumbai-based non-profit building four kinds
                of care &mdash; mental health, community health, inclusive
                care, and women&rsquo;s health &mdash; that work together
                instead of separately.
              </p>
            </FadeUp>

            <FadeUp delay={240}>
              <div className="flex flex-col sm:flex-row gap-3">
                <PillButton to="/partner/csr" variant="on-dark">
                  Partner with us
                </PillButton>
                <PillButton to="/about" variant="ghost">
                  Learn who we are
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

          {/* Right — photo */}
          <div className="lg:col-span-5">
            <FadeUp delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/40 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]">
                <img
                  src={heroImg}
                  alt="A community gathered in a Mumbai neighbourhood — where Omni Life Care Foundation begins its work."
                  width={1200}
                  height={1500}
                  fetchPriority="high"
                  className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-snow/15"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. WHAT WE DO — 4 pillars, simple 4-up grid
   ============================================================ */
function WhatWeDo() {
  return (
    <section className="bg-canvas border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
          <FadeUp className="lg:col-span-7">
            <p className="eyebrow mb-4">What we do</p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              Four kinds of care. One team.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              Most health problems show up together. Our programmes are
              designed to do the same &mdash; so a person never has to choose
              which kind of help to ask for first.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 70} as="li">
              <Link
                to={p.href}
                className="group relative flex h-full flex-col gap-4 rounded-2xl bg-snow border border-hairline p-6 lg:p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_12px_28px_-20px_rgba(28,0,96,0.22)]"
              >
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: p.color }}
                  aria-hidden="true"
                />
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  {p.number}
                </div>
                <h3 className="font-sans font-semibold text-[1.25rem] leading-snug text-ink text-balance">
                  {p.name}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-muted text-pretty">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
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
   3. WHY IT MATTERS — 3 sourced facts, one line each
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
      body: "in India lack consistent access to life-cycle health services &mdash; from adolescence to elderly care.",
    },
    {
      n: "Fragmented",
      label: "Care today",
      body: "Mental health, women&rsquo;s health, disability and chronic care are still delivered as separate systems.",
    },
  ];

  return (
    <section className="bg-snow border-b border-hairline">
      <div className="container-editorial py-20 lg:py-28">
        <FadeUp>
          <p className="eyebrow mb-4">Why it matters</p>
          <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance max-w-3xl">
            India doesn&rsquo;t lack compassion. It lacks care that reaches the
            last mile.
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
   4. PROGRAMMES — 4 flagship cards with photo
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
              Four programmes, ready to go.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
              Each one is fully designed and waiting for funding and
              partnerships. The first cohorts will run in and around Mumbai.
            </p>
          </FadeUp>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {flagship.map((p, i) => (
            <FadeUp key={p.slug} delay={i * 70} as="li">
              <Link
                to={p.href}
                className="group block overflow-hidden rounded-2xl bg-snow border border-hairline shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.12)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_4px_8px_rgba(28,0,96,0.06),0_22px_44px_-22px_rgba(28,0,96,0.32)]"
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
   5. FROM THE FOUNDERS — short, signed, plain
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
              We started Omni Life Care because we&rsquo;ve seen the same
              family visit three different places for help &mdash; and walk
              home with none. We want to fix that.
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
              If that sounds like the kind of organisation you&rsquo;d like to
              back, we&rsquo;d love to hear from you.
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
   6. PARTNER BAND — dark, three audiences
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
    <section className="bg-ink text-snow">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
          <FadeUp className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-snow/60 mb-4">
              Partner with us
            </p>
            <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-snow text-balance">
              Three ways to help build this.
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
                className="group flex h-full flex-col gap-5 rounded-2xl border border-snow/15 bg-snow/[0.04] p-7 lg:p-8 transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-snow/30 hover:bg-snow/[0.08]"
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
   7. TRUST & COMPLIANCE — plain explanations
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
              Registered, transparent, and accountable.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-muted text-pretty">
              All our registrations and annual reports will be public on our
              transparency page once issued.
            </p>
          </FadeUp>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {items.map((it, i) => (
              <FadeUp key={it.label} delay={i * 70} as="li">
                <div className="h-full rounded-xl bg-snow border border-hairline p-6 flex flex-col gap-3 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
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
   8. CLOSING CTA — the section the user likes (kept dark)
   ============================================================ */
function ClosingCTA() {
  return (
    <section className="relative bg-ink text-snow overflow-hidden">
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
              Help build it from day one.
            </h2>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="mt-5 max-w-xl text-[1.0625rem] lg:text-[1.15rem] leading-[1.6] text-snow/80 text-pretty">
              We&rsquo;re registered, ready, and looking for our first
              partners. Whatever your role &mdash; corporate, institutional,
              individual &mdash; there&rsquo;s a way in.
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
   9. NEWSLETTER — simple, honest cadence
   ============================================================ */
function Newsletter() {
  return (
    <section className="bg-canvas border-t border-hairline">
      <div className="container-editorial py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 items-center">
          <FadeUp className="lg:col-span-6">
            <h3 className="font-sans font-semibold text-[1.375rem] leading-snug text-ink text-balance">
              Get an update every three months. No spam.
            </h3>
            <p className="mt-2 text-[14px] text-ink-muted text-pretty">
              Field notes from Mumbai &mdash; what we built, what worked, what
              didn&rsquo;t.
            </p>
          </FadeUp>
          <FadeUp className="lg:col-span-6" delay={80}>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email-newsletter" className="sr-only">
                Your email
              </label>
              <input
                id="email-newsletter"
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 h-11 px-4 rounded-full bg-snow border border-hairline text-[14px] text-ink placeholder:text-ink-muted/70 shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)] focus:outline-none focus:border-ink/50 transition-colors"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-full bg-ink text-snow text-[13px] font-medium transition-[background-color,box-shadow,scale] duration-200 ease-out hover:bg-primary-deep hover:shadow-[0_4px_12px_-4px_rgba(28,0,96,0.45)] active:scale-[0.96]"
              >
                Subscribe
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
