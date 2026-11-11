import Image from "next/image";

const leadership = {
  name: "Kartikey Singh",
  role: "2026-2027 Project Manager",
  image: "/images/team/concept/Concept_lead_26-27.jpg",
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
          <div className="team-group-photo team-group-photo--wide">
            <Image
              src="/images/team/concept/Concept_team_26-27.jpg"
              alt="2026–2027 Concept Team"
              width={600}
              height={400}
              className="group-image"
            />
          </div>
          <div className="team-intro-text">
            <p className="team-intro-kicker">About the Concept Team</p>
            <h2 className="team-intro-heading">Exploring future-ready, sustainable homes</h2>
            <p className="team-description">
              Our 2026–2027 Concept Team is made up mostly of first- and second-year students
              who dive into sustainable building technologies, systems research, and digital
              modeling. They learn tools like Revit that prepare them for future years on ISD.
            </p>
            <p className="team-description">
              This year, the team has an internal competition to design a sustainable
              single-family home, weaving innovation and engineering principles into every
              decision.
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
