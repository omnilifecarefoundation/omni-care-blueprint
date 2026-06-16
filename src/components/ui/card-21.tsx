import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats: string;
  href: string;
  themeColor: string; // HSL components, e.g. "232 97% 49%"
  ctaLabel?: string;
  eyebrow?: string;
  number?: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      stats,
      href,
      themeColor,
      ctaLabel = "Explore Now",
      eyebrow,
      number,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={{ ["--theme-color" as string]: themeColor } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block h-full w-full overflow-hidden rounded-2xl bg-ink outline outline-1 -outline-offset-1 outline-ink/10 shadow-[0_1px_2px_rgba(15,17,23,0.06),0_18px_44px_-24px_rgba(15,17,23,0.35)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(15,17,23,0.08),0_28px_60px_-22px_rgba(15,17,23,0.45)] focus-visible:outline-2 focus-visible:outline-primary"
        >
          {/* Background image with parallax zoom */}
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={location}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
            />
          </div>

          {/* Themed gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--theme-color) / 0) 30%, hsl(var(--theme-color) / 0.55) 70%, hsl(var(--theme-color) / 0.92) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--theme-color) / 0.10) 0%, hsl(var(--theme-color) / 0.55) 55%, hsl(var(--theme-color) / 0.96) 100%)",
            }}
          />

          {/* Top chrome: pillar number + SDG chip */}
          {(eyebrow || number) && (
            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5 lg:p-6">
              {number ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] tabular-nums text-snow/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                  {number}
                </span>
              ) : <span />}
              {eyebrow ? (
                <span className="rounded-full border border-snow/40 bg-ink/30 px-2.5 py-0.5 text-[9.5px] uppercase tracking-[0.14em] text-snow backdrop-blur-md">
                  {eyebrow}
                </span>
              ) : null}
            </div>
          )}

          {/* Aspect ratio spacer */}
          <div className="aspect-[4/5] sm:aspect-[3/4]" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-snow">
            <h3 className="font-sans font-semibold text-[1.35rem] leading-tight tracking-[-0.01em] text-snow text-balance">
              {location} {flag ? <span aria-hidden="true">{flag}</span> : null}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-snow/85 text-pretty">
              {stats}
            </p>

            {/* Explore Button */}
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-snow/95 backdrop-blur-sm pl-4 pr-1.5 py-1.5 text-[13px] font-semibold text-ink transition-[transform,background-color] duration-300 group-hover:bg-snow active:scale-[0.97]">
              <span>{ctaLabel}</span>
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-snow transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
                style={{ backgroundColor: "hsl(var(--theme-color))" }}
              >
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </a>
      </div>
    );
  },
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
