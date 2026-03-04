import Link from "next/link";
import { ImageStrip } from "@/components/ImageStrip";
import { PageHero } from "@/components/PageHero";
import { pexelsImages } from "@/lib/site-data";

const installations = [
  { name: "Commercial Rooftop Block", size: "450 kW", outcome: "Reduced monthly grid spend by 38%." },
  { name: "Industrial Hybrid Power Site", size: "1.8 MW", outcome: "Stable daytime production for core operations." },
  { name: "Community Mini-Grid", size: "620 kW", outcome: "Reliable electricity for over 200 homes." },
  { name: "Institutional Campus Retrofit", size: "980 kW", outcome: "Lower demand peaks and improved resilience." },
];

export default function SolarEnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar Energy Division"
        title="Solar project pages built to prove infrastructure competence."
        subtitle="This division mockup emphasizes installation examples, measurable outcomes, and a strong inquiry flow for new business."
        primaryCta={{ href: "/contact", label: "Book Solar Assessment" }}
        secondaryCta={{ href: "/project-portfolio", label: "Review Solar Portfolio" }}
        image={pexelsImages.heroSolar}
        imageAlt="Solar panel installation"
      />

      <section className="section-wrap pt-4">
        <div className="card">
          <h2 className="font-display text-3xl text-brand-surface">Solar Installation Examples</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {installations.map((site) => (
              <article key={site.name} className="rounded-xl border border-brand-line bg-brand-ink/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">{site.size}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-surface">{site.name}</h3>
                <p className="mt-2 text-sm text-brand-muted">{site.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImageStrip title="Solar Equipment and Site Visuals" images={pexelsImages.solar} />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-3xl text-brand-surface">Turn solar capability into consistent inbound opportunities.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Start Solar Web Suite
          </Link>
        </div>
      </section>
    </>
  );
}
