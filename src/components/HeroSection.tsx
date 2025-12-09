import { Button } from "./ui/button";
import profileHero from "@/assets/profile-hero.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

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
        
        <Button 
          size="lg"
          className="rounded-full px-8"
        >
          Contact
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
