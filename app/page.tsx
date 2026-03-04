import Image from "next/image";
import Link from "next/link";
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
      <section className="section-wrap pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand-gold/35 bg-[#041333] shadow-[0_30px_100px_-45px_rgba(45,91,255,0.9)]">
          <Image src="/brand/hero.jpg" alt="Airplane on royal blue background" fill priority sizes="100vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041333f2] via-[#041333db] to-transparent" />
          <div className="relative z-10 max-w-2xl p-7 sm:p-10 lg:p-14">
            <p className="kicker">Premium Aviation Experience</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              The Best Aviation Services Available To You.
            </h1>
            <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
              ZHEE delivers reliable aviation support with a premium client experience, clear communication, and a service model designed around performance, trust, and execution excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="cta-button">
                Request Aviation Consultation
              </Link>
              <Link href="/aviation" className="cta-outline">
                Explore Aviation Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Founder-Led</p>
            <h2 className="mt-2 text-2xl font-bold text-white">{founderProfile.name}</h2>
            <p className="mt-2 text-sm text-brand-muted">{founderProfile.role}</p>
          </div>
          <div className="card fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Brand Position</p>
            <p className="mt-2 text-sm text-brand-muted">A high-value digital identity built to make every client interaction feel premium and trustworthy.</p>
          </div>
          <div className="card fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">Business Impact</p>
            <p className="mt-2 text-sm text-brand-muted">Designed to strengthen credibility, improve lead quality, and accelerate growth conversations.</p>
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
                <h3 className="mt-2 text-3xl font-bold text-white">{division.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{division.description}</p>
                <Link href={division.href} className="mt-5 inline-block text-sm font-semibold text-brand-gold">
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
            <h3 className="mt-4 text-3xl font-bold text-white">Make your company look as valuable as the service you deliver.</h3>
            <p className="mt-2 text-sm text-brand-muted">Premium UI, modern motion, and strategic messaging tuned for client confidence.</p>
          </div>
          <Link href="/contact" className="cta-button w-fit">
            Start Proposal Sprint
          </Link>
        </div>
      </section>
    </>
  );
}
