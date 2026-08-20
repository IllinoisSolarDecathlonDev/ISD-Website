import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base = "cta-button";
  const variantClass = variant === "primary" ? "cta-button-primary" : "cta-button-secondary";
  return (
    <Link
      href={href}
      className={`${base} ${variantClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
