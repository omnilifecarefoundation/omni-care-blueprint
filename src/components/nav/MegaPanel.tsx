import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { MegaSection } from "@/lib/site";

type Props = {
  section: MegaSection;
  onNavigate: () => void;
};

const TONE: Record<NonNullable<MegaSection["feature"]>["tone"] & string, string> = {
  ink: "bg-ink text-snow",
  sage: "bg-sage text-ink",
  snow: "bg-snow text-ink border border-hairline",
};

export function MegaPanel({ section, onNavigate }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (href: string) => pathname === href;

  const hasFeature = !!section.feature;
  const colSpan = section.columns.length;
  // Grid: columns area takes 8/12 when feature exists, full 12 otherwise.
  const colsAreaClass = hasFeature ? "lg:col-span-8" : "lg:col-span-12";
  const colsGridClass =
    colSpan >= 4 ? "lg:grid-cols-4" : colSpan === 3 ? "lg:grid-cols-3" : colSpan === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-7 lg:p-9">
      {/* Eyebrow + blurb */}
      <div className="lg:col-span-12 flex items-end justify-between gap-6 -mb-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
            {section.key.replace(/-/g, " ")}
          </p>
          {section.blurb && (
            <p className="mt-1 text-[15px] text-ink text-pretty max-w-md">{section.blurb}</p>
          )}
        </div>
        <Link
          to={section.href}
          onClick={onNavigate}
          className="hidden lg:inline-flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-ink transition-colors duration-200"
        >
          Overview
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>

      {/* Columns */}
      {section.columns.length > 0 && (
        <div className={`${colsAreaClass} grid grid-cols-1 sm:grid-cols-2 ${colsGridClass} gap-x-6 gap-y-7`}>
          {section.columns.map((col, ci) => (
            <div
              key={ci}
              className="opacity-0 translate-y-1 animate-[mega-in_280ms_cubic-bezier(0.2,0,0,1)_forwards]"
              style={{ animationDelay: `${ci * 40}ms` }}
            >
              {col.heading && (
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-3 tabular-nums">
                  {col.heading}
                </p>
              )}
              <ul className="flex flex-col gap-0.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={onNavigate}
                      className={`group relative flex items-start gap-3 rounded-[14px] px-3 py-2.5 min-h-[44px] -mx-3 transition-[background-color,color] duration-200 hover:bg-canvas focus-visible:bg-canvas focus-visible:outline-none ${
                        isActive(item.href) ? "bg-canvas" : ""
                      }`}
                    >
                      {item.swatch && (
                        <span
                          aria-hidden="true"
                          className="mt-1.5 w-2 h-2 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125"
                          style={{ background: item.swatch }}
                        />
                      )}
                      <span className="flex-1 min-w-0">
                        <span
                          className={`block text-[14.5px] font-medium leading-tight transition-colors duration-200 ${
                            isActive(item.href) ? "text-primary" : "text-ink group-hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="block text-[12.5px] text-ink-muted mt-0.5 text-pretty">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Feature card */}
      {hasFeature && section.feature && (
        <Link
          to={section.feature.href}
          onClick={onNavigate}
          className={`lg:col-span-4 group flex flex-col justify-between rounded-2xl p-5 lg:p-6 min-h-[180px] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 active:scale-[0.99] ${
            TONE[section.feature.tone ?? "ink"]
          }`}
          style={{
            boxShadow:
              "0 1px 2px rgba(28,0,96,0.04), 0 16px 32px -20px rgba(28,0,96,0.18)",
            transitionTimingFunction: "var(--ease-axion)",
          }}
        >
          <div>
            <p
              className={`text-[11px] uppercase tracking-[0.18em] tabular-nums ${
                section.feature.tone === "ink" ? "text-snow/60" : "text-ink-muted"
              }`}
            >
              {section.feature.eyebrow}
            </p>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-medium text-balance">
              {section.feature.title}
            </h3>
            <p
              className={`mt-2 text-[13.5px] text-pretty ${
                section.feature.tone === "ink" ? "text-snow/70" : "text-ink-muted"
              }`}
            >
              {section.feature.body}
            </p>
          </div>
          <div
            className={`mt-5 inline-flex items-center gap-2 text-[13px] font-medium ${
              section.feature.tone === "ink" ? "text-snow" : "text-primary"
            }`}
          >
            <span>{section.feature.cta}</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        </Link>
      )}
    </div>
  );
}
