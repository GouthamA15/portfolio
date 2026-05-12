"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, 
  SiGithub, SiDocker, SiSupabase, SiMysql, SiFastapi 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const skillIcons = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
  { name: "ChromaDB", icon: HiDatabase, color: "#F59E0B" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{ position: "relative" }}>
      <div className="container-base">
        <div className="section-label">Skills</div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "3.5rem",
          }}
        >
          Technical <span className="gradient-text">Arsenal</span>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 140px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {skillIcons.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.75rem 1.25rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                // @ts-ignore
                "--hover-color": skill.color,
              }}
            >
              {/* Glow background */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="hover-glow"
              />

              <skill.icon 
                size={32} 
                style={{ 
                  color: "var(--text-secondary)", 
                  marginBottom: "1rem",
                  transition: "all 0.3s ease",
                  filter: "grayscale(1) opacity(0.7)",
                }} 
                className="skill-icon"
              />
              
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.01em",
                  transition: "color 0.3s ease",
                }}
                className="skill-name"
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .glass-card:hover .skill-icon {
          filter: grayscale(0) opacity(1) !important;
          color: var(--hover-color) !important;
          transform: scale(1.1);
        }
        .glass-card:hover .skill-name {
          color: var(--text-primary) !important;
        }
        .glass-card:hover .hover-glow {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
