import { Link } from "@tanstack/react-router";

type Props = {
  eyebrow?: string;
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
  variant = "sage",
}: Props) {
  const dark = variant === "dark";
  return (
    <section className={dark ? "bg-ink text-canvas" : "bg-sage"}>
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            {eyebrow && (
              <div className={`eyebrow mb-4 ${dark ? "text-coral" : ""}`}>{eyebrow}</div>
            )}
            <h2 className={`display-md ${dark ? "text-canvas" : ""}`}>{title}</h2>
            {body && (
              <p className={`lead mt-4 max-w-xl ${dark ? "text-canvas/80" : ""}`}>{body}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            {primary && (
              <Link
                to={primary.href}
                className={dark ? "btn btn-on-dark btn-lg" : "btn btn-primary btn-lg"}
              >
                {primary.label} →
              </Link>
            )}
            {secondary && (
              <Link
                to={secondary.href}
                className={
                  dark ? "btn btn-secondary-on-dark btn-lg" : "btn btn-secondary btn-lg"
                }
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
