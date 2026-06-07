import { PillButton } from "@/components/ui-axion/PillButton";
import { FadeUp } from "@/components/FadeUp";

type Props = {
  eyebrow?: string;
  number?: string;
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  variant?: "dark" | "sage";
};

export function CTABand({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  variant = "dark",
}: Props) {
  const dark = variant === "dark";

  if (dark) {
    return (
      <section className="relative bg-primary text-snow overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 88% 18%, rgba(115,91,246,0.30), transparent 45%), radial-gradient(circle at 12% 80%, rgba(255,214,0,0.12), transparent 42%)",
          }}
        />
        <div className="container-editorial relative py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-end">
            <div className="space-y-6">
              {eyebrow && (
                <FadeUp>
                  <span className="inline-flex items-center gap-2 rounded-full border border-snow/20 bg-snow/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-snow/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {eyebrow}
                  </span>
                </FadeUp>
              )}
              <FadeUp delay={80}>
                <h2 className="font-sans font-semibold text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-snow text-balance">
                  {title}
                </h2>
              </FadeUp>
              {body && (
                <FadeUp delay={160}>
                  <p className="max-w-xl text-[1.0625rem] leading-[1.6] text-snow/80 text-pretty">
                    {body}
                  </p>
                </FadeUp>
              )}
            </div>
            <FadeUp delay={200}>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                {primary && (
                  <PillButton to={primary.href} variant="on-dark">
                    {primary.label}
                  </PillButton>
                )}
                {secondary && (
                  <PillButton to={secondary.href} variant="ghost">
                    {secondary.label}
                  </PillButton>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    );
  }

  // sage variant - light, used for softer transitions between dark hero and dark closing
  return (
    <section className="bg-sage border-y border-hairline">
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div className="space-y-5">
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              {title}
            </h2>
            {body && <p className="lead max-w-xl text-pretty">{body}</p>}
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            {primary && (
              <PillButton to={primary.href} variant="primary">
                {primary.label}
              </PillButton>
            )}
            {secondary && (
              <PillButton to={secondary.href} variant="ghost">
                {secondary.label}
              </PillButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
