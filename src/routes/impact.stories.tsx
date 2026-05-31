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
            <div className="aspect-[4/5] overflow-hidden">
              <img src={storySunita} alt="Portrait of Sunita in Solapur, Maharashtra." className="h-full w-full object-cover" width={1200} height={1500} loading="lazy" />
            </div>
            <div>
              <div className="eyebrow text-ink-muted">Mental Wellbeing · Solapur, Maharashtra</div>
              <p className="font-serif italic text-3xl mt-5 leading-snug">
                "Before the Omni team came, I had nowhere to go. Now I lead the
                women's group in my village."
              </p>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Sunita, 52, lost her husband to illness in 2019 and was caring alone for two grandchildren. Untreated depression went unnamed for years. In 2022, a community mental health worker visiting her village invited her to a weekly support group. Two years on, Sunita facilitates that group herself.
              </p>
              <p className="mt-4 text-sm text-ink-muted">— Sunita, Solapur district</p>
            </div>
          </article>

          {STORIES.slice(1).map((s) => {
            const pillar = PILLAR_BY_ID[s.pillar];
            return (
              <article key={s.slug} className="border border-hairline bg-snow p-7">
                <span className="chip" style={{ color: pillar.color }}>
                  <span className="chip-dot" /> {pillar.name}
                </span>
                <h2 className="mt-4 font-serif text-xl leading-snug">{s.headline}</h2>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.preview}</p>
                <p className="mt-5 text-sm text-ink-muted">— {s.name}, {s.location}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
