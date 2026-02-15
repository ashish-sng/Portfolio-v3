import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

const themeBootstrapScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var resolved = storedTheme === "light" || storedTheme === "dark" ? storedTheme : (prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", resolved === "dark");
    } catch (error) {}
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Ashish Singh"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ashish Singh portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen pb-16">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
