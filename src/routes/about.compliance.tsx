import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { COMPLIANCE } from "@/lib/site";
import { ShieldCheck, Download } from "lucide-react";

export const Route = createFileRoute("/about/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance & Registrations — Omni Life Care Foundation" },
      { name: "description", content: "Our 12A, 80G, CSR-1 and FCRA registrations, plus annual returns and audited financials." },
      { property: "og:title", content: "Compliance & Registrations — Omni Life Care Foundation" },
      { property: "og:url", content: "/about/compliance" },
    ],
    links: [{ rel: "canonical", href: "/about/compliance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Compliance & Registrations"
        lead="Audit-ready, transparent, and fully compliant with Indian regulatory requirements."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-5">
          {COMPLIANCE.map((c) => (
            <div key={c.label} className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="font-serif text-2xl mt-4 text-balance">{c.label}</h2>
              <p className="text-ink-muted mt-1 text-pretty">{c.desc}</p>
              <div className="font-mono text-sm tabular-nums text-ink-muted mt-4">Registration: {c.id}</div>
              <button type="button" className="link-arrow mt-4 text-sm">
                <Download className="h-4 w-4" /> View certificate
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-hairline pt-12">
          <h2 className="display-md">Annual returns & audited financials</h2>
          <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
            {["2024–25", "2023–24", "2022–23"].map((y) => (
              <li key={y} className="flex justify-between items-center py-5">
                <span className="font-serif text-lg">Annual Report {y}</span>
                <button type="button" className="btn btn-secondary btn-sm">
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
