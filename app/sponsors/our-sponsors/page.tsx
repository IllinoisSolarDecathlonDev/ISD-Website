import Image from "next/image";
import Link from "next/link";
import type { SponsorTier } from "@/data/sponsors";
import { sponsors } from "@/data/sponsors";

const TIER_ORDER: SponsorTier[] = ["diamond", "gold", "silver", "orangeBlue"];

type DisplayTier = Exclude<SponsorTier, "productSponsors">;

const TIER_CONFIG: Record<
  DisplayTier,
  { label: string; description: string; chipClass: string; emphasis?: boolean }
> = {
  diamond: {
    label: "Diamond sponsors",
    description:
      "Our highest level of support, partnering deeply on vision, funding, and deployment.",
    chipClass: "sponsor-tier-chip-diamond",
    emphasis: true,
  },
  gold: {
    label: "Gold sponsors",
    description: "Major partners providing significant financial or in-kind support.",
    chipClass: "sponsor-tier-chip-gold",
    emphasis: true,
  },
  silver: {
    label: "Silver sponsors",
    description: "Key collaborators enabling critical systems and student opportunities.",
    chipClass: "sponsor-tier-chip-silver",
  },
  orangeBlue: {
    label: "Orange & Blue sponsors",
    description: "Our broadest base of support across campus and industry partners.",
    chipClass: "sponsor-tier-chip-orange-blue",
  },
};

export default function OurSponsorsPage() {
  const sponsorsByTier: Record<SponsorTier, typeof sponsors> = {
    diamond: [],
    gold: [],
    silver: [],
    orangeBlue: [],
    productSponsors: [],
  };

  for (const sponsor of sponsors) {
    sponsorsByTier[sponsor.tier].push(sponsor);
  }

  return (
    <div className="page-shell">
      <header className="page-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 
          style={{ 
            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
            fontWeight: 800,
            letterSpacing: "0.05em",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            textTransform: "uppercase",
            color: "var(--accent-orange)",
            margin: "0 auto 1.5rem auto",
            maxWidth: "900px",
            lineHeight: 1.2
          }}
        >
          A BIG THANK YOU TO ALL OUR SPONSORS!
        </h1>
        <div style={{
          height: "2px",
          width: "100%",
          background: "linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.1), transparent)",
          margin: "0 auto"
        }}></div>
      </header>

      <section className="page-section sponsor-tier-intro">
        <h2>Tiered recognition</h2>
        <p>
          We recognize sponsors across multiple tiers, with the largest number of partners in our
          Orange & Blue levels. Higher tiers reflect deeper, multi-year commitments of
          funding, product, and mentorship. Product sponsors represent our industry partners
          providing innovative technologies and materials.
        </p>
      </section>

      {TIER_ORDER.map((tier) => {
        const list = sponsorsByTier[tier];
        if (!list.length) return null;

        const config = TIER_CONFIG[tier as DisplayTier];
        if (!config) return null;

        return (
          <section
            key={tier}
            className={`page-section sponsor-tier-section ${
              config.emphasis ? "sponsor-tier-section-emphasis" : ""
            } ${tier === "productSponsors" ? "sponsor-tier-section-product" : ""}`}
            aria-labelledby={`sponsor-tier-${tier}`}
          >
            <header className="sponsor-tier-header" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "1.5rem 0",
              borderTop: "2px solid rgba(15, 23, 42, 0.1)",
              borderBottom: "2px solid rgba(15, 23, 42, 0.1)",
              marginBottom: "3rem"
            }}>
              <h2 id={`sponsor-tier-${tier}`} className="sponsor-tier-title" style={{
                margin: 0,
                fontSize: "2.2rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 800,
                color: "var(--text-primary)"
              }}>
                {config.label}
              </h2>
            </header>

            <div className={`sponsor-logo-grid ${tier === "productSponsors" ? "sponsor-logo-grid-product" : ""}`}>
              {list.map((sponsor, index) => {
                // Product sponsors get a more compact, logo-focused layout
                if (tier === "productSponsors") {
                  const productContent = (
                    <div className="sponsor-product-inner">
                      <div className="sponsor-product-logo-wrap">
                        {sponsor.logoSrc ? (
                          <Image
                            src={sponsor.logoSrc}
                            alt={sponsor.name}
                            width={180}
                            height={100}
                            className="sponsor-product-logo"
                          />
                        ) : (
                          <div className="sponsor-product-logo-placeholder">
                            <span>{sponsor.name}</span>
                          </div>
                        )}
                      </div>
                      {sponsor.description && (
                        <p className="sponsor-product-description">{sponsor.description}</p>
                      )}
                    </div>
                  );

                  return sponsor.website ? (
                    <Link
                      key={sponsor.name}
                      href={sponsor.website}
                      className="sponsor-product-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {productContent}
                    </Link>
                  ) : (
                    <div key={sponsor.name} className="sponsor-product-card">
                      {productContent}
                    </div>
                  );
                }

                // Standard layout for other tiers
                const content = (
                  <div className={`sponsor-logo-inner ${index % 2 === 1 ? "reverse" : ""}`}>
                    <div className="sponsor-logo-img-wrap">
                      {sponsor.logoSrc ? (
                        <Image
                          src={sponsor.logoSrc}
                          alt={sponsor.name}
                          width={260}
                          height={120}
                          className="sponsor-logo-img"
                        />
                      ) : (
                        <div className="sponsor-logo-placeholder">
                          <span>{sponsor.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="sponsor-logo-text">
                      <p className="sponsor-logo-name">{sponsor.name}</p>
                      {sponsor.description && (
                        <p className="sponsor-logo-description">{sponsor.description}</p>
                      )}
                    </div>
                  </div>
                );

                return sponsor.website ? (
                  <Link
                    key={sponsor.name}
                    href={sponsor.website}
                    className="sponsor-logo-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={sponsor.name} className="sponsor-logo-card">
                    {content}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

