import { createFileRoute, notFound } from "@tanstack/react-router";
import { GetHelpTopicPage } from "@/components/GetHelpTopicPage";
import { TOPIC_BY_SLUG, TOPICS, type GetHelpTopic } from "@/lib/get-help-topics";

const VALID = new Set<string>(TOPICS.map((t) => t.slug));

export const Route = createFileRoute("/get-help/$topic")({
  loader: ({ params }) => {
    if (!VALID.has(params.topic)) throw notFound();
    const topic = TOPIC_BY_SLUG[params.topic as GetHelpTopic["slug"]];
    return { topic };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.topic;
    if (!t) return { meta: [{ title: "Get Help — Omni Life Care Foundation" }] };
    const path = `/get-help/${t.slug}`;
    return {
      meta: [
        { title: `${t.name} — Get Help — Omni Life Care Foundation` },
        { name: "description", content: t.lead },
        { property: "og:title", content: `${t.name} — Omni Life Care Foundation` },
        { property: "og:description", content: t.promise },
        { property: "og:url", content: path },
        { property: "og:image", content: t.image },
        { property: "twitter:image", content: t.image },
      ],
      links: [{ rel: "canonical", href: path }],
    };
  },
  component: TopicRoute,
  notFoundComponent: () => (
    <p className="container-editorial py-20">Topic not found.</p>
  ),
});

function TopicRoute() {
  const { topic } = Route.useLoaderData();
  return <GetHelpTopicPage topic={topic} />;
}
