import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const navItems = [
  { href: "#selected-work", label: "Selected Work" },
  { href: "#engineering-approach", label: "Approach" },
  { href: "#experience", label: "Experience" }
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-background" role="banner">
      <Container className="flex items-center justify-between gap-spacing-md py-spacing-md">
        <Text as="p" variant="small" className="text-muted">Ashish Singh</Text>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-spacing-md">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-radius-sm px-spacing-xs py-spacing-xs transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  <Text as="span" variant="small" className="text-muted">
                    {item.label}
                  </Text>
                </a>
              </li>
            ))}
            <li>
              <Button as="a" href="/resume.pdf" download variant="primary">
                Download Resume
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
