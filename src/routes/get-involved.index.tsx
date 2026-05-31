import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, HandHeart, Heart, Users, Building2, FlaskConical } from "lucide-react";

const OPTIONS = [
  { icon: HandHeart, title: "CSR & Corporate Partnerships", body: "Build long-term, audit-ready impact programmes with us.", href: "/partner/csr", cta: "Partner with Us" },
  { icon: Heart, title: "Donate", body: "One-time or recurring contributions, 80G tax-exempt.", href: "/donate", cta: "Give Now" },
  { icon: Users, title: "Volunteer", body: "Field, research, and remote opportunities.", href: "/get-involved/volunteer", cta: "Find a Role" },
  { icon: Building2, title: "Government Partnerships", body: "Co-design and co-deliver public health initiatives.", href: "/contact", cta: "Get in Touch" },
  { icon: FlaskConical, title: "Research Collaboration", body: "Work with our research team on evidence in community health.", href: "/programs/research-impact-assessment", cta: "Collaborate" },
];

export const Route = createFileRoute("/get-involved/")({
  head: () => ({
    meta: [
      { title: "Get Involved — Omni Life Care Foundation" },
      { name: "description", content: "Partner, donate, volunteer, or collaborate with us on community health initiatives across India." },
      { property: "og:title", content: "Get Involved — Omni Life Care Foundation" },
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
        title="Five ways to work with us."
        lead="Whether you're a company, a government body, a researcher, a donor, or a volunteer — there is a clear path to working together."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPTIONS.map((o) => (
            <Link key={o.title} to={o.href} className="card-editorial p-7 group h-full block">
              <o.icon className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="mt-6 font-serif text-2xl">{o.title}</h2>
              <p className="mt-3 text-ink-muted text-sm leading-relaxed">{o.body}</p>
              <span className="link-arrow mt-6">{o.cta} <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
