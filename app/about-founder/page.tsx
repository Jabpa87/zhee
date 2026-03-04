import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShowcaseSlider } from "@/components/ShowcaseSlider";
import { founderProfile, pexelsImages } from "@/lib/site-data";

const founderSlides = [
  {
    image: pexelsImages.nigeriaUrban[0],
    title: "Founder-Led Strategic Vision",
    caption: "A clear leadership story that aligns brand voice with real operational capability.",
  },
  {
    image: pexelsImages.nigeriaUrban[1],
    title: "Nigerian Market Relevance",
    caption: "Positioning that speaks directly to local clients while preserving premium global quality.",
  },
  {
    image: pexelsImages.nigeriaUrban[3],
    title: "Credibility Through Structure",
    caption: "Clean division architecture makes the company feel serious, organized, and investment-ready.",
  },
];

export default function AboutFounderPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Founder"
        title="Founder profile: Mr. Ngozi Christopher Faith"
        subtitle="This mockup presents the company narrative around his role as Founder and CEO of ZHEE Aviation, with a clear leadership voice across the broader ecosystem."
        primaryCta={{ href: "/contact", label: "Contact Founder Office" }}
        secondaryCta={{ href: "/project-portfolio", label: "View Portfolio" }}
        image={pexelsImages.nigeriaUrban[2]}
        imageAlt="Nigerian skyline"
      />

      <section className="section-wrap pt-4">
        <article className="card grid gap-6 lg:grid-cols-[1.4fr_1fr] fade-up">
          <div>
            <h2 className="font-display text-3xl text-brand-surface">Leadership Narrative</h2>
            <p className="mt-4 text-brand-muted">
              {founderProfile.name} is profiled as the operational anchor behind ZHEE&apos;s aviation-led growth. This website structure is designed to reflect that founder leadership directly in the brand voice.
            </p>
            <p className="mt-4 text-brand-muted">
              To keep this proposal accurate, this version uses verified details provided by your team and avoids unverified biography claims.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-line bg-[#f7fbff] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Leadership Pillars</p>
            <ul className="mt-4 space-y-3 text-sm text-brand-surface">
              {founderProfile.pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <ShowcaseSlider slides={founderSlides} label="Founder Brand Showcase" />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between fade-up">
          <div>
            <p className="kicker">Founder CTA</p>
            <h3 className="mt-3 font-display text-3xl text-brand-surface">Position the brand around founder authority and execution trust.</h3>
          </div>
          <Link href="/contact" className="cta-button w-fit">
            Build Founder Profile Suite
          </Link>
        </div>
      </section>
    </>
  );
}
