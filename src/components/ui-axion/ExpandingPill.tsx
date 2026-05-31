import { ArrowRight } from "lucide-react";

type Props = {
  label: string;
  tone?: "light" | "dark";
  expandedWidth?: number;
};

// Absolute-positioned pill that expands from a circle to a labelled pill on
// parent `group-hover`. Place inside a `relative group` container (e.g. card image).
// The width-transition is driven by `.group:hover [data-expanding-pill]` in styles.css.
export function ExpandingPill({ label, tone = "light", expandedWidth = 156 }: Props) {
  const isLight = tone === "light";
  return (
    <div
      data-expanding-pill
      className={`absolute bottom-4 left-4 h-9 w-9 rounded-full flex items-center px-2.5 overflow-hidden transition-[width] duration-300 ease-in-out ${
        isLight ? "bg-white text-ink" : "bg-primary text-primary-foreground"
      }`}
      style={{ ["--expanded-w" as string]: `${expandedWidth}px` } as React.CSSProperties}
    >
      <ArrowRight
        size={14}
        className="shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
      />
      <span className="ml-2 text-[13px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {label}
      </span>
    </div>
  );
}
