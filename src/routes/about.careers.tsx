import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { ArrowUpRight } from "lucide-react";

// Honest framing: a new Mumbai foundation. We are not hiring at scale yet.
// The roles below are the ones we are actively building toward in the first
// twelve months. Salary bands are published. Internships and a talent pool
// are open even when no role is listed.

const PRINCIPLES = [
  {
    n: "01",
    title: "We hire slowly, and we hire honestly",
    body: "A small team done well outperforms a large team done loosely. Every role is scoped, budgeted, and published before it opens. We will not create a role to win a grant.",
  },
  {
    n: "02",
    title: "Salary bands are public",
    body: "We do not negotiate from a hidden number. The band for every role is printed below. Your offer will sit inside it, decided by experience — not by how hard you push.",
  },
  {
    n: "03",
    title: "Field first, always",
    body: "Every hire — including finance and communications — spends their first month in the community we serve. You will sit in a household visit before you draft a budget or a tweet.",
  },
  {
    n: "04",
    title: "We tell you why we said no",
    body: "If you reach an interview and we do not move forward, you will get a written reason within seven days. Silence is a failure of respect, not a hiring strategy.",
  },
];

const ROLES = [
  {
    role: "Programme Lead — Community Mental Health",
    location: "Mumbai · field travel",
    type: "Full-time",
    band: "₹9,00,000 – ₹14,00,000 / year",
    status: "Opens Q3 2026",
    blurb:
      "Build the counselling-and-screening protocol for our first ward-level pilot. MSW or clinical psychology background. Five+ years in community settings.",
  },
  {
    role: "Monitoring & Evaluation Associate",
    location: "Mumbai (hybrid)",
    type: "Full-time",
    band: "₹6,50,000 – ₹9,00,000 / year",
    status: "Opens Q4 2026",
    blurb:
      "Design the indicator framework that our annual report will be measured against. Comfortable with R or Stata, comfortable in the field.",
  },
  {
    role: "Finance & Compliance Officer",
    location: "Mumbai",
    type: "Full-time",
    band: "₹7,00,000 – ₹10,00,000 / year",
    status: "Opens Q1 2027",
    blurb:
      "Own the books that will go to a Big-Four audit. CA inter or equivalent. Has closed an NGO audit before, knows 12A / 80G / CSR-1 reporting cycles.",
  },
  {
    role: "Community Outreach Coordinator",
    location: "Mumbai · ward-based",
    type: "Full-time",
    band: "₹4,50,000 – ₹6,50,000 / year",
    status: "Opens Q2 2027",
    blurb:
      "From the community we serve, ideally. Run the household enrolment, the family meetings, and the listening sessions that decide what we build next.",
  },
];

const OFFER = [
  { label: "Salary bands", value: "Published, non-negotiable above band" },
  { label: "Provident fund", value: "12% employer contribution, day one" },
  { label: "Health cover", value: "Family floater, ₹5,00,000 base" },
  { label: "Annual leave", value: "24 days, plus 10 public holidays" },
  { label: "Learning budget", value: "₹40,000 / year, no approvals needed" },
  { label: "Travel", value: "Reimbursed at actuals, no per-diem games" },
];

const LINKS = [
  { href: "/about/our-story", label: "Our Story" },
  { href: "/about/values", label: "Values" },
  { href: "/about/leadership", label: "Leadership & Governance" },
];

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Published roles, published salary bands, written feedback. How a new Mumbai foundation is choosing to hire.",
      },
      { property: "og:title", content: "Work with us — Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "We hire slowly. Salary bands are public. Every hire begins in the field. Current roles and a standing talent pool.",
      },
      { property: "og:url", content: "/about/careers" },
    ],
    links: [{ rel: "canonical", href: "/about/careers" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About · Careers"
        title="A small team, hired in the open."
        lead="We are a new foundation. We will not pretend to be a large one. These are the roles we are building toward, the salary bands we will pay, and the standards we will be held to."
      />

      {/* Four principles */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <FadeUp>
              <div className="eyebrow mb-4">How we hire</div>
              <h2 className="display-md text-balance">
                Four commitments we will be measured against.
              </h2>
            </FadeUp>
            <ol className="space-y-10">
              {PRINCIPLES.map((p, i) => (
                <FadeUp key={p.n} delay={120 + i * 80}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-hairline pt-8">
                    <span className="font-mono text-sm tabular-nums text-ink-muted pt-1">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-sans font-semibold text-xl tracking-[-0.01em] text-balance">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-ink-muted text-[1.0625rem] leading-[1.65] text-pretty max-w-[58ch]">
                        {p.body}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-snow border-y border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <div className="eyebrow mb-3">Roles</div>
                <h2 className="display-md text-balance max-w-[22ch]">
                  The first twelve months of hiring, published in advance.
                </h2>
              </div>
              <p className="text-sm text-ink-muted max-w-sm text-pretty">
                None of these roles are open today. Each one will be posted with a job
                description, a scoring rubric, and the band you see here.
              </p>
            </div>
          </FadeUp>

          <ul className="divide-y divide-hairline border-y border-hairline">
            {ROLES.map((r, i) => (
              <FadeUp key={r.role} delay={80 + i * 60}>
                <li className="group grid lg:grid-cols-[1.6fr_1fr_auto] gap-6 lg:gap-10 py-8 transition-[background-color] duration-200 hover:bg-canvas/60 -mx-4 px-4 rounded-md">
                  <div>
                    <h3 className="font-sans font-semibold text-xl tracking-[-0.01em] text-balance">
                      {r.role}
                    </h3>
                    <p className="mt-2 text-ink-muted text-[0.975rem] leading-[1.6] text-pretty max-w-[52ch]">
                      {r.blurb}
                    </p>
                    <div className="mt-3 text-sm text-ink-muted">
                      {r.location} · {r.type}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      Salary band
                    </div>
                    <div className="font-mono text-[0.95rem] tabular-nums text-ink">
                      {r.band}
                    </div>
                  </div>
                  <div className="flex lg:flex-col lg:items-end gap-3 lg:gap-2">
                    <span className="inline-flex items-center rounded-full border border-hairline bg-canvas px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                      {r.status}
                    </span>
                    <a
                      href={`mailto:careers@omnilifecare.org?subject=${encodeURIComponent(
                        "Talent pool — " + r.role,
                      )}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      Join talent pool
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* What we offer — tabular */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
            <FadeUp>
              <div className="eyebrow mb-3">What we offer</div>
              <h2 className="display-md text-balance">
                Compensation is a policy, not a conversation.
              </h2>
              <p className="mt-5 text-ink-muted text-[1.0625rem] leading-[1.65] text-pretty max-w-md">
                These terms apply to every full-time role. We will publish them in the
                annual report alongside what we actually paid, so the gap — if any —
                is visible.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <dl className="divide-y divide-hairline border-y border-hairline">
                {OFFER.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_1.4fr] gap-6 py-4"
                  >
                    <dt className="font-sans font-medium text-ink">{row.label}</dt>
                    <dd className="font-mono text-[0.95rem] tabular-nums text-ink-muted">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Internships & talent pool */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <FadeUp>
              <article className="group h-full rounded-2xl border border-hairline bg-snow p-8 lg:p-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.12)]">
                <div className="eyebrow mb-4">Internships</div>
                <h3 className="font-sans font-semibold text-2xl tracking-[-0.01em] text-balance">
                  A real desk, a real brief, a real reference letter.
                </h3>
                <p className="mt-4 text-ink-muted text-[1.0625rem] leading-[1.65] text-pretty">
                  Three- to six-month placements for postgraduate students in public
                  health, social work, development economics, design, and law. Paid
                  stipend of ₹15,000 / month. One scoped project, one mentor, one
                  written evaluation at the end.
                </p>
                <a
                  href="mailto:careers@omnilifecare.org?subject=Internship%20enquiry"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
                >
                  Apply for an internship
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </FadeUp>
            <FadeUp delay={120}>
              <article className="group h-full rounded-2xl border border-hairline bg-snow p-8 lg:p-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.12)]">
                <div className="eyebrow mb-4">Talent pool</div>
                <h3 className="font-sans font-semibold text-2xl tracking-[-0.01em] text-balance">
                  Don't see your role? Tell us anyway.
                </h3>
                <p className="mt-4 text-ink-muted text-[1.0625rem] leading-[1.65] text-pretty">
                  Send a CV and a one-page note on the problem you would most like to
                  work on. When a role opens that matches, you will hear from us
                  before it is posted publicly. We read every note.
                </p>
                <a
                  href="mailto:careers@omnilifecare.org?subject=Talent%20pool"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
                >
                  Write to careers@omnilifecare.org
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </FadeUp>
          </div>

          {/* Related links */}
          <FadeUp delay={240}>
            <div className="mt-16 pt-10 border-t border-hairline">
              <div className="eyebrow mb-4">Read before you apply</div>
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="group inline-flex items-center gap-1.5 text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Work with us"
        title="If you would rather build the second hundred days than inherit a brand, write to us."
        body="careers@omnilifecare.org · We reply within seven days, always with a reason."
        primary={{ label: "Email careers", href: "mailto:careers@omnilifecare.org" }}
        secondary={{ label: "Read our values", href: "/about/values" }}
      />
    </>
  );
}
