import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`w-full max-w-6xl py-16 px-8 border-t border-border transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Attendance</h2>
        <p className="text-muted-foreground mb-8">
          Don’t leave your email for attendance. Seriously. Don’t. (But if you do… nice.)
        </p>
        
        <div className="flex gap-3 max-w-xl mx-auto mb-12">
          <Input 
            type="email" 
            placeholder="name@email.com"
            className="h-12 rounded-full border-border"
          />
          <Button size="lg" className="rounded-full px-8 whitespace-nowrap">
            was here!
          </Button>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Instagram className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Facebook className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
            <Youtube className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
