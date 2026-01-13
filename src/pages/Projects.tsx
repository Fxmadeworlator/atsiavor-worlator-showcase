// src/pages/Projects.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectAgtv from "@/assets/project-agtv.jpg";
import projectMaxwell from "@/assets/project-maxwell.jpg";
import projectOotie from "@/assets/project-ootie.jpg";

type Category = "projects" | "apps" | "pet-projects";

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
    description: "A dynamic online platform for AGTV that brings viewers together, showcases uplifting content, and keeps the community connected. Designed for seamless updates and smooth multimedia experiences.",
    techStack: ["HTML", "Node.js", "MongoDB"],
    image: projectAgtv,
    live: "https://agtv.vercel.app/ ",
    category: "projects",
  },
  {
    title: "Maxwell's Portfolio",
    description: "A sleek portfolio showcasing Max's unique eye for detail, capturing stories through clean, expressive photography across portraits, events, and creative shoots.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: projectMaxwell,
    live: "https://maxwellandoh.vercel.app/ ",
    category: "projects",
  },
  {
    title: "Elibon Events and Deco.",
    description: "A contemporary event and décor brand transforming every space into a beautifully curated experience.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: "📚",
    live: "#",
    category: "projects",
  },
  {
    title: "Podcast Series",
    description: "A podcast platform featuring tech discussions, interviews with industry professionals, and insights into the world of software development.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: "🎙️",
    live: "#",
    category: "projects",
  },
  // Apps category
  {
    title: "Ootie",
    description: "A modern outfit planning and wardrobe management app that helps users organize their clothing collection and create stylish outfits effortlessly.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: projectOotie,
    live: "https://ootie-web.vercel.app/ ",
    category: "apps",
  },
  // Pet Projects category
  {
    title: "Personal Portfolio",
    description: "This very website you're looking at! A clean, minimal portfolio showcasing my work and journey as a developer.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "🌐",
    live: "/",
    category: "pet-projects",
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "Projects", value: "projects" },
  { label: "Apps", value: "apps" },
  { label: "Pet Projects", value: "pet-projects" },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("projects");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isMouseOverSidebarRef = useRef(false);
  const isInteractingRef = useRef(false);

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  // Function to handle any user interaction
  const handleUserInteraction = useCallback(() => {
    isInteractingRef.current = true;
    setIsSidebarCollapsed(false);
    
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 100);
  }, []);

  // Mouse detection with precise container boundaries
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sidebarRef.current) return;

      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Check if mouse is actually inside the sidebar container
      const isOverSidebar = 
        mouseX >= sidebarRect.left && 
        mouseX <= sidebarRect.right && 
        mouseY >= sidebarRect.top && 
        mouseY <= sidebarRect.bottom;

      const wasMouseOverSidebar = isMouseOverSidebarRef.current;
      
      // Update mouse over state
      isMouseOverSidebarRef.current = isOverSidebar;

      // Expand when mouse is over the sidebar (immediate)
      if (isOverSidebar) {
        setIsSidebarCollapsed(false);
      } else if (wasMouseOverSidebar && !isOverSidebar && !isInteractingRef.current) {
        // Mouse just left the sidebar container - collapse immediately
        setIsSidebarCollapsed(true);
      }

      // Proximity expansion (50px) when collapsed
      if (isSidebarCollapsed && !isOverSidebar) {
        const distanceX = Math.max(
          0,
          Math.max(sidebarRect.left - mouseX, mouseX - sidebarRect.right)
        );
        const distanceY = Math.max(
          0,
          Math.max(sidebarRect.top - mouseY, mouseY - sidebarRect.bottom)
        );
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 50) {
          setIsSidebarCollapsed(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isSidebarCollapsed, handleUserInteraction]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    handleUserInteraction();
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    handleUserInteraction();
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    handleUserInteraction();
  };

  const handlePaginationClick = (index: number) => {
    setCurrentIndex(index);
    handleUserInteraction();
  };

  const currentProject = filteredProjects[currentIndex];
  const isImageUrl = currentProject?.image?.startsWith("/") || currentProject?.image?.startsWith("http") || currentProject?.image?.includes("assets");

  const getCategoryTitle = () => {
    const cat = categories.find(c => c.value === activeCategory);
    return cat?.label || "Projects";
  };

  const toggleProjectExpansion = (projectTitle: string) => {
    setExpandedProject(expandedProject === projectTitle ? null : projectTitle);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Project Categories Navigation - Left Side */}
      <aside 
        ref={sidebarRef}
        className={`fixed left-24 top-0 h-screen flex items-center justify-center z-40 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-16' : 'w-48'
        }`}
      >
        <nav className={`flex flex-col gap-2 p-3 bg-nav-bg/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg w-full transition-all duration-300`}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ease-out hover:translate-x-1 ${
                activeCategory === category.value 
                  ? 'text-nav-item-active bg-secondary font-medium' 
                  : 'text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary'
              }`}
            >
              <span className="text-muted-foreground">/</span>
              <span className={`whitespace-nowrap transition-all duration-300 ${
                isSidebarCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
              }`}>
                {category.label.toLowerCase()}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="min-h-screen flex flex-col px-8">
        {/* Top left title - only show for projects category */}
        {activeCategory === "projects" && (
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold">/projects</h1>
            <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
          </div>
        )}

        {/* Projects category with expandable container */}
        {activeCategory === "projects" && (
          <div className="flex-1 py-8">
            {/* Intro text - same size as /projects */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="text-left">
                <p className="text-4xl font-bold leading-tight">
                  <span className="text-muted-foreground">I've worked as a hands-on</span>
                  <br />
                  <span className="text-foreground">web developer</span>
                  <span className="text-muted-foreground">, delivering </span>
                  <span className="text-foreground">production-ready</span>
                  <span className="text-muted-foreground"> websites for:</span>
                </p>
              </div>
            </div>

            {/* Projects grid with space for future projects */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AGTV Container */}
                <div className="bg-gray-100 rounded-lg border border-gray-200 p-8 shadow-sm" style={{ fontFamily: 'Arimo, sans-serif', fontWeight: 400 }}>
                  <div className="text-left space-y-3 mb-6">
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Arimo, sans-serif', fontWeight: 700, color: '#2a2a2a' }}>AGTV</h3>
                    <p className="text-xl text-muted-foreground">
                      web design and developer<br />
                      2026 - Present
                    </p>
                  </div>
                  
                  {/* Action buttons row */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`text-blue-500 hover:text-blue-600 transition-transform rounded-full p-3 bg-white shadow-sm ${
                        expandedProject === "AGTV" ? 'rotate-45' : ''
                      }`}
                      onClick={() => toggleProjectExpansion("AGTV")}
                    >
                      <Plus className="w-7 h-7" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full px-6 py-3 bg-white shadow-sm"
                      style={{ color: '#2a2a2a', fontWeight: 500, fontSize: '1.1rem' }}
                      asChild
                    >
                      <a href="https://agtv.vercel.app/" target="_blank" rel="noopener noreferrer">
                        view work
                      </a>
                    </Button>
                  </div>
                  
                  {/* Expanded content - Two paragraphs as requested */}
                  {expandedProject === "AGTV" && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-muted-foreground mb-4" style={{ fontSize: '1.1rem' }}>
                        I designed and developed the official website for Assemblies of God TV Ghana, creating a responsive platform that centralizes all content for viewers. The site features live streaming, scheduled programming, and on-demand content, ensuring users can easily access broadcasts and updates from any device. I handled the overall design, ensuring a clean and accessible interface that aligns with the brand and audience expectations.
                      </p>
                      <p className="text-muted-foreground" style={{ fontSize: '1.1rem' }}>
                        On the technical side, I implemented the front-end and back-end functionality, building a robust system to manage streaming, schedules, and content updates efficiently. This included setting up a content management workflow so the team could upload and organize broadcasts without technical support. The result is a seamless, user-friendly platform that connects the church with its audience while supporting future growth and content expansion.
                      </p>
                    </div>
                  )}
                </div>

                {/* Space for future projects */}
                <div className="hidden lg:block">
                  {/* Empty space - same size as AGTV container for balance */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Original carousel layout for other categories */}
        {activeCategory !== "projects" && (
          <div className="min-h-screen flex flex-col items-center">
            <div 
              ref={ref}
              className={`max-w-3xl w-full mx-auto pt-[25vh] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl font-bold">/ {getCategoryTitle()}</h1>
                <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
              </div>

              {filteredProjects.length > 0 ? (
                <>
                  {/* Carousel Container */}
                  <div className="relative">
                    {/* Project Card with background image */}
                    <div 
                      className="relative rounded-2xl border border-border min-h-[450px] transition-all duration-500 bg-cover bg-center overflow-hidden"
                      style={{ 
                        boxShadow: 'var(--shadow-card)',
                        backgroundImage: isImageUrl ? `url(${currentProject.image})` : 'none'
                      }}
                    >
                      {/* dark scrim so text is readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                      {/* content pinned to bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        {/* emoji fallback (only when no real image) */}
                        {!isImageUrl && (
                          <div className="w-16 h-16 mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                            {currentProject.image}
                          </div>
                        )}

                        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{currentProject.title}</h2>
                        <p className="text-sm leading-relaxed text-white/85 max-w-lg mb-4">
                          {currentProject.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                          {currentProject.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white/90 rounded-full border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {currentProject.live !== "#" && (
                          <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                            asChild
                          >
                            <a href={currentProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              <span>View Live</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    {filteredProjects.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevProject}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full hover:bg-muted hidden md:flex"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextProject}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full hover:bg-muted hidden md:flex"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Mobile Navigation */}
                  {filteredProjects.length > 1 && (
                    <div className="flex justify-center gap-4 mt-6 md:hidden">
                      <Button variant="ghost" size="icon" onClick={prevProject} className="rounded-full">
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={nextProject} className="rounded-full">
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  )}

                  {/* Pagination Dots */}
                  {filteredProjects.length > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                      {filteredProjects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePaginationClick(index)}
                          className={`w-8 h-1 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-primary' 
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center text-muted-foreground py-16">
                  <p>No projects in this category yet.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;
