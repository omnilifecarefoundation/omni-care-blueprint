import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Omni Life Care Foundation" },
      { name: "description", content: "Terms and conditions for use of the Omni Life Care Foundation website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="container-narrow py-16 space-y-5 text-ink-muted leading-relaxed">
        <p>By using this website, you agree to use it for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use of the site.</p>
        <p>Content on this site is owned by Omni Life Care Foundation unless otherwise indicated. You may share and cite content with attribution and a link back to the source.</p>
        <p className="text-sm">Last updated: 1 May 2026.</p>
      </section>
    </>
  ),
});
