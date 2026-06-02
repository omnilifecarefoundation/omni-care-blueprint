import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { cn } from "@/lib/utils";
import { SITE, MEGA_NAV } from "@/lib/site";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  Layers,
  Sparkles,
  BarChart3,
  Handshake,
  Newspaper,
  HeartHandshake,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import logoAsset from "@/assets/omni-logo.svg.asset.json";
const logoSrc = logoAsset.url;

/* -------------------------------------------------------------------------- */
/*  Icon mapping per section                                                   */
/* -------------------------------------------------------------------------- */

const SECTION_ICON: Record<string, LucideIcon> = {
  about: Users,
  "what-we-do": Layers,
  programmes: Sparkles,
  impact: BarChart3,
  "get-involved": Handshake,
  newsroom: Newspaper,
};

/* -------------------------------------------------------------------------- */
/*  Hooks                                                                      */
/* -------------------------------------------------------------------------- */

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useHideOnScrollDown(threshold = 80) {
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);
  React.useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < threshold) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return hidden;
}


/* -------------------------------------------------------------------------- */
/*  Header                                                                     */
/* -------------------------------------------------------------------------- */

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close mobile on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "bg-snow/95 backdrop-blur-md border-hairline shadow-[0_1px_2px_rgba(11,59,60,0.04),0_8px_24px_-18px_rgba(11,59,60,0.18)]"
          : "bg-snow/90 backdrop-blur border-transparent",
      )}
      style={{ transitionTimingFunction: "var(--ease-axion)" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 h-16">
          {/* Logo */}
          <Link to="/" aria-label={SITE.name} className="shrink-0">
            <img
              src={logoSrc}
              alt="Omni Life Care Foundation"
              className="h-9 sm:h-10 w-auto block"
              loading="eager"
              decoding="async"
            />
          </Link>



          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex mx-auto">
            <NavigationMenuList className="gap-0.5">
              {MEGA_NAV.map((section) => {
                const Icon = SECTION_ICON[section.key] ?? ChevronRight;
                const hasMega = section.columns.length > 0;
                const active =
                  section.href === "/"
                    ? pathname === "/"
                    : pathname === section.href ||
                      pathname.startsWith(section.href + "/");

                if (!hasMega) {
                  return (
                    <NavigationMenuItem key={section.key}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={section.href}
                          className={cn(
                            "inline-flex h-9 items-center rounded-full px-3 text-[14px] transition-colors",
                            active
                              ? "text-primary"
                              : "text-ink hover:text-primary",
                          )}
                        >
                          {section.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={section.key}>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-9 rounded-full bg-transparent px-3 text-[14px] font-normal hover:bg-canvas focus:bg-canvas data-[state=open]:bg-canvas",
                        active && "text-primary",
                      )}
                    >
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaContent section={section} Icon={Icon} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-2 pr-1">
            <Link
              to="/donate"
              className="inline-flex h-9 items-center rounded-full px-3 text-[14px] text-ink hover:text-primary transition-colors"
            >
              Donate
            </Link>
            <Link
              to="/partner/csr"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[14px] text-snow hover:bg-ink/90 active:scale-[0.96] transition-[background-color,transform]"
            >
              Partner with us
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden w-10 h-10 rounded-full bg-ink text-snow flex items-center justify-center active:scale-[0.96] transition-transform"
          >
            <MenuToggleIcon open={open} className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mega content                                                               */
/* -------------------------------------------------------------------------- */

function MegaContent({
  section,
  Icon,
}: {
  section: (typeof MEGA_NAV)[number];
  Icon: LucideIcon;
}) {
  const feature = section.feature;
  const cols = section.columns;
  const isSingle = cols.length === 1;
  const gridItemsCols = isSingle ? "sm:grid-cols-2" : "sm:grid-cols-2";

  return (
    <div className="w-[min(92vw,880px)] p-4">
      <div className="grid gap-4 md:grid-cols-[1fr_280px]">
        {/* Columns */}
        <div className="space-y-4">
          {cols.map((col, idx) => (
            <div key={idx}>
              {col.heading && (
                <p className="px-2 pb-2 text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                  {col.heading}
                </p>
              )}
              <ul className={cn("grid gap-1", gridItemsCols)}>
                {col.items.map((item) => (
                  <ListItem
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    description={item.description}
                    Icon={Icon}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature card */}
        {feature && (
          <Link
            to={feature.href}
            className={cn(
              "group relative flex flex-col justify-between rounded-2xl p-5 overflow-hidden transition-colors",
              feature.tone === "ink" && "bg-ink text-snow",
              feature.tone === "sage" && "bg-sage text-ink",
              feature.tone === "snow" && "bg-canvas text-ink",
            )}
          >
            <div>
              <p
                className={cn(
                  "text-[11px] uppercase tracking-[0.12em]",
                  feature.tone === "ink" ? "text-snow/70" : "text-ink-muted",
                )}
              >
                {feature.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-[20px] leading-[1.15]">
                {feature.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-[13px] leading-[1.5]",
                  feature.tone === "ink" ? "text-snow/80" : "text-ink-muted",
                )}
                style={{ textWrap: "pretty" as never }}
              >
                {feature.body}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium">
              {feature.cta}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

function ListItem({
  href,
  title,
  description,
  Icon,
}: {
  href: string;
  title: string;
  description?: string;
  Icon: LucideIcon;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-canvas focus-visible:bg-canvas focus-visible:outline-none"
        >
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink group-hover:bg-snow transition-colors">
            <Icon size={16} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-[14px] font-medium text-ink leading-tight">
              {title}
            </span>
            {description && (
              <span
                className="mt-0.5 block text-[12.5px] text-ink-muted leading-snug"
                style={{ textWrap: "pretty" as never }}
              >
                {description}
              </span>
            )}
          </span>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile menu (portal)                                                       */
/* -------------------------------------------------------------------------- */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted || !open) return null;

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 lg:hidden bg-snow animate-in fade-in duration-200"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 72px)" }}
    >
      <div className="h-full overflow-y-auto px-5 pb-10">
        <nav className="flex flex-col divide-y divide-hairline">
          {MEGA_NAV.map((section) => {
            const Icon = SECTION_ICON[section.key] ?? ChevronRight;
            return (
              <div key={section.key} className="py-4">
                <Link
                  to={section.href}
                  onClick={onClose}
                  className="flex items-center justify-between"
                >
                  <span className="font-serif text-[22px] text-ink">
                    {section.label}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-canvas text-ink">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                </Link>
                {section.columns.length > 0 && (
                  <ul className="mt-3 grid grid-cols-1 gap-1">
                    {section.columns.flatMap((c) => c.items).map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-[14px] text-ink-muted hover:text-ink hover:bg-canvas"
                        >
                          <span>{item.label}</span>
                          <ChevronRight size={14} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-col gap-2">
          <Link
            to="/donate"
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 text-ink text-[15px] font-medium"
          >
            <HeartHandshake size={16} className="mr-2" aria-hidden="true" />
            Donate
          </Link>
          <Link
            to="/partner/csr"
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-ink text-snow text-[15px] font-medium active:scale-[0.98] transition-transform"
          >
            Partner with us
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* -------------------------------------------------------------------------- */
/*  Re-export Logo for legacy imports                                          */
/* -------------------------------------------------------------------------- */

export function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        onDark && "bg-white rounded-md px-2 py-1",
        className,
      )}
    >
      <img
        src={logoSrc}
        alt="Omni Life Care Foundation"
        className="h-12 sm:h-14 w-auto block"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
