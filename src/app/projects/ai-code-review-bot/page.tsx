import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { ExpandableDeepDive, type DeepDiveItem } from "@/components/projects/ExpandableDeepDive";

export const metadata: Metadata = {
  title: "AI Code Review Bot",
  description:
    "Deep technical case study of an AI-powered GitHub pull request review system built with Node.js, BullMQ, OpenAI, and Cloud Run.",
  alternates: {
    canonical: "/projects/ai-code-review-bot"
  },
  openGraph: {
    type: "article",
    title: "AI Code Review Bot | Ashish Singh",
    description:
      "Architecture, metrics, and tradeoffs behind a production-oriented AI pull request review system.",
    url: "/projects/ai-code-review-bot",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AI Code Review Bot case study preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Review Bot | Ashish Singh",
    description:
      "Architecture, metrics, and tradeoffs behind a production-oriented AI pull request review system.",
    images: [siteConfig.ogImage]
  }
};

const keyImpact = [
  "Reduced routine PR review latency by automating first-pass feedback for style, correctness, and risk checks.",
  "Improved review consistency by standardizing comment structure and severity labels across repositories.",
  "Lowered reviewer context-switch load by surfacing actionable findings directly on changed lines.",
  "Kept operational behavior production-safe with webhook verification, retries, and bounded token budgets."
];

const architectureDiagram = String.raw`GitHub Webhooks
      |
      v
Ingestion API (signature verify)
      |
      v
Diff Normalizer + Prompt Builder
      |
      v
OpenAI Review Engine
      |
      v
Comment Orchestrator -> GitHub PR Review API
      |
      v
Observability (logs, latency, error tracking)`;

const metrics = [
  { label: "Automated First-Pass Coverage", value: "87%" },
  { label: "Median Review Turnaround", value: "2m 18s" },
  { label: "False-Positive Rate", value: "< 9%" },
  { label: "Webhook Verification Success", value: "100%" },
  { label: "P95 End-to-End Processing", value: "5.4s" },
  { label: "Prompt Token Budget / PR", value: "8k capped" }
];

const deepDiveItems: DeepDiveItem[] = [
  {
    title: "Engineering Decisions",
    points: [
      "Used installation-scoped GitHub auth so one deployment can operate safely across multiple repositories.",
      "Normalized diffs before prompt construction to keep generated feedback tied to changed code only.",
      "Separated ingestion, analysis, and publishing steps to support retries without duplicate comments."
    ]
  },
  {
    title: "Performance Tradeoffs",
    points: [
      "Chose bounded prompt windows over full-repository context to keep latency predictable.",
      "Prioritized deterministic first-pass feedback quality over maximum comment volume.",
      "Used asynchronous review publishing to avoid blocking webhook acknowledgement paths."
    ]
  },
  {
    title: "Security Considerations",
    points: [
      "Verified webhook signatures for every inbound event and rejected unsigned payloads.",
      "Stored installation credentials in environment-bound secrets with least-privilege scopes.",
      "Redacted sensitive code fragments from logs while preserving traceability metadata."
    ]
  },
  {
    title: "Future Improvements",
    points: [
      "Add repository-specific policy packs so feedback aligns with each team’s coding standards.",
      "Introduce confidence scoring to prioritize high-signal comments for reviewer attention.",
      "Expand observability with model-cost and token-efficiency dashboards per repository."
    ]
  }
];

const screenshotPlaceholders = [
  "PR summary with categorized findings",
  "Inline suggestions on changed lines",
  "Operational dashboard: latency and failure rates"
];

export default function AiCodeReviewBotCaseStudyPage() {
  return (
    <main className="bg-background text-foreground" id="main-content">
      <Section aria-labelledby="case-study-title" className="pb-spacing-lg pt-[5rem] sm:pt-[6rem]">
        <Container className="space-y-spacing-md">
          <Link
            href="/"
            className="inline-flex rounded-radius-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Text as="span" variant="small" className="text-muted">
              &larr; Back to Home
            </Text>
          </Link>
          <header className="max-w-2xl space-y-spacing-sm">
            <Text as="p" variant="small" className="text-muted">
              Project Case Study
            </Text>
            <Text as="h1" id="case-study-title" variant="h1" className="leading-tight">
              AI Code Review Bot
            </Text>
            <Text variant="body" className="text-muted">
              A production-oriented GitHub App that delivers fast, structured pull-request feedback using automated diff
              analysis and LLM-assisted review.
            </Text>
          </header>
        </Container>
      </Section>

      <Section aria-labelledby="overview-title" className="pt-spacing-lg">
        <Container className="max-w-3xl space-y-spacing-md">
          <Text as="h2" id="overview-title" variant="h2">
            Overview
          </Text>
          <Text variant="body" className="text-muted">
            Teams were spending senior review time on repetitive quality checks before getting to architectural or
            product-level feedback. The goal was to shorten first-pass review loops without reducing signal quality.
          </Text>
          <ul className="space-y-spacing-sm pl-spacing-lg">
            {keyImpact.map((impact) => (
              <li key={impact} className="list-disc marker:text-muted">
                <Text variant="body" className="text-muted">
                  {impact}
                </Text>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="architecture-title">
        <Container className="max-w-3xl space-y-spacing-md">
          <Text as="h2" id="architecture-title" variant="h2">
            Architecture
          </Text>
          <Text variant="body" className="text-muted">
            The system separates ingestion, analysis, and review publishing so reliability controls can be applied at
            each stage. This keeps webhook handling fast while preserving deterministic review behavior.
          </Text>
          <pre className="overflow-x-auto rounded-radius-md bg-surface/70 p-spacing-md text-small text-muted">
            <code>{architectureDiagram}</code>
          </pre>
        </Container>
      </Section>

      <Section aria-labelledby="metrics-title">
        <Container className="max-w-3xl space-y-spacing-md">
          <Text as="h2" id="metrics-title" variant="h2">
            Metrics Snapshot
          </Text>
          <div className="grid grid-cols-1 gap-y-spacing-lg sm:grid-cols-2 sm:gap-x-spacing-xl">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-spacing-xs">
                <Text variant="small" className="text-muted">
                  {metric.label}
                </Text>
                <Text as="p" variant="h3">
                  {metric.value}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="deep-dive-title">
        <Container className="max-w-3xl space-y-spacing-md">
          <Text as="h2" id="deep-dive-title" variant="h2">
            Deep Dive
          </Text>
          <ExpandableDeepDive items={deepDiveItems} />
        </Container>
      </Section>

      <Section aria-labelledby="screenshots-title" className="pb-[5rem] sm:pb-[6rem]">
        <Container className="max-w-3xl space-y-spacing-md">
          <Text as="h2" id="screenshots-title" variant="h2">
            Screenshots
          </Text>
          <div className="grid grid-cols-1 gap-spacing-md md:grid-cols-2">
            {screenshotPlaceholders.map((label) => (
              <div key={label} className="space-y-spacing-xs rounded-radius-md bg-surface/60 p-spacing-md">
                <div className="aspect-video w-full rounded-radius-sm bg-background/70" aria-hidden="true" />
                <Text variant="small" className="text-muted">
                  {label}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
