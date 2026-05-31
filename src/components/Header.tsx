import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { NAV, COMPLIANCE, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      {/* Utility bar */}
      <div className="hidden md:block border-b border-hairline bg-canvas">
        <div className="container-editorial flex h-9 items-center justify-end gap-6 text-xs text-ink-muted">
          <Link to="/about/careers" className="hover:text-ink">Careers</Link>
          <Link to="/contact" className="hover:text-ink">Contact</Link>
          <Link to="/newsroom" className="hover:text-ink">Newsroom</Link>
          <Link to="/accessibility" className="hover:text-ink">Accessibility</Link>
          <button
            type="button"
            aria-label="Search the site"
            className="inline-flex items-center gap-1 hover:text-ink"
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Primary header */}
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ${
          scrolled
            ? "bg-canvas/95 backdrop-blur border-b border-hairline shadow-[0_1px_0_rgba(11,59,60,0.04)]"
            : "bg-canvas border-b border-transparent"
        }`}
      >
        <div className="container-editorial flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5" aria-label={SITE.name}>
            <Logo />
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-[17px] text-ink">Omni Life Care</div>
              <div className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                Foundation
              </div>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[14px] font-medium text-ink hover:text-primary transition-colors relative"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/donate" className="btn btn-secondary btn-sm">Donate</Link>
            <Link to="/partner/csr" className="btn btn-primary btn-sm">
              Partner with Us
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/donate" className="btn btn-secondary btn-sm">Donate</Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-hairline"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40 animate-[fade-in_200ms_ease-out]"
          />
          <div className="absolute inset-y-0 right-0 w-[88%] max-w-sm bg-canvas shadow-xl animate-[slide-in-right_300ms_ease-out] flex flex-col">
            <div className="flex h-16 items-center justify-between border-b border-hairline px-5">
              <div className="flex items-center gap-2"><Logo /><span className="font-serif">Omni Life Care</span></div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-hairline"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <Link to="/partner/csr" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Partner with Us
              </Link>
              <Link to="/donate" onClick={() => setOpen(false)} className="btn btn-secondary w-full">
                Donate
              </Link>
            </div>
            <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-2 pb-6">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-[17px] text-ink hover:bg-hairline"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-hairline pt-4 px-3 space-y-2">
                <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 text-sm text-ink-muted hover:text-ink">Contact</Link>
                <Link to="/about/careers" onClick={() => setOpen(false)} className="block py-2 text-sm text-ink-muted hover:text-ink">Careers</Link>
                <Link to="/accessibility" onClick={() => setOpen(false)} className="block py-2 text-sm text-ink-muted hover:text-ink">Accessibility</Link>
              </div>
            </nav>
            <div className="border-t border-hairline px-5 py-4 bg-sage">
              <div className="eyebrow mb-2">Compliance</div>
              <div className="flex flex-wrap gap-2">
                {COMPLIANCE.map((c) => (
                  <span key={c.label} className="chip">{c.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="9" width="2" height="14" fill="#7A6F9B" />
      <rect x="11" y="9" width="2" height="14" fill="#4A7C59" />
      <rect x="18" y="9" width="2" height="14" fill="#B8553A" />
      <rect x="25" y="9" width="2" height="14" fill="#C9912C" />
      <path d="M4 8 Q15 2 27 8" stroke="#0B3B3C" strokeWidth="1.5" fill="none" />
      <line x1="2" y1="24" x2="28" y2="24" stroke="#5A6464" strokeWidth="1" />
    </svg>
  );
}

export { Logo };
