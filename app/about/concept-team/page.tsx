import Image from "next/image";

type ConceptTeamMember = {
  name: string;
  image: string;
};

const teamMembers: ConceptTeamMember[] = [
  { name: "Avani Khapre", image: "/images/team/concept/avani-khapre.jpg" },
  { name: "Spencer Bell", image: "/images/team/concept/spencer-bell.jpg" },
  { name: "Ryan Quinlan", image: "/images/team/concept/ryan-quinlan.jpg" },
  { name: "Anika Shinde", image: "/images/team/concept/anika-shinde.jpg" },
];

const leadership = {
  name: "Hitesh Karane",
  role: "2025-2026 Project Manager",
  image: "/images/team/concept/hitesh-karane.jpg",
};

export default function ConceptTeamPage() {
  return (
    <div className="team-page">
      <header className="team-header">
        <h1 className="team-title">Concept Team</h1>
        <div className="team-title-underline" />
      </header>

      <div className="team-page-content">
        <section className="team-intro">
          <div className="team-group-photo">
            <Image
              src="/images/team/concept/group-2025-2026.jpg"
              alt="2025–2026 Concept Team"
              width={600}
              height={400}
              className="group-image"
            />
          </div>
          <div className="team-intro-text">
            <p className="team-intro-kicker">About the Concept Team</p>
            <h2 className="team-intro-heading">Exploring future-ready, sustainable homes</h2>
            <p className="team-description">
              Our 2025–2026 Concept Team is made up mostly of first- and second-year students
              who dive into sustainable building technologies, systems research, and digital
              modeling. They learn tools like Revit that prepare them for future years on ISD.
            </p>
            <p className="team-description">
              This year, the team is developing a single-family home concept that weaves
              sustainable design and engineering principles into every decision—from building
              envelope strategies to mechanical systems and occupant comfort.
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

        <section className="team-members">
          <h2 className="team-section-title">Team members</h2>
          <div className="team-members-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member-card">
                <div className="team-member-photo">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={300}
                    className="member-image"
                  />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


