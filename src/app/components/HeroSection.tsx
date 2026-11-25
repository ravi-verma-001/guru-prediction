"use client";

import { ArrowRight, TrendingUp, Users, Sparkles } from "lucide-react";
import { TELEGRAM_URL } from "../config";

const DEMO_CARDS = [
  { round: "Round #1842", color: "green", label: "Green", dot: "#00FF88", bg: "rgba(0,255,136,0.08)", border: "rgba(0,255,136,0.22)" },
  { round: "Round #1843", color: "red", label: "Red", dot: "#FF5C5C", bg: "rgba(255,59,59,0.08)", border: "rgba(255,59,59,0.22)" },
  { round: "Round #1844", color: "violet", label: "Violet", dot: "#BF7FFF", bg: "rgba(157,78,221,0.1)", border: "rgba(157,78,221,0.28)" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="hero-bg grid-pattern" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, position: "relative", overflow: "hidden" }}>
      
      {/* Animated orbs */}
      <div style={{ position: "absolute", top: "10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(0,212,255,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(157,78,221,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">

          {/* Left content */}
          <div style={{ animation: "slide-up 0.7s ease-out" }}>
            {/* Live badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999,
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.22)",
              marginBottom: 24
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF88", display: "inline-block", animation: "pulse-glow 2s ease-in-out infinite" }} />
              <span style={{ color: "#00D4FF", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Telegram Community · Active</span>
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", marginBottom: 16 }}>
              GURU <span className="gradient-text">PREDICTION</span>
            </h1>
            
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#8892B0", fontWeight: 500, lineHeight: 1.6, marginBottom: 12 }}>
              Stay Updated With Color Trading Predictions &amp; Community Insights.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#5C6B88", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              Explore prediction updates, previous results and community insights. Join our Telegram community to receive updates directly.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "1rem 2.2rem", fontSize: "0.85rem" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z" />
                </svg>
                JOIN TELEGRAM NOW
              </a>
              <a href="#dashboard" onClick={e => { e.preventDefault(); document.querySelector("#dashboard")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline" style={{ padding: "1rem 2.2rem", fontSize: "0.85rem" }}>
                EXPLORE PREDICTIONS <ArrowRight size={16} />
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { icon: Users, label: "Free to Join", val: "✓" },
                { icon: TrendingUp, label: "Daily Updates", val: "Active" },
                { icon: Sparkles, label: "Telegram", val: "Official" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(0,212,255,0.07)",
                    border: "1px solid rgba(0,212,255,0.14)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon size={16} color="#00D4FF" />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>{val}</div>
                    <div style={{ color: "#5C6B88", fontSize: "0.72rem" }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard card */}
          <div style={{ display: "flex", justifyContent: "flex-end", position: "relative" }} className="hero-card-wrap">
            {/* Demo label */}
            <div className="badge-demo" style={{ position: "absolute", top: -14, right: 0, zIndex: 10 }}>
              ⚠ DEMO DISPLAY — NOT REAL DATA
            </div>

            {/* Main card */}
            <div className="glass-card" style={{
              borderRadius: 20, padding: 24, width: "100%", maxWidth: 360,
              animation: "float 6s ease-in-out infinite",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <div style={{ color: "#5C6B88", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Prediction Feed</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginTop: 2 }}>Sample Preview</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#00D4FF,#9D4EDD)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <TrendingUp size={15} color="#fff" />
                </div>
              </div>

              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {DEMO_CARDS.map((card) => (
                  <div key={card.round} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "12px 14px", borderRadius: 12,
                    background: card.bg, border: `1px solid ${card.border}`,
                    transition: "transform 0.2s"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", color: card.dot }}>
                        {card.label[0]}
                      </div>
                      <div>
                        <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem" }}>{card.round}</div>
                        <div style={{ color: "#5C6B88", fontSize: "0.7rem" }}>{card.label} Prediction</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: card.dot, boxShadow: `0 0 10px ${card.dot}`, display: "inline-block" }} />
                      <span className="badge-demo">SAMPLE</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning */}
              <div style={{ marginTop: 16, padding: "10px 14px", borderRadius: 10, background: "rgba(255,165,0,0.07)", border: "1px solid rgba(255,165,0,0.2)" }}>
                <p style={{ color: "#FFB347", fontSize: "0.68rem", textAlign: "center", fontWeight: 500 }}>
                  ⚠ Illustrative demo only. Join Telegram for real updates.
                </p>
              </div>
            </div>

            {/* Floating mini card */}
            <div className="glass-card" style={{
              position: "absolute", bottom: -20, left: 0,
              borderRadius: 14, padding: "10px 14px",
              display: "flex", alignItems: "center", gap: 10,
              animation: "float 6s ease-in-out 1.8s infinite",
              boxShadow: "0 0 30px rgba(0,212,255,0.2)"
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(0,255,136,0.12)", border: "1px solid rgba(0,255,136,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#00FF88", fontWeight: 800 }}>G</span>
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.78rem" }}>Community</div>
                <div style={{ color: "#5C6B88", fontSize: "0.68rem" }}>Telegram Active</div>
              </div>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF88", display: "inline-block", animation: "pulse-glow 2s infinite" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, #050816, transparent)", pointerEvents: "none" }} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-card-wrap { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
