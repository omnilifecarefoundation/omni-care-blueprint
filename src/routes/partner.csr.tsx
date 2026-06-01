import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FileCheck2, ShieldCheck, Building2, Download } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/partner/csr")({
  head: () => ({
    meta: [
      { title: "CSR Partnership — Omni Life Care Foundation" },
      { name: "description", content: "Align your CSR with measurable, audit-ready community impact. Schedule VII aligned, CSR-1 certified." },
      { property: "og:title", content: "CSR Partnership — Omni Life Care Foundation" },
      { property: "og:url", content: "/partner/csr" },
    ],
    links: [{ rel: "canonical", href: "/partner/csr" }],
  }),
  component: Page,
});

const FOCUS = [
  { area: "Healthcare", entry: "Schedule VII (i)" },
  { area: "Education & Vocational Skills", entry: "Schedule VII (ii)" },
  { area: "Gender Equality & Women's Empowerment", entry: "Schedule VII (iii)" },
  { area: "Senior Citizen Welfare", entry: "Schedule VII (iii)" },
  { area: "Disability Inclusion", entry: "Schedule VII (ii)" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Corporate Partners"
        title="Align your CSR with measurable, audit-ready community impact."
        lead="We partner with corporates across sectors to design, deliver and report CSR programmes that meet your compliance requirements and create lasting community outcomes."
      />

      <section className="container-editorial py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          {[
            { icon: FileCheck2, title: "Schedule VII aligned", body: "Every programme maps to one or more Schedule VII areas under Section 135 of the Companies Act." },
            { icon: ShieldCheck, title: "Audit-ready reporting", body: "Quarterly MIS, impact dashboards, and third-party independent evaluation built into every engagement." },
            { icon: Building2, title: "End-to-end execution", body: "Co-designed programmes, on-ground delivery, government coordination, and statutory reporting." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
              <c.icon className="h-6 w-6 text-primary" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="font-serif text-xl mt-5 text-balance">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-muted text-pretty">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="display-md">Focus areas mapped to Schedule VII</h2>
            <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
              {FOCUS.map((f) => (
                <li key={f.area} className="flex justify-between items-center py-4">
                  <span className="font-serif text-lg">{f.area}</span>
                  <span className="font-mono text-xs tabular-nums text-ink-muted">{f.entry}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn btn-primary">
                <Download className="h-4 w-4" /> Download CSR Brochure (PDF)
              </button>
            </div>
            <p className="mt-6 text-xs text-ink-muted font-mono tabular-nums">
              CSR-1 Registration No: CSR00045678 · Section 135, Companies Act
            </p>
          </div>
          <CSRForm />
        </div>
      </section>
    </>
  );
}

function CSRForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage p-8 border border-hairline shadow-[0_1px_2px_rgba(28,0,96,0.04)]">
        <h3 className="font-serif text-2xl text-balance">Thank you.</h3>
        <p className="mt-3 text-ink-muted text-pretty">
          Our partnerships team will respond within 3 business days. For urgent
          enquiries, write to{" "}
          <a className="underline" href="mailto:csr@omnilifecare.org">csr@omnilifecare.org</a>.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="rounded-2xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.10)]"
      aria-label="CSR enquiry form"
    >
      <h3 className="font-serif text-2xl">Start an enquiry</h3>
      <p className="mt-2 text-sm text-ink-muted">We'll respond within 3 business days.</p>
      <div className="mt-6 grid gap-4">
        <Field id="company" label="Company name" required />
        <Field id="contact" label="Your name" required />
        <Field id="email" label="Work email" type="email" required />
        <Field id="phone" label="Phone (optional)" />
        <div>
          <label htmlFor="focus" className="block text-sm font-semibold mb-1.5">CSR focus area</label>
          <select id="focus" className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)] focus:border-primary outline-none transition-colors">
            <option>Healthcare</option>
            <option>Education & Skills</option>
            <option>Women's Empowerment</option>
            <option>Disability & Elderly</option>
            <option>Multiple / not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="msg" className="block text-sm font-semibold mb-1.5">Message</label>
          <textarea id="msg" rows={4} className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)] focus:border-primary outline-none transition-colors" />
        </div>
        <label className="flex items-start gap-2 text-xs text-ink-muted">
          <input type="checkbox" required className="mt-1" />
          <span>I agree to be contacted about this enquiry per the Privacy Policy.</span>
        </label>
        <button type="submit" className="btn btn-primary">Send enquiry</button>
      </div>
    </form>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
        {label}{required && <span className="text-coral"> *</span>}
      </label>
      <input id={id} type={type} required={required} className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)] focus:border-primary outline-none transition-colors" />
    </div>
  );
}
