"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PressItem, PressProject } from "@/data/pressItems";
import { pressItems, pressSectionConfig } from "@/data/pressItems";
import { PressHero } from "@/components/PressHero";
import { PressJumpTo } from "@/components/PressJumpTo";
import { PressCard } from "@/components/PressCard";
import { AdapthausFeatureBlock } from "@/components/AdapthausFeatureBlock";

type RenuFilter = "all" | "Newsletter" | "Article";

function filterBySearch(items: PressItem[], query: string): PressItem[] {
  if (!query.trim()) return items;
  const q = query.trim().toLowerCase();
  return items.filter((item) => item.title.toLowerCase().includes(q));
}

function filterByType(items: PressItem[], type: RenuFilter): PressItem[] {
  if (type === "all") return items;
  return items.filter((item) => item.type === type);
}

export function PressPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [renuFilter, setRenuFilter] = useState<RenuFilter>("all");

  const searchFiltered = useMemo(
    () => filterBySearch(pressItems, searchQuery),
    [searchQuery]
  );

  const searchFilteredByProject = useMemo(() => {
    const r: Record<PressProject, PressItem[]> = {
      beacon: [],
      "renu-house": [],
      adapthaus: [],
      forbes: [],
    };
    searchFiltered.forEach((item) => {
      r[item.project].push(item);
    });
    return r;
  }, [searchFiltered]);

  const renuDisplay = useMemo(
    () => filterByType(searchFilteredByProject["renu-house"], renuFilter),
    [searchFilteredByProject, renuFilter]
  );

  return (
    <div className="press-page">
      <PressHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="press-page-content">
        <PressJumpTo />

        {/* Section: BEACON */}
        <section
          id="beacon"
          className="press-section"
          aria-labelledby="section-beacon-title"
        >
          <div className="press-section-inner">
            <header className="press-section-header">
              <h2 id="section-beacon-title" className="press-section-title">
                {pressSectionConfig.beacon.title}
              </h2>
              <p className="press-section-sub">
                {pressSectionConfig.beacon.subtitle}
              </p>
            </header>
            
            <div className="press-card-grid">
              {searchFilteredByProject.beacon.map((item) => (
                <PressCard key={item.id} item={item} />
              ))}
            </div>
            {searchFilteredByProject.beacon.length === 0 && (
              <p className="press-section-empty">No items match the current filters.</p>
            )}
          </div>
        </section>

        {/* Section A: RENU House */}
        <section
          id="renu-house"
          className="press-section press-section-alt"
          aria-labelledby="section-renu-title"
        >
          <div className="press-section-inner">
            <header className="press-section-header">
              <h2 id="section-renu-title" className="press-section-title">
                {pressSectionConfig["renu-house"].title}
              </h2>
              <p className="press-section-sub">
                {pressSectionConfig["renu-house"].subtitle}
              </p>
            </header>
            <div className="press-filter-row">
              <button
                type="button"
                className={`press-filter-btn ${renuFilter === "all" ? "press-filter-btn-active" : ""}`}
                onClick={() => setRenuFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={`press-filter-btn ${renuFilter === "Newsletter" ? "press-filter-btn-active" : ""}`}
                onClick={() => setRenuFilter("Newsletter")}
              >
                Newsletters
              </button>
              <button
                type="button"
                className={`press-filter-btn ${renuFilter === "Article" ? "press-filter-btn-active" : ""}`}
                onClick={() => setRenuFilter("Article")}
              >
                Articles
              </button>
            </div>
            <div className="press-card-grid">
              {renuDisplay.map((item) => (
                <PressCard key={item.id} item={item} />
              ))}
            </div>
            {renuDisplay.length === 0 && (
              <p className="press-section-empty">No items match the current filters.</p>
            )}
          </div>
        </section>

        {/* Section B: ADAPTHAUS */}
        <section
          id="adapthaus"
          className="press-section"
          aria-labelledby="section-adapthaus-title"
        >
          <div className="press-section-inner">
            <header className="press-section-header">
              <h2 id="section-adapthaus-title" className="press-section-title">
                {pressSectionConfig.adapthaus.title}
              </h2>
              <p className="press-section-sub">
                {pressSectionConfig.adapthaus.subtitle}
              </p>
            </header>
            <AdapthausFeatureBlock />
            {searchFilteredByProject.adapthaus.length > 0 && (
              <div className="press-card-grid press-card-grid-after-feature">
                {searchFilteredByProject.adapthaus.map((item) => (
                  <PressCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section C: Forbes */}
        <section
          id="forbes"
          className="press-section press-section-alt"
          aria-labelledby="section-forbes-title"
        >
          <div className="press-section-inner">
            <header className="press-section-header">
              <h2 id="section-forbes-title" className="press-section-title">
                {pressSectionConfig.forbes.title}
              </h2>
              <p className="press-section-sub">
                {pressSectionConfig.forbes.subtitle}
              </p>
            </header>
            <div className="press-card-grid">
              {searchFilteredByProject.forbes.map((item) => (
                <PressCard key={item.id} item={item} />
              ))}
            </div>
            {searchFilteredByProject.forbes.length === 0 && (
              <p className="press-section-empty">No items match the current search.</p>
            )}
          </div>
        </section>

        {/* Media inquiries */}
        <section
          className="press-section press-inquiries-wrap"
          aria-labelledby="press-inquiries-title"
        >
          <div className="press-section-inner">
            <div className="press-inquiries-block">
              <p className="press-inquiries-eyebrow">Get in touch</p>
              <h2 id="press-inquiries-title" className="press-inquiries-title">
                Media inquiries
              </h2>
              <p className="press-inquiries-body">
                For press requests, interviews, or speaking invitations, please reach
                out through the Contact page and include &quot;Press inquiry&quot; in the
                subject line.
              </p>
              <Link href="/contact" className="press-inquiries-cta">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
