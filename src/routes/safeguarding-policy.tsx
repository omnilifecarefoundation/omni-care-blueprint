import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/safeguarding-policy")({
  head: () => ({
    meta: [
      { title: "Child Protection & Safeguarding Policy — Omni Life Care Foundation" },
      { name: "description", content: "Our commitment to safeguarding the dignity and wellbeing of every person we work with." },
      { property: "og:url", content: "/safeguarding-policy" },
    ],
    links: [{ rel: "canonical", href: "/safeguarding-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Child Protection & Safeguarding Policy" />
      <section className="container-narrow py-16 space-y-5 text-ink-muted leading-relaxed">
        <p>The Foundation maintains a zero-tolerance approach to any form of harm, abuse, or exploitation of the children, women, and vulnerable adults we work with.</p>
        <p>All staff, partners, and volunteers are subject to background verification, mandatory safeguarding training, and a binding code of conduct.</p>
        <p>To report a safeguarding concern, contact safeguarding@omnilifecare.org. All reports are treated confidentially.</p>
      </section>
    </>
  ),
});
