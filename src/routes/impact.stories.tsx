import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { STORIES, PILLAR_BY_ID } from "@/lib/site";
import storySunita from "@/assets/story-sunita.jpg";

export const Route = createFileRoute("/impact/stories")({
  head: () => ({
    meta: [
      { title: "Stories from the Field — Omni Life Care Foundation" },
      { name: "description", content: "First-person stories from the communities we work alongside, told with consent and care." },
      { property: "og:title", content: "Stories from the Field — Omni Life Care Foundation" },
      { property: "og:url", content: "/impact/stories" },
      { property: "og:image", content: storySunita },
    ],
    links: [{ rel: "canonical", href: "/impact/stories" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="From the Field"
        title="Stories from the communities we walk alongside."
        lead="Told with consent, in the words of the people we work with. Care, not pity."
      />
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-3 grid lg:grid-cols-2 gap-10 border-b border-hairline pb-16 mb-8">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={storySunita} alt="Portrait of Sunita in Solapur, Maharashtra." className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10" width={1200} height={1500} loading="lazy" />
            </div>
            <div>
              <div className="eyebrow text-ink-muted">Mental Wellbeing · Solapur, Maharashtra</div>
              <p className="font-serif italic text-3xl mt-5 leading-snug text-balance">
                "Before the Omni team came, I had nowhere to go. Now I lead the
                women's group in my village."
              </p>
              <p className="mt-6 text-ink-muted leading-relaxed text-pretty">
                Sunita, 52, lost her husband to illness in 2019 and was caring alone for two grandchildren. Untreated depression went unnamed for years. In 2022, a community mental health worker visiting her village invited her to a weekly support group. Two years on, Sunita facilitates that group herself.
              </p>
              <p className="mt-4 text-sm text-ink-muted">— Sunita, Solapur district</p>
            </div>
          </article>

          {STORIES.slice(1).map((s) => {
            const pillar = PILLAR_BY_ID[s.pillar];
            return (
              <article key={s.slug} className="rounded-2xl bg-snow border border-hairline p-7 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_12px_28px_-20px_rgba(28,0,96,0.22)]">
                <span className="chip" style={{ color: pillar.color }}>
                  <span className="chip-dot" /> {pillar.name}
                </span>
                <h2 className="mt-4 font-sans font-semibold tracking-[-0.01em] text-xl leading-snug text-balance">{s.headline}</h2>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed text-pretty">{s.preview}</p>
                <p className="mt-5 text-sm text-ink-muted">— {s.name}, {s.location}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
