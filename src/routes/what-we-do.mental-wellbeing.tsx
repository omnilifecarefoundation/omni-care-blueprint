import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Ear, Users, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { CTABand } from "@/components/CTABand";
import mentalImg from "@/assets/program-mental-health.jpg";

export const Route = createFileRoute("/what-we-do/mental-wellbeing")({
  head: () => ({
    meta: [
      { title: "Mental Wellbeing — Pillar 01 — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Mental healthcare brought to the doorstep — by women trained from inside the community. Pillar 01 of the Omni Care Model.",
      },
      {
        property: "og:title",
        content: "Mental Wellbeing — Omni Life Care Foundation",
      },
      {
        property: "og:description",
        content:
          "The first health worker your village ever had — the one who asks how you're sleeping.",
      },
      { property: "og:image", content: "/og-mental-wellbeing.jpg" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/mental-wellbeing" }],
  }),
  component: MentalWellbeingPage,
});

// Real, citable public-source figures — never fabricate.
// NMHS = National Mental Health Survey of India 2015-16 (NIMHANS).
// WHO Atlas = WHO Mental Health Atlas 2020.
const EVIDENCE = [
  {
    stat: "1 in 7",
    label: "Indians need mental health care",
    note: "NMHS 2015–16, NIMHANS",
  },
  {
    stat: "70–92%",
    label: "Treatment gap across disorders",
    note: "NMHS 2015–16, NIMHANS",
  },
  {
    stat: "0.75",
    label: "Psychiatrists per 100,000 people",
    note: "WHO Mental Health Atlas, 2020",
  },
] as const;

const METHOD = [
  {
    n: "01",
    icon: Ear,
    title: "Listen at home, not in a waiting room.",
    body:
      "We don't ask people to travel to be heard. Trained community workers visit households, run weekly peer circles, and screen with validated tools (PHQ-9, GAD-7) — in the language of the home.",
  },
  {
    n: "02",
    icon: Users,
    title: "The worker is from the village.",
    body:
      "We recruit and train community workers — many of them women — from the villages we serve. They earn a livelihood; the community gains a trusted neighbour who knows the names, the homes, the histories.",
  },
  {
    n: "03",
    icon: Stethoscope,
    title: "A clear bridge to clinical care.",
    body:
      "Every positive screen has a named path — to the nearest PHC, district hospital, or tele-mental-health line. We don't refer and walk away; we follow up until care has actually begun.",
  },
] as const;

const PROMISES = [
  "Every screening recorded against a validated tool (PHQ-9, GAD-7).",
  "Referral conversion rate published, not just the referral count.",
  "Cost per person reached, audited and shared with our funders.",
  "Community feedback collected anonymously, reported unedited.",
];

function MentalWellbeingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 01 · Mental Wellbeing"
        title="The first health worker your village ever had — the one who asks how you’re sleeping."
        lead="India has more people who need mental health care than there are doctors in the whole country. We start where the system stops — at the front door — with community workers trained from inside the village itself."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PillButton to="/partner/csr" variant="on-dark">
            Fund this pillar
          </PillButton>
          <PillButton to="/get-involved/volunteer" variant="ghost">
            Volunteer with us
          </PillButton>
        </div>
      </PageHero>

      {/* Why this pillar — evidence on a soft band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">Why mental wellbeing comes first</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Nothing built on top of a mind in distress{" "}
                <em className="font-serif italic font-medium text-primary">
                  holds for long.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Mental wellbeing is the floor of the Omni Care Model. We put it
                first because livelihoods, schooling, maternal health and elder
                care all unravel quietly when it isn’t there. The numbers below
                are public, sourced, and the reason we started.
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

      {/* How we work — three methods on white */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">How we work</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Three moves, repeated every week,{" "}
                <em className="font-serif italic font-medium text-primary">
                  in the same homes.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                We don’t run a campaign and leave. We run a route — household to
                household, week after week — until trust, screening, and a path
                to clinical care all live in the same place.
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

      {/* The flagship programme — primary media card */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">The programme delivering this</p>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Community Mental Health & Wellbeing —{" "}
                <em className="font-serif italic font-medium text-primary">
                  the route we walk every week.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                One programme, four moving parts: trained community workers,
                weekly peer-support groups, validated screening, and a named
                referral path. Designed to be replicated, not romanticised.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={140}>
            <Link
              to="/programs/community-mental-health"
              className="group block overflow-hidden rounded-2xl bg-snow border border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_8px_24px_-16px_rgba(4, 55, 242,0.12)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_4px_8px_rgba(4, 55, 242,0.06),0_22px_44px_-22px_rgba(4, 55, 242,0.32)] active:scale-[0.995]"
            >
              <div className="grid lg:grid-cols-[1.05fr_1fr]">
                <div className="aspect-[5/3] lg:aspect-auto overflow-hidden bg-sage">
                  <img
                    src={mentalImg}
                    alt="A community mental health worker speaking with a woman on her doorstep."
                    loading="lazy"
                    className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-5 p-7 lg:p-10">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-sage px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--pillar-mental)" }}
                    />
                    Flagship programme
                  </span>
                  <h3 className="font-sans font-semibold text-[1.5rem] lg:text-[1.75rem] leading-[1.15] tracking-[-0.015em] text-ink text-balance">
                    Embedding mental health support inside primary care and
                    community structures.
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                    Delivered alongside primary health centres and self-help
                    groups, by women trained from within the community itself.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Read the programme detail
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* How we'll measure — transparency, not vanity numbers */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-12">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">How we’ll measure</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                We’re a new foundation. We publish the method{" "}
                <em className="font-serif italic font-medium text-primary">
                  before the headline.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                We won’t lead with reach numbers we can’t yet defend. We’ll
                publish the four things below from day one, and let the
                evidence accumulate in public.
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
        title="Help us put a trained listener inside every village we serve."
        body="CSR partners can fund a full community route — worker, training, screening, and a year of follow-up. Volunteers can support content, training, or research."
        primary={{ label: "Partner with us", href: "/partner/csr" }}
        secondary={{ label: "Volunteer", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
