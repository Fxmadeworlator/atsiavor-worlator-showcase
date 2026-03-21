import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "@/hooks/use-toast";

const CargoCarSVG = () => (
  <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <rect x="10" y="5" width="90" height="30" rx="3" className="fill-primary" />
    {/* Roof */}
    <rect x="8" y="2" width="94" height="6" rx="2" className="fill-primary" opacity="0.8" />
    {/* Door lines */}
    <line x1="40" y1="8" x2="40" y2="32" className="stroke-primary-foreground" strokeWidth="1.5" />
    <line x1="70" y1="8" x2="70" y2="32" className="stroke-primary-foreground" strokeWidth="1.5" />
    {/* Undercarriage */}
    <rect x="15" y="35" width="80" height="4" rx="1" className="fill-foreground" opacity="0.6" />
    {/* Wheels */}
    <g className="animate-spin-wheels">
      <circle cx="30" cy="43" r="6" className="fill-foreground" />
      <circle cx="30" cy="43" r="2" className="fill-background" />
    </g>
    <g className="animate-spin-wheels">
      <circle cx="80" cy="43" r="6" className="fill-foreground" />
      <circle cx="80" cy="43" r="2" className="fill-background" />
    </g>
  </svg>
);

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isSending, setIsSending] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      toast({ title: "Message sent!", description: "Your message has been delivered." });
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Sidebar />
      <MobileNav />
      <main className="p-8 md:p-16 flex flex-col items-center justify-center">
        <div
          ref={ref}
          className={`max-w-2xl w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind? Let's talk about it.
          </p>

          <form className="space-y-6" onSubmit={handleSend}>
            <div>
              <Input placeholder="Your Name" className="h-12 rounded-2xl" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="h-12 rounded-2xl" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="min-h-32 rounded-2xl" />
            </div>

            <div className={isSending ? "animate-roll-off-right" : ""}>
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-8"
                disabled={isSending}
              >
                {isSending ? <CargoCarSVG /> : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
