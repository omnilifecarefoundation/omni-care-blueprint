import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertTriangle, Brain, User, Baby, HeartPulse, Phone, ArrowRight } from "lucide-react";

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
      <div className="w-full bg-ink text-snow">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
          <DialogTrigger asChild>
            <button
              type="button"
              className="group flex w-full items-center justify-center gap-2 py-2 text-[12.5px] tracking-[0.01em] text-snow/85 hover:text-snow transition-colors"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-1.5 w-1.5 rounded-full bg-gold animate-pulse"
              />
              <span className="text-pretty">
                Need urgent help?{" "}
                <span className="text-gold underline-offset-4 group-hover:underline">
                  Access crisis resources and emergency support
                </span>
              </span>
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="max-w-2xl bg-snow border-hairline p-0 overflow-hidden rounded-2xl">
        <div className="bg-ink text-snow px-6 sm:px-8 pt-7 pb-6">
          <DialogHeader className="text-left space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
              Help is one call away
            </p>
            <DialogTitle className="font-sans font-semibold text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.15] tracking-[-0.02em] text-snow">
              Crisis Resources
            </DialogTitle>
            <DialogDescription className="text-[14px] leading-relaxed text-snow/75 text-pretty pt-1">
              If you or someone you know is facing an immediate crisis, please use the
              resources below. Omni Lifecare is not an emergency response service.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 sm:px-8 py-6 max-h-[60vh] overflow-y-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GROUPS.map((g) => (
              <li
                key={g.title}
                className="relative overflow-hidden rounded-xl border border-hairline bg-canvas p-4"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background: `radial-gradient(120% 80% at 0% 0%, color-mix(in oklab, ${g.tint} 12%, transparent) 0%, transparent 60%)`,
                  }}
                />
                <div className="relative flex items-center gap-2.5 mb-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-snow ring-1 ring-ink/5"
                    style={{ color: `color-mix(in oklab, ${g.tint} 75%, var(--ink))` }}
                  >
                    <g.Icon size={15} aria-hidden={true} />
                  </span>
                  <h3 className="font-sans font-semibold text-[14px] tracking-[-0.01em] text-ink">
                    {g.title}
                  </h3>
                </div>
                <ul className="relative space-y-1.5">
                  {g.items.map((r) => (
                    <li key={`${g.title}-${r.number}`}>
                      <a
                        href={telHref(r.number)}
                        className="group flex items-center justify-between gap-3 rounded-md px-2 py-1.5 -mx-2 hover:bg-snow transition-colors"
                      >
                        <span className="text-[13px] text-ink-muted">{r.label}</span>
                        <span className="flex items-center gap-1.5 font-mono text-[13px] font-medium text-ink tabular-nums">
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

        <div className="border-t border-hairline bg-gold/15 px-6 sm:px-8 py-4">
          <p className="text-[13px] leading-relaxed text-ink text-pretty">
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
