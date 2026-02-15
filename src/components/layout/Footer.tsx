import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <Container className="py-spacing-lg">
        <Text variant="small" className="text-muted">
          {new Date().getFullYear()} Ashish Singh. Built with Next.js and a token-driven UI system.
        </Text>
      </Container>
    </footer>
  );
}
