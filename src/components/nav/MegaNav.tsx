import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MEGA_NAV } from "@/lib/site";
import { MegaPanel } from "./MegaPanel";

export function MegaNav() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const scheduleOpen = (key: string) => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpenKey(key), 80);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 180);
  };
  const closeNow = () => {
    clearTimers();
    setOpenKey(null);
  };

  // Close on route change
  useEffect(() => {
    closeNow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActiveSection = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const activeSection = openKey ? MEGA_NAV.find((s) => s.key === openKey) : null;
  const hasPanel = !!activeSection && activeSection.columns.length > 0;

  return (
    <div
      className="relative hidden lg:flex items-center"
      onMouseLeave={scheduleClose}
    >
      <div role="menubar" className="flex items-center gap-1 pl-1">
        {MEGA_NAV.map((section) => {
          const active = isActiveSection(section.href);
          const opened = openKey === section.key;
          const expandable = section.columns.length > 0;
          const trigger = (
            <span
              className={`relative inline-flex items-center gap-1 px-3 py-2 rounded-full text-[14px] transition-[color,background-color] duration-200 ${
                active
                  ? "text-primary"
                  : "text-ink hover:text-primary"
              } ${opened ? "bg-canvas" : ""}`}
            >
              {section.label}
              {expandable && (
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${opened ? "rotate-180" : ""}`}
                  style={{ transitionTimingFunction: "var(--ease-axion)" }}
                />
              )}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-primary origin-left transition-transform duration-300 ${
                  active ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transitionTimingFunction: "var(--ease-axion)" }}
              />
            </span>
          );
          return (
            <div
              key={section.key}
              role="none"
              onMouseEnter={() => (expandable ? scheduleOpen(section.key) : scheduleClose())}
              onFocus={() => expandable && scheduleOpen(section.key)}
            >
              <Link
                to={section.href}
                role="menuitem"
                aria-haspopup={expandable || undefined}
                aria-expanded={expandable ? opened : undefined}
                aria-controls={expandable ? `mega-panel-${section.key}` : undefined}
                className="block focus-visible:outline-none rounded-full"
              >
                {trigger}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Shared panel */}
      <div
        id={activeSection ? `mega-panel-${activeSection.key}` : undefined}
        role="region"
        aria-hidden={!hasPanel}
        onMouseEnter={() => activeSection && scheduleOpen(activeSection.key)}
        onMouseLeave={scheduleClose}
        className={`absolute left-0 right-0 top-[calc(100%+10px)] z-40 transition-[opacity,transform] duration-300 ${
          hasPanel
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "var(--ease-axion)" }}
      >
        <div
          className="mx-auto w-full max-w-[1100px] bg-snow rounded-2xl border border-hairline overflow-hidden"
          style={{
            boxShadow:
              "0 1px 2px rgba(28,0,96,0.04), 0 24px 48px -24px rgba(28,0,96,0.22)",
          }}
        >
          {activeSection && hasPanel && (
            <MegaPanel key={activeSection.key} section={activeSection} onNavigate={closeNow} />
          )}
        </div>
      </div>
    </div>
  );
}
