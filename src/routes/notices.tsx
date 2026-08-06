import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Youtube, Twitter } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NoticeList } from "@/components/site/NoticeList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { college } from "@/data/college";

const title = "Notices & Contact — GGCW Qila Didar Singh";
const description =
  "College notice board with admission, result, examination and general announcements, plus address, phone, office hours and contact form.";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: NoticesPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000),
});

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    });

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    e.currentTarget.reset();
    toast.success("Thank you. Your message has been received by the College office.");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      <div>
        <Label htmlFor="c-name">Name</Label>
        <Input id="c-name" name="name" maxLength={100} className="mt-2" autoComplete="name" />
        {errors["name"] ? (
          <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="c-email">Email</Label>
        <Input
          id="c-email"
          name="email"
          type="email"
          maxLength={255}
          className="mt-2"
          autoComplete="email"
        />
        {errors["email"] ? (
          <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="c-message">Message</Label>
        <Textarea id="c-message" name="message" rows={5} maxLength={1000} className="mt-2" />
        {errors["message"] ? (
          <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>
        ) : null}
      </div>
      <Button type="submit">Send message</Button>
    </form>
  );
}

function NoticesPage() {
  return (
    <>
      <PageHeader
        title="Notices & Contact"
        titleUrdu="اطلاعات و رابطہ"
        subtitle="Official announcements from the College office, along with contact details and office hours."
      />

      <section id="top" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Notice Board"
          title="Announcements"
          subtitle="Filter by category or change the order to find admission notices, results, examination schedules and general circulars."
        />
        <div className="mt-10">
          <NoticeList />
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Reach Us" title="Contact Information" />
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-foreground">Address</span>
                  <span className="text-muted-foreground">{college.address}</span>
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-foreground">Telephone</span>
                  <a
                    href={`tel:${college.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    {college.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-foreground">Email</span>
                  <a
                    href={`mailto:${college.email}`}
                    className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    {college.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-foreground">Office hours</span>
                  <span className="text-muted-foreground">{college.officeHours}</span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Twitter, label: "X (Twitter)" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center border border-border bg-card text-primary transition-colors hover:border-gold"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex aspect-16/9 flex-col items-center justify-center border border-border bg-card px-6 text-center">
              <MapPin className="size-7 text-gold" aria-hidden="true" />
              <p className="mt-3 text-sm text-muted-foreground">
                Map embed placeholder — {college.location}
              </p>
            </div>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Enquiries" title="Send Us a Message" />
            <div className="mt-2 border border-border bg-card p-6 shadow-frame sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}