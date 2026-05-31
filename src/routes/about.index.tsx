import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About — Omni Life Care Foundation" },
      { name: "description", content: "Our vision, mission, governance and the integrated Omni Care Model." },
      { property: "og:title", content: "About — Omni Life Care Foundation" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutIndex,
});

const SECTIONS = [
  { href: "/about/vision-mission", title: "Vision & Mission", body: "What we exist for, and how we work towards it." },
  { href: "/about/values", title: "Our Values", body: "Dignity, inclusion, community, collaboration, and impact." },
  { href: "/about/omni-care-model", title: "The Omni Care Model", body: "Our integrated four-pillar model of care." },
  { href: "/about/leadership", title: "Leadership & Governance", body: "Board of trustees, advisory council, and team." },
  { href: "/about/our-story", title: "Our Story", body: "How the Foundation came to be." },
  { href: "/about/compliance", title: "Compliance & Registrations", body: "12A, 80G, CSR-1, FCRA and annual returns." },
  { href: "/about/careers", title: "Careers", body: "Join a mission-driven, evidence-led team." },
];

function AboutIndex() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A foundation built on dignity, inclusion, and community."
        lead="We are an India-based foundation working at the intersection of community health, mental wellbeing, inclusive care, and human potential — through an integrated, evidence-led model."
      />
      <section className="container-editorial py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((s) => (
            <Link key={s.href} to={s.href} className="card-editorial p-7 group">
              <h2 className="font-serif text-xl text-ink">{s.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
              <span className="link-arrow mt-5">Read more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand
        eyebrow="Get Involved"
        title="Partner with us, or join our work."
        primary={{ label: "Partner with Us", href: "/partner/csr" }}
        secondary={{ label: "Careers", href: "/about/careers" }}
      />
    </>
  );
}
