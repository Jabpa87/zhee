import Link from "next/link";
import { ImageStrip } from "@/components/ImageStrip";
import { PageHero } from "@/components/PageHero";
import { pexelsImages } from "@/lib/site-data";

const services = [
  {
    title: "Charter and Mission Planning",
    detail: "End-to-end flight scheduling for executive routes and mission-critical travel windows.",
  },
  {
    title: "Fleet Support Coordination",
    detail: "Dispatch, airport operations interface, and service readiness orchestration.",
  },
  {
    title: "Maintenance Program Integration",
    detail: "Technical alignment with maintenance partners for reliable uptime and compliance continuity.",
  },
];

export default function AviationPage() {
  return (
    <>
      <PageHero
        eyebrow="Aviation Division"
        title="Aviation services presented with enterprise-grade credibility."
        subtitle="This page is structured to help clients quickly understand ZHEE Aviation's capability, reliability model, and service scope."
        primaryCta={{ href: "/contact", label: "Request Aviation Brief" }}
        secondaryCta={{ href: "/project-portfolio", label: "See Aviation Outcomes" }}
        image={pexelsImages.heroAviation}
        imageAlt="Aircraft operations"
      />

      <section className="section-wrap pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h2 className="font-display text-2xl text-brand-surface">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <ImageStrip title="Aviation Infrastructure Visuals" images={pexelsImages.aviation} />

      <section className="section-wrap pt-0">
        <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-3xl text-brand-surface">Deploy a conversion-focused aviation division website.</h3>
          <Link href="/contact" className="cta-button w-fit">
            Start Aviation Build
          </Link>
        </div>
      </section>
    </>
  );
}
