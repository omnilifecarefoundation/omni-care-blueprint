import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Phone, Mail } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { CTABand } from "@/components/CTABand";
import { SITE } from "@/lib/site";
import type { GetHelpTopic } from "@/lib/get-help-topics";
import { TOPICS } from "@/lib/get-help-topics";

/**
 * Shared template for the four Get Help sub-pages. Each page passes a
 * `topic` object — copy and styling are otherwise identical so the four
 * sit together as a coherent family.
 */
export function GetHelpTopicPage({ topic }: { topic: GetHelpTopic }) {
  const others = TOPICS.filter((t) => t.slug !== topic.slug);

  return (
    <article
      style={{ ["--theme-color" as string]: topic.themeColor } as React.CSSProperties}
    >
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-snow">
        {/* Tinted base */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, hsl(var(--theme-color)) 0%, hsl(var(--theme-color) / 0.78) 60%, hsl(var(--theme-color) / 0.92) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 88% 80%, rgba(0,0,0,0.20), transparent 40%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.6px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div className="container-editorial relative pt-14 pb-20 lg:pt-20 lg:pb-28">
          <FadeUp>
            <nav
              aria-label="Breadcrumb"
              className="text-[12px] uppercase tracking-[0.18em] text-snow/65 mb-7"
            >
              <Link to="/" className="hover:text-snow">Home</Link>
              <span className="px-2">/</span>
              <Link to="/get-help" className="hover:text-snow">Get Help</Link>
              <span className="px-2">/</span>
              <span className="text-snow/90">{topic.name}</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <FadeUp className="lg:col-span-8" delay={60}>
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/25 bg-snow/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/95 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-snow" />
                {topic.pillar.label}
              </span>
              <h1 className="mt-6 font-sans font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-snow text-balance">
                {topic.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.0625rem] lg:text-[1.15rem] leading-[1.6] text-snow/85 text-pretty">
                {topic.lead}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <PillButton to="/get-help" hash="intake" variant="on-dark">
                  Write to our team
                </PillButton>
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-snow/30 bg-snow/10 px-5 py-2.5 text-[14px] font-medium text-snow backdrop-blur-sm transition-[background-color,transform] duration-300 hover:bg-snow/20 active:scale-[0.97]"
                >
                  <Phone size={14} aria-hidden="true" />
                  Or call {SITE.phone}
                </a>
              </div>
            </FadeUp>

            <FadeUp className="lg:col-span-4" delay={140}>
              <div className="rounded-2xl border border-snow/20 bg-snow/[0.06] p-5 backdrop-blur-sm">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-snow/70">
                  Our promise
                </p>
                <p className="mt-3 font-serif italic text-[1.0625rem] leading-relaxed text-snow text-pretty">
                  {topic.promise}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What we offer ────────────────────────────────────────────── */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">What we actually do</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Three things,{" "}
                <em className="font-serif italic font-medium text-primary">
                  done well, every time.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                We are a new foundation. We don't promise everything. We
                promise these three, in this order, and we report whether we
                delivered each one.
              </p>
            </FadeUp>
          </div>

          <ul className="grid md:grid-cols-3 gap-5 lg:gap-6 list-none p-0">
            {topic.offers.map((o, i) => (
              <FadeUp key={o.n} as="li" delay={i * 80}>
                <article className="group relative flex h-full flex-col gap-4 rounded-2xl bg-snow border border-hairline p-6 lg:p-7 shadow-[0_1px_2px_rgba(15,17,23,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(15,17,23,0.04),0_14px_30px_-20px_rgba(15,17,23,0.22)]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                      {o.n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "hsl(var(--theme-color))" }}
                    />
                  </div>
                  <h3 className="font-sans font-semibold text-[1.125rem] leading-snug text-ink text-balance">
                    {o.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted text-pretty">
                    {o.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How a first conversation goes ────────────────────────────── */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Three short steps —{" "}
                <em className="font-serif italic font-medium text-primary">
                  the first is one paragraph.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                You will not be passed between five forms and three
                inboxes. One note opens a conversation; one person carries
                it forward.
              </p>
            </FadeUp>
          </div>

          <ol className="relative grid md:grid-cols-3 gap-5 lg:gap-6 list-none p-0">
            {topic.steps.map((s, i) => (
              <FadeUp key={s.n} as="li" delay={i * 80}>
                <div className="relative flex h-full flex-col gap-3 rounded-xl bg-canvas border border-hairline p-6 lg:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-full text-snow font-mono text-[12px] tabular-nums"
                      style={{ backgroundColor: "hsl(var(--theme-color))" }}
                    >
                      {s.n}
                    </span>
                    <h3 className="font-sans font-semibold text-[1.0625rem] leading-snug text-ink text-balance">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted text-pretty">
                    {s.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Who this is for + related programme ──────────────────────── */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <FadeUp className="lg:col-span-6">
              <p className="eyebrow mb-4">Who this is for</p>
              <h2 className="font-sans font-semibold text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                Plain facts about access —{" "}
                <em className="font-serif italic font-medium text-primary">
                  before you write.
                </em>
              </h2>
              <ul className="mt-7 space-y-3.5 list-none p-0">
                {topic.whoFor.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full text-snow"
                      style={{ backgroundColor: "hsl(var(--theme-color))" }}
                    >
                      <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <p className="text-[15px] leading-relaxed text-ink text-pretty">
                      {line}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-xl border border-hairline bg-canvas p-5 text-[13.5px] leading-relaxed text-ink-muted text-pretty">
                {topic.reassurance}
              </p>
            </FadeUp>

            <FadeUp className="lg:col-span-6" delay={100}>
              <p className="eyebrow mb-4">The programme behind this</p>
              <Link
                to={topic.relatedProgramme.href}
                className="group block overflow-hidden rounded-2xl border border-hairline bg-canvas shadow-[0_1px_2px_rgba(15,17,23,0.04),0_8px_24px_-18px_rgba(15,17,23,0.18)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(15,17,23,0.06),0_14px_32px_-20px_rgba(15,17,23,0.28)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={topic.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 lg:p-7">
                  <span
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-snow border border-hairline px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "hsl(var(--theme-color))" }}
                    />
                    Flagship programme
                  </span>
                  <h3 className="font-sans font-semibold text-[1.25rem] leading-snug text-ink text-balance">
                    {topic.relatedProgramme.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                    Read the programme detail
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The other three topics ───────────────────────────────────── */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-10">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">If this isn't quite it</p>
              <h2 className="font-sans font-semibold text-[clamp(1.5rem,2.4vw,1.875rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                Three more ways{" "}
                <em className="font-serif italic font-medium text-primary">
                  we can help.
                </em>
              </h2>
            </FadeUp>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 list-none p-0">
            {others.map((o, i) => (
              <FadeUp key={o.slug} as="li" delay={i * 70}>
                <Link
                  to="/get-help/$topic"
                  params={{ topic: o.slug }}
                  style={{ ["--theme-color" as string]: o.themeColor } as React.CSSProperties}
                  className="group flex h-full flex-col justify-between rounded-xl border border-hairline bg-snow p-5 lg:p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(15,17,23,0.04),0_10px_24px_-18px_rgba(15,17,23,0.18)]"
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-8 rounded-full"
                      style={{ backgroundColor: "hsl(var(--theme-color))" }}
                    />
                    <h3 className="mt-4 font-sans font-semibold text-[1.0625rem] leading-snug text-ink text-balance">
                      {o.name}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted text-pretty">
                      {o.promise}
                    </p>
                  </div>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ color: "hsl(var(--theme-color))" }}
                  >
                    Explore
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </ul>

          <FadeUp delay={240} className="mt-10">
            <Link
              to="/get-help"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-primary transition-transform duration-300 hover:translate-x-0.5"
            >
              <ArrowUpRight size={14} />
              Back to all Get Help topics
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <CTABand
        eyebrow="Start a conversation"
        title="One short note. A real person reads it within two working days."
        body={`Anything you share with our team stays with our care team. Or write to us at ${SITE.email}.`}
        primary={{ label: "Write to our team", href: "/get-help#intake" }}
        secondary={{ label: `Email ${SITE.email}`, href: `mailto:${SITE.email}` }}
      />

      {/* sr-only contact fallback for crawlers */}
      <p className="sr-only">
        Contact Omni Life Care Foundation: <Mail aria-hidden="true" /> {SITE.email}
      </p>
    </article>
  );
}
