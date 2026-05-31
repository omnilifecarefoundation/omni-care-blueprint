type Props = {
  number: string; // "01"
  label: string;
  tone?: "default" | "on-dark";
  className?: string;
};

export function SectionIntro({ number, label, tone = "default", className = "" }: Props) {
  const dark = tone === "on-dark";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-[11px] sm:text-[12px] font-semibold flex items-center justify-center ${
          dark ? "bg-canvas text-primary" : "bg-primary text-primary-foreground"
        }`}
      >
        {number}
      </div>
      <span
        className={`text-[12px] sm:text-[13px] font-medium rounded-full px-3 sm:px-4 py-1 sm:py-1.5 border ${
          dark ? "border-canvas/30 text-canvas" : "border-hairline text-ink"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
