import { Button } from "./ui/button";
import profileHero from "@/assets/profile-hero.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";

const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    const mornings = [
      "Good morning ☀️ Hope your coffee's strong!",
      "Morning! Ready to build something cool?",
      "Rise and shine ☀️ What's on the agenda?",
    ];
    return mornings[Math.floor(Math.random() * mornings.length)];
  }
  if (hour >= 12 && hour < 17) {
    const afternoons = [
      "Good afternoon 👋 How's your day going?",
      "Hey! Afternoon vibes hitting right?",
      "Hope your afternoon's going smooth 🚀",
    ];
    return afternoons[Math.floor(Math.random() * afternoons.length)];
  }
  if (hour >= 17 && hour < 21) {
    const evenings = [
      "Good evening 🌅 Winding down or just getting started?",
      "Evening! Still got some energy left? 💪",
      "Hey, nice evening isn't it? 🌇",
    ];
    return evenings[Math.floor(Math.random() * evenings.length)];
  }
  const nights = [
    "Still up? Night owls build the best things 🦉",
    "Late night coding session? I respect that 🌙",
    "Hey night owl 🌙 Can't sleep either?",
  ];
  return nights[Math.floor(Math.random() * nights.length)];
};

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  const [isFlying, setIsFlying] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const greeting = useMemo(() => getTimeGreeting(), []);

  const handleSayHi = () => {
    if (isFlying) return;
    
    setIsFlying(true);
    
    // After animation completes, navigate to contact
    setTimeout(() => {
      navigate("/contact");
    }, 1200);
  };

  return (
    <section 
      ref={ref}
      className={`w-full max-w-6xl min-h-[calc(100vh-2rem)] py-16 px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto w-full pt-[25vh]">
        <img 
          src={profileHero}
          alt="Etor"
          className="w-20 h-20 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-300"
        />
        <h1 className="text-4xl font-bold mb-2">Hey, Etor here</h1>
        <p className="text-lg text-muted-foreground mb-6">How's your day going?</p>
        
        <p className="text-base text-foreground/90 leading-relaxed mb-8">
          Hey There! My name is Worlator "Etor" Atsiavor. I'm a student with 3–5 years of coding experience, depending on whether you count the days I spent debugging… which absolutely should count because that's where the real learning happens.
      
          I build software, break software, fix the software I broke, and sometimes pretend I meant to do it all along. I love tech, cybersecurity, and anything that lets me turn caffeine into code.
        
          If you're here to see my projects, scroll down.
          If you're here to judge my life choices… at least look at the projects first.
        </p>
        
        <div className="relative">
          <Button 
            ref={buttonRef}
            size="lg"
            className={`rounded-full px-8 transition-all duration-500 ${
              isFlying 
                ? "opacity-0 scale-0" 
                : "opacity-100 scale-100"
            }`}
            onClick={handleSayHi}
            disabled={isFlying}
          >
            Say Hi
          </Button>
          
          {/* Flying Paper Airplane */}
          {isFlying && (
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fly-to-contact"
            >
              <Send className="w-6 h-6 text-primary animate-spin-slow" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
