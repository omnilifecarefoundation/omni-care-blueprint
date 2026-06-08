import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  number: string;
  name: string;
  description: string;
  href: string;
  themeColor: string; // HSL components, e.g. "150 70% 36%"
  sdg?: string;
  ctaLabel?: string;
  className?: string;
}

/**
 * PillarCard — bold, dark, gradient-tinted card matching the DestinationCard
 * (Need Help Now) family. No imagery; the colour itself carries the identity
 * and is aligned to the pillar's SDG.
 */
export const PillarCard = React.forwardRef<HTMLDivElement, PillarCardProps>(
  (
    { number, name, description, href, themeColor, sdg, ctaLabel = "Learn more", className },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={{ ["--theme-color" as string]: themeColor } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
      >
        <Link
          to={href}
          className="relative block h-full w-full overflow-hidden rounded-2xl bg-ink outline outline-1 -outline-offset-1 outline-ink/10 shadow-[0_1px_2px_rgba(15,17,23,0.06),0_18px_44px_-24px_rgba(15,17,23,0.35)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(15,17,23,0.08),0_28px_60px_-22px_rgba(15,17,23,0.45)] focus-visible:outline-2 focus-visible:outline-primary"
        >
          {/* Base saturated wash */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, hsl(var(--theme-color) / 0.95) 0%, hsl(var(--theme-color) / 0.70) 55%, hsl(var(--theme-color) / 0.92) 100%)",
            }}
          />
          {/* Top highlight + deep bottom for legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.35) 100%)",
            }}
          />
          {/* Soft radial accent — intensifies on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120% 90% at 0% 0%, rgba(255,255,255,0.18) 0%, transparent 55%)",
            }}
          />
          {/* Grain — subtle texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.6px)",
              backgroundSize: "3px 3px",
            }}
          />

          {/* Aspect ratio spacer (matches DestinationCard family) */}
          <div className="aspect-[4/5] sm:aspect-[3/4]" />

          {/* Content */}
          <div className="absolute inset-x-0 top-0 p-6 lg:p-7 flex items-center justify-between text-snow">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] tabular-nums text-snow/85">
              {number}
            </span>
            {sdg ? (
              <span className="rounded-full border border-snow/30 bg-snow/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-snow/90 backdrop-blur-sm">
                {sdg}
              </span>
            ) : null}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-snow">
            <h3 className="font-sans font-semibold text-[1.35rem] leading-tight tracking-[-0.01em] text-snow text-balance">
              {name}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-snow/90 text-pretty">
              {description}
            </p>

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
        </Link>
      </div>
    );
  },
);
PillarCard.displayName = "PillarCard";
