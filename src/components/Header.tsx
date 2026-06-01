import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Clock } from "lucide-react";
import { NAV, COMPLIANCE, SITE } from "@/lib/site";
import { PillButton } from "@/components/ui-axion/PillButton";
import { useIndiaTime } from "@/hooks/use-india-time";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useIndiaTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating pill nav */}
      <div
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-canvas/80 backdrop-blur" : "bg-transparent"
        }`}
        style={{ transitionTimingFunction: "var(--ease-axion)" }}
      >
        <div className="mx-auto w-full max-w-[1440px] p-2 sm:p-3">
          <nav
            aria-label="Primary"
            className="bg-white rounded-full flex items-center justify-between shadow-[0_2px_12px_rgba(11,59,60,0.06)]"
            style={{ padding: 5 }}
          >
            <div className="flex items-center gap-6">
              <Link to="/" aria-label={SITE.name} className="shrink-0">
                <Logo />
              </Link>
              <div className="hidden lg:flex items-center gap-6 pl-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-[14px] text-ink hover:text-ink-muted transition-colors duration-300"
                    activeProps={{ className: "text-primary" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 pr-1">
              <span className="hidden xl:inline text-[13px] text-ink-muted">
                Working across 6 states in India
              </span>
              <span className="hidden lg:inline-flex items-center gap-1.5 text-[13px] text-ink-muted tabular">
                <Clock size={14} aria-hidden="true" />
                {time} IST
              </span>
              <Link
                to="/donate"
                className="text-[13px] font-medium text-ink hover:text-ink-muted transition-colors px-3"
              >
                Donate
              </Link>
              <PillButton to="/partner/csr" variant="primary" size="sm">
                Partner with Us
              </PillButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile bottom-sheet menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
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
          <div className="flex items-center gap-2.5">
            <Logo />
          </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 pt-5">
            <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted border border-hairline rounded-full px-3 py-1 tabular">
              <Clock size={14} aria-hidden="true" />
              {time} IST · Working across 6 states
            </span>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 pt-6">
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-[28px] leading-[32px] font-medium text-ink hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-hairline flex flex-col gap-1.5">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-ink-muted hover:text-ink"
              >
                Contact
              </Link>
              <Link
                to="/about/careers"
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-ink-muted hover:text-ink"
              >
                Careers
              </Link>
              <Link
                to="/accessibility"
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-ink-muted hover:text-ink"
              >
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
    </>
  );
}

import logoSrc from "@/assets/omni-logo.png";

export function Logo({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center ${onDark ? "bg-white rounded-md px-2 py-1" : ""} ${className}`}
    >
      <img
        src={logoSrc}
        alt="Omni Lifecare Foundation"
        className="h-8 sm:h-9 w-auto block"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}

