import { useMemo, useState } from "react";
import { Calendar, Download, FileText } from "lucide-react";
import { notices as allNotices, noticeCategories, type Notice } from "@/data/college";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function NoticeItem({ notice }: { notice: Notice }) {
  return (
    <article className="border border-border bg-card p-5 shadow-frame transition-colors hover:border-gold sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="border border-gold bg-accent px-2.5 py-1 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-accent-foreground">
          {notice.category}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="size-3.5" aria-hidden="true" />
          <time dateTime={notice.date}>{formatDate(notice.date)}</time>
        </span>
        <span className="text-xs text-muted-foreground">Ref: {notice.id}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-primary">{notice.title}</h3>
      {notice.titleUrdu ? (
        <p className="urdu mt-2 text-base text-foreground/80" lang="ur" dir="rtl">
          {notice.titleUrdu}
        </p>
      ) : null}
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{notice.description}</p>
      {notice.attachment ? (
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <Download className="size-4" aria-hidden="true" />
          Download attachment ({notice.attachment})
        </a>
      ) : (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="size-4" aria-hidden="true" />
          No attachment
        </p>
      )}
    </article>
  );
}

export function NoticeList() {
  const [category, setCategory] = useState<string>("All");
  const [order, setOrder] = useState<"newest" | "oldest">("newest");

  const visible = useMemo(() => {
    const filtered =
      category === "All" ? allNotices : allNotices.filter((n) => n.category === category);
    return [...filtered].sort((a, b) =>
      order === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date),
    );
  }, [category, order]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter notices by category">
          {["All", ...noticeCategories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "cursor-pointer border px-3 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors",
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/70 hover:border-gold",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
          Sort
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value as "newest" | "oldest")}
            className="border border-border bg-card px-2 py-1.5 text-xs font-normal normal-case tracking-normal text-foreground"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>

      <div className="mt-6 space-y-4">
        {visible.map((n) => (
          <NoticeItem key={n.id} notice={n} />
        ))}
        {visible.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No notices in this category at present.
          </p>
        ) : null}
      </div>
    </div>
  );
}