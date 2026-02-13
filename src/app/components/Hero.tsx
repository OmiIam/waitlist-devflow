import { Button } from './ui/button';
import { GeometricAccent } from './GeometricAccent';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20">
      {/* Subtle grid overlay */}
      <GeometricAccent variant="grid" />
      
      {/* Corner accent */}
      <GeometricAccent variant="corner" className="top-20 right-0 opacity-50" />
      
      <div className="relative w-full max-w-[var(--grid-max-width)] mx-auto px-[var(--grid-margin-mobile)] md:px-[var(--grid-margin-tablet)] lg:px-[var(--grid-margin-desktop)]">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--grid-gutter)]">
          {/* Headline spans 7 columns on desktop */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <h1 className="text-[40px] md:text-[56px] lg:text-[var(--font-size-h1)] leading-[var(--line-height-h1)] font-bold tracking-[var(--letter-spacing-tight)] mb-8">
              Build Without <span className="text-[var(--muted-gold)]">Fragmentation</span>.
            </h1>
          </div>
          
          {/* Subtext spans 5 columns on desktop */}
          <div className="col-span-4 md:col-span-6 lg:col-span-5">
            <p className="text-[var(--font-size-body-large)] leading-[var(--line-height-body-large)] text-[var(--text-secondary)] mb-12">
              DevFlow is a focus-first workflow system engineered for developers who think deeply.
            </p>
            
            <Button variant="gold" size="xl" onClick={onJoinWaitlist}>
              Join the Waitlist
            </Button>
          </div>
        </div>
        
        {/* Enhanced geometric line divider */}
        <div className="mt-24 lg:mt-32 flex items-center gap-4">
          <div className="w-32 h-px bg-[var(--muted-gold)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--muted-gold)] opacity-50" />
        </div>
      </div>
    </section>
  );
}