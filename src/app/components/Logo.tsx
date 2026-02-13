interface LogoProps {
  size?: number;
  color?: string;
  withWordmark?: boolean;
  className?: string;
}

export function Logo({ 
  size = 48, 
  color = 'var(--muted-gold)', 
  withWordmark = false,
  className = '' 
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DevFlow Logo"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Left Ear - Triangle */}
        <path
          d="M16 8 L22 8 L19 28 Z"
          fill={color}
          opacity="0.95"
        />
        
        {/* Right Ear - Asymmetric Triangle */}
        <path
          d="M26 6 L31 6 L28.5 30 Z"
          fill={color}
        />
        
        {/* Head - Ellipse */}
        <ellipse
          cx="24"
          cy="28"
          rx="16"
          ry="10"
          fill={color}
        />
        
        {/* Body - Primary Parallelogram */}
        <path
          d="M12 32 L36 32 L32 44 L8 44 Z"
          fill={color}
          opacity="0.9"
        />
        
        {/* Body - Secondary Parallelogram */}
        <path
          d="M14 36 L34 36 L31 46 L11 46 Z"
          fill={color}
          opacity="0.7"
        />
        
        {/* Geometric Pattern Dots */}
        <circle cx="18" cy="38" r="1" fill={color} opacity="0.4" />
        <circle cx="24" cy="38" r="1" fill={color} opacity="0.4" />
        <circle cx="30" cy="38" r="1" fill={color} opacity="0.4" />
        <circle cx="21" cy="42" r="1" fill={color} opacity="0.4" />
        <circle cx="27" cy="42" r="1" fill={color} opacity="0.4" />
      </svg>
      
      {withWordmark && (
        <span
          className="text-[2rem] font-bold tracking-[0.05em]"
          style={{ color }}
        >
          DEVFLOW
        </span>
      )}
    </div>
  );
}
