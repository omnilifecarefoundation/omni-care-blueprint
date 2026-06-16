import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Activity, GraduationCap, FlaskConical } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { CTABand } from "@/components/CTABand";
import preventiveImg from "@/assets/program-preventive-health.jpg";
import capacityImg from "@/assets/program-capacity-building.jpg";
import researchImg from "@/assets/program-research.jpg";

export const Route = createFileRoute("/what-we-do/human-potential")({
  head: () => ({
    meta: [
      { title: "Human Potential - Pillar 04 - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Frontline workforce, preventive screening, and open-source evidence - so every rupee of community investment compounds. Pillar 04 of the Omni Care Model.",
      },
      {
        property: "og:title",
        content: "Human Potential - Omni Life Care Foundation",
      },
      {
        property: "og:description",
        content:
          "Train the frontline. Catch the disease early. Publish the evidence. The pillar that makes every other pillar last.",
      },
      { property: "og:image", content: "/og-human-potential.jpg" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/human-potential" }],
  }),
  component: HumanPotentialPage,
});

// Publicly cited figures - never fabricate.
// WHO India NCD Country Profile 2018; WHO Health Workforce 2030 projections;
// NHM Annual Report (Ministry of Health & Family Welfare, GoI).
const EVIDENCE = [
  {
    stat: "63%",
    label: "of all deaths in India are caused by NCDs",
    note: "WHO India NCD Country Profile",
  },
  {
    stat: "~10 lakh",
    label: "ASHA workers carry India’s rural health system",
    note: "National Health Mission, MoHFW",
  },
  {
    stat: "1.8M",
    label: "additional health workers India needs by 2030",
    note: "WHO Health Workforce projections",
  },
] as const;

const METHOD = [
  {
    n: "01",
    icon: Activity,
    title: "Catch the disease before the hospital does.",
    body:
      "Hypertension, diabetes and cancer markers caught at a village camp cost a fraction of what they cost in a district hospital. We run preventive screening in partnership with district administrations - with a funded path to follow-up before the camp packs up.",
  },
  {
    n: "02",
    icon: GraduationCap,
    title: "Train the people the system runs on.",
    body:
      "Frontline workers, ASHAs, and partner-NGO staff get short-form certified training - from a 12-week community mental health worker course to bespoke sessions on safeguarding, inclusion and M&E. Every curriculum we build, we publish.",
  },
  {
    n: "03",
    icon: FlaskConical,
    title: "Publish the evidence - open, peer-reviewed, in public.",
    body:
      "Our research function evaluates programmes with rigorous, often quasi-experimental methods, in partnership with academic institutions. Findings go into peer-reviewed journals and into state and national policy briefings - not into a locked PDF.",
  },
] as const;

const PROMISES = [
  "Positive screens converted to follow-up care, published - not just camp footfall.",
  "Cost per trainee through to certification, audited and shared with funders.",
  "All curricula released under an open licence, free for the sector to use.",
  "Research findings published openly, including the ones that didn’t work.",
];

const PROGRAMMES = [
  {
    href: "/programs/preventive-health-outreach",
    img: preventiveImg,
    alt: "A village preventive health camp with community members being screened for blood pressure and diabetes.",
    badge: "Preventive care",
    title:
      "Preventive & Community Health Outreach - early detection where formal healthcare rarely arrives.",
    body:
      "NCD screening - hypertension, diabetes, cancer markers - combined with health literacy and a structured referral pathway into the public health system, in partnership with district administrations.",
  },
  {
    href: "/programs/training-capacity-building",
    img: capacityImg,
    alt: "A community health worker cohort mid-session with a trainer and printed open-source curricula.",
    badge: "Workforce",
    title:
      "Training & Capacity Building - open-source curriculum for the people the system runs on.",
    body:
      "Short-form certified training for frontline workers and partner-NGO staff - community mental health, safeguarding, inclusion, M&E. Every curriculum is open-source and free for the sector to use.",
  },
  {
    href: "/programs/research-impact-assessment",
    img: researchImg,
    alt: "A researcher reviewing field data alongside a community worker in a programme office.",
    badge: "Evidence",
    title:
      "Research & Impact Assessment - rigorous evaluation, published in the open.",
    body:
      "An in-house research function partnering with academic institutions on quasi-experimental evaluations of community health, NCD prevention, and integrated care - briefed openly to state and national authorities.",
  },
];

function HumanPotentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 04 · Human Potential"
        title="A community health worker costs less than a hospital bed - and arrives before the ambulance has to."
        lead="Human Potential is the pillar that makes the other three last. We strengthen the frontline workforce, catch disease early at the village level, and publish the evidence - so every rupee of community investment compounds into long-term capability."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PillButton to="/partner/csr" variant="on-dark">
            Fund the frontline
          </PillButton>
          <PillButton to="/get-involved/volunteer" variant="ghost">
            Volunteer with us
          </PillButton>
        </div>
      </PageHero>

      {/* Why this pillar - evidence */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">Why human potential underwrites the rest</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Programmes end. The workforce, and the evidence,{" "}
                <em className="font-serif italic font-medium text-primary">
                  are what stays.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                India’s frontline workforce already carries the load.
                Preventive screening is still where most progress against
                non-communicable disease will be won. The numbers below are
                public, sourced, and the reason this pillar exists.
              </p>
            </FadeUp>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0">
            {EVIDENCE.map((e, i) => (
              <FadeUp key={e.label} as="li" delay={i * 70}>
                <div className="border-t border-ink/20 pt-5">
                  <p className="font-sans font-semibold text-[clamp(2rem,3.4vw,2.75rem)] leading-none tracking-[-0.02em] text-ink tabular-nums">
                    {e.stat}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {e.label}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted text-pretty">
                    Source: {e.note}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">How we work</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Three moves that{" "}
                <em className="font-serif italic font-medium text-primary">
                  outlast the programme.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Screen early, train the people who stay, and publish what
                worked and what didn’t. None of this generates headlines.
                All of it compounds.
              </p>
            </FadeUp>
          </div>

          <ul className="grid md:grid-cols-3 gap-5 lg:gap-6 list-none p-0">
            {METHOD.map((m, i) => {
              const Icon = m.icon;
              return (
                <FadeUp key={m.n} as="li" delay={i * 80}>
                  <article className="group relative flex h-full flex-col gap-4 rounded-2xl bg-snow border border-hairline p-6 lg:p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_14px_30px_-20px_rgba(4, 55, 242,0.22)]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                        {m.n}
                      </span>
                      <span
                        className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-sage text-primary"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-[1.125rem] leading-snug text-ink text-balance">
                      {m.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-ink-muted text-pretty">
                      {m.body}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </ul>
        </div>
      </section>

      {/* The three programmes */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">The programmes delivering this</p>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Three programmes,{" "}
                <em className="font-serif italic font-medium text-primary">
                  one durable workforce.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Preventive screening in the village. Open-source training for
                the people the system runs on. Evaluation rigorous enough to
                brief into state and national policy.
              </p>
            </FadeUp>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {PROGRAMMES.map((p, i) => (
              <FadeUp key={p.href} delay={140 + i * 90}>
                <Link
                  to={p.href}
                  className="group block h-full overflow-hidden rounded-2xl bg-snow border border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_8px_24px_-16px_rgba(4, 55, 242,0.12)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_4px_8px_rgba(4, 55, 242,0.06),0_22px_44px_-22px_rgba(4, 55, 242,0.32)] active:scale-[0.995]"
                >
                  <div className="aspect-[5/3] overflow-hidden bg-sage">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-6 lg:p-7">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-sage px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--pillar-human)" }}
                      />
                      {p.badge}
                    </span>
                    <h3 className="font-sans font-semibold text-[1.25rem] lg:text-[1.375rem] leading-[1.2] tracking-[-0.01em] text-ink text-balance">
                      {p.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-ink-muted text-pretty">
                      {p.body}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
                      Read the programme detail
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How we'll measure */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">How we’ll measure</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                We publish the method,{" "}
                <em className="font-serif italic font-medium text-primary">
                  including what failed.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Camp footfall and trainee headcounts are easy numbers. We
                lead with the harder, more useful ones - and we release the
                curriculum and the evidence into the public domain.
              </p>
            </FadeUp>
          </div>

          <ul className="grid md:grid-cols-2 gap-4 lg:gap-5 list-none p-0">
            {PROMISES.map((p, i) => (
              <FadeUp key={p} as="li" delay={i * 70}>
                <div className="flex items-start gap-4 rounded-xl bg-canvas border border-hairline p-5 lg:p-6 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <p className="text-[15px] leading-relaxed text-ink text-pretty">
                    {p}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ul>

          <FadeUp delay={300} className="mt-10">
            <Link
              to="/about/omni-care-model"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-primary transition-transform duration-300 ease-out hover:translate-x-1"
            >
              See how this pillar links to the other three
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Stand with this pillar"
        title="Fund the workforce and the evidence that outlast every programme."
        body="CSR partners can underwrite a preventive-health route, a training cohort, or a multi-year evaluation. Volunteers can support curriculum, research, and field-data work."
        primary={{ label: "Partner with us", href: "/partner/csr" }}
        secondary={{ label: "Volunteer", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
