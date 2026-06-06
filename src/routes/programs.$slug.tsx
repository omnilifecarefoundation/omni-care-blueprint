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
      { title: `${loaderData?.program.name} - Omni Life Care Foundation` },
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
  const { program } = Route.useLoaderData() as { program: import("@/lib/site").Program };
  const pillar = PILLAR_BY_ID[program.pillar];

  return (
    <>
      <section className="relative bg-ink text-snow overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(115,91,246,0.28), transparent 45%), radial-gradient(circle at 88% 80%, rgba(255,214,0,0.10), transparent 40%)",
          }}
        />
        <div className="container-editorial relative pt-14 pb-14 lg:pt-20 lg:pb-20">
          <div className="max-w-3xl space-y-6">
            <Link to="/programs" className="inline-flex items-center gap-1 text-sm text-snow/70 hover:text-snow transition-colors">
              <ArrowLeft className="h-4 w-4" /> All programmes
            </Link>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
              {pillar.name}
            </span>
            <h1 className="font-sans font-semibold text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.04] tracking-[-0.025em] text-snow text-balance">{program.name}</h1>
            <p className="max-w-2xl text-[1.0625rem] lg:text-[1.125rem] leading-[1.6] text-snow/80 text-pretty">{program.summary}</p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <aside className="space-y-5">
            <div className="rounded-xl bg-snow border border-hairline p-5 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)]">
              <div className="eyebrow mb-2">Outcome to date</div>
              <p className="font-sans font-semibold text-xl tracking-[-0.015em] text-ink text-balance">{program.outcome}</p>
            </div>
            <div className="rounded-xl bg-snow border border-hairline p-5 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25">
              <div className="eyebrow mb-2">Pillar</div>
              <Link to={pillar.href} className="link-arrow">
                {pillar.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
          <div>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-10">
              <img src={program.image} alt={program.name} className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10" loading="lazy" width={1600} height={1000} />
            </div>
            <div className="prose prose-lg max-w-none space-y-5 text-ink-muted text-lg leading-relaxed">
              {program.body.map((para: string, i: number) => (
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
