import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/womens-health-lifecycle")({
  head: () => ({
    meta: [
      { title: "Women's Health & Life-Cycle Care — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "One health record that follows a woman from menarche through menopause. Adolescent, maternal, reproductive, and post-menopausal care delivered by women community workers.",
      },
      { property: "og:title", content: "Women's Health & Life-Cycle Care — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "A single continuous record across a woman's life stages. Designed around NFHS-5 evidence on what falls through India's health-system gaps.",
      },
      { property: "og:url", content: "/programs/womens-health-lifecycle" },
    ],
    links: [{ rel: "canonical", href: "/programs/womens-health-lifecycle" }],
  }),
  component: WomensLifecyclePage,
});

const data: ProgrammePageData = {
  pillarId: "inclusive",
  chipLabel: "Inclusive Care · Programme 03",
  headlineLead: "One record that follows her from",
  headlineEm: "menarche to menopause.",
  lead:
    "India's health system meets women in pieces. A school session at fifteen. An ANC visit at twenty-five. A camp at fifty. The pieces rarely connect. This programme builds the connection — one household record, a single trusted worker, and the full life-stage curriculum from adolescence to post-menopause.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },

  editorialEyebrow: "Why life-cycle, not life-event",
  editorialParagraphs: [
    "NFHS-5 (2019–21) found that fewer than 2 percent of Indian women aged 30–49 have ever been screened for cervical cancer, that 57 percent of women aged 15–49 are anaemic, and that menstrual hygiene practices remain uneven outside metros. Each statistic gets its own programme. Each woman gets a fragmented file.",
    "The Life-Cycle programme refuses that fragmentation. The same woman community worker visits a household across years — through a daughter's first period, a daughter-in-law's first pregnancy, an aunt's perimenopause, a grandmother's bone-density concern.",
    "It is a slower model, and a more honest one. Continuity is the intervention.",
  ],

  commitmentsEyebrow: "Four life-stage commitments",
  commitmentsTitle: "What this programme covers, in the order a life arrives.",
  commitments: [
    {
      n: "01",
      title: "Adolescent health and menstrual literacy",
      body:
        "Age-appropriate sessions in schools and at the doorstep on menstrual hygiene, anaemia, mental health, and consent. Iron-folic-acid supplementation tracked household-by-household, not classroom-by-classroom.",
    },
    {
      n: "02",
      title: "Reproductive and maternal care",
      body:
        "Pre-pregnancy nutrition counselling, ANC reminders aligned to government protocols, and post-partum mental-health screening using the Edinburgh Postnatal Depression Scale. Every referral lands at a named PHC obstetrician.",
    },
    {
      n: "03",
      title: "Mid-life screening — cancer and NCDs",
      body:
        "Breast self-examination training and visual-inspection-with-acetic-acid (VIA) cervical screening, both delivered in a women-only space by a trained female worker. Positive findings referred to a designated clinician, with accompaniment if requested.",
    },
    {
      n: "04",
      title: "Post-menopausal care",
      body:
        "Bone health, hypertension and diabetes management, urinary and pelvic-floor concerns. The conversation no one starts. We start it.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Women workers, women-only spaces, instruments women trust.",
  methods: [
    {
      label: "Women-only delivery model",
      body: "Every worker, every facilitator, every screen carried out by a woman. In wards where male health workers are not socially accepted, this is the difference between access and absence.",
    },
    {
      label: "Validated instruments",
      body: "EPDS for post-partum depression, VIA for cervical screening, structured anaemia screening. Aligned with WHO and Indian government protocols.",
    },
    {
      label: "Household record continuity",
      body: "A single anonymised household ID links every life-stage interaction across years, so a worker can see what the previous worker did.",
    },
    {
      label: "Consent and confidentiality",
      body: "Written, language-appropriate, revocable. Sensitive findings (intimate partner violence indicators, reproductive history) are handled under a strict access protocol.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "How we open the programme — slowly, on purpose.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "Worker recruitment and certification",
      body:
        "Fifteen women community workers selected from the wards we serve, certified on the life-cycle curriculum, and paired with senior clinical mentors at the local PHC.",
    },
    {
      when: "Q4 FY 2026",
      title: "Adolescent and ANC cohorts opened",
      body:
        "School-based adolescent sessions begin in three partner schools. ANC reminder pathway integrated with two PHCs serving roughly 6,000 women of reproductive age.",
    },
    {
      when: "Q1 FY 2027",
      title: "Mid-life screening cohort opened",
      body:
        "Cervical and breast screening pathway opened to women aged 30–49 with named clinician referrals. Accompaniment offered for the first follow-up.",
    },
    {
      when: "Q2 FY 2027",
      title: "First ledger published",
      body:
        "Life-stage participation, screening conversion, referral closure at 90 days, and the worker-to-household ratio. With limitations written in plain language.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "PHC obstetricians, schools, and partners who fund continuity over campaigns.",
  partnershipsParagraphs: [
    "We are looking for women clinicians — obstetricians, gynaecologists, oncologists, primary-care physicians — willing to take community referrals on a fixed weekly cadence.",
    "We are looking for school principals and adolescent-health programme leads ready to embed structured menstrual-health and mental-health sessions inside the school calendar — not as one-off events.",
    "We are looking for corporate partners whose CSR teams understand that a multi-year commitment to one woman, across her life stages, outperforms a single-year campaign reaching ten times as many.",
  ],
  partnershipsLink: { label: "Talk to the programme team", href: "/contact" },

  related: [
    { href: "/what-we-do/inclusive-care", title: "Inclusive Care", body: "How the pillar fits within the Omni Care Model." },
    { href: "/programs/womens-wellness", title: "Women's Wellness", body: "The weekly group programme that sits alongside this one." },
    { href: "/programs/disability-elderly-care", title: "Disability & Elderly", body: "The home-based care our older women are connected to." },
  ],

  ctaEyebrow: "Walk this programme with us",
  ctaTitle: "Underwrite a worker, mentor a cohort, or join a ward round.",
  ctaBody:
    "A CSR partnership supports a worker for a full life-stage cycle. A clinician partnership opens a follow-up slot. A volunteer day puts you on a real visit with a senior worker.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },
};

function WomensLifecyclePage() {
  return <ProgrammePage data={data} />;
}
