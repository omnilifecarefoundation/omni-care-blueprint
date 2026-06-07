import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { PillButton } from "@/components/ui-axion/PillButton";
import { PILLAR_BY_ID, type Pillar } from "@/lib/site";

type Commitment = { n: string; title: string; body: string };
type Method = { label: string; body: string };
type Milestone = { when: string; title: string; body: string };
type Related = { href: string; title: string; body: string };
type Para = string;

export type ProgrammePageData = {
  pillarId: Pillar["id"];
  chipLabel: string;
  headlineLead: string;
  headlineEm: string;
  headlineTail?: string;
  lead: string;
  Icon?: ComponentType<{ className?: string }>;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };

  editorialEyebrow: string;
  editorialParagraphs: [Para, Para, Para];

  commitmentsEyebrow: string;
  commitmentsTitle: ReactNode;
  commitments: Commitment[];

  methodsEyebrow: string;
  methodsTitle: ReactNode;
  methods: Method[];

  timelineEyebrow: string;
  timelineTitle: ReactNode;
  timeline: Milestone[];

  partnershipsEyebrow: string;
  partnershipsTitle: ReactNode;
  partnershipsParagraphs: Para[];
  partnershipsLink: { label: string; href: string };

  readNextEyebrow?: string;
  related: Related[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export function ProgrammePage({ data }: { data: ProgrammePageData }) {
  const pillar = PILLAR_BY_ID[data.pillarId];

  return (
    <>
      {/* HERO */}
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
          <div className="max-w-3xl space-y-6">
            <FadeUp>
              <Link
                to={pillar.href}
                className="inline-flex items-center gap-1 text-sm text-snow/70 hover:text-snow transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> {pillar.name}
              </Link>
            </FadeUp>
            <FadeUp delay={60}>
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
                {data.chipLabel}
              </span>
            </FadeUp>
            <FadeUp delay={120}>
              <h1 className="font-sans font-semibold text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.04] tracking-[-0.025em] text-snow text-balance">
                {data.headlineLead}{" "}
                <em className="font-serif italic font-medium text-gold">
                  {data.headlineEm}
                </em>
                {data.headlineTail ? ` ${data.headlineTail}` : ""}
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="max-w-2xl text-[1.0625rem] lg:text-[1.125rem] leading-[1.6] text-snow/80 text-pretty">
                {data.lead}
              </p>
            </FadeUp>
            <FadeUp delay={280}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <PillButton to={data.primary.href} variant="on-dark">
                  {data.primary.label}
                </PillButton>
                <PillButton to={data.secondary.href} variant="ghost">
                  {data.secondary.label}
                </PillButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <FadeUp>
              <div className="eyebrow">{data.editorialEyebrow}</div>
            </FadeUp>
            <div className="space-y-6 max-w-2xl">
              <FadeUp delay={80}>
                <p className="text-[1.125rem] lg:text-[1.25rem] leading-[1.55] tracking-[-0.005em] text-ink text-pretty">
                  {data.editorialParagraphs[0]}
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
                  {data.editorialParagraphs[1]}
                </p>
              </FadeUp>
              <FadeUp delay={240}>
                <p className="text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
                  {data.editorialParagraphs[2]}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <FadeUp>
              <div className="eyebrow mb-4">{data.commitmentsEyebrow}</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                {data.commitmentsTitle}
              </h2>
            </FadeUp>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {data.commitments.map((c, i) => (
              <FadeUp key={c.n} delay={i * 80}>
                <article className="bg-snow p-8 lg:p-10 h-full transition-[background-color] duration-300 ease-out hover:bg-canvas">
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

      {/* METHODS */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <div>
              <FadeUp>
                <div className="eyebrow mb-4">{data.methodsEyebrow}</div>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  {data.methodsTitle}
                </h2>
              </FadeUp>
            </div>
            <dl className="divide-y divide-hairline border-y border-hairline">
              {data.methods.map((m, i) => (
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
              <div className="eyebrow mb-4">{data.timelineEyebrow}</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                {data.timelineTitle}
              </h2>
            </FadeUp>
          </div>
          <ol className="space-y-px">
            {data.timeline.map((t, i) => (
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
                <div className="eyebrow mb-4">{data.partnershipsEyebrow}</div>
                <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  {data.partnershipsTitle}
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-5 text-[1rem] lg:text-[1.0625rem] leading-[1.65] text-ink-muted text-pretty">
                {data.partnershipsParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  <Link to={data.partnershipsLink.href} className="link-arrow">
                    {data.partnershipsLink.label}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* READ NEXT */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-14 lg:py-16">
          <FadeUp>
            <div className="eyebrow mb-6">
              {data.readNextEyebrow ?? "Read next"}
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {data.related.map((r, i) => (
              <FadeUp key={r.href} delay={i * 70}>
                <Link
                  to={r.href}
                  className="block bg-snow p-8 h-full transition-[background-color] duration-300 ease-out hover:bg-canvas group"
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
        eyebrow={data.ctaEyebrow}
        title={data.ctaTitle}
        body={data.ctaBody}
        primary={data.ctaPrimary}
        secondary={data.ctaSecondary}
        variant="dark"
      />
    </>
  );
}
