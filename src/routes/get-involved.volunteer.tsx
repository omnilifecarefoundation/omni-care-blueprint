import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Briefcase,
  Globe,
  Camera,
  PenTool,
  Heart,
  CheckCircle,
  Mail,
  Building2,
  GraduationCap,
  FileText,
} from "lucide-react";

const PATHWAYS = [
  {
    icon: MapPin,
    title: "Field Volunteering",
    body:
      "Work alongside community health workers in Mumbai’s low-income neighbourhoods. Roles include screening support, data collection, camp coordination, and participant consent. You are not an observer. You are a supervised member of the field team.",
    tags: ["On-site", "Mumbai", "4–16 hrs / week"],
  },
  {
    icon: Globe,
    title: "Skill-Based & Remote",
    body:
      "Social media, content writing, translation, graphic design, grant research, and database work. Every remote role has a written brief, a deliverable deadline, and a named reviewer. You work from wherever you are.",
    tags: ["Remote", "Flexible hours", "Project-based"],
  },
  {
    icon: Building2,
    title: "Corporate & Group",
    body:
      "Teams of 15 to 100. Structured half-day or full-day engagements with pre-agreed deliverables — health camps, community clean-ups, or awareness sessions. Every corporate volunteer receives a scope document one week before the event.",
    tags: ["Team-based", "Half or full day", "Mumbai"],
  },
];

const ROLES = [
  {
    icon: Heart,
    title: "Community Mental Health Volunteer",
    location: "Solapur / Mumbai, Maharashtra",
    time: "8 hours / week",
    skills: "Marathi or Hindi required. Basic counselling training preferred, not mandatory.",
    type: "Field",
  },
  {
    icon: GraduationCap,
    title: "Research Assistant",
    location: "Remote",
    time: "Flexible, 6+ hours / week",
    skills: "Quantitative or qualitative research methods. Familiarity with Google Sheets or SPSS.",
    type: "Remote",
  },
  {
    icon: Camera,
    title: "Field Photographer / Documentarian",
    location: "On-assignment, India",
    time: "Per project",
    skills: "Documentary photography and ethical consent practices. Your images are published only with signed household consent.",
    type: "Field",
  },
  {
    icon: PenTool,
    title: "Grant Writing Volunteer",
    location: "Remote",
    time: "Project-based",
    skills: "Experience writing nonprofit grant proposals. Attention to budget narrative and M&E language.",
    type: "Remote",
  },
  {
    icon: FileText,
    title: "Content & Social Media Volunteer",
    location: "Remote",
    time: "5–10 hours / week",
    skills: "Copywriting, Canva or Figma, and a clear understanding of community-health tone. No clickbait.",
    type: "Remote",
  },
  {
    icon: Users,
    title: "Community Outreach Volunteer",
    location: "Mumbai",
    time: "6–12 hours / week",
    skills: "Marathi or Hindi. Comfort with door-to-door engagement and structured survey administration.",
    type: "Field",
  },
];

const PROMISES = [
  {
    term: "Structured onboarding",
    definition:
      "A two-hour orientation covering safeguarding, consent protocols, and your specific role brief. You will know what you are allowed to do, what you are not, and who to call if unsure.",
  },
  {
    term: "Named supervisor",
    definition:
      "Every volunteer is assigned a supervisor who checks in weekly during the first month, then fortnightly. The supervisor is a staff member, not another volunteer.",
  },
  {
    term: "Documented engagement",
    definition:
      "Your hours, tasks, and outcomes are logged in our quarterly cost ledger. You receive a certificate of engagement with verified hours and a summary of deliverables.",
  },
  {
    term: "Travel reimbursement",
    definition:
      "Field volunteers are reimbursed for local travel to and from the community site. We do not expect you to subsidise our programme with your own money.",
  },
  {
    term: "No arbitrary exit",
    definition:
      "If a role is not working for you, we will discuss a reassignment before either side ends the engagement. We value your time enough to fix the fit.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Choose a role and apply",
    body: "Read the scope below. Email volunteer@omnilifecare.org with the role title in the subject line. Attach a one-page CV or a short paragraph on why the role fits you.",
  },
  {
    number: "02",
    title: "Conversation within 5 days",
    body: "We reply to every application. If the fit looks right, we schedule a 20-minute video call to confirm scope, availability, and expectations on both sides.",
  },
  {
    number: "03",
    title: "Onboarding and weekly supervision",
    body: "You receive an onboarding pack, a supervisor name, and a start date. Weekly check-ins continue until you and your supervisor agree you are operating independently.",
  },
];

export const Route = createFileRoute("/get-involved/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Field, remote, and corporate volunteer opportunities with Omni Life Care Foundation. Every role has a published scope, a named supervisor, and a documented outcome.",
      },
      {
        property: "og:title",
        content: "Volunteer — Omni Life Care Foundation",
      },
      {
        property: "og:description",
        content:
          "Field, remote, and corporate volunteer opportunities with Omni Life Care Foundation. Every role has a published scope, a named supervisor, and a documented outcome.",
      },
      { property: "og:url", content: "/get-involved/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/get-involved/volunteer" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer with a scope, a supervisor, and a public ledger."
        lead="Every role has a written brief, a time commitment, and a named supervisor. We are a new foundation. We cannot offer you a polished legacy. We can offer you clarity."
      />

      {/* Honesty band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink-muted text-pretty">
                We do not yet have a volunteer alumni network, a glossy annual
                report, or photographs of smiling teams in branded t-shirts.
                What we have is a programme design, a city, and a commitment
                that every volunteer hour will be documented, supervised, and
                published in our quarterly cost ledger. If you are looking for
                prestige, we are not the right fit. If you are looking for
                substance, read on.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Three pathways */}
      <section className="container-editorial py-16 lg:py-24">
        <FadeUp>
          <h2 className="display-md mb-10 lg:mb-14 max-w-2xl">
            Three ways to contribute your time.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-5">
          {PATHWAYS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 80}>
              <div className="h-full rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
                <p.icon
                  className="h-7 w-7 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-sans font-semibold tracking-[-0.015em] text-xl text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-muted text-sm leading-relaxed text-pretty">
                  {p.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-sage text-ink text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-canvas border-t border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <FadeUp>
            <h2 className="display-md mb-10 lg:mb-14 max-w-2xl">
              Current openings.
            </h2>
          </FadeUp>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {ROLES.map((r, i) => (
              <li key={r.title}>
                <FadeUp delay={i * 60}>
                  <div className="py-7 grid lg:grid-cols-[1fr_auto] gap-5 items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <r.icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <h3 className="font-sans font-semibold tracking-[-0.01em] text-lg text-balance">
                          {r.title}
                        </h3>
                        <span className="chip">
                          <span className="chip-dot" />
                          {r.type}
                        </span>
                      </div>
                      <p className="text-sm text-ink-muted mt-2">
                        <span className="inline-flex items-center gap-1.5 mr-4">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {r.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {r.time}
                        </span>
                      </p>
                      <p className="text-sm text-ink-muted mt-1.5 text-pretty max-w-2xl">
                        {r.skills}
                      </p>
                    </div>
                    <a
                      href={`mailto:volunteer@omnilifecare.org?subject=${encodeURIComponent(r.title)}`}
                      className="btn btn-secondary btn-sm mt-1 lg:mt-0"
                    >
                      Apply
                    </a>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
          <FadeUp delay={ROLES.length * 60}>
            <p className="mt-8 text-sm text-ink-muted text-pretty">
              Do not see a fit? We still want to hear from you. Write to{" "}
              <a
                href="mailto:volunteer@omnilifecare.org"
                className="underline underline-offset-4 decoration-hairline hover:decoration-ink"
              >
                volunteer@omnilifecare.org
              </a>{" "}
              with your skills and availability. We keep a short talent pool
              and contact people when a matching role opens.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <FadeUp>
            <h2 className="display-md mb-10 lg:mb-14 max-w-2xl">
              What you get in return.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {PROMISES.map((p, i) => (
              <FadeUp key={p.term} delay={i * 60}>
                <div>
                  <dt className="font-sans font-semibold text-ink text-balance">
                    {p.term}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-muted leading-relaxed text-pretty">
                    {p.definition}
                  </dd>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-editorial py-16 lg:py-24">
        <FadeUp>
          <h2 className="display-md mb-10 lg:mb-14 max-w-2xl">
            How it works.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((s, i) => (
            <FadeUp key={s.number} delay={i * 80}>
              <div className="relative">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted tabular-nums">
                  {s.number}
                </span>
                <h3 className="mt-3 font-sans font-semibold text-lg text-ink text-balance">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed text-pretty">
                  {s.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-canvas border-t border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <FadeUp>
            <h2 className="display-md mb-10 lg:mb-12">Still have questions?</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp delay={60}>
              <div className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)]">
                <Mail
                  className="h-5 w-5 text-primary mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-sans font-semibold text-ink">Volunteer enquiries</h3>
                <a
                  href="mailto:volunteer@omnilifecare.org"
                  className="link-arrow mt-2"
                >
                  volunteer@omnilifecare.org
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)]">
                <Briefcase
                  className="h-5 w-5 text-primary mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-sans font-semibold text-ink">Corporate volunteering</h3>
                <a
                  href="mailto:csr@omnilifecare.org"
                  className="link-arrow mt-2"
                >
                  csr@omnilifecare.org
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={180}>
              <div className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)]">
                <Heart
                  className="h-5 w-5 text-primary mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-sans font-semibold text-ink">General enquiries</h3>
                <a
                  href="mailto:hello@omnilifecare.org"
                  className="link-arrow mt-2"
                >
                  hello@omnilifecare.org
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={240}>
            <p className="mt-10 text-sm text-ink-muted text-pretty max-w-2xl">
              For questions about safeguarding, inclusion, or any concern about
              your volunteer experience, you can also write directly to the
              Board Secretary at{" "}
              <a
                href="mailto:secretary@omnilifecare.org"
                className="underline underline-offset-4 decoration-hairline hover:decoration-ink"
              >
                secretary@omnilifecare.org
              </a>
              . All correspondence is treated confidentially.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="The first cohort"
        title="The first volunteers shape the first programme."
        body="If you are willing to work with a new foundation — to tolerate ambiguity, to document what you do, and to help us build discipline from day one — we would like to hear from you."
        primary={{
          label: "Apply now",
          href: "mailto:volunteer@omnilifecare.org?subject=Volunteer%20application",
        }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
