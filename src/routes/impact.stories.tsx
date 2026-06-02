import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeUp } from "@/components/FadeUp";
import { CTABand } from "@/components/CTABand";
import {
  ShieldCheck,
  Eye,
  PenLine,
  Image as ImageIcon,
  Undo2,
  Scale,
  Mic,
  NotebookPen,
  Calendar,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/impact/stories")({
  head: () => ({
    meta: [
      { title: "Stories - Told with Consent, or Not at All | Omni Life Care Foundation" },
      {
        name: "description",
        content:
          "We are a new foundation. We have no field stories to share yet. When we do, they will be told with written consent, in the first person, and never to flatter a donor.",
      },
      { property: "og:title", content: "Stories - Told with consent, or not at all" },
      { property: "og:url", content: "/impact/stories" },
    ],
    links: [{ rel: "canonical", href: "/impact/stories" }],
  }),
  component: Page,
});

// The storytelling promise - six rules that bind us before the first story is told.
const PROMISE = [
  {
    n: "01",
    icon: PenLine,
    label: "Written consent, every time",
    detail:
      "No photograph, name, or quote appears on this site without a signed consent form - in the language the person speaks, read aloud where literacy is a barrier.",
  },
  {
    n: "02",
    icon: Mic,
    label: "First person, not third",
    detail:
      "Stories are told in the words of the person living them. We translate; we do not rewrite. Edits are shown to the person before publishing.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    label: "Dignity over drama",
    detail:
      "No before-and-after poverty porn. No tears for the camera. Care is the story; pity is not.",
  },
  {
    n: "04",
    icon: Undo2,
    label: "The right to withdraw",
    detail:
      "Anyone featured may ask us to remove their story at any time, for any reason. We take it down within seven days. No questions, no negotiation.",
  },
  {
    n: "05",
    icon: Eye,
    label: "Anonymity is the default for sensitive cases",
    detail:
      "For mental health, gender-based violence, or anything that could expose someone to harm, we change names, blur faces, and omit the village.",
  },
  {
    n: "06",
    icon: Scale,
    label: "No story without the numbers",
    detail:
      "Every story is paired with the cohort it belongs to - how many households, what was measured, what did not work. One person's experience is not a programme outcome.",
  },
];

// What we are listening for - the seeds of future stories, by pillar.
const LISTENING = [
  {
    pillar: "Mental Wellbeing",
    seed: "The first person who attends a peer-support group for twelve consecutive weeks.",
  },
  {
    pillar: "Inclusive Care",
    seed: "The first elder whose chronic-care plan keeps them at home for a full year.",
  },
  {
    pillar: "Social Growth",
    seed: "The first scholarship recipient who walks into a paid placement.",
  },
  {
    pillar: "Human Potential",
    seed: "The first community health worker we recruit, train, and place - in her own words.",
  },
];

// How a story moves from a conversation in the field to a page on this site.
const PROCESS = [
  {
    n: "01",
    icon: NotebookPen,
    label: "Conversation",
    detail:
      "A field worker the person already knows asks if they would like to share their experience. No clipboards, no recording on the first visit.",
  },
  {
    n: "02",
    icon: PenLine,
    label: "Consent",
    detail:
      "A second visit, in their home or a private space. Consent form read aloud. Scope agreed - what may be shared, what may not, for how long.",
  },
  {
    n: "03",
    icon: ImageIcon,
    label: "Capture",
    detail:
      "Audio, photograph, or written notes - only what consent covered. A copy of every photograph is given back to the person.",
  },
  {
    n: "04",
    icon: Eye,
    label: "Review",
    detail:
      "The draft - text, image selection, and caption - is shown to the person before it leaves the office. Their changes are final.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Stories from the Field"
        title="No stories yet. When we have them, they will be told a particular way."
        lead="We are a new foundation. Our first programmes are still being set up in Mumbai. Rather than borrow a stock photograph or invent a composite character, this page is a contract - how we will tell the stories of the people we work alongside, when those stories are theirs to tell."
      />

      {/* Honesty band - what is NOT on this page and why */}
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
            <FadeUp>
              <div className="eyebrow">What this page is not</div>
            </FadeUp>
            <FadeUp delay={80}>
              <div className="space-y-4 text-[1.0625rem] leading-[1.7] text-ink text-pretty max-w-2xl">
                <p>
                  No fabricated beneficiary. No stock portrait labelled with a name we made up. No composite "Sunita from Solapur" stitched together from a press release we read.
                </p>
                <p className="text-ink-muted">
                  A real story is a person who can be asked, who can say no, and who can change their mind. Until we are working with real people in the field, this page stays a promise - not a gallery.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* The Storytelling Promise - six rules */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-24">
          <div className="max-w-2xl mb-14">
            <FadeUp>
              <div className="eyebrow mb-4">The Storytelling Promise</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Six rules we have signed our name to, before the first story is told.
              </h2>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PROMISE.map((p, i) => (
              <FadeUp key={p.n} delay={80 + i * 60}>
                <article className="h-full rounded-xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
                  <div className="flex items-start gap-5">
                    <div className="flex-none rounded-lg bg-ink/[0.04] p-2.5">
                      <p.icon className="h-5 w-5 text-ink" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-ink-muted tabular-nums">{p.n}</span>
                        <h3 className="font-sans font-semibold text-[1.0625rem] leading-snug text-ink text-balance">
                          {p.label}
                        </h3>
                      </div>
                      <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted text-pretty">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What we are listening for */}
      <section className="bg-sage border-y border-hairline">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
            <div>
              <FadeUp>
                <div className="eyebrow mb-4">What we are listening for</div>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance">
                  The first stories will not be the loudest. They will be the ones that show the model is working.
                </h2>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="mt-5 text-ink-muted leading-[1.7] text-pretty">
                  Each pillar of the Omni Care Model has a quiet milestone - the kind of moment that means the discipline is taking root. When those moments arrive, we will ask permission to share them.
                </p>
              </FadeUp>
            </div>
            <div className="space-y-3">
              {LISTENING.map((l, i) => (
                <FadeUp key={l.pillar} delay={120 + i * 70}>
                  <div className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25">
                    <div className="eyebrow text-ink-muted">{l.pillar}</div>
                    <p className="mt-2 text-[1.0625rem] leading-[1.55] text-ink text-pretty">
                      {l.seed}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The process - how a story gets to this page */}
      <section className="bg-snow">
        <div className="container-editorial py-20 lg:py-24">
          <div className="max-w-2xl mb-14">
            <FadeUp>
              <div className="eyebrow mb-4">From a conversation to a page</div>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Four steps stand between a field visit and anything published here.
              </h2>
            </FadeUp>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <FadeUp key={p.n} delay={80 + i * 80} as="li">
                <div className="h-full rounded-xl bg-canvas border border-hairline p-6 transition-[border-color] duration-300 ease-out hover:border-ink/25">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-muted tabular-nums">{p.n}</span>
                    <p.icon className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-sans font-semibold text-[1.0625rem] leading-snug text-ink text-balance">
                    {p.label}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-[1.6] text-pretty">
                    {p.detail}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* The placeholder card - what a future story will look like */}
      <section className="bg-canvas">
        <div className="container-editorial py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <div>
              <FadeUp>
                <div className="eyebrow mb-4">A future story, blank for now</div>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance">
                  This is the shape a story will take when there is one to tell.
                </h2>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="mt-5 text-ink-muted leading-[1.7] text-pretty">
                  A first-person quote. A name, where consent allows. A location no more specific than dignity permits. A date. The programme it belongs to. The cohort numbers behind it. Nothing more.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={200}>
              <article className="rounded-2xl border border-dashed border-ink/20 bg-snow p-8 lg:p-10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                  Awaiting first story
                </div>
                <p className="font-serif italic text-[1.625rem] lg:text-3xl mt-6 leading-snug text-ink/40 text-balance">
                  &ldquo;A sentence in their words will sit here. Not ours.&rdquo;
                </p>
                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <div className="eyebrow text-ink-muted">Name</div>
                    <p className="mt-1 text-ink/50">- with consent</p>
                  </div>
                  <div>
                    <div className="eyebrow text-ink-muted flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" aria-hidden="true" /> Location
                    </div>
                    <p className="mt-1 text-ink/50">Ward, Mumbai</p>
                  </div>
                  <div>
                    <div className="eyebrow text-ink-muted">Programme</div>
                    <p className="mt-1 text-ink/50">One of four pillars</p>
                  </div>
                  <div>
                    <div className="eyebrow text-ink-muted flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" aria-hidden="true" /> Recorded
                    </div>
                    <p className="mt-1 text-ink/50 tabular-nums">YYYY-MM-DD</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-hairline">
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Cohort context: how many households, what was measured, what did not work. A person is not a metric - but a story without one is decoration.
                  </p>
                </div>
              </article>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* For journalists, partners, and the curious */}
      <section className="bg-snow border-t border-hairline">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <FadeUp>
              <div>
                <div className="eyebrow mb-4">For journalists & researchers</div>
                <h2 className="font-sans font-semibold text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                  We do not arrange field visits for narrative material.
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="space-y-4 text-[15px] leading-[1.7] text-ink-muted text-pretty">
                <p>
                  Once programmes are underway, we will publish a quarterly press note with anonymised aggregate data and case studies cleared for re-use. Requests for site visits are considered on a case-by-case basis and only with the community's prior agreement - never to meet a publishing deadline.
                </p>
                <p>
                  Press queries:{" "}
                  <a href="mailto:media@omnilifecare.org" className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink transition-colors">
                    media@omnilifecare.org
                  </a>
                </p>
                <p className="text-sm">
                  See our{" "}
                  <Link to="/safeguarding-policy" className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink transition-colors">
                    safeguarding policy
                  </Link>{" "}
                  for the full consent and child-protection framework.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Help the first stories happen"
        title="The fastest way to a real story on this page is to fund the work that creates one."
        body="Every rupee goes into the programmes that put a field worker in a neighbourhood, a peer group in a community hall, a chronic-care plan in an elder's home. The stories follow the work."
        primary={{ label: "Support a programme", href: "/donate" }}
        secondary={{ label: "Read the impact baseline", href: "/impact" }}
      />
    </>
  );
}
