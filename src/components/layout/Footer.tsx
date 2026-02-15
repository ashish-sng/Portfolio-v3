import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pb-spacing-xl" role="contentinfo">
      <Container className="space-y-spacing-xs">
        <Text variant="small" className="text-muted">
          Built with Next.js, TypeScript, Tailwind CSS.
        </Text>
        <Text variant="small" className="text-muted">
          Deployed on Vercel.
        </Text>
        <Text variant="small" className="text-muted">
          Last updated {currentYear}.
        </Text>
      </Container>
    </footer>
  );
}
