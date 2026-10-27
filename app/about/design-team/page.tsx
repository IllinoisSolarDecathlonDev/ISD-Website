import Image from "next/image";

const leadership = {
  name: "Coming Soon",
  role: "2026-2027 Design Lead",
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
          <div className="team-group-photo team-group-photo--wide">
            <Image
              src="/images/team/design/Design_team_26-27.jpg"
              alt="2026–2027 Design Team"
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
              Our 2026–2027 Design Team is competing in the 2027 Setty Family Foundation Net
              Zero Energy Design Competition. The challenge is to retrofit a hotel in Taipei to approach
              Net Zero Energy and meet ASHRAE Standard 189.1. The team is developing
              preliminary schemes and researching compliance standards to meet energy and
              community-oriented targets.
            </p>
          </div>
        </section>

        <section className="team-leadership">
          <h2 className="team-section-title">Project team leadership</h2>
          <div className="leadership-card">
            <div className="leadership-photo">
              <div className="leadership-photo-placeholder" />
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