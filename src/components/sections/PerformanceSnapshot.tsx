import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

const snapshotItems = [
  {
    metric: "40% API latency reduction",
    context: "Optimized GraphQL resolver paths and parallelized data fetching (1.73s to 1.05s)."
  },
  {
    metric: "4-5 hours/week saved",
    context: "Automated EMS reporting workflows that previously required manual operations time."
  },
  {
    metric: "Real-time response delivery",
    context: "Moved AI response handling from polling to SSE for faster perceived feedback."
  },
  {
    metric: "Release confidence improved",
    context: "Added Playwright and k6 checks for UI and API reliability before production rollout."
  }
];

export function PerformanceSnapshot() {
  return (
    <Section id="performance" aria-labelledby="performance-title">
      <Container className="space-y-spacing-md">
        <header className="space-y-spacing-xs">
          <Text as="h2" id="performance-title" variant="h2">
            Performance Snapshot
          </Text>
          <Text variant="body" className="text-muted">
            Outcome-focused metrics from production engineering work.
          </Text>
        </header>
        <ul className="grid grid-cols-1 gap-spacing-md md:grid-cols-2">
          {snapshotItems.map((item) => (
            <li key={item.metric} className="space-y-spacing-xs">
              <Text variant="body">{item.metric}</Text>
              <Text variant="small" className="text-muted">
                {item.context}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
