import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-16 flex flex-col items-center justify-center">
        <div 
          ref={ref}
          className={`max-w-4xl w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Project showcase coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Projects;
