import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="w-full max-w-6xl py-16 px-8 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
        <p className="text-muted-foreground mb-8">
          I document my learnings once a month. I would love to share them with you over mail.<br />
          No bulls**t. No spam. Straight up value.
        </p>
        
        <div className="flex gap-3 max-w-xl mx-auto mb-12">
          <Input 
            type="email" 
            placeholder="name@email.com"
            className="h-12 rounded-full border-border"
          />
          <Button size="lg" className="rounded-full px-8 whitespace-nowrap">
            Subscribe
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
