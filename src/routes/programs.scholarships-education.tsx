import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/scholarships-education")({
  head: () => ({
    meta: [
      { title: "Scholarships & Education Support - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Multi-year scholarships and structured mentoring for first-generation learners pursuing nursing, allied health, and social-work pathways. The scholarship ends with a job.",
      },
      { property: "og:title", content: "Scholarships & Education Support - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Tuition, materials, stipend, and monthly mentoring across the full course. Designed to end with a paid health-system role, not a graduation photo.",
      },
      { property: "og:url", content: "/programs/scholarships-education" },
    ],
    links: [{ rel: "canonical", href: "/programs/scholarships-education" }],
  }),
  component: ScholarshipsEducationPage,
});

const data: ProgrammePageData = {
  pillarId: "social",
  chipLabel: "Social Growth · Programme 07",
  headlineLead: "The scholarship is a job.",
  headlineEm: "The job is a health worker.",
  lead:
    "ASER 2023 found that only about one in four rural Indian youth in the 14–18 cohort can read a Class II English text fluently. The pipeline into nursing, allied health, and social work narrows long before college. This programme funds the years that decide whether a first-generation learner makes it through.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Donate", href: "/donate" },

  editorialEyebrow: "Why we fund the full arc",
  editorialParagraphs: [
    "A one-year scholarship rarely survives a household emergency, an unexpected hostel fee, or a tough first-year semester. The drop-off in higher-education attainment for first-generation learners is concentrated in the gaps between scholarships - not inside them.",
    "Our scholarships are multi-year by design, covering tuition, materials, transport, and a small monthly stipend that absorbs the household-level shocks that would otherwise end the course.",
    "And we have a narrow focus on purpose: nursing, allied health, and social work - the pathways that turn a first-generation learner into a paid frontline worker. The scholarship is structured to end with a job in the system, not a certificate in a drawer.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "What this scholarship actually covers - and what it expects.",
  commitments: [
    {
      n: "01",
      title: "Cover the full cost",
      body:
        "Tuition, books, lab fees, examination fees, and transport. Plus a monthly stipend large enough to keep a scholar in the course when an unexpected expense hits the household.",
    },
    {
      n: "02",
      title: "Pair every scholar with a mentor",
      body:
        "Monthly one-to-one sessions with a mentor working in the field the scholar is training for. The mentor is paid, supervised, and accountable to written check-in notes after every session.",
    },
    {
      n: "03",
      title: "Track academic and wellbeing health",
      body:
        "Semester-by-semester academic check-ins, plus an anonymous quarterly wellbeing survey using PHQ-9 and a short institutional-belonging scale. Risks surface early, not in the final-year viva.",
    },
    {
      n: "04",
      title: "Active placement into a paid role",
      body:
        "In the final year, we work with public health systems and NGO partners to secure a real, paid placement before graduation. Scholarships end at the job, not at the convocation.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Selection on need. Support across years. Placement at the end.",
  methods: [
    {
      label: "Needs-based selection",
      body: "Selection on a documented household-income basis with priority for first-generation learners from communities we serve. Selection panel includes external academic representatives.",
    },
    {
      label: "Pathway focus",
      body: "Nursing (GNM, B.Sc Nursing, ANM), allied health (lab tech, radiography, optometry, physiotherapy), and BSW / MSW pathways. Aligned with sector workforce shortages.",
    },
    {
      label: "Mentor supervision",
      body: "Mentors are paid, vetted, and supervised by a senior staff member who reviews session notes monthly. Safeguarding training is non-negotiable.",
    },
    {
      label: "Placement partnerships",
      body: "Working MoUs with public health systems and partner NGOs that commit to interviewing scholarship graduates for relevant openings.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "The honest calendar of a new scholarship programme.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "First cohort selected",
      body:
        "Up to twenty scholars selected for the first cohort across nursing, allied health, and social work pathways. Mentor pool recruited and trained.",
    },
    {
      when: "Q4 FY 2026",
      title: "Mentoring cycle one",
      body:
        "First semester academic check-ins and monthly mentor sessions complete. Anonymous wellbeing baseline established.",
    },
    {
      when: "Q1 FY 2027",
      title: "Mid-year review",
      body:
        "Programme-wide review including external academic input. Curriculum and mentor support adjusted on the basis of scholar feedback.",
    },
    {
      when: "Q2 FY 2027",
      title: "First scholar ledger",
      body:
        "Cohort size, retention, academic check-in pass rate, wellbeing trend, and cost per retained scholar. With limitations written by us, not redacted.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "Colleges, employers, mentors, and CSR partners who fund the long horizon.",
  partnershipsParagraphs: [
    "We are looking for nursing colleges, allied-health institutes, and schools of social work willing to share semester progress data with us under written consent - and to nominate mentors from their alumni.",
    "We are looking for employer partners - public health systems, NGOs, hospital networks - willing to commit interview slots for graduating scholars in shortage-area roles.",
    "We are looking for senior nurses, allied-health professionals, and social workers willing to mentor - one scholar, one hour a month, for a full year at a time.",
    "We are looking for CSR partners who will fund a scholar through their entire course, not a single year of it. The first year is the easiest to fund and the least decisive.",
  ],
  partnershipsLink: { label: "Talk to the scholarships team", href: "/contact" },

  related: [
    { href: "/what-we-do/social-growth", title: "Social Growth", body: "How the pillar fits within the Omni Care Model." },
    { href: "/programs/chw-development", title: "CHW Development", body: "Where many scholars are placed after graduation." },
    { href: "/programs/training-capacity-building", title: "Training", body: "The certification track that complements degree pathways." },
  ],

  ctaEyebrow: "Underwrite a scholar",
  ctaTitle: "Fund the full course. End at a paid role.",
  ctaBody:
    "A CSR partnership funds a scholar end-to-end, with quarterly reporting on academic progress, wellbeing, and placement outcomes. A donor commitment supports a defined cohort.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Donate", href: "/donate" },
};

function ScholarshipsEducationPage() {
  return <ProgrammePage data={data} />;
}
