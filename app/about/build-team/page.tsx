import Image from "next/image";

type TeamMember = {
  name: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  // Add team members here, e.g.:
  // { name: "Member Name", image: "/images/team/build/member-name.jpg" },
];

const leadership = {
  name: "Etienne Sirois",
  role: "2025-2026 Build Lead",
  image: "/images/team/build/etienne-sirois.jpg",
};

export default function BuildTeamPage() {
  return (
    <div className="team-page">
      <header className="team-header">
        <h1 className="team-title">Build Team</h1>
        <div className="team-title-underline" />
      </header>

      <div className="team-page-content">
        <section className="team-intro">
          <div className="team-group-photo">
            <Image
              src="/images/team/build/group-2025-2026.jpg"
              alt="2025–2026 Build Team"
              width={600}
              height={400}
              className="group-image"
            />
          </div>
          <div className="team-intro-text">
            <p className="team-intro-kicker">About the Build Team</p>
            <h2 className="team-intro-heading">Turning drawings into a net‑zero home</h2>
            <p className="team-description">
              The Build Team translates drawings into full-scale prototypes through tight
              coordination of fabrication, logistics, and on-site construction—bridging the
              gap between design intent and reality.
            </p>
            <p className="team-description">
              Our 2025–2026 Build Team is designing a new net‑zero home in Rantoul, IL.
              After purchasing the site and completing multiple site analyses, the team is
              finalizing drawings with company partners and aiming to break ground this
              winter—creating a repeatable model for affordable, net‑zero housing in
              suburban and rural communities.
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


