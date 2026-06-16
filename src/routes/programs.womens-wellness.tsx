import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/womens-wellness")({
  head: () => ({
    meta: [
      { title: "Women's Health & Wellness Initiative - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "A weekly women-only wellness group: breath-work, gentle movement, sleep and stress education, peer dialogue. Designed to plug into mental health, life-cycle, and NCD pathways.",
      },
      { property: "og:title", content: "Women's Health & Wellness Initiative - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "An evidence-informed group curriculum, delivered by trained women facilitators in community spaces. Low-cost, replicable, and built to integrate with screening and mental-health pathways.",
      },
      { property: "og:url", content: "/programs/womens-wellness" },
    ],
    links: [{ rel: "canonical", href: "/programs/womens-wellness" }],
  }),
  component: WomensWellnessPage,
});

const data: ProgrammePageData = {
  pillarId: "inclusive",
  chipLabel: "Inclusive Care · Programme 05",
  headlineLead: "Thirty minutes a week, in her own language,",
  headlineEm: "with women she trusts.",
  lead:
    "Most wellness programmes for Indian women cost more than the day's wage, run in English, and assume a yoga mat. This one runs in the community hall, in Marathi or Hindi, with a trained woman facilitator and a structured curriculum - and it costs nothing to attend.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },

  editorialEyebrow: "Why a group programme",
  editorialParagraphs: [
    "A one-to-one clinical session is rare, expensive, and stigmatising in the wards we serve. A weekly group of eight to twelve women, facilitated by a trained neighbour, is none of those things - and the evidence on group-delivered mental and physical wellness programmes is consistent across low-resource settings.",
    "This is not a yoga class. The curriculum borrows from cognitive-behavioural-style structured group work, simple breath regulation, and peer-supported chronic-pain and sleep modules. Each session is forty-five minutes, with a clear arc and a take-home practice.",
    "We designed it as the connective tissue between the Community Mental Health programme and the Life-Cycle programme - a low-stakes door that opens onto the rest of our work.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "What a participant can actually expect from the group.",
  commitments: [
    {
      n: "01",
      title: "A structured 12-week arc",
      body:
        "Twelve weekly sessions, each with a defined topic - sleep, stress, breath, chronic pain, intimate health, mental wellbeing - and a simple practice the participant can carry home. After week 12, an open continuation track.",
    },
    {
      n: "02",
      title: "Trained women facilitators",
      body:
        "Every facilitator is a woman from the same community, certified on the curriculum, supervised by a clinical mentor, and paid for her time. We do not run group programmes on volunteer good will.",
    },
    {
      n: "03",
      title: "A safe room - by design",
      body:
        "Women-only, community-owned space. Confidentiality agreed at session one. A clear, written safeguarding protocol the facilitator carries - including a referral path for disclosures of violence or acute distress.",
    },
    {
      n: "04",
      title: "A door into clinical care",
      body:
        "Every group includes a brief monthly check-in using PHQ-9, GAD-7, and a chronic-pain scale. Participants who screen positive are offered, never pushed, into the Community Mental Health pathway.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Structured curriculum, validated check-ins, honest measurement.",
  methods: [
    {
      label: "Curriculum source",
      body: "Adapted from peer-reviewed group programmes for women in low-resource settings, reviewed by an external clinical psychologist before deployment.",
    },
    {
      label: "Monthly screening check-ins",
      body: "PHQ-9, GAD-7, and a brief chronic-pain scale completed monthly, in confidence, alongside session attendance.",
    },
    {
      label: "Attendance and retention",
      body: "Every session attendance is logged against an anonymous participant ID. Retention at week 12 is the headline number, not enrolment at week 1.",
    },
    {
      label: "Cost per retained participant",
      body: "We track cost per woman who completed at least eight of twelve sessions - the threshold the curriculum needs to work.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "How we open the groups - slow on purpose, then steady.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "Facilitator cohort one trained",
      body:
        "Ten women facilitators certified on the curriculum, with two clinical mentors providing weekly supervision.",
    },
    {
      when: "Q4 FY 2026",
      title: "First three groups open",
      body:
        "Three groups of ten women each, in three different community spaces, all twelve weeks. Monthly PHQ-9, GAD-7, and chronic-pain check-ins begin from session one.",
    },
    {
      when: "Q1 FY 2027",
      title: "Continuation track opened",
      body:
        "Graduates of the 12-week arc invited into an open continuation group. First participants on-boarded into the Community Mental Health referral pathway where indicated.",
    },
    {
      when: "Q2 FY 2027",
      title: "First ledger published",
      body:
        "Groups run, attendance, week-12 retention, screening trend, and cost per retained participant. Published alongside the integrated Mental Health ledger.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "Clinical psychologists, community spaces, and partners who fund the unglamorous middle.",
  partnershipsParagraphs: [
    "We are looking for clinical psychologists and psychiatric social workers willing to act as group supervisors - two hours a month per group is enough.",
    "We are looking for community space partners - schools, community halls, NGOs - that can host a recurring women-only group at a fixed time.",
    "We are looking for funders who will commit to retention, not reach. A group that runs for two years with thirty consistent participants will outperform a campaign that touches three thousand women once.",
  ],
  partnershipsLink: { label: "Talk to the programme team", href: "/contact" },

  related: [
    { href: "/what-we-do/inclusive-care", title: "Inclusive Care", body: "How the pillar fits within the Omni Care Model." },
    { href: "/programs/community-mental-health", title: "Community Mental Health", body: "Where positive screens from the groups are referred." },
    { href: "/programs/womens-health-lifecycle", title: "Life-Cycle Care", body: "The continuity programme this initiative sits inside." },
  ],

  ctaEyebrow: "Sponsor a group",
  ctaTitle: "Underwrite twelve weeks for ten women, in one community hall, with one trained facilitator.",
  ctaBody:
    "A CSR partnership funds a facilitator and a group through a full 12-week arc - the minimum unit of useful work in this programme.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },
};

function WomensWellnessPage() {
  return <ProgrammePage data={data} />;
}
