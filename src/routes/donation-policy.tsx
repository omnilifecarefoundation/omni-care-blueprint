import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/donation-policy")({
  head: () => ({
    meta: [
      { title: "Donation & Refund Policy — Omni Life Care Foundation" },
      { name: "description", content: "How donations are accepted, used, refunded, and reported." },
      { property: "og:url", content: "/donation-policy" },
    ],
    links: [{ rel: "canonical", href: "/donation-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Donation & Refund Policy" />
      <section className="container-narrow py-16 space-y-5 text-ink-muted leading-relaxed">
        <p>Donations to Omni Life Care Foundation support the programmes described on this website. All donations are tax-exempt under Section 80G of the Income Tax Act.</p>
        <p>Refunds: Donations made in error may be refunded if requested within 7 days. Refund requests should be sent to hello@omnilifecare.org with the transaction reference.</p>
        <p>Reporting: We publish annual financials and programme outcomes every year.</p>
      </section>
    </>
  ),
});
