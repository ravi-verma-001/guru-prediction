"use client";

import { Bell, Lightbulb, FileText, Users } from "lucide-react";
import { TELEGRAM_URL } from "../config";

const FEATURES = [
  { icon: Bell, title: "Regular Updates", description: "Receive regular prediction updates and community posts directly through our Telegram channel.", color: "#00D4FF", glow: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.2)", n: "01" },
  { icon: Lightbulb, title: "Prediction Insights", description: "Explore informational prediction posts and color analysis shared by our community members.", color: "#9D4EDD", glow: "rgba(157,78,221,0.1)", border: "rgba(157,78,221,0.2)", n: "02" },
  { icon: FileText, title: "Previous Result Records", description: "Access screenshots and historical result posts shared for informational reference.", color: "#00FF88", glow: "rgba(0,255,136,0.08)", border: "rgba(0,255,136,0.2)", n: "03" },
  { icon: Users, title: "Community Updates", description: "Stay connected with an active community interested in color prediction information.", color: "#FFB347", glow: "rgba(255,179,71,0.08)", border: "rgba(255,179,71,0.2)", n: "04" },
];

export default function WhyJoinSection() {
  return (
    <section className="hero-bg grid-pattern" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-5%", top: "30%", width: 400, height: 400, borderRadius: "50%", background: "rgba(0,212,255,0.05)", filter: "blur(80px)", pointerEvents: "none" }} />
      
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 999, background: "rgba(0,255,136,0.07)", border: "1px solid rgba(0,255,136,0.22)", marginBottom: 16 }}>
            <span style={{ color: "#00FF88", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Why Join Us</span>
          </div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Why Join Our <span className="gradient-text">Telegram Channel?</span>
          </h2>
          <p style={{ color: "#8892B0", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
            Everything you need to stay connected with color trading prediction updates — all in one Telegram community.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 56 }} className="why-grid">
          {FEATURES.map(({ icon: Icon, title, description, color, glow, border, n }) => (
            <div key={title} className="glass-card hover-card" style={{ borderRadius: 18, padding: 24, position: "relative", overflow: "hidden" }}>
              <span style={{ position: "absolute", top: 8, right: 12, fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "2.8rem", color, opacity: 0.07, lineHeight: 1 }}>{n}</span>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: glow, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ color: "#8892B0", fontSize: "0.82rem", lineHeight: 1.65 }}>{description}</p>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${color}80, transparent)` }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "1.1rem 2.8rem", fontSize: "0.9rem" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z" />
            </svg>
            JOIN OUR TELEGRAM COMMUNITY
          </a>
          <p style={{ color: "#5C6B88", fontSize: "0.78rem", marginTop: 12 }}>Free to join. Updates for informational purposes only.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .why-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 641px) and (max-width: 1024px) { .why-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
