"use client";

import { useState } from "react";
import { X, ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { RESULT_IMAGES } from "../data/results";

export default function ResultsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => lightboxIndex !== null && setLightboxIndex((lightboxIndex - 1 + RESULT_IMAGES.length) % RESULT_IMAGES.length);
  const next = () => lightboxIndex !== null && setLightboxIndex((lightboxIndex + 1) % RESULT_IMAGES.length);

  return (
    <section id="results" className="section-alt" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-5%", bottom: "10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(157,78,221,0.05)", filter: "blur(70px)", pointerEvents: "none" }} />
      
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 999, background: "rgba(157,78,221,0.08)", border: "1px solid rgba(157,78,221,0.25)", marginBottom: 16 }}>
            <ImageIcon size={12} color="#9D4EDD" />
            <span style={{ color: "#9D4EDD", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Results Gallery</span>
          </div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Our Previous <span className="gradient-text">Results</span>
          </h2>
          <p style={{ color: "#8892B0", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 20px" }}>
            Screenshots and updates shared by our Telegram community.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 10, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.18)" }}>
            <span style={{ color: "#00D4FF", fontSize: "0.75rem" }}>
              📂 Add images to <code style={{ color: "#00FF88", fontFamily: "monospace" }}>public/results/</code> and update <code style={{ color: "#00FF88", fontFamily: "monospace" }}>src/app/data/results.ts</code>
            </span>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="gallery-grid">
          {RESULT_IMAGES.map((img, index) => (
            <div key={img.id} className="glass-card hover-card" style={{ borderRadius: 18, overflow: "hidden", cursor: "pointer" }}
              onClick={() => openLightbox(index)}>
              {/* Image */}
              <div style={{ height: 200, background: "linear-gradient(135deg, #0A0F1E, #111827)", position: "relative", overflow: "hidden" }}>
                {!imgErrors[img.id] ? (
                  <img src={img.src} alt={img.caption}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onError={() => setImgErrors(p => ({ ...p, [img.id]: true }))}
                    onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = "scale(1.08)")}
                    onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                    loading="lazy"
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ImageIcon size={24} color="#2D3D55" />
                    </div>
                    <span style={{ color: "#2D3D55", fontSize: "0.72rem", textAlign: "center", padding: "0 12px" }}>
                      Add image to public/results/result-{img.id}.jpg
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,212,255,0.08)", opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0")}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(0,212,255,0.2)", border: "1px solid rgba(0,212,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ZoomIn size={20} color="#00D4FF" />
                  </div>
                </div>
                {/* Badge */}
                <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(5,8,22,0.8)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "3px 10px", border: "1px solid rgba(0,212,255,0.2)" }}>
                  <span style={{ color: "#00D4FF", fontFamily: "monospace", fontWeight: 700, fontSize: "0.72rem" }}>#{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>
              {/* Caption */}
              <div style={{ padding: "14px 16px" }}>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>{img.caption}</p>
                <p style={{ color: "#5C6B88", fontSize: "0.75rem" }}>{img.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div style={{ maxWidth: 900, width: "100%", padding: "0 16px", position: "relative" }} onClick={e => e.stopPropagation()}>
            {/* Close */}
            <button onClick={closeLightbox} style={{ position: "absolute", top: -48, right: 16, background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
              <X size={28} />
            </button>
            <div className="glass-card" style={{ borderRadius: 20, overflow: "hidden" }}>
              {!imgErrors[RESULT_IMAGES[lightboxIndex].id] ? (
                <img src={RESULT_IMAGES[lightboxIndex].src} alt={RESULT_IMAGES[lightboxIndex].caption}
                  style={{ width: "100%", maxHeight: "65vh", objectFit: "contain" }}
                  onError={() => setImgErrors(p => ({ ...p, [RESULT_IMAGES[lightboxIndex].id]: true }))} />
              ) : (
                <div style={{ height: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                  <ImageIcon size={48} color="#2D3D55" />
                  <span style={{ color: "#5C6B88", fontSize: "0.85rem" }}>Image not yet added</span>
                </div>
              )}
              <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{RESULT_IMAGES[lightboxIndex].caption}</p>
                <p style={{ color: "#5C6B88", fontSize: "0.8rem", marginTop: 4 }}>{RESULT_IMAGES[lightboxIndex].date}</p>
              </div>
            </div>
            {/* Nav */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
              <button onClick={prev} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: 10, padding: "8px 16px", color: "#8892B0", cursor: "pointer", fontSize: "0.85rem", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget.style.background = "rgba(0,212,255,0.14)"); (e.currentTarget.style.color = "#00D4FF"); }}
                onMouseLeave={e => { (e.currentTarget.style.background = "rgba(0,212,255,0.08)"); (e.currentTarget.style.color = "#8892B0"); }}>
                <ChevronLeft size={16} /> Previous
              </button>
              <span style={{ color: "#5C6B88", fontSize: "0.8rem", alignSelf: "center" }}>{lightboxIndex + 1} / {RESULT_IMAGES.length}</span>
              <button onClick={next} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: 10, padding: "8px 16px", color: "#8892B0", cursor: "pointer", fontSize: "0.85rem", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget.style.background = "rgba(0,212,255,0.14)"); (e.currentTarget.style.color = "#00D4FF"); }}
                onMouseLeave={e => { (e.currentTarget.style.background = "rgba(0,212,255,0.08)"); (e.currentTarget.style.color = "#8892B0"); }}>
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .gallery-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
