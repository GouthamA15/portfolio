"use client";

import { motion } from "framer-motion";
import { education } from "../../../config/data";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export default function EducationSection() {
  return (
    <section id="education" style={{ position: "relative" }}>
      <div className="container-base">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Education
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "4rem",
          }}
        >
          Academic <span className="gradient-text">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: "800px" }}
        >
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0 2rem",
              }}
            >
              {/* Left: dot + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "6px",
                }}
              >
                <motion.div
                  initial={item.current ? { scale: 0.8 } : {}}
                  animate={item.current ? { scale: [1, 1.2, 1] } : {}}
                  transition={item.current ? { duration: 2, repeat: Infinity } : {}}
                  className={`timeline-dot ${item.current ? "active" : ""}`}
                  style={{
                    background: item.current ? "var(--brand)" : "var(--text-muted)",
                    boxShadow: item.current
                      ? "0 0 0 4px rgba(123,140,222,0.2), 0 0 15px rgba(123,140,222,0.3)"
                      : "0 0 0 4px rgba(255,255,255,0.04)",
                  }}
                />
                {idx < education.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="timeline-line"
                    style={{ flex: 1, minHeight: "80px" }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingBottom: idx < education.length - 1 ? "4rem" : "0" }}>
                {/* Period badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: item.current ? "var(--brand)" : "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.period}
                  {item.current && (
                    <span
                      style={{
                        marginLeft: "0.75rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "99px",
                        background: "rgba(123,140,222,0.1)",
                        border: "1px solid rgba(123,140,222,0.2)",
                        color: "var(--brand)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Current
                    </span>
                  )}
                </span>

                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card" 
                  style={{ padding: "2rem" }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.degree}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--brand)",
                      marginBottom: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.institution}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
