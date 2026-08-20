"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { SearchOverlay } from "./SearchOverlay";
import { searchItems } from "../data/searchItems";

type DropdownKey = "about" | "projects" | "sponsors";

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleDropdown = useCallback(
    (key: DropdownKey) => {
      setOpenDropdown((current) => (current === key ? null : key));
    },
    [setOpenDropdown],
  );

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    // Trigger landing animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Add class to body to adjust layout
      document.body.classList.add("navbar-animated");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className={`navbar ${isLoaded ? "navbar-loaded" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand" onClick={closeAll}>
            <div className="brand-logo">
              <Image
                src="/images/logo.png"
                alt="Illinois Solar Decathlon Logo"
                width={32}
                height={32}
                className="logo-image"
              />
            </div>
            <div className="brand-text-main">Illinois Solar Decathlon</div>
          </Link>

          <nav className="navbar-nav" aria-label="Primary navigation">
            <div className="navbar-links">
              <div
                className="nav-button"
                data-active={openDropdown === "about" || undefined}
                onClick={() => toggleDropdown("about")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "about"}
              >
                <span className="nav-label">About</span>
                <span className="nav-chevron">▾</span>
                {openDropdown === "about" && (
                  <div className="dropdown">
                    <ul className="dropdown-list">
                      <li>
                        <Link
                          href="/about"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/leadership"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Meet our Leadership
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/build-team"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Build Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/design-team"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Design Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/concept-team"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Concept Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="nav-button"
                data-active={openDropdown === "projects" || undefined}
                onClick={() => toggleDropdown("projects")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "projects"}
              >
                <span className="nav-label">Projects</span>
                <span className="nav-chevron">▾</span>
                {openDropdown === "projects" && (
                  <div className="dropdown">
                    <ul className="dropdown-list">
                      <li>
                        <Link
                          href="/projects/beacon-house"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          BEACON
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/ideals"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          IDEALS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/renu-house"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          RENU-House
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/adapthaus"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          ADAPTHAUS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/elevate-chicago"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Elevate Chicago
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/re-home"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Re_Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/gable-home"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Gable Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects/more"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          More
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="nav-button"
                data-active={openDropdown === "sponsors" || undefined}
                onClick={() => toggleDropdown("sponsors")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "sponsors"}
              >
                <span className="nav-label">Sponsors</span>
                <span className="nav-chevron">▾</span>
                {openDropdown === "sponsors" && (
                  <div className="dropdown">
                    <ul className="dropdown-list">
                      <li>
                        <Link
                          href="/sponsors/become-a-sponsor"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Become a Sponsor
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sponsors/our-sponsors"
                          className="dropdown-item"
                          onClick={closeAll}
                        >
                          Our Sponsors
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/press"
                className="nav-link"
                data-active={isActive("/press") || undefined}
                onClick={closeAll}
              >
                <span className="nav-label">Press</span>
              </Link>

              <Link
                href="/nonprofit"
                className="nav-link"
                data-active={isActive("/nonprofit") || undefined}
                onClick={closeAll}
              >
                <span className="nav-label">NonProfit</span>
              </Link>

            </div>

            <div className="navbar-actions">
              <Link
                href="/contact"
                className="navbar-cta"
                data-active={isActive("/contact") || undefined}
                onClick={closeAll}
              >
                <span className="nav-label">Contact Us</span>
              </Link>
              <button
                type="button"
                className="icon-button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                🔍
              </button>
              <button
                type="button"
                className="icon-button navbar-menu-toggle"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </nav>
        </div>

        {mobileOpen && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-inner">
              <div className="navbar-mobile-grid">
                <p className="navbar-mobile-group-label">About</p>
                <Link href="/about" className="navbar-mobile-link" onClick={closeAll}>
                  <span>About Us</span>
                </Link>
                <Link
                  href="/about/leadership"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Meet our Leadership</span>
                </Link>
                <Link
                  href="/about/build-team"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Build Team</span>
                </Link>
                <Link
                  href="/about/design-team"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Design Team</span>
                </Link>
                <Link
                  href="/about/concept-team"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Concept Team</span>
                </Link>

                <p className="navbar-mobile-group-label">Projects</p>
                <Link
                  href="/projects/beacon-house"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>BEACON</span>
                </Link>
                <Link
                  href="/projects/ideals"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>IDEALS</span>
                </Link>
                <Link
                  href="/projects/renu-house"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>RENU-House</span>
                </Link>
                <Link
                  href="/projects/adapthaus"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>ADAPTHAUS</span>
                </Link>
                <Link
                  href="/projects/elevate-chicago"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Elevate Chicago</span>
                </Link>
                <Link
                  href="/projects/re-home"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Re_Home</span>
                </Link>
                <Link
                  href="/projects/gable-home"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Gable Home</span>
                </Link>
                <Link
                  href="/projects/more"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>More</span>
                </Link>

                <p className="navbar-mobile-group-label">Sponsors &amp; More</p>
                <Link
                  href="/sponsors/become-a-sponsor"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Become a Sponsor</span>
                </Link>
                <Link
                  href="/sponsors/our-sponsors"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>Our Sponsors</span>
                </Link>
                <Link href="/press" className="navbar-mobile-link" onClick={closeAll}>
                  <span>Press</span>
                </Link>
                <Link
                  href="/nonprofit"
                  className="navbar-mobile-link"
                  onClick={closeAll}
                >
                  <span>NonProfit</span>
                </Link>
                <Link href="/contact" className="navbar-mobile-link" onClick={closeAll}>
                  <span>Contact Us</span>
                </Link>
                <button
                  type="button"
                  className="navbar-mobile-link"
                  onClick={() => {
                    setSearchOpen(true);
                    setMobileOpen(false);
                  }}
                >
                  <span>Search</span>
                  <span>🔍</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {searchOpen && (
        <SearchOverlay items={searchItems} onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
}


