import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { PILLARS } from "@/lib/site";
import { ArrowUpRight, ClipboardList, Compass, HeartPulse, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programmes — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Five programmes designed under the Omni Care Model. Honest about what is live, what is piloting, and what is still on the drawing board.",
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

type Status = "design" | "pilot";
type PillarId = (typeof PILLARS)[number]["id"];

type Programme = {
  slug: string;
  number: string;
  name: string;
  oneLine: string;
  who: string;
  doing: string[];
  willMeasure: string[];
  pillar: PillarId;
  schedule: string;
  sdg: string;
  status: Status;
  icon: typeof HeartPulse;
};

const PROGRAMMES: Programme[] = [
  {
    slug: "community-mental-health",
    number: "01",
    name: "Community Mental Health & Wellbeing",
    oneLine: "Bring mental health out of the clinic and into the lane.",
    who: "Adolescents, young adults, women, and informal workers in low-income Mumbai neighbourhoods.",
    doing: [
      "Train community facilitators in PHQ-9 / GAD-7 screening and stepped support.",
      "Run weekly peer-support circles in partnership with local schools and clinics.",
      "Set up a single, named referral path into clinical care — with follow-up.",
    ],
    willMeasure: [
      "Number screened, by ward.",
      "Share of positive screens that complete a follow-up contact within 14 days.",
      "Peer-circle retention at week 8.",
    ],
    pillar: "mental",
    schedule: "Schedule VII (i)",
    sdg: "SDG 3, 10",
    status: "design",
    icon: HeartPulse,
  },
  {
    slug: "preventive-health-outreach",
    number: "02",
    name: "Preventive & Community Health Outreach",
    oneLine: "Early detection where the public health system rarely reaches.",
    who: "Households in peri-urban Mumbai that fall between the BMC mainstream and private care.",
    doing: [
      "Hold preventive camps for blood pressure, blood sugar, and basic cancer markers.",
      "Pair every camp with a structured referral into the nearest public facility.",
      "Publish camp-by-camp results (counts, positives, follow-ups) within 14 days.",
    ],
    willMeasure: [
      "Screenings completed, by camp.",
      "Positive cases linked to confirmed follow-up.",
      "Cost per linked follow-up — published.",
    ],
    pillar: "human",
    schedule: "Schedule VII (i)",
    sdg: "SDG 3, 1",
    status: "design",
    icon: Compass,
  },
  {
    slug: "womens-health-lifecycle",
    number: "03",
    name: "Women's Health & Life-Cycle Care",
    oneLine: "One programme that walks with a woman from adolescence through later life.",
    who: "Adolescent girls in school, women in reproductive years, and post-menopausal women.",
    doing: [
      "Menstrual health sessions in partner schools — facilitator-led, not lecture-led.",
      "Anaemia and maternal-health screening through women community workers.",
      "Cervical and breast cancer awareness paired with screening camp referrals.",
    ],
    willMeasure: [
      "Girls reached per school, retention across sessions.",
      "Anaemia cases identified and linked to treatment.",
      "Screening-camp uptake among eligible women.",
    ],
    pillar: "inclusive",
    schedule: "Schedule VII (iii)",
    sdg: "SDG 5, 3",
    status: "design",
    icon: Users,
  },
  {
    slug: "disability-elderly-care",
    number: "04",
    name: "Inclusive Care — Disability & Elderly Support",
    oneLine: "Care designed around the people most often left out of the design.",
    who: "Persons with disability, frail elderly, and the family members who care for them.",
    doing: [
      "Household needs assessment and a written care plan, shared with the family.",
      "Linkage to government entitlements — disability pension, Niramaya, Ayushman Bharat.",
      "Caregiver training for the family member who actually does the daily work.",
    ],
    willMeasure: [
      "Households with a written, family-signed care plan.",
      "Entitlements applied for, granted, and received.",
      "Caregiver self-rated confidence at month 3.",
    ],
    pillar: "inclusive",
    schedule: "Schedule VII (iii)",
    sdg: "SDG 10, 3",
    status: "design",
    icon: Sparkles,
  },
  {
    slug: "womens-wellness",
    number: "05",
    name: "Women's Health & Wellness Initiative",
    oneLine: "Group wellness for the conditions women are quietest about.",
    who: "Women navigating PCOS, menopause, breast and cervical cancer screening, and bone health.",
    doing: [
      "Small-group sessions on stress, sleep, pain, and chronic-condition self-management.",
      "Screening referrals for breast and cervical cancer with named follow-up.",
      "A peer-support track that continues after the formal curriculum ends.",
    ],
    willMeasure: [
      "Group attendance at session 1, 4, and 8.",
      "Screening referrals completed.",
      "Self-reported confidence on three named domains, pre and post.",
    ],
    pillar: "inclusive",
    schedule: "Schedule VII (i)",
    sdg: "SDG 5, 3",
    status: "design",
    icon: ClipboardList,
  },
];

type Filter = "all" | PillarId;

function Page() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = useMemo(
    () => (filter === "all" ? PROGRAMMES : PROGRAMMES.filter((p) => p.pillar === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Five programmes. One model. Built honestly from rupee one."
        lead="We are a new foundation in Mumbai. These are the programmes we have designed, the communities we will serve, and the numbers we will publish — not numbers we have invented."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PillButton to="/about/omni-care-model" variant="on-dark">
            See the Omni Care Model
          </PillButton>
          <PillButton to="/partner/csr" variant="ghost">
            Partner on a programme
          </PillButton>
        </div>
      </PageHero>

      {/* Honesty band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-12 lg:py-14">
          <FadeUp>
            <p className="max-w-3xl text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink text-pretty">
              <span className="font-medium">A note before the brochure.</span> Most NGO programme pages
              lead with reach numbers. We will not. We are in year one. What follows is each
              programme&rsquo;s scope, the population it is built for, what we will actually do, and the
              specific metrics we will publish — quarter by quarter — so that progress can be checked,
              not assumed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-canvas">
        <div className="container-editorial py-16 lg:py-20">
          <div
            role="tablist"
            aria-label="Filter programmes by pillar of the Omni Care Model"
            className="flex flex-wrap gap-2 mb-10"
          >
            <FilterChip current={filter} value="all" onClick={setFilter}>
              All five
            </FilterChip>
            {PILLARS.map((p) => (
              <FilterChip key={p.id} current={filter} value={p.id} onClick={setFilter} color={p.color}>
                {p.name}
              </FilterChip>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {list.map((p, i) => (
              <FadeUp key={p.slug} delay={Math.min(i * 80, 320)}>
                <ProgrammeCard p={p} />
              </FadeUp>
            ))}
          </div>

          {list.length === 0 && (
            <p className="text-ink-muted text-sm mt-8">No programmes match that pillar yet.</p>
          )}
        </div>
      </section>

      {/* What we will publish */}
      <section className="bg-snow border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="eyebrow mb-4">The reporting promise</div>
                <h2 className="font-sans font-semibold text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  Every programme, every quarter, in the same shape.
                </h2>
              </div>
            </FadeUp>
            <div className="space-y-5">
              {[
                ["Scope", "Wards, partner sites, and the eligible population — written down."],
                ["Activity", "Sessions held, screenings completed, referrals made. Counted, not estimated."],
                ["Linkage", "Share of positive screens that completed a follow-up contact within 14 days."],
                ["Spend", "Rupees in, rupees out, by line item — reconciled to the bank statement."],
                ["What did not work", "A short, named list. Closed by the next quarter or escalated."],
              ].map(([label, body], i) => (
                <FadeUp key={label} delay={i * 70}>
                  <div className="grid grid-cols-[120px_1fr] gap-5 items-start border-b border-hairline pb-5 last:border-0">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                      {label}
                    </div>
                    <p className="text-ink text-pretty leading-[1.6]">{body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        variant="dark"
        eyebrow="Work with us"
        title="A programme is a promise to a community. We would rather start small and report honestly than scale a number we cannot defend."
        body="Partner on a single programme, fund a single ward, or volunteer your time. Every route starts with a conversation."
        primary={{ label: "Partner on a programme", href: "/partner/csr" }}
        secondary={{ label: "Volunteer with us", href: "/get-involved/volunteer" }}
      />
    </>
  );
}

function ProgrammeCard({ p }: { p: Programme }) {
  const pillar = PILLARS.find((x) => x.id === p.pillar)!;
  const Icon = p.icon;
  return (
    <article className="group relative bg-snow border border-hairline rounded-[20px] p-6 lg:p-7 transition-colors hover:border-ink-muted/50">
      {/* Pillar accent rail */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full"
        style={{ backgroundColor: pillar.color }}
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-hairline"
            style={{ color: pillar.color }}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
              {p.number} &middot; {pillar.name}
            </div>
            <h3 className="font-sans font-semibold text-[1.125rem] lg:text-[1.2rem] leading-[1.2] tracking-[-0.01em] text-ink mt-0.5 text-balance">
              {p.name}
            </h3>
          </div>
        </div>
        <StatusBadge status={p.status} />
      </div>

      <p className="mt-5 text-ink text-[0.975rem] leading-[1.55] text-pretty">
        {p.oneLine}
      </p>

      <div className="mt-5 space-y-4">
        <Detail label="Who it serves" body={p.who} />
        <DetailList label="What we will do" items={p.doing} />
        <DetailList label="What we will publish" items={p.willMeasure} />
      </div>

      <div className="mt-6 pt-5 border-t border-hairline grid grid-cols-2 gap-3 text-[12px] tabular-nums">
        <div>
          <div className="text-ink-muted uppercase tracking-[0.14em] text-[10px] mb-1">CSR entry</div>
          <div className="text-ink">{p.schedule}</div>
        </div>
        <div>
          <div className="text-ink-muted uppercase tracking-[0.14em] text-[10px] mb-1">SDG</div>
          <div className="text-ink">{p.sdg}</div>
        </div>
      </div>

      <Link
        to="/partner/csr"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink decoration-hairline underline underline-offset-4 hover:decoration-ink"
      >
        Partner on this programme
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
      </Link>
    </article>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-1.5">{label}</div>
      <p className="text-[0.9rem] leading-[1.55] text-ink text-pretty">{body}</p>
    </div>
  );
}

function DetailList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-1.5">{label}</div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-[0.9rem] leading-[1.5] text-ink text-pretty flex gap-2.5">
            <span aria-hidden="true" className="mt-[0.6em] inline-block h-1 w-1 rounded-full bg-ink-muted shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const label = status === "pilot" ? "In pilot" : "In design";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-canvas px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-ink-muted shrink-0">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {label}
    </span>
  );
}

function FilterChip({
  current,
  value,
  onClick,
  children,
  color,
}: {
  current: Filter;
  value: Filter;
  onClick: (v: Filter) => void;
  children: React.ReactNode;
  color?: string;
}) {
  const active = current === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => onClick(value)}
      style={{ transitionProperty: "background-color, color, border-color" }}
      className={`inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium border transition duration-200 active:scale-[0.96] ${
        active
          ? "bg-ink text-snow border-ink"
          : "bg-snow text-ink border-hairline hover:border-ink-muted"
      }`}
    >
      {color && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
      {children}
    </button>
  );
}
