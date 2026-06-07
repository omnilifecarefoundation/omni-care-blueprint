import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import {
  ShieldCheck,
  Clock,
  FileText,
  Eye,
  CheckCircle2,
  CircleDashed,
  Circle,
  Lock,
} from "lucide-react";

/* ========================================================================
   Compliance - Omni Life Care Foundation
   ------------------------------------------------------------------------
   Honest ledger of registrations, filings, and audit commitments.
   No fabricated certificates. No backdated reports.
   ======================================================================== */

const REGISTRATIONS = [
  {
    label: "Trust Deed & PAN",
    status: "completed" as const,
    body: "Registered as a public charitable trust under the Indian Trusts Act, 1882. Permanent Account Number (PAN) obtained in the name of the trust.",
    note: "Available on request",
  },
  {
    label: "12A",
    status: "completed" as const,
    body: "Income Tax exemption under section 12A of the Income Tax Act, 1961. Exempts trust income from taxation when applied wholly to charitable purposes.",
    note: "Certificate available",
  },
  {
    label: "80G",
    status: "in-progress" as const,
    body: "Tax deduction for donors under section 80G. Application filed with the Income Tax Department. Typically granted within 6–12 months of trust registration.",
    note: "Application submitted",
  },
  {
    label: "CSR-1",
    status: "in-progress" as const,
    body: "Registration with the Ministry of Corporate Affairs to receive CSR funds from eligible companies under section 135 of the Companies Act, 2013.",
    note: "Form filed; awaiting acknowledgement",
  },
  {
    label: "FCRA",
    status: "pending" as const,
    body: "Foreign Contribution (Regulation) Act registration. Required to receive foreign donations. Newly registered trusts may apply after three years of active operation or seek prior permission for specific projects.",
    note: "Eligible to apply from FY 2027–28 onwards",
  },
];

const PUBLICATIONS = [
  {
    year: "2025–26",
    items: [
      "Audited financial statements (first full year)",
      "Annual report with program metrics",
      "Trustee remuneration disclosure",
      "List of donors above ₹50,000",
    ],
    due: "30 September 2026",
  },
  {
    year: "2026–27",
    items: [
      "Audited financial statements",
      "Annual report with SDG-aligned outcome data",
      "Updated 12A / 80G compliance certificate",
      "Program-wise expenditure breakdown",
    ],
    due: "30 September 2027",
  },
];

const COMMITMENTS = [
  {
    icon: Eye,
    title: "Publish everything",
    body: "Annual reports, audited financials, donor lists above the statutory threshold, and trustee declarations will be uploaded here within 30 days of approval.",
  },
  {
    icon: Clock,
    title: "Meet every deadline",
    body: "Income Tax returns, trust filings, and MCA updates will be filed before the due date. If we miss one, we will say so - and explain why.",
  },
  {
    icon: Lock,
    title: "Independent audit",
    body: "A statutory auditor appointed by the Board - not by management - will review our books every year. The audit mandate and scope will be published.",
  },
  {
    icon: FileText,
    title: "Answer questions",
    body: "Any donor, beneficiary, or regulator may request copies of registration certificates, trust deeds, or past filings. We will respond within five working days.",
  },
];

function StatusIcon({ status }: { status: "completed" | "in-progress" | "pending" }) {
  if (status === "completed") return <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />;
  if (status === "in-progress") return <CircleDashed className="h-5 w-5 text-amber-600" aria-hidden="true" />;
  return <Circle className="h-5 w-5 text-ink-muted" aria-hidden="true" />;
}

function StatusLabel({ status }: { status: "completed" | "in-progress" | "pending" }) {
  const map = {
    completed: { text: "Completed", className: "text-emerald-700 bg-emerald-50" },
    "in-progress": { text: "In progress", className: "text-amber-700 bg-amber-50" },
    pending: { text: "Pending eligibility", className: "text-ink-muted bg-sage" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${s.className}`}>
      <StatusIcon status={status} />
      {s.text}
    </span>
  );
}

export const Route = createFileRoute("/about/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance & Registrations - Omni Life Care Foundation" },
      { name: "description", content: "Our registrations, filings, and public commitment to financial transparency. Open books from day one." },
      { property: "og:title", content: "Compliance & Registrations - Omni Life Care Foundation" },
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
        title="Open books from day one"
        lead="We cannot point to five years of audited history. We can point to the transparency we choose to build - starting now."
      />

      {/* Section 1 - The four commitments */}
      <section className="bg-canvas">
        <div className="container-editorial section-tight">
          <FadeUp>
            <h2 className="display-md max-w-2xl">
              Four things you will always find here
            </h2>
          </FadeUp>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {COMMITMENTS.map((c, i) => (
              <FadeUp key={c.title} delay={100 + i * 80}>
                <div className="card-editorial p-6 lg:p-8 h-full">
                  <c.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="font-sans font-semibold text-lg mt-4 tracking-[-0.01em] text-balance">
                    {c.title}
                  </h3>
                  <p className="text-ink-muted mt-2 text-pretty text-[15px] leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Registrations ledger */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial section-tight">
          <FadeUp>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="eyebrow">Legal status</span>
            </div>
            <h2 className="display-md max-w-2xl">
              Where our registrations stand today
            </h2>
            <p className="lead mt-4 max-w-2xl">
              A new foundation begins with a trust deed and a PAN card. The rest is earned through filing, waiting, and operating with discipline. Here is the honest state of each registration.
            </p>
          </FadeUp>

          <div className="mt-10 space-y-4">
            {REGISTRATIONS.map((r, i) => (
              <FadeUp key={r.label} delay={80 + i * 60}>
                <div className="card-editorial p-5 lg:p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-sans font-semibold text-lg tracking-[-0.01em]">
                        {r.label}
                      </h3>
                      <StatusLabel status={r.status} />
                    </div>
                    <p className="text-ink-muted mt-2 text-pretty text-[15px] leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm font-medium text-ink-muted tabular whitespace-nowrap">
                    {r.note}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <p className="mt-8 text-sm text-ink-muted text-pretty max-w-2xl">
              Registration certificates that are complete will be made available for download here within five working days of a written request. We do not publish scanned copies publicly to prevent misuse; verified requestors receive watermarked PDFs.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section 3 - What will be published, when */}
      <section className="bg-canvas">
        <div className="container-editorial section-tight">
          <FadeUp>
            <div className="flex items-center gap-3 mb-2">
              <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="eyebrow">Financial transparency</span>
            </div>
            <h2 className="display-md max-w-2xl">
              What we will publish, and when
            </h2>
            <p className="lead mt-4 max-w-2xl">
              The first audited annual report will cover the financial year 2025–26. Until then, this section will show our filing plan - so you can hold us to it.
            </p>
          </FadeUp>

          <div className="mt-10 space-y-6">
            {PUBLICATIONS.map((pub, i) => (
              <FadeUp key={pub.year} delay={80 + i * 80}>
                <div className="border border-hairline rounded-xl bg-snow overflow-hidden">
                  <div className="px-5 py-4 lg:px-6 lg:py-5 border-b border-hairline bg-sage/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-sans font-semibold text-lg tracking-[-0.01em]">
                      Financial year {pub.year}
                    </h3>
                    <span className="text-sm text-ink-muted tabular">
                      Due: {pub.due}
                    </span>
                  </div>
                  <ul className="px-5 py-4 lg:px-6 lg:py-5 space-y-3">
                    {pub.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px]">
                        <Circle className="h-2 w-2 mt-[7px] text-primary shrink-0" fill="currentColor" aria-hidden="true" />
                        <span className="text-ink-muted text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <div className="mt-10 p-6 lg:p-8 rounded-xl bg-primary text-snow">
              <h3 className="font-sans font-semibold text-lg tracking-[-0.01em] text-snow">
                Quarterly updates in the meantime
              </h3>
              <p className="mt-3 text-snow/80 text-pretty text-[15px] leading-relaxed max-w-2xl">
                Between annual reports, we will publish brief quarterly statements covering: funds received, major expenditure heads, and any changes to the Board or auditor. The first quarterly statement will appear here within 45 days of the quarter ending 30 June 2025.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-snow/20 bg-snow/5 text-xs text-snow/80 tabular">
                  <Clock className="h-3.5 w-3.5" />
                  Next update: Q1 FY 2025–26
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 4 - Accountability standards */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial section-tight">
          <FadeUp>
            <h2 className="display-md max-w-2xl">
              The standards we are holding ourselves to
            </h2>
          </FadeUp>

          <FadeUp delay={80}>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="py-3 pr-6 font-sans font-semibold text-sm text-ink">Standard</th>
                    <th className="py-3 pr-6 font-sans font-semibold text-sm text-ink">Commitment</th>
                    <th className="py-3 pr-6 font-sans font-semibold text-sm text-ink">Verification</th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  <tr className="border-b border-hairline">
                    <td className="py-4 pr-6 text-ink-muted">Board independence</td>
                    <td className="py-4 pr-6 text-ink">At least 60% of trustees will be independent (no material financial relationship with the foundation).</td>
                    <td className="py-4 pr-6 text-ink-muted">Published in annual report</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <td className="py-4 pr-6 text-ink-muted">Trustee remuneration</td>
                    <td className="py-4 pr-6 text-ink">No trustee shall receive remuneration for trustee duties. Only reimbursement of documented expenses.</td>
                    <td className="py-4 pr-6 text-ink-muted">Disclosed in annual report</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <td className="py-4 pr-6 text-ink-muted">Related-party transactions</td>
                    <td className="py-4 pr-6 text-ink">Any transaction with a trustee, donor, or their family member above ₹10,000 requires Board approval and disclosure.</td>
                    <td className="py-4 pr-6 text-ink-muted">Conflict register (public)</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <td className="py-4 pr-6 text-ink-muted">Fund utilisation</td>
                    <td className="py-4 pr-6 text-ink">At least 85% of every rupee received will be spent directly on programme delivery, not administration or fundraising.</td>
                    <td className="py-4 pr-6 text-ink-muted">Audited financials</td>
                  </tr>
                  <tr className="border-b border-hairline">
                    <td className="py-4 pr-6 text-ink-muted">Audit frequency</td>
                    <td className="py-4 pr-6 text-ink">Statutory audit every year by an independent chartered accountant appointed by the Board.</td>
                    <td className="py-4 pr-6 text-ink-muted">Audit report (published)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-ink-muted">Complaint mechanism</td>
                    <td className="py-4 pr-6 text-ink">A whistleblower and grievance email monitored by an independent trustee, not staff.</td>
                    <td className="py-4 pr-6 text-ink-muted">Response SLA: 48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 5 - Donor rights */}
      <section className="bg-canvas">
        <div className="container-editorial section-tight">
          <FadeUp>
            <h2 className="display-md max-w-2xl">
              What donors are entitled to know
            </h2>
          </FadeUp>

          <FadeUp delay={80}>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="border border-hairline rounded-xl p-6 bg-snow">
                <h3 className="font-sans font-semibold text-base tracking-[-0.01em]">Before you give</h3>
                <ul className="mt-4 space-y-3 text-[15px] text-ink-muted">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Our trust deed and registration certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Names and backgrounds of all trustees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>How your donation will be used, with budget head</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Tax exemption status and 80G applicability</span>
                  </li>
                </ul>
              </div>
              <div className="border border-hairline rounded-xl p-6 bg-snow">
                <h3 className="font-sans font-semibold text-base tracking-[-0.01em]">After you give</h3>
                <ul className="mt-4 space-y-3 text-[15px] text-ink-muted">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>A proper receipt with 80G details (once approved)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Annual report showing how funds were deployed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Access to auditor contact for verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Right to ask questions - answered in five working days</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border border-amber-200 bg-amber-50">
              <Clock className="h-5 w-5 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-[15px] text-amber-900 text-pretty">
                <strong>80G receipts:</strong> Until our 80G application is approved, we cannot offer tax-deductible receipts under section 80G. We will notify all donors immediately upon approval. Donations made before approval are still valid and will be retrospectively acknowledged if the approval covers the donation date.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Hold us to it"
        title="Ask for any document. We will send it within five days."
        body="Transparency is not a one-time publication. It is a habit. If something you need is not here, write to us and we will add it to the public record."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Leadership & governance", href: "/about/leadership" }}
      />
    </>
  );
}
