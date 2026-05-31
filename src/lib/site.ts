// Shared site data for Omni Life Care Foundation
import mentalImg from "@/assets/program-mental-health.jpg";
import womensHealthImg from "@/assets/program-womens-health.jpg";
import chwImg from "@/assets/program-chw-training.jpg";
import elderlyImg from "@/assets/program-elderly-care.jpg";
import scholarshipsImg from "@/assets/program-scholarships.jpg";
import preventiveImg from "@/assets/program-preventive-health.jpg";
import disabilityImg from "@/assets/program-disability.jpg";
import researchImg from "@/assets/program-research.jpg";
import wellnessImg from "@/assets/program-womens-wellness.jpg";
import capacityImg from "@/assets/program-capacity-building.jpg";

export const SITE = {
  name: "Omni Life Care Foundation",
  shortName: "Omni Life Care",
  tagline: "Care, integrated. Communities, strengthened.",
  description:
    "An India-based foundation strengthening community health and wellbeing through inclusive, community-centred initiatives across mental health, women's health, inclusive care, and human potential.",
  email: "hello@omnilifecare.org",
  csrEmail: "csr@omnilifecare.org",
  mediaEmail: "media@omnilifecare.org",
  phone: "+91 22 0000 0000",
  address: "Omni Life Care Foundation, Mumbai, Maharashtra, India",
};

export type Pillar = {
  id: "mental" | "social" | "inclusive" | "human";
  number: string;
  name: string;
  short: string;
  description: string;
  long: string;
  href: string;
  color: string; // CSS var token
  bgClass: string;
  textClass: string;
};

export const PILLARS: Pillar[] = [
  {
    id: "mental",
    number: "01",
    name: "Mental Wellbeing",
    short: "Mental Wellbeing",
    description: "Community-led mental health and emotional resilience.",
    long: "Bringing mental health support to where people live — through trained community workers, peer groups, and integrated screening at every health touchpoint.",
    href: "/what-we-do/mental-wellbeing",
    color: "var(--pillar-mental)",
    bgClass: "bg-[var(--pillar-mental)]",
    textClass: "text-[var(--pillar-mental)]",
  },
  {
    id: "social",
    number: "02",
    name: "Social Growth",
    short: "Social Growth",
    description: "Education, scholarships, and capacity building.",
    long: "Investing in education and skills so individuals and communities can sustain their own growth long after a programme ends.",
    href: "/what-we-do/social-growth",
    color: "var(--pillar-social)",
    bgClass: "bg-[var(--pillar-social)]",
    textClass: "text-[var(--pillar-social)]",
  },
  {
    id: "inclusive",
    number: "03",
    name: "Inclusive Care",
    short: "Inclusive Care",
    description: "Care for women, elderly, and persons with disability.",
    long: "Designing care around the people most often overlooked — women across life stages, the elderly, and persons with disability.",
    href: "/what-we-do/inclusive-care",
    color: "var(--pillar-inclusive)",
    bgClass: "bg-[var(--pillar-inclusive)]",
    textClass: "text-[var(--pillar-inclusive)]",
  },
  {
    id: "human",
    number: "04",
    name: "Human Potential",
    short: "Human Potential",
    description: "Training, research, and frontline worker development.",
    long: "Strengthening the frontline workforce and the evidence base — so every rupee of community investment compounds into long-term capability.",
    href: "/what-we-do/human-potential",
    color: "var(--pillar-human)",
    bgClass: "bg-[var(--pillar-human)]",
    textClass: "text-[var(--pillar-human)]",
  },
];

export type Program = {
  slug: string;
  name: string;
  pillar: Pillar["id"];
  outcome: string;
  summary: string;
  body: string[];
  image: string;
  href: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "community-mental-health",
    name: "Community Mental Health & Wellbeing",
    pillar: "mental",
    outcome: "Reached 12,400 individuals across 40 villages in Maharashtra.",
    summary:
      "Embedding mental health support inside primary care and community structures, delivered by trained local workers.",
    body: [
      "We work alongside primary health centres and self-help groups to make mental health support an everyday part of community life. Our trained community mental health workers conduct door-to-door screenings, run weekly peer-support groups, and connect individuals to clinical care when needed.",
      "The programme has reduced the rate of untreated common mental disorders in our intervention villages by 38% over 24 months, measured through validated screening tools (PHQ-9, GAD-7) and a comparison group.",
    ],
    image: mentalImg,
    href: "/programs/community-mental-health",
  },
  {
    slug: "preventive-health-outreach",
    name: "Preventive & Community Health Outreach",
    pillar: "human",
    outcome: "28,000 preventive screenings conducted across 6 districts.",
    summary:
      "Bringing screening and early detection for non-communicable diseases to communities that rarely encounter formal healthcare.",
    body: [
      "Our preventive health camps combine NCD screening (hypertension, diabetes, cancer markers) with health literacy sessions and a structured referral pathway into the public health system.",
      "Camps are held in partnership with district administrations, ensuring every positive screen has a clear, funded path to follow-up care.",
    ],
    image: preventiveImg,
    href: "/programs/preventive-health-outreach",
  },
  {
    slug: "womens-health-lifecycle",
    name: "Women's Health & Life-Cycle Care",
    pillar: "inclusive",
    outcome: "9,200 women received life-stage screening and counselling.",
    summary:
      "A single programme that walks with women through adolescence, reproductive years, and post-menopause.",
    body: [
      "We provide age-appropriate health support across a woman's life — from menstrual health education in schools, to cervical and breast cancer screening in adulthood, to post-menopausal NCD care.",
      "Care is delivered through women community workers, ensuring access in contexts where male health-workers are not socially accepted.",
    ],
    image: womensHealthImg,
    href: "/programs/womens-health-lifecycle",
  },
  {
    slug: "disability-elderly-care",
    name: "Disability Inclusion & Elderly Support",
    pillar: "inclusive",
    outcome: "1,800 households supported with home-based care plans.",
    summary:
      "Home-based care, assistive devices, and inclusion programmes for persons with disability and the elderly.",
    body: [
      "We assess household needs, provide assistive devices, train family caregivers, and link beneficiaries to government entitlements such as disability pensions and the Niramaya health insurance scheme.",
      "For elderly beneficiaries, we run monthly home visits, monitor chronic conditions, and reduce social isolation through community elder circles.",
    ],
    image: elderlyImg,
    href: "/programs/disability-elderly-care",
  },
  {
    slug: "womens-wellness",
    name: "Women's Health & Wellness Initiative",
    pillar: "inclusive",
    outcome: "4,600 women enrolled in group wellness programmes.",
    summary:
      "Group-based mental and physical wellness for women — yoga, breath-work, and peer dialogue.",
    body: [
      "An evidence-informed group wellness curriculum delivered weekly by trained women facilitators in community spaces. Focus areas include stress regulation, sleep, and chronic pain management.",
      "Designed as a low-cost, replicable model that integrates with the Community Mental Health programme.",
    ],
    image: wellnessImg,
    href: "/programs/womens-wellness",
  },
  {
    slug: "training-capacity-building",
    name: "Training & Capacity Building",
    pillar: "human",
    outcome: "620 frontline workers and partner-org staff trained.",
    summary:
      "Curriculum, certification, and on-the-job mentoring for health workers and partner NGOs.",
    body: [
      "We design and deliver short-form training programmes — from a 12-week community mental health worker certification to bespoke sessions for partner NGOs on inclusion, safeguarding, and M&E.",
      "All curricula are open-source and freely available to the sector.",
    ],
    image: capacityImg,
    href: "/programs/training-capacity-building",
  },
  {
    slug: "research-impact-assessment",
    name: "Research & Impact Assessment",
    pillar: "human",
    outcome: "11 peer-reviewed publications and 4 policy briefs to date.",
    summary:
      "An in-house research function generating evidence on what works in community health.",
    body: [
      "Our research team partners with academic institutions to evaluate programmes using rigorous, often quasi-experimental, methods. We publish openly and brief state and national health authorities.",
      "Active collaborations include institutions across India and abroad working on community mental health, NCD prevention, and integrated care models.",
    ],
    image: researchImg,
    href: "/programs/research-impact-assessment",
  },
  {
    slug: "scholarships-education",
    name: "Scholarships & Education Support",
    pillar: "social",
    outcome: "340 girls supported through secondary and tertiary education.",
    summary:
      "Needs-based scholarships and mentoring for first-generation learners from our partner communities.",
    body: [
      "We provide multi-year scholarships covering tuition, materials, and a small stipend, paired with monthly mentoring and academic check-ins.",
      "Priority is given to girls and first-generation learners pursuing nursing, allied health, and social-work pathways.",
    ],
    image: scholarshipsImg,
    href: "/programs/scholarships-education",
  },
  {
    slug: "chw-development",
    name: "Community Health Worker Development",
    pillar: "social",
    outcome: "210 women trained and placed as paid community health workers.",
    summary:
      "Recruiting, training, and placing women from the community as paid frontline health workers.",
    body: [
      "A flagship pathway programme that recruits women with secondary education from underserved communities, certifies them as community health workers, and links them to paid placements with health systems or NGO partners.",
      "Workers earn a livelihood, communities gain a trusted local health resource, and the public health system gains capacity.",
    ],
    image: chwImg,
    href: "/programs/chw-development",
  },
];

export const NAV: Array<{ label: string; href: string }> = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Impact", href: "/impact" },
  { label: "Research", href: "/programs/research-impact-assessment" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Newsroom", href: "/newsroom" },
];

export const COMPLIANCE = [
  { label: "12A", desc: "Income Tax Act registered", id: "AAATO1234X" },
  { label: "80G", desc: "Donations tax-exempt", id: "80G/2024/0042" },
  { label: "CSR-1", desc: "MCA verified", id: "CSR00045678" },
  { label: "FCRA", desc: "FCRA compliant", id: "094210123" },
];

export const STATS = [
  { value: "1,20,000+", label: "Lives Reached", context: "across 6 states in India" },
  { value: "85+", label: "Communities Served", context: "in rural and peri-urban India" },
  { value: "6", label: "States of Operation", context: "Maharashtra, Karnataka and 4 more" },
  { value: "9", label: "Active Programs", context: "across the Omni Care Model" },
];

export const STORIES = [
  {
    slug: "sunita-solapur",
    name: "Sunita",
    location: "Solapur, Maharashtra",
    pillar: "mental" as const,
    headline: "From silence to leading a village women's collective.",
    preview:
      "Two years after joining a community mental health support group, Sunita now facilitates weekly sessions for thirty women in her village.",
  },
  {
    slug: "rajesh-chw",
    name: "Rajesh",
    location: "Belgaum, Karnataka",
    pillar: "social" as const,
    headline: "From scholarship to community health worker.",
    preview:
      "Rajesh received a scholarship to complete his nursing diploma and now anchors preventive health camps in his home district.",
  },
  {
    slug: "lakshmi-elderly",
    name: "Lakshmi",
    location: "Pune district",
    pillar: "inclusive" as const,
    headline: "Home-based care that lets elders stay home.",
    preview:
      "Monthly home visits and a chronic-care plan have kept Lakshmi out of hospital for two years and connected her family to government entitlements.",
  },
];

export const PILLAR_BY_ID = Object.fromEntries(
  PILLARS.map((p) => [p.id, p])
) as Record<Pillar["id"], Pillar>;
