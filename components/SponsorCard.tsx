import Image from "next/image";
import Link from "next/link";

type SponsorCardProps = {
  title: string;
  intro: string;
  bodyParagraphs: string[];
  highlightTitle: string;
  highlightItems: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt: string;
  imageOnRight?: boolean;
  externalLink?: boolean;
};

export function SponsorCard({
  title,
  intro,
  bodyParagraphs,
  highlightTitle,
  highlightItems,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  imageOnRight = false,
  externalLink = false,
}: SponsorCardProps) {
  const imageBlock = (
    <div className="sponsor-card-image-wrap">
      <div className="sponsor-card-image">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={560}
            height={360}
            className="sponsor-card-img"
          />
        ) : (
          <div className="sponsor-card-image-placeholder" aria-hidden>
            <span>{imageAlt}</span>
          </div>
        )}
      </div>
    </div>
  );
  const contentBlock = (
    <div className="sponsor-card-content">
        <h3 className="sponsor-card-title">{title}</h3>
        <p className="sponsor-card-intro">{intro}</p>
        {bodyParagraphs.map((p, i) => (
          <p key={i} className="sponsor-card-body">
            {p}
          </p>
        ))}
        <div className="sponsor-card-highlight">
          <span className="sponsor-card-highlight-title">{highlightTitle}</span>
          <ul className="sponsor-card-highlight-list">
            {highlightItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <Link 
          href={ctaHref} 
          className="cta-button cta-button-primary cta-button-inline"
          {...(externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {ctaLabel}
        </Link>
      </div>
  );
  return (
    <article
      className={`sponsor-card ${imageOnRight ? "sponsor-card-image-right" : "sponsor-card-image-left"}`}
    >
      {imageOnRight ? (
        <>
          {contentBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </article>
  );
}
