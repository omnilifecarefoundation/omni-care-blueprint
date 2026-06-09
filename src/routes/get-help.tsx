import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, HandHeart, Users, Compass, Phone, Mail } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { PillButton } from "@/components/ui-axion/PillButton";
import { DestinationCard } from "@/components/ui/card-21";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/get-help")({
  head: () => ({
    meta: [
      { title: "Get Help - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Tell us a little about what you're looking for - mental health, elder care, community support, or care navigation - and our team will reach back within two working days.",
      },
      { property: "og:title", content: "Get Help - Omni Life Care Foundation" },
      {
        property: "og:description",
        content:
          "Care guidance for individuals, families and caregivers in Mumbai. Start with a conversation.",
      },
    ],
  }),
  component: GetHelpPage,
});

const TOPICS = [
  {
    slug: "mental-health",
    name: "Mental Health",
    body: "Counselling, emotional support, and referrals.",
    Icon: Brain,
    tint: "var(--pillar-mental)",
    themeColor: "232 97% 49%", // brand blue for legibility on yellow pillar
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "elder-care",
    name: "Elder Care",
    body: "Support for ageing adults and caregivers.",
    Icon: HandHeart,
    tint: "var(--pillar-inclusive)",
    themeColor: "333 84% 47%",
    image:
      "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "community-support",
    name: "Community Support",
    body: "Local resources, outreach, and assistance.",
    Icon: Users,
    tint: "var(--pillar-social)",
    themeColor: "247 91% 66%",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "care-navigation",
    name: "Care Navigation",
    body: "Help finding the right services and next steps.",
    Icon: Compass,
    tint: "var(--pillar-human)",
    themeColor: "232 97% 49%",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
  },
];

function GetHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-snow overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(115,91,246,0.30), transparent 45%), radial-gradient(circle at 88% 80%, rgba(255,214,0,0.10), transparent 40%)",
          }}
        />
        <div className="container-editorial relative pt-14 pb-16 lg:pt-20 lg:pb-20">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="text-[12px] uppercase tracking-[0.18em] text-snow/60 mb-6">
              <Link to="/" className="hover:text-snow">Home</Link>
              <span className="px-2">/</span>
              <span className="text-snow/85">Get Help</span>
            </nav>
          </FadeUp>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <FadeUp className="lg:col-span-8" delay={60}>
              <h1 className="font-sans font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-snow text-balance">
                Tell us what you're looking for.{" "}
                <em className="font-serif italic font-medium text-gold">We'll take it from there.</em>
              </h1>
            </FadeUp>
            <FadeUp className="lg:col-span-4" delay={140}>
              <p className="text-[15px] leading-relaxed text-snow/75 text-pretty">
                You don't need a diagnosis, a referral, or the right words.
                One short note is enough for our team to reach back within
                two working days.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-canvas border-b border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <p className="eyebrow mb-4">Pick what's closest</p>
            <h2 className="font-sans font-semibold text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance max-w-2xl">
              Four ways we can help.{" "}
              <em className="font-serif italic font-medium">Not sure? Any of them is fine.</em>
            </h2>
          </FadeUp>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {TOPICS.map((t, i) => (
              <FadeUp key={t.slug} delay={i * 70} as="li">
                <div id={t.slug} className="h-full scroll-mt-24">
                  <DestinationCard
                    imageUrl={t.image}
                    location={t.name}
                    stats={t.body}
                    href={`/get-help/${t.slug}`}
                    themeColor={t.themeColor}
                    ctaLabel="Explore"
                  />
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* Intake */}
      <section id="intake" className="bg-snow border-b border-hairline scroll-mt-24">
        <div className="container-editorial py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <FadeUp className="lg:col-span-5">
              <p className="eyebrow mb-4">Start a conversation</p>
              <h2 className="font-sans font-semibold text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                One short note.{" "}
                <em className="font-serif italic font-medium">A real person reads it.</em>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted text-pretty">
                Anything you share here stays with our care team. We reach
                back within two working days - usually sooner.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-canvas p-4 hover:border-ink/20 transition-colors"
                >
                  <Phone size={16} className="text-primary" aria-hidden="true" />
                  <span className="text-[14px] text-ink">{SITE.phone}</span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-canvas p-4 hover:border-ink/20 transition-colors"
                >
                  <Mail size={16} className="text-primary" aria-hidden="true" />
                  <span className="text-[14px] text-ink">{SITE.email}</span>
                </a>
              </div>
            </FadeUp>

            <FadeUp className="lg:col-span-7" delay={80}>
              <form
                action={`mailto:${SITE.email}`}
                method="post"
                encType="text/plain"
                className="rounded-2xl bg-canvas border border-hairline p-6 lg:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-[12px] uppercase tracking-[0.12em] text-ink-muted mb-2">Your name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full h-11 px-4 rounded-lg border border-hairline bg-snow text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-[12px] uppercase tracking-[0.12em] text-ink-muted mb-2">Phone or email</span>
                    <input
                      type="text"
                      name="contact"
                      required
                      className="w-full h-11 px-4 rounded-lg border border-hairline bg-snow text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="block text-[12px] uppercase tracking-[0.12em] text-ink-muted mb-2">What kind of help?</span>
                  <select
                    name="topic"
                    defaultValue=""
                    className="w-full h-11 px-4 rounded-lg border border-hairline bg-snow text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
                  >
                    <option value="" disabled>Choose one (or leave blank)</option>
                    {TOPICS.map((t) => (
                      <option key={t.slug} value={t.name}>{t.name}</option>
                    ))}
                    <option value="not-sure">I'm not sure</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block text-[12px] uppercase tracking-[0.12em] text-ink-muted mb-2">A few words about what's going on</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-hairline bg-snow text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 resize-y"
                  />
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <PillButton type="submit" variant="action">Send to our team</PillButton>
                  <p className="text-[12.5px] text-ink-muted">
                    We reply within two working days. In a medical emergency, please call 108.
                  </p>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
