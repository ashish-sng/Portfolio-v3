type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className="mb-6 space-y-2">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-muted sm:text-base">{description}</p> : null}
    </header>
  );
}
