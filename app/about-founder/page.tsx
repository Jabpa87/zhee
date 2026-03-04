import Link from "next/link";
import { ImageStrip } from "@/components/ImageStrip";
import { PageHero } from "@/components/PageHero";
import { founderProfile, pexelsImages } from "@/lib/site-data";

export default function AboutFounderPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Founder"
        title="Founder profile: Mr. Ngozi Christopher Faith"
        subtitle="This mockup presents the company narrative around his role as Founder and CEO of ZHEE Aviation, with a clear leadership voice across the broader ecosystem."
        primaryCta={{ href: "/contact", label: "Contact Founder Office" }}
        secondaryCta={{ href: "/project-portfolio", label: "View Portfolio" }}
        image={pexelsImages.heroMedia}
        imageAlt="Professional media equipment"
      />

      <section className="section-wrap pt-4">
        <article className="card grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl text-brand-surface">Leadership Narrative</h2>
            <p className="mt-4 text-brand-muted">
              {founderProfile.name} is profiled as the operational anchor behind ZHEE&apos;s aviation-led growth. This website structure is designed to reflect that founder leadership directly in the brand voice.
            </p>
            <p className="mt-4 text-brand-muted">
              To keep this proposal accurate, this version uses verified details provided by your team and avoids unverified biography claims.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-line bg-brand-ink/70 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Leadership Pillars</p>
            <ul className="mt-4 space-y-3 text-sm text-brand-surface">
              {founderProfile.pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <ImageStrip title="Founder Page Visual Language" images={pexelsImages.media} />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
