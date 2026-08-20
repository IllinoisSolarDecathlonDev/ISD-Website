import Image from "next/image";

export default function IdealsPage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          <div className="project-hero-image-wrapper">
            <Image
              src="/images/homes/idealsoutside.png"
              alt="IDEALS Hero Render"
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
            <h1 className="project-hero-title">IDEALS</h1>
            <p className="project-hero-lead">
              Our vision for the future of education in Chicago. An ultra-sustainable, net-positive K-8 school model designed to provide environmental and social justice for underserved communities.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-in-progress">Proposed Design</span>
              <span className="project-stat">Net-Positive Energy</span>
              <span className="project-stat">Microgrid & AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Social & Environmental Justice */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Social & Environmental Justice</h2>
              <p className="project-glass-body">
                Located on the University of Illinois at Chicago (UIC) campus, IDEALS replaces a massive, unshaded parking lot that contributed to hazardous urban heat island effects. By increasing the site's greenscape by 616%, the project promotes healthy, resilient outdoor spaces.
              </p>
              <p className="project-glass-body">
                The school caters to Chicago’s most underprivileged populations from the West and South sides, aiming to provide early educational intervention and rekindle trust between vulnerable communities and the public school system.
              </p>
            </div>
          </div>
        </section>

        {/* Biophilic & Passive Design */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Passive Building & Biophilia</h2>
              <p className="project-glass-body">
                At the entrance, students are greeted by a floor-to-ceiling atrium with an exposed beam structure, internal vegetation, and interactive learning stairs. Three courtyards maximize natural sunlight and fresh air, while a double-skin south facade utilizes the stack effect for powerful thermal regulation.
              </p>
              <p className="project-glass-body">
                Kinetic shades made of recycled aluminum provide adaptive afternoon shading on the north and west facades. The vertical fin shading pays an homage to UIC’s brutalist architectural legacy while breaking from the past to signal a more sustainable future.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Atrium / Courtyard Render (Coming Soon)</span>
            </div>
          </div>
        </section>

        {/* Net-Positive Energy & Smart Tech */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Systems / Microgrid Diagram (Coming Soon)</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Net-Positive Energy & Smart Tech</h2>
              <p className="project-glass-body">
                Producing 580,000 kBTU in excess annually, IDEALS achieves a negative net EUI of -3.4 kBtu/sqft. It features triple-glazed PV windows and 650 roof-mounted thin-film solar arrays. A 440ft deep geothermal system combined with VRF and DOAS handles 100% of the heating and cooling loads.
              </p>
              <p className="project-glass-body">
                Our integrated AI software dynamically adjusts HVAC and lighting based on real-time occupancy and weather forecasts. In grid disruptions, a 1200 kW battery sustains operations for 8 hours, while peer-to-peer blockchain technology allows the microgrid to sell excess energy back to the community.
              </p>
            </div>
          </div>
        </section>

        {/* Water, Materials & Education */}
        <section className="project-glass-section project-glass-grid-3">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Water Resilience</h2>
              <p className="project-glass-body">
                A "purple roof" system provides 100% on-site stormwater management. Furthermore, IDEALS provides 100% of its irrigation through recycled rainwater and greywater, while a PIRANHA wastewater heat recovery system satisfies 100% of the building’s hot water demands.
              </p>
            </div>
          </div>
          
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Sustainable Materials</h2>
              <p className="project-glass-body">
                Designed for extreme serviceability against severe weather, the structural framing features Illinois-sourced southern pine wood and CLT panels over a concrete raft foundation. Heavily recycled materials reduce its embodied carbon footprint to an incredible 137kg CO2/m2.
              </p>
            </div>
          </div>

          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">The School as a Lab</h2>
              <p className="project-glass-body">
                The building acts as a living prototype. Features like algae facades and kinetic floors are put on display in the cafeteria. A custom mobile app acts as the school's hub, allowing students to access schedules and monitor the building's net-zero renewable systems in real-time.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
