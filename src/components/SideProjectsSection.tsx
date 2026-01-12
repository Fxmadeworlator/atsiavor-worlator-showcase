import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const SideProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      icon: "📂",
      title: "/ projects",
      url: "/projects",
    },
    {
      icon: "📱",
      title: "/ apps",
      url: "/projects?category=apps",
    },
    {
      icon: "📚",
      title: "/ pet projects",
      url: "/projects?category=pet-projects",
    },
    {
      icon: "🛡️",
      title: "/ cybersecurity",
      url: "/projects?category=cybersecurity",
    },
  ];

  return (
    <section 
      ref={ref}
      className={`w-full max-w-6xl py-16 px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
      
        <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary transition-all duration-300 group cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1"
            style={{
              animation: `fade-in 0.6s ease-out ${index * 0.15}s backwards, slide-in-right 0.6s ease-out ${index * 0.15}s backwards`,
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {project.icon}
              </div>
              <span className="font-medium transition-colors duration-200 group-hover:text-primary">{project.title}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default SideProjectsSection;
