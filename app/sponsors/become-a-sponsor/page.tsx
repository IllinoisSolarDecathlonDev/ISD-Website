"use client";

import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { SponsorCard } from "@/components/SponsorCard";

const productDonationIntro =
  "Our homes showcase the most innovative products and technologies in the green building industry. To see our vision through, we rely on the support of industry leaders to provide state-of-the-art products in-kind or at a significant discount. We look for partners in all areas of building technology, photovoltaics, envelope systems, appliances, home automation, finish products, etc.";

const productDonationBody = [
  "For more information, see our product sponsorship packet attached here that outlines the benefits we can provide and the steps to get involved.",
];

const financialSupportIntro =
  "Our projects require significant financial support in order to be successful. Funding goes towards construction costs, student travel expenses, education/training, and organization operational costs.";

const financialSupportBody = [
  "For more information, see our financial sponsorship packet attached here that outlines the benefits we can provide and the steps to get involved.",
];

export default function BecomeSponsorPage() {
  return (
    <div className="sponsor-page">
      {/* Hero */}
      <section className="sponsor-hero" aria-labelledby="sponsor-hero-title">
        <div className="sponsor-hero-inner">
          <h1 id="sponsor-hero-title" className="sponsor-hero-title">
            Partner With the Future of Sustainable Building
          </h1>
          <p className="sponsor-hero-sub">
            Sponsor student-led innovation at the intersection of sustainability,
            technology, and real-world impact.
          </p>
          <div className="sponsor-hero-ctas">
            <CTAButton href="/contact?topic=sponsorship">Become a Sponsor</CTAButton>
            <CTAButton href="/projects/beacon-house" variant="secondary">
              View Current Project
            </CTAButton>
          </div>
        </div>
      </section>

      <div className="sponsor-page-content">
        {/* How to Get Involved */}
        <SectionHeader title="How to Get Involved" className="sponsor-section-header" />

        {/* Product Donation card — left text, right image */}
        <SponsorCard
          title="Product Donation"
          intro={productDonationIntro}
          bodyParagraphs={productDonationBody}
          highlightTitle="Ideal For:"
          highlightItems={[
            "Building technology companies",
            "Photovoltaics & energy systems",
            "Smart home & automation brands",
            "Appliance & materials manufacturers",
          ]}
          ctaLabel="Download Product Sponsorship Packet"
          ctaHref="https://drive.google.com/file/d/1_p9zKpkDrZa3JBsc3_37Z1F8cO3OsWLh/view"
          imageSrc="/images/sponsors/productdonation.jpg"
          imageAlt="Product Donation"
          imageOnRight
          externalLink
        />

        {/* Financial Support card — left image, right text */}
        <SponsorCard
          title="Financial Support"
          intro={financialSupportIntro}
          bodyParagraphs={financialSupportBody}
          highlightTitle="Funds Support:"
          highlightItems={[
            "Construction & materials",
            "Student travel & competitions",
            "Education & training",
            "Operational costs",
          ]}
          ctaLabel="Download Financial Sponsorship Packet"
          ctaHref="https://drive.google.com/file/d/1XUIUAnUxxIZWVdYqsfce14tttUI78_LU/view"
          imageSrc="/images/sponsors/legoatshabitat.jpg"
          imageAlt="Financial Support"
          externalLink
        />

        {/* CTA button row */}
        <div className="sponsor-cta-row">
          <Link href="https://drive.google.com/file/d/1_p9zKpkDrZa3JBsc3_37Z1F8cO3OsWLh/view" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary cta-button-row">
            Product Sponsorship
          </Link>
          <Link href="https://drive.google.com/file/d/1XUIUAnUxxIZWVdYqsfce14tttUI78_LU/view" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary cta-button-row">
            Financial Sponsorship
          </Link>
          <Link href="/contact" className="cta-button cta-button-secondary cta-button-row">
            Contact Us
          </Link>
          <Link href="/projects/beacon-house" className="cta-button cta-button-secondary cta-button-row">
            Current Project
          </Link>
        </div>

        {/* Why Sponsor Us */}
        <section className="sponsor-why" aria-labelledby="why-sponsor-title">
          <h2 id="why-sponsor-title" className="sponsor-why-title">
            Why Sponsor Us?
          </h2>
          <div className="sponsor-why-grid">
            <div className="sponsor-why-card">
              <h3 className="sponsor-why-card-title">Real-world deployment</h3>
              <p className="sponsor-why-card-body">
                Showcase your products in real, occupied homes—not just prototypes.
              </p>
            </div>
            <div className="sponsor-why-card">
              <h3 className="sponsor-why-card-title">Student talent pipeline</h3>
              <p className="sponsor-why-card-body">
                Engage directly with top engineering and design students from UIUC.
              </p>
            </div>
            <div className="sponsor-why-card">
              <h3 className="sponsor-why-card-title">Brand visibility in sustainability</h3>
              <p className="sponsor-why-card-body">
                Align your brand with sustainability, innovation, and measurable impact.
              </p>
            </div>
          </div>
        </section>

        {/* Trusted By (placeholder for logos) */}
        <section className="sponsor-trusted" aria-labelledby="trusted-title">
          <h2 id="trusted-title" className="sponsor-trusted-title">
            Trusted By Industry Leaders
          </h2>
          <p className="sponsor-trusted-sub">
            Past sponsors and partners.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <Link 
              href="/sponsors/our-sponsors"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.8rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '999px',
                color: 'var(--text-primary)',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.1)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))';
                e.currentTarget.style.borderColor = 'var(--accent-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              View All Our Sponsors <span style={{ marginLeft: '0.5rem' }}>→</span>
            </Link>
          </div>
        </section>

        {/* Final CTA strip */}
        <section className="sponsor-final-cta" aria-labelledby="final-cta-title">
          <h2 id="final-cta-title" className="sponsor-final-cta-title">
            Ready to Partner With Us?
          </h2>
          <div className="sponsor-final-cta-buttons">
            <CTAButton href="/contact?topic=sponsorship">Become a Sponsor</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </section>
      </div>
    </div>
  );
}
