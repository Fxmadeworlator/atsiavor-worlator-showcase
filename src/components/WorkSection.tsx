import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import leedsBecketImage from "@/assets/leeds-becket.jpg";
import accraTechImage from "@/assets/accra-tech.jpg";
import presecImage from "@/assets/presec.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timelineItems = [
  {
    id: 1,
    title: "Leeds Becket University",
    period: "(2025 - Present)",
    icon: "🎓",
    image: leedsBecketImage,
  },
  {
    id: 2,
    title: "Accra Technical University",
    period: "(2021 - 2024)",
    icon: "🏫",
    image: accraTechImage,
  },
  {
    id: 3,
    title: "Presbyterian Boy's Secondary School",
    period: "(2017 - 2020)",
    icon: "📚",
    image: presecImage,
  },
];

const WorkSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? timelineItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === timelineItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = timelineItems[currentIndex];

  return (
    <section 
      ref={ref}
      className={`w-full max-w-6xl py-16 px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Timeline</h2>
      
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
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">{currentItem.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold">{currentItem.title}</h3>
              <p className="text-sm text-muted-foreground">{currentItem.period}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
            >
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
