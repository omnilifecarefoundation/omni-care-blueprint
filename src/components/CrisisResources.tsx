import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertTriangle, ArrowRight, Baby, Brain, HeartPulse, Phone, User, X } from "lucide-react";

type Resource = { label: string; number: string };
type Group = {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  tint: string;
  items: Resource[];
};

const GROUPS: Group[] = [
  {
    title: "Emergency",
    Icon: AlertTriangle,
    tint: "var(--pillar-mental)",
    items: [
      { label: "National Emergency", number: "112" },
      { label: "Ambulance", number: "108" },
    ],
  },
  {
    title: "Mental Health",
    Icon: Brain,
    tint: "var(--pillar-mental)",
    items: [
      { label: "Tele-MANAS", number: "14416" },
      { label: "KIRAN", number: "1800 599 0019" },
      { label: "AASRA", number: "+91 98204 66726" },
    ],
  },
  {
    title: "Women",
    Icon: User,
    tint: "var(--pillar-social)",
    items: [
      { label: "Women's Helpline", number: "181" },
      { label: "Women's Helpline", number: "1091" },
    ],
  },
  {
    title: "Children",
    Icon: Baby,
    tint: "var(--pillar-human)",
    items: [{ label: "Childline", number: "1098" }],
  },
  {
    title: "Seniors",
    Icon: HeartPulse,
    tint: "var(--pillar-inclusive)",
    items: [{ label: "Elderline", number: "14567" }],
  },
];

function telHref(n: string) {
  return `tel:${n.replace(/[^0-9+]/g, "")}`;
}

export function CrisisResourcesBanner() {
  return (
    <Dialog>
      <div
        className="relative w-full overflow-hidden text-snow"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #A8101F 0%, #C81E33 45%, #D7263D 100%)",
          boxShadow:
            "inset 0 -1px 0 0 rgba(0,0,0,0.22), 0 1px 0 0 rgba(0,0,0,0.10)",
        }}
      >
        {/* Subtle sheen sweep */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 animate-[crisisSheen_7s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-[1280px] px-3 sm:px-6">
          <DialogTrigger asChild>
            <button
              type="button"
              className="group flex w-full items-center justify-center gap-2 py-2 text-[12.5px] font-medium leading-tight tracking-[0.005em] text-snow transition-[transform,filter] duration-200 hover:brightness-[1.06] active:scale-[0.997] sm:gap-2.5 sm:text-[13px]"
            >
              <span
                aria-hidden="true"
                className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-snow/70 opacity-70 animate-ping" />
                <span
                  className="relative inline-flex h-[7px] w-[7px] rounded-full bg-snow"
                  style={{ boxShadow: "0 0 0 1.5px rgba(255,255,255,0.45)" }}
                />
              </span>
              <span
                className="hidden shrink-0 items-center rounded-full bg-snow px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.18em] sm:inline-flex"
                style={{ color: "#A8101F" }}
              >
                Urgent
              </span>
              <span className="text-balance text-snow">
                <span className="sm:hidden font-semibold">Crisis help · </span>
                <span className="hidden sm:inline font-medium">In a crisis right now? </span>
                <span className="font-semibold underline decoration-snow/60 decoration-1 underline-offset-[5px] transition-colors group-hover:decoration-snow">
                  Get emergency numbers
                </span>
              </span>
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="shrink-0 text-snow transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </DialogTrigger>
        </div>
      </div>


      <DialogContent className="flex max-h-[88vh] w-[calc(100vw-0.75rem)] max-w-[42rem] flex-col gap-0 overflow-hidden rounded-[20px] border-hairline bg-snow p-0 shadow-lg sm:w-[calc(100vw-2rem)] [&>button]:hidden">
        <div className="shrink-0 bg-primary px-4 pb-5 pt-4 text-snow sm:px-8 sm:pb-6 sm:pt-7">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="space-y-2 text-left">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                Help is one call away
              </p>
              <DialogTitle className="pr-2 font-sans text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-snow text-balance">
                Crisis Resources
              </DialogTitle>
              <DialogDescription className="max-w-[34rem] pt-1 text-[14px] leading-relaxed text-pretty text-snow/78 sm:text-[15px]">
                If you or someone you know is facing an immediate crisis, please use the
                resources below. Omni Lifecare is not an emergency response service.
              </DialogDescription>
            </DialogHeader>

            <DialogClose
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-snow/20 bg-snow/8 text-snow transition-[background-color,border-color,transform,opacity] duration-200 hover:border-snow/35 hover:bg-snow/14 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Close crisis resources"
            >
              <X size={18} strokeWidth={1.9} aria-hidden="true" />
            </DialogClose>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-8 sm:py-6">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {GROUPS.map((g) => (
              <li
                key={g.title}
                className="relative overflow-hidden rounded-2xl border border-hairline bg-canvas p-3.5 sm:p-4"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background: `radial-gradient(120% 80% at 0% 0%, color-mix(in oklab, ${g.tint} 12%, transparent) 0%, transparent 60%)`,
                  }}
                />
                <div className="relative mb-3 flex items-center gap-2.5">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-snow ring-1 ring-border"
                    style={{ color: `color-mix(in oklab, ${g.tint} 75%, var(--ink))` }}
                  >
                    <g.Icon size={16} aria-hidden={true} />
                  </span>
                  <h3 className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-ink">
                    {g.title}
                  </h3>
                </div>
                <ul className="relative space-y-1.5">
                  {g.items.map((r) => (
                    <li key={`${g.title}-${r.number}`}>
                      <a
                        href={telHref(r.number)}
                        className="group -mx-1 flex min-h-10 items-start justify-between gap-2 rounded-xl px-2.5 py-2 transition-[background-color,transform] duration-200 hover:bg-snow active:scale-[0.99] sm:items-center"
                      >
                        <span className="pr-2 text-[13px] leading-snug text-ink-muted sm:text-[13.5px]">
                          {r.label}
                        </span>
                        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[13px] font-medium text-ink tabular-nums sm:text-[13.5px]">
                          <Phone
                            size={11}
                            aria-hidden="true"
                            className="text-ink-muted group-hover:text-primary transition-colors"
                          />
                          {r.number}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 border-t border-hairline bg-gold/15 px-4 py-4 sm:px-8">
          <p className="text-[13px] leading-relaxed text-pretty text-ink sm:text-[13.5px]">
            <strong className="font-semibold">
              If this is a life-threatening emergency, call{" "}
              <a href="tel:112" className="underline underline-offset-2 hover:text-primary">
                112
              </a>{" "}
              immediately.
            </strong>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
