import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import confetti from "canvas-confetti";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const triggerCelebration = () => {
    // Fire confetti from the center
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      triggerCelebration();
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

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
        
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl mx-auto mb-12">
          <Input 
            type="email" 
            placeholder="name@email.com"
            className="h-12 rounded-full border-border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitted}
          />
          <Button 
            type="submit" 
            size="lg" 
            className={`rounded-full px-8 whitespace-nowrap transition-all duration-300 ${
              isSubmitted 
                ? "bg-green-500 hover:bg-green-500 text-white" 
                : ""
            }`}
            disabled={isSubmitted}
          >
            {isSubmitted ? "🎉 Marked!" : "was here!"}
          </Button>
        </form>
        
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/worlator_/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <Instagram className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://x.com/worlator_" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <XIcon />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
