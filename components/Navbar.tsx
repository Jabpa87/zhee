import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-founder", label: "Founder" },
  { href: "/aviation", label: "Aviation" },
  { href: "/solar-energy", label: "Solar" },
  { href: "/engineering-projects", label: "Engineering" },
  { href: "/project-portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/25 bg-gradient-to-r from-[#041333] via-[#07225a] to-[#041333] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-brand-gold/60">
            <Image src="/brand/logo.jpg" alt="ZHEE logo" fill sizes="44px" className="object-cover" />
          </span>
          <span className="text-xl font-extrabold tracking-[0.08em] text-brand-gold">ZHEE</span>
        </Link>

        <nav className="hidden gap-5 text-sm font-medium text-white/90 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-black md:inline-flex">
          Book Consultation
        </Link>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-brand-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Menu
          </summary>
          <div className="absolute left-4 right-4 top-16 rounded-2xl border border-brand-line bg-[#081736] p-4 shadow-xl">
            <div className="grid gap-3 text-sm font-medium text-white">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-lg px-2 py-2 hover:bg-brand-accent/35">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
