import type { ReactNode } from "react";
import { FadeUp } from "@/components/FadeUp";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  /** "dark" matches the home hero (default). "light" keeps the sage editorial look for utility / legal pages. */
  variant?: "dark" | "light";
};

/**
 * Reusable hero for sub-pages. Defaults to the dark indigo treatment used on the
 * home page - same radial gradient, gold-dot badge, sans-serif display headline,
 * staggered FadeUp reveals - so every entry point reads as one site.
 */
export function PageHero({ eyebrow, title, lead, children, variant = "dark" }: Props) {
  if (variant === "light") {
    return (
      <section className="bg-sage border-b border-hairline">
        <div className="container-editorial pt-20 pb-16 lg:pt-24 lg:pb-20">
          <div className="max-w-3xl">
            {eyebrow && (
              <FadeUp>
                <div className="eyebrow mb-5">{eyebrow}</div>
              </FadeUp>
            )}
            <FadeUp delay={80}>
              <h1 className="font-sans font-semibold text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                {title}
              </h1>
            </FadeUp>
            {lead && (
              <FadeUp delay={160}>
                <p className="lead mt-5 max-w-2xl">{lead}</p>
              </FadeUp>
            )}
            {children && (
              <FadeUp delay={240}>
                <div className="mt-7">{children}</div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-ink text-snow overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(115,91,246,0.28), transparent 45%), radial-gradient(circle at 88% 80%, rgba(255,214,0,0.10), transparent 40%)",
        }}
      />
      <div className="container-editorial relative pt-14 pb-14 lg:pt-20 lg:pb-20">
        <div className="max-w-3xl space-y-6">
          {eyebrow && (
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {eyebrow}
              </span>
            </FadeUp>
          )}
          <FadeUp delay={80}>
            <h1 className="font-sans font-semibold text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.04] tracking-[-0.025em] text-snow text-balance">
              {title}
            </h1>
          </FadeUp>
          {lead && (
            <FadeUp delay={160}>
              <p className="max-w-2xl text-[1.0625rem] lg:text-[1.125rem] leading-[1.6] text-snow/80 text-pretty">
                {lead}
              </p>
            </FadeUp>
          )}
          {children && (
            <FadeUp delay={240}>
              <div className="pt-2">{children}</div>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
