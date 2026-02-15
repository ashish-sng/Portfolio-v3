export type Project = {
  name: string;
  problemStatement: string;
  technicalSolution: string;
  architecturalDecisions: string[];
  outcome: string;
  techStack: string[];
  githubUrl: string;
};

export const selectedProjects: Project[] = [
  {
    name: "AI Code Review Bot",
    problemStatement:
      "Pull request reviews were taking too long for routine quality checks, creating feedback bottlenecks across active repositories.",
    technicalSolution:
      "Built a GitHub App service that processes pull request webhook events, analyzes diffs with OpenAI APIs, and publishes structured review comments automatically.",
    architecturalDecisions: [
      "Used installation-scoped GitHub authentication for secure multi-repo operation.",
      "Enforced webhook signature verification to protect inbound event handling.",
      "Designed diff parsing and prompt construction to keep responses relevant while controlling token usage.",
      "Containerized the service with Docker for predictable deployment and scaling."
    ],
    outcome:
      "Enabled fast first-pass reviews with consistent, actionable feedback and production-ready deployment behavior.",
    techStack: ["Node.js", "Express", "OpenAI API", "GitHub Webhooks", "Docker"],
    githubUrl: "https://github.com/your-username/ai-code-review-bot"
  },
  {
    name: "Crypto Tracker (PWA)",
    problemStatement:
      "Users needed quick market visibility on mobile with usable behavior even under unstable connectivity.",
    technicalSolution:
      "Built a Progressive Web App that combines short-polling updates with service-worker caching for near real-time data and offline capability.",
    architecturalDecisions: [
      "Implemented service-worker caching strategy for offline-first behavior.",
      "Used short-polling intervals tuned for freshness without excessive request pressure.",
      "Applied modular code splitting to reduce initial load cost."
    ],
    outcome:
      "Delivered an installable, responsive tracking experience with offline support and stable runtime behavior.",
    techStack: ["React", "JavaScript", "Service Workers", "PWA APIs"],
    githubUrl: "https://github.com/your-username/crypto-tracker-pwa"
  }
];
