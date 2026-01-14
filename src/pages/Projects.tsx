// src/pages/Projects.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import projectAgtv from "@/assets/project-agtv.jpg";
import projectMaxwell from "@/assets/project-maxwell.jpg";
import projectOotie from "@/assets/project-ootie.jpg";
import productImage from "@/assets/product-apps.png";
type Category = "experience" | "apps" | "pet-projects";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  live: string;
  category: Category;
}

const allProjects: Project[] = [
  {
    title: "Assemblies of God Ghana TV",
    description:
      "A dynamic online platform for AGTV that brings viewers together, showcases uplifting content, and keeps the community connected. Designed for seamless updates and smooth multimedia experiences.",
    techStack: ["HTML", "Node.js", "MongoDB"],
    image: projectAgtv,
    live: "https://agtv.vercel.app/",
    category: "experience",
  },
  {
    title: "Maxwell's Portfolio",
    description:
      "A sleek portfolio showcasing Max's unique eye for detail, capturing stories through clean, expressive photography across portraits, events, and creative shoots.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: projectMaxwell,
    live: "https://maxwellandoh.vercel.app/",
    category: "experience",
  },
  {
    title: "Elibon Events and Deco.",
    description:
      "A contemporary event and décor brand transforming every space into a beautifully curated experience.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: "📚",
    live: "#",
    category: "experience",
  },
  {
    title: "Podcast Series",
    description:
      "A podcast platform featuring tech discussions, interviews with industry professionals, and insights into the world of software development.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: "🎙️",
    live: "#",
    category: "experience",
  },
  // Apps
  {
    title: "Ootie",
    description:
      "A modern outfit planning and wardrobe management app that helps users organize their clothing collection and create stylish outfits effortlessly.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: projectOotie,
    live: "https://ootie-web.vercel.app/",
    category: "apps",
  },
  // Pet Projects
  {
    title: "Personal Portfolio",
    description:
      "This very website you're looking at! A clean, minimal portfolio showcasing my work and journey as a developer.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "🌐",
    live: "/",
    category: "pet-projects",
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "Experience", value: "experience" },
  { label: "Apps", value: "apps" },
  { label: "Pet Projects", value: "pet-projects" },
];

export default function Projects() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("experience");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isMouseOverSidebarRef = useRef(false);
  const isInteractingRef = useRef(false);

  const filteredProjects = allProjects.filter((p) => p.category === activeCategory);

  const handleUserInteraction = useCallback(() => {
    isInteractingRef.current = true;
    setIsSidebarCollapsed(false);
    setTimeout(() => (isInteractingRef.current = false), 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sidebarRef.current) return;
      const r = sidebarRef.current.getBoundingClientRect();
      const isOver = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      const wasOver = isMouseOverSidebarRef.current;
      isMouseOverSidebarRef.current = isOver;

      if (isOver) setIsSidebarCollapsed(false);
      else if (wasOver && !isOver && !isInteractingRef.current) setIsSidebarCollapsed(true);

      if (isSidebarCollapsed && !isOver) {
        const dx = Math.max(0, Math.max(r.left - e.clientX, e.clientX - r.right));
        const dy = Math.max(0, Math.max(r.top - e.clientY, e.clientY - r.bottom));
        if (Math.hypot(dx, dy) < 50) setIsSidebarCollapsed(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isSidebarCollapsed, handleUserInteraction]);

  const nextProject = () => setCurrentIndex((i) => (i + 1) % filteredProjects.length);
  const prevProject = () => setCurrentIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length);
  const handleCategoryChange = (c: Category) => {
    setActiveCategory(c);
    setCurrentIndex(0);
    handleUserInteraction();
  };
  const handlePaginationClick = (idx: number) => {
    setCurrentIndex(idx);
    handleUserInteraction();
  };

  const currentProject = filteredProjects[currentIndex];
  const isImageUrl = currentProject?.image?.startsWith("/") || currentProject?.image?.startsWith("http") || currentProject?.image.includes("assets");

  const getCategoryTitle = () => categories.find((c) => c.value === activeCategory)?.label || "Experience";

  const toggleProjectExpansion = (title: string) => setExpandedProject((prev) => (prev === title ? null : title));

  /* ---------- reusable card ---------- */
  const ProjectCard = ({ title, subtitle, live = "#", children }: {
    title: string; subtitle: string; live?: string; children?: React.ReactNode;
  }) => (
    <div className="bg-gray-100 rounded-lg border border-gray-200 p-8 shadow-sm" style={{ fontFamily: "Arimo, sans-serif", fontWeight: 400 }}>
      <div className="text-left space-y-3 mb-6">
        <h3 className="text-2xl font-bold" style={{ fontFamily: "Arimo, sans-serif", fontWeight: 700, color: "#2a2a2a" }}>{title}</h3>
        <p className="text-xl text-muted-foreground" dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600 transition-transform rounded-full p-3 bg-white shadow-sm">
          <Plus className="w-7 h-7" />
        </Button>
        <Button
  variant="ghost"
  size="icon"
  className="text-blue-500 hover:text-blue-600 transition-transform rounded-full p-3 bg-white shadow-sm"
  onClick={() => toggleProjectExpansion(title)}
>
  <Plus className="w-7 h-7" />
</Button>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <aside
        ref={sidebarRef}
        className={`fixed left-24 top-0 h-screen flex items-center justify-center z-40 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "w-16" : "w-48"
        }`}
      >
        <nav className="flex flex-col gap-2 p-3 bg-nav-bg/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg w-full">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ease-out hover:translate-x-1 ${
                activeCategory === cat.value
                  ? "text-nav-item-active bg-secondary font-medium"
                  : "text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary"
              }`}
            >
              <span className="text-muted-foreground">/</span>
              <span className={`whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                {cat.label.toLowerCase()}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="min-h-screen flex flex-col px-8">
        {(activeCategory === "experience" || activeCategory === "apps" || activeCategory === "pet-projects") && (
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold">/{activeCategory}</h1>
            <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
          </div>
        )}

        {/* EXPERIENCE */}
        {activeCategory === "experience" && (
          <div className="flex-1 py-8">
            <div className="max-w-6xl mx-auto mb-8">
              <p className="text-4xl font-bold leading-tight">
                <span className="text-muted-foreground">I've worked as a hands-on </span>
                <span className="text-foreground">web developer, </span>
                <br />
                <span className="text-muted-foreground">delivering </span>
                <span className="text-foreground">production-ready</span>
                <span className="text-muted-foreground"> websites for:</span>
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProjectCard
  title="AGTV"
  subtitle="web design and developer<br />2026 - Present"
  live="https://agtv.vercel.app/ "
>
  {expandedProject === "AGTV" && (
    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
      <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
        I designed and developed the official website for Assemblies of God TV Ghana, creating a responsive platform that centralizes all content for viewers. The site features live streaming, scheduled programming, and on-demand content, ensuring users can easily access broadcasts and updates from any device. I handled the overall design, ensuring a clean and accessible interface that aligns with the brand and audience expectations.
      </p>
      <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
        On the technical side, I implemented the front-end and back-end functionality, building a robust system to manage streaming, schedules, and content updates efficiently. This included setting up a content management workflow so the team could upload and organize broadcasts without technical support. The result is a seamless, user-friendly platform that connects the church with its audience while supporting future growth and content expansion.
      </p>
    </div>
  )}
</ProjectCard>
              <div className="hidden lg:block" />
            </div>
          </div>
        )}

        {/* APPS */}
        {activeCategory === "apps" && (
          <div className="flex-1 flex flex-col py-8">
  <div className="max-w-6xl mx-auto w-full px-8 mb-8">
    <p className="text-4xl font-bold leading-tight">
      <span className="text-muted-foreground">From utility to play: </span>
      <span className="text-foreground">apps that matter </span>
      <span className="text-muted-foreground">to users.</span>
    </p>
    <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
  </div>
            <div className="flex-1 flex items-center justify-center">
              <div
                className="relative cursor-pointer group"
                onClick={() => navigate("/ootie-case-story")}
              >
                <img
                  src={productImage}
                  alt="Ootie App"
                  className="max-w-full h-auto transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
                  style={{ maxHeight: "60vh", background: "transparent" }}
                />
                {/* Simple URL preview on hover */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-4 text-xs text-foreground/70 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  /ootie-case-story
                </span>
              </div>
            </div>
          </div>
        )}

        {/* PET PROJECTS */}
        {activeCategory === "pet-projects" && (
          <div className="flex-1 py-8">
            <div className="max-w-6xl mx-auto mb-8">
              <p className="text-4xl font-bold leading-tight">
                <span className="text-muted-foreground">family, friends and mines: </span>
              </p>
            </div>

            {/* slideshow carousel – arrows inside container */}
            <div className="max-w-6xl mx-auto mb-10">
              <div className="relative rounded-2xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                <div
                  className="relative w-full h-[450px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentProject.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{currentProject.title}</h2>
                    <p className="text-sm leading-relaxed text-white/85 max-w-lg mb-4">{currentProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {currentProject.techStack.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white/90 rounded-full border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    {currentProject.live !== "#" && (
                      <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm" asChild>
                        <a href={currentProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /><span>View Live</span>
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* arrows inside container */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/40 text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/40 text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* pagination dots */}
              <div className="flex justify-center gap-2 mt-6">
                {filteredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePaginationClick(i)}
                    className={`w-8 h-1 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* three static containers below carousel */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProjectCard title="Personal Portfolio" subtitle="this very site you're on<br />React • TypeScript • Tailwind" live="/" />
              <ProjectCard title="Soon…" subtitle="next fun project<br />—" live="#" />
              <ProjectCard title="Soon…" subtitle="another fun project<br />—" live="#" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
