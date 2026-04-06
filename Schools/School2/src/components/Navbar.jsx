import { useState, useEffect } from "react";

const SCHOOL = "Vidya Mandir School";

const NAV_LINKS = [
  { label: "About",        id: "about" },
  { label: "Academics",    id: "academics" },
  { label: "Faculty",      id: "faculty" },
  { label: "Achievements", id: "achievements" },
  { label: "Facilities",   id: "facilities" },
  { label: "Gallery",      id: "gallery" },
  { label: "Events",       id: "events" },
  { label: "Admissions",   id: "admissions" },
  { label: "Contact",      id: "contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [open,       setOpen]       = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeId,   setActiveId]   = useState("hero");

  // ── Scroll detection: transparent → solid ──────────────────────────
  useEffect(() => {
    const container = document.querySelector(".scroll-container") || window;
    const onScroll  = () => {
      const top = container === window
        ? window.scrollY
        : container.scrollTop;
      setScrolled(top > 40);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section tracker ─────────────────────────────────────────
  useEffect(() => {
    const allIds  = ["hero", ...NAV_LINKS.map(l => l.id)];
    const container = document.querySelector(".scroll-container") || window;

    const onScroll = () => {
      const scrollTop = container === window
        ? window.scrollY
        : container.scrollTop;
      const viewH = window.innerHeight;

      for (let i = allIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allIds[i]);
        if (el && el.offsetTop <= scrollTop + viewH / 2) {
          setActiveId(allIds[i]);
          break;
        }
      }
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on resize ────────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Styles ─────────────────────────────────────────────────────────
  const navStyle = {
    position:       "fixed",
    top:            0,
    left:           0,
    right:          0,
    zIndex:         999,
    height:         64,
    padding:        "0 5%",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "space-between",
    transition:     "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
    background:     scrolled ? "rgba(11,26,56,0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)"           : "none",
    borderBottom:   scrolled ? "1px solid rgba(200,152,60,0.18)" : "1px solid transparent",
  };

  const logoStyle = {
    fontFamily:  "'Playfair Display', serif",
    fontWeight:  800,
    fontSize:    20,
    color:       "#fff",
    letterSpacing: 0.4,
    cursor:      "pointer",
    userSelect:  "none",
    lineHeight:  1.2,
  };

  const subtagStyle = {
    display:       "block",
    fontSize:      9,
    fontWeight:    300,
    color:         "#f5d98b",
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginTop:     2,
  };

  return (
    <>
      {/* ── Main Nav Bar ─────────────────────────────────────────────── */}
      <nav style={navStyle}>

        {/* Logo */}
        <div style={logoStyle} onClick={() => scrollTo("hero")}>
          🎓 {SCHOOL}
          <span style={subtagStyle}>Excellence · Integrity · Innovation</span>
        </div>

        {/* Desktop Links */}
        <ul style={{
          display:    "flex",
          alignItems: "center",
          gap:        4,
          listStyle:  "none",
          margin:     0,
          padding:    0,
        }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  style={{
                    background:    "none",
                    border:        "none",
                    cursor:        "pointer",
                    fontFamily:    "'DM Sans', sans-serif",
                    fontSize:      13,
                    fontWeight:    isActive ? 500 : 400,
                    color:         isActive ? "#f5d98b" : "rgba(255,255,255,0.75)",
                    padding:       "6px 11px",
                    borderRadius:  50,
                    letterSpacing: 0.3,
                    transition:    "color 0.2s, background 0.2s",
                    position:      "relative",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                  }}
                >
                  {label}
                  {/* Active underline dot */}
                  {isActive && (
                    <span style={{
                      position:    "absolute",
                      bottom:      2,
                      left:        "50%",
                      transform:   "translateX(-50%)",
                      width:       4,
                      height:      4,
                      borderRadius: "50%",
                      background:  "#c8983c",
                      display:     "block",
                    }} />
                  )}
                </button>
              </li>
            );
          })}

          {/* CTA Button */}
          <li style={{ marginLeft: 8 }}>
            <button
              onClick={() => scrollTo("admissions")}
              style={{
                background:    "#c8983c",
                color:         "#fff",
                border:        "none",
                padding:       "9px 20px",
                borderRadius:  50,
                fontSize:      13,
                fontWeight:    500,
                cursor:        "pointer",
                fontFamily:    "'DM Sans', sans-serif",
                letterSpacing: 0.3,
                transition:    "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = "#b8872c";
                e.currentTarget.style.transform   = "scale(1.04)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = "#c8983c";
                e.currentTarget.style.transform   = "scale(1)";
              }}
            >
              Apply Now →
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
          style={{
            display:        "none",
            flexDirection:  "column",
            justifyContent: "center",
            gap:            5,
            cursor:         "pointer",
            background:     "none",
            border:         "none",
            padding:        6,
            borderRadius:   8,
          }}
        >
          {/* Animated bars */}
          <span style={{
            width:        24,
            height:       2,
            background:   "#fff",
            borderRadius: 2,
            display:      "block",
            transition:   "transform 0.3s, opacity 0.3s",
            transform:    open ? "translateY(7px) rotate(45deg)" : "none",
          }} />
          <span style={{
            width:        24,
            height:       2,
            background:   "#fff",
            borderRadius: 2,
            display:      "block",
            transition:   "opacity 0.3s",
            opacity:      open ? 0 : 1,
          }} />
          <span style={{
            width:        24,
            height:       2,
            background:   "#fff",
            borderRadius: 2,
            display:      "block",
            transition:   "transform 0.3s, opacity 0.3s",
            transform:    open ? "translateY(-7px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* ── Mobile Drawer ─────────────────────────────────────────────── */}
      <div style={{
        position:    "fixed",
        top:         64,
        left:        0,
        right:       0,
        zIndex:      998,
        background:  "rgba(9,20,46,0.98)",
        backdropFilter: "blur(12px)",
        padding:     open ? "20px 6% 28px" : "0 6%",
        maxHeight:   open ? "100vh" : 0,
        overflow:    "hidden",
        transition:  "max-height 0.4s ease, padding 0.3s ease",
        borderBottom: open ? "1px solid rgba(200,152,60,0.15)" : "none",
      }}>

        {/* Mobile Links */}
        {NAV_LINKS.map(({ label, id }, i) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              onClick={() => { scrollTo(id); setOpen(false); }}
              style={{
                display:       "flex",
                alignItems:    "center",
                justifyContent:"space-between",
                width:         "100%",
                background:    "none",
                border:        "none",
                borderBottom:  "1px solid rgba(255,255,255,0.07)",
                padding:       "14px 0",
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      15,
                fontWeight:    isActive ? 500 : 400,
                color:         isActive ? "#f5d98b" : "rgba(255,255,255,0.8)",
                cursor:        "pointer",
                textAlign:     "left",
                letterSpacing: 0.2,
                opacity:       open ? 1 : 0,
                transform:     open ? "translateX(0)" : "translateX(-12px)",
                transition:    `opacity 0.3s ease ${i * 0.04}s, transform 0.3s ease ${i * 0.04}s`,
              }}
            >
              {label}
              {isActive
                ? <span style={{ color: "#c8983c", fontSize: 16 }}>●</span>
                : <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>›</span>
              }
            </button>
          );
        })}

        {/* Mobile CTA */}
        <button
          onClick={() => { scrollTo("admissions"); setOpen(false); }}
          style={{
            display:      "block",
            width:        "100%",
            marginTop:    20,
            background:   "#c8983c",
            color:        "#fff",
            border:       "none",
            padding:      "13px",
            borderRadius: 50,
            fontFamily:   "'DM Sans', sans-serif",
            fontWeight:   500,
            fontSize:     15,
            cursor:       "pointer",
            letterSpacing: 0.3,
            opacity:      open ? 1 : 0,
            transition:   `opacity 0.3s ease ${NAV_LINKS.length * 0.04 + 0.05}s`,
          }}
        >
          Apply Now →
        </button>
      </div>

      {/* ── Responsive CSS ─────────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }

        @media (max-width: 400px) {
          .navbar-logo-text {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  );
}