import type { FormField } from "@/lib/forms/submit";

interface Props {
  fields: FormField[];
  className?: string;
}

/**
 * Renders a read-only summary of what the user just submitted,
 * shown alongside the post-submit thank-you message.
 */
export function SubmissionSummary({ fields, className }: Props) {
  if (!fields.length) return null;
  return (
    <dl
      className={
        "mt-6 divide-y divide-hairline rounded-xl border border-hairline bg-snow/60 " +
        (className ?? "")
      }
      aria-label="Your submission"
    >
      {fields.map((f) => (
        <div key={f.label} className="grid grid-cols-[120px_1fr] gap-3 px-4 py-3">
          <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-muted self-start pt-0.5">
            {f.label}
          </dt>
          <dd className="text-[14px] text-ink whitespace-pre-wrap break-words">
            {f.value || "—"}
          </dd>
        </div>
      ))}
    </dl>
  );
}
