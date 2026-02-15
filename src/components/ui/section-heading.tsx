type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className="mb-6 space-y-2">
      <h2 className="text-h2 font-semibold">{title}</h2>
      {description ? <p className="max-w-2xl text-small text-muted sm:text-base">{description}</p> : null}
    </header>
  );
}
