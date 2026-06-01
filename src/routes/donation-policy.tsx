import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { ClipboardCheck, Landmark, FileText, RotateCcw, Shield } from "lucide-react";

export const Route = createFileRoute("/donation-policy")({
  head: () => ({
    meta: [
      { title: "Donation Policy — The promise we keep in writing" },
      { name: "description", content: "How Omni Life Care Foundation accepts, allocates, reports, and refunds donations. Written in plain language, not legal code." },
      { property: "og:title", content: "Donation Policy — The promise we keep in writing" },
      { property: "og:description", content: "How Omni Life Care Foundation accepts, allocates, reports, and refunds donations. Written in plain language, not legal code." },
      { property: "og:url", content: "/donation-policy" },
    ],
    links: [{ rel: "canonical", href: "/donation-policy" }],
  }),
  component: Page,
});

const COMMITMENTS = [
  {
    icon: ClipboardCheck,
    title: "What we accept",
    body: "Online donations via UPI, debit card, credit card, and net banking through our PCI-compliant payment partner. Bank transfers and cheques are accepted on request. We do not accept cash donations above ₹2,000 in compliance with Section 80G requirements.",
  },
  {
    icon: Landmark,
    title: "Where it lands",
    body: "Every rupee is allocated to a specific programme line — not a general fund. In FY 2026–27, all donations are ring-fenced for the Mumbai chawl cohort: 500 households, end-to-end screening, referral, and follow-up. Overheads are capped at 15% and disclosed in the monthly ledger.",
  },
  {
    icon: FileText,
    title: "How we report",
    body: "A cost-per-outcome dashboard is published on the first working day of each month. A full community ledger is published quarterly. An independent third-party audit is conducted annually and published here without summary or paraphrase.",
  },
  {
    icon: RotateCcw,
    title: "When we refund",
    body: "Donations made in error may be refunded if requested within 7 days of the transaction. Refunds are processed to the original payment instrument within 14 working days. Recurring donations can be cancelled at any time — the cancellation takes effect from the next billing cycle.",
  },
  {
    icon: Shield,
    title: "How we protect you",
    body: "We do not store card details. PAN is collected solely for 80G receipt issuance and is never shared with third parties. Donor data is handled in accordance with our Privacy Policy. You may request deletion of your data at any time.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Donation Policy"
        title="A policy is a promise written down."
        lead="Most organisations bury this page in fine print. We have written it in plain language because the donor relationship is the most important contract we hold."
      />

      {/* Five commitments */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Five commitments</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink max-w-[24ch] text-balance">
              What you are entitled to, in plain language.
            </h2>
          </FadeUp>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {COMMITMENTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeUp key={c.title} delay={i * 60}>
                  <article className="bg-snow p-7 lg:p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage text-ink">
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted tabular-nums">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-sans font-semibold text-lg tracking-[-0.01em] text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-ink-muted text-[0.95rem] leading-relaxed text-pretty">
                      {c.body}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* 80G honesty */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Tax exemption</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                80G status: application filed.
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-4 text-ink-muted leading-relaxed text-pretty">
                <p>
                  We have filed for registration under Section 80G of the Income Tax Act, 1961. Approval is pending with the Income Tax Department. We cannot guarantee a timeline — no one can — but we will tell you the truth about status as we receive it.
                </p>
                <p>
                  Once approved, 80G receipts will be issued retrospectively to all donors from the date of registration. Until then, we issue a provisional donation receipt valid for record-keeping, which can be exchanged for the 80G certificate once approval is granted.
                </p>
                <p className="text-sm">
                  For questions, write to{" "}
                  <a
                    href="mailto:give@omnilifecare.org?subject=80G%20status%20enquiry"
                    className="text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                  >
                    give@omnilifecare.org
                  </a>
                  .
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Refund process */}
      <section className="bg-snow">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Refund process</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                Mistakes happen. We fix them in fourteen days.
              </h2>
              <p className="mt-6 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                If you donated in error, changed your mind, or see a transaction you do not recognise, you are entitled to a full refund — no questions asked, no forms to justify yourself.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ol className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Write to us within 7 days",
                    body: "Email give@omnilifecare.org with your transaction reference, date, and amount. A screenshot helps but is not required.",
                  },
                  {
                    step: "02",
                    title: "We confirm within 48 hours",
                    body: "You receive an acknowledgement with a ticket number. We verify the transaction against our payment partner ledger.",
                  },
                  {
                    step: "03",
                    title: "Refund processed in 14 working days",
                    body: "The full amount is returned to the original payment instrument. UPI refunds are fastest; card refunds may take 5–10 additional banking days depending on your issuer.",
                  },
                ].map((s) => (
                  <li key={s.step} className="flex gap-5">
                    <span className="flex-shrink-0 font-mono text-[11px] tracking-[0.15em] uppercase text-ink-muted pt-1 tabular-nums">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-sans font-semibold text-base tracking-[-0.005em] text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-ink-muted text-[0.95rem] leading-relaxed text-pretty">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Cancellation & changes */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Recurring donations</p>
              <h2 className="mt-4 font-sans font-semibold text-2xl md:text-3xl tracking-[-0.015em] text-ink text-balance leading-[1.1]">
                Cancel any time. No lock-in, no penalty.
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                Monthly contributions can be cancelled by emailing give@omnilifecare.org or through the link in your monthly receipt. Cancellation takes effect from the next billing cycle. You will not be charged again.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Changes to this policy</p>
              <h2 className="mt-4 font-sans font-semibold text-2xl md:text-3xl tracking-[-0.015em] text-ink text-balance leading-[1.1]">
                If we change the rules, we tell you first.
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                Material changes to this policy will be emailed to all active donors 30 days before they take effect. The current version is always published here, dated at the bottom of the page.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact / disputes */}
      <section className="bg-sage">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Questions or disputes</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
              There is always a human at the other end.
            </h2>
          </FadeUp>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Donation enquiries", email: "give@omnilifecare.org", desc: "Refunds, receipts, allocation questions" },
              { label: "Finance & compliance", email: "finance@omnilifecare.org", desc: "80G status, audit questions, bank transfers" },
              { label: "Privacy & data", email: "privacy@omnilifecare.org", desc: "Data deletion, correction, access requests" },
              { label: "General", email: "hello@omnilifecare.org", desc: "Anything else — routed to the right person within one working day" },
            ].map((c, i) => (
              <FadeUp key={c.label} delay={i * 60}>
                <div className="rounded-xl bg-snow border border-hairline p-6 lg:p-7 h-full">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted">{c.label}</div>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-2 inline-block text-ink font-semibold text-sm underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                  >
                    {c.email}
                  </a>
                  <p className="mt-3 text-ink-muted text-sm leading-relaxed">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={240}>
            <p className="mt-10 text-sm text-ink-muted leading-relaxed">
              If a dispute is not resolved to your satisfaction within 21 days, you may escalate to the Board Secretary at{" "}
              <a
                href="mailto:secretary@omnilifecare.org"
                className="text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
              >
                secretary@omnilifecare.org
              </a>
              . We are committed to resolving every issue in good faith.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Ready to give"
        title="The policy is the promise. The promise is the work."
        body="Read it, question it, and then — if it holds up — fund the first household file."
        primary={{ label: "Make a donation", href: "/donate" }}
        secondary={{ label: "Talk to the team", href: "mailto:give@omnilifecare.org" }}
      />
    </>
  );
}
