import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
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

  const Component = Tag as ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`fade-up ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
