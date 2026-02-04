import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <div className="min-h-screen bg-background">
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
          
          <form className="space-y-6">
            <div>
              <Input 
                placeholder="Your Name" 
                className="h-12 rounded-2xl"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Your Email" 
                className="h-12 rounded-2xl"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message"
                className="min-h-32 rounded-2xl"
              />
            </div>
            <Button size="lg" className="rounded-full px-8">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
