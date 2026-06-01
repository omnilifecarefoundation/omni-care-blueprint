import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PillButton } from "@/components/ui-axion/PillButton";

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
      <div className="flex gap-2 p-3 bg-canvas/95 backdrop-blur border-t border-hairline shadow-[0_-2px_12px_rgba(11,59,60,0.06)]">
        <Link
          to="/donate"
          className="flex-1 text-center text-[14px] font-medium text-ink bg-white border border-hairline rounded-full py-2.5 transition-[border-color,box-shadow] hover:border-ink/30 active:scale-[0.97]"
          tabIndex={show ? 0 : -1}
        >
          Donate
        </Link>
        <div className="flex-1 flex justify-end">
          <PillButton to="/partner/csr" variant="primary" className="w-full justify-between">
            Partner
          </PillButton>
        </div>
      </div>
    </div>
  );
}
