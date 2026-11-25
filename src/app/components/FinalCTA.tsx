"use client";

import { Sparkles } from "lucide-react";
import { TELEGRAM_URL } from "../config";

export default function FinalCTA() {
  return (
    <section className="section-alt" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.12) 0%, rgba(157,78,221,0.09) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", textAlign: "center" }}>
        {/* Sparkle icon */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 18,
            background: "linear-gradient(135deg, #00D4FF, #9D4EDD)",
            marginBottom: 24,
            boxShadow: "0 0 30px rgba(0,212,255,0.45)",
            animation: "float 5s ease-in-out infinite",
          }}
        >
          <Sparkles size={28} color="#fff" />
        </div>

        {/* Heading */}
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.9rem, 5vw, 3.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
          Don&apos;t Miss the <span className="gradient-text">Latest Updates!</span>
        </h2>

        <p style={{ color: "#8892B0", fontSize: "1.1rem", marginBottom: 36, maxWidth: 640, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
          Join the Group Prediction Telegram community and stay connected with the latest prediction updates and community posts.
        </p>

        {/* CTA Button */}
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "1.15rem 2.8rem", fontSize: "0.95rem" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z" />
          </svg>
          JOIN TELEGRAM NOW
        </a>

        {/* Disclaimer */}
        <p style={{ marginTop: 24, fontSize: "0.78rem", color: "#5C6B88", maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
          ⚠ Predictions are not guaranteed. Color trading involves financial risk. Participate responsibly.
        </p>

        {/* Stats row */}
        <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
          {[
            { label: "Free to Join", value: "✓" },
            { label: "Telegram Channel", value: "Official" },
            { label: "Community Updates", value: "Regular" },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card hover-card" style={{ borderRadius: 16, padding: "18px 28px", minWidth: 150 }}>
              <div className="gradient-text" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "1.4rem" }}>
                {value}
              </div>
              <div style={{ color: "#8892B0", fontSize: "0.78rem", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
