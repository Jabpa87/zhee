import Link from "next/link";
import { founderProfile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-brand-line/60 bg-brand-panel/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-display text-2xl text-brand-surface">ZHEE Ecosystem</p>
          <Link href="/contact" className="cta-button w-fit">
            Schedule Strategy Session
          </Link>
        </div>
        <p className="max-w-3xl text-sm text-brand-muted">
          Founder-centered proposal mockup for {founderProfile.name}, highlighting how unified digital infrastructure can strengthen credibility and lead flow across aviation, solar, engineering, and project media operations.
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">2026 ZHEE. All rights reserved.</p>
      </div>
    </footer>
  );
}
