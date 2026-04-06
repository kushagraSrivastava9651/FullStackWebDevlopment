const staff = [
  { name: "Dr. Meena Sharma",  role: "Principal",            exp: "26 yrs", dept: "Administration", icon: "👩‍💼", accent: "#dbeafe", text: "#1e3a8a" },
  { name: "Mr. Rajesh Kumar",  role: "Head of Sciences",     exp: "18 yrs", dept: "Science Dept.",   icon: "🔬", accent: "#dcfce7", text: "#14532d" },
  { name: "Ms. Priya Nair",    role: "Head of Mathematics",  exp: "15 yrs", dept: "Maths Dept.",     icon: "📐", accent: "#fff7ed", text: "#7c2d12" },
  { name: "Mr. Arjun Verma",   role: "Sports Director",      exp: "12 yrs", dept: "Sports Wing",     icon: "🏃", accent: "#fdf4ff", text: "#581c87" },
  { name: "Ms. Kavita Reddy",  role: "Head of Arts",         exp: "14 yrs", dept: "Arts Dept.",      icon: "🎨", accent: "#fef2f2", text: "#7f1d1d" },
  { name: "Mr. Suresh Iyer",   role: "IT Coordinator",       exp: "10 yrs", dept: "Technology",      icon: "💻", accent: "#f0fdf4", text: "#052e16" },
];

export default function Faculty() {
  return (
    <section
      id="faculty"
      style={{
        padding: "90px 5%",
        background: "#fdf9f0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(200,152,60,0.1)",
            color: "#c8983c", fontSize: 11,
            letterSpacing: 3, textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 50, marginBottom: 16,
          }}>
            Our Faculty
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
            color: "#0b1a38", lineHeight: 1.2, margin: 0,
          }}>
            The Mentors Behind Every Success
          </h2>
          <p style={{
            color: "#6b7280", fontSize: 15, marginTop: 12,
            maxWidth: 480, marginInline: "auto", lineHeight: 1.7,
          }}>
            Experienced, passionate educators committed to bringing out the best in every student.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20,
        }}>
          {staff.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#fff",
                border: "1px solid #e2e6ee",
                borderRadius: 18,
                padding: "28px 20px",
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(11,26,56,0.10)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Avatar */}
              <div style={{
                width: 68, height: 68, borderRadius: "50%",
                background: p.accent,
                display: "flex", alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: 30,
                border: `2px solid ${p.accent}`,
              }}>
                {p.icon}
              </div>

              {/* Name */}
              <div style={{
                fontWeight: 600, fontSize: 14,
                color: "#0b1a38", marginBottom: 4,
              }}>
                {p.name}
              </div>

              {/* Role */}
              <div style={{ fontSize: 12, color: "#c8983c", fontWeight: 500, marginBottom: 10 }}>
                {p.role}
              </div>

              {/* Dept badge */}
              <div style={{
                display: "inline-block",
                background: p.accent, color: p.text,
                fontSize: 10, padding: "3px 12px",
                borderRadius: 50, marginBottom: 8, fontWeight: 500,
              }}>
                {p.dept}
              </div>

              {/* Exp */}
              <div style={{
                fontSize: 11, color: "#9ca3af",
                borderTop: "1px solid #f3f4f6",
                paddingTop: 10, marginTop: 4,
              }}>
                🕐 {p.exp} experience
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}