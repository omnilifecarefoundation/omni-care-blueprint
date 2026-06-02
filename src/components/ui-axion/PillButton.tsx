import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { TextRoll } from "./TextRoll";

type Variant = "primary" | "action" | "ghost" | "on-dark";
type Size = "sm" | "md";

type CommonProps = {
  children: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
};

type AsLink = CommonProps & { to: string; href?: never; onClick?: never; type?: never };
type AsAnchor = CommonProps & { href: string; to?: never; onClick?: never; type?: never };
type AsButton = CommonProps & {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export type PillButtonProps = AsLink | AsAnchor | AsButton;

const VARIANT_BG: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-[#072A2B]",
  action: "bg-coral text-ink hover:bg-[#E6C000]",
  ghost: "bg-transparent text-snow border border-snow/30 hover:border-snow/70 hover:bg-snow/5",
  "on-dark":
    "bg-coral text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_10px_30px_-12px_rgba(255,214,0,0.55)] hover:bg-[#FFDE33] hover:shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_14px_36px_-12px_rgba(255,214,0,0.7)]",
};

const VARIANT_CIRCLE: Record<Variant, string> = {
  primary: "bg-white text-primary",
  action: "bg-ink text-coral",
  ghost: "bg-snow text-ink",
  "on-dark": "bg-ink text-coral",
};

export function PillButton(props: PillButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon,
    className = "",
  } = props;

  const padding = size === "sm" ? "pl-4 pr-1.5 py-1.5" : "pl-5 pr-2 py-2";
  const text = size === "sm" ? "text-[13px]" : "text-[13px] sm:text-[14px]";
  const circle = size === "sm" ? "w-6 h-6" : "w-7 h-7 sm:w-8 sm:h-8";

  const inner = (
    <>
      <TextRoll>{children}</TextRoll>
      <span
        className={`${circle} rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45 ${VARIANT_CIRCLE[variant]}`}
        style={{ transitionTimingFunction: "var(--ease-axion)" }}
      >
        {icon ?? <ArrowRight size={size === "sm" ? 13 : 14} />}
      </span>
    </>
  );

  const cls = `group inline-flex items-center gap-3 rounded-full font-semibold tracking-[-0.005em] w-fit transition-[background-color,border-color,box-shadow,scale] duration-200 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-coral ${padding} ${text} ${VARIANT_BG[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {inner}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={cls}>
      {inner}
    </button>
  );
}
