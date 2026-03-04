import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShowcaseSlider } from "@/components/ShowcaseSlider";
import { pexelsImages } from "@/lib/site-data";

const projects = [
  "Facility diagnostics and retrofit planning",
  "Power systems integration for mixed-use sites",
  "Technical supervision of electromechanical works",
  "Preventive maintenance frameworks for uptime",
];

const engineeringSlides = [
  {
    image: pexelsImages.engineering[0],
    title: "Technical Depth",
    caption: "Engineering pages designed to communicate precision and execution confidence.",
  },
  {
    image: pexelsImages.engineering[1],
    title: "Operational Control",
    caption: "Project oversight, quality checks, and timeline visibility built into the story.",
  },
  {
    image: pexelsImages.engineering[2],
    title: "Infrastructure Readiness",
    caption: "Structured communication that helps clients trust delivery before kickoff.",
  },
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
        imageAlt="Engineering operations room"
      />

      <ShowcaseSlider slides={engineeringSlides} label="Engineering Showcase" />

      <section className="section-wrap pt-4">
        <div className="card">
          <h2 className="font-display text-3xl text-brand-surface">Engineering Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={project} className="rounded-2xl border border-brand-line bg-[#f7fbff] p-5 text-sm text-brand-surface fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                {project}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between fade-up">
          <h3 className="font-display text-3xl text-brand-surface">Publish technical authority with a stronger project-facing website.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Build Engineering Presence
          </Link>
        </div>
      </section>
    </>
  );
}
