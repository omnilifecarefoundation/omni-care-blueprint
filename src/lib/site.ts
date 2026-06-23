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
  themeColor: string; // HSL components, e.g. "150 75% 38%" - for gradient cards
  sdg: string; // SDG tag, e.g. "SDG 3 · Good Health"
  image: string; // hero image for carousel/destination cards
};

export const PILLARS: Pillar[] = [
  {
    id: "mental",
    number: "01",
    name: "Mental Wellbeing",
    short: "Mental Wellbeing",
    description: "Community-led mental health and emotional resilience.",
    long: "Bringing mental health support to where people live - through trained community workers, peer groups, and integrated screening at every health touchpoint.",
    href: "/what-we-do/mental-wellbeing",
    color: "var(--pillar-mental)",
    bgClass: "bg-[var(--pillar-mental)]",
    textClass: "text-[var(--pillar-mental)]",
    themeColor: "150 70% 36%",
    sdg: "SDG 3 · Good Health",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "social",
    number: "02",
    name: "Community Development",
    short: "Community Development",
    description: "Education, livelihoods, and community resilience.",
    long: "Strengthening community structures so that growth lasts beyond any single programme - through education, skills, and local leadership.",
    href: "/what-we-do/social-growth",
    color: "var(--pillar-social)",
    bgClass: "bg-[var(--pillar-social)]",
    textClass: "text-[var(--pillar-social)]",
    themeColor: "354 78% 48%",
    sdg: "SDG 4 · Quality Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "inclusive",
    number: "03",
    name: "Inclusive Care",
    short: "Inclusive Care",
    description: "Care for women, elderly, and persons with disability.",
    long: "Designing care around the people most often overlooked - women across life stages, the elderly, and persons with disability.",
    href: "/what-we-do/inclusive-care",
    color: "var(--pillar-inclusive)",
    bgClass: "bg-[var(--pillar-inclusive)]",
    textClass: "text-[var(--pillar-inclusive)]",
    themeColor: "333 84% 47%",
    sdg: "SDG 5 · Gender Equality",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "human",
    number: "04",
    name: "Human Potential & Leadership",
    short: "Human Potential & Leadership",
    description: "Training, research, and frontline leadership.",
    long: "Investing in the people who build community capability - frontline workers, trainers, and emerging leaders from the neighbourhoods we serve.",
    href: "/what-we-do/human-potential",
    color: "var(--pillar-human)",
    bgClass: "bg-[var(--pillar-human)]",
    textClass: "text-[var(--pillar-human)]",
    themeColor: "232 97% 49%",
    sdg: "SDG 8 · Decent Work",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
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
    name: "Mental Wellbeing",
    pillar: "mental",
    outcome: "Promoting emotional wellbeing, awareness, and early support.",
    summary:
      "Embedding mental health awareness, early intervention and community-based support inside the places people already trust.",
    body: [
      "We focus on bringing mental health out of the clinic and into community life - through trained facilitators, peer-support circles, and a named referral pathway when clinical care is needed.",
      "This is an emerging focus area for a new foundation. We will publish what we learn as we begin our first pilots.",
    ],
    image: mentalImg,
    href: "/programs/community-mental-health",
  },
  {
    slug: "preventive-health-outreach",
    name: "Preventive Health & Community Outreach",
    pillar: "human",
    outcome: "Improving access to health information, screening and referrals.",
    summary:
      "Bringing health information, screenings and referrals to communities through outreach, partnerships and trusted local workers.",
    body: [
      "Preventive health is most effective when it meets people where they already are. Our intent is to design outreach in partnership with public health workers, community groups and clinical referral networks.",
      "This focus area is in the design and pilot stage. Activities and partner sites will be published as they begin.",
    ],
    image: preventiveImg,
    href: "/programs/preventive-health-outreach",
  },
  {
    slug: "womens-health-lifecycle",
    name: "Women's Wellbeing",
    pillar: "inclusive",
    outcome: "Health, dignity and support for women across life stages.",
    summary:
      "Supporting women's health, wellbeing and dignity across adolescence, reproductive years and later life.",
    body: [
      "We aim to build a single, continuous approach to women's wellbeing rather than a series of disconnected interventions - delivered by trained women workers in spaces women trust.",
      "Initial focus areas include adolescent health literacy, maternal wellbeing, and screening pathways for common conditions.",
    ],
    image: womensHealthImg,
    href: "/programs/womens-health-lifecycle",
  },
  {
    slug: "disability-elderly-care",
    name: "Inclusive Care",
    pillar: "inclusive",
    outcome: "Person-centred support for those most often overlooked.",
    summary:
      "Person-centred support for persons with disability, older adults and underserved populations - at the household level.",
    body: [
      "Inclusive care is the work of designing around the people public systems most often miss. Our approach will combine household-level needs assessment, linkage to existing entitlements, and caregiver support.",
      "Programmes in this focus area are being designed with input from community members and partner organisations.",
    ],
    image: elderlyImg,
    href: "/programs/disability-elderly-care",
  },
  {
    slug: "chw-development",
    name: "Human Development & Community Support",
    pillar: "human",
    outcome: "Strengthening individual potential and community resilience.",
    summary:
      "Strengthening individual potential and community resilience through guidance, education, support networks and access to opportunities.",
    body: [
      "Long-term change depends on the people who already lead inside their communities. This focus area invests in training, mentoring and access to opportunity - so capability stays local.",
      "Our intent is to design curricula and pathways openly, in partnership with practitioners and academic institutions.",
    ],
    image: chwImg,
    href: "/programs/chw-development",
  },
];


export const NAV: Array<{ label: string; href: string }> = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Focus Areas", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Newsroom", href: "/newsroom" },
];

// Mega-menu schema consumed by MegaNav / MobileNav.
export type MegaItem = {
  label: string;
  href: string;
  description?: string;
  swatch?: string;
};
export type MegaColumn = {
  heading?: string;
  items: MegaItem[];
};
export type MegaFeature = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  tone?: "ink" | "sage" | "snow";
};
export type MegaSection = {
  key: string;
  label: string;
  href: string;
  blurb?: string;
  columns: MegaColumn[];
  feature?: MegaFeature;
};

const ABOUT_LINKS: MegaItem[] = [
  { label: "Vision & Mission", href: "/about/vision-mission", description: "What we exist to do." },
  { label: "Omni Care Model", href: "/about/omni-care-model", description: "Four pillars, one continuum." },
  { label: "Values", href: "/about/values", description: "Five operational commitments." },
  { label: "Our Story", href: "/about/our-story", description: "How a Mumbai foundation began." },
  { label: "Leadership & Governance", href: "/about/leadership", description: "Who leads, and how we are accountable." },
  { label: "Compliance & Trust", href: "/about/compliance", description: "Registrations and reporting." },
];

const PILLAR_ITEMS: MegaItem[] = PILLARS.map((p) => ({
  label: p.name,
  href: p.href,
  description: p.description,
  swatch: p.color,
}));

const focusAreaItems: MegaItem[] = PROGRAMS.map((p) => {
  const pillar = PILLARS.find((x) => x.id === p.pillar)!;
  return { label: p.name, href: p.href, swatch: pillar.color };
});

export const MEGA_NAV: MegaSection[] = [
  {
    key: "about",
    label: "About",
    href: "/about",
    blurb: "Who we are and how we work.",
    columns: [
      { heading: "Organisation", items: ABOUT_LINKS.slice(0, 4) },
      { heading: "Governance", items: ABOUT_LINKS.slice(4) },
    ],
    feature: {
      eyebrow: "Framework",
      title: "The Omni Care Model",
      body: "Four pillars connecting mental, social, inclusive and human care into one continuum.",
      href: "/about/omni-care-model",
      cta: "Read the model",
      tone: "ink",
    },
  },
  {
    key: "what-we-do",
    label: "What We Do",
    href: "/what-we-do",
    blurb: "Four pillars of integrated community care.",
    columns: [{ items: PILLAR_ITEMS }],
    feature: {
      eyebrow: "All work",
      title: "See every pillar",
      body: "From mental wellbeing to community leadership - one connected approach.",
      href: "/what-we-do",
      cta: "Browse all pillars",
      tone: "sage",
    },
  },
  {
    key: "focus-areas",
    label: "Focus Areas",
    href: "/programs",
    blurb: "Five focus areas, shaped by community need.",
    columns: [{ items: focusAreaItems }],
    feature: {
      eyebrow: "Index",
      title: "All focus areas",
      body: "Intent, approach and partners for each focus area.",
      href: "/programs",
      cta: "View the index",
      tone: "snow",
    },
  },
  {
    key: "get-involved",
    label: "Get Involved",
    href: "/get-involved",
    blurb: "Three ways to stand with us.",
    columns: [
      {
        items: [
          { label: "Volunteer", href: "/get-involved/volunteer", description: "Give time on the ground or remotely." },
          { label: "Partner - CSR", href: "/partner/csr", description: "Co-design measurable corporate impact." },
          { label: "Donate", href: "/donate", description: "80G eligible once approved. Every rupee tracked." },
        ],
      },
    ],
    feature: {
      eyebrow: "Now",
      title: "Partner with us",
      body: "CSR partnerships start with a single conversation. We'll respond within two working days.",
      href: "/partner/csr",
      cta: "Start a partnership",
      tone: "sage",
    },
  },
  {
    key: "newsroom",
    label: "Newsroom",
    href: "/newsroom",
    columns: [],
  },
];

export const COMPLIANCE = [
  { label: "12A", desc: "Income Tax Act registered", id: "AAATO1234X" },
  { label: "80G", desc: "Donations tax-exempt (applied)", id: "Pending" },
  { label: "CSR-1", desc: "MCA registration in progress", id: "Pending" },
  { label: "FCRA", desc: "Application planned", id: "Pending" },
];

export const STATS = [
  { value: "5", label: "Focus Areas", context: "across the Omni Care Model" },
  { value: "4", label: "Care Pillars", context: "Mental · Community · Inclusive · Human Potential" },
  { value: "Mumbai", label: "First Operating City", context: "with plans to grow across Maharashtra" },
  { value: "Year One", label: "Foundation Stage", context: "building openly, from rupee one" },
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
