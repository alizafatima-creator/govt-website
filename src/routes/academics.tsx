import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Diamond } from "@/components/site/Diamond";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { programmes, departments, faculty } from "@/data/college";

const title = "Academics — Programmes & Departments | GGCW Qila Didar Singh";
const description =
  "Intermediate, ADP and BS programmes with eligibility criteria, semester-wise course schemes, and the College's thirteen academic departments.";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics"
        titleUrdu="شعبہ تعلیم"
        subtitle="Programme structures, eligibility criteria and course schemes for every level of study offered at the College."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Programmes"
          title="Levels of Study"
          subtitle="Select a programme to view its disciplines, eligibility criteria and course scheme."
        />
        <Accordion type="single" collapsible defaultValue="intermediate" className="mt-10">
          {programmes.map((p) => (
            <AccordionItem
              key={p.id}
              value={p.id}
              className="mb-4 border border-border bg-card px-5 shadow-frame"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <span>
                  <span className="block font-serif text-lg font-semibold text-primary sm:text-xl">
                    {p.level}
                  </span>
                  <span className="mt-1 block text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">
                    {p.duration}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <p className="text-base leading-relaxed text-muted-foreground">{p.summary}</p>

                <h3 className="mt-6 text-sm font-semibold tracking-[0.16em] uppercase text-primary">
                  Disciplines Offered
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.disciplines.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Diamond className="mt-1.5 size-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 text-sm font-semibold tracking-[0.16em] uppercase text-primary">
                  Eligibility Criteria
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.eligibility}</p>

                {p.hod ? (
                  <p className="mt-6 border border-gold/50 bg-accent px-4 py-3 text-sm text-accent-foreground">
                    <span className="font-semibold">Head of Department:</span> {p.hod}
                  </p>
                ) : null}

                {p.groups ? (
                  <>
                    <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] uppercase text-primary">
                      Subject Groups
                    </h3>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      {p.groups.map((g) => (
                        <div key={g.title} className="border border-border bg-background p-4">
                          <h4 className="text-base font-semibold text-primary">{g.title}</h4>
                          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                            {g.subjects.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}

                {p.semesters ? (
                  <>
                    <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] uppercase text-primary">
                      Semester-wise Course Scheme
                    </h3>
                    <div className="mt-3 overflow-x-auto border border-border">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-secondary">
                            <TableHead className="w-40 text-primary">Semester</TableHead>
                            <TableHead className="text-primary">Courses</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {p.semesters.map((s) => (
                            <TableRow key={s.title}>
                              <TableCell className="align-top font-semibold text-foreground">
                                {s.title}
                              </TableCell>
                              <TableCell className="text-muted-foreground">
                                {s.courses.join(" · ")}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Faculties"
            title="Departments"
            subtitle="Thirteen teaching departments deliver the intermediate, associate and honours curricula."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <li key={d.name} className="border border-border bg-card p-6 shadow-frame">
                <h3 className="font-serif text-lg font-semibold text-primary">{d.name}</h3>
                <span className="rule-gold mt-3 block w-14" aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-sm">
                  <span className="font-semibold text-foreground">HOD:</span>{" "}
                  <span className="text-muted-foreground">{d.hod}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Our Teachers"
          title="Faculty Highlights"
          subtitle="Photographs and details are placeholders and will be updated with the current faculty roster."
        />
        <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {faculty.map((f, i) => (
            <li key={i} className="border border-border bg-card p-4 text-center shadow-frame">
              <span className="mx-auto flex aspect-3/4 w-full items-center justify-center border border-dashed border-gold/60 bg-secondary">
                <UserRound className="size-8 text-muted-foreground" aria-hidden="true" />
              </span>
              <p className="mt-3 text-sm font-semibold text-primary">{f.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.designation}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}