import * as React from "react";
import { ArrowUpRight } from "lucide-react";
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
 * PillarCard - compact, editorial card. Tinted top band carries the
 * pillar's identity (SDG-aligned colour); body stays on canvas for
 * easy scanning. Refined hover, optical alignment, restrained motion.
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
        className={cn("group h-full w-full", className)}
      >
        <Link
          to={href}
          className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-snow outline outline-1 -outline-offset-1 outline-ink/10 shadow-[0_1px_2px_rgba(15,17,23,0.04),0_8px_24px_-18px_rgba(15,17,23,0.18)] transition-[transform,box-shadow,outline-color] duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:outline-ink/20 hover:shadow-[0_1px_2px_rgba(15,17,23,0.06),0_14px_32px_-20px_rgba(15,17,23,0.28)] focus-visible:outline-2 focus-visible:outline-primary"
        >
          {/* Tinted top band */}
          <div
            aria-hidden="true"
            className="relative h-20 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--theme-color) / 0.95) 0%, hsl(var(--theme-color) / 0.78) 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 100% at 0% 0%, rgba(255,255,255,0.22) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.6px)",
                backgroundSize: "3px 3px",
              }}
            />
            <div className="relative flex h-full items-center justify-between px-5 text-snow">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] tabular-nums text-snow/90">
                {number}
              </span>
              {sdg ? (
                <span className="rounded-full border border-snow/30 bg-snow/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-snow/95 backdrop-blur-sm">
                  {sdg}
                </span>
              ) : null}
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-sans font-semibold text-[1.0625rem] leading-snug tracking-[-0.005em] text-ink text-balance">
              {name}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted text-pretty">
              {description}
            </p>

            <div className="mt-auto pt-5">
              <span
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300"
                style={{ color: "hsl(var(--theme-color))" }}
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </div>

          {/* Hairline accent at bottom that grows on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-x-100"
            style={{ backgroundColor: "hsl(var(--theme-color))" }}
          />
        </Link>
      </div>
    );
  },
);
PillarCard.displayName = "PillarCard";
