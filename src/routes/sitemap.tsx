import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PROGRAMS, PILLARS } from "@/lib/site";

const TOP = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Mission", href: "/about/vision-mission" },
  { label: "Values", href: "/about/values" },
  { label: "Omni Care Model", href: "/about/omni-care-model" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Our Story", href: "/about/our-story" },
  { label: "Compliance", href: "/about/compliance" },
  { label: "Careers", href: "/about/careers" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "All Programmes", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/impact/stories" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partner (CSR)", href: "/partner/csr" },
  { label: "Volunteer", href: "/get-involved/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Contact", href: "/contact" },
];

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Omni Life Care Foundation" },
      { name: "description", content: "All pages on the Omni Life Care Foundation website." },
      { property: "og:url", content: "/sitemap" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Sitemap" title="Sitemap" />
      <section className="container-editorial py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="eyebrow mb-4">Main pages</h2>
          <ul className="space-y-2">
            {TOP.map((l) => <li key={l.href}><Link to={l.href} className="link-arrow text-sm">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Pillars</h2>
          <ul className="space-y-2">
            {PILLARS.map((p) => <li key={p.id}><Link to={p.href} className="link-arrow text-sm">{p.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Programmes</h2>
          <ul className="space-y-2">
            {PROGRAMS.map((p) => <li key={p.slug}><Link to={p.href} className="link-arrow text-sm">{p.name}</Link></li>)}
          </ul>
        </div>
      </section>
    </>
  ),
});
