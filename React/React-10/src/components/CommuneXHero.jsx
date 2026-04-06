import { useState } from "react";

const NAV_LINKS = ["About", "Services", "For Communities", "For Residents", "FAQ", "Contact"];

const STATS = [
  { value: "4+", label: "Communities" },
  { value: "4.5/5", label: "Avg. NPS" },
  { value: "1000+", label: "Customers" },
];

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    alt: "Grocery basket",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Car wash",
  },
  {
    src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80",
    alt: "Laundry machines",
    grayscale: true,
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Beauty salon",
  },
];

export default function CommuneXHero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "#F8FAFC",
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap');

        * { box-sizing: border-box; }

        .btn-primary {
          background: #0F172A;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.22s cubic-bezier(.4,0,.2,1);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: #1e293b;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(15,23,42,0.18);
        }

        .btn-secondary {
          background: #fff;
          color: #0F172A;
          border: 1.5px solid #E2E8F0;
          border-radius: 14px;
          padding: 13px 28px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(.4,0,.2,1);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        .btn-secondary:hover {
          border-color: #94a3b8;
          background: #f1f5f9;
          transform: translateY(-1px);
        }

        .img-card {
          overflow: hidden;
          border-radius: 18px;
          position: relative;
          box-shadow: 0 4px 16px rgba(15,23,42,0.09);
        }
        .img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(.4,0,.2,1);
          display: block;
        }
        .img-card:hover img {
          transform: scale(1.05);
        }

        .stat-card {
          background: #fff;
          border: 1.5px solid #E2E8F0;
          border-radius: 18px;
          padding: 20px 24px;
          transition: box-shadow 0.2s;
        }
        .stat-card:hover {
          box-shadow: 0 6px 24px rgba(15,23,42,0.08);
        }

        .nav-link {
          color: #475569;
          font-size: 14.5px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.18s;
          cursor: pointer;
        }
        .nav-link:hover { color: #0F172A; }

        .floating-card {
          position: absolute;
          bottom: -18px;
          right: -10px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 12px 48px rgba(15,23,42,0.14);
          padding: 18px 22px;
          width: 270px;
          border: 1px solid #f1f5f9;
          animation: floatUp 0.8s cubic-bezier(.4,0,.2,1) both;
          animation-delay: 0.5s;
          opacity: 0;
        }

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-text {
          animation: fadeInLeft 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        .hero-right {
          animation: fadeInRight 0.7s cubic-bezier(.4,0,.2,1) both;
          animation-delay: 0.15s;
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #E8EEF6;
          border: 1px solid #dce6f5;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #334155;
          margin-bottom: 28px;
        }

        .partner-btn {
          background: #0F172A;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 11px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .partner-btn:hover {
          background: #1e293b;
          box-shadow: 0 4px 16px rgba(15,23,42,0.18);
        }

        @media (max-width: 1024px) {
          .hero-grid { flex-direction: column !important; }
          .hero-left { max-width: 100% !important; }
          .hero-right { margin-top: 48px; }
          .buttons-row { flex-wrap: wrap; }
          .floating-card { right: 0; bottom: -10px; width: 240px; }
        }

        @media (max-width: 640px) {
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
          .stats-row { flex-direction: column; gap: 12px; }
          .floating-card { width: 200px; padding: 14px 16px; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header
        style={{
          background: "rgba(248,250,252,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #E2E8F0",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <span
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              flexShrink: 0,
            }}
          >
            CommuneX
          </span>

          {/* Nav */}
          <nav
            className="nav-links"
            style={{ display: "flex", gap: 32, alignItems: "center" }}
          >
            {NAV_LINKS.map((l) => (
              <a key={l} className="nav-link">
                {l}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button className="partner-btn" style={{ flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Partner with us
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <main
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 32px 100px",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 64,
          }}
        >
          {/* LEFT */}
          <div
            className="hero-text hero-left"
            style={{ flex: "1 1 440px", maxWidth: 560 }}
          >
            {/* Badge */}
            <div className="badge-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              Inside your community
            </div>

            {/* Heading */}
            <h1
              style={{
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.08,
                color: "#0F172A",
                letterSpacing: "-0.035em",
                margin: "0 0 24px",
              }}
            >
              Your community's essential services, unified.
            </h1>

            {/* Subtext */}
            <p
              style={{
                color: "#64748B",
                fontSize: 17,
                lineHeight: 1.65,
                margin: "0 0 40px",
                maxWidth: 490,
                fontWeight: 400,
              }}
            >
              CommuneX is a{" "}
              <strong style={{ color: "#334155", fontWeight: 700 }}>
                tech-first house of brands
              </strong>{" "}
              providing daily essentials, salon &amp; spa, laundry, and car
              care— right where you live.
            </p>

            {/* Buttons */}
            <div
              className="buttons-row"
              style={{ display: "flex", gap: 14, marginBottom: 52 }}
            >
              <button className="btn-primary">
                Explore services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-secondary">Get a proposal</button>
            </div>

            {/* Stats */}
            <div
              className="stats-row"
              style={{ display: "flex", gap: 14 }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="stat-card" style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 26,
                      color: "#0F172A",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#94A3B8",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="hero-right"
            style={{
              flex: "1 1 480px",
              position: "relative",
              paddingBottom: 28,
            }}
          >
            <div
              style={{
                background: "#EEF2F8",
                borderRadius: 28,
                padding: 14,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "220px 220px",
                gap: 12,
              }}
            >
              {IMAGES.map((img, i) => (
                <div key={i} className="img-card">
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={img.grayscale ? { filter: "grayscale(100%)" } : {}}
                  />
                </div>
              ))}
            </div>

            {/* Floating Card */}
            <div className="floating-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    background: "#DCFCE7",
                    borderRadius: "50%",
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#0F172A",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Everyday Essentials, Simplified
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#64748B",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Groceries, cleaning, and more— delivered seamlessly within your
                community.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
