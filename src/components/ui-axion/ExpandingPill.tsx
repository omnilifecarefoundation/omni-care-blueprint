import { ArrowRight } from "lucide-react";

type Props = {
  label: string;
  tone?: "light" | "dark";
  // Width when expanded, in pixels (Tailwind doesn't transition arbitrary widths from `auto`).
  expandedWidth?: number;
};

// Absolute-positioned pill that expands from a circle to a labelled pill on
// parent `group-hover`. Use inside a `relative group` container (e.g. card image).
export function ExpandingPill({ label, tone = "light", expandedWidth = 156 }: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={`absolute bottom-4 left-4 h-9 w-9 rounded-full flex items-center px-2.5 overflow-hidden transition-[width] duration-300 ease-in-out ${
        isLight
          ? "bg-white text-ink"
          : "bg-primary text-primary-foreground"
      }`}
      style={
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ({ "--expanded-w": `${expandedWidth}px` } as any)
      }
      data-expanding-pill
    >
      <ArrowRight
        size={14}
        className="shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
      />
      <span className="ml-2 text-[13px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {label}
      </span>
      <style>{`[data-expanding-pill]{will-change:width}.group:hover [data-expanding-pill]{width:var(--expanded-w)}`}</style>
    </div>
  );
}
