import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Clock, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MEGA_NAV, COMPLIANCE } from "@/lib/site";
import { PillButton } from "@/components/ui-axion/PillButton";
import { useIndiaTime } from "@/hooks/use-india-time";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const time = useIndiaTime();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-ink/60 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        tabIndex={open ? 0 : -1}
      />
      <div
        className={`absolute left-0 right-0 bottom-0 bg-canvas rounded-2xl mx-3 mb-3 transition-transform duration-500 max-h-[92vh] flex flex-col ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionTimingFunction: "var(--ease-sheet)" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-hairline">
          <span className="inline-flex items-center gap-1.5 text-[12px] text-ink-muted border border-hairline rounded-full px-3 py-1 tabular-nums">
            <Clock size={13} aria-hidden="true" />
            {time} IST
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground active:scale-[0.96] transition-transform"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col">
            {MEGA_NAV.map((section) => {
              const opened = expanded === section.key;
              const active = isActive(section.href);
              const expandable = section.columns.length > 0;
              return (
                <li key={section.key} className="border-b border-hairline last:border-b-0">
                  <div className="flex items-stretch">
                    <Link
                      to={section.href}
                      onClick={onClose}
                      className={`flex-1 py-4 px-3 text-[22px] leading-[26px] font-medium transition-colors ${
                        active ? "text-primary" : "text-ink"
                      }`}
                    >
                      {section.label}
                    </Link>
                    {expandable && (
                      <button
                        type="button"
                        aria-expanded={opened}
                        aria-controls={`m-panel-${section.key}`}
                        aria-label={opened ? `Collapse ${section.label}` : `Expand ${section.label}`}
                        onClick={() => setExpanded(opened ? null : section.key)}
                        className="w-12 flex items-center justify-center text-ink-muted active:scale-[0.96] transition-transform"
                      >
                        <ChevronDown
                          size={18}
                          aria-hidden="true"
                          className={`transition-transform duration-300 ${opened ? "rotate-180" : ""}`}
                          style={{ transitionTimingFunction: "var(--ease-axion)" }}
                        />
                      </button>
                    )}
                  </div>
                  {expandable && (
                    <div
                      id={`m-panel-${section.key}`}
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                      style={{ transitionTimingFunction: "var(--ease-axion)" }}
                    >
                      <div className="overflow-hidden">
                        <ul className="flex flex-col gap-0.5 pb-4 pl-3 pr-3">
                          {section.columns.flatMap((c) => c.items).map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 py-2.5 px-3 -mx-3 rounded-[14px] min-h-[44px] hover:bg-snow transition-colors"
                              >
                                {item.swatch && (
                                  <span
                                    aria-hidden="true"
                                    className="w-2 h-2 rounded-full shrink-0"
                                    style={{ background: item.swatch }}
                                  />
                                )}
                                <span className="text-[15px] text-ink">{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 border-t border-hairline flex flex-col gap-1">
            <Link to="/contact" onClick={onClose} className="py-1.5 text-sm text-ink-muted hover:text-ink">
              Contact
            </Link>
            <Link to="/about/careers" onClick={onClose} className="py-1.5 text-sm text-ink-muted hover:text-ink">
              Careers
            </Link>
            <Link to="/accessibility" onClick={onClose} className="py-1.5 text-sm text-ink-muted hover:text-ink">
              Accessibility
            </Link>
          </div>
        </nav>

        <div className="p-5 flex flex-col gap-3 border-t border-hairline bg-sage">
          <div className="flex flex-wrap gap-1.5">
            {COMPLIANCE.map((c) => (
              <span
                key={c.label}
                className="text-[11px] font-semibold tracking-[0.04em] bg-canvas/60 border border-hairline rounded-full px-2 py-0.5 text-ink"
              >
                {c.label}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 pt-1">
            <PillButton to="/partner/csr" variant="primary">
              Partner with Us
            </PillButton>
            <PillButton to="/donate" variant="action">
              Donate
            </PillButton>
          </div>
        </div>
      </div>
    </div>
  );
}
