type ProjectVideoProps = {
  /** The id from a YouTube link, e.g. "8sKk7Z28SLo" from youtube.com/watch?v=8sKk7Z28SLo */
  youtubeId: string;
  /** Describes the video for screen readers; shown nowhere on the page. */
  title: string;
  heading?: string;
};

/**
 * Playable YouTube video for project pages, sized 16:9 to the content column.
 * Uses youtube-nocookie.com so YouTube doesn't set tracking cookies until the
 * visitor presses play.
 */
export function ProjectVideo({ youtubeId, title, heading = "Project Video" }: ProjectVideoProps) {
  return (
    <section className="project-glass-section project-video-section">
      <h2 className="project-glass-title project-video-heading">{heading}</h2>
      <div className="project-video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
