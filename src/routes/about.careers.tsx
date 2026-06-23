import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Work with us - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "We are a newly established Mumbai foundation. We are not actively recruiting paid staff yet, but we welcome volunteers, interns, and partners who want to help build the foundation from the ground up.",
      },
      { property: "og:title", content: "Work with us - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Volunteer, intern, or partner with a new Mumbai non-profit working across mental wellbeing, inclusive care, and community development.",
      },
      { property: "og:url", content: "/about/careers" },
    ],
    links: [{ rel: "canonical", href: "/about/careers" }],
  }),
  component: Page,
});

const PATHS = [
  {
    title: "Volunteer",
    body:
      "Field-based, research, and remote opportunities to contribute time and skill alongside our team.",
    href: "/get-involved/volunteer",
    cta: "Find a volunteer role",
  },
  {
    title: "Internship",
    body:
      "Structured placements for postgraduate students in public health, social work, design, and allied disciplines. One scoped project, one mentor, one written evaluation.",
    href: "mailto:info@omnilifecare.org?subject=Internship%20enquiry",
    cta: "Email about an internship",
  },
  {
    title: "Partnership",
    body:
      "CSR teams, institutional partners, clinicians, and academic collaborators who want to help shape the foundation's first years.",
    href: "/partner/csr",
    cta: "Start a conversation",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About · Work with us"
        title="We are not actively recruiting paid staff at this stage."
        lead="Omni Life Care Foundation is a newly established Mumbai non-profit. We are deliberately small in our first year. Instead of building a team in advance of the work, we are inviting volunteers, interns, and partners to help shape what comes next."
      />

      <section className="bg-canvas">
        <div className="container-editorial py-16 lg:py-24">
          <FadeUp>
            <h2 className="display-md mb-10 max-w-3xl text-balance">
              Three ways to get involved while we grow.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {PATHS.map((p, i) => {
              const isExternal = p.href.startsWith("mailto:");
              const inner = (
                <>
                  <h3 className="font-sans font-semibold text-xl tracking-[-0.01em] text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-muted text-[1rem] leading-[1.65] text-pretty">
                    {p.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors group-hover:decoration-ink">
                    {p.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </>
              );
              return (
                <FadeUp key={p.title} delay={i * 80}>
                  {isExternal ? (
                    <a href={p.href} className="group h-full block rounded-2xl border border-hairline bg-snow p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.12)]">
                      {inner}
                    </a>
                  ) : (
                    <Link to={p.href} className="group h-full block rounded-2xl border border-hairline bg-snow p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.12)]">
                      {inner}
                    </Link>
                  )}
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={300}>
            <p className="mt-14 max-w-3xl text-[1rem] leading-[1.65] text-ink-muted text-pretty">
              If you would like to be considered for paid roles as and when
              we begin recruiting, please send a short note and CV to{" "}
              <a className="underline decoration-hairline underline-offset-4 hover:decoration-ink" href="mailto:info@omnilifecare.org">info@omnilifecare.org</a>.
              We will keep your details on file and reach out when a role
              opens that matches.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Talk to us"
        title="Build the foundation with us, before the team is built."
        body="info@omnilifecare.org"
        primary={{ label: "Volunteer", href: "/get-involved/volunteer" }}
        secondary={{ label: "Partner with us", href: "/partner/csr" }}
      />
    </>
  );
}
