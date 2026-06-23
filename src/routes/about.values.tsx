import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FadeUp } from "@/components/FadeUp";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const VALUES = [
  {
    n: "01",
    title: "Community First",
    body: "Programmes are shaped with the people they serve, not designed at a distance and delivered to them.",
    practice:
      "Programme design begins with conversations with community members, frontline workers and local partners. Decisions about what to build, where to begin, and how to measure success are made with their input.",
  },
  {
    n: "02",
    title: "Inclusion",
    body: "We start with the people most often left out: women, the elderly, persons with disability, and underserved communities.",
    practice:
      "Inclusion is built into who we hire, who we partner with, and which households we design around. We track participation by gender, age, and ability so that the people most overlooked are not the ones our work overlooks too.",
  },
  {
    n: "03",
    title: "Transparency",
    body: "We are committed to sharing our progress, learnings and impact as the foundation grows.",
    practice:
      "Annual reports, audited accounts, and updates on what is working - and what we are still learning - will be published openly each year. Our governance structure is designed to make honest reporting possible.",
  },
  {
    n: "04",
    title: "Accountability",
    body: "Independent governance, annual audits, and a board willing to be measured against its own rules.",
    practice:
      "Our board includes independent members with no financial stake in the foundation. Conflicts of interest are declared in writing. Audited accounts are reviewed by the board in full session each year.",
  },
  {
    n: "05",
    title: "Sustainable Impact",
    body: "We invest in local capability so that change continues long after any single programme ends.",
    practice:
      "We partner with existing community structures rather than replacing them. We invest in training, mentoring and partnerships that build long-term capability inside the communities we serve.",
  },
];


const LINKS = [
  { href: "/about/vision-mission", label: "Vision & Mission" },
  { href: "/about/leadership", label: "Leadership & Governance" },
  { href: "/about/compliance", label: "Compliance & Registrations" },
];

export const Route = createFileRoute("/about/values")({
  head: () => ({
    meta: [
      { title: "Our Values - Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "Dignity, inclusion, community-centred design, collaboration, and sustainable impact - the operational commitments that guide every programme, partnership, and budget decision.",
      },
      { property: "og:title", content: "Our Values - Omni Life Care Foundation" },
      { property: "og:url", content: "/about/values" },
    ],
    links: [{ rel: "canonical", href: "/about/values" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Five operational commitments. Not five posters on a wall."
        lead="Values are tested in budgets, hiring decisions, audit findings, and the conversations no donor sees. These are the five we publish - because you should know what we are held to before you trust us with a rupee."
      />

      {/* Manifesto */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <FadeUp>
            <blockquote className="max-w-4xl">
              <p
                className="font-sans font-semibold text-ink text-balance leading-[1.18]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                The difference between an NGO you remember and one you forget is not the size of its values list. It is the willingness to publish the moments when those values cost money, time, or pride.
              </p>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* Values list */}
      <section className="container-editorial py-20 lg:py-28">
        <div className="flex items-center gap-2 mb-10 lg:mb-14">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="eyebrow">The commitments</span>
        </div>

        <div className="space-y-0">
          {VALUES.map((v, i) => (
            <FadeUp key={v.n} delay={i * 80}>
              <article className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-12 border-t border-hairline first:border-t-0">
                <div className="lg:col-span-2">
                  <span className="font-sans text-sm tabular-nums tracking-[0.12em] text-ink-muted transition-colors duration-200 ease-out group-hover:text-gold">
                    {v.n}
                  </span>
                </div>

                <div className="lg:col-span-7">
                  <h2 className="font-sans font-semibold tracking-[-0.02em] text-2xl md:text-3xl text-ink text-balance leading-[1.15]">
                    {v.title}
                  </h2>
                  <p className="mt-4 text-ink-muted text-pretty leading-relaxed max-w-2xl">
                    {v.body}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <div className="rounded-xl bg-snow border border-hairline p-5 lg:p-6 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)]">
                    <div className="eyebrow text-[11px] mb-3">In practice</div>
                    <p className="text-sm text-ink-muted text-pretty leading-relaxed">
                      {v.practice}
                    </p>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* How we are held to them */}
      <section className="bg-canvas border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="eyebrow">Accountability</span>
              </div>
              <h2 className="font-sans font-semibold tracking-[-0.025em] text-3xl md:text-4xl text-ink text-balance leading-[1.1]">
                How we are{" "}
                <em className="font-serif italic font-medium text-primary">
                  held to these values.
                </em>
              </h2>
              <p className="mt-5 text-ink-muted text-pretty leading-relaxed">
                Values without consequences are marketing. Here is how ours show up in governance you can inspect.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <FadeUp delay={80}>
                <div className="grid md:grid-cols-[3rem_1fr] gap-4 md:gap-6">
                  <span className="font-sans text-sm tabular-nums tracking-[0.12em] text-ink-muted pt-1">01</span>
                  <div>
                    <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-ink text-balance">
                      Independent board review
                    </h3>
                    <p className="mt-2 text-ink-muted text-pretty leading-relaxed">
                      Our board includes independent members with no financial stake in the foundation. They review programme outcomes quarterly and have the authority to pause funding to any project that violates a published value.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <div className="border-t border-hairline pt-6">
                <FadeUp delay={120}>
                  <div className="grid md:grid-cols-[3rem_1fr] gap-4 md:gap-6">
                    <span className="font-sans text-sm tabular-nums tracking-[0.12em] text-ink-muted pt-1">02</span>
                    <div>
                      <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-ink text-balance">
                        Public annual reports
                      </h3>
                      <p className="mt-2 text-ink-muted text-pretty leading-relaxed">
                        Every rupee, every outcome, every departure from plan. Our annual reports are published on the website before they are presented to donors. No curated deck. No omitted quarters.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

              <div className="border-t border-hairline pt-6">
                <FadeUp delay={160}>
                  <div className="grid md:grid-cols-[3rem_1fr] gap-4 md:gap-6">
                    <span className="font-sans text-sm tabular-nums tracking-[0.12em] text-ink-muted pt-1">03</span>
                    <div>
                      <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-ink text-balance">
                        Community redress mechanism
                      </h3>
                      <p className="mt-2 text-ink-muted text-pretty leading-relaxed">
                        Any community member can raise a concern about staff behaviour, programme design, or resource use through a toll-free line and a local-language web form. The board reviews every complaint at its next sitting.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="container-editorial py-20 lg:py-24">
        <div className="flex items-center gap-2 mb-10">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="eyebrow">Explore</span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="group relative rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(4, 55, 242,0.04)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(4, 55, 242,0.04),0_14px_28px_-18px_rgba(4, 55, 242,0.22)]"
            >
              <div className="flex items-center justify-between mb-5">
                <ArrowUpRight className="h-4 w-4 text-ink-muted transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <h3 className="font-sans font-semibold tracking-[-0.01em] text-xl text-ink text-balance">
                {l.label}
              </h3>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Get Involved"
        title="If these values match how you work, we should talk."
        body="Whether you are a funder, a partner, or a practitioner - we are always looking for people who believe values are measured in actions, not words."
        primary={{ label: "Partner with Us", href: "/partner/csr" }}
        secondary={{ label: "View Open Roles", href: "/about/careers" }}
      />
    </>
  );
}
