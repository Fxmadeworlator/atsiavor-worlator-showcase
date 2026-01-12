// src/pages/Projects.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectAgtv from "@/assets/project-agtv.jpg";
import projectMaxwell from "@/assets/project-maxwell.jpg";
import projectOotie from "@/assets/project-ootie.jpg";

type Category = "projects" | "apps" | "pet-projects" | "cybersecurity";

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
    live: "https://agtv.vercel.app/",
    category: "projects",
  },
  {
    title: "Maxwell's Portfolio",
    description: "A sleek portfolio showcasing Max's unique eye for detail, capturing stories through clean, expressive photography across portraits, events, and creative shoots.",
    techStack: ["HTML", "CSS", "Node.js"],
    image: projectMaxwell,
    live: "https://maxwellandoh.vercel.app/",
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
    live: "https://ootie-web.vercel.app/",
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
  // Cybersecurity category
  {
    title: "CTF Write-ups",
    description: "A collection of Capture The Flag competition write-ups documenting my journey through various security challenges and vulnerabilities.",
    techStack: ["Python", "Bash", "Wireshark"],
    image: "🚩",
    live: "#",
    category: "cybersecurity",
  },
  {
    title: "Security Research",
    description: "Ongoing research into web application security, penetration testing methodologies, and vulnerability assessment techniques.",
    techStack: ["Burp Suite", "OWASP", "Kali Linux"],
    image: "🔒",
    live: "#",
    category: "cybersecurity",
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "Projects", value: "projects" },
  { label: "Apps", value: "apps" },
  { label: "Pet Projects", value: "pet-projects" },
  { label: "Cybersecurity", value: "cybersecurity" },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("projects");

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const currentProject = filteredProjects[currentIndex];
  const isImageUrl = currentProject?.image?.startsWith("/") || currentProject?.image?.startsWith("http") || currentProject?.image?.includes("assets");

  const getCategoryTitle = () => {
    const cat = categories.find(c => c.value === activeCategory);
    return cat?.label || "Projects";
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Project Categories Navigation - Left Side */}
      <aside className="fixed left-24 top-0 h-screen flex items-center justify-center z-40">
        <nav className="flex flex-col gap-2 p-3 bg-nav-bg/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
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
              <span className="whitespace-nowrap">{category.label.toLowerCase()}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="min-h-screen flex flex-col items-center px-8">
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
                  className="relative rounded-2xl border border-border p-8 min-h-[400px] transition-all duration-500 bg-cover bg-center overflow-hidden"
                  style={{ 
                    boxShadow: 'var(--shadow-card)',
                    backgroundImage: isImageUrl ? `url(${currentProject.image})` : 'none'
                  }}
                >
                  {/* dark scrim so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* content stacked on top of image */}
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center h-full">
                    {/* left - icon (emoji fallback) */}
                    <div className="flex items-center justify-center">
                      {!isImageUrl && (
                        <div className="w-32 h-32 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-6xl">
                          {currentProject.image}
                        </div>
                      )}
                    </div>

                    {/* right - text + CTA */}
                    <div className="space-y-4 text-white">
                      <h2 className="text-3xl font-bold">{currentProject.title}</h2>
                      <p className="text-sm leading-relaxed opacity-90">
                        {currentProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {currentProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {currentProject.live !== "#" && (
                        <div className="pt-4">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="gap-2"
                            asChild
                          >
                            <a href={currentProject.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              View site
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
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
                      onClick={() => setCurrentIndex(index)}
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
      </main>
    </div>
  );
};

export default Projects;
