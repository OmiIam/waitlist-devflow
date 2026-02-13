import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-[var(--divider)]">
      <div className="w-full max-w-[var(--grid-max-width)] mx-auto px-[var(--grid-margin-mobile)] md:px-[var(--grid-margin-tablet)] lg:px-[var(--grid-margin-desktop)]">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[var(--grid-gutter)]">
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <Logo size={32} />
            <p className="mt-4 text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--text-secondary)]">
              Focus-first workflow for developers
            </p>
          </div>
          
          <div className="col-span-4 md:col-span-4 lg:col-span-6 flex items-end justify-start lg:justify-end">
            <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--text-secondary)]">
              © 2026 DevFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--muted-gold)] opacity-[0.01] blur-3xl pointer-events-none" />
    </footer>
  );
}