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

  const goTo = (i: number) => {
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
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .project-carousel-frame {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .project-carousel-image-wrapper {
          flex: 1;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.6);
          aspect-ratio: 3 / 2;
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
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          border: none;
          background: rgba(15, 23, 42, 0.06);
          color: var(--text-primary, #0f172a);
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .project-carousel-arrow:hover {
          background: rgba(15, 23, 42, 0.12);
          transform: translateY(-1px);
        }
        .project-carousel-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .project-carousel-dot {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          border: none;
          background: rgba(0, 0, 0, 0.15);
          cursor: pointer;
          padding: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .project-carousel-dot-active {
          background: #059669;
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .project-carousel-frame {
            gap: 0.5rem;
          }
          .project-carousel-arrow {
            width: 2.25rem;
            height: 2.25rem;
            font-size: 1.15rem;
          }
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
              <span className="project-status-badge project-status-badge-completed">Completed 2026</span>
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
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
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
        </section>

        {/* Photo Gallery */}
        <section className="project-glass-section">
          <div className="beacon-gallery-section">
            <h2 className="project-glass-title beacon-gallery-title">Photo Gallery</h2>
            <BeaconGallery />
          </div>
        </section>

        {/* Performance & Impact */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Performance & Livability</h2>
              <p className="project-glass-body">
                The design prioritizes durability, resilience, integrated building performance, indoor environmental quality, and occupant comfort. A specialized performance dashboard enables residents to monitor their energy production and consumption in real time.
              </p>
            </div>
          </div>
          <div className="beacon-dashboard-figure">
            <img
              src="/images/projects/beacon-house/beacon6.png"
              alt="Performance Dashboard Preview for BEACON Home"
              className="beacon-dashboard-image"
            />
            <span className="project-glass-image-caption">Performance Dashboard</span>
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
