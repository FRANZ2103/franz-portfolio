/* MARKER-MAKE-KIT-INVOKED */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IntroAnimation } from "./components/IntroAnimation";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ThemeToggle } from "./components/ThemeToggle";
import { RotateCcw } from "lucide-react";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="size-full bg-background text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Nav — always visible */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 h-16 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <span
          className="text-foreground tracking-tight"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.875rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          FFS<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <div className="flex items-center gap-6">
          {introComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center gap-6"
            >
              {["About", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
          {introComplete && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIntroComplete(false)}
              aria-label="Replay intro animation"
              title="Replay intro"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
            >
              <RotateCcw size={15} />
            </motion.button>
          )}
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
        </div>
      </motion.nav>

      {/* Intro animation */}
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {/* Static hero content */}
      {introComplete && (
        <main className="flex flex-col items-center w-full">
          <div className="w-full">
            <HeroSection />
          </div>
          <ProjectsSection />
        </main>
      )}
    </div>
  );
}
