import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import heroImage from "@/assets/about-hero.jpg";
import heroImage2 from "@/assets/about-hero-2.jpg";
import heroImage3 from "@/assets/about-hero-3.jpg";
import heroImage4 from "@/assets/about-hero-4.jpg";
import engineering1 from "@/assets/about-engineering-1.jpg";
import engineering2 from "@/assets/about-engineering-2.jpg";
import shell1 from "@/assets/about-shell-1.jpg";
import shell2 from "@/assets/about-shell-2.jpg";
import civic1 from "@/assets/about-civic-1.jpg";
import civic2 from "@/assets/about-civic-2.jpg";
import evImage from "@/assets/about-ev.jpg";
import teaching1 from "@/assets/about-teaching-1.jpg";
import teaching2 from "@/assets/about-teaching-2.jpg";

const AboutSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className}`}
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        {children}
      </div>
    </section>
  );
};      
const About = () => {
  const typedText = useTypingEffect("Hey there 👋 I’m Etor, I collect ideas and build the brave ones.", 100);
  
  return (
    <div className="bg-background snap-y snap-mandatory overflow-y-scroll h-screen">
      <Sidebar />
      
      {/* Hero Section */}
      <AboutSection className="snap-start">
        <h1 className="text-5xl font-bold mb-6 min-h-[60px]">
          {typedText}
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
        </p>
        <div className="text-base text-muted-foreground space-y-2 mb-8">
          <p>Currently at Leeds Beckett University</p>
          <p>Previously at Accra Technical University</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="rounded-3xl overflow-hidden mt-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <img 
            src={heroImage} 
            alt="Hero background"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <img 
              src={heroImage2} 
              alt="Workshop scene"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
            <img 
              src={heroImage3} 
              alt="Engineering workspace"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}>
            <img 
              src={heroImage4} 
              alt="Technical lab"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </AboutSection>

      {/* My Journey Intro */}
      <AboutSection className="snap-start">
        <h2 className="text-4xl font-bold mb-6">My Journey</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This is a glimpse into my path— from the early days of exploring ideas to the 
          milestones that have shaped my creative and professional life. It's a story of growth, 
          challenges, and continuous learning.
        </p>
      </AboutSection>

      {/* Engineering Foundations */}
      <AboutSection className="snap-start">
        <h3 className="text-3xl font-bold mb-2">Engineering Foundations</h3>
        <p className="text-sm text-muted-foreground mb-8">2017 - 2021</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <img 
              src={engineering1} 
              alt="Engineering workshop"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <img 
              src={engineering2} 
              alt="Modified car"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <p className="text-base text-foreground/90 leading-relaxed">
          I began my career as a Mechanical Engineer, which basically meant spending half my 
          time solving problems and the other half creating new ones by "fixing" things. Working 
          on various projects in college teams, I quickly learned that duct tape is an engineer's 
          best friend and that deadlines are just optimistic suggestions. This period laid a strong 
          foundation for seeing problems from every angle... especially the ones I accidentally 
          caused in the first place. Somewhere along the way, I also developed a not-so-secret 
          love for cars because let's be honest, who doesn't like playing with engines that go 
          "vroom" instead of just solving equations?
        </p>
      </AboutSection>

      {/* Shell Eco-Marathon */}
      <AboutSection className="snap-start">
        <h3 className="text-3xl font-bold mb-2">Infleon Supermileage (Shell Eco-Marathon)</h3>
        <p className="text-sm text-muted-foreground mb-8">2019-2021</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <img 
              src={shell1} 
              alt="Shell Eco-Marathon racing vehicle"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <img 
              src={shell2} 
              alt="Team celebrating with trophy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <p className="text-base text-foreground/90 leading-relaxed">
          In my college days, I designed a reverse clutch mechanism- basically convincing the 
          car to run smarter, not harder. After weeks of trial, error, and arguments over whether 
          zip ties qualify as "aerospace grade," our vehicle finally hit 142.8 kmpl at the Shell Eco-
          Marathon event. That's right, more mileage than my bike, my dad's car, and probably 
          our entire collection combined. Along the way, I mastered teamwork, caffeine 
          management, and the art of fixing problems five minutes before testing.
        </p>
      </AboutSection>

      {/* Honda Civic */}
      <AboutSection className="snap-start">
        <h3 className="text-3xl font-bold mb-2">2008 Honda Civic Modification</h3>
        <p className="text-sm text-muted-foreground mb-8">2021</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <img 
              src={civic1} 
              alt="Modified Honda Civic with LED headlights"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <img 
              src={civic2} 
              alt="Standing with modified Honda Civic"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <p className="text-base text-foreground/90 leading-relaxed">
          My 2008 Honda Civic wasn't just a car, it was a blank canvas begging for personality. I 
          dove into custom modifications like a kid in a candy store, swapping bumpers and 
          upgrading headlights until it looked less "daily commuter" and more "rolling 
          statement." Every bolt tightened and every wire connected wasn't just about 
          aesthetics, it was a crash course in creativity, problem-solving, and learning how to 
          make a car turn heads without turning into a fire hazard. Let's just say, my Civic now 
          has more personality than I do on Monday mornings.
        </p>
      </AboutSection>

      {/* N1 Category EV */}
      <AboutSection className="snap-start">
        <h3 className="text-3xl font-bold mb-2">N1 Category Electric Vehicle</h3>
        <p className="text-sm text-muted-foreground mb-8">2021-2023</p>
        
        <div className="rounded-2xl overflow-hidden mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <img 
            src={evImage} 
            alt="N1 category electric vehicle"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <p className="text-base text-foreground/90 leading-relaxed">
          Building an N1 category electric vehicle from scratch was like trying to assemble IKEA 
          furniture... if the furniture could move, beep, and occasionally shock you. From 
          sketching the first designs to manufacturing the final chassis, I learned that "simple" is 
          a relative term, and batteries have a personal vendetta against engineers. Every nut, 
          bolt, and wire was a lesson in patience, creativity, and convincing your brain that yes, 
          that strange buzzing sound is normal. By the end, not only did we have a fully 
          functional electric vehicle, but I also gained a new superpower: the ability to explain EV 
          tech to anyone without making their eyes glaze over... mostly.
        </p>
      </AboutSection>

      {/* Innovating and Leading */}
      <AboutSection className="snap-start">
        <h3 className="text-3xl font-bold mb-2">Innovating and Leading</h3>
        <p className="text-sm text-muted-foreground mb-8">2023-2025</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <img 
              src={teaching1} 
              alt="Teaching CAD and design"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <img 
              src={teaching2} 
              alt="Students with certificates"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <p className="text-base text-foreground/90 leading-relaxed">
          Sharing knowledge about CAD and the manufacturing of EVs with the young 
          generation feels a bit like being a tech wizard showing magic tricks, except the magic 
          is real, and sometimes sparks fly. Guiding them through 3D models, design tweaks, 
          and assembly processes, I get to watch their eyes go from "what is this?" to "wow, I 
          can make it!" It's incredibly rewarding to see curiosity turn into skill, and to know that 
          the next generation might design EVs that are sleeker, faster, and maybe even self-
          driving... all while I quietly hope they don't short-circuit anything in the process.
        </p>
      </AboutSection>

      {/* Continuous Evolution */}
      <AboutSection className="snap-start">
        <h3 className="text-3xl font-bold mb-2">Continuous Evolution</h3>
        <p className="text-sm text-muted-foreground mb-8">2025</p>
        <p className="text-base text-foreground/90 leading-relaxed mb-8">
          Today, I continue to grow as a professional designer, embracing new challenges and 
          exploring advanced design systems and AI-driven products. My commitment to 
          creating meaningful, user-centered designs remains at the core of my work as I look 
          toward the future of design.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center pt-8">
          <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-accent transition-all flex items-center justify-center">
            <span className="text-xl">📷</span>
          </a>
          <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-accent transition-all flex items-center justify-center">
            <span className="text-xl">💼</span>
          </a>
          <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-accent transition-all flex items-center justify-center">
            <span className="text-xl">📘</span>
          </a>
          <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-accent transition-all flex items-center justify-center">
            <span className="text-xl">▶️</span>
          </a>
        </div>
      </AboutSection>
    </div>
  );
};

export default About;
