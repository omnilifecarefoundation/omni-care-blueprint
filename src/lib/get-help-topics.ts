// Content for the four Get Help sub-pages.
// Copy follows Ogilvy principles: one promise per page, specific facts, plain
// language. Numbers are framed as commitments (we are a new foundation), not
// fabricated outcomes.

export type GetHelpTopic = {
  slug: "mental-health" | "elder-care" | "community-support" | "care-navigation";
  name: string;
  // Ogilvy promise: specific, deliverable, in the headline
  promise: string;
  // 8-12 word headline including the promise
  headline: string;
  // Lead sentence under the H1
  lead: string;
  // SDG-aligned theme colour, HSL components
  themeColor: string;
  // Quiet pillar reference
  pillar: { label: string; href: string };
  image: string;
  // What we actually do for this kind of help — 3 specific items
  offers: { n: string; title: string; body: string }[];
  // How a first conversation goes — 3 steps
  steps: { n: string; title: string; body: string }[];
  // Eligibility and access — facts, not slogans
  whoFor: string[];
  // Related programme on /programs/* (one per topic, our flagship for it)
  relatedProgramme: { name: string; href: string };
  // Closing reassurance
  reassurance: string;
};

export const TOPICS: GetHelpTopic[] = [
  {
    slug: "mental-health",
    name: "Mental Health",
    promise: "A trained listener within two working days.",
    headline: "Mental health support that begins with a phone call — not a referral.",
    lead:
      "You don't need a diagnosis, a doctor's note, or the right words. Tell us what's going on and a trained community worker will reach back inside two working days.",
    themeColor: "232 97% 49%",
    pillar: { label: "Pillar 01 · Mental Wellbeing", href: "/what-we-do/mental-wellbeing" },
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80",
    offers: [
      {
        n: "01",
        title: "A listening conversation, in your language.",
        body: "30 minutes with a trained community mental health worker — Hindi, Marathi, English, or Tamil. No clinical jargon. No paperwork up front.",
      },
      {
        n: "02",
        title: "A validated screening, when it's useful.",
        body: "We use PHQ-9 (depression) and GAD-7 (anxiety) — the same tools used in district hospitals — only after you've decided you want a clearer picture.",
      },
      {
        n: "03",
        title: "A named bridge to clinical care.",
        body: "If clinical support is the right next step, we book the first appointment with a PHC, district psychiatrist, or tele-mental-health line — and stay with you until care has begun.",
      },
    ],
    steps: [
      { n: "01", title: "You write to us.", body: "One paragraph is enough. The form goes to our care inbox, not a chatbot." },
      { n: "02", title: "We call you back.", body: "A real person, within two working days. We listen first." },
      { n: "03", title: "We agree the next step together.", body: "A second conversation, a peer group, a clinical referral — whichever you choose." },
    ],
    whoFor: [
      "Adults in or around Mumbai, our partner districts in Maharashtra, and parts of Karnataka.",
      "Family members and caregivers seeking support for someone else.",
      "Free of cost. We never ask for documents to start a conversation.",
    ],
    relatedProgramme: {
      name: "Community Mental Health & Wellbeing",
      href: "/programs/community-mental-health",
    },
    reassurance:
      "If you are in immediate danger, please call 108 (medical) or iCall at 9152987821 — they answer 24×7. Our team is not an emergency line.",
  },
  {
    slug: "elder-care",
    name: "Elder Care",
    promise: "A home visit, a written care plan, and a phone you can call again.",
    headline: "Elder care that arrives at the door — and stays past the first visit.",
    lead:
      "Most elder-care needs aren't medical emergencies. They are a missed pension, an unfilled prescription, a long week of loneliness. We make a home visit, write a plan you can hold, and keep checking in.",
    themeColor: "333 84% 47%",
    pillar: { label: "Pillar 03 · Inclusive Care", href: "/what-we-do/inclusive-care" },
    image:
      "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=1600&q=80",
    offers: [
      {
        n: "01",
        title: "A home assessment, free.",
        body: "A community worker visits the home, lists what's needed — mobility, medication, vision, hearing, mood, isolation — and writes it down for the family.",
      },
      {
        n: "02",
        title: "Help with entitlements.",
        body: "We help families apply for the Niramaya health insurance scheme, the senior-citizen pension, and disability certification where eligible.",
      },
      {
        n: "03",
        title: "Monthly check-in, by name.",
        body: "Every elder we visit gets a monthly call from the same worker — the same number, the same voice, the same questions about sleep, food, and mood.",
      },
    ],
    steps: [
      { n: "01", title: "Family member writes in.", body: "Tell us where the elder lives and what worries you most. One paragraph is plenty." },
      { n: "02", title: "We book the home visit.", body: "Usually within a week. The worker calls before arriving — never unannounced." },
      { n: "03", title: "You receive a written care plan.", body: "On paper and on email. Yours to share with anyone — doctor, sibling, neighbour." },
    ],
    whoFor: [
      "Households with an elder (60+) in or around Mumbai and our partner districts in Maharashtra.",
      "No income criteria. We don't ask for property papers or pension proof to begin.",
      "Visits and basic assessments are free. Assistive devices, where needed, are subsidised against need.",
    ],
    relatedProgramme: {
      name: "Disability Inclusion & Elderly Support",
      href: "/programs/disability-elderly-care",
    },
    reassurance:
      "If the elder is having chest pain, breathing trouble, or has fallen, call 108 immediately. Our team is not an emergency line.",
  },
  {
    slug: "community-support",
    name: "Community Support",
    promise: "A local resource list — printed, in your language, on your street.",
    headline: "Community support that doesn't make you Google your own city.",
    lead:
      "Sometimes what you need is a single, accurate phone number — the nearest free clinic, a women's collective, a self-help group that's actually still meeting. We hold that list, and we keep it current.",
    themeColor: "247 91% 66%",
    pillar: { label: "Pillar 02 · Social Growth", href: "/what-we-do/social-growth" },
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    offers: [
      {
        n: "01",
        title: "A curated resource list.",
        body: "Free clinics, women's collectives, peer groups, legal aid cells, livelihood schemes — for your specific ward or district, verified within the last 90 days.",
      },
      {
        n: "02",
        title: "Warm introductions.",
        body: "Where we know the people running a programme, we make the call for you. You walk in expected, not announced.",
      },
      {
        n: "03",
        title: "Help filling the form.",
        body: "Government schemes, scholarship applications, NGO intake forms — a worker will sit with you and fill it out, once, in person or over a call.",
      },
    ],
    steps: [
      { n: "01", title: "Tell us your pin code and the question.", body: "One line. We map your area to what's available within travel distance." },
      { n: "02", title: "We send the list — usually same day.", body: "WhatsApp, email, or printed copy. Names, numbers, addresses, opening hours." },
      { n: "03", title: "We follow up once.", body: "A week later, a single check-in: did the resource work? If not, we try the next one." },
    ],
    whoFor: [
      "Anyone living in our operating geographies in Maharashtra and Karnataka.",
      "Free, with no enrolment or eligibility check. We will tell you honestly if we don't know your area well yet.",
      "We don't disburse cash. We connect you to the people and schemes that can.",
    ],
    relatedProgramme: {
      name: "Community Health Worker Development",
      href: "/programs/chw-development",
    },
    reassurance:
      "We're a small team. If we can't help you ourselves, we'll say so plainly — and point you to someone closer who can.",
  },
  {
    slug: "care-navigation",
    name: "Care Navigation",
    promise: "One person who carries your case from the first call to the first appointment.",
    headline: "Care navigation: one number, one person, until the appointment is booked.",
    lead:
      "Public health in India is generous but maze-like. We assign one care navigator to walk you through it — finding the right doctor, the right scheme, the right hospital — and they stay with the case until you are seen.",
    themeColor: "232 97% 49%",
    pillar: { label: "Pillar 04 · Human Potential", href: "/what-we-do/human-potential" },
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
    offers: [
      {
        n: "01",
        title: "A single named navigator.",
        body: "One trained worker for your case — same name, same number. You never have to re-explain your situation to a new voice.",
      },
      {
        n: "02",
        title: "The right hospital, the right scheme.",
        body: "PMJAY, MJPJAY, ESIC, charitable trust beds, district hospital out-patient slots — we know the pathways and the paperwork for each.",
      },
      {
        n: "03",
        title: "We escort, where it helps.",
        body: "For elderly patients, women travelling alone, or complex first visits, a worker meets you at the hospital and stays until you're inside the consulting room.",
      },
    ],
    steps: [
      { n: "01", title: "Send us the diagnosis or the symptom.", body: "And one line about the household — who can travel, who can pay, who decides." },
      { n: "02", title: "Navigator calls within two working days.", body: "We map the cheapest, fastest credible pathway — and walk you through it." },
      { n: "03", title: "We stay until you're seen.", body: "Appointment booked, scheme approved, prescription in hand. Then we hand the case back." },
    ],
    whoFor: [
      "Patients and families seeking care inside Maharashtra or Karnataka public health systems.",
      "No income test to start. We do help means-test for government schemes if that's the question.",
      "Free. We do not take commissions, kickbacks, or referral fees — from any hospital, ever.",
    ],
    relatedProgramme: {
      name: "Preventive & Community Health Outreach",
      href: "/programs/preventive-health-outreach",
    },
    reassurance:
      "In an emergency call 108. We can navigate the post-emergency pathway — admission, scheme, follow-up — but we are not first responders.",
  },
];

export const TOPIC_BY_SLUG = Object.fromEntries(TOPICS.map((t) => [t.slug, t])) as Record<
  GetHelpTopic["slug"],
  GetHelpTopic
>;
