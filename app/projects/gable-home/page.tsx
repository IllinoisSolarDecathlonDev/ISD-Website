import Image from "next/image";

export default function GableHomePage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          {/* Using the known image for the Gable Home as the hero background */}
          <Image
            src="/images/homes/gable-home.jpg"
            alt="Gable Home Exterior"
            fill
            className="hero-full-bg"
            style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.6 }}
          />
        </div>
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <div className="project-hero-eyebrow">Projects</div>
            <h1 className="project-hero-title">Gable Home</h1>
            <p className="project-hero-lead">
              Our 2009 Solar Decathlon entry. Inspired by the traditional gable-roofed farmhouses and barns characteristic of the Midwest, exploring how familiar architectural forms could be paired with advanced building science.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-completed">Completed 2009</span>
              <span className="project-stat">9.1 kW PV Array</span>
              <span className="project-stat">90% Lower Energy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Concept & Evolution */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">A Midwestern Evolution</h2>
              <p className="project-glass-body">
                The Gable Home was our 2009 Solar Decathlon entry. Inspired by the traditional gable-roofed farmhouses and barns characteristic of the Midwest, the project explored how familiar architectural forms could be paired with advanced building science and solar technologies.
              </p>
              <p className="project-glass-body">
                The design positioned high-performance housing not as a departure from regional identity, but as an evolution of it. By marrying an iconic aesthetic with cutting-edge efficiency, the project challenged conventional assumptions about sustainable living.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior & Materials */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Reclaimed Materials & Form</h2>
              <p className="project-glass-body">
                The exterior incorporated reclaimed barn wood siding and a sliding wood screen system that enhanced passive solar control. This approach not only paid homage to regional vernacular architecture but also served a crucial functional role in regulating the home's thermal load.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Exterior Details / Reclaimed Wood Render (Coming Soon)</span>
            </div>
          </div>
        </section>

        {/* Building Science & Systems */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Systems Diagram / Structural Render (Coming Soon)</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Advanced Building Science</h2>
              <p className="project-glass-body">
                A laminated bamboo structural frame, nearly 12 inches of high-performance insulation, and strategically positioned glazing significantly reduced heating and cooling loads. 
              </p>
              <p className="project-glass-body">
                A 9.1 kW photovoltaic array generated up to four times the home’s operational demand. Through the combined impact of envelope efficiency and on-site energy generation, the Gable Home achieved approximately 90% lower energy consumption than conventional residential construction.
              </p>
            </div>
          </div>
        </section>

        {/* Project Scale & Rigor */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-accent">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Scale, Rigor & Impact</h2>
              <p className="project-glass-body">
                Developed by more than 200 students and collaborators, the project illustrated the scale and technical rigor of the Illinois Solar Decathlon program. It stands as a testament to what interdisciplinary teams can achieve when combining ambition with deep research.
              </p>
              <p className="project-glass-body">
                The final result reinforced the viability of regionally grounded, performance-oriented design—proving that sustainable homes can deeply respect their local heritage.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
