import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { PILLARS } from "@/lib/site";
import { ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programmes — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Five programmes designed under the Omni Care Model. Honest about what is being built, what each programme will do, and what we will publish.",
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
  n: string;
  name: string;
  intent: string;
  who: string;
  doing: string[];
  publish: string[];
  pillar: PillarId;
  schedule: string;
  sdg: string;
  status: Status;
};

const PROGRAMMES: Programme[] = [
  {
    slug: "community-mental-health",
    n: "01",
    name: "Community Mental Health & Wellbeing",
    intent:
      "Bring mental health support out of the clinic and into the places people already trust — schools, primary health centres, self-help groups.",
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
    intent:
      "Early detection for non-communicable disease, paired with a funded referral into the public system — not a one-day camp that ends at sundown.",
    who: "Peri-urban Mumbai households that fall between the BMC mainstream and private care.",
    doing: [
      "Hold preventive camps for blood pressure, blood sugar, and basic cancer markers.",
      "Pair every camp with a structured referral into the nearest public facility.",
      "Publish camp-by-camp results — counts, positives, follow-ups — within fourteen days.",
    ],
    publish: [
      "Screenings completed, by camp.",
      "Positive cases linked to a confirmed follow-up.",
      "Cost per linked follow-up.",
    ],
    pillar: "human",
    schedule: "Schedule VII (i)",
    sdg: "SDG 3 · 1",
    status: "design",
  },
  {
    slug: "womens-health-lifecycle",
    n: "03",
    name: "Women's Health & Life-Cycle Care",
    intent:
      "One programme that walks with a woman from adolescence through reproductive years to post-menopause — not three programmes pretending to coordinate.",
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
    intent:
      "Care designed around the people most often left out of the design — and the family members who do the daily work.",
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
    intent:
      "Group wellness for the conditions women are quietest about — PCOS, menopause, bone health, breast and cervical cancer screening.",
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

type Filter = "all" | PillarId;

function Page() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<Programme | null>(null);
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
      />

      {/* Honesty band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
            <FadeUp>
              <div className="eyebrow">A note before the brochure</div>
            </FadeUp>
            <FadeUp delay={80}>
              <div className="space-y-4 text-[1.0625rem] leading-[1.7] text-ink text-pretty max-w-2xl">
                <p>
                  Most NGO programme pages lead with reach numbers. We will not. We are in year one.
                </p>
                <p className="text-ink-muted">
                  What follows is each programme&rsquo;s scope, the population it is built for,
                  what we will actually do, and the specific metrics we will publish — quarter by
                  quarter — so that progress can be checked, not assumed.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
            <FadeUp>
              <div className="eyebrow">The shape of the work</div>
            </FadeUp>
            <div className="space-y-7">
              <FadeUp delay={80}>
                <p className="font-serif text-[1.625rem] lg:text-[2rem] leading-[1.25] tracking-[-0.01em] text-ink text-balance">
                  Five programmes that read as one — because a household&rsquo;s mental health,
                  a woman&rsquo;s screening, and an elder&rsquo;s walking aid are not three
                  conversations. They are one.
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-ink-muted text-[1.0625rem] leading-[1.65] max-w-2xl text-pretty">
                  Every programme below sits inside the Omni Care Model — mental wellbeing as the
                  floor, human potential at the top. Filter by pillar, or read the full ledger.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + cards */}
      <section className="bg-snow border-b border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-12 lg:mb-14">
            <FadeUp>
              <div className="eyebrow">The five programmes</div>
            </FadeUp>
            <div className="space-y-6">
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  Filter by pillar, or view all five.
                </h2>
              </FadeUp>
              <FadeUp delay={140}>
                <div
                  role="tablist"
                  aria-label="Filter programmes by pillar of the Omni Care Model"
                  className="flex flex-wrap gap-2"
                >
                  <FilterChip current={filter} value="all" onClick={setFilter}>
                    All five
                  </FilterChip>
                  {PILLARS.map((p) => (
                    <FilterChip
                      key={p.id}
                      current={filter}
                      value={p.id}
                      onClick={setFilter}
                      color={p.color}
                    >
                      {p.name}
                    </FilterChip>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {list.map((p, i) => (
              <FadeUp key={p.slug} delay={Math.min(i * 70, 280)}>
                <ProgrammeCard p={p} />
              </FadeUp>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-10 text-sm text-ink-muted">No programmes match that pillar yet.</p>
          )}
        </div>
      </section>

      {/* The reporting promise */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            <FadeUp>
              <div className="space-y-4">
                <div className="eyebrow">The reporting promise</div>
                <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.125rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  Every programme, every quarter, in the same shape.
                </h2>
              </div>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { k: "Scope", v: "Wards, partner sites, and the eligible population — written down." },
                { k: "Activity", v: "Sessions held, screenings completed, referrals made. Counted, not estimated." },
                { k: "Linkage", v: "Share of positive screens that completed a follow-up within fourteen days." },
                { k: "Spend", v: "Rupees in, rupees out, by line item — reconciled to the bank statement." },
                { k: "What did not work", v: "A short, named list. Closed by the next quarter or escalated." },
                { k: "What we learned", v: "One paragraph per programme — written in plain language." },
              ].map((m, i) => (
                <FadeUp key={m.k} delay={80 + i * 60}>
                  <article className="h-full rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      Field
                    </div>
                    <h3 className="mt-2 font-sans font-semibold text-[1.0625rem] text-ink">
                      {m.k}
                    </h3>
                    <p className="mt-2 text-[14px] text-ink-muted leading-[1.6] text-pretty">
                      {m.v}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
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

function ProgrammeCard({ p }: { p: Programme }) {
  const pillar = PILLARS.find((x) => x.id === p.pillar)!;
  return (
    <article className="group relative h-full rounded-xl bg-snow border border-hairline p-7 lg:p-8 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_14px_30px_-22px_rgba(28,0,96,0.28)]">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3 min-w-0">
          <span className="font-mono text-sm text-ink-muted tabular-nums">{p.n}</span>
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: pillar.color }}
            />
            {pillar.name}
          </span>
        </div>
        <StatusBadge status={p.status} />
      </div>

      <h3 className="mt-4 font-sans font-semibold text-[1.25rem] lg:text-[1.4rem] tracking-[-0.01em] text-ink text-balance">
        {p.name}
      </h3>

      <p className="mt-3 text-ink-muted text-[15px] leading-[1.65] text-pretty">
        {p.intent}
      </p>

      <div className="mt-6 space-y-5">
        <Detail label="Who it serves" body={p.who} />
        <DetailList label="What we will do" items={p.doing} />
        <DetailList label="What we will publish" items={p.publish} />
      </div>

      <div className="mt-7 pt-5 border-t border-hairline grid grid-cols-2 gap-4">
        <Meta label="CSR entry" value={p.schedule} />
        <Meta label="SDG" value={p.sdg} />
      </div>

      <Link
        to="/partner/csr"
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
      >
        Partner on this programme
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-1.5">
        {label}
      </div>
      <p className="text-[14.5px] leading-[1.6] text-ink text-pretty">{body}</p>
    </div>
  );
}

function DetailList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-2">
        {label}
      </div>
      <ul className="space-y-1.5">
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
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-1">
        {label}
      </div>
      <div className="font-mono text-[12px] text-ink tabular-nums">{value}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const label = status === "pilot" ? "In pilot" : "In design";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-canvas px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted shrink-0">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
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
      className={`inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium border transition-[background-color,color,border-color,scale] duration-200 ease-out active:scale-[0.96] ${
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
