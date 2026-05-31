import { PillButton } from "@/components/ui-axion/PillButton";
import { SectionIntro } from "@/components/ui-axion/SectionIntro";

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
  number,
  title,
  body,
  primary,
  secondary,
  variant = "sage",
}: Props) {
  const dark = variant === "dark";
  return (
    <section className={dark ? "bg-ink text-canvas" : "bg-sage"}>
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            {eyebrow && (
              <SectionIntro
                number={number ?? "·"}
                label={eyebrow}
                tone={dark ? "on-dark" : "default"}
                className="mb-6"
              />
            )}
            <h2 className={`headline-axion-sm ${dark ? "text-canvas" : ""}`}>{title}</h2>
            {body && (
              <p className={`lead mt-4 max-w-xl ${dark ? "text-canvas/80" : ""}`}>{body}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            {primary && (
              <PillButton
                to={primary.href}
                variant={dark ? "on-dark" : "primary"}
              >
                {primary.label}
              </PillButton>
            )}
            {secondary && (
              <PillButton
                to={secondary.href}
                variant={dark ? "on-dark" : "ghost"}
              >
                {secondary.label}
              </PillButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
