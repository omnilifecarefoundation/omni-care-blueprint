import { Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileCTABar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ transitionTimingFunction: "var(--ease-sheet)" }}
      aria-hidden={!show}
    >
      <div
        className="flex gap-2 p-3 bg-canvas/95 backdrop-blur border-t border-hairline"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)",
          boxShadow: "0 -1px 0 rgba(15,17,23,0.04), 0 -8px 24px -12px rgba(15,17,23,0.18)",
        }}
      >
        {/* Donate — black, refined, white text, yellow on hover */}
        <Link
          to="/donate"
          tabIndex={show ? 0 : -1}
          className="group flex-1 inline-flex items-center justify-center gap-2 rounded-full h-11 px-4 text-[14px] font-semibold tracking-[-0.005em] bg-ink text-snow hover:bg-coral hover:text-ink active:scale-[0.97] transition-[background-color,color,transform] duration-200"
        >
          <HeartHandshake
            size={15}
            aria-hidden="true"
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          Donate
        </Link>

        {/* Partner — blue, primary signature */}
        <Link
          to="/partner/csr"
          tabIndex={show ? 0 : -1}
          className="group flex-1 inline-flex items-center justify-center gap-1.5 rounded-full h-11 px-4 text-[14px] font-semibold tracking-[-0.005em] bg-primary text-primary-foreground hover:bg-[color:var(--primary-deep)] active:scale-[0.97] transition-[background-color,transform] duration-200 shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_8px_22px_-10px_rgba(4,55,242,0.55)]"
        >
          Partner
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </Link>
      </div>
    </div>
  );
}
