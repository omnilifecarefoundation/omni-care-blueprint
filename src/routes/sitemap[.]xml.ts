import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PROGRAMS, PILLARS } from "@/lib/site";
import { TOPICS } from "@/lib/get-help-topics";

// TODO: replace with your project URL once a custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/about/vision-mission", changefreq: "monthly", priority: "0.7" },
          { path: "/about/values", changefreq: "monthly", priority: "0.6" },
          { path: "/about/omni-care-model", changefreq: "monthly", priority: "0.7" },
          { path: "/about/leadership", changefreq: "monthly", priority: "0.6" },
          { path: "/about/our-story", changefreq: "monthly", priority: "0.6" },
          { path: "/about/compliance", changefreq: "monthly", priority: "0.6" },
          { path: "/about/careers", changefreq: "weekly", priority: "0.6" },
          { path: "/what-we-do", changefreq: "monthly", priority: "0.9" },
          { path: "/programs", changefreq: "monthly", priority: "0.9" },
          { path: "/impact", changefreq: "monthly", priority: "0.8" },
          { path: "/impact/stories", changefreq: "monthly", priority: "0.7" },
          { path: "/get-involved", changefreq: "monthly", priority: "0.8" },
          { path: "/get-involved/volunteer", changefreq: "monthly", priority: "0.7" },
          { path: "/partner/csr", changefreq: "monthly", priority: "0.9" },
          { path: "/donate", changefreq: "monthly", priority: "0.9" },
          { path: "/newsroom", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/accessibility", changefreq: "yearly", priority: "0.3" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/donation-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/safeguarding-policy", changefreq: "yearly", priority: "0.3" },
        ];

        const pillarPaths: SitemapEntry[] = PILLARS.map((p) => ({
          path: p.href,
          changefreq: "monthly",
          priority: "0.8",
        }));

        const programPaths: SitemapEntry[] = PROGRAMS.map((p) => ({
          path: p.href,
          changefreq: "monthly",
          priority: "0.7",
        }));

        const getHelpPaths: SitemapEntry[] = [
          { path: "/get-help", changefreq: "monthly", priority: "0.9" },
          ...TOPICS.map((t) => ({
            path: `/get-help/${t.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const entries = [...staticPaths, ...pillarPaths, ...programPaths, ...getHelpPaths];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
