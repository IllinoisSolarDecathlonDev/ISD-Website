"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
};

interface Props {
  items: SearchItem[];
  onClose: () => void;
}

export function SearchOverlay({ items, onClose }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return items;
    return items.filter((item) => {
      const composite = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      return composite.includes(trimmed);
    });
  }, [query, items]);

  return (
    <div className="search-overlay" role="dialog" aria-modal="true">
      <div className="search-panel">
        <div className="search-header">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              autoFocus
              className="search-input"
              placeholder="Search pages, projects, and teams…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <span className="search-shortcut">Esc to close</span>
        </div>
        <div className="search-results">
          {results.length === 0 ? (
            <div className="search-empty">No results match that query yet.</div>
          ) : (
            <>
              <div className="search-section-label">Navigation</div>
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="search-item"
                  onClick={onClose}
                >
                  <strong>{item.title}</strong>
                  <span>
                    {item.category} · {item.description}
                  </span>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}


