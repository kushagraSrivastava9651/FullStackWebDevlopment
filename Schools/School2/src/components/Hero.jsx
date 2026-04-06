export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0b1a38 0%,#1a2e5a 50%,#0b1a38 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "80px 5% 60px"
    }}>

      {/* Background Rings */}
      {[400, 600, 800, 1000].map((r, i) => (
        <div key={r} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: r, height: r, borderRadius: "50%",
          border: `1px solid rgba(200,152,60,${0.06 - i * 0.01})`,
          pointerEvents: "none"
        }} />
      ))}

      <div style={{ textAlign: "center", maxWidth: 780, position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{
          display: "inline-block",
          background: "rgba(200,152,60,0.15)",
          border: "1px solid rgba(200,152,60,0.35)",
          color: "#f5d98b", fontSize: 12, letterSpacing: 3,
          textTransform: "uppercase", padding: "6px 20px",
          borderRadius: 50, marginBottom: 28
        }}>
          Est. 1985 · CBSE Affiliated
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Playfair Display',serif", fontWeight: 800,
          fontSize: "clamp(2.4rem,6vw,4.2rem)",
          color: "#fff", lineHeight: 1.1, marginBottom: 20
        }}>
          Shaping<br />
          <span style={{ color: "#c8983c" }}>Future Leaders</span>
        </h1>

        {/* Subtext */}
        <p style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "clamp(1rem,2vw,1.15rem)",
          lineHeight: 1.8, maxWidth: 560, margin: "0 auto 36px"
        }}>
          Nurturing young minds with academic excellence, holistic values, and
          21st-century skills. Where every child discovers their potential.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#admissions" style={{
            background: "#c8983c", color: "#fff",
            padding: "14px 32px", borderRadius: 50,
            fontWeight: 500, fontSize: 15, display: "inline-block"
          }}>
            Apply Now →
          </a>
          <a href="#contact" style={{
            background: "transparent", color: "#fff",
            padding: "14px 32px", borderRadius: 50, fontWeight: 400,
            fontSize: 15, border: "1px solid rgba(255,255,255,0.3)", display: "inline-block"
          }}>
            Book a Visit
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 40, marginTop: 56, flexWrap: "wrap"
        }}>
          {[
            ["2500+", "Students"],
            ["150+",  "Faculty"],
            ["38",    "Years of Excellence"],
            ["98%",   "Board Results"],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 800, fontSize: "2rem", color: "#c8983c"
              }}>
                {n}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 1, marginTop: 2 }}>
                {l}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}