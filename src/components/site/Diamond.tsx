import { cn } from "@/lib/utils";

/** Small hexagonal/diamond motif echoing the college crest. Purely decorative. */
export function Diamond({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-2 rotate-45 border border-gold bg-gold/40", className)}
    />
  );
}

/** Symmetrical gold divider with a centred diamond. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="rule-gold w-16 sm:w-28" />
      <Diamond />
      <span className="rule-gold w-16 sm:w-28" />
    </div>
  );
}