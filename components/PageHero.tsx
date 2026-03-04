import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Section visual",
}: HeroProps) {
  return (
    <section className="section-wrap pb-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="fade-up">
          <span className="kicker">{eyebrow}</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-brand-surface sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-brand-muted sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="cta-button">
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="cta-outline">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        {image ? (
          <div className="hero-glow relative h-64 overflow-hidden rounded-3xl border border-brand-line bg-brand-panel sm:h-80 fade-up">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f274855] via-transparent to-transparent" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
