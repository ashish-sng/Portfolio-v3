import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

const principles = [
  "Measure before optimizing.",
  "Prefer simple, composable systems over clever abstractions.",
  "Strong API contracts reduce frontend complexity.",
  "Performance and accessibility are not afterthoughts.",
  "Build with long-term maintainability in mind."
];

export function Philosophy() {
  return (
    <Section id="philosophy" aria-labelledby="philosophy-title">
      <Container className="space-y-spacing-md">
        <header>
          <Text as="h2" id="philosophy-title" variant="h2">
            Engineering Philosophy
          </Text>
        </header>
        <ul className="list-disc space-y-spacing-sm pl-spacing-lg">
          {principles.map((principle) => (
            <li key={principle}>
              <Text variant="body" className="text-muted">
                {principle}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
