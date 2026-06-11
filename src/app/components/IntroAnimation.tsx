import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const DISPLAY_DURATION = 1500;

const GLOW = "drop-shadow(0 0 18px rgba(255,255,255,0.85)) drop-shadow(0 0 50px rgba(255,255,255,0.35))";
const H = "clamp(5rem, 13vw, 10rem)";
const TEXT_SHADOW = "0 0 30px rgba(255,255,255,0.8), 0 0 70px rgba(255,255,255,0.3)";

/* ── Logo components ─────────────────────────────────── */

function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.232 23 20.464" style={{ height: H, width: "auto", filter: GLOW }} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="white" />
      <g stroke="white" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg viewBox="0 0 54 33" style={{ height: H, width: "auto", filter: GLOW }}>
      <path
        fill="white"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
      />
    </svg>
  );
}

/* C++ has no standard logo — styled monospace text */
function CppText() {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "clamp(3rem, 10vw, 8rem)",
      fontWeight: 700,
      color: "#ffffff",
      textShadow: TEXT_SHADOW,
      letterSpacing: "-0.02em",
    }}>
      C++
    </span>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 110 110" style={{ height: H, width: "auto", filter: GLOW }}>
      {/* top snake body */}
      <path
        fill="white"
        d="M55 5C42 5 34 11 34 20v10h22v3H26C17 33 10 40 10 55s7 22 16 23h9v-11c0-9 7-16 17-16h20c8 0 14-6 14-14V20C86 11 78 5 55 5zm-10 9a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
      />
      {/* bottom snake body */}
      <path
        fill="white"
        fillOpacity="0.55"
        d="M55 105c13 0 21-6 21-15V80H54v-3h26c9 0 16-7 16-22s-7-22-16-23h-9v11c0 9-7 16-17 16H34c-8 0-14 6-14 14v15c0 9 8 15 21 17h14zm10-9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
      />
    </svg>
  );
}

function MySQLLogo() {
  return (
    <svg viewBox="0 0 120 120" style={{ height: H, width: "auto", filter: GLOW }}>
      {/* dolphin silhouette */}
      <path
        fill="white"
        d="M98 18c-6-4-14-3-20 2-4-8-13-13-23-12C34 9 20 24 20 41c0 6 2 12 5 17-4 3-7 7-8 12-2 8 3 16 11 18 5 1 10 0 14-3 4 5 10 8 17 8 14 0 26-12 26-27 0-3 0-6-1-9 8-3 14-10 16-18 2-7 0-16-2-21zM55 82c-10 0-18-9-18-20s8-20 18-20 18 9 18 20-8 20-18 20zm36-30c-2 5-6 9-11 11 0-1 0-2 0-3 0-17-13-30-29-30-5 0-9 1-13 3-1-3-2-6-2-10 0-12 9-21 20-21 8 0 15 5 18 12 4-4 10-6 16-4 4 4 3 30 1 42z"
      />
    </svg>
  );
}

function HTML5Logo() {
  return (
    <svg viewBox="0 0 512 512" style={{ height: H, width: "auto", filter: GLOW }}>
      {/* outer shield */}
      <path
        fill="white"
        d="M64 32l42.7 405.3L256 480l149.3-42.7L448 32H64zm308 93.3l-6.4 70.4H220.8l5.6 60.8h138.4l-19.2 192-89.6 24-89.6-24-6.4-70.4h62.4l3.2 35.2 30.4 8 30.4-8 3.2-38.4H176l-16-179.2h192l-3.2-32H172.8l-6.4-67.2h209.6v.8z"
      />
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg viewBox="0 0 100 100" style={{ height: H, width: "auto", filter: GLOW }}>
      <rect x="2" y="2" width="96" height="96" rx="10" fill="none" stroke="white" strokeWidth="4" />
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fill="white"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 44, fontWeight: 700 }}
      >
        JS
      </text>
    </svg>
  );
}

/* ── Item map ────────────────────────────────────────── */

type TechItem = { name: string; Logo: React.ComponentType | null };

const TECH_ITEMS: TechItem[] = [
  { name: "ReactJS",      Logo: ReactLogo      },
  { name: "Tailwind CSS", Logo: TailwindLogo   },
  { name: "C++",          Logo: null           }, // no standard logo
  { name: "Python",       Logo: PythonLogo     },
  { name: "MySQL",        Logo: MySQLLogo      },
  { name: "HTML",         Logo: HTML5Logo      },
  { name: "Javascript",   Logo: JavaScriptLogo },
];

/* ── Component ───────────────────────────────────────── */

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < TECH_ITEMS.length - 1) {
        setExiting(true);
        setTimeout(() => {
          setIndex((i) => i + 1);
          setExiting(false);
        }, 300);
      } else {
        setExiting(true);
        setTimeout(onComplete, 400);
      }
    }, DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const current = TECH_ITEMS[index];
  const { Logo } = current;

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-30">
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <AnimatePresence mode="wait">
        {!exiting && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-5 select-none"
          >
            {Logo ? (
              <Logo />
            ) : (
              <CppText />
            )}
            {/* name label shown under all logos */}
            {Logo && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {current.name}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* progress dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {TECH_ITEMS.map((_, i) => (
          <div
            key={i}
            className="h-0.5 rounded-full transition-all duration-300"
            style={{
              width: i === index ? "2rem" : "0.5rem",
              backgroundColor: i <= index ? "var(--accent)" : "var(--muted)",
              opacity: i <= index ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
