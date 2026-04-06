import { useState } from "react";

const tabs = [
  {
    label: "Classes",
    icon: "📖",
    items: [
      { title: "Nursery – UKG", desc: "Play-based early childhood foundation." },
      { title: "Class I – V", desc: "Primary years emphasizing core literacy." },
      { title: "Class VI – VIII", desc: "Middle school exploration and logic." },
      { title: "Class IX – X", desc: "Secondary CBSE Board preparation." },
      { title: "Class XI – XII", desc: "Senior Science, Commerce & Arts." },
    ],
  },
  {
    label: "Curriculum",
    icon: "📋",
    items: [
      { title: "CBSE Affiliated", desc: "Globally recognized foundation." },
      { title: "NEP 2020", desc: "Future-ready pedagogical framework." },
      { title: "Experiential", desc: "Hands-on, project-based learning." },
      { title: "Competency", desc: "Skills-first evaluation approach." },
      { title: "Bilingual", desc: "English and Hindi instruction." },
    ],
  },
  {
    label: "Programs",
    icon: "🚀",
    items: [
      { title: "STEM Excellence", desc: "Advanced science and tech track." },
      { title: "Digital Literacy", desc: "Coding and AI fluency." },
      { title: "Olympiad", desc: "Training for competitive exams." },
      { title: "Arts & Culture", desc: "Music, dance, and visual arts." },
      { title: "Sports Academy", desc: "Professional sports coaching." },
      { title: "Leadership", desc: "Student council and life skills." },
    ],
  },
];

export default function Academics() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="academics"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 5%",
        background: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div style={{ 
        width: "100%", 
        maxWidth: 1200, 
        maxHeight: "95vh", 
        overflowY: "auto", // Safety scroll for small mobile screens
        padding: "10px"
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(20px, 4vh, 40px)" }}>
          <span style={{
            display: "inline-block", background: "rgba(200,152,60,0.12)",
            color: "#c8983c", fontSize: 10, letterSpacing: 2,
            textTransform: "uppercase", padding: "4px 12px", borderRadius: 50, marginBottom: 8
          }}>
            Academics
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 800,
            fontSize: "clamp(1.5rem, 4vw, 2.8rem)", color: "#0b1a38", lineHeight: 1.1, margin: 0
          }}>
            A World-Class <span style={{color: "#c8983c"}}>Learning</span> Framework
          </h2>
        </div>

        {/* Tabs - Responsive Wrap */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "8px", 
          marginBottom: "clamp(20px, 4vh, 40px)",
          flexWrap: "wrap" 
        }}>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 18px", borderRadius: 50,
                border: "1.5px solid", borderColor: i === active ? "#c8983c" : "#e2e6ee",
                background: i === active ? "#c8983c" : "transparent",
                color: i === active ? "#fff" : "#5c6478",
                fontWeight: 600, fontSize: "clamp(12px, 2vw, 14px)", cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {/* Cards Grid - Responsive Columns */}
        <div style={{
          display: "grid",
          // Uses 3 columns on desktop, 1 on mobile automatically
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}>
          {tabs[active].items.map((item, i) => (
            <div
              key={item.title}
              style={{
                background: "#fdfbfa",
                border: "1px solid #eee6d8",
                borderRadius: 12,
                padding: "16px 20px",
                borderLeft: "4px solid #c8983c",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{
                fontWeight: 700, fontSize: "15px", color: "#0b1a38", marginBottom: 4
              }}>
                {item.title}
              </div>
              <div style={{ fontSize: "12.5px", color: "#5c6478", lineHeight: 1.4 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Inline Mobile Style Fix */}
      <style>{`
        @media (max-width: 600px) {
          #academics {
            height: auto; 
            min-height: 100vh;
            padding: 60px 5%;
          }
        }
      `}</style>
    </section>
  );
}