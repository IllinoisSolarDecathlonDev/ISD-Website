import Image from "next/image";

type ProjectHeroProps = {
  title: string;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  status: { label: string; variant: "completed" | "in-progress" };
  stats: string[];
  /** CSS object-position for the photo, e.g. "center 30%" to keep the roofline in frame. */
  imagePosition?: string;
};

/**
 * Split hero used on every project page: text on the left, photo on the right
 * running to the edge of the screen. The photo is never dimmed or covered.
 * On narrow screens the photo stacks on top of the text.
 */
export function ProjectHero({
  title,
  lead,
  imageSrc,
  imageAlt,
  status,
  stats,
  imagePosition = "center",
}: ProjectHeroProps) {
  return (
    <section className="project-split-hero">
      <div className="project-split-hero-text">
        <div className="project-hero-eyebrow">Projects</div>
        <h1 className="project-split-hero-title">{title}</h1>
        <p className="project-split-hero-lead">{lead}</p>
        <div className="project-split-hero-meta">
          <span className={`project-status-badge project-status-badge-${status.variant}`}>
            {status.label}
          </span>
          {stats.map((stat) => (
            <span key={stat} className="project-split-hero-stat">
              {stat}
            </span>
          ))}
        </div>
      </div>
      <div className="project-split-hero-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          // Next.js defaults to 75; the hero is the page's main image, so compress it less.
          quality={90}
          // The frame is taller than a typical 3:2 photo, so object-fit: cover scales the
          // photo wider than the frame. Request enough pixels for that, not just the frame width.
          sizes="(max-width: 899px) 115vw, 75vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
      </div>
    </section>
  );
}
