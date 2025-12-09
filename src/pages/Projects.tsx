import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Discord Community for Gamers",
    description: "A vibrant community platform for gamers to connect, share strategies, and organize gaming sessions. Built with modern technologies for real-time communication.",
    techStack: ["Discord.js", "Node.js", "MongoDB"],
    image: "💬",
    github: "#",
    live: "#",
  },
  {
    title: "Honda Civic 2008 Modification",
    description: "A comprehensive documentation of my Honda Civic modification journey, including performance upgrades, aesthetic changes, and technical improvements.",
    techStack: ["Automotive", "Engineering", "Documentation"],
    image: "🚗",
    github: "#",
    live: "#",
  },
  {
    title: "Self-Paced Courses Website",
    description: "An e-learning platform featuring self-paced courses with progress tracking, interactive content, and certificate generation upon completion.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    image: "📚",
    github: "#",
    live: "#",
  },
  {
    title: "Podcast Series",
    description: "A podcast platform featuring tech discussions, interviews with industry professionals, and insights into the world of software development.",
    techStack: ["Audio Production", "Web Development", "Content Creation"],
    image: "🎙️",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="min-h-screen flex flex-col items-center px-8">
        <div 
          ref={ref}
          className={`max-w-3xl w-full mx-auto pt-[25vh] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold">/ Projects</h1>
            <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Project Card */}
            <div 
              className="bg-card rounded-2xl border border-border p-8 min-h-[400px] transition-all duration-500"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Icon/Preview */}
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 bg-muted rounded-2xl flex items-center justify-center text-6xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    {currentProject.image}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">{currentProject.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentProject.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
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
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button variant="ghost" size="icon" onClick={prevProject} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={nextProject} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
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
        </div>
      </main>
    </div>
  );
};

export default Projects;
