import Link from "next/link";
import { ImageStrip } from "@/components/ImageStrip";
import { PageHero } from "@/components/PageHero";
import { pexelsImages } from "@/lib/site-data";

const portfolioItems = [
  { category: "Aviation", title: "Regional Charter Operations Revamp", impact: "Lowered turnaround delays by 22%." },
  { category: "Solar", title: "Industrial Energy Transition Rollout", impact: "Delivered staged capacity growth with stable uptime." },
  { category: "Engineering", title: "Plant Modernization Program", impact: "Improved technical efficiency and service readiness." },
  { category: "Media", title: "Cross-Venture Brand Documentation", impact: "Improved partner inquiry quality and trust." },
  { category: "Solar", title: "Campus Solar Retrofit", impact: "Cut peak energy expenditure with measurable reliability gains." },
  { category: "Aviation", title: "Mission Operations Coordination", impact: "Improved schedule adherence for priority routes." },
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
        image={pexelsImages.heroMedia}
        imageAlt="Project media equipment"
      />

      <section className="section-wrap pt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="card">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-brand-surface">{item.title}</h2>
              <p className="mt-3 text-sm text-brand-muted">{item.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <ImageStrip title="Portfolio Visual Gallery" images={[...pexelsImages.aviation.slice(0, 1), ...pexelsImages.solar.slice(0, 1), ...pexelsImages.engineering.slice(0, 1)]} />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-3xl text-brand-surface">Convert completed projects into high-value business conversations.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Build Case Study Engine
          </Link>
        </div>
      </section>
    </>
  );
}
