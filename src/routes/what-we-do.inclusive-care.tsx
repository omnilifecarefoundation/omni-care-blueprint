import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, HeartHandshake, HomeIcon, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { CTABand } from "@/components/CTABand";
import womensHealthImg from "@/assets/program-womens-health.jpg";
import elderlyImg from "@/assets/program-elderly-care.jpg";
import wellnessImg from "@/assets/program-womens-wellness.jpg";

export const Route = createFileRoute("/what-we-do/inclusive-care")({
  head: () => ({
    meta: [
      { title: "Inclusive Care — Pillar 03 — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Care designed around the people most often overlooked — women across life stages, the elderly, and persons with disability. Pillar 03 of the Omni Care Model.",
      },
      {
        property: "og:title",
        content: "Inclusive Care — Omni Life Care Foundation",
      },
      {
        property: "og:description",
        content:
          "Care that comes to the doorstep — for the women, elders, and persons with disability the clinic never quite reaches.",
      },
      { property: "og:image", content: "/og-inclusive-care.jpg" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/inclusive-care" }],
  }),
  component: InclusiveCarePage,
});

// Publicly cited figures — never fabricate.
// Census 2011 = Office of the Registrar General, India.
// UNFPA = India Ageing Report 2023.
// NFHS-5 = National Family Health Survey, India 2019-21.
const EVIDENCE = [
  {
    stat: "2.68 cr",
    label: "persons with disability counted in India",
    note: "Census of India, 2011",
  },
  {
    stat: "13.8 cr",
    label: "Indians aged 60+ — set to double by 2050",
    note: "UNFPA India Ageing Report, 2023",
  },
  {
    stat: "<2%",
    label: "of eligible women screened for cervical cancer",
    note: "NFHS-5, 2019–21",
  },
] as const;

const METHOD = [
  {
    n: "01",
    icon: HeartHandshake,
    title: "Design care around the person the clinic forgets.",
    body:
      "We start with the woman in post-menopause, the elder with three chronic conditions, the household with a member with disability. Their day shapes the protocol — not the other way around.",
  },
  {
    n: "02",
    icon: HomeIcon,
    title: "Move the care to the home.",
    body:
      "Home-based care plans, monthly visits, assistive devices, and family-caregiver training — because the people we serve cannot or should not be asked to travel to a waiting room every month.",
  },
  {
    n: "03",
    icon: Users,
    title: "Link every household to what it’s already owed.",
    body:
      "Disability pensions. Niramaya health insurance. Senior-citizen schemes. We don’t just refer — we help families fill the forms, follow up, and actually receive the entitlement.",
  },
] as const;

const PROMISES = [
  "Screening conversion to follow-up care, published — not just screening counts.",
  "Households linked to a government entitlement, with the entitlement received.",
  "Cost per household supported, audited and shared with funders.",
  "Anonymous feedback from women, elders and caregivers, reported unedited.",
];

const PROGRAMMES = [
  {
    href: "/programs/womens-health-lifecycle",
    img: womensHealthImg,
    alt: "A woman community health worker counselling a group of women under a tree at the edge of a village.",
    badge: "Life-stage care",
    title:
      "Women’s Health & Life-Cycle Care — one programme that walks with her across every stage.",
    body:
      "Menstrual health in schools, cervical and breast cancer screening in adulthood, NCD care after menopause — delivered by women community workers, in places where male health workers are not accepted.",
  },
  {
    href: "/programs/disability-elderly-care",
    img: elderlyImg,
    alt: "A home-based care worker checking on an elderly man seated by a doorway, with a family member beside him.",
    badge: "Home-based care",
    title:
      "Disability Inclusion & Elderly Support — care plans that arrive at the doorstep, monthly.",
    body:
      "Household needs assessment, assistive devices, family-caregiver training, and a clear link into government schemes — disability pension, Niramaya insurance, senior-citizen entitlements.",
  },
  {
    href: "/programs/womens-wellness",
    img: wellnessImg,
    alt: "A group of rural women in a circle on a mat, mid-conversation in a community wellness session.",
    badge: "Group wellness",
    title:
      "Women’s Health & Wellness Initiative — weekly circles for stress, sleep and chronic pain.",
    body:
      "A low-cost, replicable group curriculum — yoga, breath-work, peer dialogue — delivered weekly by trained women facilitators inside community spaces, alongside the mental-health programme.",
  },
];

function InclusiveCarePage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 03 · Inclusive Care"
        title="The clinic is open from ten to five. The people who need it most are at home."
        lead="Inclusive Care is the part of the Omni Care Model that goes through the front door instead of waiting at the reception desk — for women across life stages, the elderly, and persons with disability."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <PillButton to="/partner/csr" variant="on-dark">
            Fund a household
          </PillButton>
          <PillButton to="/get-involved/volunteer" variant="ghost">
            Volunteer with us
          </PillButton>
        </div>
      </PageHero>

      {/* Why this pillar — evidence */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 mb-14">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">Why inclusive care can’t wait</p>
              <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                A system designed for the average patient{" "}
                <em className="font-serif italic font-medium text-primary">
                  always misses the same people.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Women in post-menopause. Elders with overlapping chronic
                conditions. Households living with disability. The numbers
                below are public, sourced, and the reason this pillar exists
                as its own piece of work — not as a footnote on someone
                else’s programme.
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
                Three moves, all of which begin{" "}
                <em className="font-serif italic font-medium text-primary">
                  at the front door.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Inclusive Care is care that arrives, not care you have to
                travel to. The protocol bends around the household, the
                visit is monthly, and the paperwork for what families are
                already owed gets done with them — not for them.
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
                  one household at a time.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Women across life stages. Elders and persons with disability
                at home. Group wellness inside the village. Designed to be
                replicated, not romanticised.
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
                        style={{ background: "var(--pillar-inclusive)" }}
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
                We won’t publish the visit.{" "}
                <em className="font-serif italic font-medium text-primary">
                  We’ll publish what changed.
                </em>
              </h2>
            </FadeUp>
            <FadeUp className="lg:col-span-5 lg:pt-4" delay={80}>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Visit counts are the easy number. We’ll lead with what
                actually shifted in the household — entitlements received,
                screenings followed up, cost per family supported, and
                feedback in their own words.
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
        title="Help us put a monthly visit on every doorstep that needs one."
        body="CSR partners can fund a full cluster of households — assessment, devices, monthly visits, and entitlement linkage for a year. Volunteers can support training, content and family-caregiver curriculum."
        primary={{ label: "Partner with us", href: "/partner/csr" }}
        secondary={{ label: "Volunteer", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
