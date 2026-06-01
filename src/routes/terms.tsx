import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { Globe, Copyright, Scale, AlertTriangle, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Written in plain language" },
      { name: "description", content: "Terms and conditions for using the Omni Life Care Foundation website. Written in plain language, not legal code." },
      { property: "og:title", content: "Terms of Use — Written in plain language" },
      { property: "og:description", content: "Terms and conditions for using the Omni Life Care Foundation website. Written in plain language, not legal code." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Page,
});

const COMMITMENTS = [
  {
    icon: Globe,
    title: "Use the site lawfully",
    body: "By using this website, you agree to use it for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site. This includes respect for others, accuracy in the information you provide, and refraining from any activity that could harm the site or its users.",
  },
  {
    icon: Copyright,
    title: "Content is ours. Attribution is yours.",
    body: "All content on this site — text, images, programme descriptions, and research — is owned by Omni Life Care Foundation unless otherwise indicated. You may share, quote, and cite it freely, provided you include attribution and a link back to the source page. Commercial reproduction requires written permission.",
  },
  {
    icon: Scale,
    title: "Donations are binding. Refunds are fair.",
    body: "When you make a donation, you enter into a simple agreement: we promise to use your contribution for the purpose stated at the point of donation, and we promise to report on its use. If you donated in error, our Donation Policy governs refunds — no questions asked within seven days.",
  },
  {
    icon: AlertTriangle,
    title: "We are honest about what we cannot promise",
    body: "This website is provided as-is, without warranties of any kind. We do our best to keep information accurate and up to date, but we cannot guarantee that every page is error-free at all times. We are not liable for indirect, incidental, or consequential damages arising from your use of the site.",
  },
  {
    icon: RefreshCw,
    title: "Terms change. You will know.",
    body: "We may update these terms as our programmes, website, and legal obligations evolve. Material changes will be posted here with a revised date at the bottom of the page. Continued use of the site after changes means you accept the updated terms.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Use"
        title="A contract should be readable by the person it binds."
        lead="Most terms of use are written to protect lawyers. We have written this one to protect you — and us — in language a fourteen-year-old can understand."
      />

      {/* Five commitments */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Five rules</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink max-w-[26ch] text-balance">
              What using this site means, in plain language.
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

      {/* Third-party links */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">External links</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                We do not control what we do not build.
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="space-y-4 text-ink-muted leading-relaxed text-pretty">
                <p>
                  This website contains links to third-party websites and resources — payment processors, government portals, research databases, and partner organisations. These links are provided for your convenience and information.
                </p>
                <p>
                  We do not endorse, control, or assume responsibility for the content, privacy practices, or terms of any third-party site. When you leave our website, the terms and policies of the destination site apply. We encourage you to read them before you proceed.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Limitation of liability */}
      <section className="bg-snow">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">What we cannot promise</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
                We are a small team. We try hard. We are not perfect.
              </h2>
              <p className="mt-6 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                To the fullest extent permitted by Indian law, Omni Life Care Foundation and its trustees, staff, and volunteers are not liable for any loss or damage — direct or indirect — arising from your use of this website or reliance on any information published here.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <ol className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Accuracy, not infallibility",
                    body: "We verify every statistic, programme detail, and financial figure before publication. But organisations grow, data updates, and errors slip through. If you spot something wrong, tell us — we will fix it within 48 hours.",
                  },
                  {
                    step: "02",
                    title: "No medical advice",
                    body: "Programme descriptions on this site are informational, not diagnostic. If you or someone you know needs mental health or medical support, contact a qualified professional or a government helpline immediately.",
                  },
                  {
                    step: "03",
                    title: "Site availability",
                    body: "We host this website on reliable infrastructure, but downtime, maintenance, and force majeure events happen. We are not liable if the site is temporarily unavailable.",
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

      {/* Governing law & changes */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <FadeUp>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Governing law</p>
              <h2 className="mt-4 font-sans font-semibold text-2xl md:text-3xl tracking-[-0.015em] text-ink text-balance leading-[1.1]">
                Mumbai jurisdiction. Indian law.
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                These terms are governed by the laws of India. Any dispute arising from your use of this website shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Policy version</p>
              <h2 className="mt-4 font-sans font-semibold text-2xl md:text-3xl tracking-[-0.015em] text-ink text-balance leading-[1.1]">
                If we change the rules, we tell you first.
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink-muted leading-relaxed text-pretty">
                Material changes to these terms will be posted on this page with a revised effective date. For significant changes, we will also notify active donors and volunteers by email 14 days in advance. The current version is always the one published here.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-sage">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">Questions or concerns</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-[-0.02em] text-ink text-balance leading-[1.05]">
              There is always a human at the other end.
            </h2>
          </FadeUp>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Legal & compliance", email: "legal@omnilifecare.org", desc: "Terms questions, copyright, dispute resolution" },
              { label: "Privacy & data", email: "privacy@omnilifecare.org", desc: "Data access, correction, deletion requests" },
              { label: "General enquiries", email: "hello@omnilifecare.org", desc: "Anything else — routed within one working day" },
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
                <strong className="text-ink">Effective date.</strong>{" "}
                These terms are effective as of 1 June 2026. They replace all previous versions. The current version is always published at this URL.
              </p>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                If you are not satisfied with how a concern is handled, you may escalate to the Board Secretary at{" "}
                <a
                  href="mailto:secretary@omnilifecare.org"
                  className="text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-[text-decoration-color] duration-200"
                >
                  secretary@omnilifecare.org
                </a>
                . We are committed to resolving every issue in good faith.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand
        eyebrow="Trust is built here"
        title="A terms page is a promise. We keep ours in plain sight."
        body="Read it, question it, and then — if it holds up — explore what we are building."
        primary={{ label: "Make a donation", href: "/donate" }}
        secondary={{ label: "Contact the team", href: "/contact" }}
      />
    </>
  );
}
