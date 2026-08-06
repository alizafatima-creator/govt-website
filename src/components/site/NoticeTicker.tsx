import { tickerItems } from "@/data/college";
import { Diamond } from "./Diamond";
import { cn } from "@/lib/utils";

function TickerRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {tickerItems.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={cn(
              "px-4 text-sm whitespace-nowrap",
              item.urdu && "urdu text-base leading-none",
            )}
            {...(item.urdu ? { lang: "ur", dir: "rtl" } : { lang: "en" })}
          >
            {item.text}
          </span>
          <Diamond className="size-1.5 border-gold bg-gold/70" />
        </span>
      ))}
    </div>
  );
}

export function NoticeTicker() {
  return (
    <div className="border-b border-gold/40 bg-maroon-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-stretch">
        <span className="hidden shrink-0 items-center gap-2 border-r border-gold/40 bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground sm:flex">
          Announcements
        </span>
        <div className="group relative flex-1 overflow-hidden py-2">
          <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
            <TickerRow />
            <TickerRow ariaHidden />
          </div>
        </div>
      </div>
    </div>
  );
}