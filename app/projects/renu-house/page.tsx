import Image from "next/image";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";
import {
  RENU_CAROUSEL_1_IMAGES,
  RENU_CAROUSEL_2_IMAGES,
} from "@/data/renuHouseImages";

// Fallback until specific hero image is provided
const HERO_IMAGE = "/images/homes/renu.jpg";

export default function RenuHousePage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          <Image
            src={HERO_IMAGE}
            alt="RENU-House exterior"
            fill
            className="hero-full-bg"
            style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.6 }}
            priority
          />
        </div>
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <div className="project-hero-eyebrow">Projects</div>
            <h1 className="project-hero-title">RENU-House</h1>
            <p className="project-hero-lead">
              A positive net energy home guided by four overarching principles: Renewable, Economical, Nourishing, and Universal.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-completed">Completed 2023</span>
              <span className="project-stat">Net-Positive Energy</span>
              <span className="project-stat">ADA Accessible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Core Principles */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Renewable, Economical, Nourishing, Universal</h2>
              <p className="project-glass-body">
                RENU-House is a positive net energy home located in Rantoul, Illinois, designed by the Illinois Solar Decathlon 2021-2023 team. The flexibility of the interior can adapt to meet the needs of a single parent or a multi-generational household.
              </p>
              <p className="project-glass-body">
                The home serves as a blueprint for communities to replace vacant lots or dilapidated housing with new, affordable, and renewable developments. At the completion of the competition, Illinois Solar Decathlon partnered with the Champaign chapter of Habitat for Humanity to donate the home to a local family in need.
              </p>
            </div>
          </div>
        </section>

        {/* Floor Plan & Accessibility */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Adaptive Floor Plan</h2>
              <p className="project-glass-body">
                RENU-House emphasizes accommodating the changing needs of a new generation while prioritizing accessibility. The floor plan uses a flex room to allow the owner to alternate between a 4-bedroom layout to a 3-bedroom circular floor plan.
              </p>
              <p className="project-glass-body">
                As national trends of multi-generational households or work-from-home increase, RENU-House can adapt while maintaining full ADA compliance.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            {/* Swapping placeholder for Carousel 1 */}
            <ProjectImageCarousel
              images={RENU_CAROUSEL_1_IMAGES}
              altPrefix="RENU-House gallery"
            />
          </div>
        </section>

        {/* Engineering & Systems */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            {/* Swapping placeholder for Carousel 2 */}
            <ProjectImageCarousel
              images={RENU_CAROUSEL_2_IMAGES}
              altPrefix="RENU-House gallery"
            />
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Open-Source Smart Systems</h2>
              <p className="project-glass-body">
                The design employs a group of decentralized fans that operate a near-soundless HRV system. We utilize a grid-tie battery backup solar system capable of remotely controlling loads through an app for optimal energy performance.
              </p>
              <p className="project-glass-body">
                Unlike most other smart home systems, our design is based on open-source principles that provide greater flexibility while being faster and more private. We also developed a custom app that visually expresses the energy generated and used by the house to encourage cognizant energy usage.
              </p>
            </div>
          </div>
        </section>

        {/* Water & Landscape */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-accent">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Plumbing & Landscape Integration</h2>
              <p className="project-glass-body">
                We engineered a home-run system where each plumbing line comes directly from our tankless water heater, making running water around the house highly efficient and drastically reducing waste. 
              </p>
              <p className="project-glass-body">
                The exterior landscape design features a rain garden to manage stormwater runoff, native planting that revitalizes local soil and flora, and designated garden beds that allow occupants to grow their own produce.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
