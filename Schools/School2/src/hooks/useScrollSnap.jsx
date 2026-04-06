// src/hooks/useScrollSnap.js
import { useEffect } from "react";

export default function useScrollSnap() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".scroll-section"));
    const container = document.querySelector(".scroll-container") || window;

    const observer = new IntersectionObserver((entries) => {
      // 1) toggle visibility for all seen sections
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        } else {
          entry.target.classList.remove("section-visible");
        }
      });

      // 2) pick the most visible section and mark it active
      const best = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      sections.forEach((section) => section.classList.remove("section-active"));
      if (best) best.target.classList.add("section-active");
    }, {
      root: container === window ? null : container,
      threshold: [0.25, 0.5, 0.75, 0.9],
    });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}