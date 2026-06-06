import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import {
  Shield,
  Eye,
  FileText,
  Users,
  Phone,
  Mail,
  AlertTriangle,
  Lock,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/safeguarding-policy")({
  head: () => ({
    meta: [
      {
        title: "Safeguarding & Child Protection Policy - Omni Life Care Foundation",
      },
      {
        name: "description",
        content:
          "Zero tolerance. Named reporting routes. Mandatory training. A public commitment to safeguarding every person we work with.",
      },
      {
        property: "og:title",
        content: "Safeguarding & Child Protection Policy - Omni Life Care Foundation",
      },
      {
        property: "og:description",
        content:
          "Zero tolerance. Named reporting routes. Mandatory training. A public commitment to safeguarding every person we work with.",
      },
      { property: "og:url", content: "/safeguarding-policy" },
    ],
    links: [{ rel: "canonical", href: "/safeguarding-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Zero tolerance is a policy. Named routes, mandatory training, and a public ledger make it real."
        lead="Every person who works with us - staff, volunteer, or partner - is bound by the same safeguarding code. The policy is not a folder on a shelf. It is a set of actions we publish so anyone can hold us to them."
      />

      {/* Honesty band */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
            <FadeUp>
              <div className="eyebrow">Before you read further</div>
              <h2 className="display-md mt-3 text-balance">
                We are new. Our policy is not yet battle-tested. It is public by design.
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-4 text-[1.0625rem] leading-[1.65] text-ink/85 text-pretty">
                <p>
                  A safeguarding policy written in year one is a promise, not proof. We will
                  not pretend it has survived a decade of fieldwork. What we can do is publish it
                  now, train every person before they enter a community, name specific reporting
                  routes, and record every incident and resolution in a ledger any auditor or
                  donor can request.
                </p>
                <p>
                  If you see a gap between this document and what happens on the ground, we
                  want to know. The policy improves when the people it protects tell us how it
                  failed.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Six principles */}
      <section className="container-editorial py-20 lg:py-24">
        <FadeUp>
          <div className="eyebrow">The policy in six principles</div>
          <h2 className="display-md mt-3 text-balance max-w-3xl">
            Six commitments that apply to every programme, every location, every rupee spent.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {[
            {
              icon: Shield,
              title: "Zero tolerance, defined in writing",
              body: "Any form of harm, abuse, exploitation, or discrimination against children, women, elderly people, or people with disabilities is grounds for immediate suspension, investigation, and termination. No warnings. No internal transfers.",
            },
            {
              icon: Eye,
              title: "See it, report it, same day",
              body: "Every staff member and volunteer is mandated to report a concern within 24 hours of witnessing or hearing about it. Delay is treated as a policy breach in itself.",
            },
            {
              icon: FileText,
              title: "A named route for every kind of report",
              body: "General safeguarding, child protection, POSH (sexual harassment), and financial misconduct each have a dedicated email and a named responder. No generic inbox.",
            },
            {
              icon: Users,
              title: "Background check before badge",
              body: "Police verification, two references, and a safeguarding interview are mandatory before any person - paid or volunteer - is cleared to work with communities.",
            },
            {
              icon: BookOpen,
              title: "Training is not a video on day one",
              body: "Initial training (4 hours), annual refresher (2 hours), and a specific module for programmes working with children or survivors of violence. Attendance is recorded.",
            },
            {
              icon: Lock,
              title: "Confidentiality with accountability",
              body: "The survivor's identity is protected. The fact that an incident occurred, the category, the response, and the closure are logged in the ledger. Privacy and transparency are not opposites.",
            },
          ].map((p, i) => (
            <FadeUp key={p.title} delay={i * 70}>
              <div className="h-full rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]">
                <p.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl mt-5 text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-ink-muted text-pretty">
                  {p.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Reporting routes */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <FadeUp>
              <div className="eyebrow">How to report a concern</div>
              <h2 className="display-md mt-3 text-balance">
                Four named routes. Each goes to a trained responder, not a general inbox.
              </h2>
              <p className="mt-5 text-ink-muted text-pretty max-w-md">
                If you are unsure which category applies, use the general safeguarding route.
                The responder will triage and redirect within one working day.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {[
                  {
                    icon: Shield,
                    label: "General safeguarding concern",
                    email: "safeguarding@omnilifecare.org",
                    note: "Response within 24 hours",
                  },
                  {
                    icon: AlertTriangle,
                    label: "Child protection - immediate risk",
                    email: "childprotection@omnilifecare.org",
                    note: "Urgent - same-day response",
                  },
                  {
                    icon: Users,
                    label: "POSH / Workplace harassment",
                    email: "posh@omnilifecare.org",
                    note: "Internal committee notified within 48 hours",
                  },
                  {
                    icon: Lock,
                    label: "Financial misconduct or fraud",
                    email: "compliance@omnilifecare.org",
                    note: "Board Secretary looped in directly",
                  },
                ].map((r, i) => (
                  <li key={r.label} className="py-5">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-snow border border-hairline shrink-0">
                        <r.icon
                          className="h-4 w-4 text-primary"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-sans font-semibold text-[1.05rem] text-balance">
                          {r.label}
                        </div>
                        <div className="mt-1 font-mono text-[11px] tabular-nums uppercase tracking-[0.14em] text-ink-muted">
                          {r.note}
                        </div>
                        <a
                          href={`mailto:${r.email}`}
                          className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
                        >
                          {r.email}
                          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What happens when you report */}
      <section className="container-editorial py-20 lg:py-24">
        <FadeUp>
          <div className="eyebrow">What happens next</div>
          <h2 className="display-md mt-3 text-balance max-w-3xl">
            From first contact to closure. No step is hidden.
          </h2>
        </FadeUp>
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              title: "Acknowledgement",
              body: "The reporter receives a written acknowledgement within the promised window - 24 hours for general, same day for urgent. A reference number is assigned.",
            },
            {
              step: "02",
              title: "Triage & safety",
              body: "A trained responder assesses immediate risk. If the survivor is in danger, safety measures are activated before any investigation begins.",
            },
            {
              step: "03",
              title: "Investigation",
              body: "A small panel (never the accused person's direct supervisor) gathers facts, interviews, and evidence. The survivor chooses how they participate.",
            },
            {
              step: "04",
              title: "Action & closure",
              body: "Outcome is communicated to the reporter (if safe), the survivor, and the Board. The incident is logged in the safeguarding ledger - category, date, action, closure.",
            },
          ].map((s, i) => (
            <FadeUp key={s.step} delay={i * 70}>
              <li className="h-full rounded-xl border border-hairline bg-snow p-6">
                <div className="font-mono text-[11px] tabular-nums text-ink-muted">
                  STEP {s.step}
                </div>
                <h3 className="font-sans font-semibold text-lg mt-3 tracking-[-0.01em] text-balance">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-ink-muted text-pretty">
                  {s.body}
                </p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </section>

      {/* Code of conduct summary */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <FadeUp>
              <div className="eyebrow">Code of conduct</div>
              <h2 className="display-md mt-3 text-balance">
                Ten rules. Every signature. No exceptions.
              </h2>
              <p className="mt-5 text-ink-muted text-pretty max-w-md">
                Staff, volunteers, and partner representatives sign the code before entering
                any community. A signed copy is kept on file. Breach is grounds for immediate
                removal.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {[
                  "Never be alone with a child or vulnerable adult in a closed space.",
                  "Never photograph a beneficiary without written, informed consent.",
                  "Never share a beneficiary's personal details outside the programme team.",
                  "Never accept cash, gifts, or favours from a beneficiary or their family.",
                  "Never use language or behaviour that demeans, intimidates, or discriminates.",
                  "Never transport a child or vulnerable adult in a private vehicle without a second adult present.",
                  "Never promise a job, admission, or benefit in exchange for compliance.",
                  "Always wear the Foundation ID badge when on field duty.",
                  "Always report a concern within 24 hours, even if unsure it qualifies.",
                  "Always treat a survivor's account as valid until the investigation concludes.",
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 py-4">
                    <span className="font-mono text-[11px] tabular-nums text-ink-muted/70 shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[0.98rem] text-ink/90 text-pretty">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Documentation & transparency */}
      <section className="container-editorial py-20 lg:py-24">
        <FadeUp>
          <div className="eyebrow">Documentation & transparency</div>
          <h2 className="display-md mt-3 text-balance max-w-3xl">
            The safeguarding ledger. Open to any auditor or donor who asks.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-4xl">
          {[
            {
              n: "01",
              title: "Incident log",
              body: "Date, category, location, responder, action taken, and closure status. Identities are anonymised in the shared version; full records are held by the Board Secretary under lock.",
            },
            {
              n: "02",
              title: "Training register",
              body: "Name, role, date of initial training, date of last refresher, and module completed. Gaps are flagged in the quarterly MIS.",
            },
            {
              n: "03",
              title: "Background verification files",
              body: "Police clearance, reference checks, and signed code of conduct for every staff member and volunteer. Updated annually.",
            },
            {
              n: "04",
              title: "Policy version control",
              body: "This document is versioned and dated. Changes are reviewed by the Board, communicated to all staff, and published on the website within 7 days of approval.",
            },
          ].map((d, i) => (
            <FadeUp key={d.n} delay={i * 60}>
              <div className="h-full rounded-xl border border-hairline bg-snow p-6">
                <div className="font-mono text-[11px] tabular-nums text-ink-muted">
                  {d.n}
                </div>
                <h3 className="font-sans font-semibold text-lg mt-2 tracking-[-0.01em] text-balance">
                  {d.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-ink-muted text-pretty">
                  {d.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={240}>
          <p className="mt-10 text-sm font-mono tabular-nums text-ink-muted">
            Current policy version: 1.0 · Effective date: June 2026 · Next review: June 2027
          </p>
        </FadeUp>
      </section>

      {/* Contact & escalation */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
            <div>
              <FadeUp>
                <div className="eyebrow">Escalation</div>
                <h2 className="display-md mt-3 text-balance">
                  If the response is inadequate, or the concern involves a senior team member.
                </h2>
              </FadeUp>
              <FadeUp delay={120}>
                <div className="mt-8 space-y-5">
                  <EscalationRow
                    icon={Mail}
                    label="Board Secretary"
                    value="board@omnilifecare.org"
                    href="mailto:board@omnilifecare.org"
                  />
                  <EscalationRow
                    icon={Phone}
                    label="Mumbai police - emergency"
                    value="Dial 100"
                    href="tel:100"
                  />
                  <EscalationRow
                    icon={AlertTriangle}
                    label="Childline - national helpline"
                    value="1098"
                    href="tel:1098"
                  />
                </div>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="mt-10 text-sm leading-[1.65] text-ink-muted text-pretty max-w-md">
                  Retaliation against a whistleblower is treated as a separate safeguarding
                  breach. The reporter's identity is protected to the fullest extent permitted
                  by law.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={160}>
              <div className="rounded-2xl bg-sage p-8 border border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04)]">
                <h3 className="font-sans font-semibold tracking-[-0.015em] text-2xl text-balance">
                  We want this policy to be better than it is.
                </h3>
                <p className="mt-3 text-ink-muted text-pretty">
                  If you have seen a safeguarding system that works - or one that failed - and
                  you think we should adopt or avoid a specific practice, write to{" "}
                  <a className="underline" href="mailto:safeguarding@omnilifecare.org">
                    safeguarding@omnilifecare.org
                  </a>
                  . Every suggestion is logged, reviewed by the Board, and the decision
                  published in the next quarterly update.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Trust is built in public"
        title="A safeguarding policy is only as strong as the person who reports a breach."
        body="If something on this page feels incomplete, unclear, or insufficient - tell us. The fastest way to improve it is to hear from the people it is meant to protect."
        primary={{ label: "Report a concern", href: "mailto:safeguarding@omnilifecare.org" }}
        secondary={{ label: "Read the Omni Care Model", href: "/about/omni-care-model" }}
      />
    </>
  );
}

function EscalationRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-start gap-4 rounded-lg p-3 -m-3 transition-colors duration-200 hover:bg-snow"
    >
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-snow border border-hairline shrink-0">
        <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} aria-hidden />
      </span>
      <span className="flex-1">
        <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-muted">
          {label}
        </span>
        <span className="block font-sans font-semibold text-ink mt-0.5 group-hover:underline underline-offset-4">
          {value}
        </span>
      </span>
    </a>
  );
}
