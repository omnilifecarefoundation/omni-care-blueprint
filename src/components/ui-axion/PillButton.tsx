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
  action: "bg-coral text-white hover:bg-[#C24A33]",
  ghost: "bg-white text-ink border border-hairline hover:border-ink-muted",
  "on-dark": "bg-coral text-white hover:bg-[#C24A33]",
};

const VARIANT_CIRCLE: Record<Variant, string> = {
  primary: "bg-white text-primary",
  action: "bg-white text-coral",
  ghost: "bg-primary text-primary-foreground",
  "on-dark": "bg-white text-coral",
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

  const cls = `group inline-flex items-center gap-3 rounded-full font-medium transition-colors w-fit ${padding} ${text} ${VARIANT_BG[variant]} ${className}`;

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
