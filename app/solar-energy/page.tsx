import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShowcaseSlider } from "@/components/ShowcaseSlider";
import { pexelsImages } from "@/lib/site-data";

const unitInstallations = [
  { name: "Single-Home Rooftop Kit", size: "3-5 kW", outcome: "Essential daily backup and reduced fuel generator dependence." },
  { name: "Retail Shop Energy Pack", size: "5-10 kW", outcome: "Stable power for refrigeration, lighting, and POS uptime." },
  { name: "Office Unit Deployment", size: "10-20 kW", outcome: "Lower monthly energy costs and cleaner daytime operations." },
  { name: "Residential Estate Pilot", size: "Per Unit Rollout", outcome: "Phase-by-phase installation across households for manageable growth." },
];

const solarSlides = [
  {
    image: pexelsImages.solar[0],
    title: "Unit-by-Unit Solar Delivery",
    caption: "Focused deployment model for homes, offices, and SMEs rather than utility-scale assumptions.",
  },
  {
    image: pexelsImages.solar[1],
    title: "Practical Solar for Daily Operations",
    caption: "Each installation is scoped to client load profile, budget, and resilience requirements.",
  },
  {
    image: pexelsImages.solar[2],
    title: "Scalable Without Overstating Size",
    caption: "The website messaging stays realistic while still presenting quality and professional value.",
  },
  {
    image: pexelsImages.solar[3],
    title: "Premium Presentation, Grounded Scope",
    caption: "Strong visuals and clear process communication make a growing company look trustworthy and capable.",
  },
];

export default function SolarEnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar Energy Division"
        title="Premium solar presentation focused on practical unit installations."
        subtitle="This page now emphasizes realistic, high-quality delivery for homes and businesses in Nigeria rather than large utility-scale claims."
        primaryCta={{ href: "/contact", label: "Book Solar Assessment" }}
        secondaryCta={{ href: "/project-portfolio", label: "Review Solar Portfolio" }}
        image={pexelsImages.heroSolar}
        imageAlt="Rooftop solar setup"
      />

      <ShowcaseSlider slides={solarSlides} label="Solar Visual Story" />

      <section className="section-wrap pt-4">
        <div className="card">
          <h2 className="font-display text-3xl text-brand-surface">Unit Installation Packages</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {unitInstallations.map((site) => (
              <article key={site.name} className="rounded-2xl border border-brand-line bg-[#f7fbff] p-5 fade-up">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">{site.size}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-surface">{site.name}</h3>
                <p className="mt-2 text-sm text-brand-muted">{site.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between fade-up">
          <h3 className="font-display text-3xl text-brand-surface">Market realistic scale with premium confidence and design quality.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Start Solar Web Suite
          </Link>
        </div>
      </section>
    </>
  );
}
