import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { PILLARS } from "@/lib/site";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
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
  const [active, setActive] = useState<Programme | null>(null);

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
          Jump to the programmes
          <ArrowDown className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </PageHero>

      {/* Manifesto strip */}
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
                  floor, human potential at the top. Tap any programme to read the full
                  brief.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Programme cards — open modal */}
      <section id="index" className="bg-snow border-b border-hairline scroll-mt-20">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-10 lg:mb-12">
            <FadeUp>
              <div className="eyebrow">The five programmes</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                Tap a programme to read its full brief.
              </h2>
            </FadeUp>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {PROGRAMMES.map((p, i) => {
              const pillar = pillarOf(p.pillar);
              return (
                <FadeUp as="li" key={p.slug} delay={Math.min(i * 60, 240)}>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="group relative h-full w-full text-left rounded-2xl border border-hairline bg-canvas p-5 lg:p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/35 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_18px_36px_-20px_rgba(28,0,96,0.22)] focus-visible:outline-2 focus-visible:outline-primary active:scale-[0.99]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[11px] text-ink-muted tabular-nums">
                        {p.n}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: pillar.color }}
                        />
                        {pillar.name}
                      </span>
                    </div>
                    <h3 className="mt-4 font-sans font-semibold text-[1.125rem] lg:text-[1.2rem] leading-snug tracking-[-0.01em] text-ink text-balance">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.55] text-ink-muted text-pretty line-clamp-3">
                      {p.oneLine}
                    </p>
                    <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between">
                      <span className="text-[12px] font-medium text-ink">Read the brief</span>
                      <ArrowUpRight
                        className="h-4 w-4 text-ink transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </FadeUp>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Quarterly ledger */}
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

      <ProgrammeDialog
        programme={active}
        onClose={() => setActive(null)}
      />
    </>
  );
}

function ProgrammeDialog({
  programme,
  onClose,
}: {
  programme: Programme | null;
  onClose: () => void;
}) {
  const open = !!programme;
  const pillar = programme ? pillarOf(programme.pillar) : null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="p-0 gap-0 border-hairline bg-snow w-[calc(100vw-1.5rem)] sm:w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-2xl [&>button]:hidden"
      >
        {programme && pillar && (
          <>
            {/* Header — tinted with pillar colour */}
            <div
              className="relative shrink-0 px-6 sm:px-8 pt-7 sm:pt-8 pb-5 border-b border-hairline"
              style={{
                background: `linear-gradient(180deg, color-mix(in oklab, ${pillar.color} 14%, var(--canvas)) 0%, var(--canvas) 100%)`,
              }}
            >
              {/* Top accent rail */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: pillar.color }}
              />
              <DialogClose
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-snow text-ink-muted transition-[color,border-color,transform] duration-200 hover:text-ink hover:border-ink/40 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Close"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </DialogClose>

              <div className="flex items-center gap-3 pr-12">
                <span className="font-mono text-[11px] text-ink-muted tabular-nums">
                  {programme.n}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: pillar.color }}
                  />
                  {pillar.name}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted bg-snow/80"
                  style={{ borderColor: `color-mix(in oklab, ${pillar.color} 40%, transparent)` }}
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: pillar.color }}
                  />
                  In design
                </span>
              </div>

              <DialogTitle className="mt-4 font-sans font-semibold text-[1.375rem] sm:text-[1.625rem] leading-[1.15] tracking-[-0.015em] text-ink text-balance pr-12">
                {programme.name}
              </DialogTitle>
              <DialogDescription className="mt-2 font-serif text-[1.0625rem] sm:text-[1.15rem] leading-[1.4] text-ink/80 text-balance pr-2">
                {programme.oneLine}
              </DialogDescription>
            </div>


            {/* Body — scrollable */}
            <div className="overflow-y-auto px-6 sm:px-8 py-6 sm:py-7 space-y-6">
              <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-ink-muted text-pretty">
                {programme.intent}
              </p>

              <div className="rounded-xl border border-hairline bg-canvas p-4 sm:p-5">
                <FieldLabel>Who it serves</FieldLabel>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink text-pretty">
                  {programme.who}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <DetailBlock label="What we will do" items={programme.doing} />
                <DetailBlock
                  label="What we will publish"
                  items={programme.publish}
                  accentColor={pillar.color}
                />
              </div>

              <div className="pt-5 border-t border-hairline grid grid-cols-2 gap-5">
                <Meta label="CSR entry" value={programme.schedule} />
                <Meta label="SDG alignment" value={programme.sdg} accentColor={pillar.color} />
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 px-6 sm:px-8 py-4 border-t border-hairline bg-canvas">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-hairline bg-snow px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink hover:border-ink/40"
              >
                Close
              </button>
              <Link
                to="/partner/csr"
                onClick={onClose}
                className="group/cta inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-snow transition-[transform,background-color] duration-200 hover:bg-ink/90 active:scale-[0.98]"
              >
                Partner on this programme
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
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
      className={`h-full rounded-xl border p-4 sm:p-5 ${
        accent
          ? "bg-canvas border-hairline shadow-[inset_3px_0_0_0_var(--gold,#caa64a)]"
          : "bg-canvas border-hairline"
      }`}
    >
      <FieldLabel>{label}</FieldLabel>
      <ul className="mt-3 space-y-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="text-[14px] leading-[1.55] text-ink text-pretty flex gap-2.5"
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
