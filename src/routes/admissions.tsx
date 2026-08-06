import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, Check, Download, GraduationCap, Laptop } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Diamond } from "@/components/site/Diamond";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  admissionSteps,
  requiredDocuments,
  feeStructure,
  scholarships,
  importantDates,
  programmes,
} from "@/data/college";

const title = "Admissions 2026-27 — GGCW Qila Didar Singh";
const description =
  "How to apply, eligibility and required documents, fee structure, scholarships, important dates and the online application form for Government Graduate College for Women, Qila Didar Singh.";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AdmissionsPage,
});

const applicationSchema = z.object({
  name: z.string().trim().min(3, "Please enter your full name").max(100),
  cnic: z
    .string()
    .trim()
    .regex(/^\d{5}-?\d{7}-?\d$/, "Enter a valid 13-digit CNIC / B-Form number"),
  programme: z.string().trim().min(1, "Please select a programme"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+92|0)3\d{2}-?\d{7}$/, "Enter a valid mobile number, e.g. 0300-1234567"),
  email: z.string().trim().email("Enter a valid email address").max(255),
});

const programmeOptions = programmes.flatMap((p) =>
  p.disciplines.map((d) => `${p.level} — ${d}`),
);

function ApplicationForm() {
  const [programme, setProgramme] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = applicationSchema.safeParse({
      name: String(form.get("name") ?? ""),
      cnic: String(form.get("cnic") ?? ""),
      programme,
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
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
    setProgramme("");
    toast.success(
      "Your enquiry has been recorded. Please submit the printed form to the Admission Cell.",
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor="name">Full name (as on documents)</Label>
        <Input id="name" name="name" maxLength={100} className="mt-2" autoComplete="name" />
        {errors["name"] ? <p className="mt-1 text-xs text-destructive">{errors["name"]}</p> : null}
      </div>
      <div>
        <Label htmlFor="cnic">CNIC / B-Form number</Label>
        <Input id="cnic" name="cnic" placeholder="34101-1234567-8" maxLength={15} className="mt-2" />
        {errors["cnic"] ? <p className="mt-1 text-xs text-destructive">{errors["cnic"]}</p> : null}
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="programme">Programme applying for</Label>
        <Select value={programme} onValueChange={setProgramme}>
          <SelectTrigger id="programme" className="mt-2">
            <SelectValue placeholder="Select a programme" />
          </SelectTrigger>
          <SelectContent>
            {programmeOptions.map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors["programme"] ? (
          <p className="mt-1 text-xs text-destructive">{errors["programme"]}</p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="phone">Mobile number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0300-1234567"
          maxLength={15}
          className="mt-2"
          autoComplete="tel"
        />
        {errors["phone"] ? <p className="mt-1 text-xs text-destructive">{errors["phone"]}</p> : null}
      </div>
      <div>
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          maxLength={255}
          className="mt-2"
          autoComplete="email"
        />
        {errors["email"] ? <p className="mt-1 text-xs text-destructive">{errors["email"]}</p> : null}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg">
          Submit application enquiry
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Submission of this form is an expression of interest only. Admission is confirmed after
          verification of original documents at the Admission Cell.
        </p>
      </div>
    </form>
  );
}

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions 2026-27"
        titleUrdu="داخلہ برائے تعلیمی سال 2026-27"
        subtitle="Everything a prospective student needs: the application process, documents, fee schedule, scholarships and key dates."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Process" title="How to Apply" />
        <ol className="mt-10 space-y-5">
          {admissionSteps.map((s, i) => (
            <li key={s.title} className="flex gap-5 border border-border bg-card p-6 shadow-frame">
              <span className="flex size-10 shrink-0 items-center justify-center border border-gold bg-accent font-serif text-lg font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Checklist"
              title="Eligibility & Required Documents"
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              General eligibility: Matriculation for Intermediate admission; Intermediate (HSSC) or
              equivalent for ADP and BS admission, with programme-specific marks and subject
              requirements as listed on the Academics page.
            </p>
            <ul className="mt-6 space-y-3">
              {requiredDocuments.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-8" asChild>
              <a href="#" download>
                <Download className="size-4" aria-hidden="true" />
                Download Prospectus (PDF)
              </a>
            </Button>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Dues" title="Fee Structure" />
            <div className="mt-6 overflow-x-auto border border-border bg-card">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary">
                    <TableHead className="text-primary">Fee type</TableHead>
                    <TableHead className="text-right text-primary">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeStructure.map((f) => (
                    <TableRow key={f.type}>
                      <TableCell className="text-foreground/85">{f.type}</TableCell>
                      <TableCell className="text-right font-medium whitespace-nowrap">
                        {f.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Figures shown are placeholders and are subject to revision by the Higher Education
              Department. Dues are payable only through the designated bank challan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Financial Aid" title="Scholarships & Financial Support" />
        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {scholarships.map((s, i) => (
            <li key={s.title} className="border border-border bg-card p-6 shadow-frame">
              <span className="flex size-10 items-center justify-center border border-gold bg-accent text-accent-foreground">
                {i === 0 ? (
                  <GraduationCap className="size-5" aria-hidden="true" />
                ) : (
                  <Laptop className="size-5" aria-hidden="true" />
                )}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-primary">{s.title}</h3>
              <p className="urdu mt-2 text-base text-foreground/80" lang="ur" dir="rtl">
                {s.titleUrdu}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <h4 className="mt-5 text-sm font-semibold tracking-[0.14em] uppercase text-primary">
                Eligibility
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                {s.eligibility.map((e) => (
                  <li key={e} className="flex items-start gap-2">
                    <Diamond className="mt-1.5 size-1.5" />
                    {e}
                  </li>
                ))}
              </ul>
              <h4 className="mt-5 text-sm font-semibold tracking-[0.14em] uppercase text-primary">
                How to apply
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.how}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="border-2 border-gold bg-accent/60 p-6 sm:p-10">
          <h2 className="flex items-center gap-3 font-serif text-2xl font-semibold text-primary">
            <CalendarDays className="size-6 text-primary" aria-hidden="true" />
            Important Dates
          </h2>
          <p className="urdu mt-2 text-lg text-foreground/85" lang="ur" dir="rtl">
            اہم تاریخیں
          </p>
          <ul className="mt-6 divide-y divide-gold/40">
            {importantDates.map((d) => (
              <li key={d.label} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-semibold text-foreground">{d.label}</p>
                  <p className="urdu text-base text-muted-foreground" lang="ur" dir="rtl">
                    {d.labelUrdu}
                  </p>
                </div>
                <p className="text-sm font-semibold whitespace-nowrap text-primary sm:text-right">
                  {d.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Apply Now"
            title="Application Enquiry Form"
            subtitle="Complete the form below and the Admission Cell will contact you with instructions for submitting your documents."
          />
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}