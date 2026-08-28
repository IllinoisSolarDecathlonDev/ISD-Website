"use client";

import { useState } from "react";
import Image from "next/image";

// TODO: swap these in for your real photos once you upload them.
// Just drop the files into /public/images/projects/beacon-house/
// and update the src + caption below. Order = carousel order.
const GALLERY_IMAGES = [
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20704.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20764.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20773.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20776.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20784.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20790.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20805.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20813.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20821.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
  {
    src: "/images/projects/beacon-house/ISD%20Beacon%20Home%20Event%20-%20837.jpg",
    alt: "BEACON Home event photo",
    caption: "BEACON Home",
  },
];

function BeaconGallery() {
  const [index, setIndex] = useState(0);

  const goTo = (i) => {
    const next = (i + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setIndex(next);
  };

  const current = GALLERY_IMAGES[index];

  return (
    <div className="project-carousel">
      <div className="project-carousel-frame">
        <button
          type="button"
          className="project-carousel-arrow project-carousel-arrow-left"
          onClick={() => goTo(index - 1)}
          aria-label="Previous photo"
        >
          &#8249;
        </button>

        <div className="project-carousel-image-wrapper">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="project-carousel-image"
          />
        </div>

        <button
          type="button"
          className="project-carousel-arrow project-carousel-arrow-right"
          onClick={() => goTo(index + 1)}
          aria-label="Next photo"
        >
          &#8250;
        </button>
      </div>

      <span className="project-glass-image-caption">{current.caption}</span>

      <div className="project-carousel-dots">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={
              "project-carousel-dot" +
              (i === index ? " project-carousel-dot-active" : "")
            }
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .project-carousel {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .project-carousel-frame {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .project-carousel-image-wrapper {
          flex: 1;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 28px 0 #0001;
          aspect-ratio: 4 / 3;
        }
        .project-carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: project-carousel-fade 0.3s ease;
        }
        @keyframes project-carousel-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .project-carousel-arrow {
          flex-shrink: 0;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 999px;
          border: none;
          background: rgba(0, 0, 0, 0.06);
          font-size: 1.25rem;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .project-carousel-arrow:hover {
          background: rgba(0, 0, 0, 0.12);
        }
        .project-carousel-dots {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.6rem;
        }
        .project-carousel-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          border: none;
          background: rgba(0, 0, 0, 0.15);
          cursor: pointer;
          padding: 0;
        }
        .project-carousel-dot-active {
          background: rgba(0, 0, 0, 0.55);
        }
      `}</style>
    </div>
  );
}

export default function BeaconHousePage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          <div className="project-hero-image-wrapper">
            <Image
              src="/images/homes/beacon.png"
              alt="BEACON Home Hero Render"
              className="project-hero-image"
              fill
              sizes="(max-width: 800px) 100vw, 1400px"
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <div className="project-hero-eyebrow">Projects</div>
            <h1 className="project-hero-title">BEACON Home</h1>
            <p className="project-hero-lead">
              Building Energy-Efficient Affordable Community-Oriented Neighborhoods. A completed initiative bringing direct community implementation to Rantoul, Illinois.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-complete">Complete</span>
              <span className="project-stat">1,700+ sq ft</span>
              <span className="project-stat">All-Electric</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Community & Mission */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">A New Direction for Community Impact</h2>
              <p className="project-glass-body">
                BEACON Home (Building Energy-Efficient Affordable Community-Oriented Neighborhoods) represents the latest housing initiative by Illinois Solar Decathlon following the indefinite cancellation of the Solar Decathlon Build Challenge.
              </p>
              <p className="project-glass-body">
                In response, ISD redirected its focus toward direct community implementation in partnership with the Village of Rantoul and Habitat for Humanity, marking a transition toward sustained, place-based housing development beyond national competition cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Development & Construction */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Development & Construction</h2>
              <p className="project-glass-body">
                The 1,700+ square-foot, three-bedroom, two-bath, all-electric residence has been completed in Rantoul, Illinois.
              </p>
              <p className="project-glass-body">
                Construction began in early 2026 in coordination with Broeren-Russo Builders serving as the general contractor. The project was organized across specialized subteams responsible for architecture, photovoltaic and electrical systems, HVAC, water systems, site development, construction management, and lighting/appliances/home automation.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div
              className="project-glass-image-figure"
              style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <BeaconGallery />
            </div>
          </div>
        </section>

        {/* Performance & Impact */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-figure" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/images/projects/beacon-house/beacon6.png"
                alt="Performance Dashboard Preview for BEACON Home"
                style={{ width: "100%", maxWidth: "540px", borderRadius: "1rem", boxShadow: "0 4px 28px 0 #0001", marginBottom: "0.5rem" }}
              />
              <span className="project-glass-image-caption">Performance Dashboard</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Performance & Livability</h2>
              <p className="project-glass-body">
                The design prioritizes durability, resilience, integrated building performance, indoor environmental quality, and occupant comfort. A specialized performance dashboard enables residents to monitor their energy production and consumption in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Future Legacy */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-accent">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Habitat for Humanity Donation</h2>
              <p className="project-glass-body">
                BEACON Home has been donated to a local family through Habitat for Humanity. This reinforces our ongoing commitment to ensuring that cutting-edge, sustainable housing models remain accessible to the broader community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
