import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const VALUES = [
  { title: "Dignity & Respect", body: "Every person we work with is treated as the protagonist of their own life — never as a recipient of charity." },
  { title: "Inclusion & Equity", body: "We design for those most often overlooked, and measure success by how well we reach them." },
  { title: "Community-Centred Approach", body: "Communities shape what we do, how we do it, and how we measure whether it worked." },
  { title: "Collaboration", body: "We work with governments, academic institutions, frontline workers, and other NGOs — never alone." },
  { title: "Impact & Sustainability", body: "We invest in interventions whose effects continue long after our programme ends." },
];

export const Route = createFileRoute("/about/values")({
  head: () => ({
    meta: [
      { title: "Our Values — Omni Life Care Foundation" },
      { name: "description", content: "Dignity, inclusion, community-centred, collaboration, impact — the principles that guide our work." },
      { property: "og:title", content: "Our Values — Omni Life Care Foundation" },
      { property: "og:url", content: "/about/values" },
    ],
    links: [{ rel: "canonical", href: "/about/values" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="Our Values" lead="Five principles that guide every programme, partnership, and decision." />
      <section className="container-editorial py-16 lg:py-24">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {VALUES.map((v, i) => (
            <li key={v.title} className="grid lg:grid-cols-[120px_1fr] gap-6 py-8">
              <div className="font-mono text-xs text-ink-muted tabular">0{i + 1}</div>
              <div>
                <h2 className="font-sans font-semibold tracking-[-0.015em] text-2xl text-ink">{v.title}</h2>
                <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">{v.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
