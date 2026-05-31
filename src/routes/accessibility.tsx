import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Omni Life Care Foundation" },
      { name: "description", content: "Our commitment to making this website accessible to everyone." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" lead="We aim to meet WCAG 2.2 AA across this website." />
      <section className="container-narrow py-16 space-y-5 text-ink-muted leading-relaxed">
        <p>This site is designed and built with accessibility as a first-class requirement. We follow semantic HTML, ensure colour-contrast ratios meet WCAG 2.2 AA, provide keyboard navigation, and respect reduced-motion preferences.</p>
        <p>If you experience an accessibility barrier on this site, please write to <a className="underline" href="mailto:hello@omnilifecare.org">hello@omnilifecare.org</a>. We will respond within 3 business days.</p>
      </section>
    </>
  ),
});
