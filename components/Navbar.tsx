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
    <header className="sticky top-0 z-40 border-b border-brand-line/50 bg-brand-ink/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="font-display text-2xl tracking-wide text-brand-surface">
          ZHEE
        </Link>

        <nav className="hidden gap-5 text-sm font-medium text-brand-muted md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold text-white md:inline-flex">
          Book Consultation
        </Link>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-brand-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-surface">
            Menu
          </summary>
          <div className="absolute left-4 right-4 top-16 rounded-2xl border border-brand-line bg-brand-panel p-4 shadow-xl">
            <div className="grid gap-3 text-sm font-medium text-brand-surface">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-lg px-2 py-2 hover:bg-brand-ink/60">
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
