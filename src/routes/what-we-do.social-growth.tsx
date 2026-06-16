import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, GraduationCap, Stethoscope, Coins } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { CTABand } from "@/components/CTABand";
import scholarshipsImg from "@/assets/program-scholarships.jpg";
import chwImg from "@/assets/program-chw-training.jpg";

export const Route = createFileRoute("/what-we-do/social-growth")({
  head: () => ({
    meta: [
      { title: "Social Growth - Pillar 02 - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Education, scholarships and frontline livelihoods - so the village holds its own growth long after we leave. Pillar 02 of the Omni Care Model.",
      },
      {
        property: "og:title",
        content: "Social Growth - Omni Life Care Foundation",
      },
      {
        property: "og:description",
        content:
          "The scholarship is a job. The job is a health worker. The health worker is the village holding its own ground.",
      },
      { property: "og:image", content: "/og-social-growth.jpg" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/social-growth" }],
  }),
  component: SocialGrowthPage,
});

// Publicly cited figures - never fabricate.
// NFHS-5 = National Family Health Survey, India 2019-21.
// ASER = Annual Status of Education Report (Rural), Pratham 2023.
// WHO = WHO Workforce 2030 / Health Workforce in India brief.
const EVIDENCE = [
  {
    stat: "41%",
    label: "of Indian women have 10+ years of schooling",
    note: "NFHS-5, 2019–21",
  },
  {
    stat: "1 in 4",
    label: "rural youth (14–18) can read a Std II English text",
    note: "ASER 2023, Pratham",
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
    icon: GraduationCap,
    title: "Pay the full cost of staying in school.",
    body:
      "Tuition is the easy part. We cover materials, transport and a modest stipend, paired with monthly mentoring - so a first-generation learner doesn’t drop out the first time a fee notice arrives.",
  },
  {
    n: "02",
    icon: Stethoscope,
    title: "Turn the scholarship into a livelihood.",
    body:
      "We bias support toward nursing, allied health and social work - fields where the village is short and the salary is real. The qualification is paid; the placement is the point.",
  },
  {
    n: "03",
    icon: Coins,
    title: "Place the worker back inside their own community.",
    body:
      "Trained scholars are recruited, certified and placed in paid frontline roles with health systems or NGO partners. The community gains capacity; the worker earns a livelihood; both compound.",
  },
] as const;

const PROMISES = [
  "Retention through Class 12 and into a qualification - reported, not just enrolment.",
  "Placement rate of trained workers into paid roles, published annually.",
  "Cost per scholar through to qualification, audited and shared with funders.",
  "Independent feedback from scholars and workers, reported unedited.",
];

const PROGRAMMES = [
  {
    href: "/programs/scholarships-education",
    img: scholarshipsImg,
    alt: "A young woman studying with course materials and a mentor's notebook open beside her.",
    badge: "Education pathway",
    title:
      "Scholarships & Education Support - staying in school long enough for it to count.",
    body:
      "Multi-year, needs-based scholarships paired with monthly mentoring for first-generation learners - priority to girls pursuing nursing, allied health and social work.",
  },
  {
    href: "/programs/chw-development",
    img: chwImg,
    alt: "A community health worker in uniform standing with her training cohort outside a rural health centre.",
    badge: "Livelihood pathway",
    title:
      "Community Health Worker Development - a paid frontline role, recruited from the village itself.",
    body:
      "Recruiting, certifying and placing women from the community as paid community health workers - a livelihood for her, a trusted neighbour for the village, capacity for the system.",
  },
];

function SocialGrowthPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 02 · Social Growth"
        title="The scholarship is a job. The job is a health worker. The worker is the village holding its own ground."
        lead="Most ‘education programmes’ end the day the certificate is handed over. We design ours to end the day they draw their first salary - inside the community they grew up in."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PillButton to="/partner/csr" variant="on-dark">
            Fund a scholar
          </PillButton>
          <PillButton to="/get-involved/volunteer" variant="ghost">
            Mentor or volunteer
          </PillButton>
        </div>
      </PageHero>

      {/* Why this pillar - evidence on a soft band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">Why social growth comes next</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Care without a livelihood is{" "}
                <em className="font-serif italic font-medium text-primary">
                  a single season of help.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                A village that can keep its girls in school, and turn that
                schooling into a paid role inside its own borders, doesn’t need
                rescuing every monsoon. The numbers below are the gap we’re
                building against - public, sourced, uncomfortable.
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
                Three moves, designed to end{" "}
                <em className="font-serif italic font-medium text-primary">
                  in a paid role at home.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Education is the input, not the outcome. We line up scholarship,
                qualification and placement as one continuous pathway - so the
                investment compounds inside the village instead of leaking out
                of it.
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

      {/* The two programmes delivering this pillar */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">The programmes delivering this</p>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Two programmes,{" "}
                <em className="font-serif italic font-medium text-primary">
                  one pathway.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                The scholarship is the on-ramp. The community health worker
                role is the destination. Both are designed to be replicated,
                not romanticised.
              </p>
            </FadeUp>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
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
                  <div className="flex flex-col gap-4 p-7 lg:p-8">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-sage px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--pillar-social)" }}
                      />
                      {p.badge}
                    </span>
                    <h3 className="font-sans font-semibold text-[1.375rem] lg:text-[1.5rem] leading-[1.18] tracking-[-0.015em] text-ink text-balance">
                      {p.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
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
                We don’t report enrolment.{" "}
                <em className="font-serif italic font-medium text-primary">
                  We report what stuck.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Headcounts at orientation are the easiest, cheapest number to
                publish. We won’t lead with them. We’ll publish the four
                things below, from day one.
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
        title="Help us turn a scholarship into a salary inside the village."
        body="CSR partners can fund a full cohort - scholarship, qualification, mentoring and placement into a paid frontline role. Volunteers can mentor scholars or support curriculum."
        primary={{ label: "Partner with us", href: "/partner/csr" }}
        secondary={{ label: "Volunteer", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
