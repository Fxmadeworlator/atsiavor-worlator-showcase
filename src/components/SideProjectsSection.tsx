import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const SideProjectsSection = () => {
  const projects = [
    {
      icon: "💬",
      title: "Discord Community for Gamers",
      url: "#",
    },
    {
      icon: "🚗",
      title: "Honda Civic 2008 Modification",
      url: "#",
    },
    {
      icon: "📚",
      title: "Self-Paced Courses Website",
      url: "#",
    },
    {
      icon: "🎙️",
      title: "Podcast Series",
      url: "#",
    },
  ];

  return (
    <section className="w-full max-w-6xl py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Side Projects</h2>
      
        <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-2xl">
                {project.icon}
              </div>
              <span className="font-medium">{project.title}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
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
