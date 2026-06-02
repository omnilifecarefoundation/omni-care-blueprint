import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/preventive-health-outreach")({
  head: () => ({
    meta: [
      { title: "Preventive & Community Health Outreach — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Screening that ends in a treated condition, not a printed leaflet. NCD outreach for blood pressure, blood sugar, and cancer markers, with a funded referral path into the public health system.",
      },
      { property: "og:title", content: "Preventive & Community Health Outreach — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "BP, blood sugar, cancer-marker screening at the community level. Aligned with NPCDCS. Every positive result has a named clinician and a 90-day follow-up.",
      },
      { property: "og:url", content: "/programs/preventive-health-outreach" },
    ],
    links: [{ rel: "canonical", href: "/programs/preventive-health-outreach" }],
  }),
  component: PreventiveHealthPage,
});

const data: ProgrammePageData = {
  pillarId: "human",
  chipLabel: "Human Potential · Programme 02",
  headlineLead: "A camp without a referral path is not a programme.",
  headlineEm: "It is theatre.",
  lead:
    "Non-communicable diseases now cause an estimated 63 percent of deaths in India (WHO, 2022). Most begin years before symptoms — and most are missed because preventive screening is rare in the places that need it most. This programme runs the screen, and then walks the household into the treatment.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Donate", href: "/donate" },

  editorialEyebrow: "Why this programme exists",
  editorialParagraphs: [
    "The National Programme for Prevention and Control of Non-Communicable Diseases (NPCDCS) lays out a clear pathway: opportunistic screening, risk stratification, referral, and chronic management. The pathway exists on paper. In most low-income wards, it does not exist in practice.",
    "We do not invent a new pathway. We run NPCDCS the way it was written — at the doorstep, with trained community workers, using the prescribed instruments, in partnership with the nearest PHC and district hospital.",
    "Our promise is narrow and verifiable. Every positive screen ends with a named clinician, a confirmed first appointment, and a check-in at 30, 60, and 90 days. The screen is the start of the work, not the headline at the end of it.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "What a household actually gets from this programme.",
  commitments: [
    {
      n: "01",
      title: "Screen for what NPCDCS prescribes",
      body:
        "Blood pressure, random blood sugar, BMI, tobacco and alcohol use, and oral / breast / cervical cancer awareness checks. Every instrument is calibrated; every reading is recorded against a household ID.",
    },
    {
      n: "02",
      title: "Risk-stratify on the spot",
      body:
        "We do not hand back a paper slip and walk away. Workers classify risk on the WHO-ISH chart, explain the result in local language, and pre-book the referral appointment before they leave the doorstep.",
    },
    {
      n: "03",
      title: "Walk the household to follow-up",
      body:
        "A community worker accompanies the household to the first PHC visit if requested. Two-thirds of missed appointments in low-income settings are about logistics, not motivation. We solve the logistics.",
    },
    {
      n: "04",
      title: "Publish what we missed",
      body:
        "Quarterly we report not only screenings completed and referrals closed, but referrals lost — and the reason. Stockouts, transfers, refusals. Honesty about what did not work is the only way the system improves.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Aligned to the national programme. Run with discipline.",
  methods: [
    {
      label: "Aligned to NPCDCS",
      body: "Every instrument, threshold, and referral rule matches the national programme. No bespoke clinical guidance.",
    },
    {
      label: "Calibrated equipment",
      body: "BP monitors and glucometers re-validated quarterly against a reference clinic. Maintenance log published with the ledger.",
    },
    {
      label: "Household ID, not name lists",
      body: "Pseudonymised household IDs allow follow-up across visits without putting names in spreadsheets. Consent recorded at first contact.",
    },
    {
      label: "Cost per managed condition",
      body: "We track cost per person retained in care at 90 days — not cost per screen. The screen is cheap; the care is the unit that matters.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "The calendar we are publishing before fieldwork begins.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "PHC partnerships signed",
      body:
        "Memoranda of understanding with two Mumbai PHCs and one district hospital. Stock and slot availability verified before any household is screened.",
    },
    {
      when: "Q4 FY 2026",
      title: "First outreach cycle",
      body:
        "Door-to-door screening across one ward — roughly 800 adults. WHO-ISH risk classification recorded for every adult screened.",
    },
    {
      when: "Q1 FY 2027",
      title: "Follow-up cohort tracked",
      body:
        "Every high-risk adult assigned a community worker for accompaniment. 30-day and 60-day follow-up visit rates recorded household-by-household.",
    },
    {
      when: "Q2 FY 2027",
      title: "Public ledger one",
      body:
        "Numbers and methods report: screenings completed, positives by category, 90-day retention, cost per managed condition, and the list of referrals we lost.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "PHC clinicians, district administrations, and corporate partners willing to fund the boring middle.",
  partnershipsParagraphs: [
    "We work alongside, not in place of, the public health system. PHC medical officers, district NCD officers, and ASHA supervisors are partners, not gatekeepers. If you sit in one of those roles and want a steady stream of well-prepared patients, we want to hear from you.",
    "We are looking for CSR partners who understand that the cost-effective part of NCD control is the unglamorous part — the follow-up, the medication adherence, the chronic care. The screening camp is the first metre of a long road.",
    "And we are looking for diagnostic labs and pharmaceutical partners able to commit on price for medications most patients in our wards cannot otherwise sustain.",
  ],
  partnershipsLink: { label: "Talk to the programme team", href: "/contact" },

  related: [
    { href: "/what-we-do/human-potential", title: "Human Potential", body: "Where this programme sits in the Omni Care Model." },
    { href: "/programs/community-mental-health", title: "Community Mental Health", body: "Same community workers, same household, different conversation." },
    { href: "/about/compliance", title: "Compliance", body: "12A, 80G, FCRA, CSR-1." },
  ],

  ctaEyebrow: "Underwrite the programme",
  ctaTitle: "One household, one screen, one referral closed. Multiply it.",
  ctaBody:
    "A CSR partnership underwrites a screening cohort end-to-end — equipment, worker time, and the 90-day follow-up that turns a number into a managed condition.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Donate", href: "/donate" },
};

function PreventiveHealthPage() {
  return <ProgrammePage data={data} />;
}
