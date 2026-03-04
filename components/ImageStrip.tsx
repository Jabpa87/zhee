import Image from "next/image";

type Props = {
  title: string;
  images: string[];
};

export function ImageStrip({ title, images }: Props) {
  return (
    <section className="section-wrap pt-0">
      <div className="card">
        <h2 className="font-display text-3xl text-brand-surface">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {images.map((src, idx) => (
            <div key={`${title}-${idx}`} className="relative h-48 overflow-hidden rounded-xl border border-brand-line bg-brand-ink">
              <Image src={src} alt={`${title} visual ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
