import Image from "next/image";

export default function AdapthausPage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          {/* Using the known image for ADAPTHAUS as the hero background */}
          <Image
            src="/images/homes/adapthaus.jpg"
            alt="ADAPTHAUS Exterior"
            fill
            className="hero-full-bg"
            style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.6 }}
          />
        </div>
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <div className="project-hero-eyebrow">Projects</div>
            <h1 className="project-hero-title">ADAPTHAUS</h1>
            <p className="project-hero-lead">
              Our 2021 Solar Decathlon entry. A modular, high-performance home designed for flexibility, allowing expansion to accommodate changing household sizes over time.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-completed">Completed 2021</span>
              <span className="project-stat">Modular Design</span>
              <span className="project-stat">7.6 kW PV Array</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Core Concept */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">A Flexible, Modular Future</h2>
              <p className="project-glass-body">
                ADAPTHAUS was our entry into the 2021 Solar Decathlon. Designed over two years, the project examined the feasibility of high-performance housing within Champaign while maintaining adaptability for broader application.
              </p>
              <p className="project-glass-body">
                The home’s core philosophy is centered around a modular configuration. This unique layout allows the structure to physically expand, accommodating changing household sizes, demographics, and spatial needs over its lifespan without requiring an entirely new build.
              </p>
            </div>
          </div>
        </section>

        {/* Configuration & Architecture */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Modular Configuration</h2>
              <p className="project-glass-body">
                The home consists of two 600-square-foot modules totaling approximately 1,200 square feet of living space. This base setup provides all the necessary amenities for a small family or individuals while acting as the foundation for future modular additions.
              </p>
              <p className="project-glass-body">
                EnergyStar-certified and ADA-compliant appliances were integrated throughout the modules to enhance both operational efficiency and accessibility for residents of all abilities.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Module Layout / Exterior Render (Coming Soon)</span>
            </div>
          </div>
        </section>

        {/* Energy & Systems */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Systems UI / Performance Data (Coming Soon)</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Energy Systems & Tracking</h2>
              <p className="project-glass-body">
                The photovoltaic system includes 24 Mission Solar MSE320SR8T panels rated at 320 watts each, resulting in a 7.6 kW installation. This is divided into dual arrays connected to a SolarEdge grid-tied inverter and an Outback Skybox hybrid inverter. 
              </p>
              <p className="project-glass-body">
                Performance is monitored through a Sense Solar Energy Monitor, giving residents real-time tracking of generation and consumption. Meanwhile, HVAC performance is maintained by a CERV2 energy recovery ventilator to ensure exceptional indoor air quality.
              </p>
            </div>
          </div>
        </section>

        {/* Efficiency & Community */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-accent">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Resource Efficiency & Community Impact</h2>
              <p className="project-glass-body">
                The design achieved approximately a 29% reduction in water use relative to EPA baseline standards. Landscape strategies incorporate active rainwater collection alongside pre-installed infrastructure prepared for a future greywater recycling system.
              </p>
              <p className="project-glass-body">
                Following its completion and competition showcase, the ADAPTHAUS residence was donated through Habitat for Humanity to support and provide high-performance, affordable housing initiatives within the local community.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
