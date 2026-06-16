import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage, type ProgrammePageData } from "@/components/ProgrammePage";

export const Route = createFileRoute("/programs/chw-development")({
  head: () => ({
    meta: [
      { title: "Community Health Worker Development - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Recruit, certify, and place adults from the community as paid frontline health workers. A livelihood for the worker, a trusted neighbour for the household, capacity for the public health system.",
      },
      { property: "og:title", content: "Community Health Worker Development - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "12-week certification, supervised field placement, and active employer partnerships. The worker earns a wage; the village gains a steady professional.",
      },
      { property: "og:url", content: "/programs/chw-development" },
    ],
    links: [{ rel: "canonical", href: "/programs/chw-development" }],
  }),
  component: CHWDevelopmentPage,
});

const data: ProgrammePageData = {
  pillarId: "social",
  chipLabel: "Social Growth · Programme 08",
  headlineLead: "A paid livelihood, a trusted neighbour,",
  headlineEm: "a stronger primary health centre.",
  lead:
    "India runs the largest community health workforce in the world - roughly ten lakh ASHAs alone - and still falls short of the WHO estimate of 1.8 million additional health workers needed by 2030. This programme is one answer to that gap: recruit from the community, certify on a structured course, and place into paid frontline roles.",
  primary: { label: "Partner on CSR", href: "/partner/csr" },
  secondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },

  editorialEyebrow: "Why we recruit from inside the community",
  editorialParagraphs: [
    "A health worker who is also a neighbour does work no outside professional can: they are trusted at the doorstep, they speak the household language without translation, and they stay in the system for years rather than rotating out after a short posting.",
    "But the pathway from interest to certification to a paid role is rarely written down. Most community members never see it. We write it down, then walk people through it.",
    "Recruitment, training, supervised field work, certification, and active placement into a paid public-health or NGO role - one programme, one cohort, one accountable timeline.",
  ],

  commitmentsEyebrow: "Four working commitments",
  commitmentsTitle: "What a recruit can actually expect from this programme.",
  commitments: [
    {
      n: "01",
      title: "Recruit from inside the community",
      body:
        "Adults from the wards we serve, with at least secondary education, identified in partnership with local self-help groups and community leaders. Selection is documented, criteria are public.",
    },
    {
      n: "02",
      title: "Certify on the 12-week curriculum",
      body:
        "Same openly-licensed curriculum the Training & Capacity Building programme publishes. Written assessment plus an observed field encounter before any certification is issued.",
    },
    {
      n: "03",
      title: "Supervise the first 90 days in the field",
      body:
        "Every newly certified worker is paired with a senior worker for the first 90 days, with weekly case reviews. Mistakes get caught and corrected before they harden into habits.",
    },
    {
      n: "04",
      title: "Place into a paid role - actively, not passively",
      body:
        "We do not run a programme that ends at certification. We have written employer MoUs and we walk graduates into interviews. Placement and 6-month retention are the metrics that matter.",
    },
  ],

  methodsEyebrow: "How we work",
  methodsTitle: "Recruit. Certify. Supervise. Place. Retain.",
  methods: [
    {
      label: "Selection criteria",
      body: "Documented, public, applied by a panel that includes community representatives. Priority for adults already informally trusted as health resources in their lane.",
    },
    {
      label: "Curriculum",
      body: "The 12-week community health worker curriculum (openly licensed), with written and observed assessment.",
    },
    {
      label: "Field supervision",
      body: "First 90 days under direct senior-worker supervision, with weekly case review and a structured competency check at day 30, 60, and 90.",
    },
    {
      label: "Placement and retention",
      body: "Written MoUs with public health systems and NGO partners. We track 6-month and 12-month retention rates, not just placement counts.",
    },
  ],

  timelineEyebrow: "First eighteen months",
  timelineTitle: "The pipeline we are publishing before recruitment opens.",
  timeline: [
    {
      when: "Q3 FY 2026",
      title: "Recruitment partnerships signed",
      body:
        "MoUs with three self-help-group federations and two ward-level community organisations for joint recruitment and reference checks.",
    },
    {
      when: "Q4 FY 2026",
      title: "Cohort one trained and certified",
      body:
        "Twenty adults complete the 12-week curriculum. Each passes the written assessment and the observed field encounter.",
    },
    {
      when: "Q1 FY 2027",
      title: "First 90 days in the field",
      body:
        "Each certified worker paired with a senior supervisor. Weekly case reviews, day-30, day-60, and day-90 competency checks documented for every recruit.",
    },
    {
      when: "Q2 FY 2027",
      title: "First placement ledger",
      body:
        "Recruits selected, certified, placed, and retained at six months - broken out by employer, role, and gender. Honest write-up of recruits who did not complete or did not get placed.",
    },
  ],

  partnershipsEyebrow: "Who we want to work with",
  partnershipsTitle: "Employers, supervisors, community organisations, and CSR partners who fund the long arc.",
  partnershipsParagraphs: [
    "We are looking for public health systems - PHCs, urban health units, District Mental Health Programme cells - willing to interview and absorb certified community health workers into existing roles.",
    "We are looking for NGO partners running community health, women's health, or disability work who need a steady pipeline of well-prepared paid workers.",
    "We are looking for senior community health workers, ANMs, and nurses willing to act as field supervisors during the first 90 days post-certification.",
    "And we are looking for CSR partners who understand that the cost of producing a placed and retained community health worker is higher than the cost of a training certificate - and far more useful.",
  ],
  partnershipsLink: { label: "Talk to the workforce team", href: "/contact" },

  related: [
    { href: "/what-we-do/social-growth", title: "Social Growth", body: "How the pillar fits within the Omni Care Model." },
    { href: "/programs/training-capacity-building", title: "Training", body: "The open-licence curriculum that powers this programme." },
    { href: "/programs/scholarships-education", title: "Scholarships", body: "The pipeline that feeds the next cohort." },
  ],

  ctaEyebrow: "Build the workforce",
  ctaTitle: "Underwrite a cohort. Train, supervise, place, and retain.",
  ctaBody:
    "A CSR partnership funds an entire cohort from recruitment through 6-month retention. A volunteer commitment from a senior practitioner can supervise a new worker through the decisive first 90 days.",
  ctaPrimary: { label: "Partner on CSR", href: "/partner/csr" },
  ctaSecondary: { label: "Volunteer with us", href: "/get-involved/volunteer" },
};

function CHWDevelopmentPage() {
  return <ProgrammePage data={data} />;
}
