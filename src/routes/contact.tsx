import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

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
            <div className="rounded-2xl bg-sage p-8 border border-hairline shadow-[0_1px_2px_rgba(4, 55, 242,0.04)]">
              <h2 className="font-sans font-semibold tracking-[-0.015em] text-2xl text-balance">Thanks - your message is in.</h2>
              <p className="mt-3 text-ink-muted text-pretty">We'll get back within 3 business days.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl bg-snow border border-hairline p-7 lg:p-10 shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_8px_24px_-16px_rgba(4, 55, 242,0.10)]"
              aria-label="Contact form"
            >
              <h2 className="font-sans font-semibold tracking-[-0.015em] text-2xl">Send us a message</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field id="cname" label="Your name" required />
                <Field id="cemail" label="Email" type="email" required />
                <div className="sm:col-span-2">
                  <label htmlFor="ctopic" className="block text-sm font-semibold mb-1.5">Topic</label>
                  <select id="ctopic" className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-primary outline-none transition-colors">
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
                  <textarea id="cmsg" rows={5} required className="w-full px-4 py-3 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-6">Send message</button>
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
      <input id={id} type={type} required={required} className="w-full h-12 px-4 rounded-xl bg-canvas border border-hairline shadow-[inset_0_1px_2px_rgba(4, 55, 242,0.04)] focus:border-primary outline-none transition-colors" />
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
