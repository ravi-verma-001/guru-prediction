"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="hero-bg grid-pattern" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 16px",
              borderRadius: 999,
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.25)",
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#00D4FF", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              FAQ
            </span>
          </div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: "#8892B0", fontSize: "1rem", lineHeight: 1.7 }}>
            Everything you need to know about Guru Prediction and our Telegram community.
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: `1px solid ${isOpen ? "rgba(0,212,255,0.35)" : "rgba(0,212,255,0.1)"}`,
                  boxShadow: isOpen ? "0 0 28px rgba(0,212,255,0.15)" : undefined,
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        background: isOpen ? "rgba(0,212,255,0.16)" : "rgba(0,212,255,0.06)",
                        color: isOpen ? "#00D4FF" : "#5C6B88",
                        border: `1px solid ${isOpen ? "rgba(0,212,255,0.35)" : "rgba(0,212,255,0.12)"}`,
                        transition: "all 0.3s",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.98rem",
                        color: isOpen ? "#fff" : "#C0CBE0",
                        transition: "color 0.25s",
                      }}
                    >
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      color: isOpen ? "#00D4FF" : "#5C6B88",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  style={{
                    maxHeight: isOpen ? 320 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div style={{ padding: "0 24px 20px 70px" }}>
                    <div
                      style={{
                        height: 1,
                        background: "linear-gradient(90deg, rgba(0,212,255,0.25), transparent)",
                        marginBottom: 14,
                      }}
                    />
                    <p style={{ color: "#8892B0", fontSize: "0.9rem", lineHeight: 1.75 }}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
