"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../../../config/data";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const qualities = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Scalable Systems",
    text: "Architecting backends and APIs that handle real-world load with clean separation of concerns.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
    title: "AI + Full Stack",
    text: "Integrating LLMs, RAG pipelines, and semantic search into production-grade web applications.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "UI/UX Engineering",
    text: "Translating design thinking into precise, responsive, and accessible frontend experiences.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export default function AboutSection() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <div className="container-base">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          About
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Main text */}
          <motion.div variants={itemVariants}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "2rem",
              }}
            >
              Engineering at the edge of{" "}
              <span className="gradient-text">AI and Design</span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                maxWidth: "720px",
              }}
            >
              {personalInfo.bio}
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "720px",
              }}
            >
              Currently pursuing my B.Tech in Computer Science, I&apos;ve worked on everything
              from college management platforms to RAG-based chatbots and healthcare dashboards —
              always with an eye for clean architecture and user-first thinking.
            </p>
          </motion.div>

          {/* Qualities grid */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {qualities.map((q) => (
              <motion.div 
                key={q.title} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card" 
                style={{ padding: "2rem" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(123,140,222,0.1)",
                    border: "1px solid rgba(123,140,222,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brand)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {q.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {q.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {q.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
