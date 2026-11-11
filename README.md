# Proigmeni

Marketing site for **Proigmeni** (*pro-ig-MEH-nee*, Greek for "advanced"), a Lagos-based team that designs, builds and runs AI systems and automations for Nigerian businesses.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) components
- [Motion](https://motion.dev) for animation, [Lucide](https://lucide.dev) icons

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
  app/                 # Layout, page and global styles
  components/
    site/              # Site-specific components (contact form, effects)
    ui/                # shadcn/ui and animation primitives
  content/
    proigmeni.ts       # All site copy lives here
  lib/utils.ts         # Shared helpers
public/images/         # Site imagery
```

## Editing content

All copy (hero, mission, services, languages, contact details) lives in
[`src/content/proigmeni.ts`](src/content/proigmeni.ts). Edit text there rather than in components.

House style: short statements, first-person plural, plain verbs. No prices, invented clients, quotes or statistics.

> **Note:** the contact email is a placeholder (`hello@proigmeni.example`) until the real domain is set up.

## Deployment

Deploys as a standard Next.js app, e.g. on [Vercel](https://vercel.com/new).
