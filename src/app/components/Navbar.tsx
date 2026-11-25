"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { TELEGRAM_URL } from "../config";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(5,8,22,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        
        {/* Logo */}
        <button onClick={() => handleNav("#hero")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #00D4FF, #9D4EDD)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 20px rgba(0,212,255,0.4)"
          }}>
            <Zap size={18} color="#fff" fill="#fff" />
          </div>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", letterSpacing: "0.12em" }}>
            GURU <span className="gradient-text-bp">PREDICTION</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button key={link.href} onClick={() => handleNav(link.href)} className="nav-link">
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary desktop-cta" style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z" />
          </svg>
          Join Telegram
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-toggle"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 8, borderRadius: 8 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(5,8,22,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,212,255,0.1)",
          padding: "20px 24px 28px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => handleNav(link.href)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#8892B0", fontSize: "1rem", fontWeight: 500, textAlign: "left", padding: "4px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00D4FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8892B0")}
              >
                {link.label}
              </button>
            ))}
          </div>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z" />
            </svg>
            Join Telegram Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
