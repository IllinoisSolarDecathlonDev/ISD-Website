export default function NonprofitPage() {
  return (
    <div className="page-shell page-hero-nonprofit">
      <header className="page-header">
        <div className="page-eyebrow">Organization</div>
        <h1>Nonprofit &amp; organization</h1>
        <p className="page-lead">
          Illinois Solar Decathlon works with and through Build Solar Inc., a
          501(c)(3) nonprofit, to bring sustainable energy projects to life.
        </p>
      </header>

      <section className="build-solar-section">
          <img src="/images/build-solar.png" alt="Build Solar Inc." width={180} height={180} className="build-solar-logo" />
        <div className="build-solar-content">
          <h2 className="build-solar-name">Build Solar Inc.</h2>
          <p className="build-solar-intro">
            Build Solar Inc. is a nonprofit organization founded in 2022 by Illinois
            Solar Decathlon&apos;s former President, Halie Collins. Build Solar&apos;s goal
            is to bridge the energy inequality gap that is present internationally.
          </p>
          <p>
            Build Solar is a 501(c)(3) nonprofit organization that addresses energy
            inequality by deploying resilient and sustainable energy projects to
            support healthcare facilities, schools, and other critical infrastructure
            in emerging economies. Build Solar was started by a group of University
            of Illinois students to design, build, and finance a net-zero energy
            solar-powered home, named RENU-Home, for the US Department of Energy 2023
            Solar Decathlon Build Challenge and, post-competition, for Habitat for
            Humanity.
          </p>
          <p>
            The board of Build Solar is made up of UIUC Alumni and members of
            Illinois Solar Decathlon. With the help of Build Solar, Illinois Solar
            Decathlon was able to sign a contract with Nelson Builders and finance
            the construction of the home.
          </p>
        </div>
      </section>
    </div>
  );
}
