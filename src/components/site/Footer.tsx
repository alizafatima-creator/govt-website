import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import crest from "@/assets/crest.png";
import { college } from "@/data/college";

const quickLinks = [
  { to: "/about", label: "About the College" },
  { to: "/academics", label: "Programmes & Departments" },
  { to: "/admissions", label: "Admissions & Fee" },
  { to: "/notices", label: "Notice Board" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-gold bg-maroon-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-start gap-3">
            <img
              src={crest}
              alt=""
              width={512}
              height={512}
              loading="lazy"
              className="size-12 shrink-0"
            />
            <p className="font-serif text-base leading-snug font-semibold">
              {college.name}
              <span className="mt-1 block text-xs font-normal tracking-[0.16em] uppercase text-gold">
                {college.location}
              </span>
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            A public-sector degree college under the Higher Education Department, Government of the
            Punjab, affiliated with University of the Punjab and BISE Gujranwala.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-gold">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{college.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${college.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-gold">
                {college.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${college.email}`} className="hover:text-gold">
                {college.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{college.officeHours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/85 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Twitter, label: "X (Twitter)" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center border border-gold/50 text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 aspect-16/9 w-full overflow-hidden border border-border bg-card">
  <iframe
    title={`${college.name || 'College'} Location Map`}
    src={`https://maps.google.com/maps?q=${encodeURIComponent(
      college.location || 'Qila Didar Singh, Gujranwala'
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
    className="h-full w-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>

      <div className="border-t border-gold/25">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {college.name}, {college.location}. All rights reserved.
          </p>
          <p className="urdu text-sm leading-none" lang="ur" dir="rtl">
            گورنمنٹ گریجویٹ کالج برائے خواتین، قلعہ دیدار سنگھ، گوجرانوالہ
          </p>
        </div>
      </div>
    </footer>
  );
}