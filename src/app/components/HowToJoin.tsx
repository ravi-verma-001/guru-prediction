"use client";

import { Globe, MousePointerClick, Users } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Globe,
    title: "Visit Group Prediction",
    description:
      "Open this website and browse through our community information, prediction previews and results gallery.",
    color: "#00D4FF",
    glow: "rgba(0,212,255,0.15)",
    border: "rgba(0,212,255,0.28)",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Click the Join Telegram Button",
    description:
      'Tap any "Join Telegram Now" button on the page. You\'ll be redirected to our official Telegram channel instantly.',
    color: "#9D4EDD",
    glow: "rgba(157,78,221,0.15)",
    border: "rgba(157,78,221,0.28)",
  },
  {
    number: "03",
    icon: Users,
    title: "Join & View Available Updates",
    description:
      "Join the Telegram channel for free and start receiving prediction updates, result screenshots and community posts.",
    color: "#00FF88",
    glow: "rgba(0,255,136,0.12)",
    border: "rgba(0,255,136,0.28)",
  },
];

export default function HowToJoin() {
  return (
    <section className="section-alt" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 60% 30%, rgba(0,255,136,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 16px",
              borderRadius: 999,
              background: "rgba(0,255,136,0.07)",
              border: "1px solid rgba(0,255,136,0.25)",
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#00FF88", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Simple Steps
            </span>
          </div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            How to <span className="gradient-text">Join</span>
          </h2>
          <p style={{ color: "#8892B0", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
            Getting started is simple. Follow these three easy steps to join our community.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          <div className="steps-connector" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="steps-grid">
            {STEPS.map(({ number, icon: Icon, title, description, color, glow, border }, index) => (
              <div key={number} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                {/* Step circle */}
                <div
                  className="hover-card"
                  style={{
                    width: 112,
                    height: 112,
                    borderRadius: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    background: glow,
                    border: `2px solid ${border}`,
                    boxShadow: `0 0 40px ${glow}`,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <span className="step-number">{number}</span>
                  <Icon size={18} color={color} style={{ marginTop: 4 }} />
                </div>

                {/* Card */}
                <div className="glass-card hover-card" style={{ borderRadius: 20, padding: 28, width: "100%", flex: 1 }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: "#8892B0", fontSize: "0.88rem", lineHeight: 1.7 }}>{description}</p>
                </div>

                {/* Mobile arrow */}
                {index < STEPS.length - 1 && (
                  <div className="mobile-step-arrow" style={{ marginTop: 16, color: "#2D3D55", fontSize: "1.5rem" }}>
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .steps-connector {
          position: absolute;
          top: 56px;
          left: calc(16.66% + 12px);
          right: calc(16.66% + 12px);
          height: 2px;
          background: linear-gradient(90deg, #00D4FF, #9D4EDD, #00FF88);
          opacity: 0.35;
          z-index: 1;
        }
        .mobile-step-arrow { display: none; }
        @media (max-width: 768px) {
          .steps-connector { display: none; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .mobile-step-arrow { display: block; }
        }
      `}</style>
    </section>
  );
}
