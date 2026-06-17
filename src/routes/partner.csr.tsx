import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import {
  FileCheck2,
  ShieldCheck,
  Building2,
  ScrollText,
  HandCoins,
  ClipboardList,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitForm } from "@/lib/forms/submit";

export const Route = createFileRoute("/partner/csr")({
  head: () => ({
    meta: [
      { title: "CSR Partnership - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "A first CSR partner gets a co-designed programme, a named project lead, and a quarterly report that an auditor can sign. Mumbai, Schedule VII aligned.",
      },
      { property: "og:title", content: "CSR Partnership - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Honest CSR for a new foundation: scope, supervision, quarterly reporting and a public ledger from rupee one.",
      },
      { property: "og:url", content: "/partner/csr" },
    ],
    links: [{ rel: "canonical", href: "/partner/csr" }],
  }),
  component: Page,
});

const FOCUS = [
  { area: "Community Mental Health & Wellbeing", entry: "Schedule VII (i)", sdg: "SDG 3, 10" },
  { area: "Preventive & Community Health Outreach", entry: "Schedule VII (i)", sdg: "SDG 3, 1" },
  { area: "Women's Health & Life-Cycle Care", entry: "Schedule VII (iii)", sdg: "SDG 5, 3" },
  { area: "Inclusive Care - Disability & Elderly", entry: "Schedule VII (iii)", sdg: "SDG 10, 3" },
  { area: "Women's Wellness - Cancer Screening, PCOS, Menopause", entry: "Schedule VII (i)", sdg: "SDG 5, 3" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Corporate Partners"
        title="A first CSR partner gets a scope, a supervisor, and a report an auditor can sign."
        lead="We are a new foundation in Mumbai. We will not promise scale we have not delivered. We will commit to a clearly written programme, a named project lead, quarterly MIS, and a public ledger - from rupee one."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PillButton to="#enquire" variant="on-dark">
            Start an enquiry
          </PillButton>
          <PillButton to="#commitments" variant="ghost">
            Read our commitments
          </PillButton>
        </div>
      </PageHero>

      {/* Day-one honesty */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
            <FadeUp>
              <div className="eyebrow">Before you read further</div>
              <h2 className="display-md mt-3 text-balance">
                What we don't have yet. What we will not invent.
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-4 text-[1.0625rem] leading-[1.65] text-ink/85 text-pretty">
                <p>
                  We are a newly registered Section 8 foundation. We do not yet have a
                  five-year impact deck, alumni testimonials, or a portfolio of completed CSR
                  engagements. Any agency that shows you those for a one-year-old organisation
                  is showing you someone else's work.
                </p>
                <p>
                  What a first partner gets instead is unusual access: a co-designed programme,
                  direct contact with the founding team, the first set of baseline numbers in
                  your sector, and the moral authority of having funded the work before it was
                  fashionable.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Three things we put in writing */}
      <section id="commitments" className="container-editorial py-20 lg:py-24">
        <FadeUp>
          <div className="eyebrow">In every engagement letter</div>
          <h2 className="display-md mt-3 text-balance max-w-3xl">
            Three things we put in writing before you transfer a rupee.
          </h2>
        </FadeUp>
        <div className="grid lg:grid-cols-3 gap-5 mt-12">
          {[
            {
              icon: FileCheck2,
              title: "Schedule VII alignment, in plain language",
              body: "Every programme maps to a specific entry under Schedule VII of the Companies Act, 2013. We name the entry, we explain it in one paragraph, and we sign it.",
            },
            {
              icon: ShieldCheck,
              title: "Quarterly MIS your CFO can defend",
              body: "Beneficiary count, cost-per-beneficiary, geography, attendance ledgers, and exception notes - sent on a fixed date each quarter, in a format your statutory auditor has already approved.",
            },
            {
              icon: Building2,
              title: "A named project lead, not a generic team",
              body: "One person from our side owns delivery. Their direct line, their email, and the escalation path to the Board are on page one of the MoU.",
            },
          ].map((c, i) => (
            <FadeUp key={c.title} delay={i * 80}>
              <div className="h-full rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_10px_24px_-18px_rgba(4, 55, 242,0.18)]">
                <c.icon className="h-6 w-6 text-primary" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl mt-5 text-balance">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-ink-muted text-pretty">
                  {c.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Focus areas table */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <FadeUp>
              <div className="eyebrow">Where your CSR can land</div>
              <h2 className="display-md mt-3 text-balance">
                Five programme areas, each mapped to a Schedule&nbsp;VII entry and an SDG.
              </h2>
              <p className="mt-5 text-ink-muted text-pretty max-w-md">
                Pick one. Or fund a slice across two. We will not stretch a programme to fit a
                budget - if the fit is wrong, we will say so in the first call.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {FOCUS.map((f, i) => (
                  <li
                    key={f.area}
                    className="grid grid-cols-[auto_1fr_auto] gap-4 items-baseline py-5"
                  >
                    <span className="font-mono text-[11px] tabular-nums text-ink-muted/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-sans font-semibold text-[1.05rem] text-balance">
                        {f.area}
                      </div>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                        {f.entry} · {f.sdg}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-muted/60"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How a partnership is built */}
      <section className="container-editorial py-20 lg:py-24">
        <FadeUp>
          <div className="eyebrow">How a partnership is built</div>
          <h2 className="display-md mt-3 text-balance max-w-3xl">
            Four steps. Roughly six weeks from first call to first field day.
          </h2>
        </FadeUp>
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              title: "Discovery call",
              body: "45 minutes. We listen for your CSR mandate, board's interests, geography and reporting cadence. No deck.",
            },
            {
              step: "02",
              title: "Programme note",
              body: "Within 10 days: a 4-page concept note with Schedule VII mapping, deliverables, budget and risks. Yours to share with the committee.",
            },
            {
              step: "03",
              title: "MoU & due diligence",
              body: "We hand over the documentation pack - registration, 12A, 80G, CSR-1 status, audited finances when available, governance policies.",
            },
            {
              step: "04",
              title: "Launch & first MIS",
              body: "Project lead is named. Baseline is captured before activity begins. The first quarterly MIS lands on a fixed date.",
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
                <p className="mt-2 text-sm leading-[1.6] text-ink-muted text-pretty">{s.body}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </section>

      {/* Documentation pack */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <FadeUp>
              <div className="eyebrow">For your compliance team</div>
              <h2 className="display-md mt-3 text-balance">
                The documentation pack, available on request.
              </h2>
              <p className="mt-5 text-ink-muted text-pretty max-w-md">
                We will not list registration numbers on a public page until each certificate is
                in hand. When your team asks, we share the pack on the same day, with file
                hashes and issue dates.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {[
                  { icon: ScrollText, label: "Section 8 Certificate of Incorporation" },
                  { icon: ScrollText, label: "PAN, TAN and GST (where applicable)" },
                  { icon: ScrollText, label: "12A registration (Income Tax Act, 1961)" },
                  { icon: ScrollText, label: "80G certificate for donor tax exemption" },
                  { icon: ScrollText, label: "CSR-1 filing status with MCA" },
                  { icon: ClipboardList, label: "Governance, safeguarding and POSH policies" },
                ].map((d) => (
                  <li key={d.label} className="flex items-center gap-4 py-4">
                    <d.icon
                      className="h-5 w-5 text-primary shrink-0"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[0.98rem] text-ink/90">{d.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-mono tabular-nums text-ink-muted">
                Request the pack: <a className="underline" href="mailto:csr@omnilifecare.org">csr@omnilifecare.org</a> · response within one business day.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* The partner promise */}
      <section className="container-editorial py-20 lg:py-24">
        <FadeUp>
          <div className="eyebrow">The partner promise</div>
          <h2 className="display-md mt-3 text-balance max-w-3xl">
            Five things we will not do, even if the budget is large.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 max-w-4xl">
          {[
            {
              n: "01",
              title: "We will not invent numbers",
              body: "Baseline numbers are captured before activity begins. If we have not measured a thing, we will say so.",
            },
            {
              n: "02",
              title: "We will not stage photographs",
              body: "No arranged field visits for cameras. No posed beneficiaries. Story consent is written, and withdrawable.",
            },
            {
              n: "03",
              title: "We will not blend funds quietly",
              body: "Restricted CSR funds sit in a separate ledger line. You see what your rupees did, separately from every other donor's.",
            },
            {
              n: "04",
              title: "We will not chase scale before quality",
              body: "If a programme is not working at 200 beneficiaries, we will not take more money to take it to 2,000. We will fix it first.",
            },
            {
              n: "05",
              title: "We will not disappear after the cheque",
              body: "Project lead is reachable through the engagement, not just at reporting time. Escalation to a Board signatory is one email away.",
            },
          ].map((p, i) => (
            <FadeUp key={p.n} delay={i * 60}>
              <div>
                <div className="font-mono text-[11px] tabular-nums text-ink-muted">{p.n}</div>
                <h3 className="font-sans font-semibold text-lg mt-2 tracking-[-0.01em] text-balance">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-ink-muted text-pretty">
                  {p.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
            <div>
              <FadeUp>
                <div className="eyebrow">Start a conversation</div>
                <h2 className="display-md mt-3 text-balance">
                  Send a short note. A founding-team member replies within three working days.
                </h2>
              </FadeUp>
              <FadeUp delay={120}>
                <div className="mt-8 space-y-5">
                  <ContactRow
                    icon={Mail}
                    label="CSR & partnerships"
                    value="csr@omnilifecare.org"
                    href="mailto:csr@omnilifecare.org"
                  />
                  <ContactRow
                    icon={HandCoins}
                    label="Programme grants"
                    value="programmes@omnilifecare.org"
                    href="mailto:programmes@omnilifecare.org"
                  />
                  <ContactRow
                    icon={Phone}
                    label="Board Secretary (escalation)"
                    value="By email, within 24 hours"
                    href="mailto:board@omnilifecare.org"
                  />
                </div>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="mt-10 text-sm leading-[1.65] text-ink-muted text-pretty max-w-md">
                  Registered office in Mumbai. We meet partners in person across MMR, and over
                  video for teams based outside Maharashtra.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={160}>
              <CSRForm />
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="A founding partner has a different role"
        title="The first CSR partner doesn't just fund a programme. They shape how it gets built."
        body="If your CSR committee is willing to back substance over scale, we would like to hear from you this quarter."
        primary={{ label: "Write to CSR team", href: "mailto:csr@omnilifecare.org" }}
        secondary={{ label: "Read the Omni Care Model", href: "/about/omni-care-model" }}
      />
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
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

function CSRForm() {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const data = new FormData(e.currentTarget);
    const company = String(data.get("company") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const role = String(data.get("role") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const focus = String(data.get("focus") || "").trim();
    const msg = String(data.get("msg") || "").trim();
    const website = String(data.get("website") || "");
    if (!company || !contact || !email) {
      toast.error("Please complete company, your name and work email.");
      return;
    }
    setBusy(true);
    try {
      await submitForm({
        formName: "CSR enquiry",
        replyTo: email,
        website,
        fields: [
          { label: "Company", value: company },
          { label: "Contact", value: contact },
          { label: "Role", value: role || "—" },
          { label: "Email", value: email },
          { label: "Phone", value: phone || "—" },
          { label: "Programme focus", value: focus },
          { label: "Message", value: msg || "—" },
        ],
      });
      setSubmitted(true);
      toast.success("Enquiry sent. A founding-team member will reply within three working days.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Couldn't send. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage p-8 border border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04)]">
        <h3 className="font-sans font-semibold tracking-[-0.015em] text-2xl text-balance">
          Thank you. Note received.
        </h3>
        <p className="mt-3 text-ink-muted text-pretty">
          A founding-team member will reply within three working days. For urgent matters,
          write directly to{" "}
          <a className="underline" href="mailto:csr@omnilifecare.org">
            csr@omnilifecare.org
          </a>
          .
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_8px_24px_-16px_rgba(4, 55, 242,0.10)]"
      aria-label="CSR enquiry form"
    >
      <h3 className="font-sans font-semibold tracking-[-0.015em] text-2xl">
        Start an enquiry
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Six fields. Three minutes. A reply within three working days.
      </p>
      <div className="mt-6 grid gap-4">
        <Field id="company" label="Company name" required />
        <Field id="contact" label="Your name" required />
        <Field id="role" label="Your role" placeholder="e.g. Head of CSR, ESG Lead" />
        <Field id="email" label="Work email" type="email" required />
        <Field id="phone" label="Phone (optional)" />
        <div>
          <label htmlFor="focus" className="block text-sm font-semibold mb-1.5">
            Programme area of interest
          </label>
          <select
            id="focus"
            className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-primary outline-none transition-colors"
          >
            <option>Community Mental Health</option>
            <option>Preventive Health Outreach</option>
            <option>Women's Health & Life-Cycle Care</option>
            <option>Inclusive Care - Disability & Elderly</option>
            <option>Women's Wellness - Screening & PCOS</option>
            <option>Open to recommendation</option>
          </select>
        </div>
        <div>
          <label htmlFor="msg" className="block text-sm font-semibold mb-1.5">
            What is on your CSR committee's mind?
          </label>
          <textarea
            id="msg"
            rows={4}
            placeholder="Budget range, geography, reporting needs, anything we should know."
            className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-primary outline-none transition-colors"
          />
        </div>
        <label className="flex items-start gap-2 text-xs text-ink-muted">
          <input type="checkbox" required className="mt-1" />
          <span>
            I agree to be contacted about this enquiry under the{" "}
            <a className="underline" href="/privacy-policy">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <button
          type="submit"
          className="btn btn-primary active:scale-[0.98] transition-[transform,background-color] duration-150"
        >
          Send enquiry
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-primary outline-none transition-colors"
      />
    </div>
  );
}
