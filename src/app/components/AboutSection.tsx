"use client";

import { Bell, BarChart2, MessageCircle } from "lucide-react";

const FEATURES = [
  {
    icon: Bell,
    title: "Prediction Updates",
    description: "Stay informed with the latest color prediction updates shared through our active Telegram community channel.",
    color: "#00D4FF",
    glow: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.2)",
    gradFrom: "#00D4FF",
    gradTo: "#9D4EDD",
  },
  {
    icon: BarChart2,
    title: "Previous Results",
    description: "View screenshots and records of previous round results posted by our community for informational purposes.",
    color: "#9D4EDD",
    glow: "rgba(157,78,221,0.12)",
    border: "rgba(157,78,221,0.2)",
    gradFrom: "#9D4EDD",
    gradTo: "#00FF88",
  },
  {
    icon: MessageCircle,
    title: "Telegram Community",
    description: "Join our growing Telegram community to connect with other members and receive updates.",
    color: "#00FF88",
    glow: "rgba(0,255,136,0.1)",
    border: "rgba(0,255,136,0.2)",
    gradFrom: "#00FF88",
    gradTo: "#00D4FF",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-alt" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-10%", top: "20%", width: 400, height: 400, borderRadius: "50%", background: "rgba(0,212,255,0.05)", filter: "blur(80px)", pointerEvents: "none" }} />
      
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 16px", borderRadius: 999,
            background: "rgba(157,78,221,0.08)", border: "1px solid rgba(157,78,221,0.25)",
            marginBottom: 16
          }}>
            <span style={{ color: "#9D4EDD", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>About Us</span>
          </div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Welcome to <span className="gradient-text">Group Prediction</span>
          </h2>
          <p style={{ color: "#8892B0", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
            Guru Prediction is a community focused on sharing color trading prediction updates, result screenshots and informational insights. Stay connected with our Telegram channel for the latest updates.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="about-grid">
          {FEATURES.map(({ icon: Icon, title, description, color, glow, border, gradFrom, gradTo }) => (
            <div key={title} className="glass-card hover-card" style={{ borderRadius: 20, padding: 32, position: "relative", overflow: "hidden" }}>
              {/* Background glow blob */}
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: glow, filter: "blur(30px)", pointerEvents: "none" }} />

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: glow, border: `1px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, position: "relative"
              }}>
                <Icon size={26} color={color} />
              </div>

              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem", marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "#8892B0", fontSize: "0.88rem", lineHeight: 1.7 }}>{description}</p>

              {/* Bottom gradient line */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${gradFrom}, ${gradTo}, transparent)`,
                opacity: 0.5
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
