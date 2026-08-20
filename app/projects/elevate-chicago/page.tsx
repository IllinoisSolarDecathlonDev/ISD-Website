import Image from "next/image";

export default function ElevateChicagoPage() {
  return (
    <div className="project-futuristic-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          <div className="project-hero-image-wrapper">
            <Image
              src="/images/homes/elevate.png"
              alt="Elevate Chicago Hero Render"
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
            <h1 className="project-hero-title">Elevate Chicago</h1>
            <p className="project-hero-lead">
              A high-performance, mixed-use, mid-rise concept serving as a catalyst for community development in the heart of Downtown Chicago.
            </p>
            <div className="project-hero-meta">
              <span className="project-status-badge project-status-badge-in-progress">Design Study</span>
              <span className="project-stat">90,000 sq ft</span>
              <span className="project-stat">Net-Zero</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="project-futuristic-main">
        {/* Urban Context & Community */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-large">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Urban Context & Community</h2>
              <p className="project-glass-body">
                Downtown Chicago is made of a dense urban core comprising both a commercial office district as well as residential apartment units that make up its urban fabric. With a median community age of around 32 and a chunk of the employed population being millennials, the design narrative serves as a catalyst for community development.
              </p>
              <p className="project-glass-body">
                The building site is located at the junction of design aims to bridge the gap between the office and residential district by serving as an intersection for pedestrians to get engaged and find a purpose to stimulate their senses.
              </p>
            </div>
          </div>
        </section>

        {/* Design Innovation & Accessibility */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Mixed-Use Architecture</h2>
              <p className="project-glass-body">
                The 90,000 sq. ft. land area has a small ratio of covered area compared to the extensive landscaping space that engages the public and incorporates retail spaces for local small businesses, which will stimulate the local economy and enliven the area.
              </p>
              <p className="project-glass-body">
                This office building is designed to cater not just to the average office goer, but also workers with neuro-diverse needs, highschool students, and freelancers who are provided with rentable spaces.
              </p>
            </div>
          </div>

          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Raw CAD / Exterior Render (Coming Soon)</span>
            </div>
          </div>
        </section>

        {/* Building Philosophy */}
        <section className="project-glass-section">
          <div className="project-glass-card project-glass-card-accent">
            <div className="project-glass-content">
              <h2 className="project-glass-title">A Post-COVID Philosophy</h2>
              <p className="project-glass-body">
                By converting closed plans to open ones, and multiple spaces to flexible spaces, we create a more accessible, friendly, and creative environment. Our architectural philosophy addresses the latent impacts of COVID on work-life culture, and seeks to accommodate new innovations such as hybrid-working while also making office use both more desirable and sustainable.
              </p>
              <p className="project-glass-body">
                The staircase-like external appearance of the building, and extended, open inner-spaces both take inspiration from the concept of “elevation”, which speaks to the constant aspirations of growth that move our cities, whilst emphasizing the necessity of keeping this growth in-tune with spirit and nature.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering & Systems */}
        <section className="project-glass-section project-glass-grid-2">
          <div className="project-glass-card project-glass-image-card">
            <div className="project-glass-image-placeholder">
              <span>Systems / Interior Render (Coming Soon)</span>
            </div>
          </div>
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Engineering & Systems</h2>
              <p className="project-glass-body">
                Utilizing a continuous insulation system, rigid foam board is applied outbound of the wall’s sheathing. In addition to eliminating thermal breaks, this rigid foam layer serves as a weather-resistive barrier and vapor guard, which helps ensure the longevity of the framing and improves the building’s indoor environment.
              </p>
              <p className="project-glass-body">
                The HVAC system consists of two active components; a dedicated Daikan RoofPak sized for the specific requirements of the office, retail, and cafe/storage spaces; and, to reduce energy consumption, VRV units are placed within each zone to individually control the ventilation and heating/cooling within them.
              </p>
              <p className="project-glass-body">
                The water system consists of water heaters with a reheat system that utilizes geothermal pile foundation, as well as on-demand recirculation pumps located below each fixture. Our building’s electrical system will include LED circadian lighting and ambient motion sensor lighting to complement an efficient design.
              </p>
            </div>
          </div>
        </section>

        {/* Energy, Tech & Automation */}
        <section className="project-glass-section project-glass-grid-3">
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Net-Zero Energy</h2>
              <p className="project-glass-body">
                Renewable energy sources provide the required production to meet the site's total annual energy consumption, which makes our site net-zero. Utilization of multiple energy sources makes the site less reliant on a grid-tied system. The building will also have access to the Chicago electrical grid as a reliable backup if PV production exceeds energy demand.
              </p>
            </div>
          </div>
          
          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Green Innovation</h2>
              <p className="project-glass-body">
                The proposed design is optimized to reduce energy requirements, coupled with building materials and systems that either sequester carbon dioxide or extract it out of the air. Greenfluidics algae solar bio-panels improve air quality by mitigating 200 Kg CO2 per year alongside providing continuous oxygenation.
              </p>
            </div>
          </div>

          <div className="project-glass-card">
            <div className="project-glass-content">
              <h2 className="project-glass-title">Passive & Smart Tech</h2>
              <p className="project-glass-body">
                Energy efficiency is maximized through passive measures such as optimal building orientation, algae facade temperature differentials for ventilation and passive cooling, and a solar chimney along the southern facade. A streamlined phone app allows users a convenient way to check bicycle parking, order from retail, reserve office space, and adjust lighting/temperature.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
