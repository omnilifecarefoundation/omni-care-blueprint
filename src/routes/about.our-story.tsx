import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const MILESTONES = [
  { year: "2019", title: "Founded", body: "Omni Life Care Foundation registered as a Section 8 company, with initial programmes in Solapur district." },
  { year: "2021", title: "Community Mental Health programme launches", body: "First cohort of 30 community mental health workers trained and deployed." },
  { year: "2023", title: "Research function established", body: "Independent research unit launched, with first peer-reviewed publication in 2024." },
  { year: "2024", title: "Six-state operations", body: "Programmes active across Maharashtra, Karnataka, Tamil Nadu, Madhya Pradesh, Odisha, and Uttar Pradesh." },
  { year: "2026", title: "CSR-1 certification, 120,000 lives reached", body: "Audit-ready CSR partnerships scaled across sectors." },
];

export const Route = createFileRoute("/about/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Omni Life Care Foundation" },
      { name: "description", content: "How the Foundation came to be — a brief history of our work." },
      { property: "og:title", content: "Our Story — Omni Life Care Foundation" },
      { property: "og:url", content: "/about/our-story" },
    ],
    links: [{ rel: "canonical", href: "/about/our-story" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Story"
        lead="From a single district in Maharashtra to programmes across six states — a brief history of how the Foundation came to be."
      />
      <section className="container-editorial py-16 lg:py-24">
        <ol className="border-l border-hairline pl-8 space-y-12 max-w-3xl">
          {MILESTONES.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full bg-coral" />
              <div className="font-mono text-sm text-ink-muted tabular">{m.year}</div>
              <h3 className="mt-1 font-serif text-2xl">{m.title}</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
