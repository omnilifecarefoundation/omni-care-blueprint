import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { Database, Lock, Clock, Users, Hand } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Your data, your right" },
      { name: "description", content: "How Omni Life Care Foundation collects, uses, and protects personal information. Written in plain language, not legal code." },
      { property: "og:title", content: "Privacy Policy - Your data, your right" },
      { property: "og:description", content: "How Omni Life Care Foundation collects, uses, and protects personal information. Written in plain language, not legal code." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Page,
});

const COMMITMENTS = [
  {
    icon: Database,
    title: "What we collect",
    body: "Name, email, phone, postal address, and PAN - only when necessary for donation receipts. For volunteers, we may collect professional background and availability. Website analytics are anonymised; we do not use tracking pixels or retargeting.",
  },
  {
    icon: Lock,
    title: "Why we hold it",
    body: "Donor data is used solely for processing donations, issuing receipts, and sending programme updates if you opt in. Volunteer data is used for matching and coordination. We do not sell, rent, or trade personal information under any circumstance.",
  },
  {
    icon: Clock,
    title: "How long we keep it",
    body: "Donor records are retained for seven years in compliance with Income Tax Act requirements. Volunteer records are held for the duration of engagement plus one year. After that, data is securely deleted or irreversibly anonymised.",
  },
  {
    icon: Users,
    title: "Who sees it",
    body: "Only authorised staff and our PCI-compliant payment partner (Razorpay) handle financial data. We do not share information with government agencies except where legally required. No third party receives your data for marketing.",
  },
  {
    icon: Hand,
    title: "Your rights",
    body: "You may request access, correction, or deletion of your personal data at any time. You may withdraw consent for marketing communications instantly. We respond to every request within 10 working days - no forms, no friction.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your data is not our asset. It is your right."
        lead="Most organisations use privacy policies to protect themselves. We have written this one to protect you - in plain language, with nothing buried in fine print."
      />

      {/* Five commitments */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Five commitments</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink max-w-[24ch] text-balance">
              What we do with your information, in plain language.
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

      {/* Honesty: we are new */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Day-one honesty</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                We are young. So is our data practice.
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-4 text-ink-muted leading-relaxed text-pretty">
                <p>
                  Omni Life Care Foundation was registered in 2025. We do not yet have a full-time Data Protection Officer, but privacy is not a job title - it is a discipline. Every staff member who handles data is trained on these principles before they touch a spreadsheet.
                </p>
                <p>
                  Our website runs on standard, widely-used infrastructure. Payment data is handled by Razorpay, which is PCI-DSS Level 1 compliant. We do not store card numbers, CVV codes, or UPI PINs on our servers.
                </p>
                <p className="text-sm">
                  If you have a concern that goes beyond what is covered here, write to{" "}
                  <a
                    href={`mailto:privacy@${SITE.email.split("@")[1]}`}
                    className="text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                  >
                    privacy@omnilifecare.org
                  </a>
                  . Every email is read by a human.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Data minimisation table */}
      <section className="bg-snow">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Data we hold</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
              Only what we need. Nothing more.
            </h2>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="py-3 pr-6 font-sans font-semibold text-sm text-ink tracking-[-0.01em]">Information</th>
                    <th className="py-3 pr-6 font-sans font-semibold text-sm text-ink tracking-[-0.01em]">Why we ask</th>
                    <th className="py-3 pr-6 font-sans font-semibold text-sm text-ink tracking-[-0.01em]">How long</th>
                    <th className="py-3 font-sans font-semibold text-sm text-ink tracking-[-0.01em]">Shared with</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      info: "Name, email, phone",
                      why: "Donation receipt, programme updates (opt-in), enquiry response",
                      howLong: "7 years (donors) / 1 year post-engagement (volunteers)",
                      shared: "No one",
                    },
                    {
                      info: "Postal address",
                      why: "Physical receipt mailing (on request), volunteer field coordination",
                      howLong: "7 years (donors) / 1 year post-engagement (volunteers)",
                      shared: "No one",
                    },
                    {
                      info: "PAN",
                      why: "80G tax receipt issuance only",
                      howLong: "7 years",
                      shared: "Income Tax Department (on filing)",
                    },
                    {
                      info: "Payment details",
                      why: "Transaction processing",
                      howLong: "Not stored by us",
                      shared: "Razorpay (PCI-DSS Level 1)",
                    },
                    {
                      info: "Volunteer background",
                      why: "Skill matching and programme placement",
                      howLong: "1 year post-engagement",
                      shared: "No one",
                    },
                    {
                      info: "Website analytics",
                      why: "Traffic patterns and page performance",
                      howLong: "26 months (anonymised)",
                      shared: "No one",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-hairline last:border-b-0">
                      <td className="py-4 pr-6 text-ink text-[0.95rem] font-medium">{row.info}</td>
                      <td className="py-4 pr-6 text-ink-muted text-[0.95rem] leading-relaxed">{row.why}</td>
                      <td className="py-4 pr-6 text-ink-muted text-[0.95rem]">{row.howLong}</td>
                      <td className="py-4 text-ink-muted text-[0.95rem]">{row.shared}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Your rights - how to act */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Access & control</p>
              <h2 className="mt-4 font-sans font-semibold text-2xl md:text-3xl tracking-[-0.015em] text-ink text-balance leading-[1.1]">
                You do not need a form to exercise your rights.
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                Write to us with your request. We will confirm receipt within 24 hours and complete the action within 10 working days. No justification required.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ol className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Write to privacy@omnilifecare.org",
                    body: "Tell us what you need: a copy of your data, a correction, or complete deletion. Include the email you used when you signed up or donated.",
                  },
                  {
                    step: "02",
                    title: "We confirm within 24 hours",
                    body: "You receive an acknowledgement with a reference number. If we need to verify your identity, we will ask one security question - nothing bureaucratic.",
                  },
                  {
                    step: "03",
                    title: "Action completed in 10 working days",
                    body: "Deletion is irreversible. Data exports are sent as password-protected PDFs. Corrections are applied across all our systems within 48 hours.",
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

      {/* Cookies & tracking */}
      <section className="bg-sage">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Cookies & tracking</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                No tracking pixels. No retargeting. No surprises.
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-4 text-ink-muted leading-relaxed text-pretty">
                <p>
                  This website uses only essential cookies required for security and basic functionality. We do not use third-party analytics trackers, advertising cookies, or social media pixels.
                </p>
                <p>
                  If we add analytics in the future to improve the site experience, it will be anonymised, opt-in, and disclosed here before it goes live. We will never use your browsing behaviour to build a profile or sell to advertisers.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact / reporting */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Questions or concerns</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
              There is always a human at the other end.
            </h2>
          </FadeUp>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Privacy & data requests", email: "privacy@omnilifecare.org", desc: "Access, correction, deletion, data export" },
              { label: "Donation & receipt queries", email: "give@omnilifecare.org", desc: "Receipts, allocation questions, refunds" },
              { label: "General enquiries", email: SITE.email, desc: "Anything else - routed within one working day" },
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

          <FadeUp delay={200}>
            <div className="mt-10 p-6 rounded-xl bg-snow border border-hairline">
              <p className="text-sm text-ink-muted leading-relaxed">
                <strong className="text-ink">Policy version and effective date.</strong>{" "}
                This policy is effective as of 1 June 2026. It replaces all previous versions. Material changes will be emailed to all active donors and volunteers 14 days before they take effect. The current version is always published here.
              </p>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                If you are not satisfied with how we handle your data, you may escalate to the Board Secretary at{" "}
                <a
                  href="mailto:secretary@omnilifecare.org"
                  className="text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                >
                  secretary@omnilifecare.org
                </a>
                . We are committed to resolving every concern in good faith and in compliance with applicable Indian data protection law.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Trust is built here"
        title="Privacy is not a certificate. It is a daily practice."
        body="Read the policy. Question it. And if it holds up, know that the same discipline applies to every rupee you trust us with."
        primary={{ label: "Make a donation", href: "/donate" }}
        secondary={{ label: "Contact the team", href: "/contact" }}
      />
    </>
  );
}
