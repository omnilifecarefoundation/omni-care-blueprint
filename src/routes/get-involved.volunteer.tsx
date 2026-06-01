import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const ROLES = [
  { title: "Community Mental Health Volunteer", location: "Solapur, Maharashtra", time: "8 hours / week", skills: "Marathi or Hindi, basic counselling training preferred" },
  { title: "Research Assistant (Remote)", location: "Remote", time: "Flexible, 6+ hours / week", skills: "Quantitative or qualitative research methods" },
  { title: "Field Photographer", location: "On-assignment, India", time: "Per project", skills: "Documentary photography, ethical consent practices" },
  { title: "Grant Writing Volunteer", location: "Remote", time: "Project-based", skills: "Experience writing nonprofit grant proposals" },
];

export const Route = createFileRoute("/get-involved/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Omni Life Care Foundation" },
      { name: "description", content: "Field, research, and remote volunteer opportunities with the Foundation." },
      { property: "og:title", content: "Volunteer — Omni Life Care Foundation" },
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
        title="Volunteer with us."
        lead="We host volunteers in field, research, and operational roles. Every role has a clear scope, time commitment, and on-boarding pathway."
      />
      <section className="container-editorial py-16 lg:py-24">
        <h2 className="display-md mb-8">Open opportunities</h2>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {ROLES.map((r) => (
            <li key={r.title} className="py-6 grid lg:grid-cols-[1fr_auto] gap-4 items-start">
              <div>
                <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl">{r.title}</h3>
                <p className="text-sm text-ink-muted mt-1">{r.location} · {r.time}</p>
                <p className="text-sm text-ink-muted mt-1">Skills: {r.skills}</p>
              </div>
              <a href={`mailto:volunteer@omnilifecare.org?subject=${encodeURIComponent(r.title)}`} className="btn btn-secondary btn-sm">Apply</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
