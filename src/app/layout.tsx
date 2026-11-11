import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["200", "300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Proigmeni: AI solutions and automation for Nigerian businesses",
  description:
    "Proigmeni designs, builds and runs AI systems and automations for Nigerian companies in every sector, from the first conversation to daily use.",
  openGraph: {
    title: "Proigmeni: AI solutions and automation for Nigerian businesses",
    description: "AI agents, workflow automation, document intelligence and private AI assistants, built and run from Lagos.",
    images: ["/images/team.jpg"],
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
