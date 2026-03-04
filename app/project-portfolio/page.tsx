import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShowcaseSlider } from "@/components/ShowcaseSlider";
import { pexelsImages } from "@/lib/site-data";

const portfolioItems = [
  { category: "Aviation", title: "Regional Charter Operations Revamp", impact: "Lowered turnaround delays by 22%." },
  { category: "Solar", title: "SME Energy Unit Deployment", impact: "Delivered practical solar capacity per business location." },
  { category: "Engineering", title: "Plant Modernization Program", impact: "Improved technical efficiency and service readiness." },
  { category: "Media", title: "Cross-Venture Brand Documentation", impact: "Improved partner inquiry quality and trust." },
  { category: "Solar", title: "Rooftop Solar Package Rollout", impact: "Cut monthly power cost for client offices and residences." },
  { category: "Aviation", title: "Mission Operations Coordination", impact: "Improved schedule adherence for priority routes." },
];

const portfolioSlides = [
  {
    image: pexelsImages.nigeriaUrban[0],
    title: "Nigerian Market Storytelling",
    caption: "Portfolio visuals now align better with local context and premium brand positioning.",
  },
  {
    image: pexelsImages.aviation[0],
    title: "Aviation + Infrastructure Proof",
    caption: "Evidence-led blocks show capability without overstating scale.",
  },
  {
    image: pexelsImages.solar[0],
    title: "Unit-Scale Solar Results",
    caption: "Realistic packaging for businesses that want dependable, phased upgrades.",
  },
];

export default function ProjectPortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title="A proof-driven portfolio structure for ZHEE."
        subtitle="Designed to showcase outcomes by division so prospects can move from interest to clear confidence quickly."
        primaryCta={{ href: "/contact", label: "Request Portfolio Strategy" }}
        secondaryCta={{ href: "/", label: "Back To Home" }}
        image={pexelsImages.nigeriaUrban[1]}
        imageAlt="Nigerian city infrastructure"
      />

      <ShowcaseSlider slides={portfolioSlides} label="Portfolio Highlights" />

      <section className="section-wrap pt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <article key={item.title} className="card fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-brand-surface">{item.title}</h2>
              <p className="mt-3 text-sm text-brand-muted">{item.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between fade-up">
          <h3 className="font-display text-3xl text-brand-surface">Convert completed projects into high-value business conversations.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Build Case Study Engine
          </Link>
        </div>
      </section>
    </>
  );
}
