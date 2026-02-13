export function SectionDivider() {
  return (
    <div className="relative w-full my-16">
      <div className="w-full h-px bg-[var(--divider)]" />
      {/* Subtle geometric accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[var(--divider)]" />
    </div>
  );
}