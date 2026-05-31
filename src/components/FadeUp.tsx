import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header";
  className?: string;
};

export function FadeUp({ children, delay = 0, as: Tag = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = window.setTimeout(() => setVisible(true), delay);
            io.disconnect();
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delay]);

  // @ts-expect-error — ref typing across tag union is fine at runtime
  return (
    <Tag ref={ref} className={`fade-up ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
