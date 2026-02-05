import { useState, useEffect } from "react";
import ProjectsSidebar from "@/components/ProjectsSidebar";
import MobileNav from "@/components/MobileNav";
import { ChevronLeft, ChevronRight, ExternalLink, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectOotie from "@/assets/project-ootie.jpg";
import projectAgtv from "@/assets/project-agtv.jpg";
import projectMaxwell from "@/assets/project-maxwell.jpg";
import project1 from "@/assets/project-1.jpg";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "This very website you're looking at! A clean, minimal portfolio showcasing my work and journey as a developer.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: project1,
    live: "/",
  },
  {
    title: "Ootie",
    description:
      "A pet care and social app that helps owners manage their pets' health, share responsibilities with family, and discover trusted pet services.",
    techStack: ["React Native", "TypeScript", "Supabase"],
    image: projectOotie,
    live: "https://ootie-web.vercel.app/",
  },
  {
    title: "AGTV",
    description:
      "A streaming platform concept designed for African content creators and viewers to connect through authentic storytelling.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: projectAgtv,
    live: "#",
  },
  {
    title: "Maxwell",
    description:
      "An AI-powered assistant project exploring natural language processing and conversational interfaces.",
    techStack: ["Python", "OpenAI", "FastAPI"],
    image: projectMaxwell,
    live: "#",
  },
];

export default function PetProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProjectExpansion = (title: string) =>
    setExpandedProject((prev) => (prev === title ? null : title));

  const ProjectCard = ({
    title,
    subtitle,
    live = "#",
    children,
  }: {
    title: string;
    subtitle: string;
    live?: string;
    children?: React.ReactNode;
  }) => {
    const isOpen = expandedProject === title;

    return (
      <div
        className="bg-gray-100 rounded-lg border border-gray-200 p-8 shadow-sm"
        style={{ fontFamily: "Arimo, sans-serif", fontWeight: 400 }}
      >
        <div className="text-left space-y-3 mb-6">
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "Arimo, sans-serif", fontWeight: 700, color: "#2a2a2a" }}
          >
            {title}
          </h3>
          <p
            className="text-xl text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:text-blue-600 transition-transform rounded-full p-3 bg-white shadow-sm"
            onClick={() => toggleProjectExpansion(title)}
            aria-label={isOpen ? "collapse" : "expand"}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Plus className="w-7 h-7" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-6 py-3 bg-white shadow-sm"
            style={{ color: "#2a2a2a", fontWeight: 500, fontSize: "1.1rem" }}
            asChild
          >
            <a href={live} target="_blank" rel="noopener noreferrer">
              view work
            </a>
          </Button>
        </div>

        {isOpen && children}
      </div>
    );
  };

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((i) => (i + 1) % projects.length);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <ProjectsSidebar />
      <MobileNav />

      <main className="min-h-screen flex flex-col px-8 lg:ml-12">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold">/pet-projects</h1>
          <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
        </div>

        <div className="flex-1 py-8">
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-4xl font-bold leading-tight">
              <span className="text-muted-foreground">family, friends and mines: </span>
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <div className="relative rounded-2xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="relative w-full h-[500px] overflow-hidden">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className={`text-2xl md:text-3xl font-bold leading-tight mb-3 transition-all duration-500 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}>
                    {currentProject.title}
                  </h2>
                  <p className={`text-sm leading-relaxed text-white/85 max-w-lg mb-4 transition-all duration-500 delay-75 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}>
                    {currentProject.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mb-5 transition-all duration-500 delay-100 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}>
                    {currentProject.techStack.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white/90 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  {currentProject.live !== "#" && (
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className={`bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm transition-all duration-500 delay-150 ${
                        isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                      }`} 
                      asChild
                    >
                      <a href={currentProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" /><span>View Live</span>
                      </a>
                    </Button>
                  )}
                </div>

                {projects.length > 1 && (
                  <>
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
                  </>
                )}
              </div>
            </div>

            {projects.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Cards Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            <ProjectCard
              title="Ootie App"
              subtitle="pet care & social app<br />2024 - Present"
              live="https://ootie-web.vercel.app/"
            >
              {expandedProject === "Ootie App" && (
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                    A comprehensive pet care and social app that helps owners manage their pets' health, share responsibilities with family, and discover trusted pet services in their area.
                  </p>
                </div>
              )}
            </ProjectCard>

            <ProjectCard
              title="Portfolio Site"
              subtitle="personal showcase<br />2024"
              live="/"
            >
              {expandedProject === "Portfolio Site" && (
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                    This very website! A clean, minimal portfolio built to showcase my work and journey as a developer using React, TypeScript, and Tailwind CSS.
                  </p>
                </div>
              )}
            </ProjectCard>

            <div className="lg:col-span-2">
              <ProjectCard
                title="Experimental Projects"
                subtitle="side experiments & learning<br />ongoing"
                live="#"
              >
                {expandedProject === "Experimental Projects" && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                    <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                      A collection of smaller experiments, prototypes, and learning projects exploring new technologies and ideas.
                    </p>
                  </div>
                )}
              </ProjectCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
