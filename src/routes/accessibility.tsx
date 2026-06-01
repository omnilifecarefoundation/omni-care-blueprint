import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import { SITE } from "@/lib/site";
import { Keyboard, Eye, MonitorPlay, Volume2, HeartHandshake, AlertCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Omni Life Care Foundation" },
      { name: "description", content: "How we make this site usable for everyone, and what we are still learning." },
      { property: "og:title", content: "Accessibility — Omni Life Care Foundation" },
      { property: "og:description", content: "How we make this site usable for everyone, and what we are still learning." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Page,
});

const STANDARDS = [
  {
    icon: MonitorPlay,
    title: "Semantic structure",
    body: "We build with native HTML landmarks — nav, main, section, article — so screen readers and keyboard users can navigate by meaning, not just visual position.",
  },
  {
    icon: Eye,
    title: "Colour contrast",
    body: "Body text and interactive elements meet WCAG 2.2 AA contrast ratios. We do not rely on colour alone to signal state, error, or importance.",
  },
  {
    icon: Keyboard,
    title: "Keyboard navigation",
    body: "Every interactive element — links, buttons, forms, dropdowns — is reachable and operable with a keyboard alone. Tab order follows the visual flow.",
  },
  {
    icon: Volume2,
    title: "Screen-reader friendly",
    body: "Images carry descriptive alt text. Icons and decorative elements are marked aria-hidden. Form labels are always programmatically associated.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for motion preference",
    body: "If your system is set to reduce motion, our fade-up animations and marquee effects switch off automatically. No extra steps needed.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility is not a checklist. It is a discipline."
        lead="We design this site the way we design our programmes: around the person who has been left out before."
      />

      {/* Standards grid — secondary cards on bg-canvas */}
      <section className="bg-canvas">
        <div className="container-editorial py-16 lg:py-24">
          <FadeUp>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <h2 className="display-md text-balance">What we commit to now</h2>
              <p className="lead mt-4 text-pretty">
                These are not aspirations. They are build rules. Our frontend is reviewed against them before every deploy.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STANDARDS.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage text-primary">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-sans font-semibold text-lg tracking-[-0.01em] text-ink">{s.title}</h3>
                  </div>
                  <p className="text-ink-muted leading-relaxed text-pretty">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Honest editorial — bg-sage */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <FadeUp>
              <h2 className="display-md text-balance">What we are still learning</h2>
            </FadeUp>
            <FadeUp delay={80}>
              <div className="space-y-5 text-ink-muted leading-relaxed text-pretty">
                <p>
                  We are a new foundation, and this website is young. We have not yet commissioned a third-party accessibility audit, and we know that automated tools catch only a fraction of real-world barriers.
                </p>
                <p>
                  If you use assistive technology and something does not work the way it should, we want to know before our next deploy. Your report will be treated as a programme-critical bug, not a support ticket.
                </p>
                <p>
                  We aim to publish our first independent accessibility summary by Q3 FY 2026–27, alongside our first annual compliance report.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Reporting — bg-canvas */}
      <section className="bg-canvas">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <FadeUp>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-snow px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Report an issue
                </div>
                <h2 className="display-md text-balance">Tell us what is in the way.</h2>
                <p className="lead text-pretty">
                  The fastest way to help us fix something is to describe what you were trying to do, what you expected, and what happened instead. Screenshots and screen-reader logs are welcome.
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=Accessibility%20issue%20on%20omnilifecare.org`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SITE.email}
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={80}>
              <div className="rounded-2xl bg-snow border border-hairline p-7 lg:p-10 shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.12)]">
                <h3 className="font-sans font-semibold text-xl tracking-[-0.01em] text-ink mb-6">Useful tools</h3>
                <dl className="space-y-5">
                  <div>
                    <dt className="font-semibold text-ink text-sm">NVDA (Windows)</dt>
                    <dd className="text-ink-muted text-sm mt-1">Free, open-source screen reader. <a className="underline text-primary" href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer">nvaccess.org</a></dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink text-sm">VoiceOver (macOS / iOS)</dt>
                    <dd className="text-ink-muted text-sm mt-1">Built into every Apple device. Press Cmd + F5 to start on Mac.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink text-sm">TalkBack (Android)</dt>
                    <dd className="text-ink-muted text-sm mt-1">Built into Android. Enable it in Settings &gt; Accessibility.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink text-sm">Browser zoom</dt>
                    <dd className="text-ink-muted text-sm mt-1">This site reflows correctly up to 400% zoom on desktop and mobile.</dd>
                  </div>
                </dl>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Get in touch"
        title="Accessibility is a conversation, not a certificate."
        body="If this site failed you in any way, we owe you a fix and an explanation. Reach out — we read every message."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read our privacy policy", href: "/privacy-policy" }}
      />
    </>
  );
}
