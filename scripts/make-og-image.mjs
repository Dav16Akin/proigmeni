// Builds public/og.jpg, the 1200x630 link-preview image (WhatsApp, LinkedIn, X, Slack...).
// Mirrors the site hero: sage → amber → oxblood light on near-black, vignette, film grain,
// whisper-weight Inter in white. Run: node scripts/make-og-image.mjs
import { readFile } from "node:fs/promises";
import sharp from "sharp";
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";

const W = 1200, H = 630;
const description = "AI systems and automations for Nigerian businesses, designed, built and run from Lagos.";

// 1) Background: the hero's gradient blobs (same colours as <Hero /> in liquid.tsx), blurred.
const blob = (cx, cy, r, rgb, o) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgb(${rgb})" fill-opacity="${o}"/>`;
const background = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgb(8,8,6)"/><stop offset="1" stop-color="rgb(52,12,9)"/>
    </linearGradient>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="90"/></filter>
    <radialGradient id="vignette" cx="0.5" cy="0.5" r="0.75">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#base)"/>
  <g filter="url(#soft)">
    ${blob(300, 170, 260, "160,224,171", 0.75)}
    ${blob(820, 230, 280, "255,172,46", 0.8)}
    ${blob(1000, 520, 260, "165,45,37", 0.9)}
    ${blob(160, 560, 230, "110,170,120", 0.55)}
    ${blob(580, 470, 220, "232,110,40", 0.6)}
  </g>
  <rect width="${W}" height="${H}" fill="url(#vignette)"/>
</svg>`;

// Film grain, same feTurbulence recipe as the site's .grain class, laid over with soft-light.
const grain = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
  <feColorMatrix type="saturate" values="0"/></filter>
  <rect width="100%" height="100%" filter="url(#n)" opacity="0.35"/>
</svg>`;

// 2) Type layer, rendered with the real Inter font (transparent PNG).
const [inter300, inter400] = await Promise.all([
  readFile(new URL("./fonts/Inter-300.ttf", import.meta.url)),
  readFile(new URL("./fonts/Inter-400.ttf", import.meta.url)),
]);
const el = (type, style, children) => ({ type, props: { style, children } });
const type = await new ImageResponse(
  el("div", { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "Inter" }, [
    el("div", { fontSize: 168, fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 0.95 }, "Proigmeni"),
    el("div", { marginTop: 36, maxWidth: 760, textAlign: "center", fontSize: 30, fontWeight: 300, lineHeight: 1.35, color: "rgba(255,255,255,0.82)" }, description),
  ]),
  {
    width: W,
    height: H,
    fonts: [
      { name: "Inter", data: inter300, weight: 300, style: "normal" },
      { name: "Inter", data: inter400, weight: 400, style: "normal" },
    ],
  },
).arrayBuffer();

// 3) Composite and export a small JPEG (WhatsApp skips large preview images).
await sharp(Buffer.from(background))
  .composite([
    { input: Buffer.from(grain), blend: "soft-light" },
    { input: Buffer.from(type) },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile("public/og.jpg");

console.log("wrote public/og.jpg");
