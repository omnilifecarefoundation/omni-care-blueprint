import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";

function NotFoundComponent() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">404 · Not found</p>
        <h1 className="display-md">This page doesn't exist.</h1>
        <p className="mt-3 text-ink-muted">
          The page you're looking for may have moved or been retired.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/" className="btn btn-primary">Go home</Link>
          <Link to="/contact" className="btn btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="display-md">This page didn't load</h1>
        <p className="mt-2 text-ink-muted">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn btn-secondary">Go home</a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Omni Life Care Foundation — Care, integrated. Communities, strengthened." },
      {
        name: "description",
        content:
          "An India-based foundation strengthening community health and wellbeing through inclusive, community-centred initiatives.",
      },
      { name: "theme-color", content: "#0066FF" },
      { property: "og:site_name", content: "Omni Life Care Foundation" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&family=Tillana:wght@500;600;700&family=Telex&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Omni Life Care Foundation",
          description:
            "India-based foundation strengthening community health and wellbeing through inclusive, community-centred initiatives.",
          areaServed: "India",
          knowsAbout: [
            "Community Mental Health",
            "Women's Health",
            "Preventive Healthcare",
            "Disability Inclusion",
            "Elderly Care",
            "Community Health Worker Development",
            "Research and Impact Assessment",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileCTABar />
    </QueryClientProvider>
  );
}
