// Hover text-roll wrapper. Wrap inside a `group` parent for hover to trigger.
export function TextRoll({ children }: { children: string }) {
  return (
    <span className="flex flex-col overflow-hidden h-[20px] leading-[20px]">
      <span
        className="block transition-transform duration-500 group-hover:-translate-y-1/2"
        style={{ transitionTimingFunction: "var(--ease-axion)" }}
      >
        <span className="block">{children}</span>
        <span className="block">{children}</span>
      </span>
    </span>
  );
}
