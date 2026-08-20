import Image from "next/image";

type DesignTeamMember = {
  name: string;
  image: string;
};

const teamMembers: DesignTeamMember[] = [
  // Add team members here, e.g.:
  // { name: "Member Name", image: "/images/team/design/member-name.jpg" },
];

const leadership = {
  name: "Afrin Khoury",
  role: "2025-2026 Design Lead",
  image: "/images/team/design/afrin-khoury.jpg",
};

export default function DesignTeamPage() {
  return (
    <div className="team-page">
      <header className="team-header">
        <h1 className="team-title">Design Team</h1>
        <div className="team-title-underline" />
      </header>

      <div className="team-page-content">
        <section className="team-intro">
          <div className="team-group-photo">
            <Image
              src="/images/team/design/group-2025-2026.jpg"
              alt="2025–2026 Design Team"
              width={600}
              height={400}
              className="group-image"
            />
          </div>
          <div className="team-intro-text">
            <p className="team-intro-kicker">About the Design Team</p>
            <h2 className="team-intro-heading">Shaping the spaces our projects live in</h2>
            <p className="team-description">
              The Design Team crafts the architectural concept, interior experience, and
              visual storytelling that define each ISD project—balancing performance,
              comfort, and aesthetics.
            </p>
            <p className="team-description">
              Our 2025–2026 Design Team is competing in the 2025 DOE Design Challenge with
              a multifamily project that responds to the housing crisis in Chicago. The team
              is developing preliminary schemes and researching innovative retrofit strategies
              to meet ambitious energy and resilience targets.
            </p>
          </div>
        </section>

        <section className="team-leadership">
          <h2 className="team-section-title">Project team leadership</h2>
          <div className="leadership-card">
            <div className="leadership-photo">
              <Image
                src={leadership.image}
                alt={leadership.name}
                width={300}
                height={400}
                className="leadership-image"
              />
            </div>
            <div className="leadership-info">
              <h3 className="leadership-name">{leadership.name}</h3>
              <p className="leadership-role">{leadership.role}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}