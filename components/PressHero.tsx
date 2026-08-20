"use client";

type PressHeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function PressHero({ searchQuery, onSearchChange }: PressHeroProps) {
  return (
    <section className="press-hero" aria-labelledby="press-hero-title">
      <div className="press-hero-inner">
        <h1 id="press-hero-title" className="press-hero-title">
          News and Press
        </h1>
        <p className="press-hero-sub">
          Articles, newsletters, and coverage across our projects
        </p>
        <div className="press-hero-search-wrap">
          <label htmlFor="press-search" className="visually-hidden">
            Filter cards by title
          </label>
          <input
            id="press-search"
            type="search"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="press-hero-search"
            aria-label="Filter press cards by title"
          />
        </div>
      </div>
    </section>
  );
}
