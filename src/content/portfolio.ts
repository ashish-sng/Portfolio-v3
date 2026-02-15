export const heroSummary =
  "Full-Stack Leaning Frontend Engineer focused on building fast, reliable product experiences with strong backend awareness.";

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  roleSummary: string;
  impact: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Techolution",
    role: "Mid AI Full Stack Developer (previously Associate Full Stack Developer)",
    duration: "July 2024 - Present",
    roleSummary:
      "Built and scaled AI-enabled product surfaces across frontend, extension, and API layers with a strong focus on latency, real-time behavior, and maintainable architecture.",
    impact: [
      "Reduced API latency by 40% (1.73s to 1.05s) by parallelizing data-fetching paths and optimizing GraphQL resolver execution.",
      "Delivered core parts of an AI-enabled VS Code extension, including editor integrations and command execution flow.",
      "Replaced short polling with Server-Sent Events for live AI response streaming, improving responsiveness while lowering infrastructure load.",
      "Structured and maintained an NX monorepo with shared libraries, Storybook, improved accessibility, logging, and production observability.",
    ],
  },
  {
    company: "Guardians EMS Private Limited",
    role: "Software Development Engineer - I",
    duration: "Aug 2023 - Jun 2024",
    roleSummary:
      "Owned critical user-facing workflows in emergency healthcare products across web and mobile, with emphasis on reliability, location services, and operational efficiency.",
    impact: [
      "Built a mobile-first SOS web application with real-time ambulance tracking using Google Maps platform APIs.",
      "Automated EMS reporting dashboards, removing repetitive manual work and saving 4-5 hours every week.",
      "Developed a React Native healthcare app with OTP-based secure login and live location tracking.",
      "Introduced performance and reliability checks using k6 and Playwright for API and UI confidence before release.",
    ],
  },
  {
    company: "Letstream Ventures Private Limited",
    role: "Frontend Web Application Intern",
    duration: "May 2022 - Jul 2022",
    roleSummary:
      "Contributed to workflow-heavy modules in an Ionic application and improved responsiveness across devices.",
    impact: [
      "Implemented client workflow and approval-path features used in day-to-day operations.",
      "Improved mobile responsiveness and interaction consistency across supported devices.",
      "Contributed to cleaner component-level organization to speed up future feature development.",
    ],
  },
];

export const skillsHighlight: string[] = [
  "Performance engineering across UI and API layers with React Query, GraphQL optimization, and SSE-based delivery.",
  "Scalable frontend architecture using NX monorepos, shared component libraries, and testable module boundaries.",
  "API-first product execution with GraphQL and REST integration backed by backend-aware frontend decisions.",
  "Production readiness through observability, structured logging, and reliability testing with Vitest, Playwright, and k6.",
  "AI-assisted product engineering using OpenAI APIs, automation workflows, and developer tooling integrations.",
];
