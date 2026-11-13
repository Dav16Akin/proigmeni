<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/logo-white.png">
    <img src="public/brand/logo-black.png" alt="Proigmeni" width="320">
  </picture>
</p>

<p align="center">
  <strong>Putting AI to work in Nigerian business.</strong><br>
  <a href="https://www.proigmeni.com">proigmeni.com</a> · <a href="mailto:hello@proigmeni.com">hello@proigmeni.com</a>
</p>

---

Marketing site for **Proigmeni** (*pro-ig-MEH-nee*, Greek for "advanced"), a Lagos-based team that designs, builds and runs AI systems and automations for Nigerian businesses.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) components
- [Motion](https://motion.dev) for animation, [Lucide](https://lucide.dev) icons
- Hosted on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project structure

```
src/
  app/
    layout.tsx         # Metadata, fonts, link-preview (Open Graph) tags
    page.tsx           # Home page
    globals.css        # Global styles and brand colour tokens
    icon.svg           # Favicon (switches with the browser's light/dark theme)
    favicon.ico        # Favicon fallback (Safari, older browsers)
    apple-icon.png     # iOS home-screen icon
  components/
    site/              # Site-specific components (page sections, contact form)
    ui/                # shadcn/ui and animation primitives
  content/
    proigmeni.ts       # All site copy lives here
  lib/utils.ts         # Shared helpers
public/
  brand/               # Logos (see Brand below)
  images/              # Site imagery
  og.jpg               # Link-preview image for WhatsApp, LinkedIn, X...
scripts/
  make-og-image.mjs    # Regenerates public/og.jpg
```

## Editing content

All copy (hero, mission, services, languages, contact details) lives in
[`src/content/proigmeni.ts`](src/content/proigmeni.ts). Edit text there rather than in components.

House style: short statements, first-person plural, plain verbs. No prices, invented clients, quotes or statistics.

## Brand

### Logo

The logo is a circle with the **P** knocked out of it, followed by the wordmark **Proigmeni.**

| File | Use |
| --- | --- |
| `public/brand/logo-black.png` | Black logo for light backgrounds (site footer) |
| `public/brand/logo-white.png` | White logo for dark backgrounds (site header) |
| `public/brand/logo-on-<colour>.png` | Square logo on each brand colour, for social avatars and future pages |
| `public/proigmeni-logo-black.png`, `public/proigmeni-logo-white.png` | 2000×2000 source exports from Canva |

`logo-black.png` and `logo-white.png` are trimmed to the artwork and transparent. The header uses the white
logo with `mix-blend-difference`, so it turns black automatically over white sections.

### Colours

Defined as Tailwind tokens in [`src/app/globals.css`](src/app/globals.css), so use `bg-sage`, `text-oxblood`
and so on rather than hex codes.

| Token | Hex | |
| --- | --- | --- |
| `sage` | `#6EAA78` | ![](https://placehold.co/16x16/6EAA78/6EAA78.png) |
| `orange` | `#E86E28` | ![](https://placehold.co/16x16/E86E28/E86E28.png) |
| `amber` | `#FFBE5A` | ![](https://placehold.co/16x16/FFBE5A/FFBE5A.png) |
| `oxblood` | `#340C09` | ![](https://placehold.co/16x16/340C09/340C09.png) |
| `ink` | `#000000` | ![](https://placehold.co/16x16/000000/000000.png) |
| `paper` | `#FFFFFF` | ![](https://placehold.co/16x16/FFFFFF/FFFFFF.png) |

The hero's animated wash uses lighter tints of the same palette: `#A0E0AB` (sage), `#FFAC2E` (amber) and
`#A52D25` (oxblood), set in [`src/components/site/liquid.tsx`](src/components/site/liquid.tsx).

### Typography

[Inter](https://rsms.me/inter/) throughout, loaded with `next/font`. Headlines use Regular (400) with
−3% letter spacing; large text uses Light (300). (`font-roobert` in the code is an alias for Inter.)

## Images

- Always use `next/image`. It serves AVIF, then WebP (configured in [`next.config.ts`](next.config.ts)),
  with responsive sizes, lazy loading and long-lived caching.
- Give fixed images (like logos) their display `width`/`height` so they get exact 1x/2x versions;
  give `fill` images a `sizes` attribute.
- Add `priority` only to images visible on first load (the header logo).

## Link previews

The Open Graph image is `public/og.jpg`. Regenerate it with:

```bash
node scripts/make-og-image.mjs
```

Then bump the `?v=` number on `ogImage` in [`src/app/layout.tsx`](src/app/layout.tsx), because WhatsApp
caches previews by image URL.

## Deployment

The site is live at **[www.proigmeni.com](https://www.proigmeni.com)** (the apex domain redirects to `www`).
It deploys automatically on Vercel: every push to `main` goes to production, and other branches get preview URLs.
