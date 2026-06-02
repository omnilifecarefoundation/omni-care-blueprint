import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/disability-elderly-care")({
  head: () => ({
    meta: [
      { title: "Disability Inclusion & Elderly Support — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Home-based care, assistive devices, caregiver training, and entitlement linkage for persons with disability and older adults — the people clinic hours were never written for.",
      },
      { property: "og:title", content: "Disability Inclusion & Elderly Support — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Monthly home visits, structured caregiver training, and active linkage to disability pensions, Niramaya cover, and the Rashtriya Vayoshri Yojana. Care moves to the household.",
      },
      { property: "og:url", content: "/programs/disability-elderly-care" },
    ],
    links: [{ rel: "canonical", href: "/programs/disability-elderly-care" }],
  }),
  component: DisabilityElderlyPage,
});

const data: ProgrammePageData = {
  pillarId: "inclusive",
  chipLabel: "Inclusive Care · Programme 04",
  headlineLead: "The clinic opens at ten. The people who need it most",
  headlineEm: "cannot leave the house.",
  lead:
    "Census 2011 counted 2.68 crore Indians with disability. UNFPA estimates 13.8 crore Indians are aged 60 or above. For both populations, the most useful piece of healthcare is the one that comes through the door. This programme is built around that one principle: care moves to the household.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },

  editorialEyebrow: "What this programme refuses to assume",
  editorialParagraphs: [
    "The default model of Indian healthcare assumes the patient walks in. For a wheelchair user in a building without a ramp, a woman with a chronic pain condition, or an 82-year-old with limited mobility and no living son nearby, that assumption excludes them at step one.",
    "The Disability & Elderly programme replaces walk-in with home-based: a trained worker arrives monthly, completes a structured needs assessment, updates the care plan, trains the family caregiver on one new skill, and links the household to whichever government entitlement they are owed.",
    "It is not glamorous work. It is, by a long way, the work that most changes the day-to-day texture of a life.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "The four things every enrolled household actually gets.",
  commitments: [
    {
      n: "01",
      title: "A monthly home visit, on a schedule",
      body:
        "Same worker, same week of the month, year over year. Vital signs, chronic-medication adherence, fall-risk assessment, and a short caregiver check-in. The visit is the relationship; the data is the by-product.",
    },
    {
      n: "02",
      title: "Assistive devices, fitted at home",
      body:
        "Mobility aids, hearing aids, spectacles, low-cost adaptive equipment — sourced through partners and fitted in the home, not handed out at a camp. We follow up at 30 days to check the device is actually being used.",
    },
    {
      n: "03",
      title: "Caregiver training, one skill at a time",
      body:
        "Family members are the de facto care team. We train them in monthly modules: safe transfers, wound care, medication management, communication for dementia, mental-health first aid. Each module is one home session, followed by a competency check.",
    },
    {
      n: "04",
      title: "Entitlement linkage you can verify",
      body:
        "Disability certificate (UDID), disability pension, Niramaya health insurance, Rashtriya Vayoshri Yojana, widow pension where applicable. We do not advertise the schemes — we walk the household through the paperwork until the benefit lands.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Standard tools, household-level discipline.",
  methods: [
    {
      label: "WHODAS 2.0 for function",
      body: "Functional assessment at enrolment and annually thereafter. The same instrument used by district hospitals and academic researchers — no bespoke scoring.",
    },
    {
      label: "Mini-Cog and PHQ-9 for elders",
      body: "Quick cognitive screen and depression screen at enrolment. Positive findings trigger a clinical referral, not a leaflet.",
    },
    {
      label: "Caregiver burden index",
      body: "Zarit Burden Interview (short form) every six months. We track the caregiver as carefully as the patient — burnout is the single largest cause of programme drop-off.",
    },
    {
      label: "Entitlement tracker",
      body: "Each household has a checklist of every scheme they are eligible for. The checklist is published in summary with the quarterly ledger, so completion rates are visible.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "How we open this programme — one ward, one cohort, on purpose.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "Worker cohort one trained",
      body:
        "Twelve workers certified on home-based geriatric and disability care, with two clinical mentors (one geriatrician, one rehabilitation specialist) reviewing case load monthly.",
    },
    {
      when: "Q4 FY 2026",
      title: "First 150 households enrolled",
      body:
        "Baseline WHODAS 2.0, Mini-Cog, PHQ-9, and household entitlement audit. Care plan signed off by household, worker, and clinical mentor before the second visit.",
    },
    {
      when: "Q1 FY 2027",
      title: "Caregiver training cycle complete",
      body:
        "Every enrolled household has been offered the full six-module caregiver curriculum. Competency checks recorded module-by-module.",
    },
    {
      when: "Q2 FY 2027",
      title: "First ledger published",
      body:
        "Households enrolled, visits completed, entitlements received, caregiver burden trend, and the proportion of devices still in use at 30 days. Limitations included.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "Geriatricians, rehab specialists, disability rights groups, and entitlement-system partners.",
  partnershipsParagraphs: [
    "We are looking for geriatricians and rehabilitation specialists willing to act as clinical mentors — one session a month is enough to keep the case load safe.",
    "We are looking for disability-led organisations to co-design our work with persons with disability — we will not design care for, only with.",
    "We are looking for partners who can move on the entitlement side: district social welfare officers, UDID enrolment camps, and CSR teams who will sponsor specific device cohorts (wheelchairs, hearing aids, spectacles).",
  ],
  partnershipsLink: { label: "Talk to the programme team", href: "/contact" },

  related: [
    { href: "/what-we-do/inclusive-care", title: "Inclusive Care", body: "How the pillar fits within the Omni Care Model." },
    { href: "/programs/womens-health-lifecycle", title: "Women's Lifecycle Care", body: "The continuity model our older women are also part of." },
    { href: "/programs/community-mental-health", title: "Community Mental Health", body: "Caregiver mental health is part of this work." },
  ],

  ctaEyebrow: "Underwrite a household",
  ctaTitle: "Fund a year of monthly home visits, devices, and entitlement walk-throughs.",
  ctaBody:
    "A CSR partnership underwrites a defined cohort end-to-end. A donor commitment funds devices, training, and the worker time that links a household to what it is owed.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Donate", href: "/donate" },
};

function DisabilityElderlyPage() {
  return <ProgrammePage data={data} />;
}
