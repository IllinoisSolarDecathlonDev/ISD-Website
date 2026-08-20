type SectionHeaderProps = {
  title: string;
  className?: string;
};

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <header className={`section-header-sponsor ${className}`.trim()}>
      <h2 className="section-header-sponsor-title">{title}</h2>
      <div className="section-header-sponsor-underline" aria-hidden />
    </header>
  );
}
