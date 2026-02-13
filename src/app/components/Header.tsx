import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-[var(--background-primary)]/95 backdrop-blur-md border-b border-[var(--divider)]' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="w-full max-w-[var(--grid-max-width)] mx-auto px-[var(--grid-margin-mobile)] md:px-[var(--grid-margin-tablet)] lg:px-[var(--grid-margin-desktop)]">
        <div className="h-20 flex items-center justify-between">
          <Logo size={40} withWordmark />
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#waitlist" 
              className="text-[var(--font-size-body)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
