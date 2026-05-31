import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PILLARS, PROGRAMS } from "@/lib/site";
import { ProgramCard } from "@/components/ProgramCard";
import { CTABand } from "@/components/CTABand";
import { ArrowRight } from "lucide-react";

const PILLAR_IDS = ["mental-wellbeing", "social-growth", "inclusive-care", "human-potential"] as const;

const SLUG_TO_ID: Record<string, "mental" | "social" | "inclusive" | "human"> = {
  "mental-wellbeing": "mental",
  "social-growth": "social",
  "inclusive-care": "inclusive",
  "human-potential": "human",
};

export const Route = createFileRoute("/what-we-do/$pillar")({
  loader: ({ params }) => {
    const id = SLUG_TO_ID[params.pillar];
    if (!id) throw notFound();
    const pillar = PILLARS.find((p) => p.id === id);
    if (!pillar) throw notFound();
    const programs = PROGRAMS.filter((p) => p.pillar === id);
    return { pillar, programs };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.pillar.name} — Omni Life Care Foundation` },
      { name: "description", content: loaderData?.pillar.long ?? "" },
      { property: "og:title", content: `${loaderData?.pillar.name} — Omni Life Care Foundation` },
      { property: "og:url", content: `/what-we-do/${loaderData?.pillar.id}` },
    ],
    links: [{ rel: "canonical", href: `/what-we-do/${loaderData?.pillar.id}` }],
  }),
  component: PillarPage,
  notFoundComponent: () => <p className="container-editorial py-20">Pillar not found.</p>,
});

function PillarPage() {
  const { pillar, programs } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`Pillar ${pillar.number}`}
        title={pillar.name}
        lead={pillar.long}
      >
        <Link to="/about/omni-care-model" className="link-arrow">
          About the Omni Care Model <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="container-editorial py-16 lg:py-24">
        <div className="eyebrow mb-6">Programmes under this pillar</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Partner with Us"
        title={`Bring CSR investment into ${pillar.name}.`}
        primary={{ label: "CSR Partnership", href: "/partner/csr" }}
        secondary={{ label: "All Programmes", href: "/programs" }}
      />
    </>
  );
}

// help router infer dynamic slug values up-front for sitemap-style use
export const PILLAR_SLUGS = PILLAR_IDS;
