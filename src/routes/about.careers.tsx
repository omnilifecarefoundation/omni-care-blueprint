import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const OPENINGS = [
  { role: "Programme Manager — Community Mental Health", location: "Solapur, Maharashtra", type: "Full-time" },
  { role: "Research Associate", location: "Mumbai (hybrid)", type: "Full-time" },
  { role: "CSR Partnerships Lead", location: "Mumbai", type: "Full-time" },
  { role: "Field Coordinator — Women's Health", location: "Belgaum, Karnataka", type: "Full-time" },
];

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Omni Life Care Foundation" },
      { name: "description", content: "Join a mission-driven, evidence-led team working on community health and wellbeing across India." },
      { property: "og:title", content: "Careers — Omni Life Care Foundation" },
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
        eyebrow="About"
        title="Careers"
        lead="We're a small, mission-driven team. We hire for craft, care, and a commitment to evidence-led work."
      />
      <section className="container-editorial py-16 lg:py-24">
        <h2 className="display-md mb-8">Current openings</h2>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {OPENINGS.map((o) => (
            <li key={o.role} className="grid lg:grid-cols-[1fr_auto_auto] gap-4 lg:items-center py-6">
              <div>
                <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl">{o.role}</h3>
                <div className="text-sm text-ink-muted mt-1">{o.location} · {o.type}</div>
              </div>
              <a href={`mailto:careers@omnilifecare.org?subject=${encodeURIComponent(o.role)}`} className="btn btn-secondary btn-sm">Apply</a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-muted max-w-2xl">
          Don't see a fit? Send your CV and a note to{" "}
          <a className="underline" href="mailto:careers@omnilifecare.org">careers@omnilifecare.org</a>.
        </p>
      </section>
    </>
  );
}
