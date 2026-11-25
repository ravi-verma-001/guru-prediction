"use client";

import { DEMO_PREDICTIONS } from "../data/predictions";
import { Activity } from "lucide-react";

const colorConfig: Record<string, { text: string; bg: string; border: string; dot: string; badgeBg: string }> = {
  green: { text: "#00FF88", bg: "rgba(0,255,136,0.06)", border: "rgba(0,255,136,0.2)", dot: "#00FF88", badgeBg: "rgba(0,255,136,0.12)" },
  red:   { text: "#FF5C5C", bg: "rgba(255,59,59,0.06)",  border: "rgba(255,59,59,0.2)",  dot: "#FF5C5C", badgeBg: "rgba(255,59,59,0.12)" },
  violet:{ text: "#BF7FFF", bg: "rgba(157,78,221,0.07)", border: "rgba(157,78,221,0.25)",dot: "#BF7FFF", badgeBg: "rgba(157,78,221,0.12)" },
};

export default function PredictionDashboard() {
  return (
    <section id="dashboard" className="hero-bg grid-pattern" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 999, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.22)", marginBottom: 16 }}>
            <Activity size={12} color="#00D4FF" />
            <span style={{ color: "#00D4FF", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Prediction Dashboard</span>
          </div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Prediction <span className="gradient-text">Dashboard Preview</span>
          </h2>
          <p style={{ color: "#8892B0", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 20px" }}>
            A preview of the kind of updates shared in our community. Join Telegram to see live posts.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 20px", borderRadius: 12, background: "rgba(255,165,0,0.07)", border: "1px solid rgba(255,165,0,0.22)" }}>
            <span>⚠️</span>
            <span style={{ color: "#FFB347", fontSize: "0.75rem", fontWeight: 700 }}>ALL DATA BELOW IS SAMPLE/DEMO CONTENT — NOT REAL PREDICTIONS OR RESULTS</span>
          </div>
        </div>

        {/* Table card */}
        <div className="glass-card" style={{ borderRadius: 20, overflow: "hidden" }}>
          
          {/* Top bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid rgba(0,212,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5C5C" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFD700" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00FF88" }} />
              <span style={{ color: "#5C6B88", fontSize: "0.8rem", fontWeight: 600, marginLeft: 8 }}>Sample Prediction Feed</span>
            </div>
            <span className="badge-demo">DEMO DATA</span>
          </div>

          {/* Column headers (desktop) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", padding: "12px 24px", background: "rgba(0,212,255,0.03)", borderBottom: "1px solid rgba(0,212,255,0.06)" }} className="table-header">
            {["Round ID", "Prediction Color", "Color Indicator", "Status", "Result"].map(h => (
              <div key={h} style={{ color: "#5C6B88", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</div>
            ))}
          </div>

          {/* Rows */}
          {DEMO_PREDICTIONS.map((pred, i) => {
            const c = colorConfig[pred.color];
            return (
              <div key={pred.id} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                alignItems: "center", padding: "16px 24px",
                borderBottom: "1px solid rgba(0,212,255,0.05)",
                transition: "background 0.2s",
              }}
                className="table-row"
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,212,255,0.025)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ color: "#fff", fontWeight: 700, fontFamily: "monospace", fontSize: "0.85rem" }}>{pred.roundId}</span>
                <span style={{ color: c.text, fontWeight: 600, fontSize: "0.85rem" }}>{pred.prediction}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: c.dot, boxShadow: `0 0 10px ${c.dot}`, display: "inline-block" }} />
                  <span style={{ color: "#8892B0", fontSize: "0.8rem" }}>{pred.color}</span>
                </div>
                <span className="badge-demo">SAMPLE</span>
                <span style={{ background: c.badgeBg, color: c.text, border: `1px solid ${c.border}`, fontSize: "0.72rem", fontWeight: 700, padding: "3px 10px", borderRadius: 999, display: "inline-block" }}>
                  {pred.resultStatus}
                </span>
              </div>
            );
          })}

          {/* Footer */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px", borderTop: "1px solid rgba(0,212,255,0.07)", flexWrap: "wrap", gap: 8 }}>
            <span style={{ color: "#5C6B88", fontSize: "0.75rem" }}>⚠ Sample data only. Not real predictions or results.</span>
            <a href="https://t.me/guruprediction" target="_blank" rel="noopener noreferrer"
              style={{ color: "#00D4FF", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00FF88")}
              onMouseLeave={e => (e.currentTarget.style.color = "#00D4FF")}
            >
              Join Telegram for Real Updates →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .table-header { display: none !important; }
          .table-row { grid-template-columns: 1fr 1fr !important; gap: 8px; }
        }
      `}</style>
    </section>
  );
}
