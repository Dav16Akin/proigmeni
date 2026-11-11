// Builds public/og.jpg, the 1200x630 link-preview image (WhatsApp, LinkedIn, X, Slack...).
// Run: node scripts/make-og-image.mjs
import sharp from "sharp";

const W = 1200, H = 630;
const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0a0a0a" stop-opacity="0.92"/>
      <stop offset="0.55" stop-color="#0a0a0a" stop-opacity="0.6"/>
      <stop offset="1" stop-color="#0a0a0a" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g font-family="Inter, 'Segoe UI', Arial, sans-serif" fill="#fafafa">
    <text x="72" y="110" font-size="34" font-weight="600" letter-spacing="1">Proigmeni</text>
    <text x="72" y="300" font-size="68" font-weight="600">Putting AI to work</text>
    <text x="72" y="380" font-size="68" font-weight="600">in Nigerian business</text>
    <text x="72" y="450" font-size="28" fill-opacity="0.8">Agents, automation and AI systems, built and run from Lagos.</text>
    <text x="72" y="565" font-size="26" fill-opacity="0.7">proigmeni.com</text>
  </g>
</svg>`;

await sharp("public/images/team.jpg")
  .resize(W, H, { fit: "cover", position: "centre" })
  .composite([{ input: Buffer.from(overlay) }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/og.jpg");

console.log("wrote public/og.jpg");
