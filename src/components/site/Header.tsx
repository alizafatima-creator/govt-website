import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import crest from "@/assets/crest.png";
import { college } from "@/data/college";
import { NoticeTicker } from "./NoticeTicker";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/notices", label: "Notices & Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="border-b border-border bg-maroon-deep/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label={`${college.name} — home`}>
            <img
              src={crest}
              alt={`Crest of ${college.name}, ${college.location}`}
              width={512}
              height={512}
              className="size-11 shrink-0 sm:size-14"
            />
            <span className="text-primary-foreground">
              <span className="block font-serif text-sm leading-tight font-semibold tracking-tight sm:text-lg">
                {college.name}
              </span>
              <span className="mt-0.5 block text-[0.65rem] tracking-[0.18em] uppercase text-gold sm:text-xs">
                {college.location}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${college.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-primary-foreground/90 transition-colors hover:text-gold"
            >
              <Phone className="size-4" aria-hidden="true" />
              {college.phone}
            </a>
            <Button asChild variant="gold" size="sm">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-sm p-2 text-primary-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <nav aria-label="Primary" className="hidden bg-card lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center px-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="block px-6 py-3 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary"
                activeProps={{
                  className:
                    "border-b-2 border-gold !text-primary font-semibold",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {navItems.map((item) => (
              <li key={item.to} className="border-b border-border last:border-0">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground/85"
                  activeProps={{ className: "!text-primary font-semibold" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <NoticeTicker />
    </header>
  );
}