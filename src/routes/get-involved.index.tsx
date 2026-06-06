import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import {
  ArrowRight,
  HandHeart,
  Heart,
  Users,
  Building2,
  FlaskConical,
} from "lucide-react";

const PATHS = [
  {
    icon: HandHeart,
    title: "CSR & Corporate Partnerships",
    body:
      "Build long-term, audit-ready impact programmes with us. Every rupee is mapped to a household outcome and published quarterly.",
    href: "/partner/csr",
    cta: "Partner with Us",
  },
  {
    icon: Heart,
    title: "Donate",
    body:
      "One-time or recurring contributions, fully 80G tax-exempt. You will receive a cost ledger, not just a receipt.",
    href: "/donate",
    cta: "Give Now",
  },
  {
    icon: Users,
    title: "Volunteer",
    body:
      "Field, research, and remote opportunities. Every role has a clear scope, time commitment, and on-boarding pathway.",
    href: "/get-involved/volunteer",
    cta: "Find a Role",
  },
  {
    icon: Building2,
    title: "Government Partnerships",
    body:
      "Co-design and co-deliver public health initiatives alongside ASHA workers and municipal clinicians in Mumbai.",
    href: "/contact",
    cta: "Get in Touch",
  },
  {
    icon: FlaskConical,
    title: "Research Collaboration",
    body:
      "Work with our research team on pre-registered protocols, open data, and evidence in community health.",
    href: "/programs/research-impact-assessment",
    cta: "Collaborate",
  },
];

const GUARANTEES = [
  {
    term: "Quarterly cost-per-outcome dashboard",
    definition:
      "Every three months we publish what it cost to enrol a household, run a screening, and close a referral.",
  },
  {
    term: "Pre-registered research protocols",
    definition:
      "We register every study before the first survey is fielded. Hypotheses, instruments, and analysis plans are public.",
  },
  {
    term: "Household-level consent logs",
    definition:
      "No photograph, no quote, no data point appears without documented, revocable consent from the household.",
  },
  {
    term: "Annual third-party audit",
    definition:
      "Financial and programme audits by an independent firm. The report is published in full, not summarised.",
  },
  {
    term: "Direct line to the programme team",
    definition:
      "Partners and major donors get a single point of contact inside the programme, not a donor-relations desk.",
  },
];

export const Route = createFileRoute("/get-involved/")({
  head: () => ({
    meta: [
      { title: "Get Involved - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Partner, donate, volunteer, or collaborate with Omni Life Care Foundation. Join us before the numbers exist.",
      },
      {
        property: "og:title",
        content: "Get Involved - Omni Life Care Foundation",
      },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Join us before the numbers exist."
        lead="Most non-profits ask for money. We are asking for something harder: your trust before we have earned it. We are a new foundation. We have no beneficiary statistics to publish, no 'before and after' photographs, no annual report from last year. What we have is a model, a city, and a commitment to measure everything we do from the first household."
      />

      {/* Honesty band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-[1.0625rem] lg:text-[1.125rem] leading-[1.65] text-ink-muted text-pretty">
                If you are looking for a cause with a decade of track record,
                we are not it yet. If you are looking for a team that will
                publish its discipline before it publishes its success, we
                are building exactly that. The five paths below are not
                donation tiers. They are entry points into a programme that
                does not yet exist - and that is precisely why your input
                matters now.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Five paths */}
      <section className="container-editorial py-16 lg:py-24">
        <FadeUp>
          <h2 className="display-md mb-10 lg:mb-12">
            Five ways to work with us.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PATHS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 60}>
              <Link
                to={p.href}
                className="group h-full block rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]"
              >
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
                <span className="link-arrow mt-6">
                  {p.cta}{" "}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Guarantees / what you get */}
      <section className="bg-canvas border-t border-hairline">
        <div className="container-editorial py-16 lg:py-24">
          <FadeUp>
            <h2 className="display-md mb-10 lg:mb-14 max-w-2xl">
              What you get in return.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {GUARANTEES.map((g, i) => (
              <FadeUp key={g.term} delay={i * 60}>
                <div>
                  <dt className="font-sans font-semibold text-ink text-balance">
                    {g.term}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-muted leading-relaxed text-pretty">
                    {g.definition}
                  </dd>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="The first cohort"
        title="The first 500 households will be enrolled in Mumbai this year."
        body="There is still time to help design how. Whether you give, partner, volunteer, or research - you are not funding a finished machine. You are helping build it."
        primary={{ label: "Partner on CSR", href: "/partner/csr" }}
        secondary={{ label: "Find a volunteer role", href: "/get-involved/volunteer" }}
      />
    </>
  );
}
