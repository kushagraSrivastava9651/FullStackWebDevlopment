import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const cards = [
    { icon: "🎯", title: "Our Vision",   desc: "To be a world-class institution fostering learners" },
    { icon: "🌱", title: "Our Mission",  desc: "Holistic education with values & excellence" },
    { icon: "🏅", title: "Our Values",   desc: "Integrity, Curiosity, and Resilience" },
    { icon: "📅", title: "History",      desc: "38 years of shaping 25,000+ alumni" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content-wrapper">
        
        {/* Left Column: Text Content */}
        <div className="about-text-side">
          <div className="about-badge">About Us</div>

          <h2 className="about-title">
            A Legacy of <span style={{color: "#c8983c"}}>Learning</span> & Excellence
          </h2>

          <p className="about-description">
            Founded in 1985, Vidya Mandir School has been a beacon of quality
            education. We nurture not just academic brilliance but the complete 
            human being — empathetic and resilient.
          </p>

          {expanded && (
            <p className="about-description extra-text">
              Our CBSE curriculum blends academics with sports and life skills, 
              consistently producing leaders who lead with integrity and purpose 
              in a globalized world.
            </p>
          )}

          <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less ↑" : "Read More ↓"}
          </button>
        </div>

        {/* Right Column: Grid of Cards */}
        <div className="about-cards-grid">
          {cards.map(({ icon, title, desc }, index) => (
            <div key={title} className="about-card">
              <div className="card-icon">{icon}</div>
              <div className="card-title">{title}</div>
              <div className="card-desc">{desc}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          background: #f5f8fb;
          background-image: radial-gradient(circle at 0% 0%, #ffffff 0%, transparent 50%);
          padding: 80px 5%;
          box-sizing: border-box;
          justify-content: center; /* Center content on desktop */
          align-items: center;
        }

        .about-content-wrapper {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-badge {
          display: inline-block;
          background: rgba(200,152,60,0.12);
          color: "#c8983c";
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .about-title {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #0b1a38;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .about-description {
          color: #5c6478;
          line-height: 1.7;
          font-size: 16px;
          max-width: 500px;
        }

        .read-more-btn {
          margin-top: 20px;
          background: none;
          border: none;
          color: #c8983c;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .about-card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e2e6ee;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }

        /* Desktop Masonry Effect */
        @media (min-width: 1024px) {
          .about-card:nth-child(even) {
            transform: translateY(30px);
          }
        }

        .card-icon { font-size: 28px; margin-bottom: 12px; }
        .card-title { font-weight: 700; color: #0b1a38; margin-bottom: 6px; }
        .card-desc { font-size: 13px; color: #5c6478; line-height: 1.5; }

        /* Mobile Adjustments */
        @media (max-width: 992px) {
          .about-content-wrapper {
            grid-template-columns: 1fr; /* Stack vertically */
            gap: 40px;
          }
          .about-section {
            justify-content: flex-start; /* Start from top on mobile */
            padding-top: 100px; /* Space for Navbar */
            height: auto !important; /* Allow section to expand */
          }
          .about-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 480px) {
          .about-cards-grid {
            grid-template-columns: 1fr; /* 1 card per row on small phones */
          }
          .about-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}