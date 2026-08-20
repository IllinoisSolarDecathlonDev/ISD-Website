import Link from "next/link";

const anchors = [
  { label: "BEACON", href: "#beacon" },
  { label: "RENU House", href: "#renu-house" },
  { label: "ADAPTHAUS", href: "#adapthaus" },
  { label: "Forbes", href: "#forbes" },
] as const;

export function PressJumpTo() {
  return (
    <nav className="press-jump-to" aria-label="Jump to project section">
      <div className="press-jump-to-inner">
        <span className="press-jump-to-label">Jump to:</span>
        <ul className="press-jump-to-list">
          {anchors.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="press-jump-to-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
