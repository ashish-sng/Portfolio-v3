import { Text } from "@/components/ui/Text";

type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className="mb-6 space-y-2">
      <Text as="h2" variant="h2">
        {title}
      </Text>
      {description ? (
        <Text variant="body" className="max-w-2xl text-muted">
          {description}
        </Text>
      ) : null}
    </header>
  );
}
