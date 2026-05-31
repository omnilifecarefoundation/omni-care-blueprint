import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { STATS, STORIES, PILLAR_BY_ID } from "@/lib/site";
import { IndiaMap } from "@/components/IndiaMap";
import { CountUp } from "@/components/CountUp";
import { ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/impact/")({
  head: () => ({
    meta: [
      { title: "Impact — Omni Life Care Foundation" },
      { name: "description", content: "Our impact in numbers, geography, and the lives of the people we work alongside." },
      { property: "og:title", content: "Impact — Omni Life Care Foundation" },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="What changes when we work alongside communities."
        lead="Our work is measured in lives reached, outcomes tracked, and capability built within communities — not in donations raised."
      />

      <section className="container-editorial py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s) => (
            <div key={s.label} className="border-l border-hairline pl-5">
              <div className="font-sans font-bold text-3xl text-primary tabular">
                <CountUp value={s.value} />
              </div>
              <div className="mt-3 h-[2px] w-10 bg-coral" />
              <div className="eyebrow mt-3">{s.label}</div>
              <p className="mt-1.5 text-sm text-ink-muted">{s.context}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">Geography</div>
            <h2 className="display-md">Six states. Eighty-five communities.</h2>
            <p className="lead mt-4">
              Our programmes operate in partnership with district administrations
              and local civil society in Maharashtra, Karnataka, Tamil Nadu,
              Madhya Pradesh, Odisha, and Uttar Pradesh.
            </p>
            <Link to="/impact/stories" className="link-arrow mt-8">
              Read stories from the field <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex justify-center">
            <IndiaMap className="w-full max-w-[400px] h-auto" />
          </div>
        </div>
      </section>

      <section className="container-editorial py-16 lg:py-24">
        <h2 className="display-md mb-10">Annual reports</h2>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {["2024–25", "2023–24", "2022–23"].map((y) => (
            <li key={y} className="flex items-center justify-between py-5">
              <span className="font-serif text-lg">Annual Impact Report {y}</span>
              <button type="button" className="btn btn-secondary btn-sm">
                <Download className="h-4 w-4" /> PDF
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
