// src/components/DotNav.jsx
import { useState, useEffect } from "react";

const sectionIds = [
  "hero","about","academics","faculty","achievements",
  "facilities","gallery","events","admissions","testimonials","contact"
];

export default function DotNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const sections  = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (!container || sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry) {
        setActive(sectionIds.indexOf(activeEntry.target.id));
      }
    }, {
      root: container,
      threshold: [0.45, 0.55, 0.7],
    });

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      position: "fixed", right: 20, top: "50%",
      transform: "translateY(-50%)",
      display: "flex", flexDirection: "column",
      gap: 10, zIndex: 999,
    }}>
      {sectionIds.map((id, i) => (
        <button
          key={id}
          onClick={() => goTo(id)}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
          style={{
            width:  i === active ? 10 : 8,
            height: i === active ? 10 : 8,
            borderRadius: "50%",
            background: i === active ? "#c8983c" : "rgba(11,26,56,0.25)",
            border: i === active ? "2px solid #c8983c" : "2px solid rgba(11,26,56,0.15)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}