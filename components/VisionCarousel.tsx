"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Add your carousel images to: public/images/vision-carousel/
 * Name them however you like and add the filenames to the array below.
 * Example: 1.jpg, 2.jpg, 3.jpg ... or team-build.jpg, solar-house.jpg, etc.
 */
const VISION_IMAGES = [
  "/images/vision-carousel/beacon-start.png",
  "/images/vision-carousel/gabcarous.png",
  "/images/vision-carousel/recarous.png",
  "/images/vision-carousel/gabe.png",
  "/images/vision-carousel/idealsein.png",
  "/images/vision-carousel/idealsout.png",
  "/images/vision-carousel/idealsatriu.png",
  "/images/vision-carousel/gabeone.png",
];

const AUTOPLAY_MS = 5000;

export function VisionCarousel() {
  const [index, setIndex] = useState(0);
  const slides = VISION_IMAGES.length ? VISION_IMAGES : ["/images/landing.jpg"];

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="vision-carousel">
      <div className="vision-carousel-viewport">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`vision-carousel-slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`Vision ${i + 1}`}
              fill
              className="vision-carousel-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <div className="vision-carousel-controls">
        <button
          type="button"
          className="vision-carousel-btn"
          aria-label="Previous"
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          ←
        </button>
        <button
          type="button"
          className="vision-carousel-btn"
          aria-label="Next"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        >
          →
        </button>
      </div>
      {slides.length > 1 && (
        <div className="vision-carousel-dots" aria-hidden>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`vision-carousel-dot ${i === index ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
