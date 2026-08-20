"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VisionCarousel } from "../components/VisionCarousel";
import { GoogleCalendar } from "../components/GoogleCalendar";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Setup intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe timeline items
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section className="hero-full">
        <div className="hero-full-image" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/landing.jpg"
            alt="Illinois Solar Decathlon house with solar arrays"
            fill
            priority
            className="hero-full-bg"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="hero-full-overlay">
          <h1
            className={`hero-title ${isLoaded ? "hero-title-animate" : ""}`}
            style={{
              fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
              fontWeight: 800,
              letterSpacing: "0.08em",
              fontSize: "5perrem",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            ILLINOIS SOLAR DECATHLON
          </h1>
          <div
            className={`hero-underline-bar ${isLoaded ? "hero-underline-animate" : ""}`}
            style={{
              height: "10px",
              width: "60%",
              margin: "0 auto 2rem auto",
              borderRadius: "5px",
              background:
                "linear-gradient(90deg, #FF7518 0%, #FFAD42 100%)",
              boxShadow: "0 2px 12px 0 #ff751847",
            }}
          ></div>
          <p
            className={`hero-subtitle ${isLoaded ? "hero-subtitle-animate" : ""}`}
            style={{
              fontSize: "2rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "#fff",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN
          </p>
        </div>
      </section>

      <div className="home-inner">
        <section className="competition-section scroll-animate fade-up">
          <div className="competition-grid">
            <div className="competition-panel">
              <p className="competition-eyebrow">About Solar Decathlon</p>
              <h2 className="competition-title">U.S. Department of Energy Solar Decathlon</h2>
              <p className="competition-body">
                The U.S. Department of Energy Solar Decathlon® is a collegiate competition that prepares
                the next generation of building professionals to design and build high-performance,
                low-carbon buildings powered by renewables.
              </p>
              <p className="competition-body">
                Students compete in ten contests that showcase innovative approaches to architecture,
                engineering, and energy use—bridging the gap between classroom learning and real-world,
                built projects.
              </p>
              <div className="competition-logos" style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "2rem",
                marginTop: "0.5rem"
              }}>
                <Image
                  src="/images/logos/doe-solar-decathlon-logo.png"
                  alt="U.S. Department of Energy Solar Decathlon logo"
                  width={180}
                  height={70}
                  className="competition-logo"
                  style={{ 
                    objectFit: "contain", 
                    filter: "grayscale(1) invert(1) brightness(2)",
                    mixBlendMode: "screen",
                    opacity: 0.9
                  }}
                />
                <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.2)" }}></div>
                <Image
                  src="/images/logos/illinois-solar-decathlon-logo.png"
                  alt="Illinois Solar Decathlon logo"
                  width={180}
                  height={70}
                  className="competition-logo"
                  style={{ 
                    objectFit: "contain",
                    filter: "grayscale(1) invert(1) brightness(2)",
                    mixBlendMode: "screen",
                    opacity: 0.9
                  }}
                />
              </div>
            </div>

            <div className="competition-panel competition-panel-alt">
              <p className="competition-eyebrow">Illinois Solar Decathlon</p>
              <h2 className="competition-title">Hands-on sustainable building at UIUC</h2>
              <p className="competition-body">
                Illinois Solar Decathlon empowers students to advance sustainable building through
                hands-on projects with real-world impact. Our homes serve as platforms for research
                and community outreach, educating future industry leaders and driving energy-efficient
                innovation.
              </p>
              <p className="competition-body">
                Through collaboration with industry experts, faculty, and local organizations, we push
                the boundaries of sustainable design and technology—while building homes that serve
                real communities across Illinois.
              </p>
            </div>
          </div>

          {/* Timeline extracted from the panel to stand on its own */}
          <div className="homes-timeline-section scroll-animate fade-up">
            <h2 className="homes-timeline-section-title">Our Previous Homes</h2>
            <p className="homes-timeline-section-subtitle">
              A legacy of award-winning, student-built sustainable housing
            </p>
            <div className="homes-timeline-centered">
              <div className="homes-timeline-line" />
                  <div className="homes-timeline-items">
                    <div className="homes-timeline-item scroll-animate slide-from-left">
                      <div className="homes-timeline-year">2007</div>
                      <div className="homes-timeline-card-wrapper">
                        <Link href="/projects/more" className="homes-timeline-card">
                          <div className="homes-timeline-image-wrapper">
                            <Image
                              src="/images/homes/element-house.jpg"
                              alt="Element House"
                              fill
                              className="homes-timeline-image"
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          </div>
                          <div className="homes-timeline-content">
                            <p className="homes-timeline-label">Element House</p>
                            <p className="homes-timeline-meta">Solar Decathlon Competition Home</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="homes-timeline-item scroll-animate slide-from-right">
                      <div className="homes-timeline-year">2009</div>
                      <div className="homes-timeline-card-wrapper">
                        <Link href="/projects/gable-home" className="homes-timeline-card">
                          <div className="homes-timeline-image-wrapper">
                            <Image
                              src="/images/homes/gable-home.jpg"
                              alt="Gable Home"
                              fill
                              className="homes-timeline-image"
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          </div>
                          <div className="homes-timeline-content">
                            <p className="homes-timeline-label">Gable Home</p>
                            <p className="homes-timeline-meta">Solar Decathlon Competition Home</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="homes-timeline-item scroll-animate slide-from-left">
                      <div className="homes-timeline-year">2011</div>
                      <div className="homes-timeline-card-wrapper">
                        <Link href="/projects/re-home" className="homes-timeline-card">
                          <div className="homes-timeline-image-wrapper">
                            <Image
                              src="/images/homes/re-home.jpg"
                              alt="Re Home"
                              fill
                              className="homes-timeline-image"
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          </div>
                          <div className="homes-timeline-content">
                            <p className="homes-timeline-label">Re Home</p>
                            <p className="homes-timeline-meta">Solar Decathlon Competition Home</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="homes-timeline-item scroll-animate slide-from-right">
                      <div className="homes-timeline-year">2021</div>
                      <div className="homes-timeline-card-wrapper">
                        <Link href="/projects/adapthaus" className="homes-timeline-card">
                          <div className="homes-timeline-image-wrapper">
                            <Image
                              src="/images/homes/adapthaus.jpg"
                              alt="ADAPTHAUS"
                              fill
                              className="homes-timeline-image"
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          </div>
                          <div className="homes-timeline-content">
                            <p className="homes-timeline-label">ADAPTHAUS</p>
                            <p className="homes-timeline-meta">Net-zero accessible prototype</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="homes-timeline-item scroll-animate slide-from-left">
                      <div className="homes-timeline-year">2023</div>
                      <div className="homes-timeline-card-wrapper">
                        <Link href="/projects/renu-house" className="homes-timeline-card">
                          <div className="homes-timeline-image-wrapper">
                            <Image
                              src="/images/homes/renu.jpg"
                              alt="RENU"
                              fill
                              className="homes-timeline-image"
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          </div>
                          <div className="homes-timeline-content">
                            <p className="homes-timeline-label">RENU</p>
                            <p className="homes-timeline-meta">Resilient electrified infill home</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="homes-timeline-item scroll-animate slide-from-right">
                      <div className="homes-timeline-year homes-timeline-year-active">2026</div>
                      <div className="homes-timeline-card-wrapper">
                        <Link href="/projects/beacon-house" className="homes-timeline-card">
                          <div className="homes-timeline-image-wrapper">
                            <Image
                              src="/images/homes/beacon.png"
                              alt="BEACON Home"
                              fill
                              className="homes-timeline-image"
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          </div>
                          <div className="homes-timeline-content">
                            <p className="homes-timeline-label">BEACON Home</p>
                            <p className="homes-timeline-meta">Community housing initiative</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </section>

        <section className="vision-section scroll-animate fade-up">
          <div className="vision-content">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-body">
              Illinois Solar Decathlon empowers students to advance sustainable building
              through hands-on projects with real-world impact. Our homes serve as
              platforms for research and community outreach, educating future industry
              leaders and driving energy-efficient innovation. Through collaboration with
              industry experts, faculty, and local organizations, we push the boundaries
              of sustainable design and technology.
            </p>
          </div>
          <div className="vision-carousel-wrap">
            <VisionCarousel />
          </div>
        </section>

        <section className="calendar-section-wrapper scroll-animate fade-up">
          <GoogleCalendar 
            calendarId={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID}
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
            showTitle={true}
          />
        </section>

        <footer
          className="social-footer scroll-animate fade-up"
          style={{
            background: "linear-gradient(90deg, #FF7518 0%, #FFAD42 100%)",
            color: "#fff",
          }}
        >
          <p className="social-footer-label" style={{ color: "#fff", fontWeight: "bold" }}>
            Connect with us!
          </p>
          <div className="social-link-row">
            <Link
              href="https://linktr.ee/illinoissolardecathlon"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              style={{
                background: "#fff3e6",
                color: "#ff7518",
                border: "1px solid #ffad42"
              }}
            >
              Linktree
            </Link>
            <Link
              href="https://www.linkedin.com/company/illinois-solar-decathlon/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              style={{
                background: "#fff3e6",
                color: "#ff7518",
                border: "1px solid #ffad42"
              }}
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/illinoissolardecathlon/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              style={{
                background: "#fff3e6",
                color: "#ff7518",
                border: "1px solid #ffad42"
              }}
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@illinoissolardecathlonteam3386"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              style={{
                background: "#fff3e6",
                color: "#ff7518",
                border: "1px solid #ffad42"
              }}
            >
              YouTube
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

