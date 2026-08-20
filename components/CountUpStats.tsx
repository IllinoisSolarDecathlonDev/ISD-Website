"use client";

import { useEffect, useState, useRef } from "react";

const DURATION_MS = 2000;
const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 3);

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export function CountUpStats({ stats }: { stats: Stat[] }) {
  const [displayValues, setDisplayValues] = useState<number[]>(
    stats.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = stats.map((s) => s.value);
    const startTimes = targets.map(() => Date.now());

    const tick = () => {
      const now = Date.now();
      setDisplayValues(
        targets.map((target, i) => {
          const elapsed = now - startTimes[i];
          const progress = Math.min(elapsed / DURATION_MS, 1);
          const eased = EASE_OUT(progress);
          return Math.round(eased * target);
        })
      );
      if (targets.some((_, i) => Date.now() - startTimes[i] < DURATION_MS)) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, [hasAnimated, stats]);

  return (
    <div className="count-up-stats" ref={ref}>
      <h2 className="count-up-title">By the numbers</h2>
      <div className="count-up-grid">
        {stats.map((stat, i) => (
          <div key={stat.label} className="count-up-item">
            <div className="count-up-value">
              {displayValues[i]}
              {stat.suffix}
            </div>
            <div className="count-up-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
