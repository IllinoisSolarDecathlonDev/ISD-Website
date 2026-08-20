"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Fall design kickoff & onboarding",
    label: "Team Update",
    date: "September",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "RENU-House framing milestone",
    label: "Build Progress",
    date: "October",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a53456b23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Energy modeling workshop with industry partners",
    label: "Workshop",
    date: "October",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "ADAPTHAUS open house recap",
    label: "Event",
    date: "November",
    image:
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "New member info session",
    label: "Recruiting",
    date: "January",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Systems integration sprint",
    label: "Build Progress",
    date: "February",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Community partner review for Elevate Chicago",
    label: "Community",
    date: "March",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Construction documentation freeze",
    label: "Milestone",
    date: "April",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Competition travel & logistics",
    label: "Competition",
    date: "May",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    title: "End-of-year open house",
    label: "Event",
    date: "May",
    image:
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80",
  },
];

const AUTOPLAY_INTERVAL_MS = 6500;

export function AnnouncementsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <div className="carousel-root">
      <div className="carousel-viewport" aria-label="Announcements slideshow">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="carousel-image"
              priority={i === 0}
            />
          </div>
        ))}

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-button"
            aria-label="Previous slide"
            onClick={() =>
              setIndex((prev) => (prev - 1 + slides.length) % slides.length)
            }
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-button"
            aria-label="Next slide"
            onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          >
            →
          </button>
        </div>

        <div className="carousel-overlay">
          <div className="carousel-tag">
            {current.label} · {current.date}
          </div>
          <h3 className="carousel-title">{current.title}</h3>
          <p className="carousel-meta">
            Slide {index + 1} of {slides.length}
          </p>
          <div className="carousel-dots" aria-hidden="true">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className={`carousel-dot ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


