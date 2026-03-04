import Image from "next/image";
import Link from "next/link";
import { founderProfile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-brand-gold/30 bg-gradient-to-r from-[#05070c] via-[#081736] to-[#05070c]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-gold/60">
              <Image src="/brand/logo.jpg" alt="ZHEE logo" fill sizes="40px" className="object-cover" />
            </span>
            <p className="text-xl font-bold tracking-[0.08em] text-brand-gold">ZHEE ECOSYSTEM</p>
          </div>
          <Link href="/contact" className="cta-button w-fit">
            Schedule Strategy Session
          </Link>
        </div>
        <p className="max-w-3xl text-sm text-white/75">
          Founder-centered proposal mockup for {founderProfile.name}, highlighting how unified digital infrastructure can strengthen credibility and lead flow across aviation, solar, engineering, and project media operations.
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-white/60">2026 ZHEE. All rights reserved.</p>
      </div>
    </footer>
  );
}
