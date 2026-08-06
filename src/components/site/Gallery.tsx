import scienceBlock from "@/assets/science-block.jpg";
import bsBlock from "@/assets/bs-block.jpg";
import adpBlock from "@/assets/adp-block.jpg";
import adminBlock from "@/assets/admin-block.jpg";
import library from "@/assets/library.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import { cn } from "@/lib/utils";

export const campusImages = [
  { src: scienceBlock, title: "Science Block", caption: "Chemistry, Physics and Biology laboratories" },
  { src: bsBlock, title: "BS Block", caption: "Lecture halls for the four-year honours programmes" },
  { src: adpBlock, title: "ADP Block", caption: "Classrooms for the associate degree programmes" },
  { src: adminBlock, title: "Admin Block", caption: "Principal's office and administrative branches" },
  { src: library, title: "Central Library", caption: "Reference collection and quiet reading hall" },
  { src: computerLab, title: "Computer Laboratory", caption: "Networked workstations for practical work" },
];

export function CampusGallery({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {campusImages.map((img) => (
        <li key={img.title} className="group border border-border bg-card shadow-frame">
          <div className="overflow-hidden">
            <img
              src={img.src}
              alt={`${img.title} — ${img.caption}`}
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="border-t border-gold/40 p-4">
            <h3 className="text-base font-semibold text-primary">{img.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{img.caption}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}