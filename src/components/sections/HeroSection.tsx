"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../../../config/data";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE_OUT } },
};

export default function HeroSection(): JSX.Element {
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 800], [0, -30]);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % personalInfo.roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" style={{ position: "relative", paddingTop: "72px" }}>
      {/* Decorative orb */}
      <motion.div
        style={{ y: orbY, position: "absolute", width: 360, height: 360, background: "radial-gradient(circle, rgba(94,205,201,0.06) 0%, transparent 70%)", bottom: -40, right: -120, pointerEvents: "none" }}
        className="orb"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mobile-only stacked hero */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="container-base mobile-only" style={{ position: "relative", zIndex: 1, paddingTop: "1rem", paddingBottom: "1rem", minHeight: "calc(100vh - 72px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", textAlign: "center" }}>
          <motion.div variants={itemVariants} style={{ width: "100%" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.9rem", borderRadius: 99, fontSize: "0.8rem", fontWeight: 500, background: "rgba(94,205,201,0.08)", border: "1px solid rgba(94,205,201,0.2)", color: "var(--accent-teal)" }}>
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-teal)", display: "inline-block", boxShadow: "0 0 8px var(--accent-teal)" }} />
              Available for opportunities
            </span>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="glass-card" style={{ width: "clamp(110px, 36vw, 200px)", aspectRatio: "1 / 1", borderRadius: "9999px", overflow: "hidden" }}>
              {personalInfo.avatar ? (
                <img src={personalInfo.avatar} alt={`${personalInfo.name} profile`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--text-primary)" }}>MGK</div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 6vw, 2.75rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: 0 }}>
            Masna Goutham
            <br />
            <span className="gradient-text">Kumar</span>
          </motion.h1>

          <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "0.5rem", height: "2rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", letterSpacing: "0.08em", fontWeight: 600 }}>/</span>
            <div style={{ display: "flex", alignItems: "center", minHeight: "1.6rem" }}>
              <AnimatePresence mode="wait">
                <motion.span key={roleIndex} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ duration: 0.35, ease: EASE_OUT }} style={{ fontSize: "1rem", fontWeight: 600, color: "var(--brand)", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Mobile: description below rotating heading */}
          <motion.p variants={itemVariants} className="hero-bio" style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "0.25rem", maxWidth: "720px" }}>
            {personalInfo.tagline} Passionate about crafting <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>intelligent systems</span> and <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>elegant interfaces</span> that scale.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn-primary">
              Hire Me
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="#" className="btn-outline">
              Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop two-column hero */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="container-base desktop-only" style={{ position: "relative", zIndex: 1, minHeight: "calc(100vh - 72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(140px, 320px)", gap: "clamp(1.25rem, 4vw, 3rem)", alignItems: "center" }}>
          <div style={{ maxWidth: "680px", minWidth: 0 }}>
            <motion.div variants={itemVariants} style={{ marginBottom: "1.25rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 500, background: "rgba(94,205,201,0.08)", border: "1px solid rgba(94,205,201,0.2)", color: "var(--accent-teal)" }}>
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-teal)", display: "inline-block", boxShadow: "0 0 8px var(--accent-teal)" }} />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--text-primary)", marginBottom: "1rem" }}>
              Masna Goutham
              <br />
              <span className="gradient-text">Kumar</span>
            </motion.h1>

            <motion.div variants={itemVariants} style={{ height: "2.5rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", letterSpacing: "0.1em", fontWeight: 600 }}>/</span>
              <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                <AnimatePresence mode="wait">
                  <motion.span key={roleIndex} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.4, ease: EASE_OUT }} style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--brand)", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
                    {personalInfo.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-bio" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              {personalInfo.tagline} Passionate about crafting <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>intelligent systems</span> and <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>elegant interfaces</span> that scale.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-ctas" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn-primary">
                Hire Me
              </motion.a>
              <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="#" className="btn-outline">
                Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap" }}>
              {[
                { label: "Projects Built", value: "5+" },
                { label: "Technologies", value: "15+" },
                { label: "Years Learning", value: "3+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.4rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="desktop-only" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <div className="glass-card hero-image-wrap" style={{ width: "clamp(160px, 30vw, 340px)", aspectRatio: "1 / 1", borderRadius: "9999px", overflow: "hidden", position: "relative", zIndex: 1 }}>
              <div className="hero-image-glow" />
              {personalInfo.avatar ? (
                <img src={personalInfo.avatar} alt={`${personalInfo.name} profile`} className="hero-image" />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--text-primary)" }}>MGK</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
