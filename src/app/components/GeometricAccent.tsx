interface GeometricAccentProps {
  variant?: 'corner' | 'line' | 'grid';
  className?: string;
}

export function GeometricAccent({ variant = 'corner', className = '' }: GeometricAccentProps) {
  if (variant === 'corner') {
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path 
            d="M0 0 L120 0 L120 1 L1 1 L1 120 L0 120 Z" 
            fill="var(--muted-gold)" 
            opacity="0.2"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`h-px bg-gradient-to-r from-transparent via-[var(--muted-gold)] to-transparent opacity-20 ${className}`} />
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 pointer-events-none opacity-[0.02] ${className}`}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--divider) 1px, transparent 1px),
              linear-gradient(90deg, var(--divider) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </div>
    );
  }

  return null;
}
