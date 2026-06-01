import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";

const AMOUNTS = ["1000", "2500", "5000", "10000"];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Omni Life Care Foundation" },
      { name: "description", content: "Support community health and wellbeing across India. All donations are 80G tax-exempt." },
      { property: "og:title", content: "Donate — Omni Life Care Foundation" },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: Page,
});

function Page() {
  const [amount, setAmount] = useState("2500");
  const [freq, setFreq] = useState<"one" | "monthly">("one");
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support community health, with full tax exemption."
        lead="All contributions are 80G tax-exempt under the Income Tax Act. You'll receive an automated tax receipt within 24 hours."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Payment integration ships in Phase 2."); }}
            className="rounded-2xl bg-snow border border-hairline p-7 lg:p-10 shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.10)]"
            aria-label="Donation form"
          >
            <div className="eyebrow mb-3">Make a contribution</div>
            <h2 className="display-md">Choose an amount</h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAmount(a)}
                  className={`h-12 px-5 rounded-full border text-base font-semibold tabular-nums transition-[background-color,border-color,color] ${
                    amount === a ? "bg-primary text-primary-foreground border-primary" : "bg-canvas border-hairline hover:border-ink-muted"
                  }`}
                >
                  ₹{Number(a).toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label htmlFor="custom" className="block text-sm font-semibold mb-1.5">Or enter an amount (₹)</label>
              <input
                id="custom"
                type="number"
                min="100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)] focus:border-primary outline-none transition-colors tabular-nums"
              />
            </div>

            <div className="mt-8">
              <div className="eyebrow mb-3">Frequency</div>
              <div className="flex gap-2">
                {[
                  { v: "one", l: "One-time" },
                  { v: "monthly", l: "Monthly" },
                ].map((o) => (
                  <button
                    key={o.v}
                    type="button"
                    onClick={() => setFreq(o.v as "one" | "monthly")}
                    className={`h-12 px-5 rounded-full border text-sm font-semibold transition-[background-color,border-color,color] ${
                      freq === o.v ? "bg-primary text-primary-foreground border-primary" : "bg-canvas border-hairline hover:border-ink-muted"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Field id="name" label="Full name" required />
              <Field id="email" label="Email (for receipt)" type="email" required />
              <Field id="pan" label="PAN (for 80G receipt)" />
              <Field id="phone" label="Phone" />
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-full mt-8">
              Continue — ₹{Number(amount || 0).toLocaleString("en-IN")} {freq === "monthly" ? "/ month" : ""}
            </button>
            <p className="mt-4 text-xs text-ink-muted">
              You'll be redirected to our secure payment partner. We never store card details on our servers.
            </p>
          </form>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-sage p-6 border border-hairline shadow-[0_1px_2px_rgba(28,0,96,0.04)]">
              <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-balance">Where your contribution goes</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted text-pretty">
                <li>· ₹1,000 — one month of group support for a participant in the Community Mental Health programme.</li>
                <li>· ₹5,000 — a full preventive health screening day for 25 villagers.</li>
                <li>· ₹25,000 — training stipend for one community health worker for a full quarter.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-snow p-6 border border-hairline shadow-[0_1px_2px_rgba(28,0,96,0.04)]">
              <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-balance">Tax exemption</h3>
              <p className="mt-2 text-sm text-ink-muted text-pretty">
                Donations are eligible for 50% tax deduction under Section 80G of
                the Income Tax Act. Registration number{" "}
                <span className="font-mono tabular-nums">80G/2024/0042</span>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
        {label}{required && <span className="text-gold"> *</span>}
      </label>
      <input id={id} type={type} required={required} className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)] focus:border-primary outline-none transition-colors" />
    </div>
  );
}
