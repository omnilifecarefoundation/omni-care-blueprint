import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Omni Life Care Foundation" },
      { name: "description", content: "Our vision of equitable, dignified care for every community in India, and our mission to make it real." },
      { property: "og:title", content: "Vision & Mission — Omni Life Care Foundation" },
      { property: "og:url", content: "/about/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/about/vision-mission" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="Vision & Mission" />
      <section className="container-narrow py-16 lg:py-24 space-y-12">
        <div>
          <div className="eyebrow mb-3">Our Vision</div>
          <p className="display-md">
            To create a future where every individual in India has equitable access
            to dignified, inclusive, and comprehensive health and wellbeing support.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Our Mission</div>
          <p className="display-md">
            To strengthen community health and wellbeing through inclusive,
            community-centred care initiatives that improve access to essential
            support and services.
          </p>
        </div>
      </section>
    </>
  );
}
