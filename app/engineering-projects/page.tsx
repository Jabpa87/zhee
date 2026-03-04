import Link from "next/link";
import { ImageStrip } from "@/components/ImageStrip";
import { PageHero } from "@/components/PageHero";
import { pexelsImages } from "@/lib/site-data";

const projects = [
  "Facility diagnostics and retrofit planning",
  "Power systems integration for mixed-use sites",
  "Technical supervision of electromechanical works",
  "Preventive maintenance frameworks for uptime",
];

export default function EngineeringProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering / Technical Services"
        title="Engineering credibility supported by visual and technical clarity."
        subtitle="This page frames ZHEE's engineering work around methodical delivery, quality control, and infrastructure outcomes."
        primaryCta={{ href: "/contact", label: "Discuss Engineering Scope" }}
        secondaryCta={{ href: "/project-portfolio", label: "View Engineering Cases" }}
        image={pexelsImages.heroEngineering}
        imageAlt="Engineering server room"
      />

      <section className="section-wrap pt-4">
        <div className="card">
          <h2 className="font-display text-3xl text-brand-surface">Engineering Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div key={project} className="rounded-xl border border-brand-line bg-brand-ink/70 p-5 text-sm text-brand-surface">
                {project}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageStrip title="Technical Rooms and Equipment" images={pexelsImages.engineering} />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-3xl text-brand-surface">Publish technical authority with a stronger project-facing website.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Build Engineering Presence
          </Link>
        </div>
      </section>
    </>
  );
}
