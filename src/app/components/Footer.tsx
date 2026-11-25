"use client";

import { TELEGRAM_URL } from "../config";
import { Zap, ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#faq" },
  { label: "Terms & Conditions", href: "#faq" },
  { label: "Responsible Participation", href: "#faq" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ position: "relative", borderTop: "1px solid rgba(0,212,255,0.12)", background: "#04060F" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 32px" }}>
        {/* Top section */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #00D4FF, #9D4EDD)",
                }}
              >
                <Zap size={18} color="#fff" fill="#fff" />
              </div>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", letterSpacing: "0.12em" }}>
                GURU <span className="gradient-text-bp">PREDICTION</span>
              </span>
            </div>
            <p style={{ color: "#5C6B88", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 20, maxWidth: 340 }}>
              A Telegram community for color trading prediction updates, result screenshots and informational insights.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "0.65rem 1.2rem", fontSize: "0.8rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z" />
              </svg>
              Join Telegram
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#5C6B88", fontSize: "0.88rem", transition: "color 0.25s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#5C6B88")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#5C6B88", fontSize: "0.88rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.25s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#5C6B88")}
                >
                  Telegram Channel <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    style={{ color: "#5C6B88", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.25s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#5C6B88")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer box */}
        <div
          style={{
            padding: "18px 24px",
            borderRadius: 16,
            background: "rgba(255,165,0,0.07)",
            border: "1px solid rgba(255,165,0,0.22)",
            marginBottom: 32,
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#FFB347", lineHeight: 1.7, textAlign: "center", margin: 0 }}>
            ⚠ <strong>Disclaimer:</strong> Color trading involves financial risk. Predictions are not guaranteed, and past results do not guarantee future outcomes. Participate responsibly.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            paddingTop: 24,
            borderTop: "1px solid rgba(0,212,255,0.08)",
          }}
        >
          <p style={{ color: "#3D4D63", fontSize: "0.78rem", margin: 0 }}>© 2026 Guru Prediction. All rights reserved.</p>
          <p style={{ color: "#3D4D63", fontSize: "0.78rem", margin: 0 }}>Information only. Not financial advice.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
