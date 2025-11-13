import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import projectImage from "@/assets/project-1.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WorkSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`w-full max-w-6xl py-16 px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Timeline</h2>
      
        <div>
        <div 
          className="relative rounded-3xl overflow-hidden mb-6 group cursor-pointer"
          style={{
            background: "var(--gradient-card)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div 
            className="rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[0.98]"
          >
            <img 
              src={projectImage}
              alt="Birla Corporation Project"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">🏢</span>
            </div>
            <div>
              <h3 className="font-semibold">Birla Corporation</h3>
              <p className="text-sm text-muted-foreground">(2025 - Present)</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WorkSection;
