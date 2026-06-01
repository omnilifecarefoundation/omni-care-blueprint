import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { PillButton } from "@/components/ui-axion/PillButton";
import { useIndiaTime } from "@/hooks/use-india-time";
import { MegaNav } from "@/components/nav/MegaNav";
import { MobileNav } from "@/components/nav/MobileNav";

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

  return (
    <>
      <div
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-canvas/80 backdrop-blur" : "bg-transparent"
        }`}
        style={{ transitionTimingFunction: "var(--ease-axion)" }}
      >
        <div className="mx-auto w-full max-w-[1440px] p-2 sm:p-3">
          <nav
            aria-label="Primary"
            className="bg-white rounded-full flex items-center justify-between"
            style={{
              padding: 5,
              boxShadow: scrolled
                ? "0 1px 2px rgba(11,59,60,0.04), 0 12px 32px -16px rgba(11,59,60,0.18)"
                : "0 2px 12px rgba(11,59,60,0.06)",
              transition: "box-shadow 300ms var(--ease-axion)",
            }}
          >
            <div className="flex items-center gap-2">
              <Link to="/" aria-label={SITE.name} className="shrink-0 px-2">
                <Logo />
              </Link>
              <MegaNav />
            </div>

            <div className="hidden md:flex items-center gap-3 pr-1">
              <span className="hidden xl:inline-flex items-center gap-1.5 text-[13px] text-ink-muted tabular-nums">
                <Clock size={14} aria-hidden="true" />
                {time} IST
              </span>
              <Link
                to="/donate"
                className="text-[13px] font-medium text-ink hover:text-primary transition-colors duration-200 px-3 py-1.5 rounded-full"
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
              className="lg:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground active:scale-[0.96] transition-transform"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
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
