import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Smooth scrolling + sticky header offset support makes in-page anchor navigation predictable.
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen pb-16">{children}</body>
    </html>
  );
}
