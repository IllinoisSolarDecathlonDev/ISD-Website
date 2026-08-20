import Image from "next/image";

export default function ReHomePage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          {/* Using the known image for the Re_Home as the hero background */}
          <Image
            src="/images/homes/re-home.jpg"
            alt="Re_Home Exterior"
            fill
            className="hero-full-bg"
            style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.6 }}
          />
        </div>
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <div className="project-hero-eyebrow">Projects</div>
            <h1 className="project-hero-title">Re_Home</h1>
            <p className="project-hero-lead">
              Our 2011 Solar Decathlon entry. A rapidly deployable, disaster-responsive modular housing prototype designed for the Midwest.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-completed">Completed 2011</span>
              <span className="project-stat">Rapid Deployment</span>
              <span className="project-stat">7.7 kW PV Array</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Disaster Response & Modularity */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Disaster-Responsive Design</h2>
              <p className="project-glass-body">
                Re_Home was our entry into the 2011 Solar Decathlon. Developed during a year that recorded 1,718 tornadoes in the United States—nearly double the historical annual average—the project responded to the need for rapidly deployable, disaster-responsive housing in the Midwest.
              </p>
              <p className="project-glass-body">
                The prototype was conceived as a modular dwelling capable of transitioning from trailer transport to a fully assembled building frame in approximately three hours. Designed as a one- to two-bedroom, one-bath residence with full handicap accessibility and 36-inch doorways, Re_Home balanced emergency functionality with long-term residential livability.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture & Finishes */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Modular Construction</h2>
              <p className="project-glass-body">
                The structure consisted of two primary modules constructed in partnership with Illinois-based manufacturer Homeway Homes. A core module housed the kitchen, bathroom, and mechanical systems, while the secondary module contained living and flexible areas.
              </p>
              <p className="project-glass-body">
                Exterior finishes included painted cedar siding, Resysta panels composed of recycled rice husks and natural binders, and reclaimed wood decking, merging rapid manufacturing with sustainable material choices.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Module Transport / Exterior Render (Coming Soon)</span>
            </div>
          </div>
        </section>

        {/* Performance Envelope & Energy */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Systems Diagram / Interior Render (Coming Soon)</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Envelope & Energy Systems</h2>
              <p className="project-glass-body">
                The building envelope incorporated spray foam insulation (R-60 roof and floor, R-45 walls) and triple-pane, argon-filled low-emissivity windows with a U-value of 0.18. Mechanical systems included a hybrid heat pump water heater and a CERV (Conditioning Energy Recovery Ventilator) unit to support high-efficiency ventilation and indoor air quality.
              </p>
              <p className="project-glass-body">
                The photovoltaic system combined a 5.5 kW SunPower array and a 1.17 kW bifacial Sanyo array, totaling approximately 7.7 kW of installed capacity. Average daily energy consumption measured 18.4 kWh, with appliances and HVAC representing the largest loads.
              </p>
            </div>
          </div>
        </section>

        {/* Success & Impact */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-accent">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Competition Success & Impact</h2>
              <p className="project-glass-body">
                Re_Home placed 7th overall among 20 international teams and performed strongly in both judged and measured contests, earning high placements in Market Appeal, Affordability, Appliances, and Hot Water. 
              </p>
              <p className="project-glass-body">
                The project demonstrated how modular construction, envelope performance, and resilience strategies could be synthesized into a practical housing model for the Midwest, proving that emergency housing can evolve into permanent, net-zero homes.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
