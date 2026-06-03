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
import { CrisisResourcesBanner } from "@/components/CrisisResources";
import type { LucideIcon } from "lucide-react";
import {
  // Section icons
  Compass,
  HeartPulse,
  Sprout,
  TrendingUp,
  HandHeart,
  Newspaper,
  // About
  Eye,
  LayoutGrid,
  Gem,
  BookOpen,
  Users,
  ShieldCheck,
  Briefcase,
  // What We Do (pillars)
  Brain,
  GraduationCap,
  Accessibility,
  Sunrise,
  // Programmes
  MessageCircleHeart,
  Stethoscope,
  Baby,
  HandHelping,
  Flower2,
  Dumbbell,
  Microscope,
  BookMarked,
  UserRoundCheck,
  // Impact
  LineChart,
  BookText,
  FileSearch,
  // Get Involved
  Hand,
  Building2,
  HeartHandshake,
  // Misc
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
const logoSrc = "/omni-logo.png";

/* -------------------------------------------------------------------------- */
/*  Icon mapping - section triggers and per-item                               */
/* -------------------------------------------------------------------------- */

const SECTION_ICON: Record<string, LucideIcon> = {
  about: Compass,
  "what-we-do": HeartPulse,
  programmes: Sprout,
  impact: TrendingUp,
  "get-involved": HandHeart,
  newsroom: Newspaper,
};

// Unique icon per menu item, keyed by route. Falls back to section icon.
const ITEM_ICON: Record<string, LucideIcon> = {
  // About
  "/about/vision-mission": Eye,
  "/about/omni-care-model": LayoutGrid,
  "/about/values": Gem,
  "/about/our-story": BookOpen,
  "/about/leadership": Users,
  "/about/compliance": ShieldCheck,
  "/about/careers": Briefcase,
  // What We Do (the four pillars)
  "/what-we-do/mental-wellbeing": Brain,
  "/what-we-do/social-growth": GraduationCap,
  "/what-we-do/inclusive-care": Accessibility,
  "/what-we-do/human-potential": Sunrise,
  // Programmes
  "/programs/community-mental-health": MessageCircleHeart,
  "/programs/preventive-health-outreach": Stethoscope,
  "/programs/womens-health-lifecycle": Baby,
  "/programs/disability-elderly-care": HandHelping,
  "/programs/womens-wellness": Flower2,
  "/programs/training-capacity-building": Dumbbell,
  "/programs/research-impact-assessment": Microscope,
  "/programs/scholarships-education": BookMarked,
  "/programs/chw-development": UserRoundCheck,
  // Impact
  "/impact": LineChart,
  "/impact/stories": BookText,
  // Get Involved
  "/get-involved/volunteer": Hand,
  "/partner/csr": Building2,
  "/donate": HeartHandshake,
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
  const hidden = useHideOnScrollDown(80);
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
        "sticky top-0 z-50 w-full border-b transition-[background-color,box-shadow,border-color,transform] duration-300 will-change-transform",
        scrolled
          ? "bg-snow/95 backdrop-blur-md border-hairline shadow-[0_1px_2px_rgba(11,59,60,0.04),0_8px_24px_-18px_rgba(11,59,60,0.18)]"
          : "bg-snow/90 backdrop-blur border-transparent",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
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
              to="/get-help"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-coral px-4 text-[14px] font-medium text-ink hover:bg-[#FFDE33] active:scale-[0.96] transition-[background-color,transform]"
            >
              Get Help
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
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
                {col.items.map((item) => {
                  const ItemIcon = ITEM_ICON[item.href] ?? Icon;
                  return (
                    <ListItem
                      key={item.href}
                      href={item.href}
                      title={item.label}
                      description={item.description}
                      Icon={ItemIcon}
                    />
                  );
                })}
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
          className="group relative flex items-start gap-3 rounded-xl p-2.5 transition-[background-color,color] duration-200 hover:bg-canvas focus-visible:bg-canvas focus-visible:outline-none"
        >
          <span
            className={cn(
              "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
              "bg-canvas text-ink-muted ring-1 ring-ink/5",
              "transition-[background-color,color,transform,box-shadow] duration-300",
              "group-hover:bg-ink group-hover:text-snow group-hover:-rotate-6 group-hover:scale-105",
              "group-hover:shadow-[0_4px_12px_-4px_rgba(11,59,60,0.25)] group-hover:ring-transparent",
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
          >
            <Icon size={16} aria-hidden="true" strokeWidth={1.75} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-1.5 text-[14px] font-medium text-ink leading-tight transition-colors duration-200 group-hover:text-primary">
              <span>{title}</span>
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="opacity-0 -translate-x-1 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              />
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
                    {section.columns.flatMap((c) => c.items).map((item) => {
                      const ItemIcon = ITEM_ICON[item.href] ?? Icon;
                      return (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            onClick={onClose}
                            className="group flex items-center gap-3 rounded-lg px-2 py-2.5 text-[14px] text-ink-muted hover:text-ink hover:bg-canvas active:scale-[0.98] transition-[background-color,color,transform]"
                          >
                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-canvas text-ink-muted ring-1 ring-ink/5 group-hover:bg-ink group-hover:text-snow group-hover:ring-transparent transition-[background-color,color] duration-200">
                              <ItemIcon size={14} aria-hidden="true" strokeWidth={1.75} />
                            </span>
                            <span className="flex-1">{item.label}</span>
                            <ChevronRight
                              size={14}
                              aria-hidden="true"
                              className="text-ink-muted/60 transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-col gap-2">
          <Link
            to="/get-help"
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-coral text-ink text-[15px] font-medium active:scale-[0.98] transition-transform"
          >
            Get Help
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
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
