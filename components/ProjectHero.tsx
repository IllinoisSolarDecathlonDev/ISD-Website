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
          sizes="(max-width: 899px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
      </div>
    </section>
  );
}
