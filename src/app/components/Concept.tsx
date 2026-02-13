import { AnimatedSection } from './AnimatedSection';

export function Concept() {
  const pillars = [
    {
      title: 'Unified Context',
      description: 'Every resource, note, and reference linked to your task. No external tabs. No mental overhead.',
      accent: 'var(--muted-gold)'
    },
    {
      title: 'Temporal Awareness',
      description: 'Track time naturally. Understand your rhythm. Build better estimates from lived data, not wishful thinking.',
      accent: 'var(--cool-desaturated-teal)'
    },
    {
      title: 'Intentional Design',
      description: 'Stripped of distraction. Built for clarity. Every interface decision optimized for cognitive load reduction.',
      accent: 'var(--deep-accent)'
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="w-full max-w-[var(--grid-max-width)] mx-auto px-[var(--grid-margin-mobile)] md:px-[var(--grid-margin-tablet)] lg:px-[var(--grid-margin-desktop)]">
        <AnimatedSection className="mb-16">
          <h2 className="text-[28px] md:text-[var(--font-size-h2)] leading-[var(--line-height-h2)] font-bold tracking-[var(--letter-spacing-tight)]">
            Core Principles
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--grid-gutter)]">
          {pillars.map((pillar, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              className="group col-span-4 md:col-span-8 lg:col-span-4"
            >
              <div className="relative p-8 bg-[var(--surface-subtle)] rounded-[var(--radius-sm)] border border-[var(--divider)] transition-all duration-300 hover:border-[var(--text-secondary)] hover:translate-y-[-2px]">
                {/* Accent dot */}
                <div 
                  className="absolute top-0 right-0 w-3 h-3 rounded-full opacity-50"
                  style={{ backgroundColor: pillar.accent }}
                />
                
                <div className="mb-4">
                  <h3 className="text-[var(--font-size-h3)] leading-[var(--line-height-h3)] font-medium text-[var(--text-primary)] mb-3">
                    {pillar.title}
                  </h3>
                  <div 
                    className="w-16 h-px transition-all duration-300 group-hover:w-24"
                    style={{ backgroundColor: pillar.accent }}
                  />
                </div>
                <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-[var(--text-secondary)]">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}