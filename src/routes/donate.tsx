import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate - Fund the first 500 households in Mumbai" },
      { name: "description", content: "Your contribution funds the first cohort of low-income households in Mumbai's chawls - enrolled in FY 2026–27. Every rupee is published, audited, and accounted for at the household level." },
      { property: "og:title", content: "Donate - Fund the first 500 households in Mumbai" },
      { property: "og:description", content: "Your contribution funds the first cohort of low-income households in Mumbai's chawls - enrolled in FY 2026–27. Every rupee is published, audited, and accounted for at the household level." },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: Page,
});

// Honest unit costs framed against the FY 2026–27 Mumbai cohort.
// Each tier maps to a concrete, deliverable input - not an inflated "lives changed" claim.
const TIERS = [
  { amount: 1500, unit: "one household screening", detail: "PHQ-9, GAD-7, anaemia and BP screening for one household in a low-income chawl, with results returned within 14 days." },
  { amount: 5000, unit: "a full household file, opened and followed for 90 days", detail: "Intake, screening, referral to a municipal clinic or ASHA worker, and three follow-ups closed against the referral." },
  { amount: 25000, unit: "a community health worker, stipended for one month", detail: "Field stipend, training, transport and supervision for one CHW embedded with ASHA and municipal teams." },
  { amount: 150000, unit: "one chawl block, served for one quarter", detail: "Approximately 30 households enrolled, screened and tracked end-to-end for a full quarter - published in the public ledger." },
];

const TRUST = [
  { k: "Where it lands", v: "Every rupee is allocated against a numbered household file in the FY 2026–27 Mumbai cohort. No general fund, no opaque overheads." },
  { k: "Where it is published", v: "Cost-per-outcome posted on the first working day of each month. Quarterly community ledger published in full." },
  { k: "Who counts it", v: "Independent third-party audit at the end of every fiscal year, published here without summary or paraphrase." },
  { k: "What we will not do", v: "No round-number impact claims. No selective case studies. No press release before the work exists." },
];

function inr(n: number) {
  return n.toLocaleString("en-IN");
}

function Page() {
  const [amount, setAmount] = useState<number>(5000);
  const [custom, setCustom] = useState<string>("");
  const [freq, setFreq] = useState<"one" | "monthly">("one");

  const effective = useMemo(() => {
    const c = Number(custom.replace(/[^\d]/g, ""));
    return c > 0 ? c : amount;
  }, [amount, custom]);

  const matchedTier = useMemo(() => {
    // Pick the largest tier that fits within `effective` - the deliverable the donor's amount funds today.
    const fit = [...TIERS].reverse().find((t) => effective >= t.amount);
    return fit ?? null;
  }, [effective]);

  return (
    <>
      <PageHero
        eyebrow="Donate · FY 2026–27 cohort"
        title="Fund the first household. Not the thousandth."
        lead="A new foundation has no impact archive to sell you. It has a place to start - the low-income chawls of Mumbai - a fixed first cohort of 500 households, and a public ledger of every rupee. That is the offer."
      />

      {/* Donation form + live tier card */}
      <section className="bg-canvas">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Form */}
            <FadeUp>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Payment partner integration goes live with the FY 2026–27 cohort. Until then, please use the bank/UPI details below.");
                }}
                aria-label="Donation form"
                className="rounded-2xl bg-snow border border-hairline p-7 lg:p-10 shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_24px_60px_-36px_rgba(4, 55, 242,0.18)]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted">Choose an amount</span>
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted tabular-nums">INR · ₹</span>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIERS.map((t) => {
                    const active = effective === t.amount && !custom;
                    return (
                      <button
                        key={t.amount}
                        type="button"
                        onClick={() => { setAmount(t.amount); setCustom(""); }}
                        className={`group relative h-14 rounded-xl border text-base font-semibold tabular-nums transition-[background-color,border-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.96] ${
                          active
                            ? "bg-ink text-snow border-ink shadow-[0_1px_2px_rgba(4, 55, 242,0.10),0_10px_24px_-12px_rgba(4, 55, 242,0.35)]"
                            : "bg-canvas text-ink border-hairline hover:border-ink-muted hover:bg-snow"
                        }`}
                        aria-pressed={active}
                      >
                        ₹{inr(t.amount)}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <label htmlFor="custom" className="block text-sm font-semibold mb-1.5 text-ink">
                    Or enter an amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted font-semibold">₹</span>
                    <input
                      id="custom"
                      inputMode="numeric"
                      placeholder="Any amount from ₹500"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="w-full h-12 pl-8 pr-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-ink focus:bg-snow outline-none transition-[border-color,background-color] tabular-nums"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted">Frequency</span>
                  <div className="mt-3 inline-flex rounded-full border border-hairline p-1 bg-canvas">
                    {[
                      { v: "one", l: "One-time" },
                      { v: "monthly", l: "Monthly" },
                    ].map((o) => {
                      const active = freq === o.v;
                      return (
                        <button
                          key={o.v}
                          type="button"
                          onClick={() => setFreq(o.v as "one" | "monthly")}
                          className={`h-10 px-5 rounded-full text-sm font-semibold transition-[background-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.96] ${
                            active ? "bg-ink text-snow shadow-[0_1px_2px_rgba(4, 55, 242,0.08)]" : "text-ink-muted hover:text-ink"
                          }`}
                          aria-pressed={active}
                        >
                          {o.l}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Field id="name" label="Full name" required />
                  <Field id="email" label="Email (for receipt)" type="email" required />
                  <Field id="pan" label="PAN (for 80G receipt)" />
                  <Field id="phone" label="Phone" />
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full h-14 rounded-full bg-ink text-snow font-semibold text-base tracking-[-0.005em] transition-[background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-ink/90 active:scale-[0.985] shadow-[0_1px_2px_rgba(4, 55, 242,0.10),0_18px_40px_-18px_rgba(4, 55, 242,0.35)]"
                >
                  Continue · ₹<span className="tabular-nums">{inr(effective)}</span>
                  {freq === "monthly" ? " / month" : ""}
                </button>

                <p className="mt-4 text-xs text-ink-muted leading-relaxed">
                  Payment is handled by our PCI-compliant partner. We never store card details. Your contribution is allocated against the FY 2026–27 Mumbai cohort within seven working days; allocation entry is posted to the public ledger on the first of the following month.
                </p>
              </form>
            </FadeUp>

            {/* Live tier card */}
            <FadeUp delay={120}>
              <aside className="lg:sticky lg:top-24 space-y-5">
                <div className="rounded-2xl bg-ink text-snow p-7 lg:p-8 overflow-hidden relative shadow-[0_24px_60px_-30px_rgba(4, 55, 242,0.45)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 90% 0%, rgba(115,91,246,0.30), transparent 50%), radial-gradient(circle at 0% 100%, rgba(255,214,0,0.10), transparent 45%)",
                    }}
                  />
                  <div className="relative">
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-snow/70">Your ₹<span className="tabular-nums">{inr(effective)}</span>{freq === "monthly" ? " / month" : ""} funds</span>
                    <h3 className="mt-3 font-serif text-[1.75rem] leading-[1.15] tracking-[-0.015em] text-snow text-balance">
                      {matchedTier ? matchedTier.unit : "Part of one household screening"}
                    </h3>
                    <p className="mt-4 text-snow/80 text-[0.95rem] leading-relaxed text-pretty">
                      {matchedTier
                        ? matchedTier.detail
                        : "Even smaller contributions are pooled into household screenings - every paisa appears in the next monthly ledger entry."}
                    </p>
                    <div className="mt-6 pt-5 border-t border-snow/15 grid grid-cols-2 gap-4 text-[12px]">
                      <div>
                        <div className="font-mono uppercase tracking-[0.15em] text-snow/55">Cohort</div>
                        <div className="mt-1 text-snow tabular-nums">500 households</div>
                      </div>
                      <div>
                        <div className="font-mono uppercase tracking-[0.15em] text-snow/55">Site</div>
                        <div className="mt-1 text-snow">Mumbai · low-income chawls</div>
                      </div>
                      <div>
                        <div className="font-mono uppercase tracking-[0.15em] text-snow/55">Enrolment</div>
                        <div className="mt-1 text-snow">FY 2026–27</div>
                      </div>
                      <div>
                        <div className="font-mono uppercase tracking-[0.15em] text-snow/55">First ledger</div>
                        <div className="mt-1 text-snow">+90 days from launch</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-sage p-6 border border-hairline">
                  <h4 className="font-sans font-semibold text-base text-ink tracking-[-0.005em]">80G tax exemption</h4>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed text-pretty">
                    Application filed with the Income Tax Department. Receipts will be issued retrospectively to all donors upon approval. We will tell you the truth about timelines as we have them - not before.
                  </p>
                </div>
              </aside>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-snow border-y border-hairline">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Why this offer is unusual</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                Most NGOs sell you a number. We are selling you a receipt.
              </h2>
              <p className="mt-6 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                Round-number impact claims travel well. They also travel without evidence. Our promise is narrower and harder: every contribution is matched to a numbered household file, published on a fixed schedule, and audited annually by an outside firm.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <dl className="divide-y divide-hairline border-y border-hairline">
                {TRUST.map((t) => (
                  <div key={t.k} className="grid grid-cols-[140px_1fr] gap-6 py-6">
                    <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted pt-1">{t.k}</dt>
                    <dd className="text-ink leading-relaxed">{t.v}</dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Other ways to give */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Other ways to give</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink max-w-[24ch]">
              Three doors. Same ledger.
            </h2>
          </FadeUp>

          <div className="mt-12 grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {[
              {
                k: "Bank transfer / NEFT",
                t: "For larger contributions",
                lines: ["Account name · Omni Life Care Foundation", "Account no. · published on request", "IFSC · published on request"],
                cta: { label: "Request bank details", href: "mailto:give@omnilifecare.org?subject=Bank%20transfer%20details" },
              },
              {
                k: "CSR partnerships",
                t: "For companies & foundations",
                lines: ["Concept notes, due-diligence pack, and an MoU template are available on request. We co-design programmes against your impact thesis - not the other way round."],
                cta: { label: "Open a CSR conversation", href: "/get-involved" },
              },
              {
                k: "Stand with us in kind",
                t: "Time, skills, equipment",
                lines: ["Pro-bono research design, clinical supervision, translation, transport, and field equipment are all in scope. Volunteering is structured, not symbolic."],
                cta: { label: "Volunteer with us", href: "/get-involved" },
              },
            ].map((c, i) => (
              <FadeUp key={c.k} delay={i * 0.06}>
                <article className="bg-snow p-8 lg:p-10 h-full flex flex-col">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">{c.k}</span>
                  <h3 className="mt-3 font-serif text-2xl tracking-[-0.015em] text-ink">{c.t}</h3>
                  <ul className="mt-4 space-y-2 text-ink-muted text-[0.95rem] leading-relaxed">
                    {c.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  {c.cta.href.startsWith("/") ? (
                    <Link
                      to={c.cta.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                    >
                      {c.cta.label} <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <a
                      href={c.cta.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                    >
                      {c.cta.label} <span aria-hidden>→</span>
                    </a>
                  )}
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="The first cohort"
        title="The first 500 household files will be opened this year. Be on the list of names that made them possible."
        body="One contribution, one ledger entry, one auditable line. That is the deal. There is no other deal."
        primary={{ label: "Talk to the founders", href: "mailto:give@omnilifecare.org" }}
        secondary={{ label: "Read where we start", href: "/impact" }}
      />
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5 text-ink">
        {label}
        {required && <span className="text-gold" aria-hidden> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={id === "name" ? "name" : id === "email" ? "email" : id === "phone" ? "tel" : "off"}
        className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-ink focus:bg-snow outline-none transition-[border-color,background-color] duration-200"
      />
    </div>
  );
}
