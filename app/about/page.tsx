import Image from "next/image";
import { CountUpStats } from "../../components/CountUpStats";

const ABOUT_IMAGES = [
  "/images/about/1.jpg",
  "/images/about/2.jpg",
  "/images/about/3.jpg",
  "/images/about/4.jpg",
  "/images/about/5.jpg",
];

const ABOUT_STATS = [
  { value: 120, suffix: "+", label: "Active members" },
  { value: 15, suffix: "+", label: "Majors represented" },
  { value: 3, suffix: "–4", label: "Competition projects per cycle" },
];

export default function AboutPage() {
  return (
    <div className="page-shell page-hero-about">
      <header className="page-header page-header-about">
        <div className="page-eyebrow">About Illinois Solar Decathlon</div>
        <h1>About Us</h1>
        <p className="page-lead">
          Who we are, our history, and our mission to advance sustainable building
          through design and technology.
        </p>
      </header>

      <div className="about-layout">
        <div className="about-content">
          <section className="about-block">
            <h2 className="about-heading">Who we are</h2>
            <p className="about-body">
              Illinois Solar Decathlon is an interdisciplinary registered student
              organization with over 100 undergraduate and graduate students at the
              University of Illinois at Urbana-Champaign. We compete in the
              international, Department of Energy-sponsored Solar Decathlon Build and
              Solar Decathlon Design competitions. Illinois Solar Decathlon is
              comprised of an executive board, a build competition team, a design
              competition team, and a concept team, which fosters skills and
              knowledge development for younger organization members.
            </p>
          </section>

          <section className="about-block">
            <h2 className="about-heading">Our history</h2>
            <p className="about-body">
              Our history begins in 2007 when we first took part in the Solar
              Decathlon Build competition, a challenge open to teams from universities
              from around the world where students design and build full-size
              solar-powered homes with support from professional sponsors. Since our
              impetus, we have built a total of five homes, one of which achieved
              second place, and competed in several design competitions. Our 2024
              Design team are now finalist in the DOE Design Challenge and is
              polishing IDEALS for the final competition.
            </p>
          </section>

          <section className="about-block">
            <h2 className="about-heading">Our mission</h2>
            <p className="about-body">
              Illinois Solar Decathlon seeks to lead innovation in design and
              technology to advance towards an environmentally sustainable future. We
              bridge the legacy of past Illinois competition projects to the
              development of future successful teams. For our existing homes, we
              ensure their continual usage as a research and outreach platform. On
              campus, we engage in projects and foster relationships to educate and
              develop our organization. Through our integrated approach, we aim to
              elevate the standard of Solar Decathlon and ensure a true contribution
              to green building.
            </p>
          </section>
        </div>

        <aside className="about-gallery">
          <div className="about-gallery-main">
            <div className="about-img-wrap about-img-large">
              <Image
                src={ABOUT_IMAGES[0]}
                alt="Illinois Solar Decathlon"
                fill
                className="about-img"
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
          </div>
          <div className="about-gallery-grid">
            {ABOUT_IMAGES.slice(1, 5).map((src, i) => (
              <div key={src} className="about-img-wrap">
                <Image
                  src={src}
                  alt={`About Illinois Solar Decathlon ${i + 2}`}
                  fill
                  className="about-img"
                  sizes="(max-width: 900px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </aside>
      </div>

      <CountUpStats stats={ABOUT_STATS} />

      <div className="about-footer-notes">
        <div className="about-note">
          <span className="about-badge">Subteams</span>
          <ul className="about-list">
            <li>Build Team</li>
            <li>Design Team</li>
            <li>Concept Team</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
