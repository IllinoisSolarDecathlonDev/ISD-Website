const leadershipMembers = [
  { name: "Benny Winer", role: "President", image: "/images/team/leadership/benny-winer.jpg" },
  { name: "Jamane Tong", role: "Vice President", image: "/images/team/leadership/anonpfp.jpg" },
  { name: "Agnes Tamatekou", role: "Treasurer", image: "/images/team/leadership/anonpfp.jpg" },
  { name: "Saarthak Jain", role: "Sponsorship Coordinator", image: "/images/team/leadership/anonpf.png" },
  { name: "Emma Zheng", role: "Communications Director", image: "/images/team/leadership/anonpfp.jpg" },
  { name: "Annika Lao", role: "Marketing Director", image: "/images/team/leadership/anonpfp.jpg" },
  { name: "Xavier Lindsey", role: "Membership Director", image: "/images/team/leadership/anonpfp.jpg" },
];

const facultyAdvisors = [
  { role: "Lead Faculty Advisor", names: ["Prof. Andrew Stillwell"] },
  { role: "Architecture", names: ["Prof. Mark Taylor"] },
  { role: "HVAC", names: ["Prof. Yuanhui Zhang"] },
  { role: "PV&E", names: ["Prof. Andrew Stillwell"] },
  { role: "Water", names: ["Prof. Ashlynn Stillwell"] },
  { role: "Landscape", names: ["Prof. Kelley Lemon"] },
  { role: "Other", names: ["Prof. Lei Zhao", "Bob Devine", "Morgan White"] },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function LeadershipPage() {
  return (
    <div className="team-page leadership-page">
      <header className="team-header">
        <h1 className="team-title">Leadership</h1>
        <div className="team-title-underline" />
      </header>

      <div className="team-page-content">
        <section className="leadership-intro">
          <p className="team-year-title">2025–2026 Executive Board</p>
          <p className="team-description leadership-description">
            ISD is led by a student executive board working closely with faculty and
            industry advisors. Leadership roles mirror a professional design-build
            organization—students coordinate timelines, manage budgets, facilitate
            design reviews, and steward partnerships.
          </p>
        </section>

        <section className="leadership-grid-wrap">
          <div className="leadership-grid">
            {leadershipMembers.map((member) => (
              <article key={member.name} className="leadership-member-card">
                <div className="leadership-member-photo">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={300}
                    className="member-image"
                  />
                </div>
                <h3 className="leadership-member-name">{member.name}</h3>
                <p className="leadership-member-role">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="advisors-section">
          <h2 className="advisors-title">Faculty Advisors</h2>
          <p className="advisors-subtitle">
            Faculty and industry advisors who ground our projects in real-world practice.
          </p>
          <div className="advisors-grid">
            {facultyAdvisors.map((advisor) => (
              <div key={advisor.role} className="advisor-card">
                <span className="advisor-role">{advisor.role}</span>
                <div className="advisor-names">
                  {advisor.names.map((n) => (
                    <span key={n} className="advisor-name">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
