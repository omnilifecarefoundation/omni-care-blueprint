import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const ITEMS = [
  { date: "12 MAY 2026", cat: "EVENT", title: "Community health roundtable in Mumbai", body: "Convening of state health officials, civil society, and academic partners on integrated community care." },
  { date: "28 APR 2026", cat: "NEWS", title: "Partnership with Belgaum district administration", body: "Three-year MoU signed to scale the Community Health Worker programme across Belgaum district." },
  { date: "10 APR 2026", cat: "PRESS", title: "Annual impact report 2024–25 released", body: "Independently evaluated outcomes across all nine programmes, available as a downloadable PDF." },
  { date: "22 MAR 2026", cat: "NEWS", title: "New research collaboration with NIMHANS", body: "Joint study on community-delivered mental health interventions in rural Maharashtra." },
  { date: "08 MAR 2026", cat: "EVENT", title: "International Women's Day field event", body: "Celebrating women community health workers across our six states of operation." },
];

export const Route = createFileRoute("/newsroom")({
  head: () => ({
    meta: [
      { title: "Newsroom — Omni Life Care Foundation" },
      { name: "description", content: "Latest news, announcements, events, and press from the Foundation." },
      { property: "og:title", content: "Newsroom — Omni Life Care Foundation" },
      { property: "og:url", content: "/newsroom" },
    ],
    links: [{ rel: "canonical", href: "/newsroom" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Newsroom" title="Latest from the Foundation." lead="News, events, press coverage, and announcements." />
      <section className="container-editorial py-16 lg:py-24">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {ITEMS.map((n) => (
            <li key={n.title} className="grid md:grid-cols-[160px_1fr] gap-6 py-8">
              <div className="flex md:flex-col gap-2 md:gap-1">
                <span className="font-mono text-xs text-ink-muted tabular">{n.date}</span>
                <span className="font-mono text-xs text-gold tabular">{n.cat}</span>
              </div>
              <div>
                <h2 className="font-sans font-semibold tracking-[-0.015em] text-2xl text-ink leading-snug">{n.title}</h2>
                <p className="mt-2 text-ink-muted">{n.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-ink-muted">
          Press enquiries: <a className="underline" href="mailto:media@omnilifecare.org">media@omnilifecare.org</a>
        </p>
      </section>
    </>
  );
}
