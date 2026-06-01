import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { PILLARS } from "@/lib/site";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programmes — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Five programmes designed under the Omni Care Model. Honest about what is being built, what each programme will do, and the numbers we will publish each quarter.",
      },
      { property: "og:title", content: "Programmes — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Five programmes, one model. Mental wellbeing, preventive health, women's life-cycle care, inclusive care, and women's wellness — built from rupee one with public reporting.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Page,
});

type PillarId = (typeof PILLARS)[number]["id"];

type Programme = {
  slug: string;
  n: string;
  name: string;
  oneLine: string;
  intent: string;
  who: string;
  doing: string[];
  publish: string[];
  pillar: PillarId;
  schedule: string;
  sdg: string;
  status: "design" | "pilot";
};

const PROGRAMMES: Programme[] = [
  {
    slug: "community-mental-health",
    n: "01",
    name: "Community Mental Health & Wellbeing",
    oneLine: "Mental health out of the clinic, into the neighbourhood.",
    intent:
      "Bring screening, peer support, and a named clinical referral into the schools, primary health centres, and self-help groups people already trust — so the first step toward help is not a 90-minute commute.",
    who: "Adolescents, young adults, women, and informal workers in low-income Mumbai neighbourhoods.",
    doing: [
      "Train community facilitators in PHQ-9 and GAD-7 screening with stepped support.",
      "Run weekly peer-support circles inside partner schools and clinics.",
      "Maintain a single, named referral pathway into clinical care, with follow-up.",
    ],
    publish: [
      "People screened, by ward.",
      "Positive screens that complete a follow-up contact within 14 days.",
      "Peer-circle retention at week 8.",
    ],
    pillar: "mental",
    schedule: "Schedule VII (i)",
    sdg: "SDG 3 · 10",
    status: "design",
  },
  {
    slug: "preventive-health-outreach",
    n: "02",
    name: "Preventive & Community Health Outreach",
    oneLine: "Early detection paired with a funded referral — not a camp that ends at sundown.",
    intent:
      "Hold preventive camps for blood pressure, blood sugar, and basic cancer markers — and pair every camp with a structured referral into the nearest public facility. Publish camp-by-camp results inside fourteen days.",
    who: "Peri-urban Mumbai households that fall between the BMC mainstream and private care.",
    doing: [
      "Hold preventive camps for BP, blood sugar, and basic cancer markers.",
      "Pair every camp with a structured referral into the nearest public facility.",
      "Publish camp results — counts, positives, follow-ups — within fourteen days.",
    ],
    publish: [
      "Screenings completed, by camp.",
      "Positive cases linked to a confirmed follow-up.",
      "Cost per linked follow-up.",
    ],
    pillar: "social",
    schedule: "Schedule VII (i)",
    sdg: "SDG 3 · 1",
    status: "design",
  },
  {
    slug: "womens-health-lifecycle",
    n: "03",
    name: "Women's Health & Life-Cycle Care",
    oneLine: "One programme that walks with a woman from adolescence through menopause.",
    intent:
      "Most women's health work is fragmented — one NGO for menstruation, another for maternal care, a third for cancer screening. We are building a single programme that walks with a woman across her life, not three programmes pretending to coordinate.",
    who: "Adolescent girls in school, women in reproductive years, and post-menopausal women.",
    doing: [
      "Facilitator-led menstrual health sessions inside partner schools.",
      "Anaemia and maternal-health screening through women community workers.",
      "Cervical and breast cancer awareness, paired with screening camp referrals.",
    ],
    publish: [
      "Girls reached per school, retention across sessions.",
      "Anaemia cases identified and linked to treatment.",
      "Screening uptake among eligible women.",
    ],
    pillar: "inclusive",
    schedule: "Schedule VII (iii)",
    sdg: "SDG 5 · 3",
    status: "design",
  },
  {
    slug: "disability-elderly-care",
    n: "04",
    name: "Inclusive Care — Disability & Elderly Support",
    oneLine: "Care designed around the people most often left out of the design.",
    intent:
      "A household needs assessment with a written care plan signed by the family. Linkage to entitlements that already exist on paper but rarely reach the home. Caregiver training for the family member who actually does the daily work.",
    who: "Persons with disability, frail elderly, and the family members who care for them.",
    doing: [
      "Household needs assessment with a written care plan, signed by the family.",
      "Linkage to entitlements — disability pension, Niramaya, Ayushman Bharat.",
      "Caregiver training for the family member who actually does the daily work.",
    ],
    publish: [
      "Households with a written, family-signed care plan.",
      "Entitlements applied for, granted, and received.",
      "Caregiver self-rated confidence at month three.",
    ],
    pillar: "inclusive",
    schedule: "Schedule VII (iii)",
    sdg: "SDG 10 · 3",
    status: "design",
  },
  {
    slug: "womens-wellness",
    n: "05",
    name: "Women's Health & Wellness Initiative",
    oneLine: "Group support for the conditions women are quietest about.",
    intent:
      "PCOS, menopause, bone health, breast and cervical cancer screening windows. Small-group sessions, named follow-up, and a peer-support track that continues after the formal curriculum ends.",
    who: "Women navigating PCOS, menopause, cancer screening windows, and bone health.",
    doing: [
      "Small-group sessions on stress, sleep, pain, and chronic-condition self-management.",
      "Breast and cervical cancer screening referrals with named follow-up.",
      "A peer-support track that continues after the formal curriculum ends.",
    ],
    publish: [
      "Group attendance at session 1, 4, and 8.",
      "Screening referrals completed.",
      "Self-reported confidence on three named domains, pre and post.",
    ],
    pillar: "inclusive",
    schedule: "Schedule VII (i)",
    sdg: "SDG 5 · 3",
    status: "design",
  },
];

const LEDGER: { k: string; v: string }[] = [
  { k: "Scope", v: "Wards, partner sites, and the eligible population — written down, not estimated." },
  { k: "Activity", v: "Sessions held, screenings completed, referrals made. Counted from the register." },
  { k: "Linkage", v: "Share of positive screens that completed a follow-up within fourteen days." },
  { k: "Spend", v: "Rupees in, rupees out, by line item — reconciled to the bank statement." },
  { k: "What did not work", v: "A short, named list. Closed by the next quarter, or escalated in writing." },
  { k: "What we learned", v: "One paragraph per programme — in plain language, signed by the lead." },
];

function pillarOf(id: PillarId) {
  return PILLARS.find((p) => p.id === id)!;
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Five programmes · year one"
        title="Five programmes. One model. Built honestly from rupee one."
        lead="A new Mumbai foundation. What follows is each programme’s scope, the population it is built for, the work we will actually do, and the numbers we will publish — quarter by quarter — so progress can be checked, not assumed."
      >
        <a
          href="#index"
          className="inline-flex items-center gap-2 text-sm text-snow/85 hover:text-snow transition-colors"
        >
          Jump to the index
          <ArrowDown className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </PageHero>

      {/* Manifesto strip — Ogilvy-tight, single promise */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <div className="eyebrow">The promise</div>
            </FadeUp>
            <div className="space-y-6 max-w-3xl">
              <FadeUp delay={80}>
                <p className="font-serif text-[1.625rem] lg:text-[2rem] leading-[1.22] tracking-[-0.01em] text-ink text-balance">
                  We will not lead with reach numbers we have not yet earned. We will
                  publish the same six lines for every programme, every quarter, on the
                  same day — so what we did, and what did not work, can be read in plain
                  sight.
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-ink-muted text-[1.0625rem] leading-[1.65] text-pretty">
                  Five programmes sit inside the Omni Care Model — mental wellbeing as the
                  floor, human potential at the top. Each one below names its population,
                  its work, and the numbers it will own.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* The index — typographic at-a-glance */}
      <section id="index" className="bg-snow border-b border-hairline scroll-mt-20">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-10 lg:mb-12">
            <FadeUp>
              <div className="eyebrow">The index</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                Five programmes — at a glance.
              </h2>
            </FadeUp>
          </div>

          <ol className="border-y border-hairline divide-y divide-hairline">
            {PROGRAMMES.map((p, i) => {
              const pillar = pillarOf(p.pillar);
              return (
                <FadeUp as="li" key={p.slug} delay={Math.min(i * 50, 240)}>
                  <a
                    href={`#${p.slug}`}
                    className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1fr)_auto] items-baseline gap-x-5 lg:gap-x-8 py-5 lg:py-6 transition-[background-color] duration-200 hover:bg-canvas/60 focus-visible:outline-2 focus-visible:outline-primary rounded-md px-2 -mx-2"
                  >
                    <span className="font-mono text-sm text-ink-muted tabular-nums">{p.n}</span>
                    <h3 className="font-sans font-semibold text-[1.05rem] lg:text-[1.2rem] tracking-[-0.005em] text-ink text-balance">
                      {p.name}
                    </h3>
                    <span className="hidden sm:inline text-[14px] text-ink-muted leading-snug text-pretty">
                      {p.oneLine}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: pillar.color }}
                      />
                      <span className="hidden md:inline">{pillar.name}</span>
                      <ArrowDown
                        className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-y-0.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </FadeUp>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Programme entries — full editorial */}
      <section className="bg-canvas">
        <div className="container-editorial divide-y divide-hairline">
          {PROGRAMMES.map((p, i) => (
            <ProgrammeEntry key={p.slug} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* Quarterly ledger — the reporting promise, refined */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 mb-10 lg:mb-12">
            <FadeUp>
              <div className="space-y-3">
                <div className="eyebrow">The reporting promise</div>
                <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.125rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  Same six lines. Every programme. Every quarter.
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <p className="text-[1.0625rem] leading-[1.7] text-ink-muted text-pretty max-w-2xl">
                A quarterly report is a contract — with the people who fund us and the
                people we serve. Ours is short, identical in shape across programmes, and
                published on the same day each quarter, so it can be compared, not just
                read.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={140}>
            <div className="rounded-2xl bg-snow border border-hairline overflow-hidden shadow-[0_1px_2px_rgba(28,0,96,0.04),0_22px_48px_-32px_rgba(28,0,96,0.22)]">
              <div className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 border-b border-hairline bg-canvas">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    Quarterly ledger
                  </span>
                  <span className="hidden sm:inline font-mono text-[11px] text-ink-muted">
                    · published within 30 days of quarter close
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-snow px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted shrink-0">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Same shape, every time
                </span>
              </div>
              <ol className="divide-y divide-hairline">
                {LEDGER.map((m, i) => (
                  <li
                    key={m.k}
                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] sm:grid-cols-[2.5rem_12rem_minmax(0,1fr)] items-baseline gap-x-5 gap-y-1 px-6 lg:px-8 py-5"
                  >
                    <span className="font-mono text-[12px] text-ink-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-sans font-semibold text-[0.95rem] text-ink tracking-[-0.005em]">
                      {m.k}
                    </h3>
                    <p className="col-span-2 sm:col-span-1 text-[14.5px] leading-[1.6] text-ink-muted text-pretty">
                      {m.v}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Work with us"
        title="A programme is a promise to a community. We would rather start small and report honestly than scale a number we cannot defend."
        body="Partner on a single programme, fund a single ward, or volunteer your time. Every route starts with a conversation."
        primary={{ label: "Partner on a programme", href: "/partner/csr" }}
        secondary={{ label: "Volunteer with us", href: "/get-involved/volunteer" }}
      />
    </>
  );
}

function ProgrammeEntry({ p, index }: { p: Programme; index: number }) {
  const pillar = pillarOf(p.pillar);
  return (
    <article id={p.slug} className="scroll-mt-20 py-16 lg:py-24">
      <div className="grid lg:grid-cols-[8rem_minmax(0,1fr)] gap-8 lg:gap-12">
        {/* Left rail — index number + pillar */}
        <FadeUp>
          <div className="lg:sticky lg:top-24">
            <div className="font-mono text-[5.5rem] lg:text-[6.5rem] leading-none text-ink/15 tabular-nums select-none">
              {p.n}
            </div>
            <div className="mt-4 space-y-3">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: pillar.color }}
                />
                {pillar.name}
              </span>
              <StatusBadge status={p.status} />
            </div>
          </div>
        </FadeUp>

        {/* Right — content */}
        <div className="max-w-3xl">
          <FadeUp delay={60}>
            <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.8vw,2.25rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
              {p.name}
            </h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p className="mt-3 font-serif text-[1.2rem] lg:text-[1.35rem] leading-[1.35] tracking-[-0.005em] text-ink/85 text-balance">
              {p.oneLine}
            </p>
          </FadeUp>

          <FadeUp delay={180}>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-ink-muted text-pretty">
              {p.intent}
            </p>
          </FadeUp>

          <FadeUp delay={220}>
            <div className="mt-8 rounded-xl border border-hairline bg-snow p-5 lg:p-6">
              <FieldLabel>Who it serves</FieldLabel>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-ink text-pretty">{p.who}</p>
            </div>
          </FadeUp>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <FadeUp delay={260}>
              <DetailBlock label="What we will do" items={p.doing} />
            </FadeUp>
            <FadeUp delay={320}>
              <DetailBlock label="What we will publish" items={p.publish} accent />
            </FadeUp>
          </div>

          <FadeUp delay={380}>
            <div className="mt-8 pt-6 border-t border-hairline grid grid-cols-2 sm:grid-cols-3 gap-6 items-end">
              <Meta label="CSR entry" value={p.schedule} />
              <Meta label="SDG alignment" value={p.sdg} />
              <Link
                to="/partner/csr"
                className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink justify-self-start sm:justify-self-end"
              >
                Partner on this
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
      {/* hairline-less spacer; divider lives on parent container */}
      <span className="sr-only">End of programme {index + 1}.</span>
    </article>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
      {children}
    </div>
  );
}

function DetailBlock({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-xl border p-5 lg:p-6 transition-[border-color,box-shadow] duration-300 ease-out ${
        accent
          ? "bg-snow border-hairline shadow-[inset_3px_0_0_0_var(--gold,#caa64a)]"
          : "bg-snow border-hairline"
      }`}
    >
      <FieldLabel>{label}</FieldLabel>
      <ul className="mt-3 space-y-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="text-[14.5px] leading-[1.55] text-ink text-pretty flex gap-2.5"
          >
            <span
              aria-hidden="true"
              className="mt-[0.65em] inline-block h-1 w-1 rounded-full bg-ink-muted shrink-0"
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className="mt-1.5 font-mono text-[13px] text-ink tabular-nums">{value}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: Programme["status"] }) {
  const label = status === "pilot" ? "In pilot" : "In design";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-snow px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
      {label}
    </span>
  );
}
