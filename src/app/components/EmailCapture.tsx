import { useState } from 'react';
import { EmailInput } from './EmailInput';
import { Button } from './ui/button';
import { AnimatedSection } from './AnimatedSection';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      
      // Simulate submission
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
        setEmail('');
        
        // Reset after 4 seconds
        setTimeout(() => setSubmitted(false), 4000);
      }, 800);
    }
  };

  return (
    <section className="py-24 lg:py-32" id="waitlist">
      <div className="w-full max-w-[var(--grid-max-width)] mx-auto px-[var(--grid-margin-mobile)] md:px-[var(--grid-margin-tablet)] lg:px-[var(--grid-margin-desktop)]">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--grid-gutter)]">
          {/* Center content in 6 columns */}
          <AnimatedSection className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-4">
            <div className="relative p-12 bg-[var(--background-secondary)] rounded-[var(--radius-sm)] border border-[var(--divider)]">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--muted-gold)] opacity-30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--muted-gold)] opacity-30" />
              
              <div className="text-center mb-12">
                <h2 className="text-[28px] md:text-[var(--font-size-h2)] leading-[var(--line-height-h2)] font-bold tracking-[var(--letter-spacing-tight)] mb-4">
                  Join the Waitlist
                </h2>
                <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-[var(--text-secondary)]">
                  Be among the first to experience DevFlow when we launch.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <EmailInput 
                  value={email}
                  onChange={setEmail}
                  placeholder="your@email.com"
                />
                
                <Button
                  variant="gold"
                  size="xl"
                  type="submit" 
                  className="w-full"
                >
                  {isLoading ? 'Submitting...' : 'Request Early Access'}
                </Button>
                
                {submitted && (
                  <div className="mt-4 p-4 bg-[var(--cool-desaturated-teal)]/10 border border-[var(--cool-desaturated-teal)] rounded-[var(--radius-sm)] animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--text-primary)] text-center font-medium">
                      ✓ Thank you. You'll hear from us soon.
                    </p>
                  </div>
                )}
                
                <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--text-secondary)] text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}