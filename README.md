# ZHEE Ecosystem Mock Website

Modern proposal mockup for a multi-venture company ecosystem built with Next.js + Tailwind CSS.

## Founder Personalization
This mockup is personalized for **Mr. Ngozi Christopher Faith** as **Founder and CEO of ZHEE Aviation**.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Pages
- Home
- About the Founder
- Aviation Division
- Solar Energy Division
- Engineering Projects
- Project Portfolio
- Contact

## Image Strategy
- Uses online images from `images.pexels.com`
- Curated for equipment, facilities, infrastructure, and rooms
- No people-focused visuals

## Run Locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Verification
```bash
npm run lint
npm run build
```

## Key Files
- `lib/site-data.ts` (founder data + image sources)
- `app/layout.tsx` (shared shell + metadata)
- `app/globals.css` (theme, utility classes, UI tokens)
- `components/Navbar.tsx` (responsive navigation)
- `components/PageHero.tsx` (reusable hero + CTA + image)
- `components/ImageStrip.tsx` (gallery strip component)
- `components/Footer.tsx` (site-wide credibility + CTA)
- `app/page.tsx` (home + founder context + gallery)
- `app/about-founder/page.tsx`
- `app/aviation/page.tsx`
- `app/solar-energy/page.tsx`
- `app/engineering-projects/page.tsx`
- `app/project-portfolio/page.tsx`
- `app/contact/page.tsx`
