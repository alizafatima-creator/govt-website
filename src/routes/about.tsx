import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import principalPhoto from "@/assets/principal.jpg";
import vicePrincipalPhoto from "@/assets/vice-principal.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Diamond } from "@/components/site/Diamond";
import { CampusGallery } from "@/components/site/Gallery";
import { councilMembers } from "@/data/college";

const title = "About the College — GGCW Qila Didar Singh";
const description =
  "History, mission, messages from the Principal and Vice Principal, the College Council and a campus gallery of Government Graduate College for Women, Qila Didar Singh.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function LeaderMessage({
  photo,
  name,
  role,
  paragraphs,
  reverse,
}: {
  photo: string;
  name: string;
  role: string;
  paragraphs: string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[20rem_1fr]">
      <figure
        className={`mx-auto w-full max-w-xs border border-border bg-card p-3 shadow-frame ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <img
          src={photo}
          alt={`${name}, ${role}`}
          width={768}
          height={896}
          loading="lazy"
          className="aspect-3/4 w-full object-cover"
        />
        <figcaption className="border-t border-gold/40 pt-3 text-center text-sm">
          <span className="block font-semibold text-primary">{name}</span>
          <span className="text-muted-foreground">{role}</span>
        </figcaption>
      </figure>
      <div>
        <h3 className="text-2xl font-semibold text-primary">Message from the {role}</h3>
        <span className="rule-gold mt-4 block w-24" aria-hidden="true" />
        {paragraphs.map((p, i) => (
          <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <p className="mt-6 font-serif text-base text-foreground">
          {name}
          <span className="block text-sm text-muted-foreground">{role}</span>
        </p>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the College"
        titleUrdu="کالج کا تعارف"
        subtitle="A public-sector women's degree college serving Qila Didar Singh and the surrounding union councils of District Gujranwala."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our Story" title="History & Mission" />
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            [Placeholder] Government Graduate College for Women, Qila Didar Singh was established to
            bring higher education within reach of young women in the rural belt of District
            Gujranwala, where distance and cost had long limited access beyond matriculation. Beginning
            as an intermediate college, the institution was progressively upgraded to degree status and
            now offers associate and four-year honours programmes affiliated with University of the
            Punjab.
          </p>
          <p>
            [Placeholder] Our mission is to provide affordable, disciplined and academically rigorous
            education that prepares students for professional life, further study and responsible
            citizenship. We seek to develop intellectual curiosity, moral integrity and a lasting
            respect for learning, in keeping with the values of our national heritage.
          </p>
          <p>
            [Placeholder] The College operates under the Higher Education Department, Government of the
            Punjab, and its examinations are conducted by the Board of Intermediate and Secondary
            Education, Gujranwala, and University of the Punjab, Lahore.
          </p>
        </div>
      </section>

      <section className="border-y border-gold bg-secondary py-20">
        <figure className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Quote className="mx-auto size-8 text-gold" aria-hidden="true" />
          <blockquote className="mt-6 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
            “No nation can rise to the height of glory unless your women are side by side with you.”
          </blockquote>
          <p className="urdu mx-auto mt-6 max-w-xl text-lg text-foreground/85" lang="ur" dir="rtl">
            ”کوئی قوم اُس وقت تک عروج حاصل نہیں کر سکتی جب تک اُس کی خواتین مردوں کے شانہ بشانہ نہ
            ہوں۔“
          </p>
          <figcaption className="mt-6 text-sm font-semibold tracking-[0.16em] uppercase text-primary">
            Quaid-e-Azam Muhammad Ali Jinnah
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6">
        <LeaderMessage
          photo={principalPhoto}
          name="Prof. [Principal's Name]"
          role="Principal"
          paragraphs={[
            "[Placeholder] Dear students and parents, it gives me great pleasure to welcome you to Government Graduate College for Women, Qila Didar Singh. This College was founded on a simple conviction: that a daughter educated in her own town lifts an entire household with her.",
            "[Placeholder] We offer a structured academic environment supported by qualified faculty, well-equipped laboratories, a central library and a culture of discipline and mutual respect. Our students consistently distinguish themselves in Board and University examinations, and many proceed to professional institutions across the Punjab.",
            "[Placeholder] I encourage every student to make full use of the opportunities available here — the classroom, the laboratory, the library and the co-curricular societies. My office remains open to students and parents alike for guidance and support.",
          ]}
        />
        <span className="rule-gold mx-auto block w-full max-w-xl" aria-hidden="true" />
        <LeaderMessage
          reverse
          photo={vicePrincipalPhoto}
          name="Prof. [Vice Principal's Name]"
          role="Vice Principal"
          paragraphs={[
            "[Placeholder] As Vice Principal, my responsibility is to ensure that the academic calendar, examination schedule and student discipline function smoothly so that teaching remains uninterrupted throughout the session.",
            "[Placeholder] I urge students to maintain regular attendance, to seek help from their teachers without hesitation, and to treat the College as a shared trust that each generation of students hands on to the next.",
          ]}
        />
      </section>

      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Administration"
            title="College Council"
            subtitle="Senior faculty and officers responsible for academic and administrative governance."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {councilMembers.map((m) => (
              <li
                key={m.designation}
                className="flex items-start gap-3 border border-border bg-background p-5"
              >
                <Diamond className="mt-1.5 size-2" />
                <div>
                  <p className="font-semibold text-primary">{m.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{m.designation}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Campus" title="Photo Gallery" />
        <CampusGallery className="mt-10" />
      </section>
    </>
  );
}