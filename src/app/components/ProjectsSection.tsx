import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Lock } from "lucide-react";
import LHCThumb from "../assets/LHCThumb.png";
type Visibility = "live" | "private";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  tags: string[];
  visibility: Visibility;
}

const PROJECTS: Project[] = [
  {
    title:
      "Let Him Cook  — AI-powered recipe generator — React, Hugging Face API, Tailwind CSS",
    description:
      "Turn whatever's in your fridge into a full recipe. Built with React and powered by Llama 3.1 via the Hugging Face Inference API, with dark mode, ingredient pill input, and markdown-rendered recipe output.",
    thumbnail: LHCThumb,
    url: "https://let-him-cook-roan.vercel.app/",
    tags: ["ReactJS", "MySQL", "Tailwind CSS"],
    visibility: "live",
  },
  {
    title: "Recruitment Portal",
    description:
      "An employer-facing recruitment portal with applicant tracking, automated email notifications, and a Python/Django REST API backend, deployed on a cloud environment with CI/CD pipelines.",
    thumbnail:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMFVJJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3ODA1NTk2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "#",
    tags: ["Python", "Django", "REST API"],
    visibility: "private",
  },
  {
    title: "Web Interface System",
    description:
      "A responsive multi-page web interface built with HTML, JavaScript, and Tailwind CSS, consuming third-party APIs and managing structured data through a clean component-driven architecture.",
    thumbnail:
      "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMFVJJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3ODA1NTk2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "#",
    tags: ["HTML", "Javascript", "Tailwind CSS"],
    visibility: "live",
  },
];

function VisibilityBadge({ visibility }: { visibility: Visibility }) {
  const isLive = visibility === "live";
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.08em",
        fontWeight: 600,
        backgroundColor: isLive
          ? "color-mix(in srgb, #22c55e 12%, transparent)"
          : "color-mix(in srgb, var(--muted-foreground) 10%, transparent)",
        borderColor: isLive
          ? "color-mix(in srgb, #22c55e 40%, transparent)"
          : "color-mix(in srgb, var(--muted-foreground) 30%, transparent)",
        color: isLive ? "#22c55e" : "var(--muted-foreground)",
      }}
    >
      {isLive ? (
        <>
          {/* pulsing dot */}
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: "#22c55e" }}
            />
            <span
              className="relative inline-flex rounded-full h-1.5 w-1.5"
              style={{ backgroundColor: "#22c55e" }}
            />
          </span>
          LIVE
        </>
      ) : (
        <>
          <Lock size={9} strokeWidth={2.5} />
          CLIENT PRIVATE
        </>
      )}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isPrivate = project.visibility === "private";

  const handleClick = (e: React.MouseEvent) => {
    if (isPrivate) e.preventDefault();
  };

  return (
    <motion.a
      href={isPrivate ? undefined : project.url}
      target={isPrivate ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col sm:flex-row rounded-lg overflow-hidden border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{
        cursor: isPrivate ? "default" : "pointer",
        boxShadow: hovered
          ? "0 8px 40px rgba(0,0,0,0.25)"
          : "0 2px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s ease",
        textDecoration: "none",
      }}
    >
      {/* Thumbnail */}
      <div className="relative sm:w-2/5 w-full aspect-video sm:aspect-auto overflow-hidden flex-shrink-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: hovered && !isPrivate ? "scale(1.04)" : "scale(1)",
            filter: isPrivate ? "grayscale(40%)" : "none",
          }}
        />
        {/* dark overlay on hover */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: hovered ? 0.45 : 0 }}
        />
        {/* visibility badge — pinned to bottom-left of thumbnail */}
        <div className="absolute bottom-3 left-3">
          <VisibilityBadge visibility={project.visibility} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 sm:p-6 flex-1 min-w-0">
        <div>
          {/* title row */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              className="text-foreground leading-snug"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 600,
              }}
            >
              {project.title}
            </h3>
            {isPrivate ? (
              <Lock
                size={15}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--muted-foreground)" }}
              />
            ) : (
              <ExternalLink
                size={16}
                className="flex-shrink-0 mt-0.5 transition-colors duration-200"
                style={{
                  color: hovered ? "var(--accent)" : "var(--muted-foreground)",
                }}
              />
            )}
          </div>

          {/* description — fades in on hover */}
          <p
            className="text-muted-foreground leading-relaxed transition-all duration-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 400,
              opacity: hovered ? 1 : 0,
              maxHeight: hovered ? "8rem" : "0px",
              overflow: "hidden",
            }}
          >
            {isPrivate && hovered
              ? "This project was built for a private client and is not publicly accessible."
              : project.description}
          </p>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-sm border border-border text-muted-foreground"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function ProjectsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 pb-24">
      {/* section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="h-px flex-1 bg-border" />
        <span
          className="text-muted-foreground tracking-[0.25em] uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
          }}
        >
          Projects
        </span>
        <div className="h-px flex-1 bg-border" />
      </motion.div>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
