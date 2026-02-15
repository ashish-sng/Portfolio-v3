export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border py-16 sm:py-20">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">Portfolio</p>
        <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Ashish Singh
        </h1>
        <p className="text-lg text-muted sm:text-xl">Full-Stack Leaning Frontend Engineer</p>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
          Building performant, scalable UI systems with strong backend awareness.
        </p>
      </div>
    </section>
  );
}
