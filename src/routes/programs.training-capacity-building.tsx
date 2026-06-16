import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/training-capacity-building")({
  head: () => ({
    meta: [
      { title: "Training & Capacity Building - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Open-source curricula, certified frontline workers, and mentoring for partner NGOs. We publish what we teach so the sector can build on it.",
      },
      { property: "og:title", content: "Training & Capacity Building - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "12-week community health worker certification, partner-NGO modules on safeguarding and M&E, all curricula released under an open licence.",
      },
      { property: "og:url", content: "/programs/training-capacity-building" },
    ],
    links: [{ rel: "canonical", href: "/programs/training-capacity-building" }],
  }),
  component: TrainingCapacityPage,
});

const data: ProgrammePageData = {
  pillarId: "human",
  chipLabel: "Human Potential · Programme 06",
  headlineLead: "Publish the curriculum. Certify the worker.",
  headlineEm: "Pay her properly.",
  lead:
    "The Indian community-health sector spends crores on training every year. Most of it walks out of the room with the trainer. This programme treats curriculum as public infrastructure - written, version-controlled, openly licensed, and used to certify workers who are paid for the job we trained them for.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },

  editorialEyebrow: "Why training, done seriously",
  editorialParagraphs: [
    "The WHO estimates India will need an additional 1.8 million health workers by 2030 to meet basic primary-care needs. Most of that workforce will come from the communities they serve. The bottleneck is not interest - it is structured, repeatable training, and a credential the employer recognises.",
    "We build that infrastructure. Each curriculum is written down end to end: learning outcomes, contact hours, assessment rubric, supervisor guide, and a competency check the worker has to clear before certification.",
    "Then we publish it. Anyone - a partner NGO in Belgaum, a district training cell in Solapur, a graduate programme in Mumbai - can pick it up and run it without paying us a licence fee. That is the only honest definition of capacity building.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "What this programme produces - and what it gives away.",
  commitments: [
    {
      n: "01",
      title: "Community health worker certification (12 weeks)",
      body:
        "A structured 12-week course covering screening, first-line counselling, NCD basics, safeguarding, and supervised field work. Certification requires passing a written assessment and an observed field encounter.",
    },
    {
      n: "02",
      title: "Partner-NGO modules",
      body:
        "Short-form modules for partner organisations on safeguarding, monitoring & evaluation, consent and data practice, and inclusive design - designed for staff who do not have time to leave the field for a week.",
    },
    {
      n: "03",
      title: "Open-licence curriculum library",
      body:
        "Every curriculum is released under a permissive open licence. Source files, slide decks, assessment rubrics, and trainer notes all freely available. Updates versioned and dated.",
    },
    {
      n: "04",
      title: "Paid placements, not certificates in a drawer",
      body:
        "Certification is paired with active placement support. We do not run a training programme that ends at graduation; we run one that ends in a paid role in the public or NGO health system.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Written, assessed, versioned, public.",
  methods: [
    {
      label: "Curriculum design",
      body: "Each module starts from explicit learning outcomes aligned with national frontline worker competencies. External clinical review before release.",
    },
    {
      label: "Assessment",
      body: "Mixed written and observed assessment. Field competency check carried out by a supervisor independent of the trainer.",
    },
    {
      label: "Version control",
      body: "Every curriculum carries a version number and changelog. Field feedback feeds quarterly revisions.",
    },
    {
      label: "Open licence",
      body: "Creative Commons attribution-style licence on all materials. Adopters are asked to credit, share back improvements, and not paywall the result.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "What we will publish, train, and place.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "Curriculum v1.0 released",
      body:
        "The 12-week community health worker curriculum and three partner-NGO modules (safeguarding, M&E, consent) published openly with full source files.",
    },
    {
      when: "Q4 FY 2026",
      title: "Cohort one certified",
      body:
        "Twenty community health workers complete the 12-week course. Each passes a written assessment and an observed field encounter before certification is issued.",
    },
    {
      when: "Q1 FY 2027",
      title: "Partner-NGO modules delivered",
      body:
        "Modules delivered to three partner NGOs. Field competency checks completed on staff who attended.",
    },
    {
      when: "Q2 FY 2027",
      title: "First placement ledger",
      body:
        "Workers certified, placements secured, six-month retention rate, and a list of partner organisations using each curriculum. Published with curriculum download counts.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "State training cells, partner NGOs, academic institutions, and CSR partners who fund infrastructure.",
  partnershipsParagraphs: [
    "We are looking for state training cells and District Mental Health Programme leads who want a turnkey, openly-licensed curriculum to run themselves.",
    "We are looking for partner NGOs in community health, women's rights, and disability who want structured short-form training for their own staff - and who will feed field experience back into the next version.",
    "We are looking for academic partners in public health and nursing schools to co-design, peer-review, and accredit the curriculum where appropriate.",
    "We are looking for CSR funders who understand that paying for curriculum infrastructure is the highest-leverage rupee in the sector - and the hardest to take credit for.",
  ],
  partnershipsLink: { label: "Talk to the training team", href: "/contact" },

  related: [
    { href: "/what-we-do/human-potential", title: "Human Potential", body: "Where this programme sits in the Omni Care Model." },
    { href: "/programs/chw-development", title: "CHW Development", body: "Where certified workers are placed into paid roles." },
    { href: "/programs/research-impact-assessment", title: "Research & Impact", body: "How we evaluate whether the training actually works." },
  ],

  ctaEyebrow: "Fund the infrastructure",
  ctaTitle: "Underwrite a curriculum, a cohort, or a state-level rollout.",
  ctaBody:
    "A CSR partnership funds a complete cohort of certified workers, plus the curriculum updates that come out of their field experience. The asset stays public.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },
};

function TrainingCapacityPage() {
  return <ProgrammePage data={data} />;
}
