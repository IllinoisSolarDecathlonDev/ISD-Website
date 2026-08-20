import Link from "next/link";
import Image from "next/image";
import type { PressItem } from "@/data/pressItems";

type PressCardProps = {
  item: PressItem;
};

export function PressCard({ item }: PressCardProps) {
  return (
    <article className="press-card">
      {item.thumbnail && (
        <div className="press-card-image-wrap">
          <Image 
            src={item.thumbnail}
            alt={`Thumbnail for ${item.title}`}
            fill
            className="press-card-image"
          />
        </div>
      )}

      <div className="press-card-content">
        {item.featured && (
          <span className="press-card-badge" aria-hidden>Featured</span>
        )}
        
        <div className="press-card-meta">
          <span className="press-card-type">{item.type}</span>
          {item.source && (
            <span className="press-card-source">{item.source}</span>
          )}
          {item.date && (
            <span className="press-card-date">{item.date}</span>
          )}
        </div>
        <h3 className="press-card-title">
          <Link
            href={item.url}
            className="press-card-title-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </Link>
        </h3>
        <Link
          href={item.url}
          className="press-card-read"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.type === 'TV' ? 'Watch Video' : 'Read Article'}
        </Link>
      </div>
    </article>
  );
}
