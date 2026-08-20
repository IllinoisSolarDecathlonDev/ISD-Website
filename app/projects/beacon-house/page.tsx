import Image from "next/image";

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
              Building Energy-Efficient Affordable Community-Oriented Neighborhoods. A new initiative redirecting our focus toward direct community implementation in Rantoul, Illinois.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-in-progress">In Progress (Summer 2026)</span>
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
                The 1,700+ square-foot, three-bedroom, two-bath, all-electric residence is currently under development in Rantoul, Illinois, with completion anticipated in Summer 2026.
              </p>
              <p className="project-glass-body">
                Construction began in early 2026 in coordination with Broeren-Russo Builders serving as the general contractor. The project is organized across specialized subteams responsible for architecture, photovoltaic and electrical systems, HVAC, water systems, site development, construction management, and lighting/appliances/home automation.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-figure" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/images/projects/beacon-house/beacon2.png"
                alt="BEACON Home exterior render"
                style={{ width: "100%", maxWidth: "540px", borderRadius: "1rem", boxShadow: "0 4px 28px 0 #0001", marginBottom: "0.5rem" }}
              />
              <span className="project-glass-image-caption">Preliminary exterior render of BEACON Home (design in progress)</span>
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
              <span className="project-glass-image-caption">Performance Dashboard UI (Coming Soon)</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Performance & Livability</h2>
              <p className="project-glass-body">
                The design prioritizes durability, resilience, integrated building performance, indoor environmental quality, and occupant comfort. To ensure the home operates efficiently, a specialized performance dashboard enables residents to monitor their energy production and consumption in real time.
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
                Upon completion, BEACON Home will be donated to a local family through Habitat for Humanity. This reinforces our ongoing commitment to ensuring that cutting-edge, sustainable housing models remain accessible to the broader community.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
