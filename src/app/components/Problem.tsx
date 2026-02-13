import { AnimatedSection } from './AnimatedSection';

export function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="w-full max-w-[var(--grid-max-width)] mx-auto px-[var(--grid-margin-mobile)] md:px-[var(--grid-margin-tablet)] lg:px-[var(--grid-margin-desktop)]">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--grid-gutter)]">
          {/* Left column */}
          <AnimatedSection className="col-span-4 md:col-span-4 lg:col-span-5">
            <div className="relative">
              {/* Accent line */}
              <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-[var(--deep-accent)] to-transparent opacity-50" />
              
              <h2 className="text-[28px] md:text-[var(--font-size-h2)] leading-[var(--line-height-h2)] font-bold tracking-[var(--letter-spacing-tight)] mb-6">
                Context switching destroys flow.
              </h2>
              <p className="text-[var(--font-size-body-large)] leading-[var(--line-height-body-large)] text-[var(--text-secondary)]">
                Every tool pulls you in a different direction. Every notification fractures your attention.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Right column */}
          <AnimatedSection delay={150} className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-8">
            <div className="relative">
              {/* Accent line */}
              <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-[var(--earth-accent)] to-transparent opacity-50" />
              
              <h2 className="text-[28px] md:text-[var(--font-size-h2)] leading-[var(--line-height-h2)] font-bold tracking-[var(--letter-spacing-tight)] mb-6">
                Deep work requires depth.
              </h2>
              <p className="text-[var(--font-size-body-large)] leading-[var(--line-height-body-large)] text-[var(--text-secondary)]">
                Not another dashboard. Not another integration. A singular environment designed for sustained concentration.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}