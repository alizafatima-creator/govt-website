import { SectionDivider } from "./Diamond";

export function PageHeader({
  title,
  subtitle,
  titleUrdu,
}: {
  title: string;
  subtitle?: string;
  titleUrdu?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <h1 className="fade-up text-balance text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
          {title}
        </h1>
        {titleUrdu ? (
          <p className="urdu mt-4 text-center text-lg text-foreground/80" lang="ur" dir="rtl">
            {titleUrdu}
          </p>
        ) : null}
        <SectionDivider className="mt-6" />
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}