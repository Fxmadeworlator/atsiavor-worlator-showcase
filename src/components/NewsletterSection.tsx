import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
          Don't leave your email for attendance. Seriously. Don't. (But if you do… nice.)
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
            <XIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
