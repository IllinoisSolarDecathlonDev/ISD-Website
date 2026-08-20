"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ProjectImageCarouselProps = {
  images: string[];
  altPrefix?: string;
  className?: string;
};

export function ProjectImageCarousel({
  images,
  altPrefix = "Gallery",
  className = "",
}: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const slides = images.length ? images : ["/images/landing.jpg"];

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  if (!images.length) {
    return (
      <div className={`project-carousel project-carousel-placeholder ${className}`.trim()}>
        <div className="project-carousel-placeholder-inner">
          <span>Add images to carousel</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-carousel ${className}`.trim()}>
      <div className="project-carousel-viewport">
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`project-carousel-slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="project-carousel-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <div className="project-carousel-controls">
        <button
          type="button"
          className="project-carousel-btn"
          aria-label="Previous"
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          ←
        </button>
        <button
          type="button"
          className="project-carousel-btn"
          aria-label="Next"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        >
          →
        </button>
      </div>
      {slides.length > 1 && (
        <div className="project-carousel-dots" aria-hidden>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`project-carousel-dot ${i === index ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
