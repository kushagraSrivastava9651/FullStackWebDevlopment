import { useState } from "react";

export default function Facilities() {
  const facilityList = [
    { 
      title: "Smart Classrooms", 
      icon: "💻", 
      desc: "Interactive boards and high-speed internet for modern learning.",
      color: "#e3f2fd"
    },
    { 
      title: "Science Labs", 
      icon: "🧪", 
      desc: "Advanced Physics, Chemistry, and Biology labs for practical excellence.",
      color: "#f1f8e9" 
    },
    { 
      title: "Digital Library", 
      icon: "📚", 
      desc: "Over 15,000+ books and access to international journals.",
      color: "#fff3e0" 
    },
    { 
      title: "Sports Complex", 
      icon: "🏀", 
      desc: "Indoor badminton, basketball courts, and a professional football turf.",
      color: "#f3e5f5" 
    },
    { 
      title: "Art & Music Studio", 
      icon: "🎨", 
      desc: "Dedicated spaces for creativity, classical dance, and instruments.",
      color: "#fce4ec" 
    },
    { 
      title: "Transport", 
      icon: "🚌", 
      desc: "GPS-enabled bus fleet ensuring safe commute for every student.",
      color: "#e0f2f1" 
    },
  ];

  return (
    <section id="facilities" className="facilities-section">
      <div className="facilities-container">
        
        {/* Header Section */}
        <div className="facilities-header">
          <div className="facilities-badge">Infrastructure</div>
          <h2 className="facilities-title">
            World-Class <span style={{color: "#c8983c"}}>Facilities</span>
          </h2>
          <p className="facilities-subtitle">
            We provide a safe, modern, and inspiring environment equipped with 
            cutting-edge technology to support every child's growth.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilityList.map((item, index) => (
            <div key={index} className="facility-card">
              <div className="facility-icon-wrapper" style={{ background: item.color }}>
                <span className="facility-icon">{item.icon}</span>
              </div>
              <h3 className="facility-card-title">{item.title}</h3>
              <p className="facility-card-desc">{item.desc}</p>
              <div className="facility-card-border"></div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .facilities-section {
          background: #ffffff;
          padding: 100px 5% 60px;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .facilities-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .facilities-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .facilities-badge {
          display: inline-block;
          background: rgba(200, 152, 60, 0.1);
          color: #c8983c;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 8px 20px;
          border-radius: 30px;
          margin-bottom: 15px;
        }

        .facilities-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #0b1a38;
          margin-bottom: 15px;
          font-weight: 800;
        }

        .facilities-subtitle {
          color: #5c6478;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
          font-size: 16px;
        }

        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          width: 100%;
        }

        .facility-card {
          background: #fff;
          border: 1px solid #eee;
          padding: 35px 25px;
          border-radius: 20px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .facility-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(11, 26, 56, 0.08);
          border-color: transparent;
        }

        .facility-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .facility-icon {
          font-size: 30px;
        }

        .facility-card:hover .facility-icon-wrapper {
          transform: scale(1.1) rotate(-5deg);
        }

        .facility-card-title {
          font-size: 19px;
          font-weight: 700;
          color: #0b1a38;
          margin-bottom: 12px;
        }

        .facility-card-desc {
          font-size: 14px;
          color: #5c6478;
          line-height: 1.6;
          margin: 0;
        }

        /* Animated bottom border on hover */
        .facility-card-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 4px;
          background: #c8983c;
          transition: width 0.4s ease;
        }

        .facility-card:hover .facility-card-border {
          width: 100%;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .facilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .facilities-section {
            padding-top: 80px;
            height: auto !important; /* Allow scroll-snap proximity to work */
          }
          .facilities-header {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 600px) {
          .facilities-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .facility-card {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
}