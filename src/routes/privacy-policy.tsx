import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import type { ReactNode } from "react";

function makePolicyRoute(opts: {
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  body: ReactNode;
}) {
  return {
    head: () => ({
      meta: [
        { title: `${opts.title} — Omni Life Care Foundation` },
        { name: "description", content: opts.description },
        { property: "og:title", content: `${opts.title} — Omni Life Care Foundation` },
        { property: "og:url", content: opts.path },
      ],
      links: [{ rel: "canonical", href: opts.path }],
    }),
    component: () => (
      <>
        <PageHero eyebrow={opts.eyebrow} title={opts.title} />
        <section className="container-narrow py-16 prose prose-lg max-w-none">
          {opts.body}
        </section>
      </>
    ),
  };
}

export const Route = createFileRoute("/privacy-policy")(
  makePolicyRoute({
    path: "/privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Legal",
    description: "How we collect, use, and protect personal information.",
    body: (
      <div className="space-y-6 text-ink-muted leading-relaxed">
        <p>This Privacy Policy explains how Omni Life Care Foundation collects, uses, and safeguards personal information shared with us by donors, volunteers, partners, and visitors to this website.</p>
        <h2 className="font-serif text-2xl text-ink">What we collect</h2>
        <p>Name, email, phone, postal address, PAN (for tax receipts), and any information you choose to share via forms.</p>
        <h2 className="font-serif text-2xl text-ink">How we use it</h2>
        <p>To process donations, respond to enquiries, send updates if you opt in, and comply with statutory and regulatory requirements.</p>
        <h2 className="font-serif text-2xl text-ink">Your rights</h2>
        <p>You can request access, correction, or deletion of your personal information at any time by writing to hello@omnilifecare.org.</p>
        <p className="text-sm">Last updated: 1 May 2026.</p>
      </div>
    ),
  })
);
