import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, COMPLIANCE, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={`sticky top-0 z-40 bg-canvas/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(11,59,60,0.08)]" : ""
      }`}
    >
      {/* Utility bar */}
      <div className="hidden md:block border-b border-hairline/70 bg-sage/40">
        <div className="mx-auto max-w-[1280px] px-6 py-1.5 flex items-center justify-between text-[12px] text-ink-muted">
          <div className="flex items-center gap-3">
            {COMPLIANCE.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-1">
                <span className="font-semibold tracking-[0.04em] text-ink">{c.label}</span>
                <span className="opacity-70">· {c.desc}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a>
            <Link to="/contact" className="hover:text-ink">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto max-w-[1280px] px-6">
        <nav aria-label="Primary" className="flex items-center justify-between py-4">
          <Link to="/" aria-label={SITE.name} className="flex items-center gap-3">
            <Logo />
            <span className="font-serif text-[20px] leading-none text-ink">
              {SITE.shortName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[14px] text-ink hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/partner/csr"
              className="text-[14px] font-medium text-ink hover:text-primary px-2"
            >
              Partner with Us
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center bg-primary text-primary-foreground text-[14px] font-medium rounded-full px-5 py-2.5 hover:bg-[#072A2B] transition-colors"
            >
              Donate
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-ink"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-canvas shadow-xl transition-transform duration-300 flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-serif text-lg">Omni Life Care</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-ink"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[18px] font-medium text-ink hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-hairline flex flex-col gap-1">
              <Link to="/contact" onClick={() => setOpen(false)} className="py-1.5 text-sm text-ink-muted hover:text-ink">Contact</Link>
              <Link to="/about/careers" onClick={() => setOpen(false)} className="py-1.5 text-sm text-ink-muted hover:text-ink">Careers</Link>
              <Link to="/accessibility" onClick={() => setOpen(false)} className="py-1.5 text-sm text-ink-muted hover:text-ink">Accessibility</Link>
            </div>
          </nav>

          <div className="p-5 border-t border-hairline flex flex-col gap-2.5 bg-sage/40">
            <Link
              to="/partner/csr"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-white border border-hairline text-ink text-[14px] font-medium rounded-full px-5 py-2.5"
            >
              Partner with Us
            </Link>
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground text-[14px] font-medium rounded-full px-5 py-2.5"
            >
              Donate
            </Link>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {COMPLIANCE.map((c) => (
                <span
                  key={c.label}
                  className="text-[11px] font-semibold tracking-[0.04em] bg-canvas border border-hairline rounded-full px-2 py-0.5 text-ink"
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="9" width="2" height="14" fill="#7A6F9B" />
        <rect x="11" y="9" width="2" height="14" fill="#4A7C59" />
        <rect x="18" y="9" width="2" height="14" fill="#B8553A" />
        <rect x="25" y="9" width="2" height="14" fill="#C9912C" />
        <path d="M4 8 Q15 2 27 8" stroke="#FBFAF6" strokeWidth="1.5" fill="none" />
        <line x1="2" y1="24" x2="28" y2="24" stroke="#FBFAF6" strokeWidth="1" />
      </svg>
    </div>
  );
}
