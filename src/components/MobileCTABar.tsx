import { Link } from "@tanstack/react-router";
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
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 transition-transform duration-200 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="grid grid-cols-2 gap-2 p-3 bg-canvas/95 backdrop-blur border-t border-hairline shadow-[0_-2px_12px_rgba(11,59,60,0.06)]">
        <Link to="/donate" className="btn btn-secondary w-full" tabIndex={show ? 0 : -1}>
          Donate
        </Link>
        <Link to="/partner/csr" className="btn btn-primary w-full" tabIndex={show ? 0 : -1}>
          Partner
        </Link>
      </div>
    </div>
  );
}
