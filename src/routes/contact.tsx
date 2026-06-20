import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitForm, type FormField } from "@/lib/forms/submit";
import { SubmissionSummary } from "@/components/SubmissionSummary";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Omni Life Care Foundation" },
      { name: "description", content: "Get in touch - general enquiries, CSR partnerships, media, and government collaboration." },
      { property: "og:title", content: "Contact - Omni Life Care Foundation" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [summary, setSummary] = useState<FormField[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("cname") || "").trim();
    const email = String(data.get("cemail") || "").trim();
    const topic = String(data.get("ctopic") || "").trim();
    const message = String(data.get("cmsg") || "").trim();
    const website = String(data.get("website") || "");

    if (!name || !email || !message) {
      toast.error("Please complete name, email and message.");
      return;
    }

    const fields: FormField[] = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Topic", value: topic },
      { label: "Message", value: message },
    ];
    setBusy(true);
    try {
      await submitForm({
        formName: "Contact",
        replyTo: email,
        website,
        fields,
      });
      setSummary(fields);
      setSent(true);
      toast.success("Message sent. We'll be in touch within 3 business days.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Couldn't send. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch." lead="We respond to enquiries within 3 business days." />
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <aside className="space-y-6">
            <Block icon={MapPin} title="Head Office">
              {SITE.address}
            </Block>
            <Block icon={Mail} title="General">
              <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </Block>
            <Block icon={Mail} title="CSR partnerships">
              <a className="underline" href={`mailto:${SITE.csrEmail}`}>{SITE.csrEmail}</a>
            </Block>
            <Block icon={Mail} title="Media">
              <a className="underline" href={`mailto:${SITE.mediaEmail}`}>{SITE.mediaEmail}</a>
            </Block>
            <Block icon={Phone} title="Phone">{SITE.phone}</Block>
          </aside>

          {sent ? (
            <div className="rounded-2xl bg-sage p-8 border border-hairline shadow-[0_1px_2px_rgba(4,55,242,0.04)]">
              <p className="eyebrow mb-2">Message received</p>
              <h2 className="font-sans font-semibold tracking-[-0.015em] text-2xl text-balance">Thanks, {summary.find(f => f.label === "Name")?.value || "there"} - your message is in.</h2>
              <p className="mt-3 text-ink-muted text-pretty">We'll get back within 3 business days at <span className="text-ink font-medium">{summary.find(f => f.label === "Email")?.value}</span>. Here's a copy of what you sent:</p>
              <SubmissionSummary fields={summary} />
              <div className="mt-6">
                <Link to="/" className="btn btn-secondary">Back to home</Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-snow border border-hairline p-7 lg:p-10 shadow-[0_1px_2px_rgba(4,55,242,0.04),0_8px_24px_-16px_rgba(4,55,242,0.10)]"
              aria-label="Contact form"
            >
              <h2 className="font-sans font-semibold tracking-[-0.015em] text-2xl">Send us a message</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field id="cname" label="Your name" required />
                <Field id="cemail" label="Email" type="email" required />
                <div className="sm:col-span-2">
                  <label htmlFor="ctopic" className="block text-sm font-semibold mb-1.5">Topic</label>
                  <select id="ctopic" name="ctopic" className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4,55,242,0.04)] focus:border-primary outline-none transition-colors">
                    <option>General enquiry</option>
                    <option>CSR partnership</option>
                    <option>Media enquiry</option>
                    <option>Government / institutional</option>
                    <option>Research collaboration</option>
                    <option>Volunteering</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cmsg" className="block text-sm font-semibold mb-1.5">Message</label>
                  <textarea id="cmsg" name="cmsg" rows={5} required className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4,55,242,0.04)] focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              {/* honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <button type="submit" disabled={busy} className="btn btn-primary mt-6 disabled:opacity-60 disabled:cursor-not-allowed">
                {busy ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
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
      <input id={id} name={id} type={type} required={required} className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4,55,242,0.04)] focus:border-primary outline-none transition-colors" />
    </div>
  );
}

function Block({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 eyebrow mb-2">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        <span>{title}</span>
      </div>
      <div className="text-ink-muted">{children}</div>
    </div>
  );
}
