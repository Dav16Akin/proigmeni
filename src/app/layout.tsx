import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["200", "300", "400", "500", "600"] });

// Must be the final URL Vercel serves (the apex 308-redirects to www). Preview crawlers
// like WhatsApp won't follow a redirect to fetch og:image.
const siteUrl = "https://www.proigmeni.com";
const title = "Proigmeni: AI solutions and automation for Nigerian businesses";
const shareDescription =
  "AI agents, workflow automation, document intelligence and private AI assistants, built and run from Lagos.";
// Link-preview image (WhatsApp, LinkedIn, X...). Regenerate with: node scripts/make-og-image.mjs
const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: "Proigmeni: Putting AI to work in Nigerian business" };

export const metadata: Metadata = {
  // Makes og:image an absolute URL; link previews break with relative ones.
  metadataBase: new URL(siteUrl),
  title,
  description:
    "Proigmeni designs, builds and runs AI systems and automations for Nigerian companies in every sector, from the first conversation to daily use.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Proigmeni",
    locale: "en_NG",
    title,
    description: shareDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
