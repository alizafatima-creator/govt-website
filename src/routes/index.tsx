import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Laptop } from "lucide-react";
import heroImage from "@/assets/campus-hero.jpg";
import principalPhoto from "@/assets/principal.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionDivider, Diamond } from "@/components/site/Diamond";
import { CampusGallery } from "@/components/site/Gallery";
import { NoticeItem } from "@/components/site/NoticeList";
import { college, stats, programmes, scholarships, notices } from "@/data/college";

const title = "Govt. Graduate College for Women, Qila Didar Singh";
const description =
  "Official website of Government Graduate College for Women, Qila Didar Singh, Gujranwala — Intermediate, ADP and BS programmes, admissions, scholarships and notices.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const latest = [...notices].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Campus of Government Graduate College for Women, Qila Didar Singh"
          width={1920}
          height={1080}
          className="h-[26rem] w-full object-cover sm:h-[34rem]"
        />
        <div className="absolute inset-0 bg-maroon-deep/75" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-4xl px-4 text-center text-primary-foreground sm:px-6">
            <p className="fade-up flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              <Diamond className="size-1.5" />
              Higher Education Department, Government of the Punjab
            </p>
            <h1 className="fade-up mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              {college.name}
              <span className="mt-2 block text-lg font-normal text-gold sm:text-2xl">
                {college.location}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
              {college.tagline}
            </p>
            <p className="urdu mt-3 text-center text-base text-gold" lang="ur" dir="rtl">
              {college.taglineUrdu}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/academics">View Programmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card" aria-label="College at a glance">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-border px-6 py-8 text-center sm:border-b-0">
              <dd className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Principal's welcome */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[22rem_1fr]">
          <figure className="mx-auto w-full max-w-sm border border-border bg-card p-3 shadow-frame">
            <img
              src={principalPhoto}
              alt="The Principal of the College"
              width={768}
              height={896}
              loading="lazy"
              className="aspect-3/4 w-full object-cover"
            />
            <figcaption className="border-t border-gold/40 pt-3 text-center text-sm">
              <span className="block font-semibold text-primary">Prof. Farhana</span>
              <span className="text-muted-foreground">Principal</span>
            </figcaption>
          </figure>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Principal's Welcome"
              title="A tradition of disciplined learning for the daughters of our district"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              It is my privilege to welcome you to Government Graduate College for Women, Qila Didar
              Singh. For more than two decades this institution has served the young women of the
              surrounding villages and towns, offering affordable, quality education under the
              patronage of the Higher Education Department, Government of the Punjab.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our faculty is committed not only to academic achievement but to the character,
              confidence and civic responsibility of every student who passes through these gates.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Read the full message
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Academics"
            title="Our Programmes"
            subtitle="Study pathways from intermediate level through to four-year honours degrees, affiliated with BISE Gujranwala and University of the Punjab."
          />
          <SectionDivider className="mt-8" />
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {programmes.map((p) => (
              <li key={p.id} className="flex flex-col border border-border bg-card p-6 shadow-frame">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold-foreground">
                  <span className="bg-gold px-2 py-1">{p.duration}</span>
                </p>
                <h3 className="mt-4 text-xl font-semibold text-primary">{p.level}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-foreground/85">
                  {p.disciplines.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <Diamond className="mt-1.5 size-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/academics"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Programme details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Campus life */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Campus Life"
          title="Our Blocks & Facilities"
          subtitle="Teaching blocks, laboratories and a central library set within a walled campus of lawns and covered walkways."
        />
        <CampusGallery className="mt-10" />
      </section>

      {/* Scholarships */}
      <section className="border-y border-gold bg-maroon-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              <Diamond className="size-1.5" />
              Financial Support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Government Scholarship Schemes
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {scholarships.map((s, i) => (
              <li key={s.title} className="border border-gold/50 p-6">
                <span className="flex size-10 items-center justify-center border border-gold text-gold">
                  {i === 0 ? (
                    <GraduationCap className="size-5" aria-hidden="true" />
                  ) : (
                    <Laptop className="size-5" aria-hidden="true" />
                  )}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="urdu mt-2 text-base text-gold" lang="ur" dir="rtl">
                  {s.titleUrdu}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{s.blurb}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button asChild variant="gold">
              <Link to="/admissions">Eligibility & how to apply</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest notices */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Notice Board" title="Latest Notices" />
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            View all notices
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {latest.map((n) => (
            <NoticeItem key={n.id} notice={n} />
          ))}
        </div>
      </section>
    </>
  );
}
