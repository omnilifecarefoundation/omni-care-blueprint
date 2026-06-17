import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";

const searchSchema = z.object({ token: z.string().optional() });

export const Route = createFileRoute("/unsubscribe")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Unsubscribe - Omni Life Care Foundation" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: UnsubscribePage,
});

type State =
  | { kind: "loading" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "confirming" }
  | { kind: "success" }
  | { kind: "error"; msg: string };

function UnsubscribePage() {
  const { token } = useSearch({ from: "/unsubscribe" });
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok || data?.error) {
          setState({ kind: "invalid" });
          return;
        }
        if (data?.valid) setState({ kind: "valid" });
        else if (data?.reason === "already_unsubscribed") setState({ kind: "already" });
        else setState({ kind: "invalid" });
      })
      .catch(() => setState({ kind: "invalid" }));
  }, [token]);

  async function confirm() {
    if (!token) return;
    setState({ kind: "confirming" });
    try {
      const r = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await r.json().catch(() => ({}));
      if (data?.success) setState({ kind: "success" });
      else if (data?.reason === "already_unsubscribed") setState({ kind: "already" });
      else setState({ kind: "error", msg: data?.error || "Something went wrong." });
    } catch {
      setState({ kind: "error", msg: "Network error. Please try again." });
    }
  }

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-canvas px-4 py-24">
      <div className="max-w-md w-full rounded-2xl bg-snow border border-hairline p-8 lg:p-10 shadow-[0_1px_2px_rgba(4,55,242,0.04),0_8px_24px_-16px_rgba(4,55,242,0.10)]">
        <p className="eyebrow mb-3">Email preferences</p>
        {state.kind === "loading" && <p className="text-ink-muted">Checking your link…</p>}

        {state.kind === "valid" && (
          <>
            <h1 className="font-sans font-semibold text-2xl tracking-[-0.015em]">
              Unsubscribe from Omni Life Care emails?
            </h1>
            <p className="mt-3 text-ink-muted text-pretty">
              You'll stop receiving updates from us. You can always reach out again at info@omnilifecare.org.
            </p>
            <button onClick={confirm} className="btn btn-primary mt-6 w-full">
              Confirm unsubscribe
            </button>
          </>
        )}

        {state.kind === "confirming" && <p className="text-ink-muted">Processing…</p>}

        {state.kind === "success" && (
          <>
            <h1 className="font-sans font-semibold text-2xl tracking-[-0.015em]">You're unsubscribed.</h1>
            <p className="mt-3 text-ink-muted">We won't email you again. Sorry to see you go.</p>
          </>
        )}

        {state.kind === "already" && (
          <>
            <h1 className="font-sans font-semibold text-2xl tracking-[-0.015em]">Already unsubscribed.</h1>
            <p className="mt-3 text-ink-muted">This address has already been removed.</p>
          </>
        )}

        {state.kind === "invalid" && (
          <>
            <h1 className="font-sans font-semibold text-2xl tracking-[-0.015em]">This link isn't valid.</h1>
            <p className="mt-3 text-ink-muted">It may have expired or been used. Email info@omnilifecare.org if you need help.</p>
          </>
        )}

        {state.kind === "error" && (
          <>
            <h1 className="font-sans font-semibold text-2xl tracking-[-0.015em]">Something went wrong.</h1>
            <p className="mt-3 text-ink-muted">{state.msg}</p>
            <button onClick={confirm} className="btn btn-secondary mt-6">Try again</button>
          </>
        )}
      </div>
    </main>
  );
}
