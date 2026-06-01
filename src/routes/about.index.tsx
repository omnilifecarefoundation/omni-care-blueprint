import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "An India-based foundation reaching 120,000 lives across six states through an integrated, evidence-led model of community health, mental wellbeing, and inclusive care.",
      },
      { property: "og:title", content: "About — Omni Life Care Foundation" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutIndex,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "We start with the household, not the headline.",
    body: "Health, mind, ability and livelihood show up in the same family. We design programmes that travel together — not four parallel projects that never speak.",
  },
  {
    n: "02",
    title: "Evidence before scale.",
    body: "We would rather serve fifty families well and measure it honestly than claim a number we cannot defend. Outcomes are published — including the ones that disappoint us.",
  },
  {
    n: "03",
    title: "The community holds the pen.",
    body: "Every programme is co-designed with the people it serves and the district partners already doing the work. We do not arrive with answers; we arrive with questions.",
  },
  {
    n: "04",
    title: "Open books, by default.",
    body: "Governance, finances, donor reports and field learnings are public. If you fund us, you see everything — not a curated highlight reel.",
  },
];

const FEATURE = {
  href: "/about/omni-care-model",
  eyebrow: "The model",
  title: "One family. Four pillars of care. Measured outcomes.",
  body: "Most NGOs run one programme well. We integrate community health, mental wellbeing, inclusive care, and livelihoods around the same household — because the problems show up together, and so should the answers.",
  cta: "See how the model works",
};

const SECTIONS = [
  { href: "/about/vision-mission", eyebrow: "01", title: "Vision & Mission", body: "The promise we make to the families we serve — and the discipline behind it." },
  { href: "/about/values", eyebrow: "02", title: "Our Values", body: "Dignity first. Evidence always. Community in the lead." },
  { href: "/about/leadership", eyebrow: "03", title: "Leadership & Governance", body: "An independent board, a working advisory council, and a programmes team trained on the ground." },
  { href: "/about/our-story", eyebrow: "04", title: "Our Story", body: "From one Maharashtra district to programmes across six states." },
  { href: "/about/compliance", eyebrow: "05", title: "Compliance & Registrations", body: "12A, 80G, CSR-1, FCRA and annual returns — all on the record." },
  { href: "/about/careers", eyebrow: "06", title: "Careers", body: "Join a mission-driven, evidence-led team of practitioners." },
];

function AboutIndex() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An integrated model of care, built around the family — not the funder."
        lead="Omni Life Care Foundation is a new India-based foundation working at the intersection of community health, mental wellbeing, inclusive care, and human potential. One model. Four pillars. Designed with the people it serves — and held to the receipts."
      />

      {/* Where we stand on day one */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="eyebrow">Where we stand</span>
              </div>
              <h2 className="font-sans font-semibold tracking-[-0.025em] text-3xl md:text-4xl text-ink text-balance leading-[1.1]">
                We are new. So we are saying out loud{" "}
                <em className="font-serif italic font-medium text-primary">
                  what we will be held to.
                </em>
              </h2>
              <p className="mt-5 text-ink-muted text-pretty leading-relaxed">
                A new foundation cannot trade on a track record it has not earned. It can trade on the discipline it brings to day one — and the willingness to publish what happens next.
              </p>
            </div>

            <ol className="lg:col-span-8 divide-y divide-hairline border-y border-hairline">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.n}
                  className="group grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-4 md:gap-8 py-7 md:py-8 transition-colors duration-200 ease-out"
                >
                  <span className="font-sans text-sm tabular-nums tracking-[0.12em] text-ink-muted pt-1 transition-colors duration-200 ease-out group-hover:text-gold">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold tracking-[-0.015em] text-xl md:text-2xl text-ink text-balance leading-[1.25]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-ink-muted text-pretty leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Featured: Omni Care Model */}
      <section className="container-editorial py-20 lg:py-28">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="eyebrow">{FEATURE.eyebrow}</span>
        </div>
        <Link
          to={FEATURE.href}
          className="group block rounded-2xl bg-ink text-snow overflow-hidden border border-ink/10 shadow-[0_1px_2px_rgba(28,0,96,0.06),0_22px_44px_-22px_rgba(28,0,96,0.32)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(28,0,96,0.10),0_30px_60px_-24px_rgba(28,0,96,0.42)]"
        >
          <div className="relative p-8 lg:p-14 grid lg:grid-cols-12 gap-10 items-end">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 85% 10%, rgba(201,168,76,0.18), transparent 60%), radial-gradient(50% 60% at 10% 100%, rgba(99,102,241,0.18), transparent 70%)",
              }}
            />
            <div className="relative lg:col-span-8">
              <h2 className="font-sans font-semibold text-balance tracking-[-0.025em] text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                {FEATURE.title}
              </h2>
              <p className="mt-6 text-snow/75 text-pretty max-w-2xl text-lg leading-relaxed">
                {FEATURE.body}
              </p>
            </div>
            <div className="relative lg:col-span-4 lg:text-right">
              <span className="inline-flex items-center gap-2 text-gold font-sans font-medium transition-transform duration-200 ease-out group-hover:translate-x-1">
                {FEATURE.cta}
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Section grid */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="eyebrow">Explore</span>
              </div>
              <h2 className="font-sans font-semibold tracking-[-0.025em] text-3xl md:text-4xl text-ink text-balance">
                Everything you'd ask of an NGO{" "}
                <em className="font-serif italic font-medium text-primary">
                  worth funding.
                </em>
              </h2>
            </div>
            <p className="text-ink-muted max-w-md text-pretty">
              Mission, governance, model, money. Open by default — because trust is earned in the details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group relative rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_14px_28px_-18px_rgba(28,0,96,0.22)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs tabular-nums tracking-[0.12em] text-ink-muted">
                    {s.eyebrow}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-ink text-balance">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-muted text-pretty leading-relaxed">
                  {s.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Get Involved"
        title="Fund a programme. Partner on CSR. Or come work with us."
        primary={{ label: "Partner with Us", href: "/partner/csr" }}
        secondary={{ label: "Open Roles", href: "/about/careers" }}
      />
    </>
  );
}
