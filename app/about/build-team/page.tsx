import Image from "next/image";
import Link from "next/link";

const leadership = {
  name: "Amrit Agarwal",
  role: "2026-2027 Build Lead",
  image: "/images/team/build/Build_lead_26-27.jpg",
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
              src="/images/team/build/Build_team_26-27.jpg"
              alt="2026–2027 Build Team"
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
              Our 2026–2027 Build Team has just completed the new net‑zero home <Link href="/projects/beacon-house">BEACON</Link> in
              Rantoul, IL. After purchasing the site, completing multiple site analyses and
              designs, and collaborating with company partners, BEACON is fully constructed
              and ready for a family to reside in — the first of many affordable, net‑zero
              housing designs for suburban and rural communities.
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


