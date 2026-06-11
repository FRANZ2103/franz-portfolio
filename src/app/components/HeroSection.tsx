import { motion } from "motion/react";

const SKILLS = ["ReactJS", "Tailwind CSS", "C++", "Python", "MySQL", "HTML", "Javascript"];

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16 max-w-5xl mx-auto w-full"
    >
      {/* name */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p
          className="text-muted-foreground mb-3 tracking-[0.25em] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}
        >
          Portfolio
        </p>
        <h1
          className="text-foreground leading-[1.05] tracking-tight mb-2"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 300,
          }}
        >
          Ferdinand Francis
        </h1>
        <h1
          className="leading-[1.05] tracking-tight mb-8"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          Sundiam
        </h1>
      </motion.div>

      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="h-px w-12 bg-accent" />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.875rem",
            color: "var(--accent)",
            letterSpacing: "0.1em",
          }}
        >
          Computer Engineer
        </span>
      </motion.div>

      {/* bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-muted-foreground leading-relaxed mb-16 max-w-2xl"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
          fontWeight: 400,
        }}
      >
        Computer Engineering graduate with a disciplined approach to software development,
        operational excellence, and cross-functional collaboration. Experienced in applying
        Agile methodologies across the full software development lifecycle, integrating
        third-party APIs and services, and working with structured data formats in real
        business environments. Combines strong technical foundations in JavaScript, Python,
        C++, and SQL with a business-oriented mindset, effective communication skills, and
        a consistent drive to improve systems, processes, and outcomes.
      </motion.p>

      {/* tech stack chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="flex flex-wrap gap-2"
      >
        {SKILLS.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
            className="px-3 py-1.5 rounded-sm border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
