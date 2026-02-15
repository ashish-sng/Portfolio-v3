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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen pb-16">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
