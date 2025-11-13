import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-16 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full">
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
