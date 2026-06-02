import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/community-mental-health")({
  head: () => ({
    meta: [
      { title: "Community Mental Health & Wellbeing — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Mental health that begins at the doorstep, not the clinic. A community-led pathway from screening to support, designed for India's villages and chawls.",
      },
      { property: "og:title", content: "Community Mental Health & Wellbeing — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Door-to-door screening, peer groups, and a referral path that ends in treatment. Built around PHQ-9 and GAD-7, delivered by trained community workers.",
      },
      { property: "og:url", content: "/programs/community-mental-health" },
    ],
    links: [{ rel: "canonical", href: "/programs/community-mental-health" }],
  }),
  component: CommunityMentalHealthPage,
});

const data: ProgrammePageData = {
  pillarId: "mental",
  chipLabel: "Mental Wellbeing · Programme 01",
  headlineLead: "The village does not need another awareness day. It needs",
  headlineEm: "someone who knocks on the door.",
  lead:
    "India has roughly one psychiatrist for every 1,00,000 people, and most of them sit in cities. The Community Mental Health & Wellbeing programme is built around a simpler unit: a trained neighbour, a validated screen, and a referral that ends in care — not in a leaflet.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },

  editorialEyebrow: "The case we are working on",
  editorialParagraphs: [
    "The 2015–16 National Mental Health Survey (NIMHANS) found that nearly 150 million Indians need active mental-health intervention, and that the treatment gap for common mental disorders runs above 80 percent. The shortfall is not awareness. It is access — and trust at the household level.",
    "A camp once a quarter does not close that gap. What closes it is a trained worker from the same lane, walking the same route every month, asking the same nine questions from the PHQ-9, and knowing the name of the medical officer who will take the call.",
    "That is the unit we are building. Not a campaign. A standing capability inside the community, anchored to the public health system that already exists.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "What this programme actually does — and what it refuses to do.",
  commitments: [
    {
      n: "01",
      title: "Train workers from inside the community",
      body:
        "We recruit literate adults from the wards we serve — many of them women — and certify them on a 12-week curriculum covering screening, first-line counselling, and safe referral. They are paid, supervised, and on the household's doorstep, not in a distant clinic.",
    },
    {
      n: "02",
      title: "Screen with validated instruments only",
      body:
        "Every household conversation uses PHQ-9 for depression and GAD-7 for anxiety, in the local language, with consent recorded. No bespoke scoring. No invented categories. The instrument is the same one the medical college down the road uses.",
    },
    {
      n: "03",
      title: "Close the loop on every positive screen",
      body:
        "A positive screen is not a number for a report. It is a referral to a named clinician at a named facility, with a follow-up visit at 30 and 90 days. We count the loop closed only when the household says the treatment is happening.",
    },
    {
      n: "04",
      title: "Run peer groups, not pep talks",
      body:
        "Weekly support circles of eight to twelve people, facilitated by a trained worker, using a structured curriculum on sleep, stress, and family communication. Attendance is voluntary; outcomes are measured against a comparison group.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Standard instruments. Local language. Visible math.",
  methods: [
    {
      label: "Screening tools",
      body: "PHQ-9 (depression), GAD-7 (anxiety), and a brief suicide-risk screen, translated into Marathi and Hindi and pre-tested for comprehension.",
    },
    {
      label: "Referral pathway",
      body: "Pre-agreed with the nearest Primary Health Centre, District Mental Health Programme cell, and one nearby private clinician for after-hours referrals.",
    },
    {
      label: "Consent at the doorstep",
      body: "Written, language-appropriate, revocable at any time. Every datapoint is traceable to a consent record signed by the head of household.",
    },
    {
      label: "Cost-per-outcome accounting",
      body: "Programme cost divided by referrals closed and people retained in care at 90 days. Reported alongside the headline number, never instead of it.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "The calendar we are publishing before fieldwork begins.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "Worker cohort one recruited",
      body:
        "Twenty community workers identified across two Mumbai wards. Baseline literacy, language fluency, and safeguarding training completed before any household is approached.",
    },
    {
      when: "Q4 FY 2026",
      title: "First household sweep",
      body:
        "500 households screened with PHQ-9 and GAD-7. Comparison ward selected from the same ward-level census. Protocol pre-registered on the Open Science Framework.",
    },
    {
      when: "Q1 FY 2027",
      title: "Referral pathway live",
      body:
        "Memoranda of understanding signed with two PHCs and the District Mental Health Programme cell. First positive screens entered into the follow-up register.",
    },
    {
      when: "Q2 FY 2027",
      title: "First public ledger",
      body:
        "Four numbers, one page: households screened, positive rate, referrals closed at 30 days, peer-group attendance. Raw, de-identified dataset linked.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "Public health systems, clinicians, and the households themselves.",
  partnershipsParagraphs: [
    "We are looking for District Mental Health Programme leads, BMC ward officers, and PHC medical officers who want a steady stream of well-prepared referrals — and a structured way to follow what happens to them.",
    "We are looking for psychiatrists and clinical psychologists willing to take three referrals a week from a community pathway, and to sit on a clinical review every quarter.",
    "We are looking for funders who will commit for at least 24 months. A six-month grant cannot build a community trust relationship; please do not ask us to pretend otherwise.",
  ],
  partnershipsLink: { label: "Talk to the programme team", href: "/contact" },

  related: [
    { href: "/what-we-do/mental-wellbeing", title: "Mental Wellbeing", body: "How the pillar fits within the Omni Care Model." },
    { href: "/programs/research-impact-assessment", title: "Research & Impact", body: "The discipline that sits behind every number we publish." },
    { href: "/programs/chw-development", title: "CHW Development", body: "Where the workers who run this programme come from." },
  ],

  ctaEyebrow: "Stand with the programme",
  ctaTitle: "Fund a community worker, or walk a Saturday round with one.",
  ctaBody:
    "Two paths in. A CSR commitment underwrites a worker for a full year, with quarterly reporting. A volunteer day puts you on a real round with a real supervisor.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },
};

function CommunityMentalHealthPage() {
  return <ProgrammePage data={data} />;
}
