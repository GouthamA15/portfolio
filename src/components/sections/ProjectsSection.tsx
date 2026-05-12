"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../config/data";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stackColorMap: Record<string, string> = {
  "Next.js": "rgba(255,255,255,0.07)",
  "TailwindCSS": "rgba(6,182,212,0.1)",
  "MySQL": "rgba(123,140,222,0.1)",
  "REST APIs": "rgba(167,139,250,0.1)",
  "ChromaDB": "rgba(245,158,11,0.1)",
  "RAG Pipelines": "rgba(94,205,201,0.1)",
  "Node.js": "rgba(51,153,51,0.1)",
  "FastAPI": "rgba(5,153,139,0.1)",
  "Supabase": "rgba(62,207,142,0.1)",
  "Python": "rgba(55,118,171,0.1)",
};

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" style={{ position: "relative" }}>
      <div className="container-base">
        <div className="section-label">Projects</div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Selected <span className="gradient-text">Work</span>
          </h2>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>
            {projects.length} curated projects
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                className="glass-card"
                style={{ 
                  cursor: "pointer",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: isExpanded ? "1px solid rgba(123, 140, 222, 0.4)" : "1px solid var(--border)",
                  boxShadow: isExpanded ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
                }}
                whileHover={{ 
                  y: -5,
                  borderColor: "rgba(123, 140, 222, 0.3)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                }}
              >
                {/* Subtle border glow on hover */}
                <div 
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at top right, rgba(123,140,222,0.1) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="card-glow"
                />

                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    gap: "1rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div>
                    <motion.h3
                      layout="position"
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span
                      layout="position"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--brand)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {project.role}
                    </motion.span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      background: isExpanded ? "var(--brand)" : "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isExpanded ? "var(--bg-base)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Stack badges */}
                <motion.div
                  layout
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        background: stackColorMap[tech] || "rgba(255,255,255,0.05)",
                        color: "var(--text-secondary)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  layout
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: isExpanded ? "none" : 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.description}
                  </p>
                </motion.div>

                {/* Action buttons */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        overflow: "hidden",
                        position: "relative",
                        zIndex: 1,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                          style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem", flex: 1, justifyContent: "center" }}
                        >
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Repo
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem", flex: 1, justifyContent: "center" }}
                        >
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                          </svg>
                          Live
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer hint */}
                <motion.div
                  layout
                  style={{
                    marginTop: "auto",
                    paddingTop: "1.25rem",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.span
                    animate={{ x: isExpanded ? 0 : [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {isExpanded ? "Click to collapse" : "Click to view details"}
                  </motion.span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        .glass-card:hover .card-glow {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
