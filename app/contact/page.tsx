import { PageHero } from "@/components/PageHero";
import { founderProfile, pexelsImages } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a personalized ZHEE website execution plan."
        subtitle="Use this page to capture qualified leads for aviation, solar, engineering, and portfolio engagements."
        primaryCta={{ href: "#proposal-form", label: "Submit Request" }}
        image={pexelsImages.heroEngineering}
        imageAlt="Operations room"
      />

      <section className="section-wrap pt-4">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <form id="proposal-form" className="card space-y-4" action="#">
            <h2 className="font-display text-3xl text-brand-surface">Proposal Request Form</h2>
            <div>
              <label htmlFor="name" className="text-sm text-brand-muted">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded-lg border border-brand-line bg-brand-ink px-3 py-3 text-sm text-brand-surface outline-none focus:border-brand-accent"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-brand-muted">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-brand-line bg-brand-ink px-3 py-3 text-sm text-brand-surface outline-none focus:border-brand-accent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="focus" className="text-sm text-brand-muted">
                Primary Focus
              </label>
              <select
                id="focus"
                className="mt-1 w-full rounded-lg border border-brand-line bg-brand-ink px-3 py-3 text-sm text-brand-surface outline-none focus:border-brand-accent"
              >
                <option>Aviation</option>
                <option>Solar Energy</option>
                <option>Engineering / Technical</option>
                <option>Full Ecosystem Website</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-brand-muted">
                Project Goals
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 w-full rounded-lg border border-brand-line bg-brand-ink px-3 py-3 text-sm text-brand-surface outline-none focus:border-brand-accent"
                placeholder="Describe your objectives, timelines, and expected outcomes"
              />
            </div>
            <button type="submit" className="cta-button border-0">
              Send Proposal Request
            </button>
          </form>

          <aside className="card">
            <p className="kicker">Founder Office</p>
            <h3 className="mt-4 font-display text-3xl text-brand-surface">{founderProfile.name}</h3>
            <p className="mt-2 text-sm font-semibold text-brand-accent">{founderProfile.role}</p>
            <div className="mt-5 space-y-4 text-sm text-brand-muted">
              <p>Email: partnerships@zhee.example</p>
              <p>Phone: +234 000 000 0000</p>
              <p>Location: Lagos, Nigeria</p>
            </div>
            <p className="mt-6 text-sm text-brand-muted">
              This page is optimized as a conversion endpoint for strategy calls and division-specific opportunity intake.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
