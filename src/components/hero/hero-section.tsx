export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border py-16 sm:py-20">
      <div className="space-y-4">
        <p className="text-small font-medium uppercase tracking-wide text-muted">Portfolio</p>
        <h1 id="hero-heading" className="text-h1 font-semibold">
          Ashish Singh
        </h1>
        <p className="text-h2 text-muted">Full-Stack Leaning Frontend Engineer</p>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
          Building performant, scalable UI systems with strong backend awareness.
        </p>
      </div>
    </section>
  );
}
