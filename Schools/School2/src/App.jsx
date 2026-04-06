import { useState, useEffect } from "react";
import Navbar       from "./components/Navbar";
import DotNav       from "./components/DotNav";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Academics    from "./components/Academics";
import Faculty      from "./components/Faculty";
import Achievements from "./components/Achievements";
import useScrollSnap from "./hooks/useScrollSnap";
import "./index.css";
import Facilities from "./components/Facilities";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  useScrollSnap();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <DotNav />
      {showSplash && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 20% 20%, #c8983c 0%, #0b1a38 48%, #081428 100%)",
          color: "#fff",
          flexDirection: "column",
          gap: 12,
          textAlign: "center",
          transition: "opacity 0.5s ease",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <div style={{ fontSize: 38, fontWeight: 800 }}>
            🎓 Vidya Mandir School
          </div>
          <div style={{ fontSize: 14, letterSpacing: 1.8, textTransform: "uppercase" }}>
            Welcome to our new academic experience
          </div>
          <div style={{ width: 80, height: 4, background: "#fff", borderRadius: 50, marginTop: 8 }} />
        </div>
      )}
      <div className="scroll-container">
        {[
          ["hero",         Hero],
          ["about",        About],
          ["academics",    Academics],
          ["faculty",      Faculty],
          ["achievements", Achievements],
          ["facilities",Facilities],
          // ... rest of sections
        ].map(([id, Component]) => (
          <div key={id} id={id} className="scroll-section">
            <Component />
          </div>
        ))}
      </div>
    </>
  );
}