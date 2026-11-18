import { ProjectHero } from "@/components/ProjectHero";

export default function GableHomePage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <ProjectHero
        title="Gable Home"
        lead="Our 2009 Solar Decathlon entry. Inspired by the traditional gable-roofed farmhouses and barns characteristic of the Midwest, exploring how familiar architectural forms could be paired with advanced building science."
        imageSrc="/images/homes/gable-home.jpg"
        imageAlt="Gable Home exterior"
        status={{ label: "Completed 2009", variant: "completed" }}
        stats={["9.1 kW PV Array", "90% Lower Energy"]}
      />

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
