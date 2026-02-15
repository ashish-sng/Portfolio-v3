import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      // Semantic tokens keep component classes stable even when visual values change.
      // This keeps the UI consistent and avoids class churn across themes.
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      fontSize: {
        h1: [
          "var(--font-size-h1)",
          { lineHeight: "var(--line-height-h1)", letterSpacing: "var(--letter-spacing-tight)" }
        ],
        h2: [
          "var(--font-size-h2)",
          { lineHeight: "var(--line-height-h2)", letterSpacing: "var(--letter-spacing-tight)" }
        ],
        body: ["var(--font-size-body)", { lineHeight: "var(--line-height-body)" }],
        base: ["var(--font-size-body)", { lineHeight: "var(--line-height-body)" }],
        small: ["var(--font-size-small)", { lineHeight: "var(--line-height-small)" }]
      },
      spacing: {
        "spacing-xs": "var(--spacing-xs)",
        "spacing-sm": "var(--spacing-sm)",
        "spacing-md": "var(--spacing-md)",
        "spacing-lg": "var(--spacing-lg)",
        "spacing-xl": "var(--spacing-xl)"
      },
      borderRadius: {
        "radius-sm": "var(--radius-sm)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)"
      }
    }
  },
  plugins: []
};

export default config;
