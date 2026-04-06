const achievements = [
  { icon: "🏆", num: "98%",    label: "Board Pass Rate",      desc: "Class X & XII — 2024",          color: "#fef9c3", text: "#713f12" },
  { icon: "🥇", num: "45+",    label: "Olympiad Medals",      desc: "National & International",       color: "#dcfce7", text: "#14532d" },
  { icon: "🎖️", num: "12",    label: "State Awards",          desc: "For academic excellence",        color: "#dbeafe", text: "#1e3a8a" },
  { icon: "⭐", num: "Top 10", label: "District Ranking",     desc: "Consistent for 8 years",         color: "#fdf4ff", text: "#581c87" },
  { icon: "📚", num: "500+",   label: "Scholarship Winners",  desc: "In the last 5 years",            color: "#fff7ed", text: "#7c2d12" },
  { icon: "🌍", num: "25k+",   label: "Alumni Worldwide",     desc: "Across 40+ countries",           color: "#fce7f3", text: "#831843" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        padding: "90px 5%",
        background: "#0b1a38",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      {[500, 750, 1000].map((r, i) => (
        <div key={r} style={{
          position: "absolute",
          top: "50%", right: "-20%",
          transform: "translateY(-50%)",
          width: r, height: r, borderRadius: "50%",
          border: `1px solid rgba(200,152,60,${0.05 - i * 0.01})`,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(200,152,60,0.18)",
            color: "#f5d98b", fontSize: 11,
            letterSpacing: 3, textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 50, marginBottom: 16,
          }}>
            Achievements
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
            color: "#fff", lineHeight: 1.2, margin: 0,
          }}>
            A Record That Speaks for Itself
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 15, marginTop: 12,
            maxWidth: 460, marginInline: "auto", lineHeight: 1.7,
          }}>
            Decades of consistent excellence across academics, sports, and culture.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 20,
        }}>
          {achievements.map((a) => (
            <div
              key={a.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200,152,60,0.15)",
                borderRadius: 18, padding: "30px 22px",
                textAlign: "center",
                transition: "transform 0.2s, background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 54, height: 54, borderRadius: "50%",
                background: a.color,
                display: "flex", alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px", fontSize: 24,
              }}>
                {a.icon}
              </div>

              {/* Number */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800, fontSize: "2rem",
                color: "#c8983c", marginBottom: 6,
              }}>
                {a.num}
              </div>

              {/* Label */}
              <div style={{
                fontSize: 13, fontWeight: 500,
                color: "#fff", marginBottom: 6,
              }}>
                {a.label}
              </div>

              {/* Desc */}
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                {a.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: 48, textAlign: "center",
          padding: "28px 32px",
          background: "rgba(200,152,60,0.08)",
          border: "1px solid rgba(200,152,60,0.2)",
          borderRadius: 16,
        }}>
          <p style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 14, lineHeight: 1.7, marginBottom: 18,
          }}>
            Our students have secured admissions in <strong style={{ color: "#f5d98b" }}>IITs, NITs, AIIMS, IIMs</strong> and top universities worldwide.
          </p>
          <a href="#admissions" style={{
            display: "inline-block",
            background: "#c8983c", color: "#fff",
            padding: "11px 30px", borderRadius: 50,
            fontSize: 14, fontWeight: 500,
            transition: "opacity 0.2s",
          }}>
            Be Part of This Legacy →
          </a>
        </div>

      </div>
    </section>
  );
}