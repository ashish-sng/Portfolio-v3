const normalizedSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, "");

export const siteConfig = {
  name: "Ashish Singh | Full-Stack Leaning Frontend Engineer",
  title: "Ashish Singh - Full-Stack Leaning Frontend Engineer",
  description:
    "Building performant, scalable UI systems with strong backend awareness.",
  url: normalizedSiteUrl,
  ogImage: `${normalizedSiteUrl}/og.png`
} as const;
