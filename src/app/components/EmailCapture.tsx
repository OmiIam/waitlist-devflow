import { useMemo, useState } from 'react';
import { EmailInput } from './EmailInput';
import { Button } from './ui/button';
import { AnimatedSection } from './AnimatedSection';
import { useWaitlist } from '../hooks/useWaitlist';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [botField, setBotField] = useState('');
  const { submit, status, error, reset } = useWaitlist();

  const metadata = useMemo(() => {
    if (typeof window === 'undefined') {
      return {};
    }

    const { language } = window.navigator;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
      language,
      timezone,
      path: window.location.pathname,
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    const trimmedEmail = email.trim();

    if (botField) {
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setErrorMessage(null);
    setSuccessMessage(null);

    const result = await submit({
      email: trimmedEmail,
      source: 'devflow-waitlist',
      metadata,
    });

    if (result.ok) {
      setEmail('');
      setSuccessMessage(result.message);
      setTimeout(() => {
        setSuccessMessage(null);
        reset();
      }, 5000);
    } else if (result.message !== 'Cancelled') {
      setErrorMessage(result.message);
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
              
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <label className="sr-only" htmlFor="website">
                  Leave this empty
                </label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(event) => setBotField(event.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />

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
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Submitting...' : 'Request Early Access'}
                </Button>

                {(successMessage || errorMessage || error) && (
                  <div
                    className={`mt-2 rounded-[var(--radius-sm)] border px-4 py-3 text-center text-[var(--font-size-caption)] leading-[var(--line-height-caption)] ${
                      successMessage
                        ? 'border-[var(--cool-desaturated-teal)] bg-[var(--cool-desaturated-teal)]/10 text-[var(--text-primary)]'
                        : 'border-red-500/40 bg-red-500/10 text-red-50'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {successMessage ?? errorMessage ?? error}
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
