"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ShowcaseSliderProps = {
  slides: { image: string; title: string; caption: string }[];
  label: string;
};

export function ShowcaseSlider({ slides, label }: ShowcaseSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="section-wrap pt-0">
      <div className="card overflow-hidden p-0">
        <div className="flex items-center justify-between px-6 pt-6">
          <p className="kicker">{label}</p>
          <div className="flex gap-2">
            {slides.map((_, dotIndex) => (
              <button
                key={`dot-${dotIndex}`}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-brand-accent" : "bg-brand-line"}`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-4 h-64 w-full overflow-hidden sm:h-80 lg:h-[26rem]">
          {slides.map((slide, slideIndex) => (
            <article
              key={slide.title}
              className={`absolute inset-0 transition-all duration-700 ${
                slideIndex === index ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <Image src={slide.image} alt={slide.title} fill sizes="100vw" className="object-cover" priority={slideIndex === 0} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2342cc] via-[#0c234255] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <h3 className="font-display text-3xl leading-tight">{slide.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">{slide.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
