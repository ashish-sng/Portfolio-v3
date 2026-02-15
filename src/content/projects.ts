export type Project = {
  title: string;
  description: string;
  tech: string[];
  sourceUrl: string;
  liveUrl?: string;
  caseStudySlug?: string;
};

export const selectedProjects: Project[] = [
  {
    title: "AI Code Review Bot",
    description:
      "AI-powered GitHub pull request review system built for faster first-pass feedback, reliable webhook handling, and production-ready operations.",
    tech: ["Node.js", "Express", "OpenAI API", "GitHub Webhooks", "Docker"],
    sourceUrl: "https://github.com/your-username/ai-code-review-bot",
    caseStudySlug: "ai-code-review-bot"
  },
  {
    title: "Crypto Tracker (PWA)",
    description:
      "Progressive Web App for real-time crypto visibility with resilient offline behavior and mobile-first usability.",
    tech: ["React", "JavaScript", "Service Workers", "PWA APIs"],
    sourceUrl: "https://github.com/your-username/crypto-tracker-pwa",
    liveUrl: "https://example.com/crypto-tracker"
  }
];
