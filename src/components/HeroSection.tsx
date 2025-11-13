import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-3xl">
        <div className="mb-6">
          <img 
            src={profileImage} 
            alt="Atsiavor Worlator"
            className="w-24 h-24 rounded-full object-cover shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">Hey, Atsiavor here</h1>
        <p className="text-lg text-muted-foreground mb-6">How's your Thursday?</p>
        
        <p className="text-base text-foreground/90 leading-relaxed mb-8">
          Hey there! I'm Atsiavor Worlator, your friendly neighborhood CAD wizard from the 
          mystical land of Haridwar (yep, the place considered as a gateway to lord). With 5+ 
          years of doodling... uh, I mean designing, I turn "wait, how?" ideas into "wow, that's 
          slick!" reality. Whether I'm jamming with a team of quirky geniuses or flying solo like a 
          design ninja, I bring a mix of creativity, precision, and just enough magic to make 
          projects shine.
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
