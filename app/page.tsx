import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShowcaseSlider } from "@/components/ShowcaseSlider";
import { founderProfile, pexelsImages } from "@/lib/site-data";

const divisions = [
  {
    title: "Aviation",
    description: "Executive charter coordination, fleet support, and maintenance-ready operations for fast-moving business clients.",
    href: "/aviation",
    image: pexelsImages.heroAviation,
  },
  {
    title: "Solar Energy",
    description: "Unit-by-unit solar installations for homes, offices, and small business facilities.",
    href: "/solar-energy",
    image: pexelsImages.heroSolar,
  },
  {
    title: "Engineering / Technical",
    description: "Diagnostics, technical supervision, and structured implementation for infrastructure projects.",
    href: "/engineering-projects",
    image: pexelsImages.heroEngineering,
  },
  {
    title: "Media / Projects",
    description: "Project communication that turns technical delivery into strong market visibility.",
    href: "/project-portfolio",
    image: pexelsImages.heroMedia,
  },
];

const spotlightSlides = [
  {
    image: pexelsImages.nigeriaUrban[0],
    title: "Built for Nigerian Business Visibility",
    caption: "Premium web identity for aviation, energy, and engineering ventures operating in Nigerian markets.",
  },
  {
    image: pexelsImages.nigeriaUrban[1],
    title: "Multi-Venture Ecosystem, One Strong Presence",
    caption: "Unified structure helps clients quickly understand services and trust delivery capability.",
  },
  {
    image: pexelsImages.nigeriaUrban[2],
    title: "Credibility + Conversion in One Experience",
    caption: "High-quality visuals, clear calls to action, and modern interface motion built for lead generation.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="ZHEE Ecosystem"
        title="A vibrant, premium digital platform crafted for Nigerian market impact."
        subtitle="This redesign positions ZHEE as a high-value multi-venture company with modern visuals, conversion flow, and brand authority led by Mr. Ngozi Christopher Faith."
        primaryCta={{ href: "/contact", label: "Request Full Website Build" }}
        secondaryCta={{ href: "/project-portfolio", label: "Review Portfolio" }}
        image={pexelsImages.nigeriaUrban[3]}
        imageAlt="Nigerian urban skyline"
      />

      <section className="section-wrap pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Founder-Led</p>
            <h2 className="mt-2 font-display text-2xl text-brand-surface">{founderProfile.name}</h2>
            <p className="mt-2 text-sm text-brand-muted">{founderProfile.role}</p>
          </div>
          <div className="card fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Market Position</p>
            <p className="mt-2 text-sm text-brand-muted">Designed to speak to Nigerian clients with local relevance and global presentation quality.</p>
          </div>
          <div className="card fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Digital Goal</p>
            <p className="mt-2 text-sm text-brand-muted">Showcase capability, build trust quickly, and convert qualified inquiries across all divisions.</p>
          </div>
        </div>
      </section>

      <ShowcaseSlider slides={spotlightSlides} label="Animated Brand Showcase" />

      <section className="section-wrap">
        <div className="grid gap-4 md:grid-cols-2">
          {divisions.map((division, idx) => (
            <article key={division.title} className="card overflow-hidden p-0 fade-up" style={{ animationDelay: `${idx * 120}ms` }}>
              <div className="relative h-48">
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

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between fade-up">
          <div>
            <p className="kicker">Go-To-Market CTA</p>
            <h3 className="mt-4 font-display text-3xl text-brand-surface">Launch a high-conversion brand experience that feels world-class.</h3>
            <p className="mt-2 text-sm text-brand-muted">Premium UI, richer animations, and strategic messaging tuned for client confidence.</p>
          </div>
          <Link href="/contact" className="cta-button w-fit">
            Start Proposal Sprint
          </Link>
        </div>
      </section>
    </>
  );
}
