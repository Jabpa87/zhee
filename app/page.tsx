import Image from "next/image";
import Link from "next/link";
import { ImageStrip } from "@/components/ImageStrip";
import { PageHero } from "@/components/PageHero";
import { founderProfile, pexelsImages } from "@/lib/site-data";

const divisions = [
  {
    title: "Aviation",
    description: "Executive charter coordination, fleet support, and maintenance-ready operations.",
    href: "/aviation",
    image: pexelsImages.heroAviation,
  },
  {
    title: "Solar Energy",
    description: "Commercial and industrial solar infrastructure with lifecycle support.",
    href: "/solar-energy",
    image: pexelsImages.heroSolar,
  },
  {
    title: "Engineering / Technical",
    description: "Project diagnostics, technical supervision, and turnkey implementation.",
    href: "/engineering-projects",
    image: pexelsImages.heroEngineering,
  },
  {
    title: "Media / Projects",
    description: "Project communication systems that improve trust and partner confidence.",
    href: "/project-portfolio",
    image: pexelsImages.heroMedia,
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="ZHEE Ecosystem"
        title="A premium digital platform designed around Mr. Ngozi Christopher Faith's venture ecosystem."
        subtitle="This proposal mockup positions ZHEE as a modern, credible, multi-venture brand where each division is clear, conversion-focused, and investor-ready."
        primaryCta={{ href: "/contact", label: "Request Full Website Build" }}
        secondaryCta={{ href: "/project-portfolio", label: "Review Portfolio" }}
        image={pexelsImages.heroAviation}
        imageAlt="Aircraft on runway"
      />

      <section className="section-wrap pt-4">
        <div className="card">
          <p className="kicker">Founder Context</p>
          <h2 className="mt-4 font-display text-3xl text-brand-surface">{founderProfile.name}</h2>
          <p className="mt-2 text-sm font-semibold text-brand-accent">{founderProfile.role}</p>
          <p className="mt-4 max-w-4xl text-brand-muted">{founderProfile.summary}</p>
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-4 md:grid-cols-2">
          {divisions.map((division) => (
            <article key={division.title} className="card overflow-hidden p-0">
              <div className="relative h-44">
                <Image src={division.image} alt={`${division.title} division`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Division</p>
                <h3 className="mt-2 font-display text-3xl text-brand-surface">{division.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{division.description}</p>
                <Link href={division.href} className="mt-5 inline-block text-sm font-semibold text-brand-accent">
                  Open Division Page →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ImageStrip title="Project Gallery (No People, Equipment and Facilities Focus)" images={[...pexelsImages.aviation, ...pexelsImages.solar.slice(0, 1)]} />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="kicker">Call To Action</p>
            <h3 className="mt-4 font-display text-3xl text-brand-surface">Launch a founder-centered digital presence for ZHEE.</h3>
            <p className="mt-2 text-sm text-brand-muted">Website structure, visual identity, and lead capture aligned to business growth goals.</p>
          </div>
          <Link href="/contact" className="cta-button w-fit">
            Start Proposal Sprint
          </Link>
        </div>
      </section>
    </>
  );
}
