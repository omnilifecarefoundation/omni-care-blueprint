import { useEffect, useRef, useState } from "react";

type Props = {
  value: string; // any string; numbers within are animated
  duration?: number;
  className?: string;
};

// Animates the numeric portion of a string like "1,20,000+" from 0 -> target.
export function CountUp({ value, duration = 1200, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          run();
          io.disconnect();
        }
      });
    });
    io.observe(node);
    return () => io.disconnect();

    function run() {
      const match = value.match(/[\d,]+/);
      if (!match) {
        setDisplay(value);
        return;
      }
      const numStr = match[0];
      const target = parseInt(numStr.replace(/,/g, ""), 10);
      if (!isFinite(target) || target === 0) {
        setDisplay(value);
        return;
      }
      const prefix = value.slice(0, match.index);
      const suffix = value.slice((match.index ?? 0) + numStr.length);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased);
        setDisplay(`${prefix}${formatIndian(current)}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {display}
    </span>
  );
}

function formatIndian(n: number): string {
  const s = String(n);
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3;
}
