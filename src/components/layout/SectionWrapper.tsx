import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

type SectionWrapperProps = Omit<ComponentPropsWithoutRef<"section">, "title"> & {
  id: string;
  title: string;
  description?: string;
  bordered?: boolean;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  title,
  description,
  bordered = true,
  className = "",
  children,
  ...props
}: SectionWrapperProps) {
  const titleId = `${id}-title`;

  return (
    <Section id={id} aria-labelledby={titleId} bordered={bordered} className={className} {...props}>
      <Container>
        <header className="mb-spacing-md space-y-spacing-xs">
          <Text as="h2" id={titleId} variant="h2">
            {title}
          </Text>
          {description ? (
            <Text variant="body" className="max-w-2xl text-muted">
              {description}
            </Text>
          ) : null}
        </header>
        <div className="space-y-spacing-md">{children}</div>
      </Container>
    </Section>
  );
}
