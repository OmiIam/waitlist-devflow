interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function EmailInput({ value, onChange, placeholder = 'Enter your email', className = '' }: EmailInputProps) {
  return (
    <input
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`
        w-full h-14
        px-4
        bg-[var(--surface-subtle)]
        border border-[var(--divider)]
        rounded-[var(--radius-sm)]
        text-[var(--text-primary)]
        placeholder:text-[var(--text-secondary)]
        transition-all duration-200
        hover:border-[var(--text-secondary)]
        focus:outline-2 focus:outline-[var(--muted-gold)] focus:outline-offset-0
        focus:bg-[var(--background-secondary)]
        ${className}
      `}
    />
  );
}