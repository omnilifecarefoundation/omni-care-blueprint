import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PROGRAMS, PILLAR_BY_ID } from "@/lib/site";
import { CTABand } from "@/components/CTABand";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = PROGRAMS.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.program.name} — Omni Life Care Foundation` },
      { name: "description", content: loaderData?.program.summary ?? "" },
      { property: "og:title", content: loaderData?.program.name ?? "" },
      { property: "og:description", content: loaderData?.program.summary ?? "" },
      { property: "og:url", content: `/programs/${loaderData?.program.slug}` },
      { property: "og:image", content: loaderData?.program.image ?? "" },
      { property: "twitter:image", content: loaderData?.program.image ?? "" },
    ],
    links: [{ rel: "canonical", href: `/programs/${loaderData?.program.slug}` }],
  }),
  component: ProgramPage,
  notFoundComponent: () => (
    <main className="container-editorial py-20">
      <h1 className="display-md">Programme not found</h1>
      <Link to="/programs" className="link-arrow mt-6">Back to programmes</Link>
    </main>
  ),
});

function ProgramPage() {
  const { program } = Route.useLoaderData();
  const pillar = PILLAR_BY_ID[program.pillar];

  return (
    <>
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial pt-16 pb-12 lg:pt-24 lg:pb-16">
          <Link to="/programs" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink mb-6">
            <ArrowLeft className="h-4 w-4" /> All programmes
          </Link>
          <span className="chip" style={{ color: pillar.color }}>
            <span className="chip-dot" /> {pillar.name}
          </span>
          <h1 className="display-lg mt-5 max-w-4xl">{program.name}</h1>
          <p className="lead mt-5 max-w-2xl">{program.summary}</p>
        </div>
      </section>

      <section className="container-editorial py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <aside className="space-y-6">
            <div className="border border-hairline p-5 bg-snow">
              <div className="eyebrow mb-2">Outcome to date</div>
              <p className="font-serif text-xl text-ink">{program.outcome}</p>
            </div>
            <div className="border border-hairline p-5 bg-snow">
              <div className="eyebrow mb-2">Pillar</div>
              <Link to={pillar.href} className="link-arrow">
                {pillar.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
          <div>
            <div className="aspect-[16/10] overflow-hidden mb-10">
              <img src={program.image} alt={program.name} className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
            </div>
            <div className="prose prose-lg max-w-none space-y-5 text-ink-muted text-lg leading-relaxed">
              {program.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Support this programme"
        title="Partner, fund, or volunteer for this work."
        primary={{ label: "Partner with Us", href: "/partner/csr" }}
        secondary={{ label: "Donate", href: "/donate" }}
        variant="dark"
      />
    </>
  );
}
